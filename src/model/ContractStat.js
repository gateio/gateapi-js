/**
 * Gate API v4
 * Welcome to Gate.io API  APIv4 provides spot, margin and futures trading operations. There are public APIs to retrieve the real-time market statistics, and private APIs which needs authentication to trade on user's behalf.
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
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
    root.GateApi.ContractStat = factory(root.GateApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The ContractStat model module.
   * @module model/ContractStat
   */

  /**
   * Constructs a new <code>ContractStat</code>.
   * @alias module:model/ContractStat
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>ContractStat</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ContractStat} obj Optional instance to populate.
   * @return {module:model/ContractStat} The populated <code>ContractStat</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('time')) {
        obj['time'] = ApiClient.convertToType(data['time'], 'Number');
      }
      if (data.hasOwnProperty('lsr_taker')) {
        obj['lsr_taker'] = ApiClient.convertToType(data['lsr_taker'], 'Number');
      }
      if (data.hasOwnProperty('lsr_account')) {
        obj['lsr_account'] = ApiClient.convertToType(data['lsr_account'], 'Number');
      }
      if (data.hasOwnProperty('long_liq_size')) {
        obj['long_liq_size'] = ApiClient.convertToType(data['long_liq_size'], 'Number');
      }
      if (data.hasOwnProperty('long_liq_amount')) {
        obj['long_liq_amount'] = ApiClient.convertToType(data['long_liq_amount'], 'Number');
      }
      if (data.hasOwnProperty('long_liq_usd')) {
        obj['long_liq_usd'] = ApiClient.convertToType(data['long_liq_usd'], 'Number');
      }
      if (data.hasOwnProperty('short_liq_size')) {
        obj['short_liq_size'] = ApiClient.convertToType(data['short_liq_size'], 'Number');
      }
      if (data.hasOwnProperty('short_liq_amount')) {
        obj['short_liq_amount'] = ApiClient.convertToType(data['short_liq_amount'], 'Number');
      }
      if (data.hasOwnProperty('short_liq_usd')) {
        obj['short_liq_usd'] = ApiClient.convertToType(data['short_liq_usd'], 'Number');
      }
      if (data.hasOwnProperty('open_interest')) {
        obj['open_interest'] = ApiClient.convertToType(data['open_interest'], 'Number');
      }
      if (data.hasOwnProperty('open_interest_usd')) {
        obj['open_interest_usd'] = ApiClient.convertToType(data['open_interest_usd'], 'Number');
      }
      if (data.hasOwnProperty('top_lsr_account')) {
        obj['top_lsr_account'] = ApiClient.convertToType(data['top_lsr_account'], 'Number');
      }
      if (data.hasOwnProperty('top_lsr_size')) {
        obj['top_lsr_size'] = ApiClient.convertToType(data['top_lsr_size'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Stat timestamp
   * @member {Number} time
   */
  exports.prototype['time'] = undefined;
  /**
   * Long/short account number ratio
   * @member {Number} lsr_taker
   */
  exports.prototype['lsr_taker'] = undefined;
  /**
   * Long/short taker size ratio
   * @member {Number} lsr_account
   */
  exports.prototype['lsr_account'] = undefined;
  /**
   * Long liquidation size
   * @member {Number} long_liq_size
   */
  exports.prototype['long_liq_size'] = undefined;
  /**
   * Long liquidation amount(base currency)
   * @member {Number} long_liq_amount
   */
  exports.prototype['long_liq_amount'] = undefined;
  /**
   * Long liquidation volume(quote currency)
   * @member {Number} long_liq_usd
   */
  exports.prototype['long_liq_usd'] = undefined;
  /**
   * Short liquidation size
   * @member {Number} short_liq_size
   */
  exports.prototype['short_liq_size'] = undefined;
  /**
   * Short liquidation amount(base currency)
   * @member {Number} short_liq_amount
   */
  exports.prototype['short_liq_amount'] = undefined;
  /**
   * Short liquidation volume(quote currency)
   * @member {Number} short_liq_usd
   */
  exports.prototype['short_liq_usd'] = undefined;
  /**
   * Open interest size
   * @member {Number} open_interest
   */
  exports.prototype['open_interest'] = undefined;
  /**
   * Open interest volume(quote currency)
   * @member {Number} open_interest_usd
   */
  exports.prototype['open_interest_usd'] = undefined;
  /**
   * Top trader long/short account ratio
   * @member {Number} top_lsr_account
   */
  exports.prototype['top_lsr_account'] = undefined;
  /**
   * Top trader long/short position ratio
   * @member {Number} top_lsr_size
   */
  exports.prototype['top_lsr_size'] = undefined;



  return exports;
}));

