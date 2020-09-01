import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import'rxjs/add/operator/map';
import { Album } from './album'; 
import{ Product }from './product'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {

  private _albumUrl: string = '../assets/album.json';
  private _productsUrl: string = '../assets/products.json'

  constructor(private _http: Http) {  //parameter injtects and instance of a service into the class

  }

  getAlbum (id : number) : Observable<Album> {
    return this._http.get(this._albumUrl).map(response => <Album>response.json());
  }

  getProducts (){
    
  }
}
