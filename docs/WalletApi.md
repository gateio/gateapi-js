# GateApi.WalletApi

All URIs are relative to *https://api.gateio.ws/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**transfer**](WalletApi.md#transfer) | **POST** /wallet/transfers | Transfer between accounts


<a name="transfer"></a>
# **transfer**
> transfer(transfer)

Transfer between accounts

Transfer between different accounts. Currently support transfers between the following:  1. spot - margin

### Example
```javascript
var GateApi = require('gate-api');
var client = GateApi.ApiClient.instance;
client.key = "YOUR API KEY";
client.secret = "YOUR API SECRET";
// uncomment the next line if you are using the API with other host
// client.basePath = "https://some-other-hosts";

var apiInstance = new GateApi.WalletApi();
var transfer = new GateApi.Transfer(); // Transfer | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.transfer(transfer, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transfer** | [**Transfer**](Transfer.md)|  | 

### Return type

null (empty response body)

### Authorization

Authentication with API key and secret is required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

