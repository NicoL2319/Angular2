import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent,} from './shared/sidebar/sidebar.component';
import { GifsPageComponent } from './gifs/gifs-page/gifs-page.component';
import { BusquedaComponent } from './gifs/busqueda/busqueda.component';
import { ResultadosComponent } from './gifs/resultados/resultados.component';
import { HttpClientModule } from '@angular/common/http';
import { GifsService } from './gifs/services/gifs.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    SidebarComponent,
    GifsPageComponent,
    HttpClientModule,
    BusquedaComponent,
    ResultadosComponent,
    NgFor,
    ],
    providers:[GifsService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gifsApp';


}
