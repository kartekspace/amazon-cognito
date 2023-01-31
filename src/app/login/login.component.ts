import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private authServcie: AuthService) {}

  ngOnInit(): void {}

  async login(): Promise<void> {
    try {
      const user = await Auth.signIn('kumaraishwarya7@gmail.com', 'Test@123');
      console.log(user);
      } catch (error) {
          console.log('error signing in', error);
      }
  }

  async register(): Promise<void> {
    try {
      const { user } = await Auth.signUp({
          username: 'kumaraishwarya7@gmail.com',
          password: 'Test@123',
          attributes: {
            //mm/dd/yyyy.
              birthdate: '26/03/1992',
              email: 'kumaraishwarya7@gmail.com',         
              phone_number: '+91963209736',    
              gender: 'Female',
              given_name: 'Aishwarya',
              preferred_username:'aish.karthi'      
          }
      });
      console.log(user);
      } catch (error) {
          console.log('error signing up:', error);
      }
  }

  async confirm(): Promise<void> {
    try {
      const result  =  await Auth.confirmSignUp('kumaraishwarya7@gmail.com', '459845');
      console.log(result);
    } catch (error) {
        console.log('error confirming sign up', error);
    }
  }

  async reConfirm(): Promise<void> {
    try {
      const { result } =  await Auth.resendSignUp('karthikeyan3189@gmail.com');
      console.log('code resent successfully');
    } catch (err) {
        console.log('error resending code: ', err);
    }
  }

  async signOut(): Promise<void> {
    try {
      await Auth.signOut();
    } catch (error) {
        console.log('error signing out: ', error);
    }
  }

  async globalSignOut(): Promise<void> {
    try {
      await Auth.signOut({ global: true });
    } catch (error) {
        console.log('error signing out: ', error);
    }
  }
}
