import React from 'react'
import style from '../../styles/Dashboard.module.css'
import Globe from './Globe'
import SideBar from './SideBar'
const Dashboard = () => {
  return (

    <div className={style.container}>
      <div className={style.parent}>
        <div className={style.header}>
          <h1 className={style.heading}> Weather App</h1>
        </div>
        <div className={style.sideBar}>
         <SideBar/>
        </div>
        <div className={style.rightBar}>
      
          <div className={style.globe}>
            <Globe />

          </div>
        </div>
      </div>


    </div>

  )
}

export default Dashboard