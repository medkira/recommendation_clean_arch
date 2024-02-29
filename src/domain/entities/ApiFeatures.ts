export type ApiFeaturesProps = {
  mongooseQuery: any;
  queryString: any;
};

export class ApiFeatures {
  public readonly mongooseQuery: any;
  public readonly queryString: any;

  constructor(props: ApiFeaturesProps) {
    this.mongooseQuery = props.mongooseQuery;
    this.queryString = props.queryString;
  }
}
