import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private APIKEY ='cWAZ1gKetlYHv0nvEWBkxoY4XW61sU7F'

  private _Historial: string[] = [];

  get Historial(){
    return [...this._Historial];
  }

  //para poder hacer peticiones http en base a observable
 constructor(private http:HttpClient){}

  busquedaGifs( query:string){

    //que elimine los espacios en blanco de lo ingresado y al mismo tiempo convierta los caracteres a minuscula
    query = query.trim().toLocaleLowerCase();


    if(!this._Historial.includes(query)){ //si no lo incluye entonces
      this._Historial.unshift(query);  //para que no se repita las mismas palabras en el Historial
      this._Historial = this._Historial.splice(0,10); //poniendo limites al Historial
    }

    //se llama a la variable http y se hace una peticion
    this.http.get('https://api.giphy.com/v1/gifs/search?api_key=cWAZ1gKetlYHv0nvEWBkxoY4XW61sU7F&q=dragon ball&limit=10')
      .subscribe( resp =>{
       console.log(resp);
    })

    console.log(this._Historial);// imprimir por consola
  }
}
