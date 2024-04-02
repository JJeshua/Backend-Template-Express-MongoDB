import express from "express";
import { get, merge } from "lodash";

const validEmailDomains = ["gmail.com", "outlook.com"];

export const isValidEmail = (req, res, next) => {
  const email = req.body.email;
  const atIndex = email.lastIndexOf("@");

  if (atIndex === -1) {
    return res.status(400).json({
      error: "Invalid email...",
    });
  }

  const domain = email.slice(atIndex + 1);

  if (!validEmailDomains.includes(domain)) {
    return res.status(400).json({
      error: "Invalid email...",
    });
  }

  const emailDomainValid = true;
  merge(req, { emailDomainValid });

  next();
};

export const isValidRegistrationRequestBody = (req, res, next) => {
  const { first_name, last_name, username, email, password } = req.body;

  if (!first_name || !last_name || !username || !email || !password) {
    return res.status(400).json({
      error: "All fields are required...",
    });
  }

  if (first_name.length < 3 || first_name.length > 20) {
    return res.status(400).json({
      error: "First name must be between 3 and 20 characters...",
    });
  }

  if (last_name.length < 3 || last_name.length > 20) {
    return res.status(400).json({
      error: "Last name must be between 3 and 20 characters...",
    });
  }

  if (username.length < 3 || username.length > 20) {
    return res.status(400).json({
      error: "Username must be between 3 and 20 characters...",
    });
  }

  if (password.length < 6 || password.length > 30) {
    return res.status(400).json({
      error: "Password must be between 6 and 30 characters...",
    });
  }

  const registrationRequestBodyValid = true;
  merge(req, { registrationRequestBodyValid });

  next();
};
