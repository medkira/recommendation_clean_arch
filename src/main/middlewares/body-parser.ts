import bodyParser from 'body-parser';
import express from "express";

// export const bodyparser = bodyParser.json();

export const jsonparser = express.json();

export const urlencodedparser = express.urlencoded({ extended: true })