import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <div className="hero-wrapper hero-1" id="hero">
      <div className="container">
        <div className="hero-style1">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="hero-title wow img-custom-anim-left animated">
                Domestic Energy Intelligence
              </h1>

              <h1 className="hero-title text-lg-end wow img-custom-anim-right animated">

              </h1>
            </div>
            <div className="col-lg-6">
              <p className="hero-text wow img-custom-anim-right animated">
                The Platform for every household in England to start the <b>plain english</b> domestic energy or retrofit journey with local partners.<br></br>With built-in <u>Energy Intelligence.</u>
              </p>
              <div className="btn-group fade_right">
                <Link
                  scroll={false}
                  href="/#demystify"
                  className="btn wow img-custom-anim-right animated"
                >
                  <span className="link-effect">
                    <span className="effect-1">LEARN MORE</span>
                    <span className="effect-1">ABOUT US</span>
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-year-tag wow img-custom-anim-left animated" style={{ marginTop: 60 }}>
                <Image
                  width={40}
                  height={40}
                  src="/assets/img/icon/icons8-house-64.png"
                  alt="img"
                />
                <h6>Households</h6>
                <Image
                  width={40}
                  height={40}
                  src="/assets/img/icon/icons8-charity-96.png"
                  alt="img"
                />
                <h6>Not For Profits</h6>
              </div>
              <div className="hero-year-tag wow img-custom-anim-left animated" style={{ marginTop: 30 }}>
                <Image
                  width={40}
                  height={40}
                  src="/assets/img/icon/icons8-solar-power-64.png"
                  alt="img"
                />
                <h6>Private Sector</h6>
                <Image
                  width={40}
                  height={40}
                  src="/assets/img/icon/board-meeting.png"
                  alt="img"
                />
                <h6>Local Authorities</h6>
              </div>
              <div className="hero-year-tag wow img-custom-anim-left animated" style={{ marginTop: 30 }}>
                <Image
                  width={40}
                  height={40}
                  src="/assets/img/icon/local-energy.png"
                  alt="img"
                />
                <h6>Local Energy Groups</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
