import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { IProfessional } from '../../../models/user/user.model';

@Injectable({
  providedIn: 'root'
})
export class ProfessionalService {
  professionals: IProfessional[];
  professionalCount: number;
  constructor(private http: HttpClient) { }
  getProfessionals(profession: string) {
    return this.http.get<{ documentResponse: IProfessional[] }>('http://localhost:7071/api/user?profession=' + profession).pipe(
      map((result: any) => {
        this.professionals = result.documentResponse;
        this.professionalCount = this.professionals.length;
        return this.professionals;
      })
    );
  }

  getProfesional(id: string) {
    let index = this.professionals.map(x => x.id).indexOf(id);
    let professional = this.professionals[index];
    return professional;
  }
}
