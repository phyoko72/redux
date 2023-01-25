import React, { memo } from "react";

const Title = () => {
    console.log('Title');
    return ( 
    <>
        <h1>This is Title</h1>
    </> );
}
 
export default memo(Title);