import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface InputItem {
  value: string;
}

@Component({
  selector: 'app-calculadora-media',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './calculadora-media.component.html',
  styleUrls: ['./calculadora-media.component.css'],
})
export class CalculadoraMediaComponent {
  inputs: InputItem[] = [{ value: '' }];
  resultados: {
    media: number;
    variancia: number;
    desvioPadrao: number;
  } | null = null;

  addInput() {
    this.inputs.push({ value: '' });
  }

  excluirInput(index: number) {
    if (index >= 0 && index < this.inputs.length) {
      this.inputs.splice(index, 1);
    }
  }

  calcularEstatisticas() {
    const valores = this.inputs.map((input) => parseFloat(input.value || '0'));
    const media = this.calcularMedia(valores);
    const variancia = this.calcularVariancia(valores, media);
    const desvioPadrao = Math.sqrt(variancia);

    this.resultados = {
      media: media,
      variancia: variancia,
      desvioPadrao: desvioPadrao,
    };
  }

  calcularMedia(valores: number[]): number {
    const soma = valores.reduce((acc, valor) => acc + valor, 0);
    return soma / valores.length || 0;
  }

  calcularVariancia(valores: number[], media: number): number {
    const somaQuadrados = valores.reduce(
      (acc, valor) => acc + Math.pow(valor - media, 2),
      0
    );
    return somaQuadrados / valores.length || 0;
  }
}
