import React from 'react'
import './Navbar.css'

class Navbar extends React.Component {
    render(){
        return(
            <div class="header header-fixed">
            <div class="navbar container">
                <div class="logo"><a href="#home"><img src = './images/Golden Lion Logo.jpg' /></a></div>
                <label for="navbar-toggle"><i></i></label>
                <nav class="menu">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#portfolio">Roster</a></li>
                        <li><a href="#contacts">Social Media</a></li>
                    </ul>
                </nav>        
            </div>
        </div>
              
              
        )
    }
}
  
export default Navbar 
  



  
