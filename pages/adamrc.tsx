import React from "react";

type Props = {};

const AdamRC = ({}: Props): React.ReactElement => {
  return (
    <div>
      <p className="mt-0">Some of my development environment configurations and recommended productivity tools.</p>
      <ul>
        <li>
          <a href="https://github.com/be5invis/iosevka" target="_blank" rel="noopener noreferrer">
            Iosevka
          </a>{" "}
          - By far my favorite font. Narrow to maximize screen real estate and still easy to read with optional
          ligatures.
        </li>

        <li className="mt-4">
          <a href="https://github.com/morhetz/gruvbox" target="_blank" rel="noopener noreferrer">
            Gruvbox
          </a>{" "}
          - Pleasing color scheme with just enough contrast and color variation. Implementations available for a wide
          variety of applications. My favorite is specifically the <em>dark hard</em> variant.
        </li>

        <li className="mt-4">
          <a href="https://www.jetbrains.com/" target="_blank" rel="noopener noreferrer">
            WebStorm
          </a>{" "}
          - All of JetBrain&apos;s offerings are amazing. I&apos;ve cycled through a lot of different editors and IDEs
          (Visual Studio, Vim, Emacs, Atom, VSCode) and I find nothing beats JetBrains when it comes to developer
          experience. Paired with IdeaVim it allows for unmatched productivity.
        </li>

        <li className="mt-4">
          <a
            href="https://gist.github.com/voxtex/7ac24f5436d32022d8c7980d54032f51"
            target="_blank"
            rel="noopener noreferrer"
          >
            .ideavimrc
          </a>{" "}
          - My custom configuration for IdeaVim. Enables all of the emulated plugins (surround, multiple cursors,
          easymotion are the most important) and some niceties such as using clipboard as default register, global
          replace by default, showing relative line numbers in the gutter, and preserving current mode when performing
          IDE refactoring.
        </li>

        <li className="mt-4">
          <a href="https://github.com/microsoft/PowerToys" target="_blank" rel="noopener noreferrer">
            PowerToys (Windows)
          </a>{" "}
          - Several utilities for Windows including window management (FancyZones) and an app launcher (PowerToys Run).
        </li>

        <li className="mt-4">
          <a href="https://www.alfredapp.com/" target="_blank" rel="noopener noreferrer">
            Alfred (OSX)
          </a>{" "}
          - Launcher to find apps, files, bookmarks, do quick math, search the web, and more.
        </li>

        <li className="mt-4">
          <a href="https://kapeli.com/dash" target="_blank" rel="noopener noreferrer">
            Dash (OSX)
          </a>{" "}
          or{" "}
          <a href="https://zealdocs.org/" target="_blank" rel="noopener noreferrer">
            Zeal (Windows)
          </a>{" "}
          - Offline documentation available at the press of a button.
        </li>
      </ul>
      <br />
      <p>
        This website is built with{" "}
        <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
          Next.js
        </a>{" "}
        using{" "}
        <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">
          TypeScript
        </a>{" "}
        and{" "}
        <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
          React
        </a>{" "}
        to generate fully static HTML.{" "}
        <a href="https://github.com/zeit/styled-jsx" target="_blank" rel="noopener noreferrer">
          styled-jsx
        </a>{" "}
        and{" "}
        <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
          tailwindcss
        </a>{" "}
        for styling.{" "}
        <a href="https://github.com/remarkjs/remark" target="_blank" rel="noopener noreferrer">
          remark
        </a>
        ,{" "}
        <a href="https://github.com/rehypejs/rehype" target="_blank" rel="noopener noreferrer">
          rehype
        </a>
        , and{" "}
        <a href="https://github.com/PrismJS/prism" target="_blank" rel="noopener noreferrer">
          Prism
        </a>{" "}
        to render the blog posts.
      </p>
    </div>
  );
};

export default AdamRC;
