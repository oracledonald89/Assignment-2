app.post("/api/signup", (req, res) => {
  const { email, password } = req.body;

  if (typeof email !== "string" ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({
      error: "Invalid email address"
    });
  }

  if (typeof password !== "string" || password.length < 8) {
    return res.status(400).json({
      error: "Password must be at least 8 characters"
    });
  }

  // Continue with account creation only after validation.
  res.status(201).json({
    message: "Input validation passed"
  });
});