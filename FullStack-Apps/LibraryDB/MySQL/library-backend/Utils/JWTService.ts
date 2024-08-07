import jwt from "jsonwebtoken";

const SECRET_KEY = "the-secret-key-need-to-be-at-least-256-bytes";

const generateToken = (userDetails: { username: string; email: string; role: string }): string => {
  const payload = {
    username: userDetails.username,
    email: userDetails.email,
    role: userDetails.role,
  };

  const options = { expiresIn: "1h" };

  const token = jwt.sign(payload, SECRET_KEY, options);
  console.log("JWT payload created successfully:", payload);
  console.log("JWT token generated successfully: ", "Bearer " + token);

  return "Bearer " + token;
};

const validateToken = (token: string): jwt.JwtPayload | null => {
  try {
    const tokenWithoutPrefix = token.split(" ")[1];
    const decodedPayload = jwt.verify(tokenWithoutPrefix, SECRET_KEY) as jwt.JwtPayload;
    console.log("JWT payload decoded successfully:", decodedPayload);
    return decodedPayload;
  } catch (err: any) {
    console.log("Error during JWT validation: ", err.name);
    return null;
  }
};

export { generateToken, validateToken };
