'use client'

import {useTranslation} from 'react-i18next';
import {ReactElement, useEffect} from 'react';
import {useRouter} from 'next/navigation';
import {configureAmplify} from '@/app/utils/amplifyConfig';
import {Authenticator, useAuthenticator} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import Layout from "@/app/components/Layout";
import Link from "next/link";
import {fetchFromApi} from '@/app/utils/api';

export const dynamic = 'force-dynamic';

function AuthenticatorWrapper({children}: { children: React.ReactNode }) {
    const router = useRouter();
    const {authStatus} = useAuthenticator((context) => [context.authStatus]);

    useEffect(() => {
        // Amplifyの設定をコンポーネント内で行う
        configureAmplify('user');
    }, []);

    useEffect(() => {
        if (authStatus === 'authenticated') {
            fetchFromApi('/users', 'POST');
            router.push('/users/channels');
        }
    }, [authStatus, router]);

    return <>{children}</>;
}

export default function UserLoginPage(): ReactElement {
    const {t} = useTranslation();

    return (
        <Layout>
            <div className="w-full space-y-8 px-4 py-6 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        {t('top.userLogin')}
                    </h2>
                    <p className="text-sm text-center text-gray-600 mt-2">
                        <Link href="/companies/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                            {t('top.companyLogin')}
                        </Link>
                    </p>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full">
                    <AuthenticatorWrapper>
                        <Authenticator
                            hideSignUp={true}
                            components={{
                                SignIn: {
                                    Header() {
                                        return null;
                                    },
                                },
                            }}
                        />
                    </AuthenticatorWrapper>
                </div>
            </div>
        </Layout>
    );
}