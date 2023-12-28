import { Component,OnInit } from '@angular/core';
import { ViewerServiceService } from '../../viewer-service.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-viewers-page',
  templateUrl: './viewers-page.component.html',
  styleUrls: ['./viewers-page.component.css']
})

export class ViewersPageComponent implements OnInit {
  public viewerForm: FormGroup;

  constructor(
    public viewerService: ViewerServiceService,
    public formBuilder: FormBuilder,
    public router: Router) {
    this.viewerForm = this.formBuilder.group({
          firstname: [''],
          lastname:  [''],
          birthdate: [''],
    })
  }

  ngOnInit(): void {
  }
  onSubmit() {
    if (this.viewerForm.valid) {
      this.viewerService.createViewer(this.viewerForm.value)
        .then(() => {
         // Navigate only after the viewer is successfully created
          this.router.navigate(['list-viewers']);
        })
        .catch(error => {
          // Handle any errors here
          console.error('Error creating viewer:', error);
        });
    } else {
      console.log('Form is not valid');
    }
  }
}