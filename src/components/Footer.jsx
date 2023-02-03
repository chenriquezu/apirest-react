import React from "react";
const Footer = (props) =>{
    const {description} = props;
    
    return(
            <footer className="p-3 mb-2 bg-primary-bg-dark p-2, text-center">
               <p class = "text-secondary">{description}</p>
            </footer> 

    );
};
export default Footer;
