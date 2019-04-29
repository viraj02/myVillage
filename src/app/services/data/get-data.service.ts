import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsefullinkFormat } from 'src/app/module/usefullinks/usefullinks.component';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  link: any = "http://www.mocky.io/v2/5cc4b3d73400005d00765580";

  constructor(private _http: HttpClient) {
   }

  getUsefulLinkData(link) {
    console.log(link)
    return this._http.get<UsefullinkFormat[]>(link);
  }
}
