import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import {BASE_API} from '../app.api';
import {AuthService} from "./auth.service";
import {Voo} from "../models/voo";
import {Aeroporto} from "../models/aeroporto";
import {Aviao} from "../models/aviao";


@Injectable()
export class VooService {


  constructor(private authService: AuthService, private http: HttpClient) { }


  createVoo(voo: Voo):Observable<any>{
      console.log(JSON.stringify(voo));

      return this.http.post(`${BASE_API}/voo/register`,JSON.stringify(voo))
        .map((response:Voo) => response)
      //.catch(e => console.log(e));
  }

  listAllVoos():Observable<Voo[]>{
    return this.http.get(`${BASE_API}/voo/list/all/`)
      .map((response:Voo[]) => response)
  }
  listAllAeroportos():Observable<Voo[]>{
    return this.http.get(`${BASE_API}/voo/list/air/all`)
      .map((response:Voo[]) => response)

  }
  listAllAvioes():Observable<Aviao[]>{
    return this.http.get(`${BASE_API}/voo/list/avioes/all`)
      .map((response:Aviao[]) => response)

  }

  listOneVoo(cod):Observable<any>{
    return this.http.get(`${BASE_API}/voo/list/one/${cod}`)
      .map((response:any) => response)

  }



}
