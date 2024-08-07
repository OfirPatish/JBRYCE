export class CarModel {
  mispar_rechev: number;
  tozeret_nm: string;
  degem_nm: string;
  degem_manoa: string;
  tzeva_rechev: string;
  shnat_yitzur: number;

  constructor(
    mispar_rechev: number,
    tozeret_nm: string,
    degem_nm: string,
    degem_manoa: string,
    tzeva_rechev: string,
    shnat_yitzur: number
  ) {
    this.mispar_rechev = mispar_rechev;
    this.tozeret_nm = tozeret_nm;
    this.degem_nm = degem_nm;
    this.degem_manoa = degem_manoa;
    this.tzeva_rechev = tzeva_rechev;
    this.shnat_yitzur = shnat_yitzur;
  }
}
