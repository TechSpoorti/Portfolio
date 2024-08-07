import React from 'react'
import "./About.css"
import theme_pattern from "../../assets/theme_pattern.svg"
import profile from "../../assets/profile.jpeg"

const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About</h1>
                <img src={theme_pattern} alt='' />
            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src={profile} alt='' />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I am an aspiring Java Developer with experience in Spring Boot and Maven Project Management.
                        I am proficient in SQL and Data Structures, and I am a recent graduate with expertise in HTML, JavaScript, and React.js.I am passionate about building responsive and dynamic web applications and am eager to contribute my skills to innovative projects.</p>


                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"80%"}}/></div>
                        <div className="about-skill"><p>React-js</p><hr style={{width:"80%"}}/></div>
                        <div className="about-skill"><p>Java</p><hr style={{width:"80%"}}/></div>
                        <div className="about-skill"><p>python</p><hr style={{width:"50%"}}/></div>
                        <div className="about-skill"><p>Django</p><hr style={{width:"50%"}}/></div>
                        <div className="about-skill"><p>js</p><hr style={{width:"70%"}}/></div>
                        <div className="about-skill"><p>Springboot</p><hr style={{width:"50%"}}/></div>
                        <div className="about-skill"><p>SQL</p><hr style={{width:"50%"}}/></div>
                    </div>
                </div>
            </div>
            <div className="about-achivement">
                <div className="about-achive">
                    <h1>8 months</h1>
                    <p>Course completed at Kodnest as a Full-Stack Developer with a certificate</p>
                </div>
                <hr/>
                <div className="about-achive">
                    <h1>2 months</h1>
                    <p>Internship at Eleanor</p>
                </div>
                <hr/>
                <div className="about-achive">
                    <h1>4+</h1>
                    <p>Projects & Mini Tasks</p>
                </div>
            </div>
        </div>

    )
}

export default About