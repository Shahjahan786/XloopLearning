import './AppButton.css'

function AppButton({text, onButtonClick}){

    return (<>
    <button className= {text === "=" ? "App-Button-Long" : "App-Button" }value = {text} onClick = {onButtonClick}>{text}</button>
    </>)

}

export default AppButton