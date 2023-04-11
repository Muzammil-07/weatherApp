import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';
import img1 from "../images/day.jpg"
import style from "../../styles/SideBar.module.css"



const SideBar = () => {
    
    const [city, setCity] = useState("Karachi");
    const [condition, setCondition] = useState("Loading")
    const [humidity, setHumidity] = useState("loading");
    const [wind, setWind] = useState("Loading");
    const [uvIndex, setUvIndex] = useState("Loading");
    const [feel, setFeel] = useState("Loading");
    const [temp, setTemp] = useState("Loading")
    const [des, setDes] = useState("Loading")
    const [data, setData] = useState();
    const [input, setInput] = useState("")

    

    useEffect(() => {
       
        const getData=async()=>{
            const res = await axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/karachi?unitGroup=us&key=${process.env.API_KEY}&contentType=json`)
            console.log(res.data)
            setData(res.data)
            setCity(res.data.resolvedAddress);
            setTemp(res.data.currentConditions.temp);
            setCondition(res.data.currentConditions.conditions);
            setFeel(res.data.currentConditions.feelslike);
            setWind(res.data.currentConditions.windspeed + "km/h");
            setHumidity(res.data.currentConditions.humidity);
            setUvIndex(res.data.currentConditions.uvindex);
            setDes(res.data.description)
        }
     getData();
    }, [])

    const [zone, setZone] = useState(<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-moon-stars-fill" viewBox="0 0 16 16">
        <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
        <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" />
    </svg>);
    const [background, setBackground] = useState(img1)
    const location = async () => {
        if (input == "") {
            alert("please input City Name")
        } else {
            const res = await axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${input}?unitGroup=us&key=${process.env.API_KEY}&contentType=json`)
            console.log(res.data)
            setData(res.data)
            setCity(res.data.resolvedAddress);
            setTemp(res.data.currentConditions.temp);
            setCondition(res.data.currentConditions.conditions);
            setFeel(res.data.currentConditions.feelslike);
            setWind(res.data.currentConditions.windspeed + "km/h");
            setHumidity(res.data.currentConditions.humidity);
            setUvIndex(res.data.currentConditions.uvindex);
            setDes(res.data.description)
        }
    }
    return (

        <div className={style.parent}>
            <div className={style.parent2}>
                <div className={style.search}>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Enter Your City" aria-label="Enter Your City" onChange={(e) => { setInput(e.target.value) }} aria-describedby="basic-addon2" />
                        <span className=" btn btn-primary input-group-text" id="basic-addon2" onClick={location}>Search</span>
                    </div>

                </div>
                <div className={`${style.body} w-75`}>
                    <div className='row w-100 '>
                        <div className='col-12'>
                            <div>
                                <h2>{city}</h2>
                                <p2>{condition}</p2>
                                <h1>{Math.round((temp - 32) * 5 / 9)}<sup>o</sup></h1>
                            </div>
                        </div>
                        {/* <div className='col-6 '>
                      
                            {zone}
                        </div> */}

                    </div>
                    <div className='row mt-4'>
                        <div className='col-10'>
                            <h2>Air Condition</h2>
                            <div className='row mt-4'>
                                <div className='col-6'> <h4>Real Feel </h4> <h5>{Math.round((feel - 32) * 5 / 9)}<sup>o</sup></h5> </div>
                                <div className='col-6'> <h4>Humidity </h4> <h5>{ }</h5>{humidity} </div>
                            </div>
                            <div className='row mt-4'>
                                <div className='col-6'> <h4>Wind </h4>{wind}</div>
                                <div className='col-6'> <h4>Uv Index </h4> <h5>{uvIndex}</h5> </div>
                            </div>
                            <p>{des}</p>
                        </div>

                    </div>

                </div>
            </div>
        </div>

    )
}

export default SideBar