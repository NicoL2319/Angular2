import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _Historial: string[] = [];

  get Historial(){
    return [...this._Historial];
  }

  busquedaGifs( query:string){

    

    if(!this._Historial.includes(query)){
      this._Historial.unshift(query);  //para que no se repita las mismas palabras en el Historial

    }

    this._Historial = this._Historial.splice(0,10); //poniendo limites al Historial

    console.log(this._Historial);
  }
}
