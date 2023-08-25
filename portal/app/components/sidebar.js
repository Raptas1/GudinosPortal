'use client';
import NavLink from "next/link"
import {AiOutlineSetting} from "react-icons/ai"
import {BiMenu, BiSolidCarMechanic} from "react-icons/bi"
import {BsCurrencyDollar, BsGrid, BsShieldCheck} from "react-icons/bs"
import {MdLogout} from "react-icons/md";
import {FaUserShield} from "react-icons/fa"
import "./sidebar.css"
import { useState } from "react"
const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    }
    return (
        <div className={isOpen === true ? "sidebar open" : "sidebar"}>
        <div className="logo-details">
          <i className='bx bxl-c-plus-plus icon'></i>
            <div className="logo_name">{process.env.NEXT_PUBLIC_BRAND}</div>
            <i className='bx' onClick={toggleSidebar} id="btn" ><BiMenu/></i>
        </div>
        <ul className="nav-list">
          <li>
            <NavLink href="#">
              <i className='bx'><BsGrid/></i>
              <span className="links_name">Dashboard</span>
            </NavLink>
             <span className="tooltip">Dashboard</span>
          </li>
          <li>
           <NavLink href="/jobs">
             <i className='bx'><BiSolidCarMechanic/></i>
             <span className="links_name">Jobs</span>
           </NavLink>
           <span className="tooltip">Jobs</span>
         </li>
         <li>
           <NavLink href="/warranties">
             <i className='bx'><BsShieldCheck/></i>
             <span className="links_name">Warranties</span>
           </NavLink>
           <span className="tooltip">Warranties</span>
         </li>
         <li>
           <NavLink href="/expenses">
             <i className='bx'><BsCurrencyDollar/></i>
             <span className="links_name">Expenses</span>
           </NavLink>
           <span className="tooltip">Expenses</span>
         </li>
         <li>
           <a href="#">
             <i className='bx'><AiOutlineSetting/></i>
             <span className="links_name">Setting</span>
           </a>
           <span className="tooltip">Setting</span>
         </li>
         <li>
         <hr style={{"color":"#2b2b2b"}}/>
         </li>
         <li className="profile">
             <div className="profile-details">
               <div className="name_job">
                 <div className="name">Prem Shahi</div>
                 <div className="job">Web designer</div>
               </div>
             </div>
             <i className='bx' id="log_out" ><MdLogout/></i>
         </li>
        </ul>
      </div>
    )
}

export default Sidebar;