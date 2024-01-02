import React, { useState } from "react"
import "./nav.css";
import { NavLink } from "react-router-dom";
import Logo from "../images/Sagarkar.png"
import Menu from "../images/menu.png"
import Close from "../images/delete-button.png"
import HomeIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';


export default function Nav() {

    const [isOpen,setIsOpen] =useState(false);
    function toggleNavbar(){
        setIsOpen(!isOpen);
    }
    return (

        <>
            
                <div className="navbar1" id="nav">
                    <header className={isOpen ? "active header":"header"}>

                        <img src={Logo} className="heading" alt="" />
                        <nav className="nav1" >
                            <ul className="item">
                               <NavLink to ="/home" className="anchor">
                               <HomeIcon className="fa-solid" />
                               </NavLink>
                               <NavLink to ="/about"   className="anchor"  ><AccountBoxIcon className="fa-solid" /></NavLink>
                               <NavLink to ="/project" className="anchor" ><BusinessCenterIcon className="fa-solid" /></NavLink>
                               <NavLink to ="/contact" className="anchor" ><PermPhoneMsgIcon className="fa-solid" /></NavLink>

                            </ul>


                        </nav>
                        <div className="mobilenav" onClick={toggleNavbar}>
                         
                            {isOpen? 
                                <img src={Close} alt="" name="close-circle-outline" className="icon border" />
                                :
                                
                                <img src={Menu} alt="" name="menu-outline" className="icon border" />}
                        </div>
                    </header>
                </div>

            


        </>
    )
}