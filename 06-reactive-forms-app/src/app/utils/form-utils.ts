import {
  AbstractControl,
  FormArray,
  FormGroup,
  ValidationErrors,
} from '@angular/forms';

async function sleep() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 2500);
  });
}

export class FormUtils {
  static namePattern = '^([a-zA-Z]+) ([a-zA-Z]+)$';
  static emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  static notOnlySpacesPattern = '^[a-zA-Z0-9]+$';

  static getTextError(errors: ValidationErrors): string | null {
    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido';
        case 'minlength':
          return `Mínimo ${errors['minlength'].requiredLength} caracteres`;
        case 'min':
          return `El valor mínimo es ${errors['min'].min}`;
        case 'email':
          return 'El valor debe de ser un email';
        case 'requiredTrue':
          return 'Debe de aceptar los términos y condiciones';
        case 'pattern':
          if (errors['pattern'].requiredPattern === this.namePattern) {
            return 'El nombre debe de contener nombre y apellido';
          }
          if (errors['pattern'].requiredPattern === this.emailPattern) {
            return 'El email debe de tener el formato correcto';
          }
          if (errors['pattern'].requiredPattern === this.notOnlySpacesPattern) {
            return 'El username no puede contener un solo espacio en blanco';
          }
          return 'El valor no tiene el formato correcto';
        case 'passwordsNotEqual':
          return 'Las contraseñas deben de ser iguales';
        case 'emailTaken':
          return 'El email ya se encuentra registrado';
        case 'notStride':
          return 'El username no puede ser stride';
        default:
          return 'Error desconocido';
      }
    }

    return null;
  }

  static isValidField(form: FormGroup, fieldName: string): boolean | null {
    const control = form.controls[fieldName];
    return control.invalid && (control.touched || control.dirty);
  }

  static getFileError(form: FormGroup, fieldName: string): string | null {
    if (!form.controls[fieldName]) return null;
    return this.getTextError(form.controls[fieldName].errors ?? {});
  }

  static isValidFieldInArray(formArray: FormArray, index: number) {
    return (
      formArray.controls[index].errors && formArray.controls[index].touched
    );
  }

  static getFileErrorInArray(
    formArray: FormArray,
    index: number,
  ): string | null {
    if (!formArray.controls[index]) return null;
    const errors = formArray.controls[index].errors ?? {};
    return this.getTextError(errors);
  }

  static passwordsMatch(passwordField: string, confirmPasswordField: string) {
    return (formGroup: AbstractControl) => {
      const password = formGroup.get(passwordField);
      const confirmPassword = formGroup.get(confirmPasswordField);

      return password?.value === confirmPassword?.value
        ? null
        : { passwordsNotEqual: true };
    };
  }

  static async checkingServerResponse(
    control: AbstractControl,
  ): Promise<ValidationErrors | null> {

    await sleep();
    const formValue = control.value;
    if(formValue === 'hola@mundo.com') {
      return {
        emailTaken: true
      }
    }

    return null;
  }

  static notStride(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if(value === "stride") {
      return {
        notStride: true
      }
    }
    return null;
  }
}
