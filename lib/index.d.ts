import multer = require('multer');
import { StorageOptions, PredefinedAcl } from '@google-cloud/storage';
import { Request } from 'express';
export default class MulterGoogleCloudStorage implements multer.StorageEngine {
    private gcsBucket;
    private gcsStorage;
    private options;
    private blobFile;
    getFilename(req: any, file: any, cb: any): void;
    getDestination(req: any, file: any, cb: any): void;
    getContentType(req: any, file: any): any;
    private setBlobFile;
    constructor(opts?: StorageOptions & {
        acl?: PredefinedAcl;
        bucket?: string;
        destination?: any;
        filename?: any;
        hideFilename?: boolean;
        contentType?: ContentTypeFunction;
    });
    _handleFile: (req: any, file: any, cb: any) => void;
    _removeFile: (req: any, file: any, cb: any) => void;
}
export declare function storageEngine(opts?: StorageOptions & {
    bucket?: string;
    destination?: any;
    filename?: any;
    hideFilename?: boolean;
    contentType?: ContentTypeFunction;
}): MulterGoogleCloudStorage;
export declare type ContentTypeFunction = (req: Request, file: Express.Multer.File) => string | undefined;
