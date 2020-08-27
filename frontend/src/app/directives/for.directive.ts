import { Directive, OnInit, Input, ViewContainerRef, TemplateRef } from '@angular/core';
import { Template } from '@angular/compiler/src/render3/r3_ast';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit {

  @Input('myForEm') numbers: number[]
  @Input('myForUsando') texto: string

  constructor(private container: ViewContainerRef, 
    private template: TemplateRef<any>) { }

  ngOnInit(): void {
    for(let number of this.numbers) {
      this.container.createEmbeddedView(
        this.template, { $implicit : number})
      //template será ul li
    }
    console.log(this.numbers)
    console.log(this.texto)
  }

}
