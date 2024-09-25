export interface IUserData {
    name: string;
    email: string;
    phone: string;
    address: string;
    password: string;
    role: string;
  }

  export interface IUserLoginData {
    email: string,
    password: string
  }
  





  // Interface for the seller

  export interface ISellerPropertyToSell {
    propertyName: string,
     price: string,
     location: string,
     bedrooms: string,
     bahtrooms: string,
     size: string,
     year: string,
     propertyType: string,
     status: string,
     description: string,
     contactNumber: string,
     image: string[]
      
  }