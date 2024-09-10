import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  secret: process.env.SECRET,
  pages: {
    signIn: "/logIn",
    signOut: "/signOut",
  },
  callbacks: {
    async session({ session, user, token }) {
      session.user.username = session.user.name
        .split(" ")
        .join("")
        .toLowerCase();
      session.user.uid = token.sub;

      return session;
    },
  },

  // Add additional options here like pages, callbacks, etc.
});

export const { GET, POST } = handlers;
