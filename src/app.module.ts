import { Module } from '@nestjs/common';
import { UserModule } from './resourse/user/user.module';


@Module({
  imports: [UserModule],

})
export class AppModule {}
