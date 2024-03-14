import { HttpRequest } from "@infra/http/interfaces/http/HttpRequest"
import { HttpResponse } from "@infra/http/interfaces/http/HttpResponse";
import { BaseController } from "../BaseController";
import { EmailInUseError } from "@application/errors/EmailInUseError";
import { SignUpNormalUserInterface } from "@application/interfaces/use-cases/authentication/SignUpNormalUserInterface";
import { SignUpOwnerInterface } from "@application/interfaces/use-cases/authentication/SignUpOwnerInterface";
import { Validation } from "@infra/http/interfaces/validation/validations";
import { UserRole } from "@domain/entities/User";
import { forbidden, ok } from "@infra/http/helpers/https";
import { SignInInterface } from "@application/interfaces/use-cases/authentication/SignInInterface";
import { File } from "@domain/entities/File";

// import { Multer } from 'multer';
// type File = Express.Multer.File;
export class SignUpController extends BaseController {
    constructor(
        // ! validation for either owner or normal user implementaion
        private readonly signUpValidation: Validation,
        private readonly signUpOwner: SignUpOwnerInterface,
        private readonly signUpNormalUser: SignUpNormalUserInterface,
        private readonly signIn: SignInInterface,
    ) {
        // super();
        super(signUpValidation);

    }

    async execute(httpRequest: SignUpController.Request): Promise<HttpResponse> {
        const { role, email, password, image = httpRequest.files } = httpRequest.body!;

        // console.log("from signup controller", httpRequest.files?.profileImage);


        let idOrError;
        if (role === UserRole.OWNER) {
            idOrError = await this.signUpOwner.execute({ ...httpRequest.body, image: httpRequest.files?.profileImage } as SignUpOwnerInterface.Request);
        } else if (role === UserRole.NORMAL) {
            idOrError = await this.signUpNormalUser.execute({ ...httpRequest.body, image: httpRequest.files?.profileImage } as SignUpNormalUserInterface.Request);
        } else {
            // Handle invalid role scenario acutally no need for this bcs we done it in the validation stagge ;)
            throw new Error("Invalid user role provided.");
        }



        if (idOrError instanceof EmailInUseError) {
            return forbidden(idOrError)
        };

        const authenticationTokenOrError = await this.signIn.execute({ email, password });

        if (authenticationTokenOrError instanceof Error) {
            throw authenticationTokenOrError;
        }
        return ok({
            authenticationToken: authenticationTokenOrError
        });
    }
}


export namespace SignUpController {
    export type Request = HttpRequest<SignUpNormalUserInterface.Request | SignUpOwnerInterface.Request,
        undefined, undefined, undefined, { profileImage: File[] }>;
    export type Response = HttpResponse<{ authenticationToken: string } | EmailInUseError>;
}





// ! old , but part of it is right in case of array of photos 
// ? this need to be a usecase that is responsible for uploading image to clodinary
// console.log(httpRequest.files);
// const test = httpRequest.files.images;
//! this wrong cant forEach and async
// test.forEach(async (element: any) => {

//     // ? this used for local upload
//     // await sharp(element!.buffer).resize({ width: 250, height: 250 }).png().toFile(`uploads/${element!.originalname}`);

//     await sharp(element!.buffer).resize({ width: 250, height: 250 }).png().toFile(`uploads/${element!.originalname}`);


// });

