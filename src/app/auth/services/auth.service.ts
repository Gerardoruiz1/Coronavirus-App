import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { signOut } from 'firebase/auth';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) {}
  
  async login(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  async register(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  getUser() {
    return this.afAuth.authState;
  }

  async logout() {
    return this.afAuth.signOut();
  }

async resetPassword(email: string) {
  return this.afAuth.sendPasswordResetEmail(email);
}

}
