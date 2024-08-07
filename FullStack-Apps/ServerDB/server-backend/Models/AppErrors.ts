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

export class UserAlreadyExists extends ClientError {
  constructor() {
    super(400, "User already exists");
  }
}

export class UserNotFound extends ClientError {
  constructor() {
    super(400, "User not found");
  }
}

export class UserNotLogged extends ClientError {
  constructor() {
    super(401, "User not authorized, please login.");
  }
}

export class VideoNotFound extends ClientError {
  constructor() {
    super(404, "Video ID was not found.");
  }
}

export class SongValidationError extends ClientError {
  constructor(errorMessage: string) {
    super(404, errorMessage);
  }
}

export class CategoryValidationError extends ClientError {
  constructor(errorMessage: string) {
    super(404, errorMessage);
  }
}
