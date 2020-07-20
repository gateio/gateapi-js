/**
 * Gate API v4
 * APIv4 provides spot, margin and futures trading operations. There are public APIs to retrieve the real-time market statistics, and private APIs which needs authentication to trade on user's behalf.
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
    root.GateApi.DeliverySettlement = factory(root.GateApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The DeliverySettlement model module.
   * @module model/DeliverySettlement
   */

  /**
   * Constructs a new <code>DeliverySettlement</code>.
   * @alias module:model/DeliverySettlement
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>DeliverySettlement</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeliverySettlement} obj Optional instance to populate.
   * @return {module:model/DeliverySettlement} The populated <code>DeliverySettlement</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('time')) {
        obj['time'] = ApiClient.convertToType(data['time'], 'Number');
      }
      if (data.hasOwnProperty('contract')) {
        obj['contract'] = ApiClient.convertToType(data['contract'], 'String');
      }
      if (data.hasOwnProperty('leverage')) {
        obj['leverage'] = ApiClient.convertToType(data['leverage'], 'String');
      }
      if (data.hasOwnProperty('size')) {
        obj['size'] = ApiClient.convertToType(data['size'], 'Number');
      }
      if (data.hasOwnProperty('margin')) {
        obj['margin'] = ApiClient.convertToType(data['margin'], 'String');
      }
      if (data.hasOwnProperty('entry_price')) {
        obj['entry_price'] = ApiClient.convertToType(data['entry_price'], 'String');
      }
      if (data.hasOwnProperty('settle_price')) {
        obj['settle_price'] = ApiClient.convertToType(data['settle_price'], 'String');
      }
      if (data.hasOwnProperty('profit')) {
        obj['profit'] = ApiClient.convertToType(data['profit'], 'String');
      }
      if (data.hasOwnProperty('fee')) {
        obj['fee'] = ApiClient.convertToType(data['fee'], 'String');
      }
    }
    return obj;
  }

  /**
   * Liquidation time
   * @member {Number} time
   */
  exports.prototype['time'] = undefined;
  /**
   * Futures contract
   * @member {String} contract
   */
  exports.prototype['contract'] = undefined;
  /**
   * Position leverage
   * @member {String} leverage
   */
  exports.prototype['leverage'] = undefined;
  /**
   * Position size
   * @member {Number} size
   */
  exports.prototype['size'] = undefined;
  /**
   * Position margin
   * @member {String} margin
   */
  exports.prototype['margin'] = undefined;
  /**
   * Average entry price
   * @member {String} entry_price
   */
  exports.prototype['entry_price'] = undefined;
  /**
   * Settled price
   * @member {String} settle_price
   */
  exports.prototype['settle_price'] = undefined;
  /**
   * Profit
   * @member {String} profit
   */
  exports.prototype['profit'] = undefined;
  /**
   * Fee deducted
   * @member {String} fee
   */
  exports.prototype['fee'] = undefined;



  return exports;
}));

