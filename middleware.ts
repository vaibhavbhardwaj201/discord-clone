// this file is important to provide clear understanding of which routes are public and which routes needed to be secured!

import { authMiddleware } from "@clerk/nextjs";
 

export default authMiddleware({});
 
export const config = {
      matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
 