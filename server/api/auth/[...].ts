// file: ~/server/api/auth/[...].ts
import CredentialsProvider from 'next-auth/providers/credentials'
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import { NuxtAuthHandler } from '#auth'
import { compare } from 'bcrypt';
import prismadb from '@/lib/prismadb';

const runtimeConfig = useRuntimeConfig()

export default NuxtAuthHandler({
  debug: process.env.NODE_ENV === 'development',
  providers: [
    GithubProvider({
      clientId: runtimeConfig.private.githubId,
      clientSecret: runtimeConfig.private.githubSecret,
    }),
    GoogleProvider({
      clientId: runtimeConfig.private.googleId,
      clientSecret: runtimeConfig.private.googleSecret,
    }),
    CredentialsProvider.default({
      name: 'Credentials',
      credentials: {
        email: {label: 'Email', type: 'text'},
        password: {label:'Password', type: 'password'},
      },
      async authorize (credentials: any) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Email and password required');
        }
        
        const user = await prismadb.user.findUnique({
          where: {
            email: credentials.email
          }
        })

        if (!user || !user.hashedPassword) {
          throw new Error('Email does not exist');
        }

        const isCorrectPassword = await compare(credentials.password, user.hashedPassword);

        if (!isCorrectPassword) {
          throw new Error('Incorrect password');
        }

        return user;
      }
    })
  ],
  pages: {
    signIn: '/auth',
  },
  jwt: {
    secret: process.env.NEXTAUTH_JWT_SECRET,
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
})
