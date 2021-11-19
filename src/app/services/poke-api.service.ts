import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokeApiService {
  urlServidor = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  getPokemones(): Observable<any> {
    let url = this.urlServidor + '/pokemon';
    return this.http.get<any>(url);
  }

  getInfoPokemon(url: string): Observable<any> {
    return this.http.get<any>(url);
  }

  
}
