export interface DeleteMenuRepository {
    deleteMenu(menuId: DeleteMenuRepository.Request): Promise<DeleteMenuRepository.Response>;

}

export namespace DeleteMenuRepository {
    export type Request = string;
    export type Response = void;

}
