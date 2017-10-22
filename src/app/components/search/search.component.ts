import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductService } from '../../services/product/product.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

    productFilter:string = undefined;

  constructor(     private route:ActivatedRoute,
                   public _ps:ProductService ) {

      route.params.subscribe( parameters => {

          this.productFilter = parameters['keyWork'];
          // console.log(this.productFilter);

          _ps.loadProductoFilter( this.productFilter );

      });
  }
}
