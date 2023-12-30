import Cp from "../images/c.png";
import Cpp from "../images/c++.png";
import Java from "../images/Java1.png";
import Nodejs from "../images/nodejs.png";
import Html from "../images/html.png";
import Css from "../images/css.png";
import Javascript from "../images/js.png";
import Express from "../images/express.png";
import Mongodb from "../images/mongodb.png";
import Mongoose from "../images/mongoose.png";
import React from "../images/react.png";
import Postman from "../images/postman.png";
import Git from "../images/git.png";
import Robo from "../images/robo 3t.png";
import Image from "../images/aboutBg.png";
import Sql from "../images/mysql.png";
import "./about.css";








export default function About(){
    <>
    <div>
    <div class="first">
        <div class="heading1"><span class="flicker">A</span><span>bo</span><span
                class="flicker">u</span><span>t</span><span> Me</span><span class="flicker">!</span></div>
        <div class="bg"></div>
        <img class="img" src={Image} alt="" />
    </div>
    <div class="mid">
        <div class="left">
            <div class="leftinner">
                <img src={Image} alt="" />
            </div>
        </div>
        <div class="right">
            <div class="rightinner">
                <h2>Welcome to my world of passion and potential!🌟</h2>
                <p>Greetings! I'm <span style={{color: "#27ae60"}}>Asmita Sagarkar</span>, a highly motivated <span
                        style={{color: "#27ae60"}}>web developer</span> with a passion for creating engaging and
                    user-friendly websites. Currently pursuing my B.Tech degree in the Computer Science with a focus on
                    web development, I thrive on turning ideas into functional and aesthetically
                    pleasing online platforms.</p>

                <p>Through my journey as a fourth-year student, I've honed my skills in HTML, CSS, JavaScript, and
                    various web development frameworks. My love for problem-solving and continuous learning drives me to
                    stay up-to-date with the latest industry trends and technologies.</p>

                <p>When I'm not coding, you'll find me experimenting with design concepts or collaborating with
                    like-minded individuals on exciting projects. My goal is to contribute to the digital realm, leaving
                    a positive impact on users and clients alike.</p>

                <p>Join me on this tech-driven adventure as I embark on new challenges and opportunities in the web
                    development world. Let's connect and build something amazing together! 🚀</p>
            </div>

        </div>
    </div>
    <div class="last">
        <h1>Welcome to My Skill Set!</h1>
        <p>Unlocking potential, one skill at a time - as a fresh and motivated <span style={{color: "#27ae60"}}>Front-End
                Developer</span> enthusiast, I proudly present the foundations of my abilities, ready to take on new
            challenges and make a lasting impact.</p>
        <div class="lastinner">
            <img src={Cp} alt="" />
            <img src={Cpp} alt="" />
            <img src={Java} alt="" />
            <img src={Html} alt="" />
            <img src={Css} alt="" />
            <img src={Javascript} alt="" />
            <img src={React} alt="" />
            <img src={Nodejs}  alt="" />
            <img src={Express}  alt="" />
            <img src={Sql} alt="" />
            <img src={Mongodb}  alt="" />
            <img src={Mongoose} alt="" />
            <img src={Git}  alt="" />
            <img src={Postman} alt="" />
            <img src={Robo}  alt="" />
        </div>

    </div>
    </div>
    
    </>
}