import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import {BASE_API} from '../app.api';
import {AuthService} from "./auth.service";
import {Passageiro} from "../models/passageiro";


@Injectable()
export class PassageiroService {


  constructor(private authService: AuthService, private http: HttpClient) { }


  createPassageiro(passageiro: Passageiro):Observable<Passageiro>{
      console.log(JSON.stringify(passageiro))
      //return Observable.of(JSON.stringify(employee))
      return this.http.post(`${BASE_API}/passageiro/register`,JSON.stringify(passageiro))
        .map((response:Passageiro) => response)
      //.catch(e => console.log(e));
  }

  listAllPassageiros():Observable<Passageiro[]>{
    return this.http.get(`${BASE_API}/passageiro/list/all/`)
      .map((response:Passageiro[]) => response)
      //.map(response => response)
      //.catch(e => console.log(e));
  }



}
