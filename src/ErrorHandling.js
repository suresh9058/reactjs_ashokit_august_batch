import {ErrorBoundary} from 'react-error-boundary';

function Header() {
    const user=null;
    // const user = {};
    return <h1>Header Component {user.name}</h1>
    // return <h1>Header Component {user?.name}</h1>
}

function MainComponent() {
    return <h1>MainComponent </h1>
}

function SideBar() {
    return <h1>SideBar Component </h1>
}

function Footer() {
    return <h1>Footer Component </h1>
}

function ErrorFallBackComponent() {
    return <p>Oops Something went wrong.</p>
}

function ErrorHandling() {
    return (
        <>
            <ErrorBoundary FallbackComponent={ErrorFallBackComponent}>
                <Header />
            </ErrorBoundary>    
                <MainComponent />
            <ErrorBoundary FallbackComponent={ErrorFallBackComponent}>
                <SideBar />
            </ErrorBoundary>
                <Footer />
            
        </>
    )
}

export default ErrorHandling;