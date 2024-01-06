import "./project.css";
import {Link} from "react-router-dom"
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import { useCallback, useState } from "react";
import CancelIcon from '@mui/icons-material/Cancel';


export default function Card({details}){

    
    const [onShow,setOnShow]=useState(false);
    const [buttonStyle, setButtonStyle] = useState({
        backgroundColor: '#001C30',
        color: 'aliceblue'  
      });
    
      const handleClick = () => {
        setButtonStyle({
          backgroundColor: 'aliceblue',
          color: '#001C30'
        });
        setTimeout(() => {
            setButtonStyle({
                backgroundColor: '#001C30',
                color: 'aliceblue'
              });
        }, 2000);
      }
    
    
    return (

        <div>
            <div class="projectproject-items">
            <div class="projectimg"  >
                    <img src={details.background} alt="Loading" className="bgimage" />
                </div>

                <div class="projecthover-item">
                    <h3>Project Source</h3>
                    <div class="projecticons">
                        <Link className="projecticon" to={details.github}
                        style={buttonStyle}
                        onClick={handleClick}>{<GitHubIcon />}</Link>
                        <Link className="projecticon" to={details.link}>{<LaunchIcon />}</Link>
                        <button className="projecticon" onClick={()=>setOnShow(true)}>{<TipsAndUpdatesIcon />}</button>
                    </div>  
                </div>

                {onShow && (<div className="projectmini" id="pmini">
                        <h3>{details.heading}</h3>
                        <p>{details.paragraph}</p>
                        <CancelIcon onClick={()=>setOnShow(false)} className="projectclose" />

                </div>)}
            </div>
        </div>
    )
}