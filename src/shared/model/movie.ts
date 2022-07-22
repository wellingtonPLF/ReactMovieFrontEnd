class Movie{

    private _id?: number;
    private _count?: number;
    private _image?: string;
    private _score?: number;
    private _title?: string;

    constructor(id?: number, count?: number, image?: string, score?: number, title?: string) {
        this._id = id;
        this._count = count;
        this._image = image;
        this._score = score;
        this._title = title;
    }

    get id() : number | undefined{
        return this._id
    }

    set id(id: number | undefined){
        this._id = id;
    }

    get count() : number | undefined{
        return this._count
    }

    set count(count: number | undefined){
        this._count = count;
    }

    get image() : string | undefined{
        return this._image
    }

    set image(image: string | undefined){
        this._image = image;
    }

    get score() : number | undefined{
        return this._score
    }

    set score(score: number | undefined){
        this._score = score;
    }

    get title() : string | undefined{
        return this._title
    }

    set title(title: string | undefined){
        this._title = title;
    }
}

export default Movie;