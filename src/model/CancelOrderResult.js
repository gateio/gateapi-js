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
    root.GateApi.CancelOrderResult = factory(root.GateApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The CancelOrderResult model module.
   * @module model/CancelOrderResult
   */

  /**
   * Constructs a new <code>CancelOrderResult</code>.
   * Order cancellation result
   * @alias module:model/CancelOrderResult
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>CancelOrderResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CancelOrderResult} obj Optional instance to populate.
   * @return {module:model/CancelOrderResult} The populated <code>CancelOrderResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('currency_pair')) {
        obj['currency_pair'] = ApiClient.convertToType(data['currency_pair'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('succeeded')) {
        obj['succeeded'] = ApiClient.convertToType(data['succeeded'], 'Boolean');
      }
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
   * Order currency pair
   * @member {String} currency_pair
   */
  exports.prototype['currency_pair'] = undefined;
  /**
   * Order ID
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Whether cancellation succeeded
   * @member {Boolean} succeeded
   */
  exports.prototype['succeeded'] = undefined;
  /**
   * Error label when failed to cancel the order; emtpy if succeeded
   * @member {String} label
   */
  exports.prototype['label'] = undefined;
  /**
   * Error message when failed to cancel the order; empty if succeeded
   * @member {String} message
   */
  exports.prototype['message'] = undefined;



  return exports;
}));


