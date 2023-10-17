import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ScriptController } from './script.controller';
import { ScriptService } from './script.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { People } from 'src/entities/people.entity';
import { Film } from '../../entities/film.entity';
import { Planet } from 'src/entities/planet.entity';
import { Starship } from 'src/entities/starship.entity';
import { ScriptMiddleware } from './script.middleware';
import { ApiKeyStrategy } from './api-key.strategy';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [TypeOrmModule.forFeature([Film, People, Planet, Starship]),PassportModule],
  controllers: [ScriptController],
  providers: [ScriptService, ApiKeyStrategy],
  exports: [ScriptService],
})
export class ScriptModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ScriptMiddleware).forRoutes('/script');
  }
}
