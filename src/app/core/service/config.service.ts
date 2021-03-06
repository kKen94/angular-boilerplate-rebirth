import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from '@model';
import { environment } from '@env';

@Injectable()
export class ConfigService {
  static settings: Config;
  constructor(private http: HttpClient) {}

  load(): Promise<void> {
    const jsonFile = `assets/config/config.${environment.name}.json`;

    return new Promise<void>((resolve, reject) => {
      this.http
        .get(jsonFile)
        .toPromise()
        .then((response: unknown) => {
          ConfigService.settings = response as Config;
          resolve();
        })
        .catch((response: unknown) => {
          reject(
            `Could not load file '${jsonFile}': ${JSON.stringify(response)}`,
          );
        });
    });
  }
}
