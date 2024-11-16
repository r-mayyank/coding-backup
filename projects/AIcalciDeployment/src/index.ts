// src/index.ts
export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);
    const { pathname } = url;

    // Serve frontend assets (static files from the build folder)
    if (pathname.startsWith('/static')) {
      return fetchStaticAsset(pathname);
    }

    // Handle API requests (pass them to your backend)
    if (pathname.startsWith('/api')) {
      return handleApiRequest(request);
    }

    // Default: Serve index.html for all other routes (for frontend app)
    return fetchStaticAsset('/index.html');
  }
};

// Fetch static assets from the build directory
async function fetchStaticAsset(pathname: string): Promise<Response> {
  try {
    // Using a placeholder URL to simulate fetching the frontend build files.
    const assetUrl = `https://your-cdn-url.com/${pathname}`;
    return await fetch(assetUrl);
  } catch (error) {
    return new Response('Asset not found', { status: 404 });
  }
}

// Handle API requests by forwarding to backend server (cacl-be)
async function handleApiRequest(request: Request): Promise<Response> {
  const backendUrl = 'https://your-backend-url.com';  // Replace with the actual backend URL
  const apiUrl = `${backendUrl}${new URL(request.url).pathname.replace('/api', '')}`;

  try {
    const apiResponse = await fetch(apiUrl, {
      method: request.method,
      headers: request.headers,
      body: request.body
    });
    return new Response(apiResponse.body, {
      status: apiResponse.status,
      headers: apiResponse.headers
    });
  } catch (error) {
    return new Response('API error', { status: 500 });
  }
}
