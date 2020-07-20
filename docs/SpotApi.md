# GateApi.SpotApi

All URIs are relative to *https://api.gateio.ws/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelBatchOrders**](SpotApi.md#cancelBatchOrders) | **POST** /spot/cancel_batch_orders | Cancel a batch of orders with an ID list
[**cancelOrder**](SpotApi.md#cancelOrder) | **DELETE** /spot/orders/{order_id} | Cancel a single order
[**cancelOrders**](SpotApi.md#cancelOrders) | **DELETE** /spot/orders | Cancel all &#x60;open&#x60; orders in specified currency pair
[**createBatchOrders**](SpotApi.md#createBatchOrders) | **POST** /spot/batch_orders | Create a batch of orders
[**createOrder**](SpotApi.md#createOrder) | **POST** /spot/orders | Create an order
[**getCurrencyPair**](SpotApi.md#getCurrencyPair) | **GET** /spot/currency_pairs/{currency_pair} | Get detail of one single order
[**getOrder**](SpotApi.md#getOrder) | **GET** /spot/orders/{order_id} | Get a single order
[**listCandlesticks**](SpotApi.md#listCandlesticks) | **GET** /spot/candlesticks | Market candlesticks
[**listCurrencyPairs**](SpotApi.md#listCurrencyPairs) | **GET** /spot/currency_pairs | List all currency pairs supported
[**listMyTrades**](SpotApi.md#listMyTrades) | **GET** /spot/my_trades | List personal trading history
[**listOrderBook**](SpotApi.md#listOrderBook) | **GET** /spot/order_book | Retrieve order book
[**listOrders**](SpotApi.md#listOrders) | **GET** /spot/orders | List orders
[**listSpotAccounts**](SpotApi.md#listSpotAccounts) | **GET** /spot/accounts | List spot accounts
[**listTickers**](SpotApi.md#listTickers) | **GET** /spot/tickers | Retrieve ticker information
[**listTrades**](SpotApi.md#listTrades) | **GET** /spot/trades | Retrieve market trades


## cancelBatchOrders

> [CancelOrderResult] cancelBatchOrders(cancelOrder)

Cancel a batch of orders with an ID list

Multiple currency pairs can be specified, but maximum 20 orders are allowed per request

### Example

```javascript
var GateApi = require('gate-api');

var defaultClient = GateApi.ApiClient.instance;
// Configure Gate APIv4 key authentication: apiv4
var apiv4 = defaultClient.authentications['apiv4'];
apiv4.key = 'YOUR_API_KEY'
apiv4.secret = 'YOUR_API_SECRET'

var apiInstance = new GateApi.SpotApi();
var cancelOrder = [{"currency_pair":"BTC_USDT","id":"123456"}]; // [CancelOrder] | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cancelBatchOrders(cancelOrder, callback);
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cancelOrder** | [**[CancelOrder]**](CancelOrder.md)|  | 

### Return type

[**[CancelOrderResult]**](CancelOrderResult.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## cancelOrder

> Order cancelOrder(orderId, currencyPair)

Cancel a single order

### Example

```javascript
var GateApi = require('gate-api');

var defaultClient = GateApi.ApiClient.instance;
// Configure Gate APIv4 key authentication: apiv4
var apiv4 = defaultClient.authentications['apiv4'];
apiv4.key = 'YOUR_API_KEY'
apiv4.secret = 'YOUR_API_SECRET'

var apiInstance = new GateApi.SpotApi();
var orderId = 12345; // String | ID returned on order successfully being created
var currencyPair = BTC_USDT; // String | Currency pair
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cancelOrder(orderId, currencyPair, callback);
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **String**| ID returned on order successfully being created | 
 **currencyPair** | **String**| Currency pair | 

### Return type

[**Order**](Order.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## cancelOrders

> [Order] cancelOrders(currencyPair, opts)

Cancel all &#x60;open&#x60; orders in specified currency pair

### Example

```javascript
var GateApi = require('gate-api');

var defaultClient = GateApi.ApiClient.instance;
// Configure Gate APIv4 key authentication: apiv4
var apiv4 = defaultClient.authentications['apiv4'];
apiv4.key = 'YOUR_API_KEY'
apiv4.secret = 'YOUR_API_SECRET'

var apiInstance = new GateApi.SpotApi();
var currencyPair = BTC_USDT; // String | Currency pair
var opts = {
  'side': sell, // String | All bids or asks. Both included in not specified
  'account': spot // String | Specify account type. Default to all account types being included
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cancelOrders(currencyPair, opts, callback);
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyPair** | **String**| Currency pair | 
 **side** | **String**| All bids or asks. Both included in not specified | [optional] 
 **account** | **String**| Specify account type. Default to all account types being included | [optional] 

### Return type

[**[Order]**](Order.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## createBatchOrders

> [BatchOrder] createBatchOrders(order)

Create a batch of orders

Batch orders requirements:  1. custom order field &#x60;text&#x60; is required 2. At most 4 currency pairs, maximum 5 orders each, are allowed in one request 3. No mixture of spot orders and margin orders, i.e. &#x60;account&#x60; must be identical for all orders 

### Example

```javascript
var GateApi = require('gate-api');

var defaultClient = GateApi.ApiClient.instance;
// Configure Gate APIv4 key authentication: apiv4
var apiv4 = defaultClient.authentications['apiv4'];
apiv4.key = 'YOUR_API_KEY'
apiv4.secret = 'YOUR_API_SECRET'

var apiInstance = new GateApi.SpotApi();
var order = [{"id":"12332324","text":"t-123456","create_time":"1548000000","update_time":"1548000100","currency_pair":"ETH_BTC","status":"cancelled","type":"limit","account":"spot","side":"buy","amount":"1","price":"5.00032","time_in_force":"gtc","auto_borrow":false,"left":"0.5","filled_total":"2.50016","fee":"0.005","fee_currency":"ETH","point_fee":"0","gt_fee":"0","gt_discount":false,"rebated_fee":"0","rebated_fee_currency":"BTC"}]; // [Order] | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createBatchOrders(order, callback);
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order** | [**[Order]**](Order.md)|  | 

### Return type

[**[BatchOrder]**](BatchOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## createOrder

> Order createOrder(order)

Create an order

### Example

```javascript
var GateApi = require('gate-api');

var defaultClient = GateApi.ApiClient.instance;
// Configure Gate APIv4 key authentication: apiv4
var apiv4 = defaultClient.authentications['apiv4'];
apiv4.key = 'YOUR_API_KEY'
apiv4.secret = 'YOUR_API_SECRET'

var apiInstance = new GateApi.SpotApi();
var order = {"id":"12332324","text":"t-123456","create_time":"1548000000","update_time":"1548000100","currency_pair":"ETH_BTC","status":"cancelled","type":"limit","account":"spot","side":"buy","amount":"1","price":"5.00032","time_in_force":"gtc","auto_borrow":false,"left":"0.5","filled_total":"2.50016","fee":"0.005","fee_currency":"ETH","point_fee":"0","gt_fee":"0","gt_discount":false,"rebated_fee":"0","rebated_fee_currency":"BTC"}; // Order | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createOrder(order, callback);
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order** | [**Order**](Order.md)|  | 

### Return type

[**Order**](Order.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## getCurrencyPair

> CurrencyPair getCurrencyPair(currencyPair)

Get detail of one single order

### Example

```javascript
var GateApi = require('gate-api');

var apiInstance = new GateApi.SpotApi();
var currencyPair = ETH_BTC; // String | Currency pair
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCurrencyPair(currencyPair, callback);
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyPair** | **String**| Currency pair | 

### Return type

[**CurrencyPair**](CurrencyPair.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getOrder

> Order getOrder(orderId, currencyPair)

Get a single order

### Example

```javascript
var GateApi = require('gate-api');

var defaultClient = GateApi.ApiClient.instance;
// Configure Gate APIv4 key authentication: apiv4
var apiv4 = defaultClient.authentications['apiv4'];
apiv4.key = 'YOUR_API_KEY'
apiv4.secret = 'YOUR_API_SECRET'

var apiInstance = new GateApi.SpotApi();
var orderId = 12345; // String | ID returned on order successfully being created
var currencyPair = BTC_USDT; // String | Currency pair
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrder(orderId, currencyPair, callback);
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **String**| ID returned on order successfully being created | 
 **currencyPair** | **String**| Currency pair | 

### Return type

[**Order**](Order.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listCandlesticks

> [[String]] listCandlesticks(currencyPair, opts)

Market candlesticks

Maximum of 1000 points are returned in one query. Be sure not to exceed the limit when specifying &#x60;from&#x60;, &#x60;to&#x60; and &#x60;interval&#x60;

### Example

```javascript
var GateApi = require('gate-api');

var apiInstance = new GateApi.SpotApi();
var currencyPair = BTC_USDT; // String | Currency pair
var opts = {
  'limit': 100, // Number | Maximum recent data points returned. `limit` is conflicted with `from` and `to`. If either `from` or `to` is specified, request will be rejected.
  'from': 1546905600, // Number | Start time of candlesticks, formatted in Unix timestamp in seconds. Default to`to - 100 * interval` if not specified
  'to': 1546935600, // Number | End time of candlesticks, formatted in Unix timestamp in seconds. Default to current time
  'interval': 5m // String | Interval time between data points
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listCandlesticks(currencyPair, opts, callback);
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyPair** | **String**| Currency pair | 
 **limit** | **Number**| Maximum recent data points returned. &#x60;limit&#x60; is conflicted with &#x60;from&#x60; and &#x60;to&#x60;. If either &#x60;from&#x60; or &#x60;to&#x60; is specified, request will be rejected. | [optional] [default to 100]
 **from** | **Number**| Start time of candlesticks, formatted in Unix timestamp in seconds. Default to&#x60;to - 100 * interval&#x60; if not specified | [optional] 
 **to** | **Number**| End time of candlesticks, formatted in Unix timestamp in seconds. Default to current time | [optional] 
 **interval** | **String**| Interval time between data points | [optional] [default to &#39;30m&#39;]

### Return type

**[[String]]**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listCurrencyPairs

> [CurrencyPair] listCurrencyPairs()

List all currency pairs supported

### Example

```javascript
var GateApi = require('gate-api');

var apiInstance = new GateApi.SpotApi();
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listCurrencyPairs(callback);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[CurrencyPair]**](CurrencyPair.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listMyTrades

> [Trade] listMyTrades(currencyPair, opts)

List personal trading history

### Example

```javascript
var GateApi = require('gate-api');

var defaultClient = GateApi.ApiClient.instance;
// Configure Gate APIv4 key authentication: apiv4
var apiv4 = defaultClient.authentications['apiv4'];
apiv4.key = 'YOUR_API_KEY'
apiv4.secret = 'YOUR_API_SECRET'

var apiInstance = new GateApi.SpotApi();
var currencyPair = BTC_USDT; // String | Currency pair
var opts = {
  'limit': 100, // Number | Maximum number of records returned in one list
  'page': 1, // Number | Page number
  'orderId': 12345 // String | List all trades of specified order
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listMyTrades(currencyPair, opts, callback);
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyPair** | **String**| Currency pair | 
 **limit** | **Number**| Maximum number of records returned in one list | [optional] [default to 100]
 **page** | **Number**| Page number | [optional] [default to 1]
 **orderId** | **String**| List all trades of specified order | [optional] 

### Return type

[**[Trade]**](Trade.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listOrderBook

> OrderBook listOrderBook(currencyPair, opts)

Retrieve order book

Order book will be sorted by price from high to low on bids; reversed on asks

### Example

```javascript
var GateApi = require('gate-api');

var apiInstance = new GateApi.SpotApi();
var currencyPair = BTC_USDT; // String | Currency pair
var opts = {
  'interval': 0, // String | Order depth. 0 means no aggregation is applied. default to 0
  'limit': 10 // Number | Maximum number of order depth data in asks or bids
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listOrderBook(currencyPair, opts, callback);
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyPair** | **String**| Currency pair | 
 **interval** | **String**| Order depth. 0 means no aggregation is applied. default to 0 | [optional] [default to &#39;0&#39;]
 **limit** | **Number**| Maximum number of order depth data in asks or bids | [optional] [default to 10]

### Return type

[**OrderBook**](OrderBook.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listOrders

> [Order] listOrders(currencyPair, status, opts)

List orders

### Example

```javascript
var GateApi = require('gate-api');

var defaultClient = GateApi.ApiClient.instance;
// Configure Gate APIv4 key authentication: apiv4
var apiv4 = defaultClient.authentications['apiv4'];
apiv4.key = 'YOUR_API_KEY'
apiv4.secret = 'YOUR_API_SECRET'

var apiInstance = new GateApi.SpotApi();
var currencyPair = BTC_USDT; // String | Currency pair
var status = open; // String | List orders based on status  `open` - order is waiting to be filled `finished` - order has been filled or cancelled 
var opts = {
  'page': 1, // Number | Page number
  'limit': 100 // Number | Maximum number of records returned in one list
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listOrders(currencyPair, status, opts, callback);
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyPair** | **String**| Currency pair | 
 **status** | **String**| List orders based on status  &#x60;open&#x60; - order is waiting to be filled &#x60;finished&#x60; - order has been filled or cancelled  | 
 **page** | **Number**| Page number | [optional] [default to 1]
 **limit** | **Number**| Maximum number of records returned in one list | [optional] [default to 100]

### Return type

[**[Order]**](Order.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listSpotAccounts

> [SpotAccount] listSpotAccounts(opts)

List spot accounts

### Example

```javascript
var GateApi = require('gate-api');

var defaultClient = GateApi.ApiClient.instance;
// Configure Gate APIv4 key authentication: apiv4
var apiv4 = defaultClient.authentications['apiv4'];
apiv4.key = 'YOUR_API_KEY'
apiv4.secret = 'YOUR_API_SECRET'

var apiInstance = new GateApi.SpotApi();
var opts = {
  'currency': BTC // String | Retrieved specified currency related data
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listSpotAccounts(opts, callback);
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **String**| Retrieved specified currency related data | [optional] 

### Return type

[**[SpotAccount]**](SpotAccount.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listTickers

> [Ticker] listTickers(opts)

Retrieve ticker information

Return only related data if &#x60;currency_pair&#x60; is specified; otherwise return all of them

### Example

```javascript
var GateApi = require('gate-api');

var apiInstance = new GateApi.SpotApi();
var opts = {
  'currencyPair': BTC_USDT // String | Currency pair
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listTickers(opts, callback);
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyPair** | **String**| Currency pair | [optional] 

### Return type

[**[Ticker]**](Ticker.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listTrades

> [Trade] listTrades(currencyPair, opts)

Retrieve market trades

### Example

```javascript
var GateApi = require('gate-api');

var apiInstance = new GateApi.SpotApi();
var currencyPair = BTC_USDT; // String | Currency pair
var opts = {
  'limit': 100, // Number | Maximum number of records returned in one list
  'lastId': 12345 // String | Specify list staring point using the `id` of last record in previous list-query results
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listTrades(currencyPair, opts, callback);
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyPair** | **String**| Currency pair | 
 **limit** | **Number**| Maximum number of records returned in one list | [optional] [default to 100]
 **lastId** | **String**| Specify list staring point using the &#x60;id&#x60; of last record in previous list-query results | [optional] 

### Return type

[**[Trade]**](Trade.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
