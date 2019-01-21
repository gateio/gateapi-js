# GateApi.FuturesApi

All URIs are relative to *https://fx-api.gateio.io/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelOrder**](FuturesApi.md#cancelOrder) | **DELETE** /futures/orders/{order_id} | Cancel a single order
[**cancelOrders**](FuturesApi.md#cancelOrders) | **DELETE** /futures/orders | Cancel all &#x60;open&#x60; orders matched
[**createOrder**](FuturesApi.md#createOrder) | **POST** /futures/orders | Create a futures order
[**getFuturesContract**](FuturesApi.md#getFuturesContract) | **GET** /futures/contracts/{contract} | Get a single contract
[**getMyTrades**](FuturesApi.md#getMyTrades) | **GET** /futures/my_trades | List personal trading history
[**getOrder**](FuturesApi.md#getOrder) | **GET** /futures/orders/{order_id} | Get a single order
[**getPosition**](FuturesApi.md#getPosition) | **GET** /futures/positions/{contract} | Get single position
[**listFuturesAccountBook**](FuturesApi.md#listFuturesAccountBook) | **GET** /futures/account_book | Query account book
[**listFuturesAccounts**](FuturesApi.md#listFuturesAccounts) | **GET** /futures/accounts | Query futures account
[**listFuturesCandlesticks**](FuturesApi.md#listFuturesCandlesticks) | **GET** /futures/candlesticks | Get futures candlesticks
[**listFuturesContracts**](FuturesApi.md#listFuturesContracts) | **GET** /futures/contracts | List all futures contracts
[**listFuturesFundingRateHistory**](FuturesApi.md#listFuturesFundingRateHistory) | **GET** /futures/funding_rate | Funding rate history
[**listFuturesInsuranceLedger**](FuturesApi.md#listFuturesInsuranceLedger) | **GET** /futures/insurance | Futures insurance balance history
[**listFuturesOrderBook**](FuturesApi.md#listFuturesOrderBook) | **GET** /futures/order_book | Futures order book
[**listFuturesTickers**](FuturesApi.md#listFuturesTickers) | **GET** /futures/tickers | List futures tickers
[**listFuturesTrades**](FuturesApi.md#listFuturesTrades) | **GET** /futures/trades | Futures trading history
[**listOrders**](FuturesApi.md#listOrders) | **GET** /futures/orders | List futures orders
[**listPositionClose**](FuturesApi.md#listPositionClose) | **GET** /futures/position_close | List position close history
[**listPositions**](FuturesApi.md#listPositions) | **GET** /futures/positions | List all positions of a user
[**updatePositionLeverage**](FuturesApi.md#updatePositionLeverage) | **POST** /futures/positions/{contract}/leverage | Update position leverage
[**updatePositionMargin**](FuturesApi.md#updatePositionMargin) | **POST** /futures/positions/{contract}/margin | Update position margin
[**updatePositionRiskLimit**](FuturesApi.md#updatePositionRiskLimit) | **POST** /futures/positions/{contract}/risk_limit | Update position risk limit


<a name="cancelOrder"></a>
# **cancelOrder**
> FuturesOrder cancelOrder(orderId)

Cancel a single order

### Example
```javascript
var GateApi = require('gate-api');
var client = GateApi.ApiClient.instance;
client.key = "YOUR API KEY";
client.secret = "YOUR API SECRET";
// uncomment the next line if you are using the API with other host
// client.basePath = "https://some-other-hosts";

var apiInstance = new GateApi.FuturesApi();
var orderId = "12345"; // String | ID returned on order successfully being created
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cancelOrder(orderId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **String**| ID returned on order successfully being created | 

### Return type

[**FuturesOrder**](FuturesOrder.md)

### Authorization

Authentication with API key and secret is required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="cancelOrders"></a>
# **cancelOrders**
> [FuturesOrder] cancelOrders(contract, opts)

Cancel all &#x60;open&#x60; orders matched

### Example
```javascript
var GateApi = require('gate-api');
var client = GateApi.ApiClient.instance;
client.key = "YOUR API KEY";
client.secret = "YOUR API SECRET";
// uncomment the next line if you are using the API with other host
// client.basePath = "https://some-other-hosts";

var apiInstance = new GateApi.FuturesApi();
var contract = "BTC_USD"; // String | Futures contract
var opts = {
  'side': "ask" // String | All bids or asks. Both included in not specified
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cancelOrders(contract, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contract** | **String**| Futures contract | 
 **side** | **String**| All bids or asks. Both included in not specified | [optional] 

### Return type

[**[FuturesOrder]**](FuturesOrder.md)

### Authorization

Authentication with API key and secret is required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="createOrder"></a>
# **createOrder**
> FuturesOrder createOrder(futuresOrder)

Create a futures order

### Example
```javascript
var GateApi = require('gate-api');
var client = GateApi.ApiClient.instance;
client.key = "YOUR API KEY";
client.secret = "YOUR API SECRET";
// uncomment the next line if you are using the API with other host
// client.basePath = "https://some-other-hosts";

var apiInstance = new GateApi.FuturesApi();
var futuresOrder = new GateApi.FuturesOrder(); // FuturesOrder | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createOrder(futuresOrder, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **futuresOrder** | [**FuturesOrder**](FuturesOrder.md)|  | 

### Return type

[**FuturesOrder**](FuturesOrder.md)

### Authorization

Authentication with API key and secret is required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFuturesContract"></a>
# **getFuturesContract**
> Contract getFuturesContract(contract)

Get a single contract

### Example
```javascript
var GateApi = require('gate-api');

var apiInstance = new GateApi.FuturesApi();
var contract = "BTC_USD"; // String | Futures contract
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFuturesContract(contract, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contract** | **String**| Futures contract | 

### Return type

[**Contract**](Contract.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getMyTrades"></a>
# **getMyTrades**
> [MyFuturesTrade] getMyTrades(opts)

List personal trading history

### Example
```javascript
var GateApi = require('gate-api');
var client = GateApi.ApiClient.instance;
client.key = "YOUR API KEY";
client.secret = "YOUR API SECRET";
// uncomment the next line if you are using the API with other host
// client.basePath = "https://some-other-hosts";

var apiInstance = new GateApi.FuturesApi();
var opts = {
  'contract': "BTC_USD", // String | Futures contract, return related data only if specified
  'order': 12345, // Number | Futures order ID, return related data only if specified
  'limit': 100, // Number | Maximum number of record returned in one list
  'lastId': "12345" // String | Specify list staring point using the last record of `id` in previous list-query results
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMyTrades(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contract** | **String**| Futures contract, return related data only if specified | [optional] 
 **order** | **Number**| Futures order ID, return related data only if specified | [optional] 
 **limit** | **Number**| Maximum number of record returned in one list | [optional] [default to 100]
 **lastId** | **String**| Specify list staring point using the last record of &#x60;id&#x60; in previous list-query results | [optional] 

### Return type

[**[MyFuturesTrade]**](MyFuturesTrade.md)

### Authorization

Authentication with API key and secret is required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrder"></a>
# **getOrder**
> FuturesOrder getOrder(orderId)

Get a single order

### Example
```javascript
var GateApi = require('gate-api');
var client = GateApi.ApiClient.instance;
client.key = "YOUR API KEY";
client.secret = "YOUR API SECRET";
// uncomment the next line if you are using the API with other host
// client.basePath = "https://some-other-hosts";

var apiInstance = new GateApi.FuturesApi();
var orderId = "12345"; // String | ID returned on order successfully being created
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrder(orderId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **String**| ID returned on order successfully being created | 

### Return type

[**FuturesOrder**](FuturesOrder.md)

### Authorization

Authentication with API key and secret is required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPosition"></a>
# **getPosition**
> Position getPosition(contract)

Get single position

### Example
```javascript
var GateApi = require('gate-api');
var client = GateApi.ApiClient.instance;
client.key = "YOUR API KEY";
client.secret = "YOUR API SECRET";
// uncomment the next line if you are using the API with other host
// client.basePath = "https://some-other-hosts";

var apiInstance = new GateApi.FuturesApi();
var contract = "BTC_USD"; // String | Futures contract
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPosition(contract, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contract** | **String**| Futures contract | 

### Return type

[**Position**](Position.md)

### Authorization

Authentication with API key and secret is required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listFuturesAccountBook"></a>
# **listFuturesAccountBook**
> [FuturesAccountBook] listFuturesAccountBook(opts)

Query account book

### Example
```javascript
var GateApi = require('gate-api');
var client = GateApi.ApiClient.instance;
client.key = "YOUR API KEY";
client.secret = "YOUR API SECRET";
// uncomment the next line if you are using the API with other host
// client.basePath = "https://some-other-hosts";

var apiInstance = new GateApi.FuturesApi();
var opts = {
  'limit': 100, // Number | Maximum number of record returned in one list
  'from': 1547706332, // Number | Start timestamp
  'to': 1547706332, // Number | End timestamp
  'type': "type_example" // String | Changing Type  - dnw: Deposit & Withdraw - pnl: Profit & Loss by reducing position - fee: Trading fee - refr: Referrer rebate - fund: Funding
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listFuturesAccountBook(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| Maximum number of record returned in one list | [optional] [default to 100]
 **from** | **Number**| Start timestamp | [optional] 
 **to** | **Number**| End timestamp | [optional] 
 **type** | **String**| Changing Type  - dnw: Deposit &amp; Withdraw - pnl: Profit &amp; Loss by reducing position - fee: Trading fee - refr: Referrer rebate - fund: Funding | [optional] 

### Return type

[**[FuturesAccountBook]**](FuturesAccountBook.md)

### Authorization

Authentication with API key and secret is required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listFuturesAccounts"></a>
# **listFuturesAccounts**
> FuturesAccount listFuturesAccounts()

Query futures account

### Example
```javascript
var GateApi = require('gate-api');
var client = GateApi.ApiClient.instance;
client.key = "YOUR API KEY";
client.secret = "YOUR API SECRET";
// uncomment the next line if you are using the API with other host
// client.basePath = "https://some-other-hosts";

var apiInstance = new GateApi.FuturesApi();
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listFuturesAccounts(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**FuturesAccount**](FuturesAccount.md)

### Authorization

Authentication with API key and secret is required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listFuturesCandlesticks"></a>
# **listFuturesCandlesticks**
> [FuturesCandlestick] listFuturesCandlesticks(contract, opts)

Get futures candlesticks

Return specified contract candlesticks. If prefix &#x60;contract&#x60; with &#x60;mark_&#x60;, the contract&#39;s mark price candlesticks are returned; if prefix with &#x60;index_&#x60;, index price candlesticks will be returned.  Maximum of 2000 points are returned in one query. Be sure not to exceed the limit when specifying &#x60;from&#x60;, &#x60;to&#x60; and &#x60;interval&#x60;

### Example
```javascript
var GateApi = require('gate-api');

var apiInstance = new GateApi.FuturesApi();
var contract = "BTC_USD"; // String | Futures contract
var opts = {
  'from': 1546905600, // Number | Start time of candlesticks, formatted in Unix timestamp in seconds. Default to`to - 100 * interval` if not specified
  'to': 1546935600, // Number | End time of candlesticks, formatted in Unix timestamp in seconds. Default to current time
  'limit': 100, // Number | Maximum recent data points returned. `limit` is conflicted with `from` and `to`. If either `from` or `to` is specified, request will be rejected.
  'interval': "'5m'" // String | Interval time between data points
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listFuturesCandlesticks(contract, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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

<a name="listFuturesContracts"></a>
# **listFuturesContracts**
> [Contract] listFuturesContracts()

List all futures contracts

### Example
```javascript
var GateApi = require('gate-api');

var apiInstance = new GateApi.FuturesApi();
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listFuturesContracts(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Contract]**](Contract.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listFuturesFundingRateHistory"></a>
# **listFuturesFundingRateHistory**
> [FundingRateRecord] listFuturesFundingRateHistory(contract, opts)

Funding rate history

### Example
```javascript
var GateApi = require('gate-api');

var apiInstance = new GateApi.FuturesApi();
var contract = "BTC_USD"; // String | Futures contract
var opts = {
  'limit': 100 // Number | Maximum number of record returned in one list
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listFuturesFundingRateHistory(contract, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contract** | **String**| Futures contract | 
 **limit** | **Number**| Maximum number of record returned in one list | [optional] [default to 100]

### Return type

[**[FundingRateRecord]**](FundingRateRecord.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listFuturesInsuranceLedger"></a>
# **listFuturesInsuranceLedger**
> [InsuranceRecord] listFuturesInsuranceLedger(opts)

Futures insurance balance history

### Example
```javascript
var GateApi = require('gate-api');

var apiInstance = new GateApi.FuturesApi();
var opts = {
  'limit': 100 // Number | Maximum number of record returned in one list
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listFuturesInsuranceLedger(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| Maximum number of record returned in one list | [optional] [default to 100]

### Return type

[**[InsuranceRecord]**](InsuranceRecord.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listFuturesOrderBook"></a>
# **listFuturesOrderBook**
> FuturesOrderBook listFuturesOrderBook(contract, opts)

Futures order book

Bids will be sorted by price from high to low, while asks sorted reversely

### Example
```javascript
var GateApi = require('gate-api');

var apiInstance = new GateApi.FuturesApi();
var contract = "BTC_USD"; // String | Futures contract
var opts = {
  'interval': "'0'", // String | Order depth. 0 means no aggregation is applied. default to 0
  'limit': 10 // Number | Maximum number of order depth data in asks or bids
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listFuturesOrderBook(contract, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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

<a name="listFuturesTickers"></a>
# **listFuturesTickers**
> [FuturesTicker] listFuturesTickers(opts)

List futures tickers

### Example
```javascript
var GateApi = require('gate-api');

var apiInstance = new GateApi.FuturesApi();
var opts = {
  'contract': "BTC_USD" // String | Futures contract, return related data only if specified
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listFuturesTickers(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contract** | **String**| Futures contract, return related data only if specified | [optional] 

### Return type

[**[FuturesTicker]**](FuturesTicker.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listFuturesTrades"></a>
# **listFuturesTrades**
> [FuturesTrade] listFuturesTrades(contract, opts)

Futures trading history

### Example
```javascript
var GateApi = require('gate-api');

var apiInstance = new GateApi.FuturesApi();
var contract = "BTC_USD"; // String | Futures contract
var opts = {
  'limit': 100, // Number | Maximum number of record returned in one list
  'lastId': "12345" // String | Specify list staring point using the last record of `id` in previous list-query results
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listFuturesTrades(contract, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contract** | **String**| Futures contract | 
 **limit** | **Number**| Maximum number of record returned in one list | [optional] [default to 100]
 **lastId** | **String**| Specify list staring point using the last record of &#x60;id&#x60; in previous list-query results | [optional] 

### Return type

[**[FuturesTrade]**](FuturesTrade.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listOrders"></a>
# **listOrders**
> [FuturesOrder] listOrders(contract, status, opts)

List futures orders

### Example
```javascript
var GateApi = require('gate-api');
var client = GateApi.ApiClient.instance;
client.key = "YOUR API KEY";
client.secret = "YOUR API SECRET";
// uncomment the next line if you are using the API with other host
// client.basePath = "https://some-other-hosts";

var apiInstance = new GateApi.FuturesApi();
var contract = "BTC_USD"; // String | Futures contract
var status = "open"; // String | List orders based on status
var opts = {
  'limit': 100, // Number | Maximum number of record returned in one list
  'lastId': "12345" // String | Specify list staring point using the last record of `id` in previous list-query results
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listOrders(contract, status, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contract** | **String**| Futures contract | 
 **status** | **String**| List orders based on status | 
 **limit** | **Number**| Maximum number of record returned in one list | [optional] [default to 100]
 **lastId** | **String**| Specify list staring point using the last record of &#x60;id&#x60; in previous list-query results | [optional] 

### Return type

[**[FuturesOrder]**](FuturesOrder.md)

### Authorization

Authentication with API key and secret is required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listPositionClose"></a>
# **listPositionClose**
> [PositionClose] listPositionClose(opts)

List position close history

### Example
```javascript
var GateApi = require('gate-api');
var client = GateApi.ApiClient.instance;
client.key = "YOUR API KEY";
client.secret = "YOUR API SECRET";
// uncomment the next line if you are using the API with other host
// client.basePath = "https://some-other-hosts";

var apiInstance = new GateApi.FuturesApi();
var opts = {
  'contract': "BTC_USD", // String | Futures contract, return related data only if specified
  'limit': 100 // Number | Maximum number of record returned in one list
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listPositionClose(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contract** | **String**| Futures contract, return related data only if specified | [optional] 
 **limit** | **Number**| Maximum number of record returned in one list | [optional] [default to 100]

### Return type

[**[PositionClose]**](PositionClose.md)

### Authorization

Authentication with API key and secret is required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listPositions"></a>
# **listPositions**
> [Position] listPositions()

List all positions of a user

### Example
```javascript
var GateApi = require('gate-api');
var client = GateApi.ApiClient.instance;
client.key = "YOUR API KEY";
client.secret = "YOUR API SECRET";
// uncomment the next line if you are using the API with other host
// client.basePath = "https://some-other-hosts";

var apiInstance = new GateApi.FuturesApi();
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listPositions(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Position]**](Position.md)

### Authorization

Authentication with API key and secret is required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updatePositionLeverage"></a>
# **updatePositionLeverage**
> Position updatePositionLeverage(contract, leverage)

Update position leverage

### Example
```javascript
var GateApi = require('gate-api');
var client = GateApi.ApiClient.instance;
client.key = "YOUR API KEY";
client.secret = "YOUR API SECRET";
// uncomment the next line if you are using the API with other host
// client.basePath = "https://some-other-hosts";

var apiInstance = new GateApi.FuturesApi();
var contract = "BTC_USD"; // String | Futures contract
var leverage = "10"; // String | New position leverage
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updatePositionLeverage(contract, leverage, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contract** | **String**| Futures contract | 
 **leverage** | **String**| New position leverage | 

### Return type

[**Position**](Position.md)

### Authorization

Authentication with API key and secret is required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updatePositionMargin"></a>
# **updatePositionMargin**
> Position updatePositionMargin(contract, change)

Update position margin

### Example
```javascript
var GateApi = require('gate-api');
var client = GateApi.ApiClient.instance;
client.key = "YOUR API KEY";
client.secret = "YOUR API SECRET";
// uncomment the next line if you are using the API with other host
// client.basePath = "https://some-other-hosts";

var apiInstance = new GateApi.FuturesApi();
var contract = "BTC_USD"; // String | Futures contract
var change = "0.01"; // String | Margin change. Use positive number to increase margin, negative number otherwise.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updatePositionMargin(contract, change, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contract** | **String**| Futures contract | 
 **change** | **String**| Margin change. Use positive number to increase margin, negative number otherwise. | 

### Return type

[**Position**](Position.md)

### Authorization

Authentication with API key and secret is required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updatePositionRiskLimit"></a>
# **updatePositionRiskLimit**
> Position updatePositionRiskLimit(contract, riskLimit)

Update position risk limit

### Example
```javascript
var GateApi = require('gate-api');
var client = GateApi.ApiClient.instance;
client.key = "YOUR API KEY";
client.secret = "YOUR API SECRET";
// uncomment the next line if you are using the API with other host
// client.basePath = "https://some-other-hosts";

var apiInstance = new GateApi.FuturesApi();
var contract = "BTC_USD"; // String | Futures contract
var riskLimit = "10"; // String | New position risk limit
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updatePositionRiskLimit(contract, riskLimit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contract** | **String**| Futures contract | 
 **riskLimit** | **String**| New position risk limit | 

### Return type

[**Position**](Position.md)

### Authorization

Authentication with API key and secret is required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

