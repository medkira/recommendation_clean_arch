import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import dotenv from "dotenv";
dotenv.config({ path: "src/main/config/env/.env" });


passport.serializeUser((user, done) => {
    console.log("serialized user", user.id);
    done(null, user.id);
  });
export const options = passport.use(
  new GoogleStrategy(
    {
      clientID:
        process.env.GOOGLE_OAUTH_CLIENT_ID,
      clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_OAUTH_REDIRECT_URL,
      passReqToCallback: true,
      scope: ["email", "profile"],
    },
    (request, accessToken, refreshToken, profile: any, done) => {
      return done(null, profile);
    }
  )
);
