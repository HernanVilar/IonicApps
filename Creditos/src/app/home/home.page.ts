import { Component } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions } from "@ionic-native/barcode-scanner/ngx";
import { Credito } from '../clases/credito';
import {CreditosService} from '../service/creditos.service';
import { ContadorService } from '../service/contador.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  encodedData: any;
  scannedBarCode: {};
  barcodeScannerOptions: BarcodeScannerOptions;
  credito:number = 0;
  creditoAux:Credito;
  usuarioLogeado:string;
  nuevoCredito:Credito;
  id:string;
  constructor(private scanner: BarcodeScanner, private creditoService:CreditosService,private contador:ContadorService) {
    this.getAll();
    this.verificaradmin();
    this.encodedData = "Programming isn't about what you know";
      this.barcodeScannerOptions = {
        showTorchButton: true,
        showFlipCameraButton: true
      };
      localStorage.setItem("usuario","admin@test.com");
      this.usuarioLogeado = localStorage.getItem("usuario");
  }
  scanBRcode() {
    this.scanner.scan().then(res => {
        this.scannedBarCode = res;
        this.buscarCodigo(res["text"]);
        this.cargarCredito();
      }).catch(err => {
        alert(err);
      });
  }
  buscarCodigo(codigo:string)
  {
    switch (codigo) {
      case "8c95def646b6127282ed50454b73240300dccabc":
        this.credito = 10;
        alert("10");
      break;
      case "ae338e4e0cbb4e4bcffaf9ce5b409feb8edd5172 ":
        this.credito = 50;
        alert("50");
      break;
      case "2786f4877b9091dcad7f35751bfcf5d5ea712b2f":
        this.credito = 100;
        alert("100");
      break;
      default:
        break;
    }
  }

  getAll()
  {
    var creditosList = this.creditoService.getAll().valueChanges({idField: 'propertyId'})
    creditosList.subscribe((res) =>{
      for(var credito of res)
      {
        if(credito.email == this.usuarioLogeado)
        {
          this.creditoAux = credito;
          this.id = credito.propertyId;
        }
      }
    })
  }
  borrarCredito()
  {
    this.creditoService.delete(this.id);
  }
  cargarCredito()
  {
    if(this.credito != 0)
    {
      if(this.creditoAux != null)
      {
        if(this.usuarioLogeado == 'admin@test.com')
        {
          if(this.scannedBarCode["text"] == "8c95def646b6127282ed50454b73240300dccabc")
              {
                if(this.contador.contador1 <2)
                {
                   this.funcionllamar2();
                }
                else
                {
                  alert("Error, es admin pero ya uso 2 veces el codigo.");
                }
              }
              if(this.scannedBarCode["text"] == "ae338e4e0cbb4e4bcffaf9ce5b409feb8edd5172 ")
              {
                if(this.contador.contador2 <2)
                {
                   this.funcionllamar2();
                }
                else
                {
                  alert("Error, es admin pero ya uso 2 veces el codigo.");
                }
              }
              if(this.scannedBarCode["text"] == "2786f4877b9091dcad7f35751bfcf5d5ea712b2f")
              {
                if(this.contador.contador3 <2)
                {
                   this.funcionllamar2();
                }
                else
                {
                  alert("Error, es admin pero ya uso 2 veces el codigo.");
                }
              }
        }
        else
        {
          this.funcionllamar();
        }
      }
      else
      {
        this.nuevoCredito = new Credito();
        this.nuevoCredito.codigo.push(this.scannedBarCode["text"]);
        this.nuevoCredito.email = this.usuarioLogeado;
        this.nuevoCredito.credito += this.credito;
        this.creditoService.create(this.nuevoCredito);
        alert("Se realizó el alta");
      }
    }
  }

  verificaradmin()
  {
    var creditosList = this.creditoService.getAll().valueChanges({idField: 'propertyId'})
    creditosList.subscribe((res) =>{
      for(var credito of res)
      {
        if(credito.email == this.usuarioLogeado)
        {
          for (var cr of credito.codigo) {
              if(cr== "8c95def646b6127282ed50454b73240300dccabc")
              {
                this.contador.contador1 = this.contador.contador1 + (1/2);
              } 
              if(cr == "ae338e4e0cbb4e4bcffaf9ce5b409feb8edd5172 ")
              {
                this.contador.contador2 = this.contador.contador2 +  (1/2);
              }
              if(cr== "2786f4877b9091dcad7f35751bfcf5d5ea712b2f")
              {
                this.contador.contador3 =  this.contador.contador3 + (1/2);
              }
          }
          
        }
      }
    })
  }

  funcionllamar()
  {
    if(this.creditoAux.codigo.includes(this.scannedBarCode["text"]) )
          {
            alert("El codigo ya está cargado!!");
          }
        else
        {
          //modificacion
         this.creditoAux.credito += this.credito;
         this.creditoAux.codigo.push(this.scannedBarCode["text"]);
         this.creditoService.update(this.id,this.creditoAux);
         alert("Se realizó la modificacion");
        }
  }
  funcionllamar2()
  {
         this.creditoAux.credito += this.credito;
         this.creditoAux.codigo.push(this.scannedBarCode["text"]);
         this.creditoService.update(this.id,this.creditoAux);
         alert("Se realizó la modificacion");
         this.contador.contador1 = 0;
         this.contador.contador2 = 0;
         this.contador.contador3 = 0;
  }





}
