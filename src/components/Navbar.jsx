import { Link } from "react-router-dom"

const Navbar = () => {
    return (
      <div>
        <Link to={"/"}>Sobre</Link>
        <Link to={"/Skills"}>Skill</Link>
        <Link to={"/Projects"}>Projetos</Link>
        <Link to={"/Contact"}>Contato</Link>
      </div>
    );
}

export default Navbar