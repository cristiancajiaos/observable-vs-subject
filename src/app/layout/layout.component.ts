import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

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

    /* Ejemplo 2: Subject. Los Subjects son multicast por defecto.
       Múltiples suscribibles comparten un stream de ejecución */

    const randomNumberSubject = new Subject();

    const subjectSubscriber1 = randomNumberSubject.subscribe(number => {
      console.log(`subjectSubscriber1 received ${number}`);
    });

    const subjectSubscriber2 = randomNumberSubject.subscribe(number => {
      console.log(`subjectSubscriber2 received ${number}`);
    });

    randomNumberSubject.next(Math.random());

    const subjectSubscriber3 = randomNumberSubject.subscribe(number => {
      console.log(`subjectSubscriber3 received ${number}`);
    });

    // randomNumberSubject.next(Math.random());
  }
}
