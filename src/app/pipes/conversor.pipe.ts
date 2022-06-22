import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'conversor'
})
export class ConversorPipe implements PipeTransform {

  transform(value: number, ...[tipoMoneda, mostrarTexto]: ['dolar' | 'euro', boolean]): string {
    switch (tipoMoneda) {
      case 'dolar':
        return '$ '+value + (mostrarTexto ? ' dolares' : '');
      case 'euro':
        return '€ '+value + (mostrarTexto ? ' euros' : '');
    }
  }

}
