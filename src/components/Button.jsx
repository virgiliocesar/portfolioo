import { Link } from "react-router-dom";

export const Button = ({ to, link, text }) => {
  const handleClick = () => {
    if (!to && link) {
      window.open(link, "_blank");
    }
  };

  if (to) {
    return (
      <Link to={to}>
        <button>{text}</button>
      </Link>
    );
  } else if (link) {
    return <button onClick={handleClick}>{text}</button>;
  } else {
    return null;
  }
};
