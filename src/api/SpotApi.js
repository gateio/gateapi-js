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
    define(['ApiClient', 'model/BatchOrder', 'model/CancelOrder', 'model/CancelOrderResult', 'model/CurrencyPair', 'model/Order', 'model/OrderBook', 'model/SpotAccount', 'model/Ticker', 'model/Trade'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BatchOrder'), require('../model/CancelOrder'), require('../model/CancelOrderResult'), require('../model/CurrencyPair'), require('../model/Order'), require('../model/OrderBook'), require('../model/SpotAccount'), require('../model/Ticker'), require('../model/Trade'));
  } else {
    // Browser globals (root is window)
    if (!root.GateApi) {
      root.GateApi = {};
    }
    root.GateApi.SpotApi = factory(root.GateApi.ApiClient, root.GateApi.BatchOrder, root.GateApi.CancelOrder, root.GateApi.CancelOrderResult, root.GateApi.CurrencyPair, root.GateApi.Order, root.GateApi.OrderBook, root.GateApi.SpotAccount, root.GateApi.Ticker, root.GateApi.Trade);
  }
}(this, function(ApiClient, BatchOrder, CancelOrder, CancelOrderResult, CurrencyPair, Order, OrderBook, SpotAccount, Ticker, Trade) {
  'use strict';

  /**
   * Spot service.
   * @module api/SpotApi
   */

  /**
   * Constructs a new SpotApi. 
   * @alias module:api/SpotApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the cancelBatchOrders operation.
     * @callback module:api/SpotApi~cancelBatchOrdersCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/CancelOrderResult>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cancel a batch of orders with an ID list
     * Multiple currency pairs can be specified, but maximum 20 orders are allowed per request
     * @param {Array.<module:model/CancelOrder>} cancelOrder 
     * @param {module:api/SpotApi~cancelBatchOrdersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/CancelOrderResult>}
     */
    this.cancelBatchOrders = function(cancelOrder, callback) {
      var postBody = cancelOrder;
      // verify the required parameter 'cancelOrder' is set
      if (cancelOrder === undefined || cancelOrder === null) {
        throw new Error("Missing the required parameter 'cancelOrder' when calling cancelBatchOrders");
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
      var returnType = [CancelOrderResult];
      return this.apiClient.callApi(
        '/spot/cancel_batch_orders', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the cancelOrder operation.
     * @callback module:api/SpotApi~cancelOrderCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Order} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cancel a single order
     * @param {String} orderId ID returned on order successfully being created
     * @param {String} currencyPair Currency pair
     * @param {module:api/SpotApi~cancelOrderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Order}
     */
    this.cancelOrder = function(orderId, currencyPair, callback) {
      var postBody = null;
      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling cancelOrder");
      }
      // verify the required parameter 'currencyPair' is set
      if (currencyPair === undefined || currencyPair === null) {
        throw new Error("Missing the required parameter 'currencyPair' when calling cancelOrder");
      }

      var pathParams = {
        'order_id': orderId
      };
      var queryParams = {
        'currency_pair': currencyPair,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['apiv4'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Order;
      return this.apiClient.callApi(
        '/spot/orders/{order_id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the cancelOrders operation.
     * @callback module:api/SpotApi~cancelOrdersCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Order>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cancel all `open` orders in specified currency pair
     * @param {String} currencyPair Currency pair
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.side All bids or asks. Both included in not specified
     * @param {module:model/String} opts.account Specify account type. Default to all account types being included
     * @param {module:api/SpotApi~cancelOrdersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Order>}
     */
    this.cancelOrders = function(currencyPair, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'currencyPair' is set
      if (currencyPair === undefined || currencyPair === null) {
        throw new Error("Missing the required parameter 'currencyPair' when calling cancelOrders");
      }

      var pathParams = {
      };
      var queryParams = {
        'currency_pair': currencyPair,
        'side': opts['side'],
        'account': opts['account'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['apiv4'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [Order];
      return this.apiClient.callApi(
        '/spot/orders', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createBatchOrders operation.
     * @callback module:api/SpotApi~createBatchOrdersCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/BatchOrder>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a batch of orders
     * Batch orders requirements:  1. custom order field `text` is required 2. At most 4 currency pairs, maximum 5 orders each, are allowed in one request 3. No mixture of spot orders and margin orders, i.e. `account` must be identical for all orders 
     * @param {Array.<module:model/Order>} order 
     * @param {module:api/SpotApi~createBatchOrdersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/BatchOrder>}
     */
    this.createBatchOrders = function(order, callback) {
      var postBody = order;
      // verify the required parameter 'order' is set
      if (order === undefined || order === null) {
        throw new Error("Missing the required parameter 'order' when calling createBatchOrders");
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
      var returnType = [BatchOrder];
      return this.apiClient.callApi(
        '/spot/batch_orders', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createOrder operation.
     * @callback module:api/SpotApi~createOrderCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Order} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an order
     * @param {module:model/Order} order 
     * @param {module:api/SpotApi~createOrderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Order}
     */
    this.createOrder = function(order, callback) {
      var postBody = order;
      // verify the required parameter 'order' is set
      if (order === undefined || order === null) {
        throw new Error("Missing the required parameter 'order' when calling createOrder");
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
      var returnType = Order;
      return this.apiClient.callApi(
        '/spot/orders', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getCurrencyPair operation.
     * @callback module:api/SpotApi~getCurrencyPairCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CurrencyPair} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get detail of one single order
     * @param {String} currencyPair Currency pair
     * @param {module:api/SpotApi~getCurrencyPairCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CurrencyPair}
     */
    this.getCurrencyPair = function(currencyPair, callback) {
      var postBody = null;
      // verify the required parameter 'currencyPair' is set
      if (currencyPair === undefined || currencyPair === null) {
        throw new Error("Missing the required parameter 'currencyPair' when calling getCurrencyPair");
      }

      var pathParams = {
        'currency_pair': currencyPair
      };
      var queryParams = {
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
      var returnType = CurrencyPair;
      return this.apiClient.callApi(
        '/spot/currency_pairs/{currency_pair}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getOrder operation.
     * @callback module:api/SpotApi~getOrderCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Order} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a single order
     * @param {String} orderId ID returned on order successfully being created
     * @param {String} currencyPair Currency pair
     * @param {module:api/SpotApi~getOrderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Order}
     */
    this.getOrder = function(orderId, currencyPair, callback) {
      var postBody = null;
      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling getOrder");
      }
      // verify the required parameter 'currencyPair' is set
      if (currencyPair === undefined || currencyPair === null) {
        throw new Error("Missing the required parameter 'currencyPair' when calling getOrder");
      }

      var pathParams = {
        'order_id': orderId
      };
      var queryParams = {
        'currency_pair': currencyPair,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['apiv4'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Order;
      return this.apiClient.callApi(
        '/spot/orders/{order_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listCandlesticks operation.
     * @callback module:api/SpotApi~listCandlesticksCallback
     * @param {String} error Error message, if any.
     * @param {Array.<[String]>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Market candlesticks
     * Maximum of 1000 points are returned in one query. Be sure not to exceed the limit when specifying `from`, `to` and `interval`
     * @param {String} currencyPair Currency pair
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Maximum recent data points returned. `limit` is conflicted with `from` and `to`. If either `from` or `to` is specified, request will be rejected. (default to 100)
     * @param {Number} opts.from Start time of candlesticks, formatted in Unix timestamp in seconds. Default to`to - 100 * interval` if not specified
     * @param {Number} opts.to End time of candlesticks, formatted in Unix timestamp in seconds. Default to current time
     * @param {module:model/String} opts.interval Interval time between data points (default to '30m')
     * @param {module:api/SpotApi~listCandlesticksCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<[String]>}
     */
    this.listCandlesticks = function(currencyPair, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'currencyPair' is set
      if (currencyPair === undefined || currencyPair === null) {
        throw new Error("Missing the required parameter 'currencyPair' when calling listCandlesticks");
      }

      var pathParams = {
      };
      var queryParams = {
        'currency_pair': currencyPair,
        'limit': opts['limit'],
        'from': opts['from'],
        'to': opts['to'],
        'interval': opts['interval'],
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
      var returnType = [['String']];
      return this.apiClient.callApi(
        '/spot/candlesticks', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listCurrencyPairs operation.
     * @callback module:api/SpotApi~listCurrencyPairsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/CurrencyPair>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all currency pairs supported
     * @param {module:api/SpotApi~listCurrencyPairsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/CurrencyPair>}
     */
    this.listCurrencyPairs = function(callback) {
      var postBody = null;

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

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [CurrencyPair];
      return this.apiClient.callApi(
        '/spot/currency_pairs', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listMyTrades operation.
     * @callback module:api/SpotApi~listMyTradesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Trade>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List personal trading history
     * @param {String} currencyPair Currency pair
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Maximum number of records returned in one list (default to 100)
     * @param {Number} opts.page Page number (default to 1)
     * @param {String} opts.orderId List all trades of specified order
     * @param {module:api/SpotApi~listMyTradesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Trade>}
     */
    this.listMyTrades = function(currencyPair, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'currencyPair' is set
      if (currencyPair === undefined || currencyPair === null) {
        throw new Error("Missing the required parameter 'currencyPair' when calling listMyTrades");
      }

      var pathParams = {
      };
      var queryParams = {
        'currency_pair': currencyPair,
        'limit': opts['limit'],
        'page': opts['page'],
        'order_id': opts['orderId'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['apiv4'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [Trade];
      return this.apiClient.callApi(
        '/spot/my_trades', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listOrderBook operation.
     * @callback module:api/SpotApi~listOrderBookCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrderBook} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve order book
     * Order book will be sorted by price from high to low on bids; reversed on asks
     * @param {String} currencyPair Currency pair
     * @param {Object} opts Optional parameters
     * @param {String} opts.interval Order depth. 0 means no aggregation is applied. default to 0 (default to '0')
     * @param {Number} opts.limit Maximum number of order depth data in asks or bids (default to 10)
     * @param {module:api/SpotApi~listOrderBookCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OrderBook}
     */
    this.listOrderBook = function(currencyPair, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'currencyPair' is set
      if (currencyPair === undefined || currencyPair === null) {
        throw new Error("Missing the required parameter 'currencyPair' when calling listOrderBook");
      }

      var pathParams = {
      };
      var queryParams = {
        'currency_pair': currencyPair,
        'interval': opts['interval'],
        'limit': opts['limit'],
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
      var returnType = OrderBook;
      return this.apiClient.callApi(
        '/spot/order_book', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listOrders operation.
     * @callback module:api/SpotApi~listOrdersCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Order>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List orders
     * @param {String} currencyPair Currency pair
     * @param {module:model/String} status List orders based on status  `open` - order is waiting to be filled `finished` - order has been filled or cancelled 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Page number (default to 1)
     * @param {Number} opts.limit Maximum number of records returned in one list (default to 100)
     * @param {module:api/SpotApi~listOrdersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Order>}
     */
    this.listOrders = function(currencyPair, status, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'currencyPair' is set
      if (currencyPair === undefined || currencyPair === null) {
        throw new Error("Missing the required parameter 'currencyPair' when calling listOrders");
      }
      // verify the required parameter 'status' is set
      if (status === undefined || status === null) {
        throw new Error("Missing the required parameter 'status' when calling listOrders");
      }

      var pathParams = {
      };
      var queryParams = {
        'currency_pair': currencyPair,
        'status': status,
        'page': opts['page'],
        'limit': opts['limit'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['apiv4'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [Order];
      return this.apiClient.callApi(
        '/spot/orders', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listSpotAccounts operation.
     * @callback module:api/SpotApi~listSpotAccountsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/SpotAccount>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List spot accounts
     * @param {Object} opts Optional parameters
     * @param {String} opts.currency Retrieved specified currency related data
     * @param {module:api/SpotApi~listSpotAccountsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/SpotAccount>}
     */
    this.listSpotAccounts = function(opts, callback) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {
      };
      var queryParams = {
        'currency': opts['currency'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['apiv4'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [SpotAccount];
      return this.apiClient.callApi(
        '/spot/accounts', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listTickers operation.
     * @callback module:api/SpotApi~listTickersCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Ticker>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve ticker information
     * Return only related data if `currency_pair` is specified; otherwise return all of them
     * @param {Object} opts Optional parameters
     * @param {String} opts.currencyPair Currency pair
     * @param {module:api/SpotApi~listTickersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Ticker>}
     */
    this.listTickers = function(opts, callback) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {
      };
      var queryParams = {
        'currency_pair': opts['currencyPair'],
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
      var returnType = [Ticker];
      return this.apiClient.callApi(
        '/spot/tickers', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listTrades operation.
     * @callback module:api/SpotApi~listTradesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Trade>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve market trades
     * @param {String} currencyPair Currency pair
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Maximum number of records returned in one list (default to 100)
     * @param {String} opts.lastId Specify list staring point using the `id` of last record in previous list-query results
     * @param {module:api/SpotApi~listTradesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Trade>}
     */
    this.listTrades = function(currencyPair, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'currencyPair' is set
      if (currencyPair === undefined || currencyPair === null) {
        throw new Error("Missing the required parameter 'currencyPair' when calling listTrades");
      }

      var pathParams = {
      };
      var queryParams = {
        'currency_pair': currencyPair,
        'limit': opts['limit'],
        'last_id': opts['lastId'],
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
      var returnType = [Trade];
      return this.apiClient.callApi(
        '/spot/trades', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }
  };

  return exports;
}));
