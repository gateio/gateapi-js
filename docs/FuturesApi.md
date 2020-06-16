# GateApi.FuturesApi

All URIs are relative to *https://api.gateio.ws/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelFuturesOrder**](FuturesApi.md#cancelFuturesOrder) | **DELETE** /futures/{settle}/orders/{order_id} | Cancel a single order
[**cancelFuturesOrders**](FuturesApi.md#cancelFuturesOrders) | **DELETE** /futures/{settle}/orders | Cancel all &#x60;open&#x60; orders matched
[**cancelPriceTriggeredOrder**](FuturesApi.md#cancelPriceTriggeredOrder) | **DELETE** /futures/{settle}/price_orders/{order_id} | Cancel a single order
[**cancelPriceTriggeredOrderList**](FuturesApi.md#cancelPriceTriggeredOrderList) | **DELETE** /futures/{settle}/price_orders | Cancel all open orders
[**createFuturesOrder**](FuturesApi.md#createFuturesOrder) | **POST** /futures/{settle}/orders | Create a futures order
[**createPriceTriggeredOrder**](FuturesApi.md#createPriceTriggeredOrder) | **POST** /futures/{settle}/price_orders | Create a price-triggered order
[**getFuturesContract**](FuturesApi.md#getFuturesContract) | **GET** /futures/{settle}/contracts/{contract} | Get a single contract
[**getFuturesOrder**](FuturesApi.md#getFuturesOrder) | **GET** /futures/{settle}/orders/{order_id} | Get a single order
[**getMyTrades**](FuturesApi.md#getMyTrades) | **GET** /futures/{settle}/my_trades | List personal trading history
[**getPosition**](FuturesApi.md#getPosition) | **GET** /futures/{settle}/positions/{contract} | Get single position
[**getPriceTriggeredOrder**](FuturesApi.md#getPriceTriggeredOrder) | **GET** /futures/{settle}/price_orders/{order_id} | Get a single order
[**listFuturesAccountBook**](FuturesApi.md#listFuturesAccountBook) | **GET** /futures/{settle}/account_book | Query account book
[**listFuturesAccounts**](FuturesApi.md#listFuturesAccounts) | **GET** /futures/{settle}/accounts | Query futures account
[**listFuturesCandlesticks**](FuturesApi.md#listFuturesCandlesticks) | **GET** /futures/{settle}/candlesticks | Get futures candlesticks
[**listFuturesContracts**](FuturesApi.md#listFuturesContracts) | **GET** /futures/{settle}/contracts | List all futures contracts
[**listFuturesFundingRateHistory**](FuturesApi.md#listFuturesFundingRateHistory) | **GET** /futures/{settle}/funding_rate | Funding rate history
[**listFuturesInsuranceLedger**](FuturesApi.md#listFuturesInsuranceLedger) | **GET** /futures/{settle}/insurance | Futures insurance balance history
[**listFuturesOrderBook**](FuturesApi.md#listFuturesOrderBook) | **GET** /futures/{settle}/order_book | Futures order book
[**listFuturesOrders**](FuturesApi.md#listFuturesOrders) | **GET** /futures/{settle}/orders | List futures orders
[**listFuturesTickers**](FuturesApi.md#listFuturesTickers) | **GET** /futures/{settle}/tickers | List futures tickers
[**listFuturesTrades**](FuturesApi.md#listFuturesTrades) | **GET** /futures/{settle}/trades | Futures trading history
[**listLiquidates**](FuturesApi.md#listLiquidates) | **GET** /futures/{settle}/liquidates | List liquidation history
[**listPositionClose**](FuturesApi.md#listPositionClose) | **GET** /futures/{settle}/position_close | List position close history
[**listPositions**](FuturesApi.md#listPositions) | **GET** /futures/{settle}/positions | List all positions of a user
[**listPriceTriggeredOrders**](FuturesApi.md#listPriceTriggeredOrders) | **GET** /futures/{settle}/price_orders | List all auto orders
[**updatePositionLeverage**](FuturesApi.md#updatePositionLeverage) | **POST** /futures/{settle}/positions/{contract}/leverage | Update position leverage
[**updatePositionMargin**](FuturesApi.md#updatePositionMargin) | **POST** /futures/{settle}/positions/{contract}/margin | Update position margin
[**updatePositionRiskLimit**](FuturesApi.md#updatePositionRiskLimit) | **POST** /futures/{settle}/positions/{contract}/risk_limit | Update position risk limit


<a name="cancelFuturesOrder"></a>
# **cancelFuturesOrder**
> FuturesOrder cancelFuturesOrder(settle, orderId)

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
var settle = "btc"; // String | Settle currency
var orderId = "12345"; // String | ID returned on order successfully being created
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cancelFuturesOrder(settle, orderId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **String**| Settle currency | [default to &#39;btc&#39;]
 **orderId** | **String**| ID returned on order successfully being created | 

### Return type

[**FuturesOrder**](FuturesOrder.md)

### Authorization

Authentication with API key and secret is required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="cancelFuturesOrders"></a>
# **cancelFuturesOrders**
> [FuturesOrder] cancelFuturesOrders(settle, contract, opts)

Cancel all &#x60;open&#x60; orders matched

Zero-fill order cannot be retrieved 60 seconds after cancellation

### Example
```javascript
var GateApi = require('gate-api');
var client = GateApi.ApiClient.instance;
client.key = "YOUR API KEY";
client.secret = "YOUR API SECRET";
// uncomment the next line if you are using the API with other host
// client.basePath = "https://some-other-hosts";

var apiInstance = new GateApi.FuturesApi();
var settle = "btc"; // String | Settle currency
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
apiInstance.cancelFuturesOrders(settle, contract, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **String**| Settle currency | [default to &#39;btc&#39;]
 **contract** | **String**| Futures contract | 
 **side** | **String**| All bids or asks. Both included in not specified | [optional] 

### Return type

[**[FuturesOrder]**](FuturesOrder.md)

### Authorization

Authentication with API key and secret is required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="cancelPriceTriggeredOrder"></a>
# **cancelPriceTriggeredOrder**
> FuturesPriceTriggeredOrder cancelPriceTriggeredOrder(settle, orderId)

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
var settle = "btc"; // String | Settle currency
var orderId = "orderId_example"; // String | ID returned on order successfully being created
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cancelPriceTriggeredOrder(settle, orderId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **String**| Settle currency | [default to &#39;btc&#39;]
 **orderId** | **String**| ID returned on order successfully being created | 

### Return type

[**FuturesPriceTriggeredOrder**](FuturesPriceTriggeredOrder.md)

### Authorization

Authentication with API key and secret is required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="cancelPriceTriggeredOrderList"></a>
# **cancelPriceTriggeredOrderList**
> [FuturesPriceTriggeredOrder] cancelPriceTriggeredOrderList(settle, contract)

Cancel all open orders

### Example
```javascript
var GateApi = require('gate-api');
var client = GateApi.ApiClient.instance;
client.key = "YOUR API KEY";
client.secret = "YOUR API SECRET";
// uncomment the next line if you are using the API with other host
// client.basePath = "https://some-other-hosts";

var apiInstance = new GateApi.FuturesApi();
var settle = "btc"; // String | Settle currency
var contract = "BTC_USD"; // String | Futures contract
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cancelPriceTriggeredOrderList(settle, contract, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **String**| Settle currency | [default to &#39;btc&#39;]
 **contract** | **String**| Futures contract | 

### Return type

[**[FuturesPriceTriggeredOrder]**](FuturesPriceTriggeredOrder.md)

### Authorization

Authentication with API key and secret is required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="createFuturesOrder"></a>
# **createFuturesOrder**
> FuturesOrder createFuturesOrder(settle, futuresOrder)

Create a futures order

Zero-fill order cannot be retrieved 60 seconds after cancellation

### Example
```javascript
var GateApi = require('gate-api');
var client = GateApi.ApiClient.instance;
client.key = "YOUR API KEY";
client.secret = "YOUR API SECRET";
// uncomment the next line if you are using the API with other host
// client.basePath = "https://some-other-hosts";

var apiInstance = new GateApi.FuturesApi();
var settle = "btc"; // String | Settle currency
var futuresOrder = new GateApi.FuturesOrder(); // FuturesOrder | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createFuturesOrder(settle, futuresOrder, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **String**| Settle currency | [default to &#39;btc&#39;]
 **futuresOrder** | [**FuturesOrder**](FuturesOrder.md)|  | 

### Return type

[**FuturesOrder**](FuturesOrder.md)

### Authorization

Authentication with API key and secret is required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createPriceTriggeredOrder"></a>
# **createPriceTriggeredOrder**
> TriggerOrderResponse createPriceTriggeredOrder(settle, futuresPriceTriggeredOrder)

Create a price-triggered order

### Example
```javascript
var GateApi = require('gate-api');
var client = GateApi.ApiClient.instance;
client.key = "YOUR API KEY";
client.secret = "YOUR API SECRET";
// uncomment the next line if you are using the API with other host
// client.basePath = "https://some-other-hosts";

var apiInstance = new GateApi.FuturesApi();
var settle = "btc"; // String | Settle currency
var futuresPriceTriggeredOrder = new GateApi.FuturesPriceTriggeredOrder(); // FuturesPriceTriggeredOrder | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createPriceTriggeredOrder(settle, futuresPriceTriggeredOrder, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **String**| Settle currency | [default to &#39;btc&#39;]
 **futuresPriceTriggeredOrder** | [**FuturesPriceTriggeredOrder**](FuturesPriceTriggeredOrder.md)|  | 

### Return type

[**TriggerOrderResponse**](TriggerOrderResponse.md)

### Authorization

Authentication with API key and secret is required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFuturesContract"></a>
# **getFuturesContract**
> Contract getFuturesContract(settle, contract)

Get a single contract

### Example
```javascript
var GateApi = require('gate-api');

var apiInstance = new GateApi.FuturesApi();
var settle = "btc"; // String | Settle currency
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

<a name="getFuturesOrder"></a>
# **getFuturesOrder**
> FuturesOrder getFuturesOrder(settle, orderId)

Get a single order

Zero-fill order cannot be retrieved 60 seconds after cancellation

### Example
```javascript
var GateApi = require('gate-api');
var client = GateApi.ApiClient.instance;
client.key = "YOUR API KEY";
client.secret = "YOUR API SECRET";
// uncomment the next line if you are using the API with other host
// client.basePath = "https://some-other-hosts";

var apiInstance = new GateApi.FuturesApi();
var settle = "btc"; // String | Settle currency
var orderId = "12345"; // String | ID returned on order successfully being created
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFuturesOrder(settle, orderId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **String**| Settle currency | [default to &#39;btc&#39;]
 **orderId** | **String**| ID returned on order successfully being created | 

### Return type

[**FuturesOrder**](FuturesOrder.md)

### Authorization

Authentication with API key and secret is required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getMyTrades"></a>
# **getMyTrades**
> [MyFuturesTrade] getMyTrades(settle, opts)

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
var settle = "btc"; // String | Settle currency
var opts = {
  'contract': "BTC_USD", // String | Futures contract, return related data only if specified
  'order': 12345, // Number | Futures order ID, return related data only if specified
  'limit': 100, // Number | Maximum number of record returned in one list
  'offset': 0, // Number | List offset, starting from 0
  'lastId': "12345", // String | Specify list staring point using the `id` of last record in previous list-query results
  'countTotal': 0 // Number | Whether to return total number matched. Default to 0(no return)
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMyTrades(settle, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **String**| Settle currency | [default to &#39;btc&#39;]
 **contract** | **String**| Futures contract, return related data only if specified | [optional] 
 **order** | **Number**| Futures order ID, return related data only if specified | [optional] 
 **limit** | **Number**| Maximum number of record returned in one list | [optional] [default to 100]
 **offset** | **Number**| List offset, starting from 0 | [optional] [default to 0]
 **lastId** | **String**| Specify list staring point using the &#x60;id&#x60; of last record in previous list-query results | [optional] 
 **countTotal** | **Number**| Whether to return total number matched. Default to 0(no return) | [optional] [default to 0]

### Return type

[**[MyFuturesTrade]**](MyFuturesTrade.md)

### Authorization

Authentication with API key and secret is required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPosition"></a>
# **getPosition**
> Position getPosition(settle, contract)

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
var settle = "btc"; // String | Settle currency
var contract = "BTC_USD"; // String | Futures contract
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPosition(settle, contract, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **String**| Settle currency | [default to &#39;btc&#39;]
 **contract** | **String**| Futures contract | 

### Return type

[**Position**](Position.md)

### Authorization

Authentication with API key and secret is required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPriceTriggeredOrder"></a>
# **getPriceTriggeredOrder**
> FuturesPriceTriggeredOrder getPriceTriggeredOrder(settle, orderId)

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
var settle = "btc"; // String | Settle currency
var orderId = "orderId_example"; // String | ID returned on order successfully being created
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPriceTriggeredOrder(settle, orderId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **String**| Settle currency | [default to &#39;btc&#39;]
 **orderId** | **String**| ID returned on order successfully being created | 

### Return type

[**FuturesPriceTriggeredOrder**](FuturesPriceTriggeredOrder.md)

### Authorization

Authentication with API key and secret is required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listFuturesAccountBook"></a>
# **listFuturesAccountBook**
> [FuturesAccountBook] listFuturesAccountBook(settle, opts)

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
var settle = "btc"; // String | Settle currency
var opts = {
  'limit': 100, // Number | Maximum number of record returned in one list
  'from': 1547706332, // Number | Start timestamp
  'to': 1547706332, // Number | End timestamp
  'type': "dnw" // String | Changing Type: - dnw: Deposit & Withdraw - pnl: Profit & Loss by reducing position - fee: Trading fee - refr: Referrer rebate - fund: Funding - point_dnw: POINT Deposit & Withdraw - point_fee: POINT Trading fee - point_refr: POINT Referrer rebate
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listFuturesAccountBook(settle, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **String**| Settle currency | [default to &#39;btc&#39;]
 **limit** | **Number**| Maximum number of record returned in one list | [optional] [default to 100]
 **from** | **Number**| Start timestamp | [optional] 
 **to** | **Number**| End timestamp | [optional] 
 **type** | **String**| Changing Type: - dnw: Deposit &amp; Withdraw - pnl: Profit &amp; Loss by reducing position - fee: Trading fee - refr: Referrer rebate - fund: Funding - point_dnw: POINT Deposit &amp; Withdraw - point_fee: POINT Trading fee - point_refr: POINT Referrer rebate | [optional] 

### Return type

[**[FuturesAccountBook]**](FuturesAccountBook.md)

### Authorization

Authentication with API key and secret is required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listFuturesAccounts"></a>
# **listFuturesAccounts**
> FuturesAccount listFuturesAccounts(settle)

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
var settle = "btc"; // String | Settle currency
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listFuturesAccounts(settle, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **String**| Settle currency | [default to &#39;btc&#39;]

### Return type

[**FuturesAccount**](FuturesAccount.md)

### Authorization

Authentication with API key and secret is required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listFuturesCandlesticks"></a>
# **listFuturesCandlesticks**
> [FuturesCandlestick] listFuturesCandlesticks(settle, contract, opts)

Get futures candlesticks

Return specified contract candlesticks. If prefix &#x60;contract&#x60; with &#x60;mark_&#x60;, the contract&#39;s mark price candlesticks are returned; if prefix with &#x60;index_&#x60;, index price candlesticks will be returned.  Maximum of 2000 points are returned in one query. Be sure not to exceed the limit when specifying &#x60;from&#x60;, &#x60;to&#x60; and &#x60;interval&#x60;

### Example
```javascript
var GateApi = require('gate-api');

var apiInstance = new GateApi.FuturesApi();
var settle = "btc"; // String | Settle currency
var contract = "BTC_USD"; // String | Futures contract
var opts = {
  'from': 1546905600, // Number | Start time of candlesticks, formatted in Unix timestamp in seconds. Default to`to - 100 * interval` if not specified
  'to': 1546935600, // Number | End time of candlesticks, formatted in Unix timestamp in seconds. Default to current time
  'limit': 100, // Number | Maximum recent data points returned. `limit` is conflicted with `from` and `to`. If either `from` or `to` is specified, request will be rejected.
  'interval': "5m" // String | Interval time between data points
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

<a name="listFuturesContracts"></a>
# **listFuturesContracts**
> [Contract] listFuturesContracts(settle)

List all futures contracts

### Example
```javascript
var GateApi = require('gate-api');

var apiInstance = new GateApi.FuturesApi();
var settle = "btc"; // String | Settle currency
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

<a name="listFuturesFundingRateHistory"></a>
# **listFuturesFundingRateHistory**
> [FundingRateRecord] listFuturesFundingRateHistory(settle, contract, opts)

Funding rate history

### Example
```javascript
var GateApi = require('gate-api');

var apiInstance = new GateApi.FuturesApi();
var settle = "btc"; // String | Settle currency
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
apiInstance.listFuturesFundingRateHistory(settle, contract, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **String**| Settle currency | [default to &#39;btc&#39;]
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
> [InsuranceRecord] listFuturesInsuranceLedger(settle, opts)

Futures insurance balance history

### Example
```javascript
var GateApi = require('gate-api');

var apiInstance = new GateApi.FuturesApi();
var settle = "btc"; // String | Settle currency
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
apiInstance.listFuturesInsuranceLedger(settle, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **String**| Settle currency | [default to &#39;btc&#39;]
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
> FuturesOrderBook listFuturesOrderBook(settle, contract, opts)

Futures order book

Bids will be sorted by price from high to low, while asks sorted reversely

### Example
```javascript
var GateApi = require('gate-api');

var apiInstance = new GateApi.FuturesApi();
var settle = "btc"; // String | Settle currency
var contract = "BTC_USD"; // String | Futures contract
var opts = {
  'interval': "0", // String | Order depth. 0 means no aggregation is applied. default to 0
  'limit': 10 // Number | Maximum number of order depth data in asks or bids
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

### Return type

[**FuturesOrderBook**](FuturesOrderBook.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listFuturesOrders"></a>
# **listFuturesOrders**
> [FuturesOrder] listFuturesOrders(settle, contract, status, opts)

List futures orders

Zero-fill order cannot be retrieved 60 seconds after cancellation

### Example
```javascript
var GateApi = require('gate-api');
var client = GateApi.ApiClient.instance;
client.key = "YOUR API KEY";
client.secret = "YOUR API SECRET";
// uncomment the next line if you are using the API with other host
// client.basePath = "https://some-other-hosts";

var apiInstance = new GateApi.FuturesApi();
var settle = "btc"; // String | Settle currency
var contract = "BTC_USD"; // String | Futures contract
var status = "open"; // String | List orders based on status
var opts = {
  'limit': 100, // Number | Maximum number of record returned in one list
  'offset': 0, // Number | List offset, starting from 0
  'lastId': "12345", // String | Specify list staring point using the `id` of last record in previous list-query results
  'countTotal': 0 // Number | Whether to return total number matched. Default to 0(no return)
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listFuturesOrders(settle, contract, status, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **String**| Settle currency | [default to &#39;btc&#39;]
 **contract** | **String**| Futures contract | 
 **status** | **String**| List orders based on status | 
 **limit** | **Number**| Maximum number of record returned in one list | [optional] [default to 100]
 **offset** | **Number**| List offset, starting from 0 | [optional] [default to 0]
 **lastId** | **String**| Specify list staring point using the &#x60;id&#x60; of last record in previous list-query results | [optional] 
 **countTotal** | **Number**| Whether to return total number matched. Default to 0(no return) | [optional] [default to 0]

### Return type

[**[FuturesOrder]**](FuturesOrder.md)

### Authorization

Authentication with API key and secret is required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listFuturesTickers"></a>
# **listFuturesTickers**
> [FuturesTicker] listFuturesTickers(settle, opts)

List futures tickers

### Example
```javascript
var GateApi = require('gate-api');

var apiInstance = new GateApi.FuturesApi();
var settle = "btc"; // String | Settle currency
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

<a name="listFuturesTrades"></a>
# **listFuturesTrades**
> [FuturesTrade] listFuturesTrades(settle, contract, opts)

Futures trading history

### Example
```javascript
var GateApi = require('gate-api');

var apiInstance = new GateApi.FuturesApi();
var settle = "btc"; // String | Settle currency
var contract = "BTC_USD"; // String | Futures contract
var opts = {
  'limit': 100, // Number | Maximum number of record returned in one list
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
 **limit** | **Number**| Maximum number of record returned in one list | [optional] [default to 100]
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

<a name="listLiquidates"></a>
# **listLiquidates**
> [FuturesLiquidate] listLiquidates(settle, opts)

List liquidation history

### Example
```javascript
var GateApi = require('gate-api');
var client = GateApi.ApiClient.instance;
client.key = "YOUR API KEY";
client.secret = "YOUR API SECRET";
// uncomment the next line if you are using the API with other host
// client.basePath = "https://some-other-hosts";

var apiInstance = new GateApi.FuturesApi();
var settle = "btc"; // String | Settle currency
var opts = {
  'contract': "BTC_USD", // String | Futures contract, return related data only if specified
  'limit': 100, // Number | Maximum number of record returned in one list
  'at': 0 // Number | Specify a liquidation timestamp
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listLiquidates(settle, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **String**| Settle currency | [default to &#39;btc&#39;]
 **contract** | **String**| Futures contract, return related data only if specified | [optional] 
 **limit** | **Number**| Maximum number of record returned in one list | [optional] [default to 100]
 **at** | **Number**| Specify a liquidation timestamp | [optional] [default to 0]

### Return type

[**[FuturesLiquidate]**](FuturesLiquidate.md)

### Authorization

Authentication with API key and secret is required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listPositionClose"></a>
# **listPositionClose**
> [PositionClose] listPositionClose(settle, opts)

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
var settle = "btc"; // String | Settle currency
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
apiInstance.listPositionClose(settle, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **String**| Settle currency | [default to &#39;btc&#39;]
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
> [Position] listPositions(settle)

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
var settle = "btc"; // String | Settle currency
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listPositions(settle, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **String**| Settle currency | [default to &#39;btc&#39;]

### Return type

[**[Position]**](Position.md)

### Authorization

Authentication with API key and secret is required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listPriceTriggeredOrders"></a>
# **listPriceTriggeredOrders**
> [FuturesPriceTriggeredOrder] listPriceTriggeredOrders(settle, status, opts)

List all auto orders

### Example
```javascript
var GateApi = require('gate-api');
var client = GateApi.ApiClient.instance;
client.key = "YOUR API KEY";
client.secret = "YOUR API SECRET";
// uncomment the next line if you are using the API with other host
// client.basePath = "https://some-other-hosts";

var apiInstance = new GateApi.FuturesApi();
var settle = "btc"; // String | Settle currency
var status = "status_example"; // String | List orders based on status
var opts = {
  'contract': "BTC_USD", // String | Futures contract, return related data only if specified
  'limit': 100, // Number | Maximum number of record returned in one list
  'offset': 0 // Number | List offset, starting from 0
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listPriceTriggeredOrders(settle, status, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **String**| Settle currency | [default to &#39;btc&#39;]
 **status** | **String**| List orders based on status | 
 **contract** | **String**| Futures contract, return related data only if specified | [optional] 
 **limit** | **Number**| Maximum number of record returned in one list | [optional] [default to 100]
 **offset** | **Number**| List offset, starting from 0 | [optional] [default to 0]

### Return type

[**[FuturesPriceTriggeredOrder]**](FuturesPriceTriggeredOrder.md)

### Authorization

Authentication with API key and secret is required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updatePositionLeverage"></a>
# **updatePositionLeverage**
> Position updatePositionLeverage(settle, contract, leverage)

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
var settle = "btc"; // String | Settle currency
var contract = "BTC_USD"; // String | Futures contract
var leverage = "10"; // String | New position leverage
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updatePositionLeverage(settle, contract, leverage, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **String**| Settle currency | [default to &#39;btc&#39;]
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
> Position updatePositionMargin(settle, contract, change)

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
var settle = "btc"; // String | Settle currency
var contract = "BTC_USD"; // String | Futures contract
var change = "0.01"; // String | Margin change. Use positive number to increase margin, negative number otherwise.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updatePositionMargin(settle, contract, change, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **String**| Settle currency | [default to &#39;btc&#39;]
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
> Position updatePositionRiskLimit(settle, contract, riskLimit)

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
var settle = "btc"; // String | Settle currency
var contract = "BTC_USD"; // String | Futures contract
var riskLimit = "10"; // String | New position risk limit
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updatePositionRiskLimit(settle, contract, riskLimit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **String**| Settle currency | [default to &#39;btc&#39;]
 **contract** | **String**| Futures contract | 
 **riskLimit** | **String**| New position risk limit | 

### Return type

[**Position**](Position.md)

### Authorization

Authentication with API key and secret is required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

