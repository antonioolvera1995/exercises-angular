import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'securDom'
})
export class SecurDomPipe implements PipeTransform {

  constructor(private domSanit:DomSanitizer){ }
  transform(value: string, ...args: unknown[]): SafeResourceUrl {
    return this.domSanit.bypassSecurityTrustResourceUrl(value);
  }

}
