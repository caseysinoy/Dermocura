import './style/admin.scss';
import React from "react";
import {Outlet} from 'react-router-dom';
import Navigation from './navigate';

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