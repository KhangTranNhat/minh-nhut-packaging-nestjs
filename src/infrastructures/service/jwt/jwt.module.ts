import {Global, Module} from '@nestjs/common';
import {JwtModule as JwtLibraryModule} from '@nestjs/jwt';
import {JwtService} from './jwt.service';

@Module({
  imports: [JwtLibraryModule.register({})],
  providers: [JwtService],
  exports: [JwtService],
})
export class JwtModule {
}