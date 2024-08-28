import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  // Add additional options here like pages, callbacks, etc.
});

export const { GET, POST } = handlers;
