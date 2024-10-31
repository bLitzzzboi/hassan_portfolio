import React from "react";
import top_image from "./top_img-min.jpg";
import second_image from "./book1-min.jpg";

function Guide() {
  return (
    <div className="header-content">
    <img src={top_image} alt="Top Image" />
    <hr className="my-line" style={{ width: "79%", margin: "20px auto", borderColor: "#2c2c2c" }} />

    <h1>BioForce Brand Guide</h1>
      <p>
      I collaborated with BioForce, a company specializing in pesticides and 
      fertilizers, to design a comprehensive brand book. This project involved 
      curating and showcasing detailed information about the company, its CEO, 
      product line, labs, and facilities. The brand book aims to provide a cohesive
       and professional representation of BioForce's mission, leadership, and offerings.
        This contract project required understanding BioForce's brand identity and effectively 
        translating it into a visually compelling and informative document.
      </p>
      <hr className="my-line" style={{ width: "79%", margin: "20px auto", borderColor: "#2c2c2c" }} />
      <div style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}>
        <img src={second_image} alt="Image" style={{ width: "80%", borderRadius:"0" }} />
    </div>
    <hr className="my-line" style={{ width: "79%", margin: "20px auto", borderColor: "#2c2c2c" }} />


    </div>
  );
}

export default Guide;