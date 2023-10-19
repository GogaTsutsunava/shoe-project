export class Post {
  s_Title: string;
  s_Description: string;
  n_Date: number;
  arr_s_Pictures: string[];

  constructor() {
    this.s_Title = ''; // Initialize s_Title in the constructor
    this.s_Description = ''; // Initialize s_Description in the constructor
    this.n_Date = 0; // Initialize n_Date in the constructor
    this.arr_s_Pictures = []; // Initialize arr_s_Pictures in the constructor
  }
}
