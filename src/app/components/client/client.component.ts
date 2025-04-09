import { Component, inject, OnInit } from '@angular/core';
import { RolesComponent } from '../roles/roles.component';
import { client } from '../../model/class/client';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { APIResponseModel } from '../../model/interface/role';
import { AsyncPipe, DatePipe, JsonPipe, UpperCasePipe } from '@angular/common';
import { Observable } from 'rxjs';
import { AlertComponent } from '../../reusableComponents/alert/alert.component';
import { MyButtonComponent } from '../../reusableComponents/my-button/my-button.component';

@Component({
  selector: 'app-client',
  imports: [RolesComponent,FormsModule,UpperCasePipe,DatePipe,JsonPipe,AsyncPipe,AlertComponent,MyButtonComponent],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent {

  //Async pipe is used to subscribe to the observable.,so we create it
  //using $ at the end for observables, as per industry standard naming convention.
  userList$ :Observable<any>= new Observable<any>;

  currentDate:Date = new Date();
  clientObj: client = new client(); 
  //Creating new instance, so ctor will be called and properties will be initialized properly.
  //initializing interface is tedious, initializing class in easy, so we are doing it in client.ts
  clientList:client[] = [];
  clientService = inject(ClientService);

  ngOnInit():void {
    this.loadClient();
    this.userList$ = this.clientService.getAllUsers();
  }

  loadClient() {
    this.clientService.getAllClients().subscribe((res:APIResponseModel)=>{
      this.clientList = res.data;
    })
  }

  onSaveClient(data:string) {
    debugger;
    this.clientService.addUpdate(this.clientObj).subscribe((res:APIResponseModel)=>{
      if(res.result) {
        alert("client created/saved successfully");
        this.loadClient();
        this.clientObj = new client();
      } else {
        alert(res.message);
      }
    })
  }

  onDeleteClient (id:number) {
    const idDelete = confirm("Are you sure you want to delete this client?");
    if(idDelete) {
      this.clientService.deleteClientById(id).subscribe((res:APIResponseModel)=>{
        if(res.result) {
          alert("client deleted successfully");
          this.loadClient();
          this.clientObj = new client();
        } else {
          alert(res.message);
        }
      })
    } else {
      return;
    }
  }

  onEditClient(clientObj:client) {
    this.clientObj = clientObj;
  }


}
