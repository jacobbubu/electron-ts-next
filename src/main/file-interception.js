// Native
import * as path from 'path';
// Packages
import { protocol } from 'electron';
const MainFolder = __dirname;
const RendererFolder = path.resolve(MainFolder, '../renderer');
const NextFolder = path.join(RendererFolder, '_next') + path.sep;
const ErrorFolder = path.join(RendererFolder, '_error') + path.sep;
const isWindows = process.platform === 'win32';
function resolveURL(url) {
    return url.replace(/^\/_next\//, NextFolder).replace(/^\/_error\//, ErrorFolder);
}
const intercept = () => {
    protocol.interceptHttpProtocol('http', (request, callback) => {
        const { method, url } = request;
        callback({ method, url });
    });
    protocol.interceptFileProtocol('file', (request, callback) => {
        let url = request.url.substr(isWindows ? 8 : 7);
        url = resolveURL(url);
        if (isWindows) {
            url = url.replace(path.parse(url).root, '');
        }
        // Electron doesn't like anything in the path to be encoded,
        // so we need to undo that. This specifically allows for
        // Electron apps with spaces in their app names.
        url = decodeURIComponent(url);
        callback(url);
    });
};
export default intercept;
//# sourceMappingURL=file-interception.js.map