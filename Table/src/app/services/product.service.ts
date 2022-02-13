import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }

  getProducts()
{
    return this.httpClient.get<Product[]>("https://raw.githubusercontent.com/epsilon-ux/code-challenge-resources/main/cookies.json");
}
}
