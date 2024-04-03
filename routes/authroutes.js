import passport from "passport";

module.exports = (app) => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      // Scope is the list of user
      scope: ["profile", "email"],
    })
  );

  app.get("/auth/google/callback", passport.authenticate("google"));
  app.get("/api/logout", (req, res) => {
    req.logout();
    res.send(req.user);
  });
  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
