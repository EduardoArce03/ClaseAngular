import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/domain/cliente';
import { ClientesServices } from 'src/app/services/clientes-services';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit{
  clientes : any
  client : Cliente = new Cliente()
  constructor(private clienteService : ClientesServices){}

  ngOnInit(): void {
    this.clientes = this.clienteService.getClientes()
  }

  guardar(){
    this.clienteService.saveClientes(this.client).subscribe(data =>{
      console.log(data)
      if(data.codigo == 1){
        this.ngOnInit()
        alert("Ingresado exitosamente")
      }else{
        alert("Error al ingresar " + data.mensaje)
      }
    })
  }
}
