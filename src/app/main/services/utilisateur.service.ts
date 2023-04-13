import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Utilisateur } from '../models/utilisateur';
import { url } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/@youpez/api-response';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(public httpClient: HttpClient) { }


  public getAll(): Observable<ApiResponse<Utilisateur>> {
      return this.httpClient.get<ApiResponse<Utilisateur>>(url.url_user+'findAll');
    }
  
    public edit(id: any, data: any): Observable<ApiResponse<Utilisateur>> {
  
      return this.httpClient.put<ApiResponse<Utilisateur>>(url.url_user + 'update/' + id, data);
    }
  
    public add(data: any): Observable<ApiResponse<Utilisateur>> {
  
      return this.httpClient.post<ApiResponse<Utilisateur>>(url.url_user + 'save', data);
    }

    public findById(id: any): Observable<ApiResponse<Utilisateur>> {
      return this.httpClient.get<ApiResponse<Utilisateur>>(url.url_user + 'findById/'+id);
    }
    
    public delete(id: any): Observable<ApiResponse<Utilisateur>> {
      return this.httpClient.delete<ApiResponse<Utilisateur>>(url.url_user+'deleteById/'+ id);
  
    }



}
