export class Repo {
    name : string;
    description : string;
    created_at : any;
    html_url : any;
    constructor (
        name : string,
        description : string,
        created_at : any,
        html_url : any
    ) {
        this.name = name;
        this.description = description;
        this.created_at = created_at;
        this.html_url = html_url;
    }
}
