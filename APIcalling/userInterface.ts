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

  export interface IPropertyOwner {
    _id: string;
    name: string;
    email: string;
    phone: number;
    address: string;
    photo: string;
}

export interface ISellerPropertyToSell {
    propertyName: string;
    price: string;
    location: string;
    bedrooms: string;
    bahtrooms: string;
    size: string;
    year: string;
    propertyType: string;
    status: string;
    description: string;
    contactNumber: string;
    image: string[];
    propertyOwner: IPropertyOwner;  // Include the owner details
    
}


export interface ISellerPropertyToSell {
  propertyName: string;
  price: string;
  location: string;
  bedrooms: string;
  bahtrooms: string;
  size: string;
  year: string;
  propertyType: string;
  status: string;
  description: string;
  contactNumber: string;
  image: string[];
  propertyOwner: {
    _id: string;
    name: string;
    email: string;
    phone: number;
    address: string;
    photo: string;
  };
  
}



export interface ISellerPropertyToUpdate {
  propertyName: string;
  price: string;
  location: string;
  bedrooms: string;
  bahtrooms: string;
  size: string;
  year: string;
  propertyType: string;
  status: string;
  description: string;
  contactNumber: string;
  image: string[];
  propertyOwner: {
    _id: string;
    name: string;
    email: string;
    phone: number;
    address: string;
    photo: string;
  };
  _id:string
  condition: string
}
