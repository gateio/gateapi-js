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
    root.GateApi.Ticker = factory(root.GateApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The Ticker model module.
   * @module model/Ticker
   * @version 4.6.0
   */

  /**
   * Constructs a new <code>Ticker</code>.
   * @alias module:model/Ticker
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>Ticker</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ticker} obj Optional instance to populate.
   * @return {module:model/Ticker} The populated <code>Ticker</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('currency_pair')) {
        obj['currency_pair'] = ApiClient.convertToType(data['currency_pair'], 'String');
      }
      if (data.hasOwnProperty('last')) {
        obj['last'] = ApiClient.convertToType(data['last'], 'String');
      }
      if (data.hasOwnProperty('lowest_ask')) {
        obj['lowest_ask'] = ApiClient.convertToType(data['lowest_ask'], 'String');
      }
      if (data.hasOwnProperty('highest_bid')) {
        obj['highest_bid'] = ApiClient.convertToType(data['highest_bid'], 'String');
      }
      if (data.hasOwnProperty('change_percentage')) {
        obj['change_percentage'] = ApiClient.convertToType(data['change_percentage'], 'String');
      }
      if (data.hasOwnProperty('base_volume')) {
        obj['base_volume'] = ApiClient.convertToType(data['base_volume'], 'String');
      }
      if (data.hasOwnProperty('quote_volume')) {
        obj['quote_volume'] = ApiClient.convertToType(data['quote_volume'], 'String');
      }
      if (data.hasOwnProperty('high_24h')) {
        obj['high_24h'] = ApiClient.convertToType(data['high_24h'], 'String');
      }
      if (data.hasOwnProperty('low_24h')) {
        obj['low_24h'] = ApiClient.convertToType(data['low_24h'], 'String');
      }
    }
    return obj;
  }

  /**
   * Currency pair
   * @member {String} currency_pair
   */
  exports.prototype['currency_pair'] = undefined;
  /**
   * Last trading price
   * @member {String} last
   */
  exports.prototype['last'] = undefined;
  /**
   * Lowest ask
   * @member {String} lowest_ask
   */
  exports.prototype['lowest_ask'] = undefined;
  /**
   * Highest bid
   * @member {String} highest_bid
   */
  exports.prototype['highest_bid'] = undefined;
  /**
   * Change percentage.
   * @member {String} change_percentage
   */
  exports.prototype['change_percentage'] = undefined;
  /**
   * Base currency trade volume
   * @member {String} base_volume
   */
  exports.prototype['base_volume'] = undefined;
  /**
   * Quote currency trade volume
   * @member {String} quote_volume
   */
  exports.prototype['quote_volume'] = undefined;
  /**
   * Highest price in 24h
   * @member {String} high_24h
   */
  exports.prototype['high_24h'] = undefined;
  /**
   * Lowest price in 24h
   * @member {String} low_24h
   */
  exports.prototype['low_24h'] = undefined;



  return exports;
}));


