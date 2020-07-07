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
    define(['ApiClient', 'model/LedgerRecord'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/LedgerRecord'));
  } else {
    // Browser globals (root is window)
    if (!root.GateApi) {
      root.GateApi = {};
    }
    root.GateApi.WithdrawalApi = factory(root.GateApi.ApiClient, root.GateApi.LedgerRecord);
  }
}(this, function(ApiClient, LedgerRecord) {
  'use strict';

  /**
   * Withdrawal service.
   * @module api/WithdrawalApi
   */

  /**
   * Constructs a new WithdrawalApi. 
   * @alias module:api/WithdrawalApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the withdraw operation.
     * @callback module:api/WithdrawalApi~withdrawCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LedgerRecord} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Withdraw
     * @param {module:model/LedgerRecord} ledgerRecord 
     * @param {module:api/WithdrawalApi~withdrawCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LedgerRecord}
     */
    this.withdraw = function(ledgerRecord, callback) {
      var postBody = ledgerRecord;

      // verify the required parameter 'ledgerRecord' is set
      if (ledgerRecord === undefined || ledgerRecord === null) {
        throw new Error("Missing the required parameter 'ledgerRecord' when calling withdraw");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['apiv4'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = LedgerRecord;

      return this.apiClient.callApi(
        '/withdrawals', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
