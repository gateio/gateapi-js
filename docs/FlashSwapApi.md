# GateApi.FlashSwapApi

All URIs are relative to *https://api.gateio.ws/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listFlashSwapCurrencies**](FlashSwapApi.md#listFlashSwapCurrencies) | **GET** /flash_swap/currencies | List all supported currencies in flash swap


## listFlashSwapCurrencies

> [FlashSwapCurrency] listFlashSwapCurrencies()

List all supported currencies in flash swap

### Example

```javascript
var GateApi = require('gate-api');

var apiInstance = new GateApi.FlashSwapApi();
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listFlashSwapCurrencies(callback);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[FlashSwapCurrency]**](FlashSwapCurrency.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
