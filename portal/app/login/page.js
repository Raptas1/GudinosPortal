"use client";
import "./page.css";
import { useRouter } from "next/navigation";
import axios from "axios"
import {PiWarningFill} from "react-icons/pi"
import {useState} from "react"

const Login = () => {

    const router = useRouter();

    const[user, setUser] = useState({username: null, password: null});
    const[error, setError] = useState({status:false, message: ""});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUser({...user, [name]: value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(user.username == null || user.password == null) {
            setError({
                status:true,
                message:"Invalid username or password."
            })
        }
        axios.post("http://localhost:3001/login", user)
        .then((response) => {
            if(response.status == 200) {
                router.push("/");
            }
        })
        .catch((error) => {
            if(error.response) {
                if(error.response.status == 401) {
                    setError({
                        status:true,
                        message:"Invalid username or password."
                    })
                } else if(error.response.status == 500) {
                    setError({
                        status:true,
                        message:"An internal error has occurred."
                    })
                }
            } else {
                setError({
                    status:true,
                    message:"An internal error has occurred."
                })
            }
        })
    }
    return (
        <main>
            <div className="container">
                <section className="info_section">
                    <div className="info_text">
                        <h3 className="info_brand">Raptas</h3>
                        <h1>Start logging your day by day data!</h1>
                        <p>This portal allows for daily tracking on expenses, calculates incomes, logs all services, and shows algebraic data on weekly, monthly, or yearly basis. This portal will make your data logging easier and maintainable to prevent struggles. </p>
                        <footer>© 2023 Raptas Portals</footer>
                    </div>
                </section>
                <section className="login_section">
                    <form className="form_form" onSubmit={handleSubmit}>
                        <h1 className="form_header">Hello!<br/>Welcome back,</h1>
                        <p className={`error_text ${error.status ? "" : "hidden"}`}><PiWarningFill/><span>{error.message}</span></p>
                        <input className={`form_username ${error.status ? "error": ""}`} name="username" onChange={handleChange} type="text" placeholder="USERNAME"/>
                        <input className={`form_password ${error.status ? "error": ""}`} name="password" onChange={handleChange} type="password" placeholder="PASSWORD"/>
                        <button className="form_submit" type="submit">Login</button>
                        <p className="form_footer">New User? Contact an Administrator!</p>
                    </form>
                </section>
            </div>
        </main>
    )
}

export default Login;