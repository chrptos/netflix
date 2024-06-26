import prismadb from '@/lib/prismadb';

export default defineEventHandler(async (event) => {
    try {
        const movieCount = await prismadb.movie.count();
        const randomIndex = Math.floor(Math.random() * movieCount);

        const randomMovies = await prismadb.movie.findMany({
            take: 1,
            skip: randomIndex,
        });
        console.log(randomMovies);
        return randomMovies[0];
    } catch (error) {
        console.log(error);
        return
    }
})
