export class User {
  constructor(
    public email: string,
    public id: string,
    private _token: string,
    private _tokenExpirationDate: Date
  ) {}

  public get token() {
    return this._token;
  }

  public get tokenExpirationDate() {
    return this._tokenExpirationDate;
  }

  isValidToken(): boolean {
    return (
      !!this._tokenExpirationDate && new Date() <= this._tokenExpirationDate
    );
  }
}
// comment