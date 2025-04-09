// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-roles',
//   imports: [FormsModule],
//   templateUrl: './roles.component.html',
//   styleUrl: './roles.component.css'
// })
// export class RolesComponent {
//   firstName:string = "AngularTutorial";
//   angularVersion: number = 18;
//   isActive:boolean = true;
//   currentDate:Date = new Date();
//   inputType:string = "radio";
//   selectedState:string = "";

//   showWelcomeAlert () {
//     alert("Welcome Agulat18 tut")
//   }
//   showMessage(message:string){
//     alert(message)
//   }
// }

//<!----Trying to use API---->
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { APIResponseModel, IRole } from '../../model/interface/role';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-roles',
    standalone: true,
    imports: [FormsModule, CommonModule],
    templateUrl: './roles.component.html',
    styleUrl: './roles.component.css'
  })

export class RolesComponent implements OnInit{
  roleList: IRole [] = [];
  http = inject(HttpClient);

  ngOnInit(): void {
     this.getAllRoles();
  }

  getAllRoles() {
    this.http.get<APIResponseModel>("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles").subscribe((res:APIResponseModel)=>{
      this.roleList = res.data; 
    });
    
  }


}