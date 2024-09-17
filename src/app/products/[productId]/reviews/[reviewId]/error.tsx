"use client"

const ErrorBoundary = ({error}: {error: Error}) => {
    return (
        <>
            <p>{error.message}</p>
        </>
    )
}

export default ErrorBoundary;