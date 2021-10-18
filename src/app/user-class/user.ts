export class User {
       login :string;
       name : string;
       avatar_url:string;
       bio: string;
       public_repos : number;
       followers : number;
       following : number;
       repos_Url : string;
    constructor (
        login :string,
        name : string,
        avatar_url:string,
        bio: string,
        public_repos : number,
        followers : number,
        following : number,
        repos_Url : string
    ) {
       this.login = login;
       this.name = name;
       this.avatar_url = avatar_url;
       this.bio = bio;
       this.public_repos = public_repos;
       this.followers = followers;
       this.following = following;
       this.repos_Url  = repos_Url;

    }
}
