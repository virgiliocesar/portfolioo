import { Link } from "react-router"

const Navbar = () => {
    return (
      <div>
        <Link to={"/"}>Sobre</Link>
        <Link to={"/skills"}>Skill</Link>
        <Link to={"/projects"}>Projetos</Link>
        <Link to={"/contact"}>Contato</Link>
      </div>
    );
}

export default Navbar