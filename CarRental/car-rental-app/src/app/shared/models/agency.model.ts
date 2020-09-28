export class AgencyModel{
    constructor(public agencyId: number, public agencyName: string, public agencyOwnerId: number,
        public countryId: number, public stateId: number,
        public cityId: number, public address: string,
        public mobileNo: string, public emailId: string,
        public websiteUrl: string, public openingTime: string,
        public closingTime: string 
        )
    {}
}