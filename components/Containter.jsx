import PropTypes from "prop-types";

const Containter = ({ children, style }) => {
  return (
    <section className={`container w-[75%] mx-auto ${style}`}>
      {children}
    </section>
  );
};

Containter.propTypes = {
  children: PropTypes.element,
  style: PropTypes.string,
};

export default Containter;
