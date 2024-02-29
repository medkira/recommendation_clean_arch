import { FilterRepository } from "@application/interfaces/repositories/dynamicRepository/FilterRepository";

export class FilterRepositoryImpl implements FilterRepository {

    
  filter(params: FilterRepository.Request): Promise<any> {
    const { mongooseQuery, queryString } = params;
    const queryStringObj = { ...queryString };
    const excludesFields = ["page", "sort", "limit", "fields"];
    excludesFields.forEach((field) => delete queryStringObj[field]);
    let queryStr = JSON.stringify(queryStringObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

    return mongooseQuery.find(JSON.parse(queryStr));
  }
}
