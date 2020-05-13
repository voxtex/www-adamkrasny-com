import Link from "next/link";
import React from "react";

type Props = {
  href: string;
  onMouseEnter: React.MouseEventHandler<HTMLAnchorElement>;
  onMouseLeave: React.MouseEventHandler<HTMLAnchorElement>;
  text: string;
};

const SideNavLink = React.forwardRef<HTMLAnchorElement, Props>(
  ({ href, onMouseEnter, onMouseLeave, text }, ref): React.ReactElement => (
    <li>
      <Link href={href}>
        <a
          className="text-xl block hover:cursor-pointer py-2 text-white hover:text-white hover:text-opacity-75"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          ref={ref}
        >
          {text}
        </a>
      </Link>

      <style jsx>
        {`
          li {
            transition: 0.3s transform cubic-bezier(0.5, 1, 0.89, 1);
          }

          li:hover {
            transform: translateX(4px);
          }
        `}
      </style>
    </li>
  ),
);

export default SideNavLink;
