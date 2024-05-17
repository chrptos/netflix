export default defineNuxtRouteMiddleware((to, from) => {
    const { status } = useAuth();
    if (status.value === 'unauthenticated') {
        const path = '/auth'
        return { path }
    }
});