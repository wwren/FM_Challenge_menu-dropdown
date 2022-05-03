import { useState } from "react";
import "./App.css";
import { ReactComponent as Logo } from "./img/logo.svg";
import { ReactComponent as Menu } from "./img/icon-menu.svg";
import { ReactComponent as ClientAudio } from "./img/client-audiophile.svg";
import { ReactComponent as ClientData } from "./img/client-databiz.svg";
import { ReactComponent as ClientMeet } from "./img/client-meet.svg";
import { ReactComponent as ClientMaker } from "./img/client-maker.svg";
import MenuOverlay from "./components/MenuOverlay";
import NavItems from "./components/NavItems";
function App() {
  const [openMenu, setOpenMenu] = useState(false);
  const handleClick = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <main>
      <nav>
        <div className="logo">
          <Logo />
        </div>
        <div className="menu-icon">
          <Menu onClick={handleClick} />
        </div>
        <div className="menu-dropdown-desktop">
          <NavItems />
        </div>
        {openMenu && <MenuOverlay setOpenMenu={setOpenMenu} />}
      </nav>
      <div className="herobanner">
        <img className="herobanner__mobile" src={require("./img/image-hero-mobile.png")} alt="hero image" />
        <img className="herobanner__desktop" src={require("./img/image-hero-desktop.png")} alt="hero image" />
        <div className="hero-content">
          <h1>Make remote work</h1>
          <p>
            Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch
            productivity soar.
          </p>
          <button>Learn more</button>
          <ul className="client">
            <li>
              <ClientData />
            </li>
            <li>
              <ClientAudio />
            </li>
            <li>
              <ClientMeet />
            </li>
            <li>
              <ClientMaker />
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}

export default App;
