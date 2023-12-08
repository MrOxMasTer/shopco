import ky from 'ky';

const url = process.env.API_URL;

export const api = ky.create({
  prefixUrl: url,
});
