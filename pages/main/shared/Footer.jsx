import FooterMain from "../../../components/Footer/FooterMain";
import SectionBackground from "../../../components/SectionBackground";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* section bg img */}
      <SectionBackground />

      {/* footer content */}
      <FooterMain />
    </footer>
  );
};

export default Footer;
