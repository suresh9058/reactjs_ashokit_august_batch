import {useState,lazy, Suspense} from 'react';
// import LazyImage from './LazyImage';

const LazyImage = lazy(()=>import('./LazyImage'));

function LazyLoadingComponent() {
    const [showImage, setShowImage] = useState(false);
    // use the material UI loading component 
    const renderLoading = ()=> <div>Loading...</div>;

    return (
        <>
        <button onClick={()=>setShowImage(true)}>Add image</button>
        {showImage && 
            (<Suspense fallback={renderLoading()}>
                <LazyImage></LazyImage>
            </Suspense>)}
        </>
    )
}

export default LazyLoadingComponent;