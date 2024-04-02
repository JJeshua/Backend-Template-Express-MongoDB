import express from "express";

import { register } from "../controllers/authentication.js";

export default (router) => {
  router.post("/auth/register", register);
};
