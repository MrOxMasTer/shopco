import ky from 'ky';

const url = process.env.API_URL;

export const instance = ky.create({
  prefixUrl: url,
});