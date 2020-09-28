export class CarModel{
    constructor(
        public carId: number, public agencyId: number,
        public categoryId: number, public subCategoryId: number,
        public color: string, public pricePerKm: number,
        public driverPrice: number, public status: string,
        public carNo: string
    )
    {}
}