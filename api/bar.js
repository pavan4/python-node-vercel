// import type { NextApiRequest, NextApiResponse } from "next";

// type ResponseData = {
//   message: string;
// };

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<ResponseData>
// ) {
//   res.status(200).json({ message: "Hello from from api Next.js!" });
// }


export default function handler(req, res) {
  res.status(200).json({ message: "Hello from from js Next.js!" });
}