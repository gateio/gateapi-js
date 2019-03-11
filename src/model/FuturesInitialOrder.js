/**
 * Gate API v4
 * APIv4 provides spot, margin and futures trading operations. There are public APIs to retrieve the real-time market statistics, and private APIs which needs authentication to trade on user's behalf.
 *
 * OpenAPI spec version: 4.5.1
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
    root.GateApi.FuturesInitialOrder = factory(root.GateApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The FuturesInitialOrder model module.
   * @module model/FuturesInitialOrder
   * @version 4.5.1
   */

  /**
   * Constructs a new <code>FuturesInitialOrder</code>.
   * @alias module:model/FuturesInitialOrder
   * @class
   * @param contract {String} Futures contract
   * @param price {String} Order price. Set to 0 to use market price
   */
  var exports = function(contract, price) {
    var _this = this;

    _this['contract'] = contract;
    _this['price'] = price;
  };

  /**
   * Constructs a <code>FuturesInitialOrder</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FuturesInitialOrder} obj Optional instance to populate.
   * @return {module:model/FuturesInitialOrder} The populated <code>FuturesInitialOrder</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('contract')) {
        obj['contract'] = ApiClient.convertToType(data['contract'], 'String');
      }
      if (data.hasOwnProperty('size')) {
        obj['size'] = ApiClient.convertToType(data['size'], 'Number');
      }
      if (data.hasOwnProperty('price')) {
        obj['price'] = ApiClient.convertToType(data['price'], 'String');
      }
      if (data.hasOwnProperty('close')) {
        obj['close'] = ApiClient.convertToType(data['close'], 'Boolean');
      }
      if (data.hasOwnProperty('tif')) {
        obj['tif'] = ApiClient.convertToType(data['tif'], 'String');
      }
      if (data.hasOwnProperty('text')) {
        obj['text'] = ApiClient.convertToType(data['text'], 'String');
      }
      if (data.hasOwnProperty('reduce_only')) {
        obj['reduce_only'] = ApiClient.convertToType(data['reduce_only'], 'Boolean');
      }
      if (data.hasOwnProperty('is_reduce_only')) {
        obj['is_reduce_only'] = ApiClient.convertToType(data['is_reduce_only'], 'Boolean');
      }
      if (data.hasOwnProperty('is_close')) {
        obj['is_close'] = ApiClient.convertToType(data['is_close'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * Futures contract
   * @member {String} contract
   */
  exports.prototype['contract'] = undefined;
  /**
   * Order size. Positive size means to buy, while negative one means to sell. Set to 0 to close the position
   * @member {Number} size
   */
  exports.prototype['size'] = undefined;
  /**
   * Order price. Set to 0 to use market price
   * @member {String} price
   */
  exports.prototype['price'] = undefined;
  /**
   * Set to true if trying to close the position
   * @member {Boolean} close
   * @default false
   */
  exports.prototype['close'] = false;
  /**
   * Time in force. If using market price, only `ioc` is supported.  - gtc: GoodTillCancelled - ioc: ImmediateOrCancelled
   * @member {module:model/FuturesInitialOrder.TifEnum} tif
   * @default 'gtc'
   */
  exports.prototype['tif'] = 'gtc';
  /**
   * How the order is created. Possible values are: web, api and app
   * @member {module:model/FuturesInitialOrder.TextEnum} text
   */
  exports.prototype['text'] = undefined;
  /**
   * Set to true to create an post-only order
   * @member {Boolean} reduce_only
   * @default false
   */
  exports.prototype['reduce_only'] = false;
  /**
   * Is the order post-only
   * @member {Boolean} is_reduce_only
   */
  exports.prototype['is_reduce_only'] = undefined;
  /**
   * Is the order to close position
   * @member {Boolean} is_close
   */
  exports.prototype['is_close'] = undefined;


  /**
   * Allowed values for the <code>tif</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TifEnum = {
    /**
     * value: "gtc"
     * @const
     */
    "gtc": "gtc",
    /**
     * value: "ioc"
     * @const
     */
    "ioc": "ioc"  };

  /**
   * Allowed values for the <code>text</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TextEnum = {
    /**
     * value: "web"
     * @const
     */
    "web": "web",
    /**
     * value: "api"
     * @const
     */
    "api": "api",
    /**
     * value: "app"
     * @const
     */
    "app": "app"  };


  return exports;
}));

