import axios from "axios";
import Score from "shared/model/score";

class ScoreService {
    
    api = axios.create({ baseURL: process.env.REACT_BACKEND ?? 
        'http://localhost:8085/scores'})

    constructor() {
    }

    /*async listar(){
        const { data } = await this.api.get('/');
        return data;
    }

    async inserir(score: Score){
        const { data } = await this.api.post('/', score);
        return data;
    }

    async remover(id: number){
        const { data } = await this.api.delete(`/${id}`);
        return data;
    }

    async pesquisarPorId(id: number){
        const { data } = await this.api.get(`/${id}`);
        return data;
    }*/

    async atualizar(score: Score){
        const result = {movieId: score.id, email: score.email, score: score.score}
        const { data } = await this.api.put('/', result);
        return data;
    }
}

export default new ScoreService();