import NavLink from "next/link"
import {BiMenu, BiSolidCarMechanic} from "react-icons/bi"
import {BsCurrencyDollar, BsGrid, BsShieldCheck} from "react-icons/bs"
import {FaUserShield} from "react-icons/fa"
import "./sidebar.css"
const Sidebar = async () => {
    return (
        <div className="sidebar">
        <div className="logo-details">
          <i className='bx bxl-c-plus-plus icon'></i>
            <div className="logo_name">CodingLab</div>
            <i className='bx' id="btn" ><BiMenu/></i>
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
           <a href="#">
             <i className='bx'><BiSolidCarMechanic/></i>
             <span className="links_name">Jobs</span>
           </a>
           <span className="tooltip">Jobs</span>
         </li>
         <li>
           <a href="#">
             <i className='bx'><BsShieldCheck/></i>
             <span className="links_name">Warranties</span>
           </a>
           <span className="tooltip">Warranties</span>
         </li>
         <li>
           <a href="#">
             <i className='bx'><BsCurrencyDollar/></i>
             <span className="links_name">Expenses</span>
           </a>
           <span className="tooltip">Expenses</span>
         </li>
         <li>
           <a href="#">
             <i className='bx bx-cog' ></i>
             <span className="links_name">Setting</span>
           </a>
           <span className="tooltip">Setting</span>
         </li>
         <li className="profile">
             <div className="profile-details">
               <div className="name_job">
                 <div className="name">Prem Shahi</div>
                 <div className="job">Web designer</div>
               </div>
             </div>
             <i className='bx bx-log-out' id="log_out" ></i>
         </li>
        </ul>
      </div>
    )
}

export default Sidebar;