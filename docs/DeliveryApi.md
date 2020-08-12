# GateApi.DeliveryApi

All URIs are relative to *https://api.gateio.ws/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listDeliveryContracts**](DeliveryApi.md#listDeliveryContracts) | **GET** /delivery/{settle}/contracts | List all futures contracts
[**getDeliveryContract**](DeliveryApi.md#getDeliveryContract) | **GET** /delivery/{settle}/contracts/{contract} | Get a single contract
[**listDeliveryOrderBook**](DeliveryApi.md#listDeliveryOrderBook) | **GET** /delivery/{settle}/order_book | Futures order book
[**listDeliveryTrades**](DeliveryApi.md#listDeliveryTrades) | **GET** /delivery/{settle}/trades | Futures trading history
[**listDeliveryCandlesticks**](DeliveryApi.md#listDeliveryCandlesticks) | **GET** /delivery/{settle}/candlesticks | Get futures candlesticks
[**listDeliveryTickers**](DeliveryApi.md#listDeliveryTickers) | **GET** /delivery/{settle}/tickers | List futures tickers
[**listDeliveryInsuranceLedger**](DeliveryApi.md#listDeliveryInsuranceLedger) | **GET** /delivery/{settle}/insurance | Futures insurance balance history


## listDeliveryContracts

> [DeliveryContract] listDeliveryContracts(settle)

List all futures contracts

### Example

```javascript
var GateApi = require('gate-api');

var apiInstance = new GateApi.DeliveryApi();
var settle = "usdt"; // String | Settle currency
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listDeliveryContracts(settle, callback);
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **String**| Settle currency | 

### Return type

[**[DeliveryContract]**](DeliveryContract.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getDeliveryContract

> DeliveryContract getDeliveryContract(settle, contract)

Get a single contract

### Example

```javascript
var GateApi = require('gate-api');

var apiInstance = new GateApi.DeliveryApi();
var settle = "usdt"; // String | Settle currency
var contract = "BTC_USDT_20200814"; // String | Futures contract
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDeliveryContract(settle, contract, callback);
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **String**| Settle currency | 
 **contract** | **String**| Futures contract | 

### Return type

[**DeliveryContract**](DeliveryContract.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listDeliveryOrderBook

> FuturesOrderBook listDeliveryOrderBook(settle, contract, opts)

Futures order book

Bids will be sorted by price from high to low, while asks sorted reversely

### Example

```javascript
var GateApi = require('gate-api');

var apiInstance = new GateApi.DeliveryApi();
var settle = "usdt"; // String | Settle currency
var contract = "BTC_USDT_20200814"; // String | Futures contract
var opts = {
  'interval': '0', // String | Order depth. 0 means no aggregation is applied. default to 0
  'limit': 10 // Number | Maximum number of order depth data in asks or bids
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listDeliveryOrderBook(settle, contract, opts, callback);
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **String**| Settle currency | 
 **contract** | **String**| Futures contract | 
 **interval** | **String**| Order depth. 0 means no aggregation is applied. default to 0 | [optional] [default to &#39;0&#39;]
 **limit** | **Number**| Maximum number of order depth data in asks or bids | [optional] [default to 10]

### Return type

[**FuturesOrderBook**](FuturesOrderBook.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listDeliveryTrades

> [FuturesTrade] listDeliveryTrades(settle, contract, opts)

Futures trading history

### Example

```javascript
var GateApi = require('gate-api');

var apiInstance = new GateApi.DeliveryApi();
var settle = "usdt"; // String | Settle currency
var contract = "BTC_USDT_20200814"; // String | Futures contract
var opts = {
  'limit': 100, // Number | Maximum number of records returned in one list
  'lastId': "12345", // String | Specify list staring point using the id of last record in previous list-query results  This parameter is deprecated. Use `from` and `to` instead to limit time range
  'from': 1546905600, // Number | Specify starting time in Unix seconds. If not specified, `to` and `limit` will be used to limit response items. If items between `from` and `to` are more than `limit`, only `limit` number will be returned. 
  'to': 1546935600 // Number | Specify end time in Unix seconds, default to current time
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listDeliveryTrades(settle, contract, opts, callback);
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **String**| Settle currency | 
 **contract** | **String**| Futures contract | 
 **limit** | **Number**| Maximum number of records returned in one list | [optional] [default to 100]
 **lastId** | **String**| Specify list staring point using the id of last record in previous list-query results  This parameter is deprecated. Use &#x60;from&#x60; and &#x60;to&#x60; instead to limit time range | [optional] 
 **from** | **Number**| Specify starting time in Unix seconds. If not specified, &#x60;to&#x60; and &#x60;limit&#x60; will be used to limit response items. If items between &#x60;from&#x60; and &#x60;to&#x60; are more than &#x60;limit&#x60;, only &#x60;limit&#x60; number will be returned.  | [optional] 
 **to** | **Number**| Specify end time in Unix seconds, default to current time | [optional] 

### Return type

[**[FuturesTrade]**](FuturesTrade.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listDeliveryCandlesticks

> [FuturesCandlestick] listDeliveryCandlesticks(settle, contract, opts)

Get futures candlesticks

Return specified contract candlesticks. If prefix &#x60;contract&#x60; with &#x60;mark_&#x60;, the contract&#39;s mark price candlesticks are returned; if prefix with &#x60;index_&#x60;, index price candlesticks will be returned.  Maximum of 2000 points are returned in one query. Be sure not to exceed the limit when specifying &#x60;from&#x60;, &#x60;to&#x60; and &#x60;interval&#x60;

### Example

```javascript
var GateApi = require('gate-api');

var apiInstance = new GateApi.DeliveryApi();
var settle = "usdt"; // String | Settle currency
var contract = "BTC_USDT_20200814"; // String | Futures contract
var opts = {
  'from': 1546905600, // Number | Start time of candlesticks, formatted in Unix timestamp in seconds. Default to`to - 100 * interval` if not specified
  'to': 1546935600, // Number | End time of candlesticks, formatted in Unix timestamp in seconds. Default to current time
  'limit': 100, // Number | Maximum recent data points returned. `limit` is conflicted with `from` and `to`. If either `from` or `to` is specified, request will be rejected.
  'interval': '5m' // String | Interval time between data points
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listDeliveryCandlesticks(settle, contract, opts, callback);
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **String**| Settle currency | 
 **contract** | **String**| Futures contract | 
 **from** | **Number**| Start time of candlesticks, formatted in Unix timestamp in seconds. Default to&#x60;to - 100 * interval&#x60; if not specified | [optional] 
 **to** | **Number**| End time of candlesticks, formatted in Unix timestamp in seconds. Default to current time | [optional] 
 **limit** | **Number**| Maximum recent data points returned. &#x60;limit&#x60; is conflicted with &#x60;from&#x60; and &#x60;to&#x60;. If either &#x60;from&#x60; or &#x60;to&#x60; is specified, request will be rejected. | [optional] [default to 100]
 **interval** | **String**| Interval time between data points | [optional] [default to &#39;5m&#39;]

### Return type

[**[FuturesCandlestick]**](FuturesCandlestick.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listDeliveryTickers

> [FuturesTicker] listDeliveryTickers(settle, opts)

List futures tickers

### Example

```javascript
var GateApi = require('gate-api');

var apiInstance = new GateApi.DeliveryApi();
var settle = "usdt"; // String | Settle currency
var opts = {
  'contract': "BTC_USDT_20200814" // String | Futures contract
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listDeliveryTickers(settle, opts, callback);
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **String**| Settle currency | 
 **contract** | **String**| Futures contract | [optional] 

### Return type

[**[FuturesTicker]**](FuturesTicker.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listDeliveryInsuranceLedger

> [InsuranceRecord] listDeliveryInsuranceLedger(settle, opts)

Futures insurance balance history

### Example

```javascript
var GateApi = require('gate-api');

var apiInstance = new GateApi.DeliveryApi();
var settle = "usdt"; // String | Settle currency
var opts = {
  'limit': 100 // Number | Maximum number of records returned in one list
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listDeliveryInsuranceLedger(settle, opts, callback);
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **String**| Settle currency | 
 **limit** | **Number**| Maximum number of records returned in one list | [optional] [default to 100]

### Return type

[**[InsuranceRecord]**](InsuranceRecord.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
