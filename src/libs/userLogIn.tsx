export default async function userLogIn(
  userEmail: string,
  userPassword: string
) {
  let timeout = 5000;
  const response = await fetch(
    "https://sw-dev-frontend-asg-backend1.vercel.app:443/api/v1/auth/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: userEmail,
        password: userPassword,
      }),
    }
  );
  if (!response.ok) {
    throw new Error("Failed to Login");
  }
  return await response.json();
}
