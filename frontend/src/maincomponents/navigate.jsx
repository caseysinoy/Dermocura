import { Link } from 'react-router-dom';

function navigate(){
    return(
        <div className="side-bar">
            <div className="bar">Admin Dashboard</div>
            <nav>
                <Link to="admindashboard">home</Link>
                <Link to="profile">profile</Link>
                <Link to="calendar">calendar</Link>
            </nav>
        </div>
    )
}

export default navigate