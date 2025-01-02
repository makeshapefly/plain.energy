import Image from "next/image";
import Link from "next/link";
import React from "react";
import Video from 'next-video';
import homeVideo from '/videos/home-video.mp4';
import BackgroundVideo from 'next-video/background-video';
//import video from '../../../public/assets/img/netzero/home-video.mp4'

export default function About() {
  return (
    <div id="demystify" className="about-area-1 space bg-theme shape-mockup-wrap">
      <div
        className="about-img-1-1 shape-mockup img-custom-anim-left wow animated "
        style={{
          top: "-100px",
          left: "0px",
          bottom: "140px",
          visibility: "visible",
        }}
        data-left="0"
        data-top="-100px"
        data-bottom="140px"
        data-wow-duration="1.5s"
        data-wow-delay="0.1s"
      >
        <Image
          width={838}
          height={730}
          src="/assets/img/normal/daikin-altherma-situation-05-01.jpeg"
          alt="img"
        />
        {/*<div style={{border: 'solid'}}>
        <BackgroundVideo src={homeVideo} loop={true} width={838} height={730}>
        </BackgroundVideo>
        </div> */}
      </div>
      <div className="container">
        <div className="row align-items-center justify-content-end">
          <div className="col-lg-6">
            <div className="overflow-hidden">
              <div className="about-content-wrap ">
                <div className="title-area mb-0">
                  <h2 className="sec-title">
                    Demystify The Journey
                  </h2>
                  <p className="sec-text mt-35">
                    Navigating the ever evolving market for energy, energy efficiency and retrofit requires trust, co-ordination and a degree of know how.
                  </p>
                  <p className="sec-text mt-30">
                    Our platform brings together households, local authorities, not-for-profits and the private sector in a safe, mutually informed environment.
                  </p>
                  <div className="btn-wrap mt-50">
                    <Link scroll={false} href="/about" className="link-btn">
                      <span className="link-effect">
                        <span className="effect-1">Everyone in One Place</span>
                        <span className="effect-1">ABOUT US</span>
                      </span>
                      <Image
                        width={13}
                        height={13}
                        src="/assets/img/icon/arrow-left-top.svg"
                        alt="icon"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
