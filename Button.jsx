import "./Button.css";

const Button = ({ children, onClick, type = "button", className = "" }) => {
  return (
    <button onClick={onclick} type={type} className={`custom-btn ${className}`}>
      {children}
    </button>
  );
};

export default Button;
