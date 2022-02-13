import { Component, OnInit } from '@angular/core';
import { Product } from './model/product';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Table';
  products:Product[];
  tableHeaders=["name","price","category"];
  isAscending: any = false;
  constructor(private productService :ProductService)
  {}

  ngOnInit(): void {
  this.productService.getProducts().subscribe((result)=>
  {
    this.products=result["cookies"];
    console.log(this.products)
  }),(error)=>
  {console.log(error);}

  }
  sort(colName, boolean) {
    if (boolean == true){
        this.products.sort((a, b) => a[colName] < b[colName] ? 1 : a[colName] > b[colName] ? -1 : 0)
        this.isAscending = !this.isAscending;
        (<HTMLInputElement>event.target).setAttribute("class","fas fa-caret-down");
    }
    else{
        this.products.sort((a, b) => a[colName] > b[colName] ? 1 : a[colName] < b[colName] ? -1 : 0)
        this.isAscending = !this.isAscending;
        (<HTMLInputElement>event.target).setAttribute("class","fas fa-caret-up");   
    }
    this.tableHeaders.forEach(function(header)
    {
      if(header!=colName)
      {
        document.getElementById(header).getElementsByTagName("i")[0].setAttribute("class","fas fa-sort");   ;
      }
    })
    
  
}
  
 
}
