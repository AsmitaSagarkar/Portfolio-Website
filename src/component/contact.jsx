import "./contact.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import FolderIcon from '@mui/icons-material/Folder';
import Image from "../images/contactbg.png"
import {Link} from "react-router-dom"
export default function Contact(){
    return(
        
        <>
        <div className="contacth1">
        <h1><span className="contactab contacth1">Contact</span><span className="contactme"> Me</span><span className="contactbgtext">Contact</span></h1>
    </div>\
    <div className="contacthshape"></div>
    


    <div className="contactgrid">
        <div className="contactleft">
         <img src={Image} alt=""  className="contactimg"/>
        </div>
        <div className="contactright">
            
            <div className="contactsocialIcons">
                <h1 className="contactinfo"><span className="contacttext">L</span><span className="contacttext">e</span><span className="contacttext">t</span><span className="contacttext">'</span><span className="contacttext">s</span><span className="contacttext"> C</span><span className="contacttext">o</span><span className="contacttext">n</span><span className="contacttext">n</span><span className="contacttext">e</span><span className="contacttext">c</span><span className="contacttext">t</span><span className="contacttext">!</span></h1>
                <ul>
                <li className="contactin">
                    <span><GitHubIcon className="i fa-brands fa-github" style={{color: "#e9ecf1"}} />
                    <Link className="contactusername" to="https://github.com/AsmitaSagarkar" target="_blank">@asmitasagarkar</Link></span>
                </li>
                <li className="contactin">
                    <span><LinkedInIcon className="i fa-brands fa-linkedin" style={{color: "#f1f4f9"}} />
                    <Link  className="contactusername" to="https://www.linkedin.com/in/asmita-sagarkar-949a08201" target="_blank">@asmita-sagarkar</Link></span>
                </li>

                <li className="contactin">
                    <span><TwitterIcon className="i fa-brands fa-twitter" style={{color:"#ebecf0"}} /><Link to="https://twitter.com/AsmitaSagarkar" className="contactusername" target="_blank">@asmitasagarkar</Link></span>
                </li>
                
                <li className="contactin">
                    <span><EmailIcon className=" i fa-regular fa-envelope" style={{color: "#eeeff1"}} />
                    <Link className="contactusername" to="mailto:asmitasagarkar@gmail.com" target="_blank">asmitasagarkar@gmail.com</Link></span>
                </li>
                <li className="contactin">
                    <span><FolderIcon className="i fa-regular fa-file" style={{color: "#e6e6e6"}} />
                    <Link className="contactusername" to="https://drive.google.com/file/d/1sRh7UQlZOTOamTz9qfQHjzQK0yfK-qtJ/view?usp=sharing" target="_blank">Download My CV</Link></span>
                </li>
                
            </ul>
            
            </div>



        </div>

    </div>
   
        
        
        </>
    )
}