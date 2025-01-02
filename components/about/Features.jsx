import Image from "next/image";
import React from "react";

export default function Features() {
  return (
    <div className="why-area-1 space bg-theme shape-mockup-wrap">
      <div
        className="why-img-1-1 shape-mockup wow img-custom-anim-right animated"
        data-wow-duration="1.5s"
        data-wow-delay="0.2s"
        style={{ top: "-100px", right: "0px", bottom: "140px" }}
      >
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="title-area mb-45">
              <h2 className="sec-title">
              A safe marketplace for all
              </h2>
            </div>
            <h4 className="mt-35">People struggle to find the information and support they need.</h4>
            <p className="mb-n1">
            “Householders told us that navigating the current market demands a level of knowledge 
            they do not have. When they search online for information on home energy improvements they often 
            struggle to find relevant and useful information from credible independent sources. 
            They feel that they are left to their own devices to become experts, and are overwhelmed by the 
            smallprint and potential pitfalls of a technology.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
