import './style/admin.scss';
import React from "react";
import {Outlet} from 'react-router-dom';
import Navigation from './navigate';
import logo from '../assets/apple-touch-icon.png';
import 'bootstrap/dist/css/bootstrap.min.css';

function admin(){

    return(
        
        <>{/*The Navigation*/}
        <div className='top' style={{padding:"10px", boxShadow:"0px 2px 5px rgba(82, 63, 105, 0.2)"}}><img src={logo} alt="logo" style={{width:"50px", padding:"5px"}}/> DermoCura</div>
            <div className='admin-wrapper'>

                <Navigation />
                <Outlet />
                    
            </div>
        </>
            
    )
}

export default admin;