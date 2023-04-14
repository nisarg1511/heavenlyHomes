import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  calculatorForm: FormGroup;
  ngOnInit(): void {
    this.calculatorForm = new FormGroup({
      locality: new FormControl('urban', Validators.required),
      area: new FormControl(null, Validators.required)
    });

    this.show_finalCost = false;
  }

  show_finalCost: boolean;

  design = 0;
  borewell = 0;
  marking = 0;
  sand = 0;
  water = 0;
  steel = 0;
  bricks = 0;
  contractor = 0;
  plumbing = 0;
  cement = 0;
  electrical_work = 0;
  soil = 0;
  compound_wall = 0;
  frame_work = 0;
  painting = 0;
  external_flooring = 0;
  doors = 0;
  miscellaneous = 0;
  total_cost = 0;



  total_expenditure: number;
  onReset() {
    this.calculatorForm = new FormGroup({
      locality: new FormControl('urban', Validators.required),
      area: new FormControl(null, Validators.required)
    });
    this.show_finalCost = false;
  }

  calculateCost() {
    let area = this.calculatorForm.value.area;
    let locality = this.calculatorForm.value.locality;
    if (locality === 'urban') {
      this.design = 80 * area;
      this.total_cost = 2000 * area;
      this.borewell = 60 * area;
      this.marking = 60 * area;
      this.sand = 80 * area;
      this.water = 20 * area;
      this.steel = 80 * area;
      this.bricks = 180 * area;
      this.contractor = 180 * area;
      this.plumbing = 140 * area;
      this.cement = 240 * area;
      this.electrical_work = 100 * area;
      this.soil = 40 * area;
      this.compound_wall = 40 * area;
      this.frame_work = 60 * area;
      this.painting = 200 * area;
      this.external_flooring = 120 * area;
      this.doors = 60 * area;
      this.miscellaneous = 160 * area;
    }
    else if (locality === 'metro') {
      this.total_cost = 3500 * area;
      this.design = 140 * area;
      this.borewell = 105 * area;
      this.marking = 105 * area;
      this.sand = 140 * area;
      this.water = 35 * area;
      this.steel = 140 * area;
      this.bricks = 315 * area;
      this.contractor = 315 * area;
      this.plumbing = 245 * area;
      this.cement = 420 * area;
      this.electrical_work = 175 * area;
      this.soil = 70 * area;
      this.compound_wall = 70 * area;
      this.frame_work = 105 * area;
      this.painting = 350 * area;
      this.external_flooring = 210 * area;
      this.doors = 105 * area;
      this.miscellaneous = 280 * area;
    }

    else {
      this.total_cost = 1100 * area;
      this.design = 44 * area;
      this.borewell = 33 * area;
      this.marking = 33 * area;
      this.sand = 44 * area;
      this.water = 11 * area;
      this.steel = 44 * area;
      this.bricks = 99 * area;
      this.contractor = 99 * area;
      this.plumbing = 77 * area;
      this.cement = 132 * area;
      this.electrical_work = 55 * area;
      this.soil = 22 * area;
      this.compound_wall = 22 * area;
      this.frame_work = 33 * area;
      this.painting = 110 * area;
      this.external_flooring = 66 * area;
      this.doors = 33 * area;
      this.miscellaneous = 88 * area;
    }
    this.show_finalCost = true;
  }
}
