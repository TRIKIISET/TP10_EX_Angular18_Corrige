import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(username:string, pwd:string): Observable<string>{

    let space: string="forbidden";
    if(username === "prof" && pwd==="pwdProf")
      space= "teacher";
    else if(username === "etud" && pwd==="pwdEtud")
      space= "student";
    localStorage.setItem("espace",space);
    return of(space);
  }

  logout(){
    localStorage.setItem("espace","forbidden");
  }
}
