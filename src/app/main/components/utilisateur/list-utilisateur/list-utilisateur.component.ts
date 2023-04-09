import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiResponse } from '@youpez/api-response';
import { TableModel } from 'carbon-components-angular';
import { Utilisateur } from 'src/app/main/models/utilisateur'
import { UtilisateurService } from 'src/app/main/services/utilisateur.service'



@Component({
  selector: 'app-list-utilisateur',
  templateUrl: './list-utilisateur.component.html',
  styleUrls: ['./list-utilisateur.component.scss']
})
export class ListUtilisateurComponent implements OnInit {  

  users: Utilisateur[] = []; //tableau d utilisateur //=[] initialilisation de cette tableau vide

  constructor(
  //  public dialog: MatDialog,
    //public toastr: ToastrService,
    public utilisateurService: UtilisateurService,
  ) {
  }

  ngOnInit(): void {

    this.getAll();

  }
  //////////////////////////////////////////////////////////////
  getAll() {
    this.utilisateurService.getAll().subscribe((res: ApiResponse<Utilisateur>) => {

      this.users = res.data.map((item: Utilisateur) => Utilisateur.fromJson(item));

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


}
