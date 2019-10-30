import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-input-file',
  templateUrl: './input-file.component.html',
  styleUrls: ['./input-file.component.scss']
})
export class InputFileComponent implements OnInit {

  @Output() fileEmitter: EventEmitter<any> = new EventEmitter<any>();

  formGroup: FormGroup;
  fileName = 'Load file';
  loadFlag = false;
  irisHref: string;
  diabetesHref: string;

  constructor(private fb: FormBuilder, private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.createForm();
    this.genIris();
    this.genDiabetes();
  }

  private createForm() {
    this.formGroup = this.fb.group({
      file: ['', Validators.required]
    });
  }

  onFileChange(event) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      this.fileName = file.name;
      reader.readAsText(file);
      reader.onload = () => {
        this.formGroup.patchValue({
          file: JSON.parse(reader.result as string)
        });
      };
    }
  }

  onSubmit() {
    this.fileEmitter.emit(this.shuffle(this.formGroup.controls['file'].value));
    this.loadFlag = true;
  }

  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  reload() {
    window.location.reload();
  }

  async genIris() {

    let resp = await fetch('https://api.myjson.com/bins/oao4w');

    var theJSON = JSON.stringify(await resp.json());
    var uri = this.sanitizer.bypassSecurityTrustUrl('data:text/json;charset=UTF-8,' + encodeURIComponent(theJSON));
    this.irisHref = uri;
  }

  async genDiabetes() {

    let resp = await fetch('https://api.myjson.com/bins/1eqqts');

    var theJSON = JSON.stringify(await resp.json());
    var uri = this.sanitizer.bypassSecurityTrustUrl('data:text/json;charset=UTF-8,' + encodeURIComponent(theJSON));
    this.diabetesHref = uri;
  }
}
