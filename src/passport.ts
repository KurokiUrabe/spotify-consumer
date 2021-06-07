import passport from "passport";
import passportSpotify from "passport-spotify/";

const SpotifyStrategy = passportSpotify.Strategy;

// type Done = (err: any, user?: false | Express.User | null | undefined) => void;

const Strategy = passport.serializeUser((user: Express.User, done: any) => {
  done(null, user);
});
passport.deserializeUser((user: Express.User, done: any) => {
  done(null, user);
});
passport.use(
  new SpotifyStrategy(
    {
      clientID: "93b74e50acae4f1a9bfc4bdd7037ca0b",
      clientSecret: "392634d7d9664ece9550632d8fd2ca65",
      callbackURL: "http://localhost:3000/auth/spotify/callback",
    },
    (accessToken, refreshToken, profile, done: any) => {
      console.log("foing");

      return done(null, profile);
    }
  )
);

//
// 93b74e50acae4f1a9bfc4bdd7037ca0b
// Client Secret 392634d7d9664ece9550632d8fd2ca65
