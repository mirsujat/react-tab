import React from 'react';
const Footer = () => {
    let date = new Date()
    return(
        <footer>
        <p>Design and Develop by Mir Sujat, &copy; {date.getFullYear()}, E-mail: mir.sujat@gmail.com </p>
    </footer>
    )
}
   

export default Footer;