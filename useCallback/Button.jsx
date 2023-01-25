import React, { memo } from "react";

const Button = ({name,action}) => {
    console.log('Button '+ name);
    return ( 
        <>
            <button onClick={action}>{name}</button>
        </>
    );
}
 
export default memo(Button);