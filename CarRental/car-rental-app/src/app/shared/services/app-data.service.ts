import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { AgencyOwnerModel } from '../models/agency-owner.model';
import { AgencyModel } from '../models/agency.model';
import { CarImageModel } from '../models/car-image.model';
import { CarModel } from '../models/car.model';
import { CategoryModel } from '../models/category.model';
import { CityModel } from '../models/city.model';
import { CountryModel } from '../models/country.model'
import { StateModel } from '../models/state.model';
import { SubCategoryModel } from '../models/sub-category.model';
import { filter, map } from 'rxjs/operators';

export class AppDataService{

    cities: CityModel[];
    states: StateModel[];

    constructor(private http: HttpClient){
        // this.http
        //     .get<{ [key: string]: CategoryModel }>(
        //         'https://paycarz.firebaseio.com/categories.json'
        //     )
        //     .pipe(
        //         map(responseData => {
        //             const categoriesArray: CategoryModel[] = [];
        //             for(const key in responseData)
        //             {
        //                 if(responseData.hasOwnProperty(key)){
        //                     categoriesArray.push({ ...responseData[key], id: key });
        //                 }
        //             }
        //             return categoriesArray;
        //         })
        //     )
        //     .subscribe(responseData => {
        //         this.categories = responseData;
        //     });

    }

    getCategories(){
        return this.http
            .get<{ [key: string]: CategoryModel }>(
                'https://paycarz.firebaseio.com/categories.json'
            )
            .pipe(
                map(responseData => {
                    const categoriesArray: CategoryModel[] = [];
                    for(const key in responseData)
                    {
                        if(responseData.hasOwnProperty(key)){
                            categoriesArray.push({ ...responseData[key]});
                        }
                    }
                    return categoriesArray;
                })
            );
    }

    getSubCategories(){
        return this.http
            .get<{ [key: string]: SubCategoryModel }>(
                'https://paycarz.firebaseio.com/subCategories.json'
            )
            .pipe(
                map(responseData => {
                    const subCategoriesArray: SubCategoryModel[] = [];
                    for(const key in responseData)
                    {
                        if(responseData.hasOwnProperty(key)){
                            subCategoriesArray.push({ ...responseData[key]});
                        }
                    }
                    return subCategoriesArray;
                })
            );
    }

    getStates(){
        return this.http
            .get<{ [key: string]: StateModel }>(
                'https://paycarz.firebaseio.com/states.json'
            )
            .pipe(
                map(responseData => {
                    const statesArray: StateModel[] = [];
                    for(const key in responseData)
                    {
                        if(responseData.hasOwnProperty(key)){
                            statesArray.push({ ...responseData[key]});
                        }
                    }
                    return statesArray;
                })
            );
    }

    getCities(){
        return this.http
            .get<{ [key: string]: CityModel }>(
                'https://paycarz.firebaseio.com/cities.json'
            )
            .pipe(
                map(responseData => {
                    const citiesArray: CityModel[] = [];
                    for(const key in responseData)
                    {
                        if(responseData.hasOwnProperty(key)){
                            citiesArray.push({ ...responseData[key]});
                        }
                    }
                    return citiesArray;
                })
            );
    }


}