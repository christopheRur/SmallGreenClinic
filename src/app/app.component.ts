import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GreenClinic } from './clinic';
import { GreenClinicService } from './green-clinic.service';
import { Patient } from './patient';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  public patients!: Patient[];
  public updatePatient!: Patient;
  public deletePatient!: Patient;
  public theClinic!: GreenClinic[];


  constructor(private clinicService: GreenClinicService){}

  ngOnInit() {
    this.getPatients();
   // this.getClinicDetails();
  }
  public getPatients(): void {
    this.clinicService.getPatients().subscribe(
      (response: Patient[]) => {
        this.patients = response;
        console.log(this.patients);
      },
      (error: HttpErrorResponse) => {

        alert(error.message);

      }
    );
  }

  public getClinicDetails(): void {
    this.clinicService.getClinicStatus().subscribe(
      (response: GreenClinic[]) => {
        this.theClinic = response;
        console.log(this.theClinic);
      },
      (error: HttpErrorResponse) => {

        alert(error.message);

      }
    );
  }

}
