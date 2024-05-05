import { Suspense, lazy } from 'react';

// Lazy load the AllBioData component
const LazyAllBioData = lazy(() => import('../../Components/AllBioData/AllBioData'));

const BiodatasPage = () => {
    return (
        <div className="pt-[7%]">
            <Suspense fallback={<div>Loading...</div>}>
                <LazyAllBioData />
            </Suspense>
        </div>
    );
};

export default BiodatasPage;
