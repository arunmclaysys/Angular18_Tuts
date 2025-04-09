import { Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { APIResponseModel, ClientProject, Employee } from '../../model/interface/role';
import { client } from '../../model/class/client';
import { DatePipe } from '@angular/common';
import { AlertComponent } from '../../reusableComponents/alert/alert.component';

//In this component we are using reactive form, where as Client component we are using template form.
@Component({
  selector: 'app-client-project',
  imports: [ReactiveFormsModule,DatePipe,AlertComponent],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css'
})
export class ClientProjectComponent implements OnInit {

  projectForm: FormGroup = new FormGroup({
    clientProjectId: new FormControl(0),    //Primary key we initialize with zero.
    projectName: new FormControl('', [Validators.required, Validators.minLength(5)]),
    startDate: new FormControl(''),
    expectedEndDate: new FormControl(''),
    leadByEmpId: new FormControl(''),
    completedDate: new FormControl(''),
    contactPerson: new FormControl(''),
    contactPersonContactNo: new FormControl(''),
    totalEmpWorking: new FormControl(''),
    projectCost: new FormControl(''),
    projectDetails: new FormControl(''),
    contactPersonEmailId: new FormControl(''),
    clientId: new FormControl('')
  });

  clientSrv = inject(ClientService);
  employeeList: Employee[] = [];
  clientList: client[] = [];

  //signal
  firstName = signal("Arun_learns");
  projectList = signal<ClientProject[]>([]);  //The ClientProject[] mentioned here is the interface.

  ngOnInit(): void {
    const name = this.firstName();
    this.getAllEmployees();
    this.getAllClients();
    this.getAllClientProject();
  }

  changeFName() {
    this.firstName.set("Manu");
  }

  getAllClientProject() {
    this.clientSrv.getAllClientProjects().subscribe((result: APIResponseModel) => {
      this.projectList.set(result.data);
    });
  }

  getAllEmployees() {
    this.clientSrv.getAllEmployees().subscribe((result: APIResponseModel) => {
      this.employeeList = result.data;
    });
  }

  getAllClients() {
    this.clientSrv.getAllClients().subscribe((result: APIResponseModel) => {
      this.clientList = result.data;
    });
  }

  onSaveProject() {
    const formValue = this.projectForm.value;
    this.clientSrv.addClientProjectUpdate(formValue).subscribe((res: APIResponseModel) => {
      if (res.result) {
        alert("Project created/saved successfully");
      } else {
        alert(res.message);
      }
    });
  }

}
