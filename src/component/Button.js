import PropTypes from "prop-types";
const Button = ({ color, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      type="button"
      className="btn"
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "stellblue",
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onclick: PropTypes.func,
};

export default Button;
