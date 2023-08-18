import Link from "next/link"
import {BiHome, BiSolidCarMechanic} from "react-icons/bi"
import {BsCurrencyDollar, BsShieldCheck} from "react-icons/bs"
import {FaUserShield} from "react-icons/fa"
import "./sidebar.css"
const Sidebar = async () => {
    return (
        <div className="container">
            <div className="sidebar_brand">
                <h3>Raptas</h3>
            </div>
            <div className="sidebar_category">
                General
            </div>
            <ul>
                <li>
                    <Link href="" className="nav-item">
                        <span className="icon"><BiHome/></span>
                        <span className="item">Home</span>
                    </Link>
                </li>
                <li>
                    <Link href="" className="nav-item">
                        <span className="icon"><BiSolidCarMechanic/></span>
                        <span className="item">Jobs</span>
                    </Link>
                </li>
                <li>
                    <Link href="" className="nav-item">
                        <span className="icon"><BsShieldCheck/></span>
                        <span className="item">Warranties</span>
                    </Link>
                </li>
                <li>
                    <Link href="" className="nav-item">
                        <span className="icon"><BsCurrencyDollar/></span>
                        <span className="item">Expenses</span>
                    </Link>
                </li>
                <div className="sidebar_category">
                Admin
                </div>
                <li>
                    <Link href="" className="nav-item">
                        <span className="icon"><FaUserShield/></span>
                        <span className="item">Admin</span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;