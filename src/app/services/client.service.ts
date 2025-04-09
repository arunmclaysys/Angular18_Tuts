import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { client } from '../model/class/client';
import { APIResponseModel } from '../model/interface/role';
import { environment } from '../../environments/environment.development';
import { Constant } from '../constant/Constant';


@Injectable({
  providedIn: 'root'
})
export class ClientService {
  addUpdateProject(value: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  getAllClients(): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>(environment.API_URL + Constant.API_METHOD.GET_ALL_CLIENT);
  }

  getAllEmployees(): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>(environment.API_URL + Constant.API_METHOD.GET_ALL_EMP);
  }

  addUpdate(obj: client): Observable<APIResponseModel> {
    return this.http.post<APIResponseModel>(environment.API_URL + "AddUpdateClient", obj);
  }

  deleteClientById(id: number): Observable<APIResponseModel> {
    return this.http.delete<APIResponseModel>(environment.API_URL + "DeleteClientByClientId?clientId=" + id);
  }

  addClientProjectUpdate(obj: client): Observable<APIResponseModel> {
    return this.http.post<APIResponseModel>(environment.API_URL + "AddUpdateClientProject", obj);
  }

  getAllUsers(){
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }

  getAllClientProjects(): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>(environment.API_URL + Constant.API_METHOD.GET_ALL_PROJECT);
  }

}
