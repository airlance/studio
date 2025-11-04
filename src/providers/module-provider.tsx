import { lazy, Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { ScreenLoader } from '../components/screen-loader';

const LazyIamModule = lazy(() => import('@/iam'));

export function ModuleProvider() {
    const location = useLocation();
    const path = location.pathname;

    const isIam = path.startsWith('/iam');

    if (isIam) {
        return (
            <Routes>
                <Route
                    path="/iam/*"
                    element={
                        <Suspense fallback={<ScreenLoader />}>
                            <LazyIamModule />
                        </Suspense>
                    }
                />
            </Routes>
        );
    }

    return (
        <Routes>
            <Route
                path="/*"
                element={
                <></>
                }
            />
        </Routes>
    );
}