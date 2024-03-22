export class Vehicle {
  public _id: number;
  public mispar_rechev: number;
  public tozeret_cd: number;
  public sug_degem: string;
  public tozeret_nm: string;
  public degem_cd: number;
  public degem_nm: string;
  public ramat_gimur: string;
  public ramat_eivzur_betihuty: string;
  public kvutzat_zihum: string;
  public shnat_yitzur: number;
  public degem_manoa: string;
  public mivchan_acharon_dt: string;
  public tokef_dt: string;
  public baalut: string;
  public misgeret: string;
  public tzeva_cd: number;
  public tzeva_rechev: string;
  public zmig_kidmi: string;
  public zmig_ahori: string;
  public sug_delek_nm: string;
  public horaat_rishum: number;
  public moed_aliya_lakvish: string;
  public kinuy_mishari: string;
  public rank: number;

  constructor(
    _id: number,
    mispar_rechev: number,
    tozeret_cd: number,
    sug_degem: string,
    tozeret_nm: string,
    degem_cd: number,
    degem_nm: string,
    ramat_gimur: string,
    ramat_eivzur_betihuty: string,
    kvutzat_zihum: string,
    shnat_yitzur: number,
    degem_manoa: string,
    mivchan_acharon_dt: string,
    tokef_dt: string,
    baalut: string,
    misgeret: string,
    tzeva_cd: number,
    tzeva_rechev: string,
    zmig_kidmi: string,
    zmig_ahori: string,
    sug_delek_nm: string,
    horaat_rishum: number,
    moed_aliya_lakvish: string,
    kinuy_mishari: string,
    rank: number
  ) {
    this._id = _id;
    this.mispar_rechev = mispar_rechev;
    this.tozeret_cd = tozeret_cd;
    this.sug_degem = sug_degem;
    this.tozeret_nm = tozeret_nm;
    this.degem_cd = degem_cd;
    this.degem_nm = degem_nm;
    this.ramat_gimur = ramat_gimur;
    this.ramat_eivzur_betihuty = ramat_eivzur_betihuty;
    this.kvutzat_zihum = kvutzat_zihum;
    this.shnat_yitzur = shnat_yitzur;
    this.degem_manoa = degem_manoa;
    this.mivchan_acharon_dt = mivchan_acharon_dt;
    this.tokef_dt = tokef_dt;
    this.baalut = baalut;
    this.misgeret = misgeret;
    this.tzeva_cd = tzeva_cd;
    this.tzeva_rechev = tzeva_rechev;
    this.zmig_kidmi = zmig_kidmi;
    this.zmig_ahori = zmig_ahori;
    this.sug_delek_nm = sug_delek_nm;
    this.horaat_rishum = horaat_rishum;
    this.moed_aliya_lakvish = moed_aliya_lakvish;
    this.kinuy_mishari = kinuy_mishari;
    this.rank = rank;
  }
}
