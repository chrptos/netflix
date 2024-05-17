import prismadb from '@/lib/prismadb';

export default defineEventHandler(async (event) => {
    const { email } = await readBody(event);

    try {
        const currentUser = await prismadb.user.findUnique({
            where: {
                email,
            },
        });
        return { currentUser };
    } catch (error) {
        console.log(error);
    }
});
