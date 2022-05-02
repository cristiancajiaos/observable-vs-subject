import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    /* Ejemplo 1: Observables. Unicast por defecto.
       Cada suscribible ve su propia ejecución del observable */
    
    const randomNumberObservable = new Observable((observer) => {
      observer.next(Math.random());
    });

    const subscriber1 = randomNumberObservable.subscribe(number => {
      console.log(`Subscriber1 received ${number}`)
    });

    const subscriber2 = randomNumberObservable.subscribe((number) => {
      console.log(`Subscriber2 received ${number}`);
    });

    const subscriber3 = randomNumberObservable.subscribe((number) => {
      console.log(`Subscriber3 received ${number}`);
    });
  }
}
