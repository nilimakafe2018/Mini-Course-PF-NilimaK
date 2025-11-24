// Reusable Button component but used only once
// Accepts two props: 
//  1.text: the label displayed on the button
//  2.onClick: callback function to run when the button is clicked

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