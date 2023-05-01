/**
 * Next.js API route support: https://nextjs.org/docs/api-routes/introduction
 * @param req {import('next').NextApiRequest}
 * @param res {import('next').NextApiResponse}
 */

//////------GET------///////

export default async function handler(req, res) {
    if (req.method === "GET") {
      try {
        const response = await fetch(
          "https://tqxrssraxgpssjpdurca.supabase.co",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              apikey: process.env.SUPABASE_KEY,
            },
          }
        );
  
        if (!response.ok) {
          throw new Error("Error fetching data");
        }
  
        const data = await response.json();
        return res.status(200).json({ data });
      } catch (error) {
        console.error("Error fetching data:", error.message);
        return res.status(500).json({ error: "Error fetching data" });
      }
    } else {
      return res.status(405).json({ error: "Method not allowed" });
    }
  }