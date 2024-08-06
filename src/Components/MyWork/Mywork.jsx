import React from 'react'
import "./MyWork.css"
import theme_pattern from "../../assets/theme_pattern.svg"
import Myworkdata from './Myworkdata'

const Mywork = () => {
  return (
    <div id='work' className='mywork'>
        <div className="mywork-title">
            <h1>My latest Work</h1>
            <img src={theme_pattern} alt/>
        </div>
        <div className="mywork-container">
            {Myworkdata.map((work,index)=>{
              return<img  key={index}src={work.w_img} alt=""/>
            })}

        </div>
      
    </div>
  )
}

export default Mywork