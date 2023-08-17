import "./page.css";

const Login = () => {
    return (
        <main>
            <div className="container">
                <section className="info_section">
                    <div className="info_text">
                        <h1>Start logging your day by day data!</h1>
                        <p>This portal allows for daily tracking on expenses, calculates incomes, logs all services, and shows algebraic data on weekly, monthly, or yearly basis. This portal will make your data logging easier and maintainable to prevent struggles. </p>
                        <footer>© 2023 Raptas Portals</footer>
                    </div>
                </section>
                <section className="login_section">
                    <form className="form_form">
                        <h1 className="form_header">Hello!<br/>Welcome back,</h1>
                        <input className="form_username" type="text" placeholder="USERNAME"/>
                        <input className="form_password" type="password" placeholder="PASSWORD"/>
                        <button className="form_submit" type="submit">Login</button>
                        <p className="form_footer">New User? Contact an Administrator!</p>
                    </form>
                </section>
            </div>
        </main>
    )
}

export default Login;