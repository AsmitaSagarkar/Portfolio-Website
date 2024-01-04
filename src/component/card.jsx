import "./project.css";
import {Link} from "react-router-dom"
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';

export default function Card({details}){
    return (

        <div class="projectgrid">
            <div class="projectproject-items">
                <div class="projectimg">
                    <img src={details.backgorund} alt="Loading image...." />
                </div>
                <div class="projecthover-item">
                    <h3>Project Source</h3>

                    <div class="projecticons">
                        <Link className="fa-brands fa-github" to={details.github}>{<GitHubIcon />}</Link>
                        <Link className="fa-solid fa-paperclip" to={details.link}>{<LaunchIcon />}</Link>
                        <button className="fa-solid fa-lightbulb">{<TipsAndUpdatesIcon />}</button>
                        
                        
                    </div>
                    <div class="projectpmini projectmini" id="pmini">
                        <h3>{details.heading}</h3>
                        <p>{details.para}</p>
                        <i class="fa-solid fa-circle-xmark close" id="pclose"></i>

                    </div>
                </div>
            </div>
            </div>
    )
}