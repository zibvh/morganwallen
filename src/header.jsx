import logo from './assets/logo.jpeg'

const Header = () => {
  return (
    <header className="header">
      <div className="brand">Morgan Wallen</div>
      <img className="header-image" src={logo} alt="Morgan Wallery hero" />
    </header>
  )
}

export default Header;