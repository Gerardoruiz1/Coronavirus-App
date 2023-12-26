import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewerServiceService } from '../viewer-service.service';

@Component({
  selector: 'app-edit-viewers',
  templateUrl: './edit-viewers.component.html',
  styleUrls: ['./edit-viewers.component.css']
})
 export class EditViewersComponent implements OnInit {
  public editForm: FormGroup = this.formBuilder.group({
    firstname: [''],
    lastname: [''],
    birthdate: ['']
  });//public editForm: FormGroup;
 viewerRef:any;

  constructor(
    public viewerService: ViewerServiceService,
    public formBuilder: FormBuilder,
    public act: ActivatedRoute,
    public router: Router
  ){}
  
  ngOnInit(): void {
    const id = this.act.snapshot.paramMap.get('id');
    if (id) {

    this.viewerService.getViewerDoc(id).subscribe(res=>{
      this.viewerRef = res;
      this.editForm = this.formBuilder.group({
        firstname:[this.viewerRef.firstname],
        lastname:[this.viewerRef.lastname],
        birthdate:[this.viewerRef.birthdate]
    }) 
  })
    }
    else{
      console.error('No ID provided. Ensure you have an ID to edit a viewer.');
    }
  }


  onSubmit(){
    const id : any = this.act.snapshot.paramMap.get('id');
    if (id){
    this.viewerService.updateViewer(this.editForm.value, id);
    this.router.navigate(['list-student']);
    }
    else{
      console.error('No ID provided. Ensure you have an ID to edit a viewer.');
    }
  };
 }