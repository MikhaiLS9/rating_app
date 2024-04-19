// next.config.mjs
import withSvgr from 'next-svgr';

export default withSvgr({
  webpack(config, options) {
    // ... другие настройки webpack если они у вас есть
    return config;
  },
});
