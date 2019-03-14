# GateApi.SpotApi

All URIs are relative to *https://api.gateio.ws/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelOrder**](SpotApi.md#cancelOrder) | **DELETE** /spot/orders/{order_id} | Cancel a single order
[**cancelOrders**](SpotApi.md#cancelOrders) | **DELETE** /spot/orders | Cancel all &#x60;open&#x60; orders in specified currency pair
[**createOrder**](SpotApi.md#createOrder) | **POST** /spot/orders | Create an order
[**getCurrencyPair**](SpotApi.md#getCurrencyPair) | **GET** /spot/currency_pairs/{currency_pair} | Get detail of one single order
[**getOrder**](SpotApi.md#getOrder) | **GET** /spot/orders/{order_id} | Get a single order
[**listCandlesticks**](SpotApi.md#listCandlesticks) | **GET** /spot/candlesticks | Market candlesticks
[**listCurrencyPairs**](SpotApi.md#listCurrencyPairs) | **GET** /spot/currency_pairs | List all currency pairs supported
[**listMyTrades**](SpotApi.md#listMyTrades) | **GET** /spot/my_trades | List personal trading history
[**listOrderBook**](SpotApi.md#listOrderBook) | **GET** /spot/order_book | Retrieve order book
[**listOrders**](SpotApi.md#listOrders) | **GET** /spot/orders | List futures orders
[**listSpotAccounts**](SpotApi.md#listSpotAccounts) | **GET** /spot/accounts | List spot accounts
[**listTickers**](SpotApi.md#listTickers) | **GET** /spot/tickers | Retrieve ticker information
[**listTrades**](SpotApi.md#listTrades) | **GET** /spot/trades | Retrieve market trades


<a name="cancelOrder"></a>
# **cancelOrder**
> Order cancelOrder(orderId, currencyPair)

Cancel a single order

### Example
```javascript
var GateApi = require('gate-api');
var client = GateApi.ApiClient.instance;
client.key = "YOUR API KEY";
client.secret = "YOUR API SECRET";
// uncomment the next line if you are using the API with other host
// client.basePath = "https://some-other-hosts";

var apiInstance = new GateApi.SpotApi();
var orderId = "12345"; // String | ID returned on order successfully being created
var currencyPair = "BTC_USDT"; // String | Currency pair
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cancelOrder(orderId, currencyPair, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **String**| ID returned on order successfully being created | 
 **currencyPair** | **String**| Currency pair | 

### Return type

[**Order**](Order.md)

### Authorization

Authentication with API key and secret is required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="cancelOrders"></a>
# **cancelOrders**
> [Order] cancelOrders(currencyPair, opts)

Cancel all &#x60;open&#x60; orders in specified currency pair

### Example
```javascript
var GateApi = require('gate-api');
var client = GateApi.ApiClient.instance;
client.key = "YOUR API KEY";
client.secret = "YOUR API SECRET";
// uncomment the next line if you are using the API with other host
// client.basePath = "https://some-other-hosts";

var apiInstance = new GateApi.SpotApi();
var currencyPair = "BTC_USDT"; // String | Currency pair
var opts = {
  'side': "sell", // String | All bids or asks. Both included in not specified
  'account': "spot" // String | Specify account type. Default to all account types being included
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cancelOrders(currencyPair, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyPair** | **String**| Currency pair | 
 **side** | **String**| All bids or asks. Both included in not specified | [optional] 
 **account** | **String**| Specify account type. Default to all account types being included | [optional] 

### Return type

[**[Order]**](Order.md)

### Authorization

Authentication with API key and secret is required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="createOrder"></a>
# **createOrder**
> Order createOrder(order)

Create an order

### Example
```javascript
var GateApi = require('gate-api');
var client = GateApi.ApiClient.instance;
client.key = "YOUR API KEY";
client.secret = "YOUR API SECRET";
// uncomment the next line if you are using the API with other host
// client.basePath = "https://some-other-hosts";

var apiInstance = new GateApi.SpotApi();
var order = new GateApi.Order(); // Order | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createOrder(order, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order** | [**Order**](Order.md)|  | 

### Return type

[**Order**](Order.md)

### Authorization

Authentication with API key and secret is required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCurrencyPair"></a>
# **getCurrencyPair**
> CurrencyPair getCurrencyPair(currencyPair)

Get detail of one single order

### Example
```javascript
var GateApi = require('gate-api');

var apiInstance = new GateApi.SpotApi();
var currencyPair = "ETH_BTC"; // String | Currency pair
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCurrencyPair(currencyPair, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyPair** | **String**| Currency pair | 

### Return type

[**CurrencyPair**](CurrencyPair.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrder"></a>
# **getOrder**
> Order getOrder(orderId, currencyPair)

Get a single order

### Example
```javascript
var GateApi = require('gate-api');
var client = GateApi.ApiClient.instance;
client.key = "YOUR API KEY";
client.secret = "YOUR API SECRET";
// uncomment the next line if you are using the API with other host
// client.basePath = "https://some-other-hosts";

var apiInstance = new GateApi.SpotApi();
var orderId = "12345"; // String | ID returned on order successfully being created
var currencyPair = "BTC_USDT"; // String | Currency pair
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrder(orderId, currencyPair, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **String**| ID returned on order successfully being created | 
 **currencyPair** | **String**| Currency pair | 

### Return type

[**Order**](Order.md)

### Authorization

Authentication with API key and secret is required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listCandlesticks"></a>
# **listCandlesticks**
> [[String]] listCandlesticks(currencyPair, opts)

Market candlesticks

Candlestick data will start from (current time - limit * interval), end at current time

### Example
```javascript
var GateApi = require('gate-api');

var apiInstance = new GateApi.SpotApi();
var currencyPair = "BTC_USDT"; // String | Currency pair
var opts = {
  'limit': 100, // Number | Maximum number of record returned in one list
  'interval': "'30m'" // String | Interval time between data points
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listCandlesticks(currencyPair, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyPair** | **String**| Currency pair | 
 **limit** | **Number**| Maximum number of record returned in one list | [optional] [default to 100]
 **interval** | **String**| Interval time between data points | [optional] [default to &#39;30m&#39;]

### Return type

**[[String]]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listCurrencyPairs"></a>
# **listCurrencyPairs**
> [CurrencyPair] listCurrencyPairs()

List all currency pairs supported

### Example
```javascript
var GateApi = require('gate-api');

var apiInstance = new GateApi.SpotApi();
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listCurrencyPairs(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[CurrencyPair]**](CurrencyPair.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listMyTrades"></a>
# **listMyTrades**
> [Trade] listMyTrades(currencyPair, opts)

List personal trading history

### Example
```javascript
var GateApi = require('gate-api');
var client = GateApi.ApiClient.instance;
client.key = "YOUR API KEY";
client.secret = "YOUR API SECRET";
// uncomment the next line if you are using the API with other host
// client.basePath = "https://some-other-hosts";

var apiInstance = new GateApi.SpotApi();
var currencyPair = "BTC_USDT"; // String | Currency pair
var opts = {
  'limit': 100, // Number | Maximum number of record returned in one list
  'page': 1, // Number | Page number
  'orderId': "12345" // String | List all trades of specified order
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listMyTrades(currencyPair, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyPair** | **String**| Currency pair | 
 **limit** | **Number**| Maximum number of record returned in one list | [optional] [default to 100]
 **page** | **Number**| Page number | [optional] [default to 1]
 **orderId** | **String**| List all trades of specified order | [optional] 

### Return type

[**[Trade]**](Trade.md)

### Authorization

Authentication with API key and secret is required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listOrderBook"></a>
# **listOrderBook**
> OrderBook listOrderBook(currencyPair, opts)

Retrieve order book

Order book will be sorted by price from high to low on bids; reversed on asks

### Example
```javascript
var GateApi = require('gate-api');

var apiInstance = new GateApi.SpotApi();
var currencyPair = "BTC_USDT"; // String | Currency pair
var opts = {
  'interval': "'0'", // String | Price precision of order book. 0 means no aggregation is applied
  'limit': 10 // Number | Maximum number of order depth data in asks or bids
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listOrderBook(currencyPair, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyPair** | **String**| Currency pair | 
 **interval** | **String**| Price precision of order book. 0 means no aggregation is applied | [optional] [default to &#39;0&#39;]
 **limit** | **Number**| Maximum number of order depth data in asks or bids | [optional] [default to 10]

### Return type

[**OrderBook**](OrderBook.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listOrders"></a>
# **listOrders**
> [Order] listOrders(currencyPair, status, opts)

List futures orders

### Example
```javascript
var GateApi = require('gate-api');
var client = GateApi.ApiClient.instance;
client.key = "YOUR API KEY";
client.secret = "YOUR API SECRET";
// uncomment the next line if you are using the API with other host
// client.basePath = "https://some-other-hosts";

var apiInstance = new GateApi.SpotApi();
var currencyPair = "BTC_USDT"; // String | Currency pair
var status = "open"; // String | List orders based on status  `open` - order is waiting to be filled `finished` - order has been filled or cancelled 
var opts = {
  'page': 1, // Number | Page number
  'limit': 100 // Number | Maximum number of record returned in one list
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listOrders(currencyPair, status, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyPair** | **String**| Currency pair | 
 **status** | **String**| List orders based on status  &#x60;open&#x60; - order is waiting to be filled &#x60;finished&#x60; - order has been filled or cancelled  | 
 **page** | **Number**| Page number | [optional] [default to 1]
 **limit** | **Number**| Maximum number of record returned in one list | [optional] [default to 100]

### Return type

[**[Order]**](Order.md)

### Authorization

Authentication with API key and secret is required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listSpotAccounts"></a>
# **listSpotAccounts**
> [SpotAccount] listSpotAccounts(opts)

List spot accounts

### Example
```javascript
var GateApi = require('gate-api');
var client = GateApi.ApiClient.instance;
client.key = "YOUR API KEY";
client.secret = "YOUR API SECRET";
// uncomment the next line if you are using the API with other host
// client.basePath = "https://some-other-hosts";

var apiInstance = new GateApi.SpotApi();
var opts = {
  'currency': "BTC" // String | Retrieved specified currency related data
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listSpotAccounts(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **String**| Retrieved specified currency related data | [optional] 

### Return type

[**[SpotAccount]**](SpotAccount.md)

### Authorization

Authentication with API key and secret is required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listTickers"></a>
# **listTickers**
> [Ticker] listTickers(opts)

Retrieve ticker information

Return only related data if &#x60;currency_pair&#x60; is specified; otherwise return all of them

### Example
```javascript
var GateApi = require('gate-api');

var apiInstance = new GateApi.SpotApi();
var opts = {
  'currencyPair': "BTC_USDT" // String | Currency pair
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listTickers(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyPair** | **String**| Currency pair | [optional] 

### Return type

[**[Ticker]**](Ticker.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listTrades"></a>
# **listTrades**
> [Trade] listTrades(currencyPair, opts)

Retrieve market trades

### Example
```javascript
var GateApi = require('gate-api');

var apiInstance = new GateApi.SpotApi();
var currencyPair = "BTC_USDT"; // String | Currency pair
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
apiInstance.listTrades(currencyPair, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyPair** | **String**| Currency pair | 
 **limit** | **Number**| Maximum number of record returned in one list | [optional] [default to 100]
 **lastId** | **String**| Specify list staring point using the last record of &#x60;id&#x60; in previous list-query results | [optional] 

### Return type

[**[Trade]**](Trade.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

