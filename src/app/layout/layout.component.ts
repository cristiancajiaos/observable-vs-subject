import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

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

    /* Ejemplo 3: BehaviourSubject. El BehaviourSubject se distingue del Subject
       en el hecho que es un Subject regular, pero que siempre guarda el valor previo */

    const randomNumberBehaviourSubject = new BehaviorSubject(-99999);

    const behaviourSubjectSubscriber1 = randomNumberBehaviourSubject.subscribe(number => {
      console.log(`behaviourSubjectSubscriber1 received ${number}`);
    });

    const behaviourSubjectSubscriber2 = randomNumberBehaviourSubject.subscribe(number => {
      console.log(`behaviourSubjectSubscriber2 received ${number}`);
    });

    randomNumberBehaviourSubject.next(Math.random());

    /* Mismo valor que 1 y 2, el BehaviourSubject guarda el valor previo, y lo
       emite a nuevos suscriptores */
    const behaviourSubjectSubscriber3 = randomNumberBehaviourSubject.subscribe(number => {
      console.log(`behaviourSubjectSubscriber3 received ${number}`);
    });
  }
}
