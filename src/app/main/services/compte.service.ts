import { Injectable } from '@angular/core';
import { Compte } from '../models/compte';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/@youpez/api-response';
import { HttpClient } from '@angular/common/http';
import { url } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompteService {

  constructor(public httpClient: HttpClient) { }

    public activateAccount(id: any): Observable<ApiResponse<Compte>> {
      return this.httpClient.put<ApiResponse<Compte>>(url.url_compte + 'activateAccount/'+id,'');
    }
    
    public desactivateAccount(id: any): Observable<ApiResponse<Compte>> {
      return this.httpClient.put<ApiResponse<Compte>>(url.url_compte + 'desactivateAccount/'+id,'');
    }

}
