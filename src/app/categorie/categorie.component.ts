import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
import { ICategorie } from '../domain/icategorie';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {

  data: ICategorie[];

  constructor(private _service: CategoriesService) { }

  ngOnInit() {
    this._service.getCategories().subscribe( res => this.data = res);
  }

}
