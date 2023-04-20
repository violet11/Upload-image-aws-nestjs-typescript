import { Module } from "@nestjs/common";
import { UploadImageController } from "./uploadimage.controller";
import { UploadImageService } from "./uploadimage.service";

@Module({
    controllers: [UploadImageController],
    providers: [UploadImageService],
    exports: [UploadImageService]
})

export class UploadImageModule { }