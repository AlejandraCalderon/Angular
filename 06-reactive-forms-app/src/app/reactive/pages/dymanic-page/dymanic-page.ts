import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormUtils } from '../../../utils/form-utils';

@Component({
  selector: 'app-dymanic-page',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './dymanic-page.html',
})
export class DymanicPage {

  private fb = inject(FormBuilder);

  formUtils = FormUtils;

  myForm: FormGroup = this.fb.group({

    name: ['', [Validators.required, Validators.minLength(3)]],
    favoriteGames: this.fb.array([
      ['Metal Gear', Validators.required],
      ['Death Stranding', Validators.required]
    ], [Validators.minLength(3)])
  });

  get favoriteGames() {
    return this.myForm.get('favoriteGames') as FormArray;
  }

  newFavorite = new FormControl('', Validators.required);

  onAddFavorite() {
    if (this.newFavorite.invalid) return;

    this.favoriteGames.push(this.fb.control(this.newFavorite.value, Validators.required));
    this.newFavorite.reset();
  }


  onDeleteFavorite(i: number) {
    this.favoriteGames.removeAt(i);
  }

  onSubmit() {

    this.myForm.markAllAsTouched();

  }
}
