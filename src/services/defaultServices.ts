import api from './api';

export type IGenericResponse = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: any;
  status?: number;
};

export type GetDataParamsType = {
  [key: string]: any | undefined;
};

export async function getData<T = any>(
  url: string,
  data?: GetDataParamsType,
): Promise<T> {
  const mappedParams = data
    ? Object.keys(data).reduce((acc, key) => {
        if (data[key]) {
          acc[key] = data[key];
        }
        return acc;
      }, {})
    : undefined;

  try {
    const res = await api.get(url, { params: mappedParams });
    return res.data;
  } catch (erro) {
    throw new Error('Falha ao conectar com servidor.');
  }
}
