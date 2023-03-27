import bcrypt from 'bcrypt'
import NextAuth from 'next-auth/next'
import { CredentialsProvider } from 'next-auth/providers'
import { PrismaAdapter } from '@next-auth/prisma-adapter'

import prisma from '@prisma/client'



export default NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: { label: 'email'  }
            }
        })
    ]
})






