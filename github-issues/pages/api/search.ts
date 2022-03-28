import { NextApiRequest, NextApiResponse } from "next";
import { ISearchData } from "../interfaces/searchData";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const data: ISearchData = {
    name: "Linux",
    fullName: "torvalds/linux",
    description: "Linux kernel source tree",
    url: "https://github.com/torvalds/linux",
    stars: 129309,
    lastModify: "2022-03-28T08:32:47Z",
    lang: "C",
  };
  if (req.method === "GET") {
    res.status(200).json(data);
  } else {
  }
}
