import axios from "axios";
import Movie from "shared/model/movie";

class MovieService {
    
    api = axios.create({ baseURL: process.env.REACT_BACKEND ?? 
        'http://localhost:8085/movies'})

    constructor() {
    }

    async listar(){
        const { data } = await this.api.get('/');
        return data;
    }

    async getByPageNumber(num: number){
        const { data } = await this.api.get(`?size=12&page=${num}/`);
        return data;
    }

    async inserir(movie: Movie){
        const { data } = await this.api.post('/', movie);
        return data;
    }

    async remover(id: number){
        const { data } = await this.api.delete(`/${id}`);
        return data;
    }

    async pesquisarPorId(id: number){
        const { data } = await this.api.get(`/${id}`);
        return data;
    }

    async atualizar(movie: Movie){
        const { data } = await this.api.put('/', movie);
        return data;
    }
}

export default new MovieService();