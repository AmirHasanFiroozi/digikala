import { NavLink } from "react-router-dom";
import digikalaIcon from "../../assets/icons/digikala.svg"

function Icon() {
    return (
        <NavLink to="/">
        <img className="max-xl:hidden -mr-5" src={digikalaIcon} width="195px" height="30px" alt="digikala"/>
        </NavLink>
    )
}

export default Icon;

