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
    define(['ApiClient', 'model/CurrencyChain'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CurrencyChain'));
  } else {
    // Browser globals (root is window)
    if (!root.GateApi) {
      root.GateApi = {};
    }
    root.GateApi.WalletApi = factory(root.GateApi.ApiClient, root.GateApi.CurrencyChain);
  }
}(this, function(ApiClient, CurrencyChain) {
  'use strict';

  /**
   * Wallet service.
   * @module api/WalletApi
   */

  /**
   * Constructs a new WalletApi. 
   * @alias module:api/WalletApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the listCurrencyChains operation.
     * @callback module:api/WalletApi~listCurrencyChainsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/CurrencyChain>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List chains supported for specified currency
     * @param {String} currency Currency name
     * @param {module:api/WalletApi~listCurrencyChainsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/CurrencyChain>}
     */
    this.listCurrencyChains = function(currency, callback) {
      var postBody = null;
      // verify the required parameter 'currency' is set
      if (currency === undefined || currency === null) {
        throw new Error("Missing the required parameter 'currency' when calling listCurrencyChains");
      }

      var pathParams = {
      };
      var queryParams = {
        'currency': currency,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [CurrencyChain];
      return this.apiClient.callApi(
        '/wallet/currency_chains', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }
  };

  return exports;
}));
