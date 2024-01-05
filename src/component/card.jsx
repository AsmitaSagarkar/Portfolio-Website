import "./project.css";
import {Link} from "react-router-dom"
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import { useCallback, useState } from "react";
import CancelIcon from '@mui/icons-material/Cancel';
import { debounce } from "lodash";

export default function Card({details}){

    const [onMouseHover,setOnMouseHover] = useState(false);
    const [onShow,setOnShow]=useState(false);
    const debounceState = useCallback(debounce(setOnMouseHover,2000),[]);
    
    return (

        <div class="projectgrid">
            <div class="projectproject-items">
            <div class="projectimg" 
                onMouseEnter={()=>debounceState(true)}
                onMouseLeave={()=>debounceState(false)}
                
                
                >
                    <img src={details.background} alt="Loading" className="bgimage" />
                </div>

                {onMouseHover && (<div class="projecthover-item fade-enter fade-enter-active">
                    <h3>Project Source</h3>
                    <div class="projecticons">
                        <Link className="projecticon" to={details.github}>{<GitHubIcon />}</Link>
                        <Link className="projecticon" to={details.link}>{<LaunchIcon />}</Link>
                        <button className="projecticon" onClick={()=>setOnShow(true)}>{<TipsAndUpdatesIcon />}</button>
                    </div>  
                </div>)}

                {onShow && (<div class="projectpmini projectmini" id="pmini">
                        <h3>{details.heading}</h3>
                        <p>{details.para}</p>
                        <CancelIcon onClick={()=>setOnShow(false)} />

                </div>)}
            </div>
        </div>
    )
}