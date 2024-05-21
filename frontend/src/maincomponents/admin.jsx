import './style/admin.scss';
import React from "react";
import {Outlet} from 'react-router-dom';
import Navigation from './navigate'; // always important to import the files in order to use them
import logo from '../assets/apple-touch-icon.png';
import 'bootstrap/dist/css/bootstrap.min.css'; // this is a bootstrap css that will allow me to use bootstrap styles

function admin(){

    return(
        
        <>{/*The Navigation*/}
        <div className='top' style={{padding:"10px", boxShadow:"0px 2px 5px rgba(82, 63, 105, 0.2)"}}><img src={logo} alt="logo" style={{width:"50px", padding:"5px"}}/> DermoCura</div>
            <div className='admin-wrapper'>
                {/* Navigation component will always exist which makes it seemless to the user as the navigation 
                component will always be displayed on the screen */}
                <Navigation />
                {/* Outlet is where all the contents of the admin-subpage will be displayed */}
                <Outlet />
                    
            </div>
        </>
            
    )
}

export default admin;