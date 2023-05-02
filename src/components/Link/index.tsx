import NextLink from "next/link";
import LinkPerson from "../LinkPerson";

export default function Link({ children, href, ...props }) {
  return (
    <NextLink href={href} passHref legacyBehavior>
      <LinkPerson {...props}>{children}</LinkPerson>
    </NextLink>
  );
}
