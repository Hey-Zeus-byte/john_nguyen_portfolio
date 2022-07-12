import React from "react";
import "./css/footer.css";

const Footer = () => {
  return (
    <div id="footer">
      <p>GET IN TOUCH</p>
      <p>
        <a data-auto-recognition="true" href="mailto:Johnuxui@gmail.com">
          Johnuxui@gmail.com
        </a>
      </p>
      <img
        src="https://static.wixstatic.com/media/71546a_eb2b4226bfda49229e0bbd4b8ef1724c~mv2.png/v1/fill/w_25,h_25,al_c,lg_1,q_85,enc_auto/baseline_copyright_black_18dp.png"
        alt="baseline_copyright_black_18dp.png"
        style={{
          width: "20px",
          height: "20px",
          objectFit: "cover",
          objectPosition: "50% 50%",
        }}
      ></img>
      <p>2021 John Nguyen</p>
      <p>Made In San Francisco, CA</p>
      <div>
        <strong style={{fontSize: "20px"}}>LET'S CONNECT</strong>
        <a href="https://www.linkedin.com/in/johnguyen/" target="_blank">
          <img
            src="https://static.wixstatic.com/media/71546a_30d3b9b3fe8d48d18d77ef1230fec3fd~mv2.png/v1/fill/w_40,h_40,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Group%201372.png"
            alt="linkedin"
            style={{
              width: "25px",
              height: "25px",
              objectFit: "cover",
              objectPosition: "50% 50%",
            }}
          ></img>
        </a>
        <a href="https://www.instagram.com/avocado.dude/" target="_blank">
          <img
            src="https://static.wixstatic.com/media/71546a_a47dc43876ae43df9ca55a484d378d78~mv2.png/v1/fill/w_40,h_40,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Group%201370.png"
            alt="instagram"
            style={{
              width: "25px",
              height: "25px",
              objectFit: "cover",
              objectPosition: "50% 50%",
            }}
          ></img>
        </a>
        <a href="https://twitter.com/johnuxui" target="_blank">
          <img
            src="https://static.wixstatic.com/media/71546a_dd2291a233814c3a93a48d8412da8af0~mv2.png/v1/fill/w_44,h_40,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Group%201371.png"
            alt="twitter"
            style={{
              width: "25px",
              height: "25px",
              objectFit: "cover",
              objectPosition: "50% 50%",
            }}
          ></img>
        </a>
        <a href="https://dribbble.com/johnuxui" target="_blank">
          <img
            src="https://static.wixstatic.com/media/71546a_83e4837ecf2c449090f39c3c210430d5~mv2.png/v1/fill/w_42,h_40,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Group%201373.png"
            alt="website"
            style={{
              width: "25px",
              height: "25px",
              objectFit: "cover",
              objectPosition: "50% 50%",
            }}
          ></img>
        </a>
      </div>
    </div>
  );
};

export default Footer;
