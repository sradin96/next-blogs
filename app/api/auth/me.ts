import { NextApiRequest, NextApiResponse } from 'next';
import { withApiAuthRequired, getSession, Session } from '@auth0/nextjs-auth0';

export default withApiAuthRequired(async function me(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session: Session | null | undefined = await getSession(req, res);

  if (session?.user) {
    res.json(session.user);
  } else {
    res.status(401).json({ error: 'Not authenticated' });
  }
});
