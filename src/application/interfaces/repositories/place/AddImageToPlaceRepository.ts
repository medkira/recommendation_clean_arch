export interface AddImageToPlaceByIdRepository {
    addImageToPlace(
        params: AddImageToPlaceByIdRepository.Request
    ): Promise<AddImageToPlaceByIdRepository.Response>;
}

export namespace AddImageToPlaceByIdRepository {
    export type Request = { placeId: string, imageUrl: string };
    export type Response = void;
}
