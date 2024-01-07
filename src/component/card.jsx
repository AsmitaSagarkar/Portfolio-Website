import "./project.css";
import {Link} from "react-router-dom"
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import {  useState } from "react";
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
        }, 700);
      }


      const [linkButtonStyle, setLinkButtonStyle] = useState({
       
        color: 'aliceblue'  
      });
    
      const linkHandleClick = () => {
        setLinkButtonStyle({
          backgroundColor: 'aliceblue',
          color: '#001C30'
        });
        setTimeout(() => {
            setLinkButtonStyle({
                backgroundColor: '#001C30',
                color: 'aliceblue'
              });
        }, 700);
      }

      const [sourceButtonStyle, setSourceButtonStyle] = useState({
        backgroundColor: '#001C30',
        color: 'aliceblue'  
      });
    
      const sourceHandleClick = () => {
        setSourceButtonStyle({
          backgroundColor: 'aliceblue',
          color: '#001C30'
        });
        setTimeout(() => {
            setSourceButtonStyle({
                backgroundColor: '#001C30',
                color: 'aliceblue'
              });
        }, 700);
      }


      const [closeButtonStyle, setCloseButtonStyle] = useState({
        color: 'aliceblue'  
      });
    
      const closeHandleClick = () => {
        setCloseButtonStyle({
          color: '#27ae60'
        });
        setTimeout(() => {
            setCloseButtonStyle({
                color: 'aliceblue'
              });
        }, 700);
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
                        <Link className="projecticon" to={details.link}
                        style={linkButtonStyle}
                        onClick={linkHandleClick}
                        >{<LaunchIcon />}</Link>
                        <button className="projecticon" onClick={()=>{
                            setTimeout(() => {
                                setOnShow(true);
                            }, 200);
                            sourceHandleClick();}}
                        style={sourceButtonStyle}
                        
                        >{<TipsAndUpdatesIcon />}</button>
                    </div>  
                </div>

                {onShow && (<div className="projectmini" id="pmini">
                        <h3>{details.heading}</h3>
                        <p>{details.paragraph}</p>
                        <CancelIcon onClick={()=>{
                            setTimeout(() => {
                                setOnShow(false); 
                            }, 200);
                            closeHandleClick();}} className="projectclose" style={closeButtonStyle} />

                </div>)}
            </div>
        </div>
    )
}