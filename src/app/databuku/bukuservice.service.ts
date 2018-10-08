import { Injectable } from '@angular/core';
import { Feathers } from './../feathers.service';

@Injectable({
  providedIn: 'root'
})
export class BukuserviceService {

  constructor(private _feathers:Feathers) { }
  getData(){
    return (<any>this._feathers // todo: remove 'any' assertion when feathers-reactive typings are up-to-date with buzzard
      .service('graphql'))
      .watch()
      .find({ query: { query: `{
        findDatabuku(query: {}){
          _id
          nama
          penerbit
        }
      }
      ` } 
    })
  }
  createData(data){
    this._feathers.service('databuku').create(data)
  }
}
