import React, { memo } from "react";

const Count = ({text,count}) => {

    console.log('Count '+text);
    return ( 
        <h2> {text} - {count} </h2>
    );
}
 
export default memo(Count);