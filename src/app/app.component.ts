import { Component, Inject, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FruitsService } from './services/fruits-service.service';
import { Fruit } from './model/fruit.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CodeAssignment';

  fruits : Fruit[] = [];
  fruitsShow : Fruit[] = [];
  datePicked: Date = new Date(2024, 0, 1);
  constructor(private fruitsService: FruitsService) {
  }

  async ngOnInit(){
    this.fruits = await this.fruitsService.getFruits();
    this.fruitsShow = this.fruits.slice(0,9);
  }

  onDatePicked(){
    this.fruitsShow = this.fruits.filter(fruit => {
      return fruit.datePicked > this.datePicked;
    });
  }
}
