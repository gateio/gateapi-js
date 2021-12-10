# GateApi.OptionsApi

All URIs are relative to *https://api.gateio.ws/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listOptionsUnderlyings**](OptionsApi.md#listOptionsUnderlyings) | **GET** /options/underlyings | List all underlyings
[**listOptionsExpirations**](OptionsApi.md#listOptionsExpirations) | **GET** /options/expirations | List all expiration times
[**listOptionsContracts**](OptionsApi.md#listOptionsContracts) | **GET** /options/contracts | List all the contracts with specified underlying and expiration time
[**getOptionsContract**](OptionsApi.md#getOptionsContract) | **GET** /options/contracts/{contract} | Query specified contract detail
[**listOptionsSettlements**](OptionsApi.md#listOptionsSettlements) | **GET** /options/settlements | List settlement history
[**getOptionsSettlement**](OptionsApi.md#getOptionsSettlement) | **GET** /options/settlements/{contract} | Get specified contract&#39;s settlement
[**listOptionsOrderBook**](OptionsApi.md#listOptionsOrderBook) | **GET** /options/order_book | Futures order book
[**listOptionsTickers**](OptionsApi.md#listOptionsTickers) | **GET** /options/tickers | List tickers of options contracts
[**listOptionsUnderlyingTickers**](OptionsApi.md#listOptionsUnderlyingTickers) | **GET** /options/underlying/tickers/{underlying} | Get underlying ticker
[**listOptionsCandlesticks**](OptionsApi.md#listOptionsCandlesticks) | **GET** /options/candlesticks | Get futures candlesticks
[**listOptionsUnderlyingCandlesticks**](OptionsApi.md#listOptionsUnderlyingCandlesticks) | **GET** /options/underlying/candlesticks | Mark price candlesticks of an underlying
[**listOptionsTrades**](OptionsApi.md#listOptionsTrades) | **GET** /options/trades | Options trade history


## listOptionsUnderlyings

> [OptionsUnderlying] listOptionsUnderlyings()

List all underlyings

### Example

```javascript
var GateApi = require('gate-api');

var apiInstance = new GateApi.OptionsApi();
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listOptionsUnderlyings(callback);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[OptionsUnderlying]**](OptionsUnderlying.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listOptionsExpirations

> [Number] listOptionsExpirations(underlying)

List all expiration times

### Example

```javascript
var GateApi = require('gate-api');

var apiInstance = new GateApi.OptionsApi();
var underlying = "BTC_USDT"; // String | Underlying
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listOptionsExpirations(underlying, callback);
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **underlying** | **String**| Underlying | 

### Return type

**[Number]**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listOptionsContracts

> [OptionsContract] listOptionsContracts(underlying, opts)

List all the contracts with specified underlying and expiration time

### Example

```javascript
var GateApi = require('gate-api');

var apiInstance = new GateApi.OptionsApi();
var underlying = "BTC_USDT"; // String | Underlying
var opts = {
  'expiration': 1636588800 // Number | Unix timestamp of the expiration time
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listOptionsContracts(underlying, opts, callback);
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **underlying** | **String**| Underlying | 
 **expiration** | **Number**| Unix timestamp of the expiration time | [optional] 

### Return type

[**[OptionsContract]**](OptionsContract.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getOptionsContract

> OptionsContract getOptionsContract(contract)

Query specified contract detail

### Example

```javascript
var GateApi = require('gate-api');

var apiInstance = new GateApi.OptionsApi();
var contract = "BTC_USDT-20211130-65000-C"; // String | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOptionsContract(contract, callback);
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contract** | **String**|  | 

### Return type

[**OptionsContract**](OptionsContract.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listOptionsSettlements

> [OptionsSettlement] listOptionsSettlements(underlying, opts)

List settlement history

### Example

```javascript
var GateApi = require('gate-api');

var apiInstance = new GateApi.OptionsApi();
var underlying = "BTC_USDT"; // String | Underlying
var opts = {
  'limit': 100, // Number | Maximum number of records to be returned in a single list
  'offset': 0, // Number | List offset, starting from 0
  'from': 1547706332, // Number | Start timestamp
  'to': 1547706332 // Number | End timestamp
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listOptionsSettlements(underlying, opts, callback);
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **underlying** | **String**| Underlying | 
 **limit** | **Number**| Maximum number of records to be returned in a single list | [optional] [default to 100]
 **offset** | **Number**| List offset, starting from 0 | [optional] [default to 0]
 **from** | **Number**| Start timestamp | [optional] 
 **to** | **Number**| End timestamp | [optional] 

### Return type

[**[OptionsSettlement]**](OptionsSettlement.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getOptionsSettlement

> OptionsSettlement getOptionsSettlement(contract, underlying, at)

Get specified contract&#39;s settlement

### Example

```javascript
var GateApi = require('gate-api');

var apiInstance = new GateApi.OptionsApi();
var contract = "BTC_USDT-20211130-65000-C"; // String | 
var underlying = "BTC_USDT"; // String | Underlying
var at = 789; // Number | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOptionsSettlement(contract, underlying, at, callback);
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contract** | **String**|  | 
 **underlying** | **String**| Underlying | 
 **at** | **Number**|  | 

### Return type

[**OptionsSettlement**](OptionsSettlement.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listOptionsOrderBook

> FuturesOrderBook listOptionsOrderBook(contract, opts)

Futures order book

Bids will be sorted by price from high to low, while asks sorted reversely

### Example

```javascript
var GateApi = require('gate-api');

var apiInstance = new GateApi.OptionsApi();
var contract = "BTC_USDT"; // String | Futures contract
var opts = {
  'interval': '0', // String | Order depth. 0 means no aggregation is applied. default to 0
  'limit': 10, // Number | Maximum number of order depth data in asks or bids
  'withId': false // Boolean | Whether the order book update ID will be returned. This ID increases by 1 on every order book update
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listOptionsOrderBook(contract, opts, callback);
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contract** | **String**| Futures contract | 
 **interval** | **String**| Order depth. 0 means no aggregation is applied. default to 0 | [optional] [default to &#39;0&#39;]
 **limit** | **Number**| Maximum number of order depth data in asks or bids | [optional] [default to 10]
 **withId** | **Boolean**| Whether the order book update ID will be returned. This ID increases by 1 on every order book update | [optional] [default to false]

### Return type

[**FuturesOrderBook**](FuturesOrderBook.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listOptionsTickers

> [OptionsTicker] listOptionsTickers(underlying)

List tickers of options contracts

### Example

```javascript
var GateApi = require('gate-api');

var apiInstance = new GateApi.OptionsApi();
var underlying = "BTC_USDT"; // String | Underlying
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listOptionsTickers(underlying, callback);
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **underlying** | **String**| Underlying | 

### Return type

[**[OptionsTicker]**](OptionsTicker.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listOptionsUnderlyingTickers

> OptionsUnderlyingTicker listOptionsUnderlyingTickers(underlying)

Get underlying ticker

### Example

```javascript
var GateApi = require('gate-api');

var apiInstance = new GateApi.OptionsApi();
var underlying = "BTC_USDT"; // String | Underlying
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listOptionsUnderlyingTickers(underlying, callback);
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **underlying** | **String**| Underlying | 

### Return type

[**OptionsUnderlyingTicker**](OptionsUnderlyingTicker.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listOptionsCandlesticks

> [FuturesCandlestick] listOptionsCandlesticks(contract, opts)

Get futures candlesticks

### Example

```javascript
var GateApi = require('gate-api');

var apiInstance = new GateApi.OptionsApi();
var contract = "BTC_USDT"; // String | Futures contract
var opts = {
  'limit': 100, // Number | Maximum number of records to be returned in a single list
  'from': 1547706332, // Number | Start timestamp
  'to': 1547706332, // Number | End timestamp
  'interval': '5m' // String | Interval time between data points
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listOptionsCandlesticks(contract, opts, callback);
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contract** | **String**| Futures contract | 
 **limit** | **Number**| Maximum number of records to be returned in a single list | [optional] [default to 100]
 **from** | **Number**| Start timestamp | [optional] 
 **to** | **Number**| End timestamp | [optional] 
 **interval** | **String**| Interval time between data points | [optional] [default to &#39;5m&#39;]

### Return type

[**[FuturesCandlestick]**](FuturesCandlestick.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listOptionsUnderlyingCandlesticks

> [FuturesCandlestick] listOptionsUnderlyingCandlesticks(underlying, opts)

Mark price candlesticks of an underlying

### Example

```javascript
var GateApi = require('gate-api');

var apiInstance = new GateApi.OptionsApi();
var underlying = "BTC_USDT"; // String | Underlying
var opts = {
  'limit': 100, // Number | Maximum number of records to be returned in a single list
  'from': 1547706332, // Number | Start timestamp
  'to': 1547706332, // Number | End timestamp
  'interval': '5m' // String | Interval time between data points
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listOptionsUnderlyingCandlesticks(underlying, opts, callback);
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **underlying** | **String**| Underlying | 
 **limit** | **Number**| Maximum number of records to be returned in a single list | [optional] [default to 100]
 **from** | **Number**| Start timestamp | [optional] 
 **to** | **Number**| End timestamp | [optional] 
 **interval** | **String**| Interval time between data points | [optional] [default to &#39;5m&#39;]

### Return type

[**[FuturesCandlestick]**](FuturesCandlestick.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listOptionsTrades

> [FuturesTrade] listOptionsTrades(opts)

Options trade history

### Example

```javascript
var GateApi = require('gate-api');

var apiInstance = new GateApi.OptionsApi();
var opts = {
  'contract': "BTC_USDT-20210916-5000-C", // String | Contract name
  'type': "1546935600", // String | `C` is call, while `P` is put
  'limit': 100, // Number | Maximum number of records to be returned in a single list
  'offset': 0, // Number | List offset, starting from 0
  'from': 1547706332, // Number | Start timestamp
  'to': 1547706332 // Number | End timestamp
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listOptionsTrades(opts, callback);
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contract** | **String**| Contract name | [optional] 
 **type** | **String**| &#x60;C&#x60; is call, while &#x60;P&#x60; is put | [optional] 
 **limit** | **Number**| Maximum number of records to be returned in a single list | [optional] [default to 100]
 **offset** | **Number**| List offset, starting from 0 | [optional] [default to 0]
 **from** | **Number**| Start timestamp | [optional] 
 **to** | **Number**| End timestamp | [optional] 

### Return type

[**[FuturesTrade]**](FuturesTrade.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
