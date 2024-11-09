import NextAuth from 'next-auth';
import MicrosoftEntraIDProfile from 'next-auth/providers/microsoft-entra-id';

export const authOptions = {
    providers: [
        MicrosoftEntraIDProfile({
            clientId: process.env.AUTH_MICROSOFT_ENTRA_ID_ID,
            clientSecret: process.env.AUTH_MICROSOFT_ENTRA_ID_SECRET,
            issuer: `https://login.microsoftonline.com/${process.env.AUTH_MICROSOFT_TENANT_ID}/v2.0`,
            // authorizationUrl: `https://login.microsoftonline.com/${process.env.AZURE_AD_TENANT_ID}/oauth2/v2.0/authorize`,
            // tokenUrl: `https://login.microsoftonline.com/${process.env.AUTH_MICROSOFT_TENANT_ID}/oauth2/v2.0/token`,
            // scope: 'openid profile email',
        }),
    ],
    session: {
        maxAge: 60 * 60 * 24 * 90,
    },
}


export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);
