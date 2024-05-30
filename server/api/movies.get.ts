import prismadb from '@/lib/prismadb';

export default defineEventHandler(async (event) => {
    try {
        const movies = await prismadb.movie.findMany();
        return movies;
    } catch (error) {
        return;
    }
})
