import { NextRequest, NextResponse } from 'next/server';

console.log('MAINTENANCE_MODE:', process.env.MAINTENANCE_MODE);

export function middleware(req: NextRequest) {
    const maintenance = process.env.MAINTENANCE_MODE === 'true';

    // Permitir acceso normal si no está en mantenimiento
    if (!maintenance) return NextResponse.next();

    const { pathname } = req.nextUrl;

    // Permitir acceso a la página de mantenimiento y archivos estáticos
    const allowed =
        pathname.startsWith('/maintenance') ||
        pathname.startsWith('/_next') ||
        pathname.startsWith('/static') ||
        pathname.startsWith('/favicon.ico') ||
        pathname.match(/\.(png|jpg|jpeg|gif|svg|webp|ico|css|js|woff2?|ttf|eot)$/);

    if (allowed) return NextResponse.next();

    // Redirigir a /maintenance si no está permitido
    const url = req.nextUrl.clone();
    url.pathname = '/maintenance';
    return NextResponse.redirect(url);
}

// Solo intercepta rutas de páginas, no assets ni APIs ni Next internals
export const config = {
    matcher: [
        '/((?!_next|static|favicon.ico|maintenance|.*\\.(?:png|jpg|jpeg|gif|svg|webp|ico|css|js|woff2?|ttf|eot)$).*)',
    ],
};