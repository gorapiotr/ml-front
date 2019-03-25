import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-neural-network-form',
  templateUrl: './neural-network-form.component.html',
  styleUrls: ['./neural-network-form.component.scss']
})
export class NeuralNetworkFormComponent implements OnInit {

  @Input() data: any;
  @Input() dataLength: number;
  @Output() formEmitter: EventEmitter<any> = new EventEmitter<any>();
  trainingProperties: string[];

  formGroup: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.trainingProperties = Object.keys(this.data);
    this.createForm();
  }

  private createForm() {
    this.formGroup = this.fb.group({
      trainingProperties: this.createFormArray(),
      predictClass: [this.trainingProperties[this.trainingProperties.length - 1], Validators.required],
      trainGroup: [this.dataLength - this.dataLength / 2],
    });
  };

  onSubmit() {
    const trainingProperties = this.trainingProperties.filter((item: any, index: any) => {
      return this.formGroup.controls['trainingProperties'].value[index];
    });

    this.formEmitter.emit({
      trainingProperties: trainingProperties,
      predictClass: this.formGroup.controls['predictClass'].value,
      trainGroup: this.formGroup.controls['trainGroup'].value,
      testGroup: this.dataLength - this.formGroup.controls['trainGroup'].value
    });
  }

  private createFormArray() {
    return new FormArray(this.trainingProperties.map((item: any, index: number) => new FormControl(
      {value: !(this.trainingProperties.length - 1 === index), disabled: this.trainingProperties.length - 1 === index}
    )));
  }
}

