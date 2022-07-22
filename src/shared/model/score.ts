class Score{

    private _id?: number;
    private _email?: string;
    private _score?: number;

    constructor(id?: number, email?: string, score?: number) {
        this._id = id;
        this._email = email;
        this._score = score;
    }

    get id() : number | undefined{
        return this._id
    }

    set id(id: number | undefined){
        this._id = id;
    }

    get email() : string | undefined{
        return this._email
    }

    set email(email: string | undefined){
        this._email = email;
    }

    get score() : number | undefined{
        return this._score
    }

    set score(score: number | undefined){
        this._score = score;
    }
}

export default Score;