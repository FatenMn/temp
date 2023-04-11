export  class Utilisateur {
    
        public static fromJson(json: any): Utilisateur {
            return new Utilisateur(
                json['id'],
                json['nom'],
                json['prenom'],
                json['email'],  
                json['Numtel'],
                json['sexe'],           
                json['adresse'],       
       
                );
        }
            
        constructor(public id: number ,
                    public nom: String,
                    public prenom: String,              
                    public email:String, 
                    public numtel:number, 
                    public sexe:String,
                    public adresse:String

                    )
                    { }
    }
           