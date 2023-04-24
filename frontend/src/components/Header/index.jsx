import './header.css';

function Header({title}){
    
    return(
        <header>
            <a href="1">Usuários</a>
            <a href="2">Cadastrar usuário</a>
            <a href="3">Cadastrar endereço</a>
            <h1>{title}</h1>
        </header>
    );
};

export default Header;