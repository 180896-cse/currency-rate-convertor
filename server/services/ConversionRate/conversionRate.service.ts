interface IGetConversionRate {
  getFetchedRate(): string;
}

export default class GetConversionRate implements IGetConversionRate {
  getFetchedRate(): string {
    try {
      return `Data Received from service Class !!`;
    } catch (error) {
      throw error;
    }
  }
}
