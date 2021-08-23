import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //Bunun vasıtasıyla backend'e istekte bulunabiliriz.
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';

@Injectable({
  //Böyle bir şey varsa servis olduğunu anlarız.
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'https://localhost:44378/api/';

  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<ListResponseModel<Car>> {
    //Ürünleri getirmek;
    let newPath = this.apiUrl + 'cars/getdetail';
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarByBrand(brandId: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getCarByBrand?brandId';
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarByColor(colorId:number):Observable<ListResponseModel<Car>>{
     let newPath=this.apiUrl+ "cars/getCarByColor?colorId";
     return this.httpClient.get<ListResponseModel<Car>>(newPath)

  }
}
