
export const fetcher = async (url: string, options?: RequestInit) => {
    const res = await fetch(`/api/${url}`, options);
    if (!res.ok) {
        throw new Error('An error occurred while fetching the data.');
    }
    return res.json();
};

export const formDataFetcher = async (url: string, options?: RequestInit) => {
    // For formData, we usually don't set Content-Type header as the browser sets it with boundary
    const res = await fetch(`/api/${url}`, options);
    if (!res.ok) {
        throw new Error('An error occurred while fetching the data.');
    }
    return res.json();
}
