export const apiRequest = async (
  endpoint: string,
  method: string = 'GET',
  body: object = {},
  // @ts-ignore
): Promise<{ response: Response; status: number }> => {
  const requestOptions: RequestInit = {
    method,
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  if (method !== 'GET' && method !== 'HEAD') {
    requestOptions.body = JSON.stringify(body);
  }

  await fetch(`https://projectnexus.cc/api/${endpoint}`, requestOptions).then((res) => {
    const status = res.status;
    return { res, status };
  });
};

export const apiRequestWithToken = async (
  endpoint: string,
  token: string,
  method: string = 'GET',
  body: object = {},
  // @ts-ignore
): Promise<{ response: Response; status: number }> => {
  const requestOptions: RequestInit = {
    method,
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: token,
    },
  };

  if (method !== 'GET' && method !== 'HEAD') {
    requestOptions.body = JSON.stringify(body);
  }

  fetch(`https://projectnexus.cc/api/${endpoint}`, requestOptions).then((res) => {
    const status = res.status;
    return { res, status };
  });
};
