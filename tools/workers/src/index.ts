const ALLOW_ORIGIN = [
  'https://affine.pro',
  'https://app.affine.pro',
  'https://insider.affine.pro',
  'https://affine.fail',
  'http://313.co.kr',
  'http://313.co.kr:3010',
  'http://www.313.co.kr:3010',
  'https://313.co.kr',
  'http://a-rms.net',
  'http://a-rms.net:3010',
  'http://www.a-rms.net:3010',
  'https://a-rms.net',
  'http://127.0.0.1:3010',
  'http://localhost:3010',
  'http://127.0.0.1:8080',
  'http://localhost:8080',
];

function isString(s: any): boolean {
  return typeof s === 'string' || s instanceof String;
}

function isOriginAllowed(
  origin: string,
  allowedOrigin: string | RegExp | Array<string | RegExp>
): boolean {
  if (Array.isArray(allowedOrigin)) {
    for (const allowed of allowedOrigin) {
      if (isOriginAllowed(origin, allowed)) {
        return true;
      }
    }
    return false;
  } else if (isString(allowedOrigin)) {
    return origin === allowedOrigin;
  } else if (allowedOrigin instanceof RegExp) {
    return allowedOrigin.test(origin);
  } else {
    return !!allowedOrigin;
  }
}

async function proxyImage(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const imageURL = url.searchParams.get('url');

  if (!imageURL) {
    return new Response('Missing "url" parameter', { status: 400 });
  }

  const imageRequest = new Request(imageURL, {
    method: 'GET',
    headers: request.headers,
  });

  const response = await fetch(imageRequest);
  const modifiedResponse = new Response(response.body);

  modifiedResponse.headers.set(
    'Access-Control-Allow-Origin',
    request.headers.get('Origin') ?? 'null'
  );
  modifiedResponse.headers.set('Vary', 'Origin');
  modifiedResponse.headers.set('Access-Control-Allow-Methods', 'GET');

  return modifiedResponse;
}

const handler = {
  async fetch(request: Request) {
    if (!isOriginAllowed(request.headers.get('Origin') ?? '', ALLOW_ORIGIN)) {
      return new Response('unauthorized', { status: 401 });
    }

    const url = new URL(request.url);
    if (url.pathname.startsWith('/proxy/image')) {
      return await proxyImage(request);
    }

    return new Response('not found', { status: 404 });
  },
};

export default handler;
