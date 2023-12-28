import { Component, OnInit } from '@angular/core';
import { Viewer } from 'src/app/viewer.model';
import { ViewerServiceService } from '../viewer-service.service';


@Component({
  selector: 'app-list-viewers',
  templateUrl: './list-viewers.component.html',
  styleUrls: ['./list-viewers.component.css']
})
export class ListViewersComponent implements OnInit {

  Viewer: Viewer[] = [];

  constructor(private viewerService: ViewerServiceService ) {}


  
  ngOnInit(): void {
   this.viewerService.getViewerList().subscribe(res => {
    this.Viewer = res.map( e => {
      return {
        id: e.payload.doc.id,
        ...e.payload.doc.data() as {}
      } as Viewer;
    })
   })
  };


  removeViewer(Viewer: Viewer) {
    if (confirm('Are you sure you want to remove ' + Viewer.firstname + '?')) {
        this.viewerService.deleteViewer(Viewer);
    };
  };
  
    
}
