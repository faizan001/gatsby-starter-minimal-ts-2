import React from "react";
import { Link } from "gatsby";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Container from "../structure/container";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import logo from "../../images/logo.svg";
import logo_black from "../../images/logo_black.svg";

interface Props {
  location: Location;
}

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Parcerias",
    href: "/parcerias",
  },
  {
    name: "Lojas",
    href: "/lojas",
  },
  {
    name: "Sobre nós",
    href: "/sobre",
  },
  // { name: "Blog", href: "/blog" },
];

const Navbar: React.FC<Props> = ({ location }) => {
  const scrollPosition = useScrollPosition();

  const hasScrolled = scrollPosition > 100;
  const isLightBackground =
    location.pathname.includes("blog") ||
    location.pathname.includes("stores") ||
    location.pathname.includes("article") ||
    location.pathname.includes("terms") ||
    location.pathname.includes("cookie-policy");

  const isActiveLink = ({ isCurrent }: any) => {
    let className = `text-base font-normal border-b-2 hover:border-white ${
      isLightBackground
        ? isCurrent
          ? " text-main-blue border-main-blue"
          : hasScrolled
          ? " text-neutral-0"
          : " text-neutral-9"
        : " text-neutral-0"
    } `;
    return isCurrent
      ? { className: `${className} font-semibold` }
      : { className: `${className} border-b-transparent` };
  };

  return (
    <Disclosure>
      <nav
        className={`fixed top-0 w-full z-20 transition-colors duration-300 ${
          hasScrolled ? "bg-neutral-9" : "bg-transparent"
        }`}
      >
        <Container>
          <div className="relative flex h-16 sm:h-24 items-center justify-between">
            <div className="flex flex-1 items-center sm:items-stretch justify-between">
              {/* logo*/}
              <Link to="/" className="flex flex-shrink-0 items-center">
                {hasScrolled || !isLightBackground ? (
                  <img
                    className="block w-auto max-w-[85px] sm:max-w-none"
                    alt="Flair Logo"
                    src={logo}
                    loading="eager"
                  />
                ) : (
                  <img
                    className="block w-auto max-w-[85px] sm:max-w-none"
                    alt="Flair Logo"
                    src={logo_black}
                    loading="eager"
                  />
                )}
              </Link>
              {/* nav */}
              <div className="hidden sm:ml-6 sm:flex justify-center">
                <div className="flex space-x-7 items-center">
                  {navigation.map((item) => {
                    const isCurrent = location.pathname.includes(item.href);
                    return (
                      <Link
                        key={item.name}
                        to={item.href}
                        getProps={isActiveLink}
                        aria-current={isCurrent ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
              {/* mobile menu button*/}
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                <Disclosure.Button
                  className={`inline-flex items-center justify-center rounded-md p-2 text-neutral-0 hover:text-neutral-0 focus:outline-none focus:ring-2 focus:ring-inset focus:ringneutral-0`}
                >
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon
                    className={`block h-6 w-6${
                      !isLightBackground || hasScrolled ? "" : " text-neutral-9"
                    }`}
                    aria-hidden="true"
                  />
                </Disclosure.Button>
              </div>
            </div>
          </div>
        </Container>

        <Disclosure.Panel className="bg-gray-900 sm:hidden h-screen z-50 top-0 fixed w-full flex flex-col justify-center">
          {({ close }) => (
            <>
              <XMarkIcon
                className="block h-6 w-6 text-neutral-0 cursor-pointer absolute right-6 top-6"
                aria-hidden="true"
                onClick={() => close()}
              />
              <div className="flex flex-col space-y-2">
                {navigation.map((item) => {
                  const isCurrent =
                    item.href === "/" && location.pathname === "/"
                      ? true
                      : item.href !== "/" &&
                        location.pathname.includes(item.href);
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`px-3 py-2 text-4xl text-center text-neutral-0${
                        isCurrent ? " font-semibold" : ""
                      }                    
                  `}
                      aria-current={isCurrent ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                  );
                })}
              </div>
            </>
          )}
        </Disclosure.Panel>
      </nav>
    </Disclosure>
  );
};

export default Navbar;
