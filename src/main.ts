import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { Auth, Amplify} from 'aws-amplify';


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
      userPoolId: 'us-east-2_CtZ1ShfHp',

      // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
      userPoolWebClientId: '3n67pqa4ufsevjgdgtro6o7rv2',

  }
});

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
