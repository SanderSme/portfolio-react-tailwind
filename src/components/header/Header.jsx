import NavBarDesktop from "./NavBarDesktop/NavBarDesktop"
import NavBarMobile from "./NavBarMobile/NavBarMobile"

const Header = () => {
  return (
    <div>
      <NavBarDesktop/>
      <NavBarMobile/>
    </div>
  )
}

export default Header