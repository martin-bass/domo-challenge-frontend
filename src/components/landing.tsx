import Image1 from "../assets/image1.webp";
import Image2 from "../assets/icons8-añadir-huella-digital-100.png";
import Image3 from "../assets/icons8-customer-100.png";

function Landing() {
  return (
    <div className="d-flex flex-column flex-md-row p-md-3">
      <div className="d-flex flex-column col-md-6  p-2 custom-container-1">
        <div className="p-md-5">
          <h6 className="p-1 fw-semibold text-primary">Core features</h6>
          <h2 className="p-1 fw-semibold">
            Develop systematically with Comet.
          </h2>
          <h4 className="p-1 mt-4">
            Adaptable sections are ideal{" "}
            <span>for crafting versatile layouts.</span>
          </h4>
        </div>
        <div className="d-flex flex-row justify-content-between px-md-5">
          <div className="col-6 custom-container-1a">
            <img src={Image2} alt="Image2" width={40} />
            <h5 className="fw-bolder fs-6">System Analyse your data</h5>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <button className="cta">
              <span className="hover-underline-animation"> Learn More</span>
              <svg
                id="arrow-horizontal"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="10"
                viewBox="0 0 46 16"
              >
                <path
                  id="Path_10"
                  data-name="Path 10"
                  d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                  transform="translate(30)"
                ></path>
              </svg>
            </button>
          </div>
          <div className="col-6 custom-container-1a">
            <img src={Image3} alt="Image2" width={40} />
            <h5 className="fw-bolder fs-6">Direct system management</h5>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <button className="cta">
              <span className="hover-underline-animation"> Learn More</span>
              <svg
                id="arrow-horizontal"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="10"
                viewBox="0 0 46 16"
              >
                <path
                  id="Path_10"
                  data-name="Path 10"
                  d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                  transform="translate(30)"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-6 d-flex align-items-center justify-content-center custom-container-2">
        <img src={Image1} alt="Image" />
      </div>
    </div>
  );
}

export default Landing;
