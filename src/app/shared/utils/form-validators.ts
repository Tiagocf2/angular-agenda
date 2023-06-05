import { FormControl, FormGroup } from '@angular/forms';

export abstract class CustomValidators {
  private static EQUALS_TO_ERROR = 'The field name provided is invalid';
  static cep(control: FormControl) {
    const cep = control.value;
    return !!cep && /^\d{8}$/.test(cep) ? null : { invalidCep: true };
  }

  static equalsTo(name: string) {
    return (control: FormControl) => {
      if (!control.root || !(<FormGroup>control.root).controls) {
        return null;
      }
      if (!name) throw new Error(this.EQUALS_TO_ERROR);
      const field = (<FormGroup>control.root).get(name);
      if (!field) throw new Error(this.EQUALS_TO_ERROR);
      return field.value === control.value ? null : { notEqualsTo: name };
    };
  }
}
