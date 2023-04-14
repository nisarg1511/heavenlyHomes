import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-professional-registration',
  templateUrl: './professional-registration.component.html',
  styleUrls: ['./professional-registration.component.scss']
})
export class ProfessionalRegistrationComponent implements OnInit {
  professionalProfileForm: FormGroup;

  ngOnInit() {
    this.iniForm();
  }

  private iniForm() {
    this.professionalProfileForm = new FormGroup({
      'phone_number': new FormControl(null, Validators.required),
      'mobile_number': new FormControl(null, Validators.required),
      'company_name': new FormControl('', Validators.required),
      'company_description': new FormControl('', Validators.required),
      'profession': new FormControl('', Validators.required),
      'facebook': new FormControl(''),
      'linkedIn': new FormControl(''),
      'instagram': new FormControl(''),
      'whatsapp': new FormControl(''),
      'address': new FormGroup({
        'street': new FormControl('', Validators.required),
        'locality': new FormControl('', Validators.required),
        'city': new FormControl('', Validators.required),
        'pincode': new FormControl(null, Validators.required)
      })
    });
  }

  onSubmit() {
    console.log(this.professionalProfileForm.value);
  }
}
