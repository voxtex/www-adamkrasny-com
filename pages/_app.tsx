import Link from "next/link";
import "prismjs/themes/prism-tomorrow.css";
import React from "react";
import SocialButton, { SocialButtonType } from "../components/social-button";
import "../styles/index.css";

const SOCIAL_BUTTONS: SocialButtonType[] = ["stackoverflow", "linkedin", "github", "email"];

type Props = {
  Component: React.ComponentType;
  pageProps: never;
};

const MyApp = ({ Component, pageProps }: Props): React.ReactElement => {
  return (
    <div className="root">
      <nav className="side-nav bg-black bg-opacity-50 px-6 text-white">
        <Link href="/">
          <a className="block mt-6 text-white hover:text-white hover:text-opacity-75">
            <h1 className="text-5xl">Adam Krasny</h1>
          </a>
        </Link>
        <h2 className="text-xl mt-2">Software Engineer in San Jose, CA</h2>
        <ul className="nav-links list-none mt-16 font-sans">
          <li>
            <Link href="/career">
              <a className="text-xl block hover:cursor-pointer py-2 text-white hover:text-white hover:text-opacity-75">
                Career
              </a>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <a className="text-xl block hover:cursor-pointer py-2 text-white hover:text-white hover:text-opacity-75">
                Projects
              </a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a className="text-xl block hover:cursor-pointer py-2 text-white hover:text-white hover:text-opacity-75">
                Blog
              </a>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="social-buttons bg-black bg-opacity-50 flex items-center p-2 border-t px-6">
        {SOCIAL_BUTTONS.map((sb) => (
          <SocialButton key={sb} type={sb} className="mr-4" />
        ))}
      </div>
      <div className="side-nav-indicator"></div>
      <div className="content bg-white py-10 px-8">
        <Component {...pageProps} />
      </div>

      <style jsx>
        {`
          .root {
            min-height: 100vh;
            display: grid;
            grid-template-columns: 420px 30px 840px 1fr;
            grid-template-rows: 1fr auto;
            grid-template-areas: "side-nav side-nav-toggle content ." "social-buttons side-nav-toggle content .";
          }

          .side-nav {
            backdrop-filter: blur(5px);
            grid-area: side-nav;
          }

          .nav-links li {
            transition: 0.3s transform cubic-bezier(0.5, 1, 0.89, 1);
          }

          .nav-links li:hover {
            transform: translateX(4px);
          }

          .side-nav-indicator {
            grid-area: side-nav-toggle;
          }

          .social-buttons {
            backdrop-filter: blur(5px);
            grid-area: social-buttons;
            border-top-color: rgba(255, 255, 255, 0.05);
          }

          .content {
            grid-area: content;
          }
        `}
      </style>
    </div>
  );
};

export default MyApp;
