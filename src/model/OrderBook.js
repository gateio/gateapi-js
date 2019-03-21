/**
 * Gate API v4
 * APIv4 provides spot, margin and futures trading operations. There are public APIs to retrieve the real-time market statistics, and private APIs which needs authentication to trade on user's behalf.
 *
 * OpenAPI spec version: 4.6.0
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
    root.GateApi.OrderBook = factory(root.GateApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The OrderBook model module.
   * @module model/OrderBook
   * @version 4.6.0
   */

  /**
   * Constructs a new <code>OrderBook</code>.
   * @alias module:model/OrderBook
   * @class
   * @param asks {Array.<Array.<String>>} Asks order depth
   * @param bids {Array.<Array.<String>>} Bids order depth
   */
  var exports = function(asks, bids) {
    var _this = this;

    _this['asks'] = asks;
    _this['bids'] = bids;
  };

  /**
   * Constructs a <code>OrderBook</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrderBook} obj Optional instance to populate.
   * @return {module:model/OrderBook} The populated <code>OrderBook</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('asks')) {
        obj['asks'] = ApiClient.convertToType(data['asks'], [['String']]);
      }
      if (data.hasOwnProperty('bids')) {
        obj['bids'] = ApiClient.convertToType(data['bids'], [['String']]);
      }
    }
    return obj;
  }

  /**
   * Asks order depth
   * @member {Array.<Array.<String>>} asks
   */
  exports.prototype['asks'] = undefined;
  /**
   * Bids order depth
   * @member {Array.<Array.<String>>} bids
   */
  exports.prototype['bids'] = undefined;



  return exports;
}));


