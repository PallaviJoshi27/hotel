import { Component, OnInit , AfterViewInit } from '@angular/core';
import { OperateDataService } from '../operate-data.service';
import { FormBuilder, FormGroup , FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Subject } from "rxjs";
import { of } from "rxjs";
import { HttpClient , HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

@Component({
  selector: 'app-celebrations',
  templateUrl: './celebrations.component.html',
  styleUrls: ['./celebrations.component.css']
})
export class CelebrationsComponent implements OnInit {
  private customerData = [];
  constructor(private custDataService : OperateDataService , private fb : FormBuilder) { 
   // this.fruitList.subscribe(this.fruit_observer);
   this.fruitList.subscribe( val => console.log(val) , ( err : string) => console.error('got error') , () => console.log('completed'));
  }
  private fruitList = of('apple' , 'orange' , 'grapes');
  private fruit_observer = {
    next : (x : string) => console.log('got fruit ' + x),
    error : ( err : string) => console.error('got error'),
    complete : () => console.log('completed'),
  };
  

  reactiveForm = this.fb.group({
      name : ['Pallavi']
  });
  
  private value$ = new Subject().asObservable();

  fromEvent(target: HTMLInputElement, eventName: string) {
  return new Observable((observer) => {
    const handler = (e) => observer.next(e);

    target.addEventListener(eventName, handler);

    return () => {
      target.removeEventListener(eventName, handler);
    };
  });
}

  ngAfterViewInit() {
  const ESC_KEY = 32;
  const nameInput = document.getElementById('name') as HTMLInputElement;
  this.fromEvent(nameInput, 'keydown')
  .subscribe((e: KeyboardEvent) => {
    if (e.keyCode === ESC_KEY) {
      nameInput.value = '';
    }
  });
}

  ngOnInit() {
    this.customerData = this.custDataService.getData().pipe(
      map((value) => value[0].name.toUpperCase()),
      catchError( (e : HttpErrorResponse) => 
      { 
        return of([e]);  
       // { return e
    })
      ).subscribe(val => 
      {console.log(val) } , e => { console.log(e); }
    );
   
  /* this.value$ = this.reactiveForm.get('name').valueChanges.pipe(
    map((value) => value.toUpperCase()),
    ); */

    this.reactiveForm.get('name').valueChanges.subscribe((value) => {
      console.log('Hey, I changed! My value is:', value);
    });
    this.reactiveForm.get('name').statusChanges.subscribe((status) => {
    console.log('Hey, I changed! My status is:', status);
    });
  }

}
