"use client"

const ErrorBoundary = ({
    error,
    reset
}: {
    error: Error,
    reset: () => void;
}) => {
    return (
        <>
            <p>
                {error.message}
                <button onClick={reset}>Try again</button>
            </p>
        </>
    )
}

export default ErrorBoundary;