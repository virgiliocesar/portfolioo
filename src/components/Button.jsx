import { Link } from "react-router-dom";

export const Button = ({ link, text }) => {
  const handleClick = () => {
    window.open(link, "_blank");
  };
  return <button onClick={handleClick}>{text}</button>;
};

export const Button2 = ({ to, text }) => {
  return (
    <Link to={to}>
      <button>{text}</button>
    </Link>
  );
};
