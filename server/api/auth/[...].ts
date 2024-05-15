// file: ~/server/api/auth/[...].ts
import CredentialsProvider from 'next-auth/providers/credentials'
import { NuxtAuthHandler } from '#auth'
import { compare } from 'bcrypt';
import prismadb from '@/lib/prismadb';

export default NuxtAuthHandler({
  debug: process.env.NODE_ENV === 'development',
  providers: [
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
        console.log('------', credentials);
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
    signIn: '/auth/test',
  },
  jwt: {
    secret: process.env.NEXTAUTH_JWT_SECRET,
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
})
