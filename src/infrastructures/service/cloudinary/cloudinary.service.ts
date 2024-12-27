import { Injectable } from '@nestjs/common';
import { UploadApiErrorResponse, UploadApiResponse, v2 } from 'cloudinary';
import toStream = require('buffer-to-stream');
import { EnvConfigurationService } from '@Infrastructures/env-configuration';

@Injectable()
export class CloudinaryService {
  constructor(private readonly configService: EnvConfigurationService) {}

  async upload(
    file: Express.Multer.File,
  ): Promise<UploadApiResponse | UploadApiErrorResponse> {
    var folder = this.configService.getCloudinaryFolder();
    return new Promise((resolve, reject) => {
      const upload = v2.uploader.upload_stream(
        { folder, public_id: Date.now().toString() },
        (error, result) => {
          if (error) return reject(error);
          resolve(result);
        },
      );
      toStream(file.buffer).pipe(upload);
    });
  }

  async destroy(publicId: string): Promise<void> {
    return new Promise((resolve, reject) => {
      v2.uploader.destroy(publicId, (error, result) => {
        if (error) return reject(error);
        resolve();
      });
    });
  }
}
