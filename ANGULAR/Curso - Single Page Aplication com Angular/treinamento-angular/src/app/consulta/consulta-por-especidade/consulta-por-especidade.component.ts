import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-consulta-por-especidade',
  templateUrl: './consulta-por-especidade.component.html',
  styleUrls: ['./consulta-por-especidade.component.css']
})
export class ConsultaPorEspecidadeComponent implements OnInit {

  @Input() consultas;

  constructor() { }

  ngOnInit() {
  }

}
