const BASE_URL = 'https://magicapinew-production.up.railway.app/api/';

const fetcher = async (url: string, options?: RequestInit) => {
  const response = await fetch(BASE_URL + url, options);
  return response.json();
};
const updater = async (url: string, body?: unknown) => {
  const response = await fetch(BASE_URL + url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    throw new Error(`Error ${response.status}: ${response.statusText}`);
  }

  return response.json();
};

const formDataFetcher = async (
  endpoint: string,
  options: Omit<RequestInit, 'body'> & { body: FormData }
) => {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'An error occurred during the operation.');
  }
  return response.json();
};

export { fetcher, updater, formDataFetcher };

export default fetcher;
