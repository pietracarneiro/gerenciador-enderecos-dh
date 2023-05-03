import './header.css';
import { NavLink, Link } from 'react-router-dom';

function Header({title}){
    
    return(
        <header>
            <NavLink to='/'>Usuários</NavLink>
            <NavLink to='/registro'>Cadastrar usuário</NavLink>
            {/* <a href="/">Usuários</a>
            <a href="/registro">Cadastrar usuário</a> */}
            <h1>{title}</h1>
        </header>
    );
};

export default Header;