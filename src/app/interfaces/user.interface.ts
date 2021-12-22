export interface UsersDTO {
  results: User[];
  info: any;


}

export interface User {
  cell: string;
  dob: UserDob;
  email: string;
  gender: string;
  id: UserId;
  location: UserLocation;
  login: UserLogin;
  name: UserName;
  nat: string;
  phone: string;
  picture: UserPicture;
  registered: UserRegistered;
}

interface UserName {
  title: string;
  first: string;
  last: string;
}

interface UserDob {
  age: number;
  date: string;
}
interface UserId {
  name: string;
  value: string;
}

interface UserLocation {
  city: string;
  coordinates: UserCoordinates;
  country: string;
  postcode: number;
  state: string;
  street: UserStreet;
  timezone: UserTimezone;
}
interface UserCoordinates {
  latitude: string;
  longtitude: string;
}
interface UserStreet {
  name: string;
  number: number;
}
interface UserTimezone {
  descriptoin: string;
  offset: string;
}

interface UserLogin {
  md5: string;
  password: string;
  salt: string;
  sha1: string;
  sha256: string;
  username: string;
  uuid: string;
}
interface UserPicture {
  large: string;
  medium: string;
  thumbnail: string;
}
interface UserRegistered {
  age: number;
  date: string;
}
