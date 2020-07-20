# GateApi.WalletApi

All URIs are relative to *https://api.gateio.ws/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDepositAddress**](WalletApi.md#getDepositAddress) | **GET** /wallet/deposit_address | Generate currency deposit address
[**listDeposits**](WalletApi.md#listDeposits) | **GET** /wallet/deposits | Retrieve deposit records
[**listSubAccountTransfers**](WalletApi.md#listSubAccountTransfers) | **GET** /wallet/sub_account_transfers | Transfer records between main and sub accounts
[**listWithdrawals**](WalletApi.md#listWithdrawals) | **GET** /wallet/withdrawals | Retrieve withdrawal records
[**transfer**](WalletApi.md#transfer) | **POST** /wallet/transfers | Transfer between accounts
[**transferWithSubAccount**](WalletApi.md#transferWithSubAccount) | **POST** /wallet/sub_account_transfers | Transfer between main and sub accounts


## getDepositAddress

> DepositAddress getDepositAddress(currency)

Generate currency deposit address

### Example

```javascript
var GateApi = require('gate-api');

var defaultClient = GateApi.ApiClient.instance;
// Configure Gate APIv4 key authentication: apiv4
var apiv4 = defaultClient.authentications['apiv4'];
apiv4.key = 'YOUR_API_KEY'
apiv4.secret = 'YOUR_API_SECRET'

var apiInstance = new GateApi.WalletApi();
var currency = "currency_example"; // String | Currency name
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDepositAddress(currency, callback);
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **String**| Currency name | 

### Return type

[**DepositAddress**](DepositAddress.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listDeposits

> [LedgerRecord] listDeposits(opts)

Retrieve deposit records

Record time range cannot exceed 30 days

### Example

```javascript
var GateApi = require('gate-api');

var defaultClient = GateApi.ApiClient.instance;
// Configure Gate APIv4 key authentication: apiv4
var apiv4 = defaultClient.authentications['apiv4'];
apiv4.key = 'YOUR_API_KEY'
apiv4.secret = 'YOUR_API_SECRET'

var apiInstance = new GateApi.WalletApi();
var opts = {
  'currency': BTC, // String | Filter by currency. Return all currency records if not specified
  'from': 789, // Number | Time range beginning, default to 7 days before current time
  'to': 789, // Number | Time range ending, default to current time
  'limit': 100, // Number | Maximum number of records returned in one list
  'offset': 0 // Number | List offset, starting from 0
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listDeposits(opts, callback);
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **String**| Filter by currency. Return all currency records if not specified | [optional] 
 **from** | **Number**| Time range beginning, default to 7 days before current time | [optional] 
 **to** | **Number**| Time range ending, default to current time | [optional] 
 **limit** | **Number**| Maximum number of records returned in one list | [optional] [default to 100]
 **offset** | **Number**| List offset, starting from 0 | [optional] [default to 0]

### Return type

[**[LedgerRecord]**](LedgerRecord.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listSubAccountTransfers

> [SubAccountTransfer] listSubAccountTransfers(opts)

Transfer records between main and sub accounts

Record time range cannot exceed 30 days  &gt; Note: only records after 2020-04-10 can be retrieved

### Example

```javascript
var GateApi = require('gate-api');

var defaultClient = GateApi.ApiClient.instance;
// Configure Gate APIv4 key authentication: apiv4
var apiv4 = defaultClient.authentications['apiv4'];
apiv4.key = 'YOUR_API_KEY'
apiv4.secret = 'YOUR_API_SECRET'

var apiInstance = new GateApi.WalletApi();
var opts = {
  'subUid': 10003, // String | Sub account user ID. Return records related to all sub accounts if not specified
  'from': 789, // Number | Time range beginning, default to 7 days before current time
  'to': 789, // Number | Time range ending, default to current time
  'limit': 100, // Number | Maximum number of records returned in one list
  'offset': 0 // Number | List offset, starting from 0
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listSubAccountTransfers(opts, callback);
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subUid** | **String**| Sub account user ID. Return records related to all sub accounts if not specified | [optional] 
 **from** | **Number**| Time range beginning, default to 7 days before current time | [optional] 
 **to** | **Number**| Time range ending, default to current time | [optional] 
 **limit** | **Number**| Maximum number of records returned in one list | [optional] [default to 100]
 **offset** | **Number**| List offset, starting from 0 | [optional] [default to 0]

### Return type

[**[SubAccountTransfer]**](SubAccountTransfer.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listWithdrawals

> [LedgerRecord] listWithdrawals(opts)

Retrieve withdrawal records

Record time range cannot exceed 30 days

### Example

```javascript
var GateApi = require('gate-api');

var defaultClient = GateApi.ApiClient.instance;
// Configure Gate APIv4 key authentication: apiv4
var apiv4 = defaultClient.authentications['apiv4'];
apiv4.key = 'YOUR_API_KEY'
apiv4.secret = 'YOUR_API_SECRET'

var apiInstance = new GateApi.WalletApi();
var opts = {
  'currency': BTC, // String | Filter by currency. Return all currency records if not specified
  'from': 789, // Number | Time range beginning, default to 7 days before current time
  'to': 789, // Number | Time range ending, default to current time
  'limit': 100, // Number | Maximum number of records returned in one list
  'offset': 0 // Number | List offset, starting from 0
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listWithdrawals(opts, callback);
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **String**| Filter by currency. Return all currency records if not specified | [optional] 
 **from** | **Number**| Time range beginning, default to 7 days before current time | [optional] 
 **to** | **Number**| Time range ending, default to current time | [optional] 
 **limit** | **Number**| Maximum number of records returned in one list | [optional] [default to 100]
 **offset** | **Number**| List offset, starting from 0 | [optional] [default to 0]

### Return type

[**[LedgerRecord]**](LedgerRecord.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## transfer

> transfer(transfer)

Transfer between accounts

Transfer between different accounts. Currently support transfers between the following:  1. spot - margin 2. spot - futures(perpetual) 2. spot - delivery

### Example

```javascript
var GateApi = require('gate-api');

var defaultClient = GateApi.ApiClient.instance;
// Configure Gate APIv4 key authentication: apiv4
var apiv4 = defaultClient.authentications['apiv4'];
apiv4.key = 'YOUR_API_KEY'
apiv4.secret = 'YOUR_API_SECRET'

var apiInstance = new GateApi.WalletApi();
var transfer = {"currency":"BTC","from":"spot","to":"margin","amount":"1","currency_pair":"BTC_USDT"}; // Transfer | 
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

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

## transferWithSubAccount

> transferWithSubAccount(subAccountTransfer)

Transfer between main and sub accounts

### Example

```javascript
var GateApi = require('gate-api');

var defaultClient = GateApi.ApiClient.instance;
// Configure Gate APIv4 key authentication: apiv4
var apiv4 = defaultClient.authentications['apiv4'];
apiv4.key = 'YOUR_API_KEY'
apiv4.secret = 'YOUR_API_SECRET'

var apiInstance = new GateApi.WalletApi();
var subAccountTransfer = {"uid":"10001","timest":"1592809000","source":"web","currency":"BTC","sub_account":"10002","direction":"to","amount":"1"}; // SubAccountTransfer | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.transferWithSubAccount(subAccountTransfer, callback);
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subAccountTransfer** | [**SubAccountTransfer**](SubAccountTransfer.md)|  | 

### Return type

null (empty response body)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined
