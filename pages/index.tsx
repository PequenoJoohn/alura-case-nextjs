import Footer from "../src/components/Footer";
import Link from "../src/components/Link";
import HomeScreen from "../src/components/Screens/HomeScreen";

function Title({ children, as }) {
  const Tag = as;
  return (
    <>
      <Tag>{children}</Tag>
      <style jsx>{`
        ${Tag} {
          color: red;
        }
      `}</style>
    </>
  );
}

export default function HomePage() {
  return <HomeScreen />;
}
