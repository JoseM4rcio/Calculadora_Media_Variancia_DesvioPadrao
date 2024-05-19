import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface InputItem {
  value: string;
}

interface Calculo {
  media: number;
  variancia: number;
  desvioPadrao: number;
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
  resultados: Calculo | null = null;
  mensagemErro: string | null = null;
  historico: Calculo[] = [];

  addInput() {
    this.inputs.push({ value: '' });
  }

  excluirInput(index: number) {
    if (index >= 0 && index < this.inputs.length) {
      this.inputs.splice(index, 1);
    }
  }

  calcularEstatisticas() {
    const valoresNumericos = this.inputs.every(input => {
      const numericValue = parseFloat(input.value);
      return !isNaN(numericValue) && numericValue !== 0;
    });

    if (!valoresNumericos) {
      this.mensagemErro = 'Por favor, insira apenas valores numéricos maior que 0 em todas as entradas.';
      return;
    }

    this.mensagemErro = null;

    const valores = this.inputs.map((input) => parseFloat(input.value));
    const media = this.calcularMedia(valores);
    const variancia = this.calcularVariancia(valores, media);
    const desvioPadrao = Math.sqrt(variancia);

    this.resultados = {
      media: media,
      variancia: variancia,
      desvioPadrao: desvioPadrao,
    };

    // Adiciona o cálculo atual ao histórico
    this.adicionarAoHistorico(this.resultados);

    // Limita o histórico a 10 itens
    if (this.historico.length > 10) {
      this.historico.shift();
    }
  }

  adicionarAoHistorico(calculo: Calculo) {
    this.historico.push(calculo);
  }

  calcularMedia(valores: number[]): number {
    const soma = valores.reduce((acc, valor) => acc + valor, 0);
    return soma / valores.length;
  }

  calcularVariancia(valores: number[], media: number): number {
    const somaQuadrados = valores.reduce(
      (acc, valor) => acc + Math.pow(valor - media, 2),
      0
    );
    return somaQuadrados / valores.length;
  }
}
