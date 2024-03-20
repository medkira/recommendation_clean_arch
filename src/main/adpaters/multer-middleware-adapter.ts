import { NextFunction } from "express";
import { Request, Response } from "express";
import { File } from "@domain/entities/File";

export const multerMiddlewareAdapter =
  (middleware: any) =>
  async (req: Request, res: Response, next: NextFunction) => {
    middleware(req, res, (err: any) => {
      // const obj = req.files as { [fieldname: string]: Express.Multer.File[] };

      // console.log("from multer midd adapter ", req.files)
      if (err) {
        return res.status(400).send({ message: err.message });
      }

      // console.log("--------------------------------------------------------------------------------------------------");
      // ? i can use this to add the files to the req.body : i think  no need for that, we can just pass it throw req.files
      // Object.assign(req, req.files);
      // let mappedFiles: File[] = [];
      // Object.keys(obj).forEach(key => {
      //     mappedFiles = mappedFiles.concat(((obj[key] as Express.Multer.File[]) || []).map(
      //         (file) => ({
      //             fieldname: file.fieldname,
      //             name: file.originalname,
      //             type: file.mimetype,
      //             buffer: file.buffer,
      //             size: file.size,
      //             extension: `${file.originalname.split(".").pop()}`,
      //         })
      //     ));
      // });
      // // console.log(mappedFiles);

      // Object.assign(req.body, { files: mappedFiles });
      next();
    });

    // if (httpResponse.statusCode === 200) {
    //     Object.assign(req, httpResponse.body);
    // } else {
    //     res.status(httpResponse.statusCode).json({
    //         error: httpResponse.body?.message,
    //     });
    // }
  };
