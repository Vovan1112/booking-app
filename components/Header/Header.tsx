import { useState } from "react";
import { HeaderItemList } from "./HeaderItemList"
import { HeaderLoginButton } from "./HeaderLoginButton"
import { HeaderLogo } from "./HeaderLogo"
import { BurgerMenuIcon } from "@/assets/BurgerMenuIcon/BurgerMenuIcon";
import { BurgerMenuIconClose } from "@/assets/BurgerMenuIcon/BurgerMenuIconClose";


export const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);


    return (
        <div className="flex flex-row items-center justify-around">
            <HeaderLogo />
            <div className="relative md:hidden">
            <button onClick={() => setIsMenuOpen((prev) => !prev)}>{isMenuOpen ? <BurgerMenuIconClose /> : <BurgerMenuIcon />}</button>
            </div>
            <HeaderItemList isMenuOpen={isMenuOpen}/>
        </div>
    )
}