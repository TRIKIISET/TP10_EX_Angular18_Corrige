import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  loginForm!:FormGroup;
  readonly authService : AuthService = inject(AuthService);
  readonly router: Router = inject(Router);
  readonly fb: FormBuilder = inject(FormBuilder);
  displayError: boolean = false;
  ngOnInit(): void {
    this.loginForm =this.fb.nonNullable.group({
      login: ['', Validators.required],
      pwd: ['', Validators.required]
    })
  }
  onSubmit() {
    const {login, pwd}= this.loginForm.value;
    this.authService.login(login,pwd).subscribe(
      data =>{
        if(data ==="student")
          this.router.navigate(['/student'])
        else if( data =="teacher")
          this.router.navigate(['/teacher'])
        else{
          this.displayError = true;
          this.router.navigate(['/extranet'])
        }

      }
    )

  }
}
