export interface UserSchema {
  name: string;
  age: number;
  gender: string;
  position: string;
  address: {
    country: string;
    province: string;
    city: string;
    houseNumber: number;
    postalCode: number;
  };
}
