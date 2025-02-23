export async function handleLogin(
  e,
  setError,
  email,
  password,
  setEmail,
  setPassword,
  router
) {
  e.preventDefault();
  setError("");

  if (!email || !password) {
    setError("Please fill in all fields");
    return;
  }

  try {
    const response = await fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
      credentials: "include",
    });

    const data = await response.json();

    if (response.ok) {
      console.log("Login successful", data);
      router.push("/");
    } else {
      setError("Invalid email or password");
    }
  } catch (error) {
    setError(error.message || "Something went wrong");
  }
}

export async function handleLogout(
  token,
  router,
  setEmail,
  setPassword,
  setConfirmPassowrd
) {
  try {
    const response = await fetch("http://localhost:8080/logout", {
      method: "POST",
      credentials: "include",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.ok) {
      router.push("/");
      setEmail("");
      setPassword("");
      setConfirmPassowrd("");
    } else {
      console.error("Logout failed");
    }
  } catch (error) {
    console.error("Error during logout:", error);
  }
}

export async function handleUpdateUser(e, user, router, token) {
  e.preventDefault();

  try {
    const response = await fetch(
      `http://localhost:8080/user-settings/${user.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token.value}`,
        },
        body: JSON.stringify(user),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to update user");
    }

    const data = await response.json();
    router.push("/");
  } catch (error) {
    console.error("Error updating user:", error.message);
  }
}

export async function handleRegisterUser(
  e,
  isEmailValid,
  isPasswordValid,
  password,
  confirmPassword,
  name,
  surname,
  setPassword,
  email,
  setName,
  setSurname,
  setEmail,
  router
) {
  e.preventDefault();

  if (isEmailValid && isPasswordValid && password === confirmPassword && name) {
    const userData = {
      email,
      password,
      name,
      ...(surname ? { surname } : ""),
    };

    fetch("http://localhost:8080/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("User registered:", data);
        router.push("/login");
        setName("");
        setSurname("");
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
}
