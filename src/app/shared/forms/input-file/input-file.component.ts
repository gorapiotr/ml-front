import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

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

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.createForm();
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

}
