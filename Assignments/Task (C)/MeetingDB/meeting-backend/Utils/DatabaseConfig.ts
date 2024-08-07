class Config {
  public port: number = 8080;
  public host: string = "localhost";
  public mySQLHost: string = "localhost";
  public mySQLUser: string = "root";
  public mySQLPassword: string = "12345678";
  public mySQLDatabase: string = "CompanyData";
}

const config = new Config();
export default config;
