import React from 'react';
 
const Footer =(props)=>{
    console.log(props)
    return(
    <footer>
    <hr/>
        <center>
        <h2>Developer Footer{props.year}{props.month}</h2>

        </center>
    </footer>
    )
}
export default Footer;