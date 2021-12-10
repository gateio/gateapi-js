# GateApi.WalletApi

All URIs are relative to *https://api.gateio.ws/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listCurrencyChains**](WalletApi.md#listCurrencyChains) | **GET** /wallet/currency_chains | List chains supported for specified currency


## listCurrencyChains

> [CurrencyChain] listCurrencyChains(currency)

List chains supported for specified currency

### Example

```javascript
var GateApi = require('gate-api');

var apiInstance = new GateApi.WalletApi();
var currency = "GT"; // String | Currency name
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listCurrencyChains(currency, callback);
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **String**| Currency name | 

### Return type

[**[CurrencyChain]**](CurrencyChain.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
