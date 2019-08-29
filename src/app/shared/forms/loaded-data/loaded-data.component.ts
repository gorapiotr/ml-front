import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-loaded-data',
  templateUrl: './loaded-data.component.html',
  styleUrls: ['./loaded-data.component.scss']
})
export class LoadedDataComponent implements OnInit {

  @Input() data: any;
  @Input() dataLength: number;
  @Output() formEmitter: EventEmitter<any> = new EventEmitter<any>();
  trainingProperties: string[];

  formGroup: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.trainingProperties = Object.keys(this.data[0]);
    this.createForm();
    this.setUpTrainGroup();
  }

  private createForm() {
    this.formGroup = this.fb.group({
      trainingProperties: this.createFormArray(),
      predictClass: [this.trainingProperties[this.trainingProperties.length - 1], Validators.required],
      trainGroup: [this.dataLength - this.dataLength / 2, Validators.required],
      testGroup: [null, Validators.required],
      classValues: [this.initClassValues(), Validators.required]
    });
  };

  trainGroupChange() {
    this.setUpTrainGroup();
  }

  setUpTrainGroup() {
    this.formGroup.controls['testGroup'].setValue(this.dataLength - this.formGroup.controls['trainGroup'].value);
  }

  onSubmit() {
    this.formEmitter.emit(this.formGroup.value);
  }

  onCheckChange(event) {
    const formArray: FormArray = this.formGroup.get('trainingProperties') as FormArray;
    if (event.target.checked) {
      formArray.push(new FormControl(event.target.value));
    } else {
      let i = 0;
      formArray.controls.forEach((ctrl: FormControl) => {
        if (ctrl.value === event.target.value) {
          formArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  checkField(item: string) {
    return this.formGroup.controls['trainingProperties'].value.includes(item);
  }

  private createFormArray() {
    return new FormArray(this.trainingProperties
      .filter((item: any, index: number) => index !== this.trainingProperties.length - 1)
      .map((item: any) => new FormControl(item)));
  }

  private initClassValues() {
    return this.getClassValues(this.trainingProperties[this.trainingProperties.length - 1]);
  }

  private getClassValues(prop: string) {
    return Array.from(new Set(this.data.map((item: any) => item[prop])));
  }

  updateClassValues(prop: string) {
    this.formGroup.controls['classValues'].setValue(this.getClassValues(prop));
  }

  shuffleData() {
    this.data = this.shuffle(this.data);
    this.formEmitter.emit(this.formGroup.value);
  }

  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
}
