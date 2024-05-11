import { GetLatestFoodsRepository } from "@application/interfaces/repositories/Food/GetLatestFoodRepository";
import { GetLatesFoodsInterface } from "@application/interfaces/use-cases/foods/GetLatestFoodsInterface";


export class GetLatesFoods implements GetLatesFoodsInterface {
    constructor(
        private readonly getLatesrFoodsRepository: GetLatestFoodsRepository
    ) { }
    async execute(params: GetLatesFoodsInterface.Request): Promise<GetLatesFoodsInterface.Response> {
        const { page = 1, type, user_id, price } = params;
        const paginationLimit = 10;
        return this.getLatesrFoodsRepository.getLatestFoods({
            page, paginationLimit,
            query: {
                ...type && { type },
                ...user_id && { user_id },
                ...price && { price }
                // ...(type ? { type } : {}),
                // ...(location ? { location } : {})
            }
        });


    }

}