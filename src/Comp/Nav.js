import logo from "../Comp/logo.png";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                
                <img src={logo} alt="Logo" width={100} height={50} /> {/* استخدام المتغير */}
           
            </div>
        </nav>
    );
}

export default Nav;
