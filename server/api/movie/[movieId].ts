import prismadb from '@/lib/prismadb';

export default defineEventHandler((event) => {
    const movieId = getRouterParam(event, 'movieId')

    const movie = prismadb.movie.findUnique({
        where: {
            id: movieId
        }
    })

    return movie;
})