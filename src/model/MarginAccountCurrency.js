/**
 * Gate API v4
 * APIv4 provides spot, margin and futures trading operations. There are public APIs to retrieve the real-time market statistics, and private APIs which needs authentication to trade on user's behalf.
 *
 * OpenAPI spec version: 4.7.2
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
    root.GateApi.MarginAccountCurrency = factory(root.GateApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The MarginAccountCurrency model module.
   * @module model/MarginAccountCurrency
   * @version 4.7.2
   */

  /**
   * Constructs a new <code>MarginAccountCurrency</code>.
   * Account currency detail
   * @alias module:model/MarginAccountCurrency
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>MarginAccountCurrency</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MarginAccountCurrency} obj Optional instance to populate.
   * @return {module:model/MarginAccountCurrency} The populated <code>MarginAccountCurrency</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('currency')) {
        obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
      }
      if (data.hasOwnProperty('available')) {
        obj['available'] = ApiClient.convertToType(data['available'], 'String');
      }
      if (data.hasOwnProperty('locked')) {
        obj['locked'] = ApiClient.convertToType(data['locked'], 'String');
      }
      if (data.hasOwnProperty('borrowed')) {
        obj['borrowed'] = ApiClient.convertToType(data['borrowed'], 'String');
      }
    }
    return obj;
  }

  /**
   * Currency name
   * @member {String} currency
   */
  exports.prototype['currency'] = undefined;
  /**
   * Amount suitable for margin trading.
   * @member {String} available
   */
  exports.prototype['available'] = undefined;
  /**
   * Locked amount, used in margin trading
   * @member {String} locked
   */
  exports.prototype['locked'] = undefined;
  /**
   * Borrowed amount
   * @member {String} borrowed
   */
  exports.prototype['borrowed'] = undefined;



  return exports;
}));


