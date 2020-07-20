# GateApi.DeliveryApi

All URIs are relative to *https://api.gateio.ws/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelDeliveryOrder**](DeliveryApi.md#cancelDeliveryOrder) | **DELETE** /delivery/{settle}/orders/{order_id} | Cancel a single order
[**cancelDeliveryOrders**](DeliveryApi.md#cancelDeliveryOrders) | **DELETE** /delivery/{settle}/orders | Cancel all &#x60;open&#x60; orders matched
[**cancelPriceTriggeredDeliveryOrder**](DeliveryApi.md#cancelPriceTriggeredDeliveryOrder) | **DELETE** /delivery/{settle}/price_orders/{order_id} | Cancel a single order
[**cancelPriceTriggeredDeliveryOrderList**](DeliveryApi.md#cancelPriceTriggeredDeliveryOrderList) | **DELETE** /delivery/{settle}/price_orders | Cancel all open orders
[**createDeliveryOrder**](DeliveryApi.md#createDeliveryOrder) | **POST** /delivery/{settle}/orders | Create a futures order
[**createPriceTriggeredDeliveryOrder**](DeliveryApi.md#createPriceTriggeredDeliveryOrder) | **POST** /delivery/{settle}/price_orders | Create a price-triggered order
[**getDeliveryContract**](DeliveryApi.md#getDeliveryContract) | **GET** /delivery/{settle}/contracts/{contract} | Get a single contract
[**getDeliveryOrder**](DeliveryApi.md#getDeliveryOrder) | **GET** /delivery/{settle}/orders/{order_id} | Get a single order
[**getDeliveryPosition**](DeliveryApi.md#getDeliveryPosition) | **GET** /delivery/{settle}/positions/{contract} | Get single position
[**getMyDeliveryTrades**](DeliveryApi.md#getMyDeliveryTrades) | **GET** /delivery/{settle}/my_trades | List personal trading history
[**getPriceTriggeredDeliveryOrder**](DeliveryApi.md#getPriceTriggeredDeliveryOrder) | **GET** /delivery/{settle}/price_orders/{order_id} | Get a single order
[**listDeliveryAccountBook**](DeliveryApi.md#listDeliveryAccountBook) | **GET** /delivery/{settle}/account_book | Query account book
[**listDeliveryAccounts**](DeliveryApi.md#listDeliveryAccounts) | **GET** /delivery/{settle}/accounts | Query futures account
[**listDeliveryCandlesticks**](DeliveryApi.md#listDeliveryCandlesticks) | **GET** /delivery/{settle}/candlesticks | Get futures candlesticks
[**listDeliveryContracts**](DeliveryApi.md#listDeliveryContracts) | **GET** /delivery/{settle}/contracts | List all futures contracts
[**listDeliveryInsuranceLedger**](DeliveryApi.md#listDeliveryInsuranceLedger) | **GET** /delivery/{settle}/insurance | Futures insurance balance history
[**listDeliveryLiquidates**](DeliveryApi.md#listDeliveryLiquidates) | **GET** /delivery/{settle}/liquidates | List liquidation history
[**listDeliveryOrderBook**](DeliveryApi.md#listDeliveryOrderBook) | **GET** /delivery/{settle}/order_book | Futures order book
[**listDeliveryOrders**](DeliveryApi.md#listDeliveryOrders) | **GET** /delivery/{settle}/orders | List futures orders
[**listDeliveryPositionClose**](DeliveryApi.md#listDeliveryPositionClose) | **GET** /delivery/{settle}/position_close | List position close history
[**listDeliveryPositions**](DeliveryApi.md#listDeliveryPositions) | **GET** /delivery/{settle}/positions | List all positions of a user
[**listDeliverySettlements**](DeliveryApi.md#listDeliverySettlements) | **GET** /delivery/{settle}/settlements | List settlement history
[**listDeliveryTickers**](DeliveryApi.md#listDeliveryTickers) | **GET** /delivery/{settle}/tickers | List futures tickers
[**listDeliveryTrades**](DeliveryApi.md#listDeliveryTrades) | **GET** /delivery/{settle}/trades | Futures trading history
[**listPriceTriggeredDeliveryOrders**](DeliveryApi.md#listPriceTriggeredDeliveryOrders) | **GET** /delivery/{settle}/price_orders | List all auto orders
[**updateDeliveryPositionLeverage**](DeliveryApi.md#updateDeliveryPositionLeverage) | **POST** /delivery/{settle}/positions/{contract}/leverage | Update position leverage
[**updateDeliveryPositionMargin**](DeliveryApi.md#updateDeliveryPositionMargin) | **POST** /delivery/{settle}/positions/{contract}/margin | Update position margin
[**updateDeliveryPositionRiskLimit**](DeliveryApi.md#updateDeliveryPositionRiskLimit) | **POST** /delivery/{settle}/positions/{contract}/risk_limit | Update position risk limit


## cancelDeliveryOrder

> FuturesOrder cancelDeliveryOrder(settle, orderId)

Cancel a single order

### Example

```javascript
var GateApi = require('gate-api');

var defaultClient = GateApi.ApiClient.instance;
// Configure Gate APIv4 key authentication: apiv4
var apiv4 = defaultClient.authentications['apiv4'];
apiv4.key = 'YOUR_API_KEY'
apiv4.secret = 'YOUR_API_SECRET'

var apiInstance = new GateApi.DeliveryApi();
var settle = usdt; // String | Settle currency
var orderId = 12345; // String | ID returned on order successfully being created
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cancelDeliveryOrder(settle, orderId, callback);
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **String**| Settle currency | 
 **orderId** | **String**| ID returned on order successfully being created | 

### Return type

[**FuturesOrder**](FuturesOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## cancelDeliveryOrders

> [FuturesOrder] cancelDeliveryOrders(settle, contract, opts)

Cancel all &#x60;open&#x60; orders matched

Zero-fill order cannot be retrieved 60 seconds after cancellation

### Example

```javascript
var GateApi = require('gate-api');

var defaultClient = GateApi.ApiClient.instance;
// Configure Gate APIv4 key authentication: apiv4
var apiv4 = defaultClient.authentications['apiv4'];
apiv4.key = 'YOUR_API_KEY'
apiv4.secret = 'YOUR_API_SECRET'

var apiInstance = new GateApi.DeliveryApi();
var settle = usdt; // String | Settle currency
var contract = BTC_USDT_WEEKLY_20200703; // String | Futures contract
var opts = {
  'side': ask // String | All bids or asks. Both included in not specified
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cancelDeliveryOrders(settle, contract, opts, callback);
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **String**| Settle currency | 
 **contract** | **String**| Futures contract | 
 **side** | **String**| All bids or asks. Both included in not specified | [optional] 

### Return type

[**[FuturesOrder]**](FuturesOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## cancelPriceTriggeredDeliveryOrder

> FuturesPriceTriggeredOrder cancelPriceTriggeredDeliveryOrder(settle, orderId)

Cancel a single order

### Example

```javascript
var GateApi = require('gate-api');

var defaultClient = GateApi.ApiClient.instance;
// Configure Gate APIv4 key authentication: apiv4
var apiv4 = defaultClient.authentications['apiv4'];
apiv4.key = 'YOUR_API_KEY'
apiv4.secret = 'YOUR_API_SECRET'

var apiInstance = new GateApi.DeliveryApi();
var settle = usdt; // String | Settle currency
var orderId = "orderId_example"; // String | ID returned on order successfully being created
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cancelPriceTriggeredDeliveryOrder(settle, orderId, callback);
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **String**| Settle currency | 
 **orderId** | **String**| ID returned on order successfully being created | 

### Return type

[**FuturesPriceTriggeredOrder**](FuturesPriceTriggeredOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## cancelPriceTriggeredDeliveryOrderList

> [FuturesPriceTriggeredOrder] cancelPriceTriggeredDeliveryOrderList(settle, contract)

Cancel all open orders

### Example

```javascript
var GateApi = require('gate-api');

var defaultClient = GateApi.ApiClient.instance;
// Configure Gate APIv4 key authentication: apiv4
var apiv4 = defaultClient.authentications['apiv4'];
apiv4.key = 'YOUR_API_KEY'
apiv4.secret = 'YOUR_API_SECRET'

var apiInstance = new GateApi.DeliveryApi();
var settle = usdt; // String | Settle currency
var contract = BTC_USD; // String | Futures contract
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cancelPriceTriggeredDeliveryOrderList(settle, contract, callback);
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **String**| Settle currency | 
 **contract** | **String**| Futures contract | 

### Return type

[**[FuturesPriceTriggeredOrder]**](FuturesPriceTriggeredOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## createDeliveryOrder

> FuturesOrder createDeliveryOrder(settle, futuresOrder)

Create a futures order

Zero-fill order cannot be retrieved 60 seconds after cancellation

### Example

```javascript
var GateApi = require('gate-api');

var defaultClient = GateApi.ApiClient.instance;
// Configure Gate APIv4 key authentication: apiv4
var apiv4 = defaultClient.authentications['apiv4'];
apiv4.key = 'YOUR_API_KEY'
apiv4.secret = 'YOUR_API_SECRET'

var apiInstance = new GateApi.DeliveryApi();
var settle = usdt; // String | Settle currency
var futuresOrder = {"id":15675394,"user":100000,"contract":"BTC_USD","create_time":1546569968,"size":6024,"iceberg":0,"left":6024,"price":"3765","fill_price":"0","mkfr":"-0.00025","tkfr":"0.00075","tif":"gtc","refu":0,"is_reduce_only":false,"is_close":false,"is_liq":false,"text":"t-my-custom-id","status":"finished","finish_time":1514764900,"finish_as":"cancelled"}; // FuturesOrder | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createDeliveryOrder(settle, futuresOrder, callback);
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **String**| Settle currency | 
 **futuresOrder** | [**FuturesOrder**](FuturesOrder.md)|  | 

### Return type

[**FuturesOrder**](FuturesOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## createPriceTriggeredDeliveryOrder

> TriggerOrderResponse createPriceTriggeredDeliveryOrder(settle, futuresPriceTriggeredOrder)

Create a price-triggered order

### Example

```javascript
var GateApi = require('gate-api');

var defaultClient = GateApi.ApiClient.instance;
// Configure Gate APIv4 key authentication: apiv4
var apiv4 = defaultClient.authentications['apiv4'];
apiv4.key = 'YOUR_API_KEY'
apiv4.secret = 'YOUR_API_SECRET'

var apiInstance = new GateApi.DeliveryApi();
var settle = usdt; // String | Settle currency
var futuresPriceTriggeredOrder = {"initial":{"contract":"BTC_USD","size":100,"price":"5.03","close":false,"tif":"gtc","text":"web"},"trigger":{"strategy_type":0,"price_type":0,"price":"3000","rule":1,"expiration":86400},"id":1283293,"user":1234,"create_time":1514764800,"finish_time":1514764900,"trade_id":13566,"status":"finished","finish_as":"cancelled","reason":""}; // FuturesPriceTriggeredOrder | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createPriceTriggeredDeliveryOrder(settle, futuresPriceTriggeredOrder, callback);
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **String**| Settle currency | 
 **futuresPriceTriggeredOrder** | [**FuturesPriceTriggeredOrder**](FuturesPriceTriggeredOrder.md)|  | 

### Return type

[**TriggerOrderResponse**](TriggerOrderResponse.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## getDeliveryContract

> DeliveryContract getDeliveryContract(settle, contract)

Get a single contract

### Example

```javascript
var GateApi = require('gate-api');

var apiInstance = new GateApi.DeliveryApi();
var settle = usdt; // String | Settle currency
var contract = BTC_USDT_WEEKLY_20200703; // String | Futures contract
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDeliveryContract(settle, contract, callback);
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **String**| Settle currency | 
 **contract** | **String**| Futures contract | 

### Return type

[**DeliveryContract**](DeliveryContract.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getDeliveryOrder

> FuturesOrder getDeliveryOrder(settle, orderId)

Get a single order

Zero-fill order cannot be retrieved 60 seconds after cancellation

### Example

```javascript
var GateApi = require('gate-api');

var defaultClient = GateApi.ApiClient.instance;
// Configure Gate APIv4 key authentication: apiv4
var apiv4 = defaultClient.authentications['apiv4'];
apiv4.key = 'YOUR_API_KEY'
apiv4.secret = 'YOUR_API_SECRET'

var apiInstance = new GateApi.DeliveryApi();
var settle = usdt; // String | Settle currency
var orderId = 12345; // String | ID returned on order successfully being created
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDeliveryOrder(settle, orderId, callback);
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **String**| Settle currency | 
 **orderId** | **String**| ID returned on order successfully being created | 

### Return type

[**FuturesOrder**](FuturesOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getDeliveryPosition

> Position getDeliveryPosition(settle, contract)

Get single position

### Example

```javascript
var GateApi = require('gate-api');

var defaultClient = GateApi.ApiClient.instance;
// Configure Gate APIv4 key authentication: apiv4
var apiv4 = defaultClient.authentications['apiv4'];
apiv4.key = 'YOUR_API_KEY'
apiv4.secret = 'YOUR_API_SECRET'

var apiInstance = new GateApi.DeliveryApi();
var settle = usdt; // String | Settle currency
var contract = BTC_USDT_WEEKLY_20200703; // String | Futures contract
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDeliveryPosition(settle, contract, callback);
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **String**| Settle currency | 
 **contract** | **String**| Futures contract | 

### Return type

[**Position**](Position.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getMyDeliveryTrades

> [MyFuturesTrade] getMyDeliveryTrades(settle, opts)

List personal trading history

### Example

```javascript
var GateApi = require('gate-api');

var defaultClient = GateApi.ApiClient.instance;
// Configure Gate APIv4 key authentication: apiv4
var apiv4 = defaultClient.authentications['apiv4'];
apiv4.key = 'YOUR_API_KEY'
apiv4.secret = 'YOUR_API_SECRET'

var apiInstance = new GateApi.DeliveryApi();
var settle = usdt; // String | Settle currency
var opts = {
  'contract': BTC_USDT_WEEKLY_20200703, // String | Futures contract
  'order': 12345, // Number | Futures order ID, return related data only if specified
  'limit': 100, // Number | Maximum number of records returned in one list
  'offset': 0, // Number | List offset, starting from 0
  'lastId': 12345, // String | Specify list staring point using the `id` of last record in previous list-query results
  'countTotal': 0 // Number | Whether to return total number matched. Default to 0(no return)
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMyDeliveryTrades(settle, opts, callback);
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **String**| Settle currency | 
 **contract** | **String**| Futures contract | [optional] 
 **order** | **Number**| Futures order ID, return related data only if specified | [optional] 
 **limit** | **Number**| Maximum number of records returned in one list | [optional] [default to 100]
 **offset** | **Number**| List offset, starting from 0 | [optional] [default to 0]
 **lastId** | **String**| Specify list staring point using the &#x60;id&#x60; of last record in previous list-query results | [optional] 
 **countTotal** | **Number**| Whether to return total number matched. Default to 0(no return) | [optional] [default to 0]

### Return type

[**[MyFuturesTrade]**](MyFuturesTrade.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getPriceTriggeredDeliveryOrder

> FuturesPriceTriggeredOrder getPriceTriggeredDeliveryOrder(settle, orderId)

Get a single order

### Example

```javascript
var GateApi = require('gate-api');

var defaultClient = GateApi.ApiClient.instance;
// Configure Gate APIv4 key authentication: apiv4
var apiv4 = defaultClient.authentications['apiv4'];
apiv4.key = 'YOUR_API_KEY'
apiv4.secret = 'YOUR_API_SECRET'

var apiInstance = new GateApi.DeliveryApi();
var settle = usdt; // String | Settle currency
var orderId = "orderId_example"; // String | ID returned on order successfully being created
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPriceTriggeredDeliveryOrder(settle, orderId, callback);
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **String**| Settle currency | 
 **orderId** | **String**| ID returned on order successfully being created | 

### Return type

[**FuturesPriceTriggeredOrder**](FuturesPriceTriggeredOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listDeliveryAccountBook

> [FuturesAccountBook] listDeliveryAccountBook(settle, opts)

Query account book

### Example

```javascript
var GateApi = require('gate-api');

var defaultClient = GateApi.ApiClient.instance;
// Configure Gate APIv4 key authentication: apiv4
var apiv4 = defaultClient.authentications['apiv4'];
apiv4.key = 'YOUR_API_KEY'
apiv4.secret = 'YOUR_API_SECRET'

var apiInstance = new GateApi.DeliveryApi();
var settle = usdt; // String | Settle currency
var opts = {
  'limit': 100, // Number | Maximum number of records returned in one list
  'from': 1547706332, // Number | Start timestamp
  'to': 1547706332, // Number | End timestamp
  'type': dnw // String | Changing Type: - dnw: Deposit & Withdraw - pnl: Profit & Loss by reducing position - fee: Trading fee - refr: Referrer rebate - fund: Funding - point_dnw: POINT Deposit & Withdraw - point_fee: POINT Trading fee - point_refr: POINT Referrer rebate
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listDeliveryAccountBook(settle, opts, callback);
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **String**| Settle currency | 
 **limit** | **Number**| Maximum number of records returned in one list | [optional] [default to 100]
 **from** | **Number**| Start timestamp | [optional] 
 **to** | **Number**| End timestamp | [optional] 
 **type** | **String**| Changing Type: - dnw: Deposit &amp; Withdraw - pnl: Profit &amp; Loss by reducing position - fee: Trading fee - refr: Referrer rebate - fund: Funding - point_dnw: POINT Deposit &amp; Withdraw - point_fee: POINT Trading fee - point_refr: POINT Referrer rebate | [optional] 

### Return type

[**[FuturesAccountBook]**](FuturesAccountBook.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listDeliveryAccounts

> FuturesAccount listDeliveryAccounts(settle)

Query futures account

### Example

```javascript
var GateApi = require('gate-api');

var defaultClient = GateApi.ApiClient.instance;
// Configure Gate APIv4 key authentication: apiv4
var apiv4 = defaultClient.authentications['apiv4'];
apiv4.key = 'YOUR_API_KEY'
apiv4.secret = 'YOUR_API_SECRET'

var apiInstance = new GateApi.DeliveryApi();
var settle = usdt; // String | Settle currency
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listDeliveryAccounts(settle, callback);
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **String**| Settle currency | 

### Return type

[**FuturesAccount**](FuturesAccount.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listDeliveryCandlesticks

> [FuturesCandlestick] listDeliveryCandlesticks(settle, contract, opts)

Get futures candlesticks

Return specified contract candlesticks. If prefix &#x60;contract&#x60; with &#x60;mark_&#x60;, the contract&#39;s mark price candlesticks are returned; if prefix with &#x60;index_&#x60;, index price candlesticks will be returned.  Maximum of 2000 points are returned in one query. Be sure not to exceed the limit when specifying &#x60;from&#x60;, &#x60;to&#x60; and &#x60;interval&#x60;

### Example

```javascript
var GateApi = require('gate-api');

var apiInstance = new GateApi.DeliveryApi();
var settle = usdt; // String | Settle currency
var contract = BTC_USDT_WEEKLY_20200703; // String | Futures contract
var opts = {
  'from': 1546905600, // Number | Start time of candlesticks, formatted in Unix timestamp in seconds. Default to`to - 100 * interval` if not specified
  'to': 1546935600, // Number | End time of candlesticks, formatted in Unix timestamp in seconds. Default to current time
  'limit': 100, // Number | Maximum recent data points returned. `limit` is conflicted with `from` and `to`. If either `from` or `to` is specified, request will be rejected.
  'interval': 5m // String | Interval time between data points
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listDeliveryCandlesticks(settle, contract, opts, callback);
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **String**| Settle currency | 
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

## listDeliveryContracts

> [DeliveryContract] listDeliveryContracts(settle)

List all futures contracts

### Example

```javascript
var GateApi = require('gate-api');

var apiInstance = new GateApi.DeliveryApi();
var settle = usdt; // String | Settle currency
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listDeliveryContracts(settle, callback);
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **String**| Settle currency | 

### Return type

[**[DeliveryContract]**](DeliveryContract.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listDeliveryInsuranceLedger

> [InsuranceRecord] listDeliveryInsuranceLedger(settle, opts)

Futures insurance balance history

### Example

```javascript
var GateApi = require('gate-api');

var apiInstance = new GateApi.DeliveryApi();
var settle = usdt; // String | Settle currency
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
apiInstance.listDeliveryInsuranceLedger(settle, opts, callback);
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **String**| Settle currency | 
 **limit** | **Number**| Maximum number of records returned in one list | [optional] [default to 100]

### Return type

[**[InsuranceRecord]**](InsuranceRecord.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listDeliveryLiquidates

> [FuturesLiquidate] listDeliveryLiquidates(settle, opts)

List liquidation history

### Example

```javascript
var GateApi = require('gate-api');

var defaultClient = GateApi.ApiClient.instance;
// Configure Gate APIv4 key authentication: apiv4
var apiv4 = defaultClient.authentications['apiv4'];
apiv4.key = 'YOUR_API_KEY'
apiv4.secret = 'YOUR_API_SECRET'

var apiInstance = new GateApi.DeliveryApi();
var settle = usdt; // String | Settle currency
var opts = {
  'contract': BTC_USDT_WEEKLY_20200703, // String | Futures contract
  'limit': 100, // Number | Maximum number of records returned in one list
  'at': 1546905600 // Number | Specify a liquidation timestamp
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listDeliveryLiquidates(settle, opts, callback);
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **String**| Settle currency | 
 **contract** | **String**| Futures contract | [optional] 
 **limit** | **Number**| Maximum number of records returned in one list | [optional] [default to 100]
 **at** | **Number**| Specify a liquidation timestamp | [optional] [default to 0]

### Return type

[**[FuturesLiquidate]**](FuturesLiquidate.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listDeliveryOrderBook

> FuturesOrderBook listDeliveryOrderBook(settle, contract, opts)

Futures order book

Bids will be sorted by price from high to low, while asks sorted reversely

### Example

```javascript
var GateApi = require('gate-api');

var apiInstance = new GateApi.DeliveryApi();
var settle = usdt; // String | Settle currency
var contract = BTC_USDT_WEEKLY_20200703; // String | Futures contract
var opts = {
  'interval': 0, // String | Order depth. 0 means no aggregation is applied. default to 0
  'limit': 10 // Number | Maximum number of order depth data in asks or bids
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listDeliveryOrderBook(settle, contract, opts, callback);
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **String**| Settle currency | 
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

## listDeliveryOrders

> [FuturesOrder] listDeliveryOrders(settle, status, opts)

List futures orders

Zero-fill order cannot be retrieved 60 seconds after cancellation

### Example

```javascript
var GateApi = require('gate-api');

var defaultClient = GateApi.ApiClient.instance;
// Configure Gate APIv4 key authentication: apiv4
var apiv4 = defaultClient.authentications['apiv4'];
apiv4.key = 'YOUR_API_KEY'
apiv4.secret = 'YOUR_API_SECRET'

var apiInstance = new GateApi.DeliveryApi();
var settle = usdt; // String | Settle currency
var status = open; // String | List orders based on status
var opts = {
  'contract': BTC_USDT_WEEKLY_20200703, // String | Futures contract
  'limit': 100, // Number | Maximum number of records returned in one list
  'offset': 0, // Number | List offset, starting from 0
  'lastId': 12345, // String | Specify list staring point using the `id` of last record in previous list-query results
  'countTotal': 0 // Number | Whether to return total number matched. Default to 0(no return)
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listDeliveryOrders(settle, status, opts, callback);
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **String**| Settle currency | 
 **status** | **String**| List orders based on status | 
 **contract** | **String**| Futures contract | [optional] 
 **limit** | **Number**| Maximum number of records returned in one list | [optional] [default to 100]
 **offset** | **Number**| List offset, starting from 0 | [optional] [default to 0]
 **lastId** | **String**| Specify list staring point using the &#x60;id&#x60; of last record in previous list-query results | [optional] 
 **countTotal** | **Number**| Whether to return total number matched. Default to 0(no return) | [optional] [default to 0]

### Return type

[**[FuturesOrder]**](FuturesOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listDeliveryPositionClose

> [PositionClose] listDeliveryPositionClose(settle, opts)

List position close history

### Example

```javascript
var GateApi = require('gate-api');

var defaultClient = GateApi.ApiClient.instance;
// Configure Gate APIv4 key authentication: apiv4
var apiv4 = defaultClient.authentications['apiv4'];
apiv4.key = 'YOUR_API_KEY'
apiv4.secret = 'YOUR_API_SECRET'

var apiInstance = new GateApi.DeliveryApi();
var settle = usdt; // String | Settle currency
var opts = {
  'contract': BTC_USDT_WEEKLY_20200703, // String | Futures contract
  'limit': 100 // Number | Maximum number of records returned in one list
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listDeliveryPositionClose(settle, opts, callback);
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **String**| Settle currency | 
 **contract** | **String**| Futures contract | [optional] 
 **limit** | **Number**| Maximum number of records returned in one list | [optional] [default to 100]

### Return type

[**[PositionClose]**](PositionClose.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listDeliveryPositions

> [Position] listDeliveryPositions(settle)

List all positions of a user

### Example

```javascript
var GateApi = require('gate-api');

var defaultClient = GateApi.ApiClient.instance;
// Configure Gate APIv4 key authentication: apiv4
var apiv4 = defaultClient.authentications['apiv4'];
apiv4.key = 'YOUR_API_KEY'
apiv4.secret = 'YOUR_API_SECRET'

var apiInstance = new GateApi.DeliveryApi();
var settle = usdt; // String | Settle currency
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listDeliveryPositions(settle, callback);
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **String**| Settle currency | 

### Return type

[**[Position]**](Position.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listDeliverySettlements

> [DeliverySettlement] listDeliverySettlements(settle, opts)

List settlement history

### Example

```javascript
var GateApi = require('gate-api');

var defaultClient = GateApi.ApiClient.instance;
// Configure Gate APIv4 key authentication: apiv4
var apiv4 = defaultClient.authentications['apiv4'];
apiv4.key = 'YOUR_API_KEY'
apiv4.secret = 'YOUR_API_SECRET'

var apiInstance = new GateApi.DeliveryApi();
var settle = usdt; // String | Settle currency
var opts = {
  'contract': BTC_USDT_WEEKLY_20200703, // String | Futures contract
  'limit': 100, // Number | Maximum number of records returned in one list
  'at': 1546905600 // Number | Specify a settlement timestamp
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listDeliverySettlements(settle, opts, callback);
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **String**| Settle currency | 
 **contract** | **String**| Futures contract | [optional] 
 **limit** | **Number**| Maximum number of records returned in one list | [optional] [default to 100]
 **at** | **Number**| Specify a settlement timestamp | [optional] [default to 0]

### Return type

[**[DeliverySettlement]**](DeliverySettlement.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listDeliveryTickers

> [FuturesTicker] listDeliveryTickers(settle, opts)

List futures tickers

### Example

```javascript
var GateApi = require('gate-api');

var apiInstance = new GateApi.DeliveryApi();
var settle = usdt; // String | Settle currency
var opts = {
  'contract': BTC_USDT_WEEKLY_20200703 // String | Futures contract
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listDeliveryTickers(settle, opts, callback);
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **String**| Settle currency | 
 **contract** | **String**| Futures contract | [optional] 

### Return type

[**[FuturesTicker]**](FuturesTicker.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listDeliveryTrades

> [FuturesTrade] listDeliveryTrades(settle, contract, opts)

Futures trading history

### Example

```javascript
var GateApi = require('gate-api');

var apiInstance = new GateApi.DeliveryApi();
var settle = usdt; // String | Settle currency
var contract = BTC_USDT_WEEKLY_20200703; // String | Futures contract
var opts = {
  'limit': 100, // Number | Maximum number of records returned in one list
  'lastId': 12345, // String | Specify list staring point using the id of last record in previous list-query results  This parameter is deprecated. Use `from` and `to` instead to limit time range
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
apiInstance.listDeliveryTrades(settle, contract, opts, callback);
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **String**| Settle currency | 
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

## listPriceTriggeredDeliveryOrders

> [FuturesPriceTriggeredOrder] listPriceTriggeredDeliveryOrders(settle, status, opts)

List all auto orders

### Example

```javascript
var GateApi = require('gate-api');

var defaultClient = GateApi.ApiClient.instance;
// Configure Gate APIv4 key authentication: apiv4
var apiv4 = defaultClient.authentications['apiv4'];
apiv4.key = 'YOUR_API_KEY'
apiv4.secret = 'YOUR_API_SECRET'

var apiInstance = new GateApi.DeliveryApi();
var settle = usdt; // String | Settle currency
var status = "status_example"; // String | List orders based on status
var opts = {
  'contract': BTC_USD, // String | Futures contract, return related data only if specified
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
apiInstance.listPriceTriggeredDeliveryOrders(settle, status, opts, callback);
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **String**| Settle currency | 
 **status** | **String**| List orders based on status | 
 **contract** | **String**| Futures contract, return related data only if specified | [optional] 
 **limit** | **Number**| Maximum number of records returned in one list | [optional] [default to 100]
 **offset** | **Number**| List offset, starting from 0 | [optional] [default to 0]

### Return type

[**[FuturesPriceTriggeredOrder]**](FuturesPriceTriggeredOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## updateDeliveryPositionLeverage

> Position updateDeliveryPositionLeverage(settle, contract, leverage)

Update position leverage

### Example

```javascript
var GateApi = require('gate-api');

var defaultClient = GateApi.ApiClient.instance;
// Configure Gate APIv4 key authentication: apiv4
var apiv4 = defaultClient.authentications['apiv4'];
apiv4.key = 'YOUR_API_KEY'
apiv4.secret = 'YOUR_API_SECRET'

var apiInstance = new GateApi.DeliveryApi();
var settle = usdt; // String | Settle currency
var contract = BTC_USDT_WEEKLY_20200703; // String | Futures contract
var leverage = 10; // String | New position leverage
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateDeliveryPositionLeverage(settle, contract, leverage, callback);
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **String**| Settle currency | 
 **contract** | **String**| Futures contract | 
 **leverage** | **String**| New position leverage | 

### Return type

[**Position**](Position.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## updateDeliveryPositionMargin

> Position updateDeliveryPositionMargin(settle, contract, change)

Update position margin

### Example

```javascript
var GateApi = require('gate-api');

var defaultClient = GateApi.ApiClient.instance;
// Configure Gate APIv4 key authentication: apiv4
var apiv4 = defaultClient.authentications['apiv4'];
apiv4.key = 'YOUR_API_KEY'
apiv4.secret = 'YOUR_API_SECRET'

var apiInstance = new GateApi.DeliveryApi();
var settle = usdt; // String | Settle currency
var contract = BTC_USDT_WEEKLY_20200703; // String | Futures contract
var change = 0.01; // String | Margin change. Use positive number to increase margin, negative number otherwise.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateDeliveryPositionMargin(settle, contract, change, callback);
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **String**| Settle currency | 
 **contract** | **String**| Futures contract | 
 **change** | **String**| Margin change. Use positive number to increase margin, negative number otherwise. | 

### Return type

[**Position**](Position.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## updateDeliveryPositionRiskLimit

> Position updateDeliveryPositionRiskLimit(settle, contract, riskLimit)

Update position risk limit

### Example

```javascript
var GateApi = require('gate-api');

var defaultClient = GateApi.ApiClient.instance;
// Configure Gate APIv4 key authentication: apiv4
var apiv4 = defaultClient.authentications['apiv4'];
apiv4.key = 'YOUR_API_KEY'
apiv4.secret = 'YOUR_API_SECRET'

var apiInstance = new GateApi.DeliveryApi();
var settle = usdt; // String | Settle currency
var contract = BTC_USDT_WEEKLY_20200703; // String | Futures contract
var riskLimit = 10; // String | New position risk limit
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateDeliveryPositionRiskLimit(settle, contract, riskLimit, callback);
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **String**| Settle currency | 
 **contract** | **String**| Futures contract | 
 **riskLimit** | **String**| New position risk limit | 

### Return type

[**Position**](Position.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
