import "./home.css";
import Image from "../images/3dwoman.png"
import { TypeAnimation } from 'react-type-animation';
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Home() {
    const [buttonStyle, setButtonStyle] = useState({
        backgroundColor: '#171c23',
        color: 'aliceblue'  
      });
    
      const handleClick = () => {
        setButtonStyle({
          backgroundColor: '#27ae60',
          color: 'aliceblue'
        });
        setTimeout(() => {  
            setButtonStyle({
                backgroundColor: '#171c23',
                color: 'aliceblue'
              });
        }, 500);
      }
      const [btnStyle, setBtnStyle] = useState({
        backgroundColor: '#171c23',
        color: 'aliceblue'  
      });
    
      const handleBtnClick = () => {
        setBtnStyle({
          backgroundColor: '#27ae60',
          color: 'aliceblue'
        });
        setTimeout(() => {  
            setBtnStyle({
                backgroundColor: '#171c23',
                color: 'aliceblue'
              });
        }, 500);
      }

    

    return (


        <>
            <div class="mid">
                <div class="left">

                    <div class="leftside ">
                        <span class="para homespan">
                            <span class="hi homespan">Hi, I'm</span>
                            <span class="color" style={{color: "#27ae60"}} > Asmita Sagarkar.</span>
                            <br />
                            <span class="iam homespan"> I'm a </span>
                            


                            <TypeAnimation id="st"
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'Webdeveloper',
                                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                                    'Programmer',
                                    1000,
                                    'Innovator',
                                    1000,
                                    'Creator',
                                    1000
                                ]}
                                wrapper="span"
                                speed={25}
                                style={{color: "#27ae60"}}
                                
                                repeat={Infinity}
                            />
                            </span>
                            
                            <div class="divintro">
                                <p class="intro">Knowledgeable in HTML, CSS, and JavaScript. Eager to apply skills in building
                                    interactive and visually appealing websites. Quick learner, detail-oriented, and committed to
                                    continuous growth in web development.</p></div>
                            <div className="button">
                                <Link className="btn1 commonbutton button1" id="btn1" to="https://drive.google.com/file/d/1feQrqfPEgfBONcozc1SyTZ5vEPcwPLH_/view?usp=sharing"
                                onClick={handleClick}
                                style={buttonStyle}
                                  >
                                    Download my CV</Link>
                                    <Link className="btn2 commonbutton button1" id="btn2" to="/About" target="_blank"
                                    
                                    onClick={()=>{
                                        setTimeout(() => {
                                            handleBtnClick();
                                        }, 1000);
                                    
                                        }}
                                    style={btnStyle}
                                    >
                                    Read More</Link>
                            </div>
                    </div>
                    <div class="rightside">
                        <img src={Image} alt="loading..." class="image" />
                    </div>
                </div>
            </div>

        </>
    )
}