import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  items: string[] = []
  things!: string
  constructor() {}



  addThings(form: NgForm){
    this.items.push(form.value.thing)
  }
}
