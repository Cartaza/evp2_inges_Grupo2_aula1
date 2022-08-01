import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {
  
  public promoMensual = 300;
  public promoSemestral = 500;
  public promoAnual = 900;
  logueado = localStorage.getItem("usuario");
  promoElegida = localStorage.getItem("precio");
  promo = localStorage.getItem("promo");

  constructor() {
    this.promoAnual = this.promoAnual;
    this.promoMensual = this.promoMensual;
    this.promoSemestral = this.promoSemestral;
    this.logueado = this.logueado;
    this.promoElegida = this.promoElegida;
    this.promo = this.promo;
  }


   /*ELIGE LA PROMO*/
   eligePromo1(){
    if( this.logueado == null){
      alert("You must log in to continue");
      window.location.href = "https://cartaza.github.io/evp2_inges_Grupo2_aula1/login";  
    }else{
      localStorage.setItem("PLAN", "MONTHLY PLAN");
      localStorage.setItem("PRICE", "300");
    }
   }

   
   eligePromo2(){
    if( this.logueado == null){
      alert("You must log in to continue");
      window.location.href = "https://cartaza.github.io/evp2_inges_Grupo2_aula1/login";  
    }else{
      localStorage.setItem("PLAN", "SEMESTER PLAN");
    localStorage.setItem("PRICE", "500");
    }
   }

   eligePromo3(){
    if( this.logueado == null){
      alert("You must log in to continue");
      window.location.href = "https://cartaza.github.io/evp2_inges_Grupo2_aula1/login";  
    }else{
      localStorage.setItem("PLAN", "ANNUAL PLAN");
      localStorage.setItem("PRICE", "900");
    }
   }
 
  ngOnInit(): void {
  }

}
