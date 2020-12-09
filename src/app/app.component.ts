import { Component, VERSION } from '@angular/core';

import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';
import { from } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  elementType = NgxQrcodeElementTypes.URL;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  value = 'http://qaaliados.berygo.com/';

  public downloadQRCode() {
   const fileNameToDownload = 'image_qrcode';
   const base64Img = document.getElementsByClassName('bshadow')[0].children[0]['src'];
   fetch(base64Img)
      .then(res => res.blob())
      .then((blob) => {
         // Internet Explorer o Edge
         if (window.navigator && window.navigator.msSaveOrOpenBlob){
            window.navigator.msSaveOrOpenBlob(blob,fileNameToDownload);
         } else { // Chrome o Firefox
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = fileNameToDownload;
            link.click();
         }
      })
}
}


