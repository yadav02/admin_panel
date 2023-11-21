const authenticateUser = (username, password) => {
  const users = [
    { username: "admin", password: "adminpass", roles: ["admin", "user"] },
    { username: "user", password: "userpass", roles: ["user"] },
  ];

  const authenticatedUser = users.find(
    (user) => user.username === username && user.password === password
  );

  return authenticatedUser;
};

export default authenticateUser;
