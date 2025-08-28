import { inject, Injectable } from '@angular/core';
import { Auth, signInWithPopup, GoogleAuthProvider,FacebookAuthProvider  } from '@angular/fire/auth';


@Injectable({ providedIn: 'root' })
export class AuthService {
  private auth = inject(Auth);
  loginWithFacebook() {
    const provider = new FacebookAuthProvider();
    return signInWithPopup(this.auth, provider);
  }
  loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(this.auth, provider);
  }
 
}
