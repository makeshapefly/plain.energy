"use client";
import Image from "next/image";
import MobileMenuSocials from "./MobileMenuSocials";
import Link from "next/link";
import addGsap from "@/utils/addGsap";
import { useEffect } from "react";

export default function SideMenu({ isOpen, setIsOpen }) {
  useEffect(() => {
    addGsap();
  }, []);

  return (
    <div className={`sidemenu-wrapper  ${isOpen ? "show" : ""}`}>
      <div className="sidemenu-content">
        <button
          className="closeButton sideMenuCls"
          onClick={() => setIsOpen(false)}
        >
          <Image
            width={24}
            height={24}
            src="/assets/img/icon/close.svg"
            alt="icon"
          />
        </button>
        <div className="widget footer-widget">
          <div className="widget-about">
            <div className="footer-logo">
              <Link scroll={false} href="/">
                <div style={{ color: '#FFF', fontSize: '20px' }}>
                  <Image
                    width={50}
                    height={50}
                    src="/assets/img/logo.png"
                    alt="icon"
                  />
                  &#160;plain.energy</div>
              </Link>
            </div>
            <p className="about-text">
              The Platform for every household in England to start the plain english domestic energy or retrofit journey with local partners.
              With built-in Energy Intelligence.
            </p>
            {/*<div className="sidebar-wrap">
              <h6>27 Division St, New York,</h6>
              <h6>NY 10002, USA</h6>
            </div>
            <div className="sidebar-wrap">
              <h6>
                <a href="tel:1800123654987">+1 800 123 654 987 </a>
              </h6>
              <h6>
                <a href="mailto:frisk.agency@mail.com">frisk.agency@mail.com</a>
              </h6>
            </div>
            <div className="social-btn style2">
              <MobileMenuSocials />
            </div>*/}
          </div>
        </div>
      </div>
    </div>
  );
}
