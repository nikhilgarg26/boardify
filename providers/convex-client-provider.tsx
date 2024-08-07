"use client"

import { ClerkProvider, SignInButton, useAuth, UserButton } from '@clerk/nextjs'
import { ConvexProviderWithClerk } from 'convex/react-clerk'
import { AuthLoading, Authenticated, ConvexReactClient, Unauthenticated } from "convex/react";
import { Loading } from '@/components/auth/loading';

interface ConvexClientProviderProps {
    children: React.ReactNode;
};

const convexURL = process.env.NEXT_PUBLIC_CONVEX_URL!;
const clerkURL = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

const convex = new ConvexReactClient(convexURL);

export const ConvexClientProvider = ({ children, }: ConvexClientProviderProps) => {
    return (
        <ClerkProvider publishableKey={clerkURL}>
            <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
                    <Unauthenticated>
                        <SignInButton />
                    </Unauthenticated>
                    <AuthLoading>
                        <Loading></Loading>
                    </AuthLoading>
                    <Authenticated>
                        {children}
                    </Authenticated> 
            </ConvexProviderWithClerk>
        </ClerkProvider>
    )
}

