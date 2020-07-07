/**
 * Gate API v4
 * APIv4 provides spot, margin and futures trading operations. There are public APIs to retrieve the real-time market statistics, and private APIs which needs authentication to trade on user's behalf.
 *
 * Contact: support@mail.gate.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 3.3.4
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.GateApi) {
      root.GateApi = {};
    }
    root.GateApi.GateErrorResponse = factory(root.GateApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The GateErrorResponse model module.
   * @module model/GateErrorResponse
   */

  /**
   * Constructs a new <code>GateErrorResponse</code>.
   * error response body format when status code is non-2xx
   * @alias module:model/GateErrorResponse
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>GateErrorResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GateErrorResponse} obj Optional instance to populate.
   * @return {module:model/GateErrorResponse} The populated <code>GateErrorResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('label')) {
        obj['label'] = ApiClient.convertToType(data['label'], 'String');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
    }
    return obj;
  }

  /**
   * Error label
   * @member {String} label
   */
  exports.prototype['label'] = undefined;
  /**
   * Detailed error message
   * @member {String} message
   */
  exports.prototype['message'] = undefined;



  return exports;
}));


