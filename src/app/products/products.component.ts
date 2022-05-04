import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productId:number=100;
  productStatus:string='yes';
  addProduct=true;
  addProductStatus="";
  enterdValue="";

  constructor() { 
    setTimeout(()=>{
      this.addProduct=false;
    },4000)
  }
 
  
onClick()
{
  this.addProductStatus="Successfully added Product " + this.enterdValue;
  this.addProduct=true;

}

onUpdateProductName(event:any)
{
console.log(event);
this.enterdValue=(<HTMLInputElement>event.target).value;
console.log(this.enterdValue);

}



  ngOnInit(): void {
  }

}
