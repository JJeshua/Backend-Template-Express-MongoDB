import express from "express";

import { createUser } from "../db/users";
import { generateRandomString, authentication } from "../helpers";

import { get, merge } from "lodash";

export const register = async (req, res) => {
  const emailDomainValid = get(req, "emailDomainValid", false);

  if (!emailDomainValid) {
    return res.status(400).json({
      error: "Invalid email...",
    });
  }

  const registrationRequestBodyValid = get(
    req,
    "registrationRequestBodyValid",
    false
  );

  if (!registrationRequestBodyValid) {
    return res.status(400).json({
      error: "Invalid request...",
    });
  }

  try {
    const { first_name, last_name, username, email, password } = req.body;
    
  } catch (error) {
    return res.status(400).json({
      error: "Invalid request...",
    });
  }
};
