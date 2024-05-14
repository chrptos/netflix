import bcrypt from 'bcrypt';
import prismadb from '@/lib/prismadb';

export default defineEventHandler(async (event) => {
    try {
        const { email, name, password } = await readBody(event);

        const existingUser = await prismadb.user.findUnique({
            where: {
                email,
            }
        });

        if (existingUser) {
            throw createError({
                statusCode: 422,
                statusMessage: 'Email taken',
            })
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const user = await prismadb.user.create({
            data: {
                email,
                name,
                hashedPassword,
                image: '',
                emailVerified: new Date(),
            }
        })

        return user;
    } catch (error) {
        console.log(error);
        return
    }
})
