import {Injectable} from "@angular/core";
import {AbstractControl} from "@angular/forms";

@Injectable()
export class ValidatorService {
  constructor() {
  }

  strong() {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const hasNumber = /\d/.test(control.value) ? 1 : 0;
      const hasUpper = /[A-Z]/.test(control.value) ? 1 : 0;
      const hasLower = /[a-z]/.test(control.value) ? 1 : 0;
      const hasSpecial = /[!"#$%&'()*+,-.\/:;<=>?@\[\]^_`{|}~]/.test(control.value) ? 1 : 0;
      const valid = hasNumber + hasUpper + hasLower + hasSpecial;
      if (valid < 3) {
        return {
          number: !!+hasNumber,
          upper: !!+hasUpper,
          lower: !!+hasLower,
          special: !!+hasSpecial,
        };
      }
      return null;
    };
  }
}
