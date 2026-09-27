export default async function handler(req, res) {
  if (req.method === "GET") {
    // get users from your database
    return res.status(200).json([]);
  }

  if (req.method === "POST") {
    const user = req.body;

    // save user to database

    return res.status(201).json(user);
  }

  return res.status(405).json({
    message: "Method not allowed",
  });
}