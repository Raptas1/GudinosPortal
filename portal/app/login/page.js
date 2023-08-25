"use client";
import "./page.css";
import {useState} from "react"

const Login = () => {

    const[user, setUser] = useState({username: "", password: ""});

    const handleChange = (e) => {
        const {name, value} = event.target;
        setUser({...user, [name]: value});
        console.log(user)
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
                    <form className="form_form">
                        <h1 className="form_header">Hello!<br/>Welcome back,</h1>
                        <input className="form_username" name="username" onChange={handleChange} type="text" placeholder="USERNAME"/>
                        <input className="form_password" name="password" onChange={handleChange} type="password" placeholder="PASSWORD"/>
                        <button className="form_submit" type="submit">Login</button>
                        <p className="form_footer">New User? Contact an Administrator!</p>
                    </form>
                </section>
            </div>
        </main>
    )
}

export default Login;