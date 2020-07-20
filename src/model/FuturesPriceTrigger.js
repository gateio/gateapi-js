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
    root.GateApi.FuturesPriceTrigger = factory(root.GateApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The FuturesPriceTrigger model module.
   * @module model/FuturesPriceTrigger
   */

  /**
   * Constructs a new <code>FuturesPriceTrigger</code>.
   * @alias module:model/FuturesPriceTrigger
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>FuturesPriceTrigger</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FuturesPriceTrigger} obj Optional instance to populate.
   * @return {module:model/FuturesPriceTrigger} The populated <code>FuturesPriceTrigger</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('strategy_type')) {
        obj['strategy_type'] = ApiClient.convertToType(data['strategy_type'], 'Number');
      }
      if (data.hasOwnProperty('price_type')) {
        obj['price_type'] = ApiClient.convertToType(data['price_type'], 'Number');
      }
      if (data.hasOwnProperty('price')) {
        obj['price'] = ApiClient.convertToType(data['price'], 'String');
      }
      if (data.hasOwnProperty('rule')) {
        obj['rule'] = ApiClient.convertToType(data['rule'], 'Number');
      }
      if (data.hasOwnProperty('expiration')) {
        obj['expiration'] = ApiClient.convertToType(data['expiration'], 'Number');
      }
    }
    return obj;
  }

  /**
   * How the order will be triggered   - `0`: by price, which means order will be triggered on price condition satisfied  - `1`: by price gap, which means order will be triggered on gap of recent two prices of specified `price_type` satisfied.  Only `0` is supported currently
   * @member {module:model/FuturesPriceTrigger.StrategyTypeEnum} strategy_type
   */
  exports.prototype['strategy_type'] = undefined;
  /**
   * Price type. 0 - latest deal price, 1 - mark price, 2 - index price
   * @member {module:model/FuturesPriceTrigger.PriceTypeEnum} price_type
   */
  exports.prototype['price_type'] = undefined;
  /**
   * Value of price on price triggered, or price gap on price gap triggered
   * @member {String} price
   */
  exports.prototype['price'] = undefined;
  /**
   * Trigger condition type  - `1`: calculated price based on `strategy_type` and `price_type` >= `price` - `2`: calculated price based on `strategy_type` and `price_type` <= `price`
   * @member {module:model/FuturesPriceTrigger.RuleEnum} rule
   */
  exports.prototype['rule'] = undefined;
  /**
   * How many seconds will the order wait for the condition being triggered. Order will be cancelled on timed out
   * @member {Number} expiration
   */
  exports.prototype['expiration'] = undefined;


  /**
   * Allowed values for the <code>strategy_type</code> property.
   * @enum {Number}
   * @readonly
   */
  exports.StrategyTypeEnum = {
    /**
     * value: 0
     * @const
     */
    "0": 0,
    /**
     * value: 1
     * @const
     */
    "1": 1  };

  /**
   * Allowed values for the <code>price_type</code> property.
   * @enum {Number}
   * @readonly
   */
  exports.PriceTypeEnum = {
    /**
     * value: 0
     * @const
     */
    "0": 0,
    /**
     * value: 1
     * @const
     */
    "1": 1,
    /**
     * value: 2
     * @const
     */
    "2": 2  };

  /**
   * Allowed values for the <code>rule</code> property.
   * @enum {Number}
   * @readonly
   */
  exports.RuleEnum = {
    /**
     * value: 1
     * @const
     */
    "1": 1,
    /**
     * value: 2
     * @const
     */
    "2": 2  };


  return exports;
}));

