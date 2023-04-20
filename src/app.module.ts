import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './app/users/users.module';
import { UploadImageModule } from './app/uploadImage/uploadimage.module';

@Module({
  imports: [
    UsersModule,
    UploadImageModule
  ],
  controllers: [AppController],
  providers: [AppService]
})

export class AppModule { }
