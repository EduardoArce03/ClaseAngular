import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { enviroment } from "../enviroments/enviroment";
import { Factura } from "../domain/factura";

@Injectable({
    providedIn: 'root'
  })
export class FacturasServices {
    constructor(private httpClient: HttpClient){}

    getFacturas(){
        let url = enviroment.WS_PATH + "facturas/list"
        return this.httpClient.get<any>(url)
    }

    saveFacturas(factura : Factura){
        let url = enviroment.WS_PATH + "facturas/"
        return this.httpClient.post<any>(url,factura)
    }
}
