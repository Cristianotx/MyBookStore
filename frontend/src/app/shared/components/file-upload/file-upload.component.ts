import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  @Input() urlUploadArquivo;
  @Output() afterFileUploaded = new EventEmitter<any>();

  fileToUpload: File;
  constructor(private http: HttpClient) {}

  ngOnInit() {}

  onUpload({ target, ...el }) {
    this.fileToUpload = target.files.item(0);
    this.postFile(el);
  }

  postFile(el) {
    const endpoint = this.urlUploadArquivo;
    const formData: FormData = new FormData();
    formData.append('fileKey', this.fileToUpload, this.fileToUpload.name);
    return this.http
      .post(endpoint, formData, { responseType: 'text' })
      .subscribe(result => {
        this.afterFileUploaded.emit(result);
      });
  }
}
