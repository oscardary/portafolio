import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class InformationService {

    info:any = {};
    team:any[] = [];
    infoGeneral:boolean = false;
    infoAbout:boolean = false;

    constructor( public http:Http ) {

        this.loadInfoGeneral();
        this.loadInfoAbout();

    }

    public loadInfoGeneral() {
        this.http.get("assets/data/info.pagina.json")
        .subscribe( data =>{
            //console.log(data.json());
            this.infoGeneral = true;
            this.info = data.json();
        })
    }

    public loadInfoAbout() {
        this.http.get("https://portafolio-7ebfc.firebaseio.com/about.json")
        .subscribe( data =>{
            //console.log(data.json());
            this.infoAbout = true;
            this.team = data.json();
        })
    }

}
