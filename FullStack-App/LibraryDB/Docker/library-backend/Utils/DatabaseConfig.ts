class Config {
  // Only useful for local development
  public port: number = 8080;
  public host: string = "localhost";
  // public mySQLHost: string = "localhost" -> Connects to MySQL running on the same machine as the application
  // public mySQLHost: string = "host.docker.internal" -> Connects to MySQL running on the host machine from within a Docker container
  // public mySQLHost: string = "mysql" -> Connects to MySQL service defined in the same Docker Compose network
  public mySQLHost: string = "mysql";
  public mySQLUser: string = "libraryuser";
  public mySQLPassword: string = "12345678";
  public mySQLDatabase: string = "librarydb";
}

const config = new Config();
export default config;
