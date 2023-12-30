import "./home.css";
import Image from "../images/3dwoman.png"
import { TypeAnimation } from 'react-type-animation';
import { Link } from "react-router-dom";

export default function Home() {
    return (

        <>
            <div class="mid">
                <div class="left">

                    <div class="leftside ">
                        <span class="para">
                            <span class="hi">Hi, I'm</span>
                            <span class="color" style={{color: "#27ae60"}} > Asmita Sagarkar.</span>
                            <br />
                            <span class="iam"> I'm a </span>
                            


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
                                <Link className="btn1 commonbutton button1" id="btn1" to="https://drive.google.com/file/d/1feQrqfPEgfBONcozc1SyTZ5vEPcwPLH_/view?usp=sharing"  >
                                    Download my CV</Link>
                                    <Link className="btn2 commonbutton button1" id="btn2" to="/About"  >
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