import { Injectable } from '@angular/core';
import { Fruit } from '../model/fruit.interface';

@Injectable({
  providedIn: 'root'
})
export class FruitsService {

  url = "https://localhost:7038/fruits"
  
  constructor() { }

  async getFruits(): Promise<Fruit[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }
}
