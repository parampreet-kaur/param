export class AgencyOwnerModel{
    constructor(
        public agencyOwnerId: number, public agencyOwnerName: string,
        public username: string, public password: string,
        public emailId: string, public mobileNo: string,
        public countryId: number, public stateId: number,
        public cityId: number, public address: string
    )
    {}
}