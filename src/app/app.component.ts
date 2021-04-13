import { Component, ViewChild, OnInit } from '@angular/core';
import { FormArray, FormGroup, Validators, FormControl } from "@angular/forms";
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  formGroup: FormGroup;
  profileForm: FormGroup;

  ngOnInit() {
    this.validate();
  }

  /********BUILD FORM-GROUP START*******/
  public validate(): void {
    this.profileForm = new FormGroup({
  
    updateAddress: new FormArray([this.newAddress()], Validators.required)
    });

  }

  get f() { return this.profileForm.controls; }

    get updateAddress(): FormArray {
    return this.profileForm.get("updateAddress") as FormArray
}

  public newAddress(): FormGroup {
    return new FormGroup({
      address : new FormControl('', [Validators.required, Validators.pattern('[0-9]{3}')]),
      address2 : new FormControl('', Validators.required),
      postalCode: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      area: new FormControl('', Validators.required)
    });
  }

  removeAddress(addIndex:number) {
    this.updateAddress.removeAt(addIndex);
  }

  /********BUILD FORM-GROUP END*******/

  /********EVENT CLICKZ START*******/
  public addAddress(): void {
    const control = <FormArray>this.f.updateAddress;
    control.push(this.newAddress());
  }

  public onSubmit(e): void {
    if (this.profileForm.valid) {
      alert('Summit success!');
      console.log(e.value);
    }
  }
  /********EVENT CLICKZ END*******/

  constructor() { }

}

