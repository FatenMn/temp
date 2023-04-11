import { Component, Input, OnInit } from '@angular/core';
import { ApiResponse } from '@youpez/api-response';
import { Utilisateur } from 'src/app/main/models/utilisateur'
import { UtilisateurService } from 'src/app/main/services/utilisateur.service'
import Swal from 'sweetalert2';
import {NotificationService} from "carbon-components-angular"
import { AddUtilisateurComponent } from '../add-utilisateur/add-utilisateur.component';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-list-utilisateur',
  templateUrl: './list-utilisateur.component.html',
  styleUrls: ['./list-utilisateur.component.scss']
})
export class ListUtilisateurComponent implements OnInit {  

  users: Utilisateur[] = []; //tableau d utilisateur //=[] initialilisation de cette tableau vide

  constructor(
  //  public dialog: MatDialog,
   // public toastr: ToastrService,
    public utilisateurService: UtilisateurService,
    private notificationService: NotificationService,
    public dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {

    this.getAll();

  }
  //////////////////////////////////////////////////////////////
  getAll() {
    this.utilisateurService.getAll().subscribe((res: ApiResponse<Utilisateur>) => {

      this.users = res.data.map((item: Utilisateur) => Utilisateur.fromJson(item));
      console.log('users######### ',this.users);
    })

  }


  ////////////////////////////////////////////////////////////
  /*openDialogedit(item: any) {
    return this.dialog.open(EditBaseSondageComponent, {
      width: '95%',
      panelClass: 'confirm-dialog-container',
      autoFocus: false,
      height: '90%',
      disableClose: true,

      data: {
        rowdata: item

      }

    }).afterClosed().subscribe(result => { })
  }*/

////////////////////////////////////////////////////////////
delete(id:any) {

  Swal.fire({ //Show Popup Confirmation

    /************************************************************ Popup Settings  */
    title: 'Attention',
    text:  'Voulez-vous supprimer ce utilisateur ?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    cancelButtonText: 'Non',
    confirmButtonText: 'Oui'
    /************************************************************ Popup Result  */

  }).then((result) => {
    if (result.isConfirmed) { /***> If Confirmed  **/

    this.utilisateurService.delete(id).subscribe(
      (res: ApiResponse<Utilisateur>) => {

        if (res.status == '200') {
          this.notificationService.showToast({
            type: "info",
            title: "",
            subtitle: "",
            caption: "utilisateur supprime avec succes",
            target: "#notificationHolder",
            message: "message",
            duration: 20000,
          })
          }
        
        else {
          this.notificationService.showToast({
            type: "error",
            title: "",
            subtitle: "",
            caption: "erroooooooooooooor",
            target: "#notificationHolder",
            message: "message",
            duration: 20000,
          })
          } 
      
        this.getAll();

      },
      (err) => {
        console.log(err);
        //this.toastr.error('Error');
      }
         );     
    }
  })
 
}
/////////////////////////////////////////////
openDialogadd() {
  return this.dialog.open(AddUtilisateurComponent, {
    width: '1000px',
    panelClass: 'confirm-dialog-container',
    disableClose: true,
  }).afterClosed().subscribe(result => { this.getAll(); });
}
}
