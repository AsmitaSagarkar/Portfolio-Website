import "./contact.css"

export default function Contact(){
    return(
        
        <>
        <div className="contacth1">
        <h1><span className="contactab contacth1">Contact</span><span className="contactme"> Me</span><span className="contactbgtext">Contact</span></h1>
    </div>\
    <div className="contacthshape"></div>


    <div className="contactgrid">
        <div className="contactleft"data-aos="fade-right">
         <img src="images/contactbg.png" alt=""  className="contactimg"/>
        </div>
        <div classNameName="contactright"data-aos="fade-left">
            
            <div className="contactsocialIcons">
                <h1 className="contactinfo contacth1"><span className="contacttext">L</span><span className="contacttext">e</span><span className="contacttext">t</span><span className="contacttext">'</span><span className="contacttext">s</span><span className="contacttext"> C</span><span className="contacttext">o</span><span className="contacttext">n</span><span className="contacttext">n</span><span className="contacttext">e</span><span className="contacttext">c</span><span className="contacttext">t</span><span className="contacttext">!</span></h1>
                <ul>
                <li className="contactin">
                    <span><i className="fa-brands fa-github" style={{color: "#e9ecf1"}}></i>
                    <span className="contactusername" id="github">@asmitasagarkar</span></span>
                </li>
                <li className="contactin">
                    <span><i className="fa-brands fa-linkedin" style={{color: "#f1f4f9"}}></i>
                    <span  className="contactusername" id="linkedin">@asmita-sagarkar</span></span>
                </li>

                <li className="contactin">
                    <span><i className="fa-brands fa-twitter" style={{color:"#ebecf0"}}></i><span className="contactusername" id="twitter">@asmitasagarkar</span></span>
                </li>
                
                <li className="contactin">
                    <span><i className="fa-regular fa-envelope" style={{color: "#eeeff1"}}></i>
                    <span className="contactusername" id="mail">asmitasagarkar@gmail.com</span></span>
                </li>
                <li className="contactin">
                    <span><i className="fa-regular fa-file" style={{color: "#e6e6e6"}}></i>
                    <span className="contactusername" id="resume">Download My CV</span></span>
                </li>
                
            </ul>
            
            </div>



        </div>

    </div>
   
        
        
        </>
    )
}