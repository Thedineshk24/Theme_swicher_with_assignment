import React,{useContext} from "react";
import ThemeContext from "../context/ThemeContext";
import AppTheme from "../colors";


const HeroSection = () => {
    const theme = useContext(ThemeContext)[0];
    const currentTheme = AppTheme[theme];
    const [orignal,newOne] = useContext(ThemeContext);

    const ChangeTheme = () => {
        newOne(orignal === "light" ? "dark" : "light")
    }

    return (
        <div
            style={{
                padding:"1rem",
                backgroundColor:`${currentTheme.backgroundColor}`,
                color:`${currentTheme.textColor}`,
                textAlign:"center",
            }}
        >
            <h1>this is a ThemeToggler</h1>
            <p>Hi I AM A Paragraph</p>
            <button 
                style={{
                    backgroundColor:"#26ae60",
                    padding:"10px 150px",
                    fontSize:"20px",
                    color:"#fff",
                    border:`${currentTheme.border}`,
                }}

                onClick={ChangeTheme}
            >{orignal}</button>
        </div>
    )
}

export default HeroSection;