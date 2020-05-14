import clsx from "clsx";
import React from "react";
import githubIcon from "../assets/github-light.png";
import linkedinIcon from "../assets/linkedin.svg";
import mailIcon from "../assets/mail.svg";
import stackoverflowIcon from "../assets/stackoverflow.svg";

export type SocialButtonType = "stackoverflow" | "linkedin" | "github" | "email";

const CONTACT_ICONS = {
  stackoverflow: {
    src: stackoverflowIcon,
    alt: "Stack Overflow",
    href: "http://stackoverflow.com/users/2639178/adamk",
  },
  linkedin: { src: linkedinIcon, alt: "LinkedIn", href: "http://www.linkedin.com/in/adamkrasny" },
  github: { src: githubIcon, alt: "GitHub", href: "https://github.com/voxtex" },
  email: { src: mailIcon, alt: "Email", href: "mailto:adam@adamkrasny.com" },
};

type Props = {
  className?: string;
  type: SocialButtonType;
  size?: number;
};

const ContactButton = ({ className, type, size = 50 }: Props): React.ReactElement => {
  const icon = CONTACT_ICONS[type];
  return (
    <a
      key={icon.src}
      className={clsx("contact-button p-1 inline-flex justify-center cursor-pointer", className)}
      href={icon.href}
      target="_blank"
      style={{ minWidth: size, height: size }}
      rel="noopener noreferrer"
    >
      <img src={icon.src} alt={icon.alt} />

      <style jsx>
        {`
          .contact-button {
            min-width: 50px;
            height: 50px;
            background-color: rgba(255, 255, 255, 0.05);
            transition: 0.3s transform cubic-bezier(0.5, 1, 0.89, 1),
              0.3s background-color cubic-bezier(0.5, 1, 0.89, 1);
          }

          .contact-button:hover {
            transform: scale(1.1);
            transform-origin: center;
            background-color: rgba(255, 255, 255, 0.1);
          }

          .contact-button img {
            height: 100%;
            width: auto;
          }
        `}
      </style>
    </a>
  );
};

export default ContactButton;
