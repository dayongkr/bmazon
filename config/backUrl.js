const backUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://dayongbz.xyz/'
    : 'http://localhost';

export default backUrl;
