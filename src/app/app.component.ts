import { toBase64String } from "@angular/compiler/src/output/source_map";
import { Component, VERSION } from "@angular/core";
​
import {
  NgxQrcodeElementTypes,
  NgxQrcodeErrorCorrectionLevels
} from "@techiediaries/ngx-qrcode";
import { from } from "rxjs";
​
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  elementType = NgxQrcodeElementTypes.URL;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  //Hacer ésta vaina para que detecte cada ve que se escribe en el input
  table = "";
  //id del cliente de api-clientes que está logueado en Qa-aliados
  provider = '';
  token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvcWF1cy56aXBweXR0ZWNoLmNvbVwvdXNcL2xvZ2luIiwiaWF0IjoxNjA3NjQyMDYxLCJleHAiOjE2NDg0NDIwNjEsIm5iZiI6MTYwNzY0MjA2MSwianRpIjoiczdvWGtzbkhvU2xHMlc3WiIsInN1YiI6ImxvY2F0ZWxAYmVyeWdvLmNvbSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjciLCJ1c2VybmFtZSI6ImxvY2F0ZWxAYmVyeWdvLmNvbSIsImFjY291bnQiOls5XSwicm9sZXMiOlsicHJvdmlkZXIiXX0.eoyOGyvPJASTPTjLJS-aKOZigN9HqT2TTpHtWpklBUk";
  value = `https://qaaliados.berygo.com/create/operation?token=${
    this.token
  }&table=${this.table}&provider=${this.provider}`;
​
  public setUrl() {
    this.value = `https://qaaliados.berygo.com/create/operation?token=${
      this.token
    }&table=${this.table}&provider=${this.provider}`;
  }
​
  public downloadQRCode() {
    const fileNameToDownload = "image_qrcode";
    const base64Img = document.getElementsByClassName("bshadow")[0].children[0][
      "src"
    ];
    fetch(base64Img)
      .then(res => res.blob())
      .then(blob => {
        // Internet Explorer o Edge
        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
          window.navigator.msSaveOrOpenBlob(blob, fileNameToDownload);
        } else {
          // Chrome o Firefox
          const url = window.URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.href = url;
          link.download = fileNameToDownload;
          link.click();
        }
      });
  }
}