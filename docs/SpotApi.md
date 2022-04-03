# GateApi.SpotApi

All URIs are relative to *https://api.gateio.ws/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listCurrencies**](SpotApi.md#listCurrencies) | **GET** /spot/currencies | List all currencies&#39; details
[**getCurrency**](SpotApi.md#getCurrency) | **GET** /spot/currencies/{currency} | Get details of a specific currency
[**listCurrencyPairs**](SpotApi.md#listCurrencyPairs) | **GET** /spot/currency_pairs | List all currency pairs supported
[**getCurrencyPair**](SpotApi.md#getCurrencyPair) | **GET** /spot/currency_pairs/{currency_pair} | Get details of a specifc order
[**listTickers**](SpotApi.md#listTickers) | **GET** /spot/tickers | Retrieve ticker information
[**listOrderBook**](SpotApi.md#listOrderBook) | **GET** /spot/order_book | Retrieve order book
[**listTrades**](SpotApi.md#listTrades) | **GET** /spot/trades | Retrieve market trades
[**listCandlesticks**](SpotApi.md#listCandlesticks) | **GET** /spot/candlesticks | Market candlesticks


## listCurrencies

> [Currency] listCurrencies()

List all currencies&#39; details

Currency has two forms:  1. Only currency name, e.g., BTC, USDT 2. &#x60;&lt;currency&gt;_&lt;chain&gt;&#x60;, e.g., &#x60;HT_ETH&#x60;  The latter one occurs when one currency has multiple chains. Currency detail contains a &#x60;chain&#x60; field whatever the form is. To retrieve all chains of one currency, you can use use all the details which has the name of the currency or name starting with &#x60;&lt;currency&gt;_&#x60;.

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
apiInstance.listCurrencies(callback);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Currency]**](Currency.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getCurrency

> Currency getCurrency(currency)

Get details of a specific currency

### Example

```javascript
var GateApi = require('gate-api');

var apiInstance = new GateApi.SpotApi();
var currency = "GT"; // String | Currency name
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCurrency(currency, callback);
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **String**| Currency name | 

### Return type

[**Currency**](Currency.md)

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

## getCurrencyPair

> CurrencyPair getCurrencyPair(currencyPair)

Get details of a specifc order

### Example

```javascript
var GateApi = require('gate-api');

var apiInstance = new GateApi.SpotApi();
var currencyPair = "ETH_BTC"; // String | Currency pair
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

## listTickers

> [Ticker] listTickers(opts)

Retrieve ticker information

Return only related data if &#x60;currency_pair&#x60; is specified; otherwise return all of them

### Example

```javascript
var GateApi = require('gate-api');

var apiInstance = new GateApi.SpotApi();
var opts = {
  'currencyPair': "BTC_USDT" // String | Currency pair
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

## listOrderBook

> OrderBook listOrderBook(currencyPair, opts)

Retrieve order book

Order book will be sorted by price from high to low on bids; low to high on asks

### Example

```javascript
var GateApi = require('gate-api');

var apiInstance = new GateApi.SpotApi();
var currencyPair = "BTC_USDT"; // String | Currency pair
var opts = {
  'interval': '0', // String | Order depth. 0 means no aggregation is applied. default to 0
  'limit': 10, // Number | Maximum number of order depth data in asks or bids
  'withId': false // Boolean | Return order book ID
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
 **withId** | **Boolean**| Return order book ID | [optional] [default to false]

### Return type

[**OrderBook**](OrderBook.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listTrades

> [Trade] listTrades(currencyPair, opts)

Retrieve market trades

You can use &#x60;from&#x60; and &#x60;to&#x60; to query by time range, or use &#x60;last_id&#x60; by scrolling page. The default behavior is by time range.  Scrolling query using &#x60;last_id&#x60; is not recommended any more. If &#x60;last_id&#x60; is specified, time range query parameters will be ignored.

### Example

```javascript
var GateApi = require('gate-api');

var apiInstance = new GateApi.SpotApi();
var currencyPair = "BTC_USDT"; // String | Currency pair
var opts = {
  'limit': 100, // Number | Maximum number of records to be returned in a single list
  'lastId': "12345", // String | Specify list staring point using the `id` of last record in previous list-query results
  'reverse': false, // Boolean | Whether the id of records to be retrieved should be smaller than the last_id specified- true: Retrieve records where id is smaller than the specified last_id- false: Retrieve records where id is larger than the specified last_idDefault to false.  When `last_id` is specified. Set `reverse` to `true` to trace back trading history; `false` to retrieve latest tradings.  No effect if `last_id` is not specified.
  'from': 1627706330, // Number | Start timestamp of the query
  'to': 1635329650, // Number | Time range ending, default to current time
  'page': 1 // Number | Page number
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
 **limit** | **Number**| Maximum number of records to be returned in a single list | [optional] [default to 100]
 **lastId** | **String**| Specify list staring point using the &#x60;id&#x60; of last record in previous list-query results | [optional] 
 **reverse** | **Boolean**| Whether the id of records to be retrieved should be smaller than the last_id specified- true: Retrieve records where id is smaller than the specified last_id- false: Retrieve records where id is larger than the specified last_idDefault to false.  When &#x60;last_id&#x60; is specified. Set &#x60;reverse&#x60; to &#x60;true&#x60; to trace back trading history; &#x60;false&#x60; to retrieve latest tradings.  No effect if &#x60;last_id&#x60; is not specified. | [optional] [default to false]
 **from** | **Number**| Start timestamp of the query | [optional] 
 **to** | **Number**| Time range ending, default to current time | [optional] 
 **page** | **Number**| Page number | [optional] [default to 1]

### Return type

[**[Trade]**](Trade.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listCandlesticks

> [[String]] listCandlesticks(currencyPair, opts)

Market candlesticks

Maximum of 1000 points can be returned in a query. Be sure not to exceed the limit when specifying from, to and interval

### Example

```javascript
var GateApi = require('gate-api');

var apiInstance = new GateApi.SpotApi();
var currencyPair = "BTC_USDT"; // String | Currency pair
var opts = {
  'limit': 100, // Number | Maximum recent data points to return. `limit` is conflicted with `from` and `to`. If either `from` or `to` is specified, request will be rejected.
  'from': 1546905600, // Number | Start time of candlesticks, formatted in Unix timestamp in seconds. Default to`to - 100 * interval` if not specified
  'to': 1546935600, // Number | End time of candlesticks, formatted in Unix timestamp in seconds. Default to current time
  'interval': '30m' // String | Interval time between data points
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
 **limit** | **Number**| Maximum recent data points to return. &#x60;limit&#x60; is conflicted with &#x60;from&#x60; and &#x60;to&#x60;. If either &#x60;from&#x60; or &#x60;to&#x60; is specified, request will be rejected. | [optional] [default to 100]
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
