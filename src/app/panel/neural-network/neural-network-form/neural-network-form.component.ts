import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-neural-network-form',
  templateUrl: './neural-network-form.component.html',
  styleUrls: ['./neural-network-form.component.scss']
})
export class NeuralNetworkFormComponent implements OnInit {

  @Input() data: any;
  @Output() formEmitter: EventEmitter<any> = new EventEmitter<any>();
  trainingProperties: string[];

  formGroup: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.trainingProperties = Object.keys(this.data);
    this.createForm();
  }

  onSubmit() {
    const trainingProperties = this.trainingProperties.filter((item: any, index: any) => {
      return this.formGroup.controls['trainingProperties'].value[index];
    });

    this.formEmitter.emit({
      trainingProperties: trainingProperties,
      predictClass: this.formGroup.controls['predictClass'].value
    });
  }

  private createForm() {
    this.formGroup = this.fb.group({
      trainingProperties: this.createFormArray(),
      predictClass: [null, Validators.required]
    });
  };

  private createFormArray() {
    return new FormArray(this.trainingProperties.map(() => new FormControl(true)));
  }
}

