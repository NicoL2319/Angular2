import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';
import { GifsService } from '../../gifs/services/gifs.service';
import { NgFor, NgForOf, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    AppComponent,
    NgForOf,
    TitleCasePipe
  ],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],

})
export class SidebarComponent {
titleCase(_t7: string) {
throw new Error('Method not implemented.');
}
  get Historial(){
    return this.gifsService.Historial;
  }
 constructor(private gifsService: GifsService){}
}
