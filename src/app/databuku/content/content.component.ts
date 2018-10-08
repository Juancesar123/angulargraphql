import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BukuserviceService } from './../bukuservice.service';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  rates: Observable<any[]>;
  status: boolean = false;
  constructor(private bukuservice:BukuserviceService) {
    this.rates = bukuservice.getData().pipe(
      map(m=>m['findDatabuku'])
    )
  }
  ngOnInit() {
  }
  tooglemodals(){
    this.status = !this.status
  }
}
