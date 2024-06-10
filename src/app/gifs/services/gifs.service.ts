import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../Interface/gifs.interface';


@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private APIKEY ='cWAZ1gKetlYHv0nvEWBkxoY4XW61sU7F'
  private _Historial: string[] = [];

  //TODO: Cambiar any por su tipo correspondiente
  //propiedad donde se almacenan las respuestas
  public resultados: Gif[]=[];

  get Historial(){
    return [...this._Historial];
  }

  //para poder hacer peticiones http en base a observable
 constructor(private http:HttpClient){

  //para que el historial permanesca cuando se recarga la pagina llamando al localStorage.
  this._Historial = JSON.parse(localStorage.getItem('Historial')!) || [];
 }

  busquedaGifs( query:string){

    //que elimine los espacios en blanco de lo ingresado y al mismo tiempo convierta los caracteres a minuscula
    query = query.trim().toLocaleLowerCase();


    if(!this._Historial.includes(query)){ //si no lo incluye entonces
      this._Historial.unshift(query);  //para que no se repita las mismas palabras en el Historial
      this._Historial = this._Historial.splice(0,10); //poniendo limites al Historial

      //Guardar en el localStorage para que al refrescar no se pierda lo buscado
      localStorage.setItem('Historial',JSON.stringify(this._Historial));

    }

    //se llama a la variable http y se hace una peticion
    //se cambia la peticion dragon ball por el query
    // se llama la informacion con get para que lusca Como la interfas SerchGifsResponse.
    this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=cWAZ1gKetlYHv0nvEWBkxoY4XW61sU7F&q=${query} ball&limit=10`)
      .subscribe( (resp) =>{
       console.log(resp.data);
       this.resultados= resp.data;
    })

    console.log(this._Historial);// imprimir por consola
  }
}
