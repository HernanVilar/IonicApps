import { Component, OnInit } from '@angular/core';
import {Howl, Howler} from 'howler';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  data:boolean = true;
  bol:boolean = false;
  imagen:string = "../"
  data1:boolean = true;
  data2:boolean = false;
  data3:boolean = false;

  data4:boolean = true;
  data5:boolean = false;
  data6:boolean = false;
  idiomasteado:string = "../../assets/imagenanimales/conejo.jpg";
  constructor() { 
  }

  ngOnInit() {
  }
  func()
  {
    
    this.bol = true;
  }
  ejecutar(bandera:string)
  {
    if(bandera == "bra")
    {
      this.data1 = false;
      this.data2 = true;
      this.data3 = false;
    }
    if(bandera == "esp")
    {
      this.data1 = false;
      this.data2 = false;
      this.data3 = true;
    }
    if(bandera == "ingla")
    {
      this.data1 = true;
      this.data2 = false;
      this.data3 = false;
    }
  }

  ejecutar2(bandera:string)
  {
    if(bandera == "animal")
    {
      this.data4 = true;
      this.data5 = false;
      this.data6 = false;
    }
    if(bandera == "color")
    {
      this.data4 = false;
      this.data5 = true;
      this.data6 = false;
    }
    if(bandera == "numero")
    {
      this.data4 = false;
      this.data5 = false;
      this.data6 = true;
    }
  }
  colores(color:string)
  {
    console.log(this.data1);
    console.log(this.data2);
    console.log(this.data3);
    if(this.data1)
    {
      switch (color) {
        case 'azul':  
        const sound = new Howl({
          src: ['../../assets/audios/colores/azul.mp3']
    
        });
        
        // Play the sound.
        sound.play();
        
        // Change global volume.
        Howler.volume(1.5);
          break;
          case 'amarillo': 
          
          const sound1 = new Howl({
            src: ['../../assets/audios/colores/amarillo.mp3']
      
          });
          
          // Play the sound.
          sound1.play();
          
          // Change global volume.
          Howler.volume(1.5);
          break;
          case 'rojo':  
          const sound2 = new Howl({
            src: ['../../assets/audios/colores/rojo.mp3']
      
          });
          
          // Play the sound.
          sound2.play();
          
          // Change global volume.
          Howler.volume(1.5);
          break;
          case 'verde':  
          const sound3 = new Howl({
            src: ['../../assets/audios/colores/verde.mp3']
      
          });
          
          // Play the sound.
          sound3.play();
          
          // Change global volume.
          Howler.volume(1.5);
          break;
          case 'celeste':
            const sound4 = new Howl({
              src: ['../../assets/audios/colores/celeste.mp3']
        
            });
            
            // Play the sound.
            sound4.play();
            
            // Change global volume.
            Howler.volume(1.5);
          break;
          case 'gris':  
          const sound5 = new Howl({
            src: ['../../assets/audios/colores/gris.mp3']
      
          });
          
          // Play the sound.
          sound5.play();
          
          // Change global volume.
          Howler.volume(1.5);
          break;
        default:
          break;
      }
    }

    /* -------------------------------------------------------------------------------------- */
    if(this.data2)
    {
      switch (color) {
        case 'azul':  
        const sound = new Howl({
          src: ['../../assets/audioPortugues/colores/azul.mp3']
    
        });
        
        // Play the sound.
        sound.play();
        
        // Change global volume.
        Howler.volume(1.5);
          break;
          case 'amarillo': 
          
          const sound1 = new Howl({
            src: ['../../assets/audioPortugues/colores/amarillo.mp3']
      
          });
          
          // Play the sound.
          sound1.play();
          
          // Change global volume.
          Howler.volume(1.5);
          break;
          case 'rojo':  
          const sound2 = new Howl({
            src: ['../../assets/audioPortugues/colores/rojo.mp3']
      
          });
          
          // Play the sound.
          sound2.play();
          
          // Change global volume.
          Howler.volume(1.5);
          break;
          case 'verde':  
          const sound3 = new Howl({
            src: ['../../assets/audioPortugues/colores/verde.mp3']
      
          });
          
          // Play the sound.
          sound3.play();
          
          // Change global volume.
          Howler.volume(1.5);
          break;
          case 'celeste':
            const sound4 = new Howl({
              src: ['../../assets/audioPortugues/colores/celeste.mp3']
        
            });
            
            // Play the sound.
            sound4.play();
            
            // Change global volume.
            Howler.volume(1.5);
          break;
          case 'gris':  
          const sound5 = new Howl({
            src: ['../../assets/audioPortugues/colores/gris.mp3']
      
          });
          
          // Play the sound.
          sound5.play();
          
          // Change global volume.
          Howler.volume(1.5);
          break;
        default:
          break;
      }
    }


    /* ----------------------------------------------------------------------------------------- */


    if(this.data3)
    {
      switch (color) {
        case 'azul':  
        const sound = new Howl({
          src: ['../../assets/audioSpanish/colores/azul.mp3']
    
        });
        
        // Play the sound.
        sound.play();
        
        // Change global volume.
        Howler.volume(1.5);
          break;
          case 'amarillo': 
          
          const sound1 = new Howl({
            src: ['../../assets/audioSpanish/colores/amarillo.mp3']
      
          });
          
          // Play the sound.
          sound1.play();
          
          // Change global volume.
          Howler.volume(1.5);
          break;
          case 'rojo':  
          const sound2 = new Howl({
            src: ['../../assets/audioSpanish/colores/rojo.mp3']
      
          });
          
          // Play the sound.
          sound2.play();
          
          // Change global volume.
          Howler.volume(1.5);
          break;
          case 'verde':  
          const sound3 = new Howl({
            src: ['../../assets/audioSpanish/colores/verde.mp3']
      
          });
          
          // Play the sound.
          sound3.play();
          
          // Change global volume.
          Howler.volume(1.5);
          break;
          case 'celeste':
            const sound4 = new Howl({
              src: ['../../assets/audioSpanish/colores/celeste.mp3']
        
            });
            
            // Play the sound.
            sound4.play();
            
            // Change global volume.
            Howler.volume(1.5);
          break;
          case 'gris':  
          const sound5 = new Howl({
            src: ['../../assets/audioSpanish/colores/gris.mp3']
      
          });
          
          // Play the sound.
          sound5.play();
          
          // Change global volume.
          Howler.volume(1.5);
          break;
        default:
          break;
      }
    }
  }
  numeros(numero:string)
  {
    if(this.data1)
    {
      switch (numero) {
        case 'uno':
          const sound = new Howl({
            src: ['../../assets/audios/numeros/uno.mp3']
      
          });
          
          // Play the sound.
          sound.play();
          
          // Change global volume.
          Howler.volume(1.5);
          break;
          case 'dos':
            const sound1 = new Howl({
              src: ['../../assets/audios/numeros/dos.mp3']
        
            });
            
            // Play the sound.
            sound1.play();
            
            // Change global volume.
            Howler.volume(1.5);
          break;
          case 'tres':
            const sound2 = new Howl({
              src: ['../../assets/audios/numeros/tres.mp3']
        
            });
            
            // Play the sound.
            sound2.play();
            
            // Change global volume.
            Howler.volume(1.5);
          break;
          case 'cuatro':
            const sound3 = new Howl({
              src: ['../../assets/audios/numeros/cuatro.mp3']
        
            });
            
            // Play the sound.
            sound3.play();
            
            // Change global volume.
            Howler.volume(1.5);
          break;
          case 'cinco':
            const sound4 = new Howl({
              src: ['../../assets/audios/numeros/cinco.mp3']
        
            });
            
            // Play the sound.
            sound4.play();
            
            // Change global volume.
            Howler.volume(1.5);
          break;
          case 'seis':
            const sound5 = new Howl({
              src: ['../../assets/audios/numeros/seis.mp3']
        
            });
            
            // Play the sound.
            sound5.play();
            
            // Change global volume.
            Howler.volume(1.5);
            
          break;
      
        default:
          break;
      }
    }

    /* ----------------------------------------------------------------------------------- */


    if(this.data2)
    {
      switch (numero) {
        case 'uno':
          const sound = new Howl({
            src: ['../../assets/audioPortugues/numeros/uno.mp3']
      
          });
          
          // Play the sound.
          sound.play();
          
          // Change global volume.
          Howler.volume(1.5);
          break;
          case 'dos':
            const sound1 = new Howl({
              src: ['../../assets/audioPortugues/numeros/dos.mp3']
        
            });
            
            // Play the sound.
            sound1.play();
            
            // Change global volume.
            Howler.volume(1.5);
          break;
          case 'tres':
            const sound2 = new Howl({
              src: ['../../assets/audioPortugues/numeros/tres.mp3']
        
            });
            
            // Play the sound.
            sound2.play();
            
            // Change global volume.
            Howler.volume(1.5);
          break;
          case 'cuatro':
            const sound3 = new Howl({
              src: ['../../assets/audioPortugues/numeros/cuatro.mp3']
        
            });
            
            // Play the sound.
            sound3.play();
            
            // Change global volume.
            Howler.volume(1.5);
          break;
          case 'cinco':
            const sound4 = new Howl({
              src: ['../../assets/audioPortugues/numeros/cinco.mp3']
        
            });
            
            // Play the sound.
            sound4.play();
            
            // Change global volume.
            Howler.volume(1.5);
          break;
          case 'seis':
            const sound5 = new Howl({
              src: ['../../assets/audioPortugues/numeros/seis.mp3']
        
            });
            
            // Play the sound.
            sound5.play();
            
            // Change global volume.
            Howler.volume(1.5);
            
          break;
      
        default:
          break;
      }
    }



    /* -------------------------------------------------------------------- */


    if(this.data3)
    {
      switch (numero) {
        case 'uno':
          const sound = new Howl({
            src: ['../../assets/audioSpanish/numeros/uno.mp3']
      
          });
          
          // Play the sound.
          sound.play();
          
          // Change global volume.
          Howler.volume(1.5);
          break;
          case 'dos':
            const sound1 = new Howl({
              src: ['../../assets/audioSpanish/numeros/dos.mp3']
        
            });
            
            // Play the sound.
            sound1.play();
            
            // Change global volume.
            Howler.volume(1.5);
          break;
          case 'tres':
            const sound2 = new Howl({
              src: ['../../assets/audioSpanish/numeros/tres.mp3']
        
            });
            
            // Play the sound.
            sound2.play();
            
            // Change global volume.
            Howler.volume(1.5);
          break;
          case 'cuatro':
            const sound3 = new Howl({
              src: ['../../assets/audioSpanish/numeros/cuatro.mp3']
        
            });
            
            // Play the sound.
            sound3.play();
            
            // Change global volume.
            Howler.volume(1.5);
          break;
          case 'cinco':
            const sound4 = new Howl({
              src: ['../../assets/audioSpanish/numeros/cinco.mp3']
        
            });
            
            // Play the sound.
            sound4.play();
            
            // Change global volume.
            Howler.volume(1.5);
          break;
          case 'seis':
            const sound5 = new Howl({
              src: ['../../assets/audioSpanish/numeros/seis.mp3']
        
            });
            
            // Play the sound.
            sound5.play();
            
            // Change global volume.
            Howler.volume(1.5);
            
          break;
      
        default:
          break;
      }
    }
  }
  animales(animal:string)
  {
    console.log(this.data1);
    console.log(this.data2);
    console.log(this.data3);
    console.log(animal);
    if(this.data1)
    {
      switch (animal) {
        case 'perro':
          const sound = new Howl({
            src: ['../../assets/audios/animales/perro.mp3']
      
          });
          
          // Play the sound.
          sound.play();
          
          // Change global volume.
          Howler.volume(1.5);
          
          break;
          case 'gato':
            const sound1 = new Howl({
              src: ['../../assets/audios/animales/gato.mp3']
        
            });
            
            // Play the sound.
            sound1.play();
            
            // Change global volume.
            Howler.volume(1.5);
          
          break;
          case 'jirafa':
            const sound2 = new Howl({
              src: ['../../assets/audios/animales/jirafa.mp3']
        
            });
            
            // Play the sound.
            sound2.play();
            
            // Change global volume.
            Howler.volume(1.5);
            
          
          break;
          case 'tigre':
            const sound3 = new Howl({
              src: ['../../assets/audios/animales/tigre.mp3']
        
            });
            
            // Play the sound.
            sound3.play();
            
            // Change global volume.
            Howler.volume(1.5);
            
          
          break;
          case 'leon':
            const sound4 = new Howl({
              src: ['../../assets/audios/animales/leon.mp3']
        
            });
            
            // Play the sound.
            sound4.play();
            
            // Change global volume.
            Howler.volume(1.5);
            
            
          
          break;
          case 'conejo':
            const sound5 = new Howl({
              src: ['../../assets/audios/animales/conejo.mp3']
        
            });
            
            // Play the sound.
            sound5.play();
            
            // Change global volume.
            Howler.volume(1.5);
            
          
          break;
          
      
        default:
          
          break;
      }
    }


     /* ------------------------------------------------------------------------ */



     if(this.data2)
    {
      switch (animal) {
        case 'perro':
          const sound = new Howl({
            src: ['../../assets/audioPortugues/animales/perro.mp3']
      
          });
          
          // Play the sound.
          sound.play();
          
          // Change global volume.
          Howler.volume(1.5);
          
          break;
          case 'gato':
            const sound1 = new Howl({
              src: ['../../assets/audioPortugues/animales/gato.mp3']
        
            });
            
            // Play the sound.
            sound1.play();
            
            // Change global volume.
            Howler.volume(1.5);
          
          break;
          case 'jirafa':
            const sound2 = new Howl({
              src: ['../../assets/audioPortugues/animales/jirafa.mp3']
        
            });
            
            // Play the sound.
            sound2.play();
            
            // Change global volume.
            Howler.volume(1.5);
            
          
          break;
          case 'tigre':
            const sound3 = new Howl({
              src: ['../../assets/audioPortugues/animales/tigre.mp3']
        
            });
            
            // Play the sound.
            sound3.play();
            
            // Change global volume.
            Howler.volume(1.5);
            
          
          break;
          case 'leon':
            const sound4 = new Howl({
              src: ['../../assets/audioPortugues/animales/leon.mp3']
        
            });
            
            // Play the sound.
            sound4.play();
            
            // Change global volume.
            Howler.volume(1.5);
            
            
          
          break;
          case 'conejo':
            const sound5 = new Howl({
              src: ['../../assets/audioPortugues/animales/conejo.mp3']
        
            });
            
            // Play the sound.
            sound5.play();
            
            // Change global volume.
            Howler.volume(1.5);
            
          
          break;
          
      
        default:
          
          break;
      }
    }


    /* ------------------------------------------------------------------------------  */

    if(this.data3)
    {
      switch (animal) {
        case 'perro':
          const sound = new Howl({
            src: ['../../assets/audioSpanish/animales/perro.mp3']
      
          });
          
          // Play the sound.
          sound.play();
          
          // Change global volume.
          Howler.volume(1.5);
          
          break;
          case 'gato':
            const sound1 = new Howl({
              src: ['../../assets/audioSpanish/animales/gato.mp3']
        
            });
            
            // Play the sound.
            sound1.play();
            
            // Change global volume.
            Howler.volume(1.5);
          
          break;
          case 'jirafa':
            const sound2 = new Howl({
              src: ['../../assets/audioSpanish/animales/jirafa.mp3']
        
            });
            
            // Play the sound.
            sound2.play();
            
            // Change global volume.
            Howler.volume(1.5);
            
          
          break;
          case 'tigre':
            const sound3 = new Howl({
              src: ['../../assets/audioSpanish/animales/tigre.mp3']
        
            });
            
            // Play the sound.
            sound3.play();
            
            // Change global volume.
            Howler.volume(1.5);
            
          
          break;
          case 'leon':
            const sound4 = new Howl({
              src: ['../../assets/audioSpanish/animales/leon.mp3']
        
            });
            
            // Play the sound.
            sound4.play();
            
            // Change global volume.
            Howler.volume(1.5);
            
            
          
          break;
          case 'conejo':
            const sound5 = new Howl({
              src: ['../../assets/audioSpanish/animales/conejo.mp3']
        
            });
            
            // Play the sound.
            sound5.play();
            
            // Change global volume.
            Howler.volume(1.5);
            
          
          break;
          
      
        default:
          
          break;
      }
    }

  }

}
