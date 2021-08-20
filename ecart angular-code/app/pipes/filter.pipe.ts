import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'app/product/product';
import { ProductService } from 'app/product/product.servise';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  constructor(private productService: ProductService) { }
  //filterString: string = '';
  products: Product[];
  
  getAllProduct() {
    console.log('get all products');
    this.productService.getProduct().subscribe((response) => {this.products = response, console.log(this.products)}); 
  }
  
  transform(value: any,  filterString: string){
    
    //console.log(filterString); Product.length===0
    console.log('transform');
    this.getAllProduct();
    console.log('transform2');
    if(!value || value.length ===0 || filterString=== ''){
      console.log(this.products);
      // !value ||value.length === 0 || 
      return value;
    }

    const products = [];
    //console.log(this.products);
    for(const product of value){
      if(product['name'] === filterString){
        products.push(product);
        
      }    
    }
    return products;
  }



}
