import { HeaderAPIKeyStrategy } from 'passport-headerapikey';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ScriptService } from './script.service';

@Injectable()
export class ApiKeyStrategy extends PassportStrategy(HeaderAPIKeyStrategy) {
  constructor(private scriptService: ScriptService) {
    super({ header: 'apiKey' }, true, (apikey, done) => {
      const checkKey = scriptService.validateApiKey(apikey);
      if (!checkKey) {
        return done(false);
      }
      return done(true);
    });
  }
}