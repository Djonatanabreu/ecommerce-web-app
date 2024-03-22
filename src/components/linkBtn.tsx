import Link from "next/link";

export const linkBtn = ({ children, href }) => {
  return (
    <>
      <Link style={{ color: "green", textDecoration: "none" }} href={href}>
        {children}
      </Link>
    </>
  );
};
