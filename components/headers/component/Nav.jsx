"use client";
import { menuItems } from "@/data/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  const isChildActive = (links) => {
    let isActive = false;
    links.forEach((element) => {
      if (
        element.link &&
        element.link?.split("/")[1] == pathname?.split("/")[1]
      ) {
        isActive = true;
      } else if (element.subMenuItems) {
        element.subMenuItems.forEach((element2) => {
          if (
            element2.link &&
            element2.link?.split("/")[1] == pathname?.split("/")[1]
          ) {
            isActive = true;
          }
        });
      }
    });

    return isActive;
  };

  return (
    <>
      {menuItems.map((elm, i) => (
        <li
          key={i}
          className={elm.subMenuItems ? " menu-item-has-children" : ""}
        >
          {elm.subMenuItems ? (
            <>
              <a
                href="#"
                className={isChildActive(elm.subMenuItems) ? "activeMenu" : ""}
              >
                <span className="link-effect">
                  <span className="effect-1">{elm.title}</span>
                  <span className="effect-1">{elm.title}</span>
                </span>
              </a>

              <ul className="sub-menu">
                {elm.subMenuItems.map((elm2, i2) => (
                  <li
                    key={i2}
                    className={
                      elm2.subMenuItems ? " menu-item-has-children" : ""
                    }
                  >
                    {elm2.subMenuItems ? (
                      <>
                        <a
                          href="#"
                          className={
                            isChildActive(elm2.subMenuItems) ? "activeMenu" : ""
                          }
                        >
                          {elm2.title}
                        </a>
                        <ul className="sub-menu">
                          {elm2.subMenuItems.map((elm3, i3) => (
                            <li key={i3}>
                              <Link
                                scroll={false}
                                className={
                                  elm3.link?.split("/")[1] ==
                                    pathname?.split("/")[1]
                                    ? "activeMenu"
                                    : ""
                                }
                                href={elm3.link}
                              >
                                {elm3.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <Link
                        scroll={false}
                        className={
                          elm2.link?.split("/")[1] == pathname?.split("/")[1]
                            ? "activeMenu"
                            : ""
                        }
                        href={elm2.link}
                      >
                        {elm2.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <Link
              scroll={false}
              className={
                elm.link?.split("/")[1] == pathname?.split("/")[1]
                  ? "activeMenu"
                  : ""
              }
              href={elm.link}
            >
              <span className="link-effect">
                <span className="effect-1">{elm.title}</span>
                <span className="effect-1">{elm.title}</span>
              </span>
            </Link>
          )}
        </li>
      ))}

      <div style={{ width: 90, paddingLeft: 30, marginTop: 4, marginRight: -16, fontFamily: '__Unbounded_97d819', fontWeight: 600, fontSize: '14px' }}>
        Sign In
      </div>
      <div style={{ width: 40, paddingLeft: 20, marginTop: 4 }}>
        <a class="" href="/contact">
          <svg aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            //color="#28a745"
            data-icon="right-to-bracket"
            class="svg-inline--fa fa-right-to-bracket "
            role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"></path></svg></a>
      </div>
    </>
  );
}
