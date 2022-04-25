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
    root.GateApi.OptionsTicker = factory(root.GateApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The OptionsTicker model module.
   * @module model/OptionsTicker
   */

  /**
   * Constructs a new <code>OptionsTicker</code>.
   * Options contract detail
   * @alias module:model/OptionsTicker
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>OptionsTicker</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OptionsTicker} obj Optional instance to populate.
   * @return {module:model/OptionsTicker} The populated <code>OptionsTicker</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('last_price')) {
        obj['last_price'] = ApiClient.convertToType(data['last_price'], 'String');
      }
      if (data.hasOwnProperty('mark_price')) {
        obj['mark_price'] = ApiClient.convertToType(data['mark_price'], 'String');
      }
      if (data.hasOwnProperty('index_price')) {
        obj['index_price'] = ApiClient.convertToType(data['index_price'], 'String');
      }
      if (data.hasOwnProperty('ask1_size')) {
        obj['ask1_size'] = ApiClient.convertToType(data['ask1_size'], 'Number');
      }
      if (data.hasOwnProperty('ask1_price')) {
        obj['ask1_price'] = ApiClient.convertToType(data['ask1_price'], 'String');
      }
      if (data.hasOwnProperty('bid1_size')) {
        obj['bid1_size'] = ApiClient.convertToType(data['bid1_size'], 'Number');
      }
      if (data.hasOwnProperty('bid1_price')) {
        obj['bid1_price'] = ApiClient.convertToType(data['bid1_price'], 'String');
      }
      if (data.hasOwnProperty('position_size')) {
        obj['position_size'] = ApiClient.convertToType(data['position_size'], 'Number');
      }
      if (data.hasOwnProperty('mark_iv')) {
        obj['mark_iv'] = ApiClient.convertToType(data['mark_iv'], 'String');
      }
      if (data.hasOwnProperty('bid_iv')) {
        obj['bid_iv'] = ApiClient.convertToType(data['bid_iv'], 'String');
      }
      if (data.hasOwnProperty('ask_iv')) {
        obj['ask_iv'] = ApiClient.convertToType(data['ask_iv'], 'String');
      }
      if (data.hasOwnProperty('leverage')) {
        obj['leverage'] = ApiClient.convertToType(data['leverage'], 'String');
      }
      if (data.hasOwnProperty('delta')) {
        obj['delta'] = ApiClient.convertToType(data['delta'], 'String');
      }
      if (data.hasOwnProperty('gamma')) {
        obj['gamma'] = ApiClient.convertToType(data['gamma'], 'String');
      }
      if (data.hasOwnProperty('vega')) {
        obj['vega'] = ApiClient.convertToType(data['vega'], 'String');
      }
      if (data.hasOwnProperty('theta')) {
        obj['theta'] = ApiClient.convertToType(data['theta'], 'String');
      }
      if (data.hasOwnProperty('rho')) {
        obj['rho'] = ApiClient.convertToType(data['rho'], 'String');
      }
    }
    return obj;
  }

  /**
   * Options contract name
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Last trading price
   * @member {String} last_price
   */
  exports.prototype['last_price'] = undefined;
  /**
   * Current mark price
   * @member {String} mark_price
   */
  exports.prototype['mark_price'] = undefined;
  /**
   * Current index price
   * @member {String} index_price
   */
  exports.prototype['index_price'] = undefined;
  /**
   * Best ask size
   * @member {Number} ask1_size
   */
  exports.prototype['ask1_size'] = undefined;
  /**
   * Best ask price
   * @member {String} ask1_price
   */
  exports.prototype['ask1_price'] = undefined;
  /**
   * Best bid size
   * @member {Number} bid1_size
   */
  exports.prototype['bid1_size'] = undefined;
  /**
   * Best bid price
   * @member {String} bid1_price
   */
  exports.prototype['bid1_price'] = undefined;
  /**
   * Current total long position size
   * @member {Number} position_size
   */
  exports.prototype['position_size'] = undefined;
  /**
   * Implied volatility
   * @member {String} mark_iv
   */
  exports.prototype['mark_iv'] = undefined;
  /**
   * Bid side implied volatility
   * @member {String} bid_iv
   */
  exports.prototype['bid_iv'] = undefined;
  /**
   * Ask side implied volatility
   * @member {String} ask_iv
   */
  exports.prototype['ask_iv'] = undefined;
  /**
   * Current leverage. Formula: underlying_price / mark_price * delta
   * @member {String} leverage
   */
  exports.prototype['leverage'] = undefined;
  /**
   * Delta
   * @member {String} delta
   */
  exports.prototype['delta'] = undefined;
  /**
   * Gamma
   * @member {String} gamma
   */
  exports.prototype['gamma'] = undefined;
  /**
   * Vega
   * @member {String} vega
   */
  exports.prototype['vega'] = undefined;
  /**
   * Theta
   * @member {String} theta
   */
  exports.prototype['theta'] = undefined;
  /**
   * Rho
   * @member {String} rho
   */
  exports.prototype['rho'] = undefined;



  return exports;
}));
