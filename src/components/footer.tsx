//Icons
import "bootstrap-icons/font/bootstrap-icons.css";

function Footer() {
  const anioActual = new Date().getFullYear();

  return (
    <div className="text-white  bottom-0 footer-custom">
        <p className="fw-bolder">{anioActual} Developed by Martín Lopez - e-mail: martin_reym@hotmail.com{" "}</p>
        <p>
            DOMO-Challenge. Desarollado con Vite, React, TypeScript y Bootstrap.
        </p>
      <a href="https://www.linkedin.com/in/martinariellopez/" target="_blank">
        <i className="bi bi-linkedin text-white"></i>
        <span className="text-white"> /martinariellopez</span>
      </a>
    </div>
  );
}

export default Footer;
