import Head from "next/head";
import Link from "next/link";
import "prismjs/themes/prism-tomorrow.css";
import React from "react";
import ContactButton from "../components/contact-button";
import Rolodex from "../components/rolodex";
import SideNavIndicator from "../components/side-nav-indicator";
import SideNavLink from "../components/side-nav-link";
import useSideNavIndicator from "../components/use-side-nav-indicator";
import "../styles/index.css";

const ROLODEX_ITEMS = ["Software Engineer", "Technical support", "Bicyclist", "Enjoys napping", "Always hungry"];

type Props = {
  Component: React.ComponentType;
  pageProps: never;
};

const MyApp = ({ Component, pageProps }: Props): React.ReactElement => {
  const { handleMouseEnter, handleMouseLeave, indicatorProps, registerAnchorElement } = useSideNavIndicator();

  return (
    <div className="root min-h-screen text-black">
      <Head>
        <title>Adam Krasny</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon/favicon.ico?v=1.0" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </Head>
      <nav className="bg-black bg-opacity-75 px-4 text-white text-center pb-0 md:text-left md:px-6 md:bg-opacity-50">
        <Link href="/">
          <a
            className="inline-block px-4 mt-2 text-white hover:text-white hover:text-opacity-75 md:block md:px-0 md:mt-6"
            ref={registerAnchorElement}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <h1 className="text-5xl">Adam Krasny</h1>
          </a>
        </Link>
        <h2 className="text-xl flex flex-wrap justify-center mt-0 md:mt-2 md:justify-start">
          <Rolodex items={ROLODEX_ITEMS} className="pr-2 text-right" />
          <div> in San Jose, CA</div>
        </h2>
        <ul className="nav-links list-none font-sans flex justify-around mt-2 md:mt-16 md:block">
          <li>
            <SideNavLink
              href="/career"
              text="Career"
              ref={registerAnchorElement}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          </li>
          <li>
            <SideNavLink
              href="/blog"
              text="Blog"
              ref={registerAnchorElement}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          </li>
          <li>
            <SideNavLink
              href="/adamrc"
              text=".adamrc"
              ref={registerAnchorElement}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          </li>
        </ul>
      </nav>
      <div
        id="contact-buttons"
        className="contact-buttons bg-black bg-opacity-75 flex justify-end items-center p-2 border-t px-4 md:px-6 md:justify-start md:bg-opacity-50"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <ContactButton type="stackoverflow" className="mr-4" />
        <ContactButton type="linkedin" className="mr-4" />
        <ContactButton type="github" className="mr-4" />
        <ContactButton type="email" />
      </div>
      <div className="side-nav-indicator-holder">
        <SideNavIndicator className="hidden md:block" {...indicatorProps} />
        <SideNavIndicator className="md:hidden" horizontal {...indicatorProps} />
      </div>
      <main className="bg-white py-5 px-4 md:px-8 md:py-10">
        <Component {...pageProps} />
      </main>

      <style jsx>
        {`
          .root {
            display: grid;
            grid:
              "side-nav" auto
              "side-nav-indicator" 24px
              "content" 1fr
              "contact-buttons" auto
              / minmax(0, 1fr);
          }

          nav {
            backdrop-filter: blur(5px);
            grid-area: side-nav;
          }

          .nav-links li {
            transition: 0.3s transform cubic-bezier(0.5, 1, 0.89, 1);
          }

          .side-nav-indicator-holder {
            grid-area: side-nav-indicator;
          }

          .contact-buttons {
            backdrop-filter: blur(5px);
            grid-area: contact-buttons;
            border-top-color: rgba(255, 255, 255, 0.05);
          }

          main {
            grid-area: content;
          }

          @media (min-width: 768px) {
            .root {
              grid:
                "side-nav side-nav-indicator content" 1fr
                "contact-buttons side-nav-indicator content" auto
                / 340px 30px minmax(0, 1fr);
            }

            .nav-links li:hover {
              transform: translateX(4px);
            }
          }

          @media (min-width: 1024px) {
            .root {
              grid:
                "side-nav side-nav-indicator content" 1fr
                "contact-buttons side-nav-indicator content" auto
                / 420px 30px minmax(0, 1024px);
            }
          }
        `}
      </style>
    </div>
  );
};

export default MyApp;
