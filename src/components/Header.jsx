import React from "react";

const Header = (props) =>{
    const {titulo} = props;
    return (
      <> 
         <div class="p-3 mb-2 bg-primary text-white">
                 <h2 className="text-center">{titulo}</h2>     
           </div>
       
        
      </>
    );
};

export default Header;
