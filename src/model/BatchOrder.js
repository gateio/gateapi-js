/**
 * Gate API v4
 * APIv4 provides spot, margin and futures trading operations. There are public APIs to retrieve the real-time market statistics, and private APIs which needs authentication to trade on user's behalf.
 *
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
    root.GateApi.BatchOrder = factory(root.GateApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The BatchOrder model module.
   * @module model/BatchOrder
   */

  /**
   * Constructs a new <code>BatchOrder</code>.
   * Batch order details
   * @alias module:model/BatchOrder
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>BatchOrder</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BatchOrder} obj Optional instance to populate.
   * @return {module:model/BatchOrder} The populated <code>BatchOrder</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('text')) {
        obj['text'] = ApiClient.convertToType(data['text'], 'String');
      }
      if (data.hasOwnProperty('succeeded')) {
        obj['succeeded'] = ApiClient.convertToType(data['succeeded'], 'Boolean');
      }
      if (data.hasOwnProperty('label')) {
        obj['label'] = ApiClient.convertToType(data['label'], 'String');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('create_time')) {
        obj['create_time'] = ApiClient.convertToType(data['create_time'], 'String');
      }
      if (data.hasOwnProperty('update_time')) {
        obj['update_time'] = ApiClient.convertToType(data['update_time'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('currency_pair')) {
        obj['currency_pair'] = ApiClient.convertToType(data['currency_pair'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('account')) {
        obj['account'] = ApiClient.convertToType(data['account'], 'String');
      }
      if (data.hasOwnProperty('side')) {
        obj['side'] = ApiClient.convertToType(data['side'], 'String');
      }
      if (data.hasOwnProperty('amount')) {
        obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
      }
      if (data.hasOwnProperty('price')) {
        obj['price'] = ApiClient.convertToType(data['price'], 'String');
      }
      if (data.hasOwnProperty('time_in_force')) {
        obj['time_in_force'] = ApiClient.convertToType(data['time_in_force'], 'String');
      }
      if (data.hasOwnProperty('auto_borrow')) {
        obj['auto_borrow'] = ApiClient.convertToType(data['auto_borrow'], 'Boolean');
      }
      if (data.hasOwnProperty('left')) {
        obj['left'] = ApiClient.convertToType(data['left'], 'String');
      }
      if (data.hasOwnProperty('fill_price')) {
        obj['fill_price'] = ApiClient.convertToType(data['fill_price'], 'String');
      }
      if (data.hasOwnProperty('fee')) {
        obj['fee'] = ApiClient.convertToType(data['fee'], 'String');
      }
      if (data.hasOwnProperty('fee_currency')) {
        obj['fee_currency'] = ApiClient.convertToType(data['fee_currency'], 'String');
      }
      if (data.hasOwnProperty('point_fee')) {
        obj['point_fee'] = ApiClient.convertToType(data['point_fee'], 'String');
      }
      if (data.hasOwnProperty('gt_fee')) {
        obj['gt_fee'] = ApiClient.convertToType(data['gt_fee'], 'String');
      }
    }
    return obj;
  }

  /**
   * User defined information. If not empty, must follow the rules below:  1. prefixed with `t-` 2. no longer than 16 bytes without `t-` prefix 3. can only include 0-9, A-Z, a-z, underscore(_), hyphen(-) or dot(.) 
   * @member {String} text
   */
  exports.prototype['text'] = undefined;
  /**
   * Whether order succeeds
   * @member {Boolean} succeeded
   */
  exports.prototype['succeeded'] = undefined;
  /**
   * Error label, empty string if order succeeds
   * @member {String} label
   */
  exports.prototype['label'] = undefined;
  /**
   * Detailed error message, empty string if order succeeds
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * Order ID
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Order creation time
   * @member {String} create_time
   */
  exports.prototype['create_time'] = undefined;
  /**
   * Order last modification time
   * @member {String} update_time
   */
  exports.prototype['update_time'] = undefined;
  /**
   * Order status  - `open`: to be filled - `closed`: filled - `cancelled`: cancelled
   * @member {module:model/BatchOrder.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * Currency pair
   * @member {String} currency_pair
   */
  exports.prototype['currency_pair'] = undefined;
  /**
   * Order type. limit - limit order
   * @member {module:model/BatchOrder.TypeEnum} type
   * @default 'limit'
   */
  exports.prototype['type'] = 'limit';
  /**
   * Account type. spot - use spot account; margin - use margin account
   * @member {module:model/BatchOrder.AccountEnum} account
   * @default 'spot'
   */
  exports.prototype['account'] = 'spot';
  /**
   * Order side
   * @member {module:model/BatchOrder.SideEnum} side
   */
  exports.prototype['side'] = undefined;
  /**
   * Trade amount
   * @member {String} amount
   */
  exports.prototype['amount'] = undefined;
  /**
   * Order price
   * @member {String} price
   */
  exports.prototype['price'] = undefined;
  /**
   * Time in force
   * @member {module:model/BatchOrder.TimeInForceEnum} time_in_force
   * @default 'gtc'
   */
  exports.prototype['time_in_force'] = 'gtc';
  /**
   * Used in margin trading(e.g. `account` is `margin`) to allow automatic loan of insufficient part if balance is not enough.
   * @member {Boolean} auto_borrow
   */
  exports.prototype['auto_borrow'] = undefined;
  /**
   * Amount left to fill
   * @member {String} left
   */
  exports.prototype['left'] = undefined;
  /**
   * Fill price of the order
   * @member {String} fill_price
   */
  exports.prototype['fill_price'] = undefined;
  /**
   * Fee deducted
   * @member {String} fee
   */
  exports.prototype['fee'] = undefined;
  /**
   * Fee currency unit
   * @member {String} fee_currency
   */
  exports.prototype['fee_currency'] = undefined;
  /**
   * Point used to deduct fee
   * @member {String} point_fee
   */
  exports.prototype['point_fee'] = undefined;
  /**
   * GT used to deduct fee
   * @member {String} gt_fee
   */
  exports.prototype['gt_fee'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "open"
     * @const
     */
    "open": "open",
    /**
     * value: "closed"
     * @const
     */
    "closed": "closed",
    /**
     * value: "cancelled"
     * @const
     */
    "cancelled": "cancelled"  };

  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "limit"
     * @const
     */
    "limit": "limit"  };

  /**
   * Allowed values for the <code>account</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AccountEnum = {
    /**
     * value: "spot"
     * @const
     */
    "spot": "spot",
    /**
     * value: "margin"
     * @const
     */
    "margin": "margin"  };

  /**
   * Allowed values for the <code>side</code> property.
   * @enum {String}
   * @readonly
   */
  exports.SideEnum = {
    /**
     * value: "buy"
     * @const
     */
    "buy": "buy",
    /**
     * value: "sell"
     * @const
     */
    "sell": "sell"  };

  /**
   * Allowed values for the <code>time_in_force</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TimeInForceEnum = {
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


  return exports;
}));


