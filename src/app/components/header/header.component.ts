import { Component } from '@angular/core';
import { InformationService } from '../../services/information/information.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

    constructor (   public _is:InformationService,
                    private router:Router ) {
    }

    searchItem( termino:string ){

        // console.log(termino);
        this.router.navigate( ['search', termino] );
    }

}
