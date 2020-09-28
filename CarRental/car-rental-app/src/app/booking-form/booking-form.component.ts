import { Component, OnInit } from '@angular/core';
import { CategoryModel } from '../shared/models/category.model';
import { SubCategoryModel } from '../shared/models/sub-category.model';
import { AppDataService } from '../shared/services/app-data.service';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss'],
  providers: [AppDataService]
})
export class BookingFormComponent implements OnInit {

  categories: CategoryModel[];
  subCategories: SubCategoryModel[];

  constructor(private appDataService: AppDataService) { }

  ngOnInit() {
    this.categories = this.appDataService.getCategories();
  }

  getSubCategories(categoryId: number){
    this.subCategories = this.appDataService.getSubCategories(categoryId);
  }

}
