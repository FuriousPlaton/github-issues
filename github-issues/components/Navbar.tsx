import { Navbar } from "react-bootstrap";
import { Wrapper } from "../styles/Navbar.styled";
import { SearchForm } from "../pages/form/SearchForm";

export const NavBar = ({ setKeyword }: any) => {
  return (
    <Wrapper>
      <Navbar.Brand href="#home">
        <img src="/public/logoGithub" alt="github logo"></img>
      </Navbar.Brand>
      <SearchForm setKeyword={setKeyword} />
    </Wrapper>
  );
};
