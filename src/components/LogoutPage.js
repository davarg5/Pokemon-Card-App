import { Link } from "react-router-dom"

function LogoutPage(props) {
    return (
        <div>
            <h2>Logged Out</h2>
            <p className="gray">You are now logged out. Click <Link to="/login">here</Link> to login</p>
        </div>
    )
}

export default LogoutPage; 