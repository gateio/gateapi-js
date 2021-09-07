# GateApi.MarginApi

All URIs are relative to *https://api.gateio.ws/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listMarginCurrencyPairs**](MarginApi.md#listMarginCurrencyPairs) | **GET** /margin/currency_pairs | List all supported currency pairs supported in margin trading
[**getMarginCurrencyPair**](MarginApi.md#getMarginCurrencyPair) | **GET** /margin/currency_pairs/{currency_pair} | Query one single margin currency pair
[**listFundingBook**](MarginApi.md#listFundingBook) | **GET** /margin/funding_book | Order book of lending loans
[**listCrossMarginCurrencies**](MarginApi.md#listCrossMarginCurrencies) | **GET** /margin/cross/currencies | Currencies supported by cross margin.
[**getCrossMarginCurrency**](MarginApi.md#getCrossMarginCurrency) | **GET** /margin/cross/currencies/{currency} | Retrieve detail of one single currency supported by cross margin


## listMarginCurrencyPairs

> [MarginCurrencyPair] listMarginCurrencyPairs()

List all supported currency pairs supported in margin trading

### Example

```javascript
var GateApi = require('gate-api');

var apiInstance = new GateApi.MarginApi();
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listMarginCurrencyPairs(callback);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[MarginCurrencyPair]**](MarginCurrencyPair.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getMarginCurrencyPair

> MarginCurrencyPair getMarginCurrencyPair(currencyPair)

Query one single margin currency pair

### Example

```javascript
var GateApi = require('gate-api');

var apiInstance = new GateApi.MarginApi();
var currencyPair = "BTC_USDT"; // String | Margin currency pair
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMarginCurrencyPair(currencyPair, callback);
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyPair** | **String**| Margin currency pair | 

### Return type

[**MarginCurrencyPair**](MarginCurrencyPair.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listFundingBook

> [FundingBookItem] listFundingBook(currency)

Order book of lending loans

### Example

```javascript
var GateApi = require('gate-api');

var apiInstance = new GateApi.MarginApi();
var currency = "BTC"; // String | Retrieve data of the specified currency
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listFundingBook(currency, callback);
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **String**| Retrieve data of the specified currency | 

### Return type

[**[FundingBookItem]**](FundingBookItem.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listCrossMarginCurrencies

> [CrossMarginCurrency] listCrossMarginCurrencies()

Currencies supported by cross margin.

### Example

```javascript
var GateApi = require('gate-api');

var apiInstance = new GateApi.MarginApi();
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listCrossMarginCurrencies(callback);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[CrossMarginCurrency]**](CrossMarginCurrency.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getCrossMarginCurrency

> CrossMarginCurrency getCrossMarginCurrency(currency)

Retrieve detail of one single currency supported by cross margin

### Example

```javascript
var GateApi = require('gate-api');

var apiInstance = new GateApi.MarginApi();
var currency = "BTC"; // String | Currency name
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCrossMarginCurrency(currency, callback);
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **String**| Currency name | 

### Return type

[**CrossMarginCurrency**](CrossMarginCurrency.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
