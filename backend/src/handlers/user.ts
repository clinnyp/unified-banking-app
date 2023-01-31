import prisma from "../utils/db";
import {
  comparePassword,
  createJWT,
  hashPassword,
  headers,
} from "../utils/auth";
import { Prisma } from "@prisma/client";
import axios from "axios";

export const createNewUser = async (req, res, next) => {
  try {
    const user = await prisma.user.create({
      data: {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        password: await hashPassword(req.body.password),
        email: req.body.email,
      },
    });
    const token = createJWT(user);
    res.json({ token });
  } catch (e) {
    res.status(401);

    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === "P2002") {
        res.json({ error: "User already exists" });
      }
    }

    next();
  }
};

export const signIn = async (req, res, next) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: req.body.email,
      },
    });

    const isValid = await comparePassword(req.body.password, user.password);

    if (!isValid) {
      res.status(401);
      res.json({ messsage: "invalid credentials" });
      return;
    }

    const token = createJWT(user);
    res.json({ token });
  } catch (e) {
    res.json({ message: "user not found" });
  }
};

export const getConnections = async (req, res) => {
  try {
    const response = await axios.get("https://api.akahu.io/v1/accounts", {
      headers: {
        Authorization: `Bearer ${process.env.USER_TOKEN}`,
        "X-Akahu-ID": process.env.APP_TOKEN,
      },
    });
    res.status(200);
    res.json(response.data);
  } catch (error) {
    console.error(error);
  }
};
