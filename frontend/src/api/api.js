import axios from 'axios';

// Criamos a variável api e atribuimos a ela axios.create, que será o inicio e a estrutura base do serviço de API que será guardada
const api = axios.create({
    // Receberemos uma chabe baseURL, que indica o endpoint da aplicação que vamos consumir
    baseURL: 'http://localhost:3333/api'
});

export default api;