import { Model, SortOrder } from "mongoose";

export async function sortModel(
  model: Model<any>,
  sortBy: string,
  limit: number
): Promise<{ data: any[] }> {

  const data = await model.find().sort({[sortBy]: -1}).limit(limit).exec();
  return { data };
}
