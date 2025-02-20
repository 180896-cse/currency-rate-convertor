interface IGetConversionRate {
  getFetchedRate(): string;
}

export default class GetConversionRate implements IGetConversionRate {
  getFetchedRate(): string {
    return `Data Received from service Class !!`;
  }
}
