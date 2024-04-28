import { Link } from 'react-router-dom';

function navigate(){
    return(
        <div className="side-bar">
            <div className="bar">Admin Dashboard</div>
            <nav>
                <Link className='link' to="admindashboard">home</Link>
                <Link className='link' to="profile">profile</Link>
                <Link className='link'to="calendar">calendar</Link>
            </nav>
        </div>
    )
}

export default navigate