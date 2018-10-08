import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Subscription, Observable } from 'rxjs';
import gql from 'graphql-tag';
import { Feathers } from './../../feathers.service';
import { BukuserviceService } from './../bukuservice.service';
import { map, take } from 'rxjs/operators';

const CurrentUserForProfile = gql`
  query CurrentUserForProfile {
    databuku {
      name
    }
  }
`;
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  rates: Observable<any[]>;
  loading = true;
  error: any;

  constructor(private apollo: Apollo,private bukuservice:BukuserviceService) {
    this.rates = bukuservice.getData().pipe(
      map(m=>m['findDatabuku'])
    )
  }

  ngOnInit() {
    
    // this.apollo
    //   .watchQuery({
    //     query: gql`
    //     {
    //       getDatabuku(query: {}) {
    //         nama
    //         penerbit
    //       }
    //     }
    //     `,
    //   })
    //   .valueChanges.subscribe(result => {
    //     this.rates = result.data && result.data['rates'];
    //     this.loading = result.loading;
    //     this.error = result.errors;
    //   });
  }

}
