import React,{useContext} from "react";
import ThemeContext from "../context/ThemeContext";
import ThemeToggler from "./ThemeToggler";

const Header = () => {
    const [orignal,newOne] = useContext(ThemeContext);

    return(
    <header>
        <h1 style={{textAlign:"center"}}> <b style={{ color:"red"}}> {orignal}  </b> ThemeToggler </h1>
        <ThemeToggler />
    </header>
    )
}

export default Header;