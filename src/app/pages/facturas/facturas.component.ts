import { Component } from '@angular/core';
import { Cliente } from 'src/app/domain/cliente';
import { Detalle } from 'src/app/domain/detalle';
import { Factura } from 'src/app/domain/factura';
import { FacturasServices } from 'src/app/services/facturas-services';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.scss']
})
export class FacturasComponent {
  facturas :any
  fac : Factura = new Factura()
  cli : Cliente = new Cliente()
  det : Detalle = new Detalle()
  constructor(private facturaService : FacturasServices){}
  ngOnInit():void{
    this.facturas = this.facturaService.getFacturas()
  }

  guardar(){
    this.facturaService.saveFacturas(this.facturas).subscribe(data => {
      console.log(data)
    })
  }
}
