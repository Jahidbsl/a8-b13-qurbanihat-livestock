import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    /** The base URL of the server (optional if you're using the same domain) */
    baseURL: "https://a8-b13-qurbanihat-livestock.vercel.app"
})

export const { signIn, signUp, useSession } = createAuthClient()