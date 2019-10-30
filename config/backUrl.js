const backUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://dayongbz.xyz/'
    : 'https://localhost';

export default backUrl;
