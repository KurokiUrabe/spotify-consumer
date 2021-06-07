export interface JsonSpotify {
  display_name: string;
  external_urls: any;
  followers: any;
  href: string;
  id: string;
  images: Array<any>;
  type: string;
  uri: string;
}

export interface SpotifyUser {
  provider: string;
  id: string;
  username: string;
  displayName: string;
  profileUrl: string;
  photos: any;
  country: null;
  followers: 3;
  product: null;
  _raw: string;
  _json: JsonSpotify;
}

export interface IUser {
  id: number;
  name: string;
  displayName: string;
  email: string;
}

// class User implements SpotifyUser {
//   public id: string;
//   public name: string;
//   public displayName: string;
//   profileUrl: string;
//   photos: any;
//   country: null;
//   followers: any;
//   product: null;
//   _raw: string;
//   _json: JsonSpotify;

//   constructor(nameOrUser: string | SpotifyUser, id?: string) {
//     if (typeof nameOrUser === "string") {
//       this.name = nameOrUser;
//       this.displayName = nameOrUser;
//       this.id = id || "";
//       this.profileUrl = "";
//       this.photos = "";
//       this.country = null;
//       this.followers = "";
//       this.product = null;
//       this._raw = "";
//       // this._json = ;
//     } else {
//       this.displayName = nameOrUser.displayName;
//       this.id = nameOrUser.id;
//       this.profileUrl = nameOrUser.profileUrl;
//       this.photos = nameOrUser.photos;
//       this.country = nameOrUser.country;
//       this.followers = nameOrUser.followers;
//       this.product = nameOrUser.product;
//       this._raw = nameOrUser._raw;
//       this._json = nameOrUser._json;
//     }
//   }
// }

// export type IdentifiedRequest = Express.Request & IRequestUser;

export default SpotifyUser;
