import { Link } from 'react-router-dom';

function navigate(){
    return(
        <div className="side-bar">
            <nav>
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