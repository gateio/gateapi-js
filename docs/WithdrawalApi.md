# GateApi.WithdrawalApi

All URIs are relative to *https://api.gateio.ws/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**withdraw**](WithdrawalApi.md#withdraw) | **POST** /withdrawals | Withdraw


## withdraw

> LedgerRecord withdraw(ledgerRecord)

Withdraw

### Example

```javascript
var GateApi = require('gate-api');

var defaultClient = GateApi.ApiClient.instance;
// Configure Gate APIv4 key authentication: apiv4
var apiv4 = defaultClient.authentications['apiv4'];
apiv4.key = 'YOUR_API_KEY'
apiv4.secret = 'YOUR_API_SECRET'

var apiInstance = new GateApi.WithdrawalApi();
var ledgerRecord = {"id":"210496","timestamp":"1542000000","currency":"ETH","address":"1HkxtBAMrA3tP5ENnYY2CZortjZvFDH5Cs","txid":"128988928203223323290","amount":"222.61","memo":"","status":"DONE"}; // LedgerRecord | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.withdraw(ledgerRecord, callback);
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ledgerRecord** | [**LedgerRecord**](LedgerRecord.md)|  | 

### Return type

[**LedgerRecord**](LedgerRecord.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
