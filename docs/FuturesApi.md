# GateApi.FuturesApi

All URIs are relative to *https://api.gateio.ws/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listFuturesContracts**](FuturesApi.md#listFuturesContracts) | **GET** /futures/{settle}/contracts | List all futures contracts
[**getFuturesContract**](FuturesApi.md#getFuturesContract) | **GET** /futures/{settle}/contracts/{contract} | Get a single contract
[**listFuturesOrderBook**](FuturesApi.md#listFuturesOrderBook) | **GET** /futures/{settle}/order_book | Futures order book
[**listFuturesTrades**](FuturesApi.md#listFuturesTrades) | **GET** /futures/{settle}/trades | Futures trading history
[**listFuturesCandlesticks**](FuturesApi.md#listFuturesCandlesticks) | **GET** /futures/{settle}/candlesticks | Get futures candlesticks
[**listFuturesTickers**](FuturesApi.md#listFuturesTickers) | **GET** /futures/{settle}/tickers | List futures tickers
[**listFuturesFundingRateHistory**](FuturesApi.md#listFuturesFundingRateHistory) | **GET** /futures/{settle}/funding_rate | Funding rate history
[**listFuturesInsuranceLedger**](FuturesApi.md#listFuturesInsuranceLedger) | **GET** /futures/{settle}/insurance | Futures insurance balance history
[**listContractStats**](FuturesApi.md#listContractStats) | **GET** /futures/{settle}/contract_stats | Futures stats
[**listLiquidatedOrders**](FuturesApi.md#listLiquidatedOrders) | **GET** /futures/{settle}/liq_orders | Retrieve liquidation history


## listFuturesContracts

> [Contract] listFuturesContracts(settle)

List all futures contracts

### Example

```javascript
var GateApi = require('gate-api');

var apiInstance = new GateApi.FuturesApi();
var settle = 'btc'; // String | Settle currency
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listFuturesContracts(settle, callback);
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **String**| Settle currency | [default to &#39;btc&#39;]

### Return type

[**[Contract]**](Contract.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getFuturesContract

> Contract getFuturesContract(settle, contract)

Get a single contract

### Example

```javascript
var GateApi = require('gate-api');

var apiInstance = new GateApi.FuturesApi();
var settle = 'btc'; // String | Settle currency
var contract = "BTC_USD"; // String | Futures contract
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFuturesContract(settle, contract, callback);
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **String**| Settle currency | [default to &#39;btc&#39;]
 **contract** | **String**| Futures contract | 

### Return type

[**Contract**](Contract.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listFuturesOrderBook

> FuturesOrderBook listFuturesOrderBook(settle, contract, opts)

Futures order book

Bids will be sorted by price from high to low, while asks sorted reversely

### Example

```javascript
var GateApi = require('gate-api');

var apiInstance = new GateApi.FuturesApi();
var settle = 'btc'; // String | Settle currency
var contract = "BTC_USDT"; // String | Futures contract
var opts = {
  'interval': '0', // String | Order depth. 0 means no aggregation is applied. default to 0
  'limit': 10, // Number | Maximum number of order depth data in asks or bids
  'withId': false // Boolean | Whether order book update ID would be returned. This ID increments by 1 on every order book update
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listFuturesOrderBook(settle, contract, opts, callback);
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **String**| Settle currency | [default to &#39;btc&#39;]
 **contract** | **String**| Futures contract | 
 **interval** | **String**| Order depth. 0 means no aggregation is applied. default to 0 | [optional] [default to &#39;0&#39;]
 **limit** | **Number**| Maximum number of order depth data in asks or bids | [optional] [default to 10]
 **withId** | **Boolean**| Whether order book update ID would be returned. This ID increments by 1 on every order book update | [optional] [default to false]

### Return type

[**FuturesOrderBook**](FuturesOrderBook.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listFuturesTrades

> [FuturesTrade] listFuturesTrades(settle, contract, opts)

Futures trading history

### Example

```javascript
var GateApi = require('gate-api');

var apiInstance = new GateApi.FuturesApi();
var settle = 'btc'; // String | Settle currency
var contract = "BTC_USDT"; // String | Futures contract
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
apiInstance.listFuturesTrades(settle, contract, opts, callback);
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **String**| Settle currency | [default to &#39;btc&#39;]
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

## listFuturesCandlesticks

> [FuturesCandlestick] listFuturesCandlesticks(settle, contract, opts)

Get futures candlesticks

Return specified contract candlesticks. If prefix &#x60;contract&#x60; with &#x60;mark_&#x60;, the contract&#39;s mark price candlesticks are returned; if prefix with &#x60;index_&#x60;, index price candlesticks will be returned.  Maximum of 2000 points are returned in one query. Be sure not to exceed the limit when specifying &#x60;from&#x60;, &#x60;to&#x60; and &#x60;interval&#x60;

### Example

```javascript
var GateApi = require('gate-api');

var apiInstance = new GateApi.FuturesApi();
var settle = 'btc'; // String | Settle currency
var contract = "BTC_USDT"; // String | Futures contract
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
apiInstance.listFuturesCandlesticks(settle, contract, opts, callback);
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **String**| Settle currency | [default to &#39;btc&#39;]
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

## listFuturesTickers

> [FuturesTicker] listFuturesTickers(settle, opts)

List futures tickers

### Example

```javascript
var GateApi = require('gate-api');

var apiInstance = new GateApi.FuturesApi();
var settle = 'btc'; // String | Settle currency
var opts = {
  'contract': "BTC_USDT" // String | Futures contract, return related data only if specified
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listFuturesTickers(settle, opts, callback);
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **String**| Settle currency | [default to &#39;btc&#39;]
 **contract** | **String**| Futures contract, return related data only if specified | [optional] 

### Return type

[**[FuturesTicker]**](FuturesTicker.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listFuturesFundingRateHistory

> [FundingRateRecord] listFuturesFundingRateHistory(settle, contract, opts)

Funding rate history

### Example

```javascript
var GateApi = require('gate-api');

var apiInstance = new GateApi.FuturesApi();
var settle = 'btc'; // String | Settle currency
var contract = "BTC_USDT"; // String | Futures contract
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
apiInstance.listFuturesFundingRateHistory(settle, contract, opts, callback);
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **String**| Settle currency | [default to &#39;btc&#39;]
 **contract** | **String**| Futures contract | 
 **limit** | **Number**| Maximum number of records returned in one list | [optional] [default to 100]

### Return type

[**[FundingRateRecord]**](FundingRateRecord.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listFuturesInsuranceLedger

> [InsuranceRecord] listFuturesInsuranceLedger(settle, opts)

Futures insurance balance history

### Example

```javascript
var GateApi = require('gate-api');

var apiInstance = new GateApi.FuturesApi();
var settle = 'btc'; // String | Settle currency
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
apiInstance.listFuturesInsuranceLedger(settle, opts, callback);
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **String**| Settle currency | [default to &#39;btc&#39;]
 **limit** | **Number**| Maximum number of records returned in one list | [optional] [default to 100]

### Return type

[**[InsuranceRecord]**](InsuranceRecord.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listContractStats

> [ContractStat] listContractStats(settle, contract, opts)

Futures stats

### Example

```javascript
var GateApi = require('gate-api');

var apiInstance = new GateApi.FuturesApi();
var settle = 'btc'; // String | Settle currency
var contract = "BTC_USDT"; // String | Futures contract
var opts = {
  'from': 1604561000, // Number | Start timestamp
  'interval': '5m', // String | 
  'limit': 30 // Number | 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listContractStats(settle, contract, opts, callback);
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **String**| Settle currency | [default to &#39;btc&#39;]
 **contract** | **String**| Futures contract | 
 **from** | **Number**| Start timestamp | [optional] 
 **interval** | **String**|  | [optional] [default to &#39;5m&#39;]
 **limit** | **Number**|  | [optional] [default to 30]

### Return type

[**[ContractStat]**](ContractStat.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listLiquidatedOrders

> [FuturesLiquidate] listLiquidatedOrders(settle, opts)

Retrieve liquidation history

Interval between &#x60;from&#x60; and &#x60;to&#x60; cannot exceeds 3600. Some private fields will not be returned in public endpoints. Refer to field description for detail.

### Example

```javascript
var GateApi = require('gate-api');

var apiInstance = new GateApi.FuturesApi();
var settle = 'btc'; // String | Settle currency
var opts = {
  'contract': "BTC_USDT", // String | Futures contract, return related data only if specified
  'from': 1547706332, // Number | Start timestamp
  'to': 1547706332, // Number | End timestamp
  'limit': 100 // Number | Maximum number of records returned in one list
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listLiquidatedOrders(settle, opts, callback);
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **String**| Settle currency | [default to &#39;btc&#39;]
 **contract** | **String**| Futures contract, return related data only if specified | [optional] 
 **from** | **Number**| Start timestamp | [optional] 
 **to** | **Number**| End timestamp | [optional] 
 **limit** | **Number**| Maximum number of records returned in one list | [optional] [default to 100]

### Return type

[**[FuturesLiquidate]**](FuturesLiquidate.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
