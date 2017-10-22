import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductService } from '../../services/product/product.service';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styles: []
})
export class ItemComponent {

    productX:any = undefined;
    idProduct:string = undefined;

  constructor(
      private route:ActivatedRoute,
      private _ps:ProductService ) {

      route.params.subscribe( parameters=>{
          // console.log("parameters :: ");
          // console.log(parameters);

          _ps.loadProductoX(parameters.id)
              .subscribe( resp =>{

                   this.idProduct = parameters.id;

                   this.productX = resp.json();
                   // console.log( this.productX );
              });

      } )

  }

}
