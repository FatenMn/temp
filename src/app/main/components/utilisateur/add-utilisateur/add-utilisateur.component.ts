import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiResponse } from '@youpez/api-response';
import { NotificationService } from 'carbon-components-angular';
import { Utilisateur } from 'src/app/main/models/utilisateur';
import { UtilisateurService } from 'src/app/main/services/utilisateur.service';

@Component({
  selector: 'app-add-utilisateur',
  templateUrl: './add-utilisateur.component.html',
  styleUrls: ['./add-utilisateur.component.scss']
})
export class AddUtilisateurComponent implements OnInit {

  addform : FormGroup;
  submitted = false;
  
  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddUtilisateurComponent>,
    private notificationService: NotificationService,
    public utilisateurService: UtilisateurService)
    { 
    
    }

 public closeDialog() {
      this.dialogRef.close(false);
  }
  ngOnInit(): void {

    this.addform= this.fb.group({
      nom:['', [Validators.required,]],
      prenom: ['', [Validators.required,]],
      email: ['', [Validators.required, Validators.email]],
      condition: [true],
    }, {updateOn: 'blur'})
    
  }

  get formControl() { return this.addform.controls; }

//////////////////////////////////////////////////////////
  Add()
  {

    this.submitted = true;

    // stop here if form is invalid
    if (this.addform.invalid) {
        return;
    }
    console.log('Add', 'add-utilisateur.component.ts line:67 object', this.addform.value);
    this.utilisateurService.add(this.addform.value).subscribe(
      (res:ApiResponse<Utilisateur>) => {         
        this.dialogRef.close();
        if (res.status == '200') {

          this.notificationService.showToast({
            type: "info",
            title: "",
            subtitle: "",
            caption: "utilisateur enregistre avec succes",
            target: "#notificationHolder",
            message: "message",
            duration: 20000,
          })        }
        else {
          this.notificationService.showToast({
            type: "info",
            title: "",
            subtitle: "",
            caption: "veuillez verifier vos donnees",
            target: "#notificationHolder",
            message: "message",
            duration: 20000,
          })
        } 
      },    
      (err) => {
        console.log(err);

      });  
  }

/////////////////////////////////
isValid(name) {
  const instance = this.addform.get(name)
  return instance.invalid && (instance.dirty || instance.touched)
}


}
