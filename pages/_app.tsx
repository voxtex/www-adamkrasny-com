import Head from "next/head";
import Link from "next/link";
import "prismjs/themes/prism-tomorrow.css";
import React from "react";
import Rolodex from "../components/rolodex";
import SideNavIndicator from "../components/side-nav-indicator";
import SideNavLink from "../components/side-nav-link";
import SocialButton from "../components/social-button";
import useSideNavIndicator from "../hooks/use-side-nav-indicator";
import "../styles/index.css";

const ROLODEX_ITEMS = ["Software Engineer", "Technical Support", "Bicyclist", "Sometimes Napping", "Always Hungry"];

type Props = {
  Component: React.ComponentType;
  pageProps: never;
};

const MyApp = ({ Component, pageProps }: Props): React.ReactElement => {
  const { handleMouseEnter, handleMouseLeave, indicatorProps, registerAnchorElement } = useSideNavIndicator();

  return (
    <div className="root">
      <Head>
        <title>Adam Krasny</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
      </Head>
      <nav className="bg-black bg-opacity-50 px-6 text-white text-center pb-3 md:pb-0 md:text-left">
        <Link href="/">
          <a
            className="block mt-6 text-white hover:text-white hover:text-opacity-75"
            ref={registerAnchorElement}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <h1 className="text-5xl">Adam Krasny</h1>
          </a>
        </Link>
        <h2 className="text-xl mt-2 flex flex-wrap justify-center md:justify-start">
          <Rolodex items={ROLODEX_ITEMS} className="pr-2" />
          <div> in San Jose, CA</div>
        </h2>
        <ul className="nav-links list-none font-sans flex justify-around mt-4 md:mt-16 md:block">
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
        id="social-buttons"
        className="social-buttons bg-black bg-opacity-50 flex items-center p-2 border-t px-6"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <SocialButton type="stackoverflow" className="mr-4" />
        <SocialButton type="linkedin" className="mr-4" />
        <SocialButton type="github" className="mr-4" />
        <SocialButton type="email" />
      </div>
      <div className="hidden md:block">
        <SideNavIndicator className="side-nav-indicator w-full" {...indicatorProps} />
      </div>
      <main className="bg-white py-10 px-8">
        <Component {...pageProps} />
      </main>

      <style jsx>
        {`
          .root {
            min-height: 100vh;
            display: grid;
            grid:
              "side-nav" auto
              "content" 1fr
              "social-buttons" auto;
          }

          nav {
            backdrop-filter: blur(5px);
            grid-area: side-nav;
          }

          .nav-links li {
            transition: 0.3s transform cubic-bezier(0.5, 1, 0.89, 1);
          }

          .side-nav-indicator-holder {
            grid-area: side-nav-toggle;
          }

          .social-buttons {
            backdrop-filter: blur(5px);
            grid-area: social-buttons;
            border-top-color: rgba(255, 255, 255, 0.05);
          }

          main {
            grid-area: content;
          }

          @media (min-width: 768px) {
            .root {
              grid:
                "side-nav side-nav-toggle content" 1fr
                "social-buttons side-nav-toggle content" auto
                / 340px 30px 1fr;
            }

            .nav-links li:hover {
              transform: translateX(4px);
            }
          }

          @media (min-width: 1024px) {
            .root {
              grid:
                "side-nav side-nav-toggle content" 1fr
                "social-buttons side-nav-toggle content" auto
                / 420px 30px minmax(min-content, 840px);
            }
          }
        `}
      </style>
    </div>
  );
};

export default MyApp;
