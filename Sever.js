// API Route to Fetch All Submitted Forms (For HR)
app.get("/submissions", async (req, res) => {
  try {
    const submissions = await Form.find(); // Fetch all submissions
    res.status(200).json(submissions);
  } catch (error) {
    res.status(500).json({ message: "Error fetching submissions", error });
  }
});
