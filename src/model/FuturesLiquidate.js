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
    root.GateApi.FuturesLiquidate = factory(root.GateApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The FuturesLiquidate model module.
   * @module model/FuturesLiquidate
   */

  /**
   * Constructs a new <code>FuturesLiquidate</code>.
   * @alias module:model/FuturesLiquidate
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>FuturesLiquidate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FuturesLiquidate} obj Optional instance to populate.
   * @return {module:model/FuturesLiquidate} The populated <code>FuturesLiquidate</code> instance.
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
      if (data.hasOwnProperty('liq_price')) {
        obj['liq_price'] = ApiClient.convertToType(data['liq_price'], 'String');
      }
      if (data.hasOwnProperty('mark_price')) {
        obj['mark_price'] = ApiClient.convertToType(data['mark_price'], 'String');
      }
      if (data.hasOwnProperty('order_id')) {
        obj['order_id'] = ApiClient.convertToType(data['order_id'], 'Number');
      }
      if (data.hasOwnProperty('order_price')) {
        obj['order_price'] = ApiClient.convertToType(data['order_price'], 'String');
      }
      if (data.hasOwnProperty('fill_price')) {
        obj['fill_price'] = ApiClient.convertToType(data['fill_price'], 'String');
      }
      if (data.hasOwnProperty('left')) {
        obj['left'] = ApiClient.convertToType(data['left'], 'Number');
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
   * Position leverage. Not returned in public endpoints.
   * @member {String} leverage
   */
  exports.prototype['leverage'] = undefined;
  /**
   * Position size
   * @member {Number} size
   */
  exports.prototype['size'] = undefined;
  /**
   * Position margin. Not returned in public endpoints.
   * @member {String} margin
   */
  exports.prototype['margin'] = undefined;
  /**
   * Average entry price. Not returned in public endpoints.
   * @member {String} entry_price
   */
  exports.prototype['entry_price'] = undefined;
  /**
   * Liquidation price. Not returned in public endpoints.
   * @member {String} liq_price
   */
  exports.prototype['liq_price'] = undefined;
  /**
   * Mark price. Not returned in public endpoints.
   * @member {String} mark_price
   */
  exports.prototype['mark_price'] = undefined;
  /**
   * Liquidation order ID. Not returned in public endpoints.
   * @member {Number} order_id
   */
  exports.prototype['order_id'] = undefined;
  /**
   * Liquidation order price
   * @member {String} order_price
   */
  exports.prototype['order_price'] = undefined;
  /**
   * Liquidation order average taker price
   * @member {String} fill_price
   */
  exports.prototype['fill_price'] = undefined;
  /**
   * Liquidation order maker size
   * @member {Number} left
   */
  exports.prototype['left'] = undefined;



  return exports;
}));
