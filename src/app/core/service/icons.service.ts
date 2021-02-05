import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

const ICONSMAP = [
  {
    name: '',
    path: '',
  },
];

@Injectable()
export class IconsService {
  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
  ) {}

  load(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      ICONSMAP.forEach(ico => {
        this.iconRegistry.addSvgIcon(
          ico.name,
          this.sanitizer.bypassSecurityTrustResourceUrl(
            `/assets/icons/${ico.path}`,
          ),
        );
      });
      resolve();
    });
  }
}
