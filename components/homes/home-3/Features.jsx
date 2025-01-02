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
        <Image
          width={838}
          height={778}
          src="/assets/img/normal/solar-6799111_1280.png"
          alt="img"
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="title-area mb-45">
              <h2 className="sec-title">
                The Challenge
              </h2>
            </div>
            <p>
              Achieving the UK’s climate change goals will require changes to every single household. These changes could be disruptive and involve asking people to pay for new technologies upfront. People will have to change the way they interact with energy in their homes.
            </p>
            <p className="mb-n1">
              Every household is going to have to make these changes - and people shouldn’t have to be climate or energy experts to understand them.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
