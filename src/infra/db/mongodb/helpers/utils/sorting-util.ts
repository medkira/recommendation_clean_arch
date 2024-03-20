import { Model, SortOrder } from "mongoose"; // Assuming you're using Mongoose for MongoDB

export async function sortModel(
  model: Model<any>,
  sortBy: string,
  limit: number
): Promise<{ data: any[] }> {
  const sortQuery: { [key: string]: SortOrder } = {};
  sortQuery[sortBy as string] = -1; // Dynamically construct sorting object

  const data = await model.find().sort(sortQuery).limit(limit).exec();
  return { data };
}
