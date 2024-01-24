import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { enviroment } from "../enviroments/enviroment";
import { Cliente } from "../domain/cliente";

@Injectable({
    providedIn: 'root'
  })
export class ClientesServices {
    constructor(private http: HttpClient){}

    getClientes(){
        let url = enviroment.WS_PATH + "/clientes/list"
        return this.http.get<any>(url)
    }

    saveClientes(cliente: Cliente){
        let url = enviroment.WS_PATH + "/clientes"
        return this.http.post<any>(url, cliente)
    }
}
