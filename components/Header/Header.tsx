import { HeaderItemList } from "./HeaderItemList"
import { HeaderLoginButton } from "./HeaderLoginButton"
import { HeaderLogo } from "./HeaderLogo"

export const Header = () => {
    return (
        <div className="flex flex-row items-center justify-around">
            <HeaderLogo />
            <HeaderItemList />
            <HeaderLoginButton />
        </div>
    )
}