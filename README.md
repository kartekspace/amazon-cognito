# MyFirstProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Amazon cognito Configurations

    Amplify.configure({
    Auth: {

        // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
        //identityPoolId: 'XX-XXXX-X:XXXXXXXX-XXXX-1234-abcd-1234567890ab',

        // REQUIRED - Amazon Cognito Region
        region: 'us-east-2',

        // OPTIONAL - Amazon Cognito Federated Identity Pool Region 
        // Required only if it's different from Amazon Cognito Region
        identityPoolRegion: 'us-east-2',

        // OPTIONAL - Amazon Cognito User Pool ID
        userPoolId: '',

        // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
        userPoolWebClientId: '',

    }
    });



## Amazon cognito Auth Functions (All tested with cognito)

### Login 
    async login(): Promise<void> {
        try {
        const user = await Auth.signIn('EMAIL', 'PASSWORD');
        console.log(user);
        } catch (error) {
            console.log('error signing in', error);
        }
    }

### Register 
    async register(): Promise<void> {
        try {
        const { user } = await Auth.signUp({
            username: 'EMAIL',
            password: 'PASSWORD',
            attributes: {
                //mm/dd/yyyy.
                birthdate: '03/01/1989',
                email: 'EMAIL',         
                phone_number: 'PHONE NUMBER',    
                gender: '',
                given_name: '',
                preferred_username:''      
            }
        });
        console.log(user);
        } catch (error) {
            console.log('error signing up:', error);
        }
    }

### Confirm OTP
    async confirm(): Promise<void> {
        try {
        const result  =  await Auth.confirmSignUp('EMAIL', 'OTP');
        console.log(result);
        } catch (error) {
            console.log('error confirming sign up', error);
        }
    }

### Reconfirm OTP
    async reConfirm(): Promise<void> {
        try {
        const { result } =  await Auth.resendSignUp('EMAIL');
        console.log('code resent successfully');
        } catch (err) {
            console.log('error resending code: ', err);
        }
    }

### Signout
    async signOut(): Promise<void> {
        try {
        await Auth.signOut();
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }

### Global SIgnout
    async globalSignOut(): Promise<void> {
        try {
        await Auth.signOut({ global: true });
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }
