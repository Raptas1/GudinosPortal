

const ProtectedRoute = ({children}) => {
    const isAuthenticated = () => {
        axios.get("http://localhost:3001/authenticated")
        .then((response) => {
            console.log(response);
            if(response == true) {
                return true;
            }
            return false;
        })
    }
    return (
        <div>

        </div>
    )
}