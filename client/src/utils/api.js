// Helper function to interact with API
export const api = async (endpoint, method = 'GET', body = null) => {
    const response = await fetch(endpoint, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: body ? JSON.stringify(body) : null
    });
    return response.json();
  };
  