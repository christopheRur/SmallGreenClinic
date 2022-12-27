import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from './patient';
import { GreenClinic } from './clinic';

@Injectable({
  providedIn: 'root'
})
export class GreenClinicService {
  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

public getPatients(): Observable<Patient[]>{
  return this.http.get<Patient[]>(`${this.apiServerUrl}/patient/all`);
}
public getClinicStatus(): Observable<GreenClinic[]>{

  return this.http.get<GreenClinic[]>(`${this.apiServerUrl}/clinicStatus`);
}

public addPatient(patient: Patient): Observable<Patient> {
  return this.http.post<Patient>(`${this.apiServerUrl}/patient/add`, patient);
}
public deletePatient(patientId: Number): Observable<void> {
  return this.http.delete<void>(`${this.apiServerUrl}/patient/delete/${patientId}`);
}

public retrievePatientById(patientId: Number): Observable<Patient>{
  return this.http.get<Patient>(`${this.apiServerUrl}/patient/find/${patientId}`);
}

}
