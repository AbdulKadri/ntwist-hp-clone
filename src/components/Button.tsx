interface ButtonProps {
  bgcolor: string;
  text: string;
}

// Can add link prop
const Button: React.FC<ButtonProps> = ({ bgcolor, text }) => {
  return (
    <button
      style={{
        backgroundColor: bgcolor,
        width: "150px",
        height: "35px",
        color: "white",
        padding: "0 33px",
        borderRadius: "3px",
        fontSize: "14px",
        fontWeight: "bold",
      }}
    >
      {text}
    </button>
  );
};

export default Button;
