export const apiRequest = async (
  endpoint: string,
  method: string = 'GET',
  body: object = {},
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

  const response = await fetch(`https://projectnexus.cc/api/${endpoint}`, requestOptions);

  const status = response.status;
  return { response, status };
};

export const apiRequestWithToken = async (
  endpoint: string,
  token: string,
  method: string = 'GET',
  body: object = {},
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

  const response = await fetch(`https://projectnexus.cc/api/${endpoint}`, requestOptions);

  const status = response.status;
  return { response, status };
};
