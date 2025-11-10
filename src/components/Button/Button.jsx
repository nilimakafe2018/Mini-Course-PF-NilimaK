import React from "react";

function Button({text, onClick}){
    return(
        <button
            onClick={onClick}
            style={{
                padding:"10px 20px",
                fontSize:"16px",
                cursor:"pointer",
                borderRadius:"5px",
                backgroundColor:"#85f183",
                border:"none"

            }}
        >
            {text}
        </button>
    )
}
export default Button;