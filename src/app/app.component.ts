import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalculadoraMediaComponent } from "./calculadora-media/calculadora-media.component";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CalculadoraMediaComponent, FormsModule, HttpClientModule]
})
export class AppComponent {
  title = 'estatisticaAplicada';
}
