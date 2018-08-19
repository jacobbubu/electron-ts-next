// Native
import { join } from 'path';
const isDev = process.env.NODE_ENV !== 'production';
const resolve = (pathname) => {
    if (isDev) {
        return pathname;
    }
    if (/\.(png|jpe?g|gif|svg)(\?.*)?$/.test(pathname)) {
        return join(`../${pathname}`);
    }
    return join(`../${pathname}/index.html`);
};
export { resolve };
//# sourceMappingURL=index.js.map