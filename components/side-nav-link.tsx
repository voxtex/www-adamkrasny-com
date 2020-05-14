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
    <>
      <Link href={href}>
        <a
          className="text-xl block hover:cursor-pointer px-4 py-2 text-white hover:text-white hover:text-opacity-75 md:px-0"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          ref={ref}
        >
          {text}
        </a>
      </Link>
    </>
  ),
);

export default SideNavLink;
