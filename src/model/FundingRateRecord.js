/**
 * Gate API v4
 * APIv4 futures provides all sorts of futures trading operations. There are public APIs to retrieve the real-time market statistics, and private APIs which needs authentication to trade on user's behalf.
 *
 * OpenAPI spec version: 1.1.0
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
    root.GateApi.FundingRateRecord = factory(root.GateApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The FundingRateRecord model module.
   * @module model/FundingRateRecord
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>FundingRateRecord</code>.
   * @alias module:model/FundingRateRecord
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>FundingRateRecord</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FundingRateRecord} obj Optional instance to populate.
   * @return {module:model/FundingRateRecord} The populated <code>FundingRateRecord</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('t')) {
        obj['t'] = ApiClient.convertToType(data['t'], 'Number');
      }
      if (data.hasOwnProperty('r')) {
        obj['r'] = ApiClient.convertToType(data['r'], 'String');
      }
    }
    return obj;
  }

  /**
   * Unix timestamp in seconds
   * @member {Number} t
   */
  exports.prototype['t'] = undefined;
  /**
   * Funding rate
   * @member {String} r
   */
  exports.prototype['r'] = undefined;



  return exports;
}));


