import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GreenClinic } from '../clinic';
import { GreenClinicService } from '../green-clinic.service';
import { Patient } from '../patient';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.css']
})
export class ProviderComponent implements OnInit {

  public patients!: Patient[];
  public updatePatient!: Patient;
  public deletePatient!: Patient;
  public theClinic!: GreenClinic[];
  public hideForm: boolean=true;
  public dialogue: boolean=true;






  constructor(private clinicService: GreenClinicService){}

  ngOnInit(): void {
    this.getPatients();
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

  public onAddPatient(addForm: NgForm): void {
    document.getElementById('btnfO')?.click();
   this.clinicService.addPatient(addForm.value).subscribe(
     (response: Patient) => {
       console.log(response);
       this.getPatients();
       addForm.reset();
     },
     (error: HttpErrorResponse) => {
       alert(error.message);
       addForm.reset();
     }
   );
 }

 public deleteById(patientId: number){
  this.clinicService.deletePatient(patientId).subscribe(
    (response: void) => {
    console.log("You are here!!!!!");

  },
  (error: HttpErrorResponse) => {
    alert(error.message);
  }
    )
}

public removePatientOnce(patientArr: Patient[], patient: Patient) {
  var index = patientArr.indexOf(patient);
  if (index > -1) {
    patientArr.splice(index, 1);
    console.log(patient);
  }
}

      public onDeleteUser(patientId: number){

        document.getElementById('remPat')?.click();

try {
  this.clinicService.retrievePatientById(patientId).subscribe(
    (response: Patient) => {

    if(patientId==response.id) {

      this.deleteById(patientId);

      this.removePatientOnce(this.patients, response)
    }

  else console.log(response);

  },
  (error: HttpErrorResponse) => {
    alert(error.message);
  }
    )

this.closeDialogue();

} catch (error) {

  alert(error);

}


       }





  openForm() {

  if(this.hideForm){
    this.hideForm=false;
  }

  }

  closeForm() {
    if(this.hideForm==false)
    this.hideForm=true;
    }

    openDialague() {

      if(this.dialogue){
        this.dialogue=false;
      }


      }

      closeDialogue() {
        if(this.dialogue==false)
        this.dialogue=true;
        }


}
