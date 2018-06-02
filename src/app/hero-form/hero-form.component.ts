import { Component } from '@angular/core';

import { Hero }    from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {

  
  model = new Hero(0, '', '');

  submitted = false;

  onSubmit() { this.submitted = true; }





}
