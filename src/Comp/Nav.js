import logo from "../Comp/logo.png";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                
                <img src={logo} alt="Logo" width={100} height={50} /> {/* استخدام المتغير */}
                {/* <button className="navbar-toggler bg-white border-0 box-shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item fs-4 fw-bold me-4">
                            <a className="nav-link" aria-current="page" href="/#">Home</a>
                        </li>
                        <li className="nav-item fs-4 fw-bold">
                            <a className="nav-link" href="/#">Link</a>
                        </li>
                    </ul>
                </div> */}
            </div>
        </nav>
    );
}

export default Nav;
