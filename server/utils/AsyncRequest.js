const {utils, getLogger} = require("xmcommon");
const log = getLogger(__filename);
const request = require("request");
class AsyncRequest {
  /**
   * 同步请求get URL
   * @param {string} paramURL 请求的URL
   * @param {*} paramOptions 等同于request的options, 请参考其具体使用方法
   * @return {{error:*, response:*, body:*}}
   */
  static async get(paramURL, paramOptions) {
    let [error, response, body] = await utils.WaitClassFunctionEx(request, "get", paramURL, paramOptions);
    return {error, response, body};
  }
  /**
   * 同步请求post URL
   * @param {string} paramURL 请求的URL
   * @param {*} paramOptions 等同于request的options, 请参考其具体使用方法
   * @return {{error:*, response:*, body:*}}
   */
  static async post(paramURL, paramOptions) {
    let [error, response, body] = await utils.WaitClassFunctionEx(request, "post", paramURL, paramOptions);
    return {error, response, body};
  }

  /**
   * 同步请求del URL
   * @param {string} paramURL 请求的URL
   * @param {*} paramOptions 等同于request的options, 请参考其具体使用方法
   * @return {{error:*, response:*, body:*}}
   */
  static async del(paramURL, paramOptions) {
    let [error, response, body] = await utils.WaitClassFunctionEx(request, "del", paramURL, paramOptions);
    return {error, response, body};
  }

  /**
   * 同步请求del URL
   * @param {string} paramURL 请求的URL
   * @param {*} paramOptions 等同于request的options, 请参考其具体使用方法
   * @return {{error:*, response:*, body:*}}
   */
  static async put(paramURL, paramOptions) {
    let [error, response, body] = await utils.WaitClassFunctionEx(request, "put", paramURL, paramOptions);
    return {error, response, body};
  }
};



exports.async_request = AsyncRequest;
