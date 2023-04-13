export class Compte {

    public static fromJson(json: any): Compte {
        return new Compte(
            json['id'],
            json['login'],
            json['motdepasse'],
            json['email'],        
   
            );
    }
        
    constructor(public id: number ,
                public login: String,
                public motdepasse: String,              
                public email:String, 
                )
                { }
}
       