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
    root.GateApi.PositionClose = factory(root.GateApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The PositionClose model module.
   * @module model/PositionClose
   */

  /**
   * Constructs a new <code>PositionClose</code>.
   * @alias module:model/PositionClose
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>PositionClose</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PositionClose} obj Optional instance to populate.
   * @return {module:model/PositionClose} The populated <code>PositionClose</code> instance.
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
      if (data.hasOwnProperty('side')) {
        obj['side'] = ApiClient.convertToType(data['side'], 'String');
      }
      if (data.hasOwnProperty('pnl')) {
        obj['pnl'] = ApiClient.convertToType(data['pnl'], 'String');
      }
      if (data.hasOwnProperty('text')) {
        obj['text'] = ApiClient.convertToType(data['text'], 'String');
      }
    }
    return obj;
  }

  /**
   * Position close time
   * @member {Number} time
   */
  exports.prototype['time'] = undefined;
  /**
   * Futures contract
   * @member {String} contract
   */
  exports.prototype['contract'] = undefined;
  /**
   * Position side, long or short
   * @member {module:model/PositionClose.SideEnum} side
   */
  exports.prototype['side'] = undefined;
  /**
   * PNL
   * @member {String} pnl
   */
  exports.prototype['pnl'] = undefined;
  /**
   * Text of close order
   * @member {String} text
   */
  exports.prototype['text'] = undefined;


  /**
   * Allowed values for the <code>side</code> property.
   * @enum {String}
   * @readonly
   */
  exports.SideEnum = {
    /**
     * value: "long"
     * @const
     */
    "long": "long",
    /**
     * value: "short"
     * @const
     */
    "short": "short"  };


  return exports;
}));

