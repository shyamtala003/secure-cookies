import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://bug-free-space-dollop-647jq9jq5vqf57p5-5173.app.github.dev",
      "https://cookie-setup.netlify.app",
    ],
    credentials: true,
  })
);

app.post("/", (request, response) => {
  response.cookie("refresh-token", "sdfnssdfsdfdf", {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    maxAge: 24 * 60 * 60 * 1000,
    // httpOnly: true,
    // secure: false, // Temporarily for local development
    // sameSite: "lax", // Can use "lax" for local development if not testing cross-site requests
    // maxAge: 24 * 60 * 60 * 1000,
  });
  response.json("cookie setted");
});

app.get("/login", (request, response) => {
  console.log(request.cookies["refresh-token"]);
  response.json("cookie received");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
