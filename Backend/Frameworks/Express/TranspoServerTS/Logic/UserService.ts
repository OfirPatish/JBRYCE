import { User } from "../Models/UserAccount";
import { generateToken } from "../Utils/JWTService";
import { UserAlreadyExists, UserNotFound } from "../Models/AppErrors";
import { OkPacket } from "mysql";
import dal_mysql from "../DAL/dal_mysql";

const fs = require("fs");

const authenticateUser = async (credentials: User) => {
  try {
    // Normalize the username to lowercase
    const normalizedUsername = credentials.username.toLowerCase();

    // Query the database for the user
    const sqlCheck = `SELECT * FROM users WHERE LOWER(username) = '${normalizedUsername}'`;
    const existingUsers = await dal_mysql.execute(sqlCheck);

    if (existingUsers.length === 0) {
      throw new UserNotFound();
    }

    const existingUser = existingUsers[0];

    // Check if the password matches
    if (existingUser.password === credentials.password) {
      const userInfo = {
        username: existingUser.username,
        email: existingUser.email,
        role: existingUser.role,
        jwt: generateToken(existingUser),
      };
      return userInfo;
    } else {
      return {
        username: "Guest",
        email: "",
        role: "",
        jwt: "",
      };
    }
  } catch (error) {
    console.log("Authentication failed: User not found or password mismatch.");
    throw error;
  }
};

const registerUser = async (user: User) => {
  try {
    // Normalize the username to lowercase
    const normalizedUsername = user.username.toLowerCase();

    // Set default role to "User" if not provided
    const role = user.role || "User";

    // Check if the user already exists
    const sqlCheck = `SELECT * FROM users WHERE LOWER(username) = '${normalizedUsername}' OR LOWER(email) = '${user.email.toLowerCase()}'`;
    const existingUsers = await dal_mysql.execute(sqlCheck);

    if (existingUsers.length > 0) {
      throw new UserAlreadyExists();
    }

    // Insert the new user
    const sqlInsert = `INSERT INTO users (id, username, password, email, role) VALUES (0, '${normalizedUsername}', '${user.password}', '${user.email}', '${role}')`;
    const result: OkPacket = await dal_mysql.execute(sqlInsert);
    console.log(`Created user with id: ${result.insertId}`);
    user.id = +result.insertId;
    return "User was created";
  } catch (err) {
    if (err instanceof UserAlreadyExists) {
      return err.errorMessage;
    }
    throw err;
  }
};

const getUserPassword = async (username: string) => {
  try {
    // Normalize the username to lowercase
    const normalizedUsername = username.toLowerCase();

    // Query the database for the user
    const sqlCheck = `SELECT password FROM users WHERE LOWER(username) = '${normalizedUsername}'`;
    const existingUsers = await dal_mysql.execute(sqlCheck);

    if (existingUsers.length === 0) {
      throw new UserNotFound();
    }

    return existingUsers[0].password;
  } catch (error) {
    console.log("Failed to get user password: User not found.");
    throw error;
  }
};

const changeUserRole = async (username: string, newRole: string): Promise<boolean> => {
  try {
    // Normalize the username to lowercase
    const normalizedUsername = username.toLowerCase();

    // Check if the user exists
    const sqlCheck = `SELECT * FROM users WHERE LOWER(username) = '${normalizedUsername}'`;
    const existingUsers = await dal_mysql.execute(sqlCheck);

    if (existingUsers.length === 0) {
      throw new UserNotFound();
    }

    // Update the user's role
    const sqlUpdate = `UPDATE users SET role = '${newRole}' WHERE LOWER(username) = '${normalizedUsername}'`;
    await dal_mysql.execute(sqlUpdate);

    return true;
  } catch (error) {
    console.log(`Failed to change user role: ${(error as any).message}`);
    return false;
  }
};

const deleteUser = async (id: number) => {
  try {
    const sqlDelete = `DELETE FROM users WHERE id = ${id}`;
    const result = await dal_mysql.execute(sqlDelete);
    return result;
  } catch (err) {
    return err;
  }
};

export { registerUser, authenticateUser, getUserPassword, changeUserRole, deleteUser };
