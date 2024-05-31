import bcrypt from 'bcrypt';
import prismadb from '@/lib/prismadb';

export default defineEventHandler(async (event) => {
    try {
        const { movieId } = await readBody(event);

        const existingMovie = await prismadb.movie.findUnique({
            where: {
                id: movieId,
            }
        });

        if (existingMovie) {
            throw createError({
                statusCode: 422,
                statusMessage: 'Invalid movie id',
            })
        }

        const user = await prismadb.user.update({
            where: {
                email: 'test@gmail.com', // ''
            },
            data: {
                favoriteIds: {
                    push: movieId,
                }
            }
        })

        return user;
    } catch (error) {
        console.log(error);
        return
    }
})
