import { Router } from "express";
import passport from "passport";
import { redirectHome, unknown } from "./Auth";
import { showMyName, spotifyLogin } from "./spotify";
import { getAllUsers, addOneUser, updateOneUser, deleteOneUser } from "./Users";

// User-route
const userRouter = Router();
userRouter.get("/all", getAllUsers);
userRouter.post("/add", addOneUser);
userRouter.put("/update", updateOneUser);
userRouter.delete("/delete/:id", deleteOneUser);

// Auth
const authRouter = Router();
authRouter.get("/", (req, res) => {
  console.log("yeah");
});
authRouter.get("/error", unknown);
// /auth/spotify;
authRouter.get("/spotify", passport.authenticate("spotify"));
authRouter.get(
  "/spotify/callback",
  passport.authenticate("spotify", { failureRedirect: "/auth/error" }),
  redirectHome
);
// Spotify auth correct!!!
const spotifyRouter = Router();
spotifyRouter.get("/", showMyName);

// api
const apiRouter = Router();
apiRouter.use("/users", userRouter);
// Export the base-router
const baseRouter = Router();
baseRouter.use("/", spotifyRouter);
baseRouter.use("/auth", authRouter);

export default baseRouter;
