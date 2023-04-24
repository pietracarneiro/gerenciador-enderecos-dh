import './userRegisterScreen.css';
import Header from '../../components/Header'

function userRegisterScreen() {
    function handleSubmit(event) {
        event.preventDefault();
        console.log(event);
        alert('Deu certo!');
      }
    
      return (
        <>
        
        <Header title="Cadastro de usuário" />
        <main>
          <form onSubmit={handleSubmit}>
            <label>Nome</label>
            <input type="text" />
    
            <label>Email</label>
            <input type="email" />
    
            <button type="submit">Cadastrar</button>
          </form>
        </main>
        </>
      );
}

export default userRegisterScreen;