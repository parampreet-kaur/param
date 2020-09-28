import { AgencyOwnerModel } from '../models/agency-owner.model';
import { AgencyModel } from '../models/agency.model';
import { CarImageModel } from '../models/car-image.model';
import { CarModel } from '../models/car.model';
import { CategoryModel } from '../models/category.model';
import { CityModel } from '../models/city.model';
import { CountryModel } from '../models/country.model'
import { StateModel } from '../models/state.model';
import { SubCategoryModel } from '../models/sub-category.model';

export class AppDataService{

    agencyData: AgencyModel[] = [
        {
            'agencyId': 10,
            'agencyName': 'Best Rentals',
            'agencyOwnerId': 100,
            'countryId': 10,
            'stateId': 100,
            'cityId': 1002,
            'address': 'C-203, Abc Tower, Jalandhar, Punjab',
            'mobileNo': '7895665411',
            'emailId': 'bestrentals@gmail.com',
            'websiteUrl': 'www.bestrentals.com',
            'openingTime': '9:00 am',
            'closingTime': '8:00 pm'
        },
        {
            'agencyId': 11,
            'agencyName': 'First Rentals',
            'agencyOwnerId': 101,
            'countryId': 10,
            'stateId': 100,
            'cityId': 1000,
            'address': 'A-51, A-block Ranjit avenue, Amritsar',
            'mobileNo': '9867771789',
            'emailId': 'firstrentals@gmail.com',
            'websiteUrl': 'www.firstrentals.com',
            'openingTime': '7:00 am',
            'closingTime': '7:00 pm'
        }
    ];
        
    agencyOwnerData: AgencyOwnerModel[] = [
        {
            'agencyOwnerId': 55,
            'agencyOwnerName': 'Rahul Sharma',
            'username': 'rahul',
            'password': 'x',
            'emailId': 'rahul@gmail.com',
            'mobileNo': '9705554632',
            'countryId': 10,
            'stateId': 100,
            'cityId': 1000,
            'address': 'Hno 11, Green avenue, Amritsar'
        },
        {
            'agencyOwnerId': 56,
            'agencyOwnerName': 'Nupur Bansal',
            'username': 'nupur',
            'password': 'x',
            'emailId': 'nupur@gmail.com',
            'mobileNo': '9766678032',
            'countryId': 10,
            'stateId': 100,
            'cityId': 1002,
            'address': 'Hno 68, Mall road, Jalandhar'
        }
    ];

    countries: CountryModel[] = [
        {
            'countryId': 10,
            'countryName': 'India'
        }
    ];

    states: StateModel[] = [
        {
            'stateId': 100,
            'stateName': 'Punjab',
            'countryId': 10
        },
        {
            'stateId': 101,
            'stateName': 'Rajasthan',
            'countryId': 10
        }
    ]

    cities: CityModel[] = [
        {
            'cityId': 1000,
            'cityName': 'Amritsar',
            'stateId': 100
        },
        {
            'cityId': 1001,
            'cityName': 'Bhatinda',
            'stateId': 100
        },
        {
            'cityId': 1002,
            'cityName': 'Jalandhar',
            'stateId': 100
        },
        {
            'cityId': 1003,
            'cityName': 'Patiala',
            'stateId': 100
        },
        {
            'cityId': 1004,
            'cityName': 'Ajmer',
            'stateId': 101
        },
        {
            'cityId': 1005,
            'cityName': 'Jaipur',
            'stateId': 101
        },
        {
            'cityId': 1006,
            'cityName': 'Udaipur',
            'stateId': 101
        }
    ];

    categories: CategoryModel[] = [
        {
            'categoryId': 20,
            'categoryName': 'Mini',
            'carType': 'Mini'
        },
        {
            'categoryId': 21,
            'categoryName': 'Prime Sedan',
            'carType': 'Sedan'
        },
        {
            'categoryId': 22,
            'categoryName': 'Prime SUV',
            'carType': 'SUV'
        },
        {
            'categoryId': 23,
            'categoryName': 'LUX',
            'carType': 'Luxury'
        }
    ];

    subCategories: SubCategoryModel[] = [
        {
            'subCategoryId': 11,
            'subCategoryName': 'Ford Figo',
            'categoryId': 20,
            'modelName': '1.2l Petrol Titanium Blu MT'
        },
        {
            'subCategoryId': 12,
            'subCategoryName': 'Toyota Etios',
            'categoryId': 21,
            'modelName': 'Etios 1.5 STD'
        },
        {
            'subCategoryId': 13,
            'subCategoryName': 'Toyota Innova',
            'categoryId': 22,
            'modelName': '2.4 GX MT 7STR'
        },
        {
            'subCategoryId': 14,
            'subCategoryName': 'Datsun Go',
            'categoryId': 20,
            'modelName': 'Datsun Go A'
        },
        {
            'subCategoryId': 15,
            'subCategoryName': 'Toyota Fortuner',
            'categoryId': 23,
            'modelName': '2.7L 4X2 MT'
        },
        {
            'subCategoryId': 16,
            'subCategoryName': 'Honda Accord',
            'categoryId': 23,
            'modelName': 'Honda Accord 2.4 VTi-L Advance'
        },
        {
            'subCategoryId': 17,
            'subCategoryName': 'Toyota Fortuner',
            'categoryId': 23,
            'modelName': '2.8L 4X4 AT'
        }
    ];

    cars: CarModel[] = [
        {
            'carId': 400,
            'agencyId': 10,
            'categoryId': 20,
            'subCategoryId': 11,
            'color': 'White',
            'pricePerKm': 7,
            'driverPrice': 1000,
            'status': 'Available',
            'carNo': 'PB 02 4333'
        },
        {
            'carId': 401,
            'agencyId': 10,
            'categoryId': 21,
            'subCategoryId': 12,
            'color': 'Red',
            'pricePerKm': 10,
            'driverPrice': 1200,
            'status': 'Available',
            'carNo': 'PB 02 7678'
        },
        {
            'carId': 402,
            'agencyId': 11,
            'categoryId': 22,
            'subCategoryId': 13,
            'color': 'Maroon',
            'pricePerKm': 12,
            'driverPrice': 1500,
            'status': 'Available',
            'carNo': 'PB 08 7618'
        },
        {
            'carId': 403,
            'agencyId': 11,
            'categoryId': 20,
            'subCategoryId': 14,
            'color': 'Silver',
            'pricePerKm': 7,
            'driverPrice': 1000,
            'status': 'Available',
            'carNo': 'PB 08 4618'
        },
        {
            'carId': 404,
            'agencyId': 11,
            'categoryId': 23,
            'subCategoryId': 15,
            'color': 'White',
            'pricePerKm': 15,
            'driverPrice': 1800,
            'status': 'Available',
            'carNo': 'PB 08 4000'
        },
        {
            'carId': 405,
            'agencyId': 11,
            'categoryId': 23,
            'subCategoryId': 16,
            'color': 'White',
            'pricePerKm': 15,
            'driverPrice': 1800,
            'status': 'Available',
            'carNo': 'PB 08 0001'
        },
        {
            'carId': 406,
            'agencyId': 11,
            'categoryId': 23,
            'subCategoryId': 17,
            'color': 'Golden',
            'pricePerKm': 15,
            'driverPrice': 1800,
            'status': 'Available',
            'carNo': 'PB 08 0005'
        }
    ];
    
    carImages: CarImageModel[] = [
        {
            'carImageId': 800,
            'carId': 400,
            'picture': 'https://cdni.autocarindia.com/ExtraImages/20190313120930_Ford-Figo-Titanium-Blu.jpg'
        },
        {
            'carImageId': 801,
            'carId': 401,
            'picture': 'https://images.carandbike.com/car-images/medium/toyota/etios/toyota-etios.webp?v=20'
        },
        {
            'carImageId': 802,
            'carId': 402,
            'picture': 'https://www.drivespark.com/car-image/320x225x100/car/x12344573-toyota_innova_crysta.jpg.pagespeed.ic.4RjPEO3-tz.jpg'
        },
        {
            'carImageId': 803,
            'carId': 403,
            'picture': 'https://stimg.cardekho.com/images/car-images/large/Datsun/Datsun-GO/2907/GREY_796e65.jpg'
        },
        {
            'carImageId': 804,
            'carId': 404,
            'picture': 'https://upload.wikimedia.org/wikipedia/commons/6/66/2015_Toyota_Fortuner_%28New_Zealand%29.jpg'
        },
        {
            'carImageId': 805,
            'carId': 405,
            'picture': 'https://s1.paultan.org/image/2017/11/Honda-Accord-2.4-VTi-L-Advance-2.jpg'
        },
        {
            'carImageId': 806,
            'carId': 406,
            'picture': 'https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=http%3A%2F%2Fcms.haymarketindia.net%2Fmodel%2Fuploads%2Fmodelimages%2Ffortunermodelimage.jpg&h=578&w=872&c=1'
        }
    ];

    getCategories(){
        return this.categories.slice();
    }

    getSubCategories(categoryId : number){
        return this.subCategories.filter((subCategory) => {
            if(subCategory.categoryId === categoryId){
                return subCategory;
            }
        });
    }
}