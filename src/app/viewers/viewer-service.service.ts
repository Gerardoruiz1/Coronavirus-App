import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Viewer } from '../viewer.model';

@Injectable({
  providedIn: 'root'
})
export class ViewerServiceService {

  constructor(private firestore: AngularFirestore) {}


  getViewerDoc(id: string) {
    return this.firestore.collection('viewers').doc(id).valueChanges();
  }

    getViewerList() {
    return this.firestore.collection('viewers').snapshotChanges();
  }

createViewer(viewer: Viewer): Promise<string> {
  return new Promise((resolve, reject) => {
    this.firestore.collection('viewers').add(viewer)
      .then(response => {
        console.log('Viewer added with ID:', response.id);
        resolve(response.id); // Resolve the promise with the new document's ID
      })
      .catch(error => {
        console.error("Error adding viewer: ", error);
        reject(error); // Reject the promise with the error
      });
  });
}


  deleteViewer(viewer : Viewer) {
    return this.firestore.collection('viewers').doc(viewer.id).delete();
  }
  updateViewer(id: string, viewer: Viewer) {
    return this.firestore.collection('viewers').doc(id).update(
      {
        firstname : viewer.firstname,
        lastname : viewer.lastname,
        birthdate: viewer.birthdate

      }
    );
  }
}
