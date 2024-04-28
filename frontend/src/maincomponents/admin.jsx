import './style/admin.scss';
import React from "react";
import {Outlet} from 'react-router-dom';
import Navigation from './navigate';
import 'bootstrap/dist/css/bootstrap.min.css';

function admin(){

    return(
        <div className='admin-wrapper'>

            <>{/*The Navigation*/}

                <Navigation />
                <Outlet />
                
            </>
            
        </div>
    )
}

export default admin;