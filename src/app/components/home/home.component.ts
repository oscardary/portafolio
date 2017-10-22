import { Component } from '@angular/core';
import { ProductService } from "../../services/product/product.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

    constructor( public _ps:ProductService ) {

    }

}
