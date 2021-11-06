import { Injectable } from '@angular/core';
import { categorie } from '../_models/categorie.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categories: categorie[] = [
    {id: 1, name: 'Arts & Crafts'},
    {id: 2, name: 'Baby'},
    {id: 3, name: 'Books'},
    {id: 4, name: 'Eletronics'},
    {id: 5, name: 'Women'},
    {id: 6, name: 'Men'},
    {id: 7, name: 'Health'},
    {id: 8, name: 'Home'},
    {id: 9, name: 'Military'},
    {id: 10, name: 'Movies'},
  ]
  constructor() { }

  getAllCategories(): categorie[]{
    return [...this.categories];
  }

  getCategoryById(id: number): categorie | undefined{
   return this.categories.find((c)=>c.id === id);
  }

  save(){}
  update(){}
  delete(){}
}
