import headerImage from "../../assets/header.png";
function Header() {
  return (
    <header className="h-full, w-[1600px] bg-white">
      <img
        className="w-full h-full bg-white"
        src={headerImage}
        alt="header"
      ></img>
    </header>
  );
}

export default Header;
