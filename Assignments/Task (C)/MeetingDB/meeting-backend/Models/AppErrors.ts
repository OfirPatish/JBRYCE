export class ClientError {
  public statusCode: number;
  public errorMessage: string;

  public constructor(statusCode: number, errorMessage: string) {
    this.statusCode = statusCode;
    this.errorMessage = errorMessage;
  }
}

export class NotFoundError extends ClientError {
  constructor(route: string) {
    super(404, `Route ${route} was not found`);
  }
}

export class VideoNotFound extends ClientError {
  constructor() {
    super(404, "Video ID was not found.");
  }
}
