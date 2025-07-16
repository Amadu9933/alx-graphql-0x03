import React, { useState } from 'react';

const ErrorProneComponent: React.FC = () => {
    const [shouldThrowError, setShouldThrowError] = useState(false);

    if (shouldThrowError) {
        throw new Error('This is a test error!');
    }

    return (
        <div className="p-6 bg-red-100 border border-red-300 rounded-lg max-w-md mx-auto mt-10">
            <h2 className="text-xl font-bold text-red-800 mb-4">Error Prone Component</h2>
            <p className="text-red-700 mb-4">
                This component can throw an error to test the ErrorBoundary functionality.
            </p>
            <button
                onClick={() => setShouldThrowError(true)}
                className="px-4 py-2 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition-colors"
            >
                Trigger Error
            </button>
        </div>
    );
};

export default ErrorProneComponent;