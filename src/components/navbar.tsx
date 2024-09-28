//Icons
import "bootstrap-icons/font/bootstrap-icons.css";
import "../App.css";

function Navbar() {
  return (
    <>
      <div className="collapse" id="navbarToggleExternalContent">
        <div className=" p-md-4">
          <h5 className="text-body-emphasis h4">Bienvenido al Sitio!</h5>
          <span className="text-body-secondary">Aqui puedes navegar</span>
        </div>
      </div>
      <nav className="navbar d-flex justify-content-between px-md-5 py-4">
        <div>
          <div className="row">
            <div className="col">
              <a href="#" className="nav-link">
                <i className="bi bi-twitter fs-6"></i>
              </a>
            </div>
            <div className="col">
              <a href="#" className="nav-link">
                <i className="bi bi-instagram fs-6"></i>
              </a>
            </div>
            <div className="col">
              <a href="#" className="nav-link">
                <i className="bi bi-linkedin fs-6"></i>
              </a>
            </div>
            <div className="col">
              <a href="#" className="nav-link">
                <i className="bi bi-whatsapp fs-6"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="d-flex flex-row align-items-center justify-content-center">
          <i
            className="bi bi-browser-edge me-2"
            style={{ color: "#666", opacity: 0.5 }}
          ></i>
          <h1 className="fs-4 fw-bolder mb-0">Comet</h1>
        </div>
        <div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
