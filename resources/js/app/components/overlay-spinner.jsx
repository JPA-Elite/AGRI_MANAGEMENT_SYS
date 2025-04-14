import Spinner from "./spinner";

export default function OverlaySpinner({ isLoading }) {
    if (!isLoading) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="flex flex-col items-center bg-white p-4 rounded-lg">
                <Spinner size="h-12 w-12" color="text-green-500" />
                <span className="mt-2 text-sm font-medium text-gray-700">Loading...</span>
            </div>
        </div>
    );
}
