import { BaseController } from "@infra/http/controllers/BaseController";
import { GetLatestCommentsController } from "@infra/http/controllers/food/GetLatestCommentsController";
import { makeGetLatestComments } from "@main/factories/use-case/comment/get-latest-comments-factory";

export const makeGetLatestCommentsController = (): BaseController => {
    const getLatestComments = makeGetLatestComments();

    return new GetLatestCommentsController(getLatestComments);
};
