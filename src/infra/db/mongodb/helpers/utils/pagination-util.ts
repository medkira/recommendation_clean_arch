import { Model } from 'mongoose';

export async function paginateModel(
    model: Model<any>,
    page: number,
    paginationLimit: number,
    query: any
): Promise<{ data: any[]; page: number; total: number; totalPages: number }> {
    const skipCount = (page - 1) * paginationLimit;

    const totalDocuments = await model.find(query).countDocuments();
    const totalPages = Math.ceil(totalDocuments / paginationLimit);
    const data = await model
        .find(query)
        .sort({ createdAt: -1 }) // Adjust sorting based on your schema
        .skip(skipCount)
        .limit(paginationLimit)
        .exec();

    return {
        data,
        page,
        total: totalDocuments,
        totalPages,
    };
}
