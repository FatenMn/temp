export class Utilisateur {
    
        public static fromJson(json: any): Utilisateur {
            return new Utilisateur(
                json['id'],
                json['nom_Emp'],
                json['prenom_Emp'],
                json['email_Emp'],  
                json['Num_tel'],
                json['sexe_Emp'],       
                json['num_cin'],       
                json['grade'],       
                json['adresse'],       
       
                );
        }
            
        constructor(public id: number,
                    public nom_Emp: String,
                    public prenom_Emp: String,              
                    public email_Emp:String, 
                    public Num_tel:number, 
                    public sexe_Emp:String,
                    public num_cin:number,
                    public grade:String,
                    public adresse:String



                    )
                    { }
    }
           