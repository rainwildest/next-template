import { NextApiRequest, NextApiResponse } from "next";
import prisma from "lib/prisma";

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<any> => {
  const kk = prisma.post
    .findUnique({
      where: { id: 1 }
    })
    .author();
  // console.log(kk.)
  kk.then(val => {
    console.log(val);
  });
  return res.end(JSON.stringify({ code: 2000, msg: null, data: null }));
};
