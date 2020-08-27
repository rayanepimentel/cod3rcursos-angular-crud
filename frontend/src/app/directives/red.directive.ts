import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRed]'
})
export class RedDirective {
//exemplo de diretiva de atributo
//capaz de alterar tanto no comportamento e no estilo do componente
  constructor(private el: ElementRef) { 
    el.nativeElement.style.color = '#e35e6b'
  }

}
