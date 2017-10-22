import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductService {

  products:any[] = [];
  productsFilter:any[] = [];

  infoProducts:boolean = false;
  infoProductsFilter:boolean = false;

  constructor( private http:Http ) {

    this.loadProductos();

  }

  public loadProductoX( idProd:string ) {
    return this.http.get(`https://portafolio-7ebfc.firebaseio.com/products/${ idProd }.json`);
  }

  public loadProductos() {

    let promesa = new Promise(( resolve, reject )=>{

      this.http.get('https://portafolio-7ebfc.firebaseio.com/products_idx.json')
      .subscribe( data => {
        //console.log( data.json() );
        //            setTimeout( ()=>{
          this.infoProducts = true;
          this.products = data.json();
          resolve();
          //                       }, 2000)
        })

    });

    return promesa;

  }

  public loadProductoFilter( filter:string ) {

    if( this.products.length === 0 ) {

      this.loadProductos().then( ()=>{
        //Ya se terminaron de cargar TODOS los productos
        this.filterProducts( filter );
      });

    } else {
      this.filterProducts( filter );
    }

  }

  private filterProducts( filter:string ) {

    filter = filter.toLowerCase();
    this.productsFilter = [];

    this.products.forEach( prod =>{

      if (  prod.categoria.toLowerCase().indexOf( filter ) >= 0 ||
            prod.titulo.toLowerCase().indexOf( filter ) >= 0
         ) {

        this.productsFilter.push( prod );
        console.log(prod);

      }

    });

  }

}
