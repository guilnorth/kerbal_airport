import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import {BASE_API} from '../app.api';
import {AuthService} from "./auth.service";
import {Planeta} from "../models/planeta";


@Injectable()
export class PlanetaService {


  constructor(private authService: AuthService, private http: HttpClient) { }


  createPlaneta(planeta: Planeta):Observable<Planeta>{
      console.log(JSON.stringify(planeta))
      //return Observable.of(JSON.stringify(employee))
      return this.http.post(`${BASE_API}/planeta/register`,JSON.stringify(planeta))
        .map((response:Planeta) => response)
      //.catch(e => console.log(e));
  }

  listAllPlanetas():Observable<Planeta[]>{
    return this.http.get(`${BASE_API}/planeta/list/all/`)
      .map((response:Planeta[]) => response)
      //.map(response => response)
      //.catch(e => console.log(e));
  }



}
