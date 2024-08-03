import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { isEmpty } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserServiceService } from 'src/app/services/user-service.service';
import * as alertyfy from 'alertifyjs';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit{

  registrationForm!: FormGroup;
  user!: User;
  userSubmitted! : boolean;
  
  constructor(private fb: FormBuilder, 
    private userService: UserServiceService,
    private alertyfyService : AlertifyService){ 
   
  }

  //Using FormGroup
  ngOnInit(): void {
    // this.registrationForm = new FormGroup({
    //   userName : new FormControl(null,Validators.required),
    //   userEmail : new FormControl(null, [Validators.required, Validators.email]),
    //   userPass : new FormControl(null, [Validators.required, Validators.minLength(5)]),
    //   userCPass :  new FormControl(null, Validators.required),
    //   userMobile : new FormControl(null, [Validators.required, Validators.maxLength(10)])
      
    // })
    this.CreateRegistrationForm();
  }

  //using FormBuilder
  CreateRegistrationForm(){
    this.registrationForm = this.fb.group({
      userName : ['Ashish',Validators.required],
      userEmail : ['Ashish@gmail.com', [Validators.required, Validators.email]],
      userPass : ['123456', [Validators.required, Validators.minLength(5)]],
      userCPass :  ['123456', Validators.required],
      userMobile : ['8108988659', [Validators.required, Validators.maxLength(10)]]
  })
}

  onSubmit(){
    //console.log(this.registrationForm); 
    this.userSubmitted = true; 
    if(this.registrationForm.valid)
    { 
        this.userService.addUser(this.userData())  
        this.registrationForm.reset(); 
        this.userSubmitted = false;
        this.alertyfyService.success('Congrats, you are successfully registered');
    }
    else{
      this.alertyfyService.error('Kindly provide the all the required details');
    }

  }

  userData(): User {
    return this.user = {
      name : this.userName.value,
      email : this.email.value,
      password : this.password.value,
      mobile : this.mobile.value
    }
  }

  get userName(){
    return this.registrationForm.get('userName') as FormControl
  }
  get email(){
    return this.registrationForm.get('userEmail') as FormControl
  }
  get password(){
    return this.registrationForm.get('userPass') as FormControl
  }
  get mobile(){
    return this.registrationForm.get('userName') as FormControl
  }

  


}