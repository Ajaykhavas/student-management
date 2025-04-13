export type Gender = 'Male' | 'Female';

export interface Student {
  id: string;
  firstName: string;
  lastName: string;
  dob: Date;
  gender: Gender;
  class: 'A' | 'B' | 'C';
  address: string;
  email: string;
  mobile: string;
}
