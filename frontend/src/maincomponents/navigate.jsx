import { Link } from 'react-router-dom';

// navigate is a component that can be reusable to any files.
function navigate(){
    return(
        <div className="side-bar">
            <nav>
                {/* Links create the nav links that a user can interact on the website */}
                <Link className='link' to="admindashboard">Dashboard</Link>
                <Link className='link' to="chart">Charts</Link>
                <Link className='link'to="calendar">Calendar/Scheduling</Link>
                <Link className='link'to="skinlearning">Skin disease learning</Link>
                <Link className='link'to="skindiseasetraining">Training Skin disease</Link>
            </nav>
        </div>
    )
}

export default navigate