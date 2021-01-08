# gate-api

GateApi - JavaScript client for gate-api
APIv4 provides spot, margin and futures trading operations. There are public APIs to retrieve the real-time market statistics, and private APIs which needs authentication to trade on user's behalf.
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 4.18.1
- Package version: 5.18.1
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen
For more information, please visit [https://www.gate.io/page/contacts](https://www.gate.io/page/contacts)

## Versioning

Trying our best to follow the [semantic versioning](https://semver.org/), while enjoying recent features
provided by programming language and libraries, from 4.15.2, one major versioning difference will be
introduced:

If extra code rewrite is required when you upgrade the SDK, such as:

- some outdated programming language version support is dropped
- API method signature has breaking changes.

**the MAJOR version will be incremented, but the MINOR and PATCH version are still following REST API's
instead of resetting to 0**, so that you can recognize it has some breaking changes, but still getting
the idea of from which REST API version the change is introduced.

For example, the previous REST API and SDK version are both 4.14.0. But if we decide to introduce
some breaking changes in SDK along with REST API 4.15.2 upgrade, then the version of next SDK release
will be 5.15.2(the MAJOR version is incremented to denote breaking changes, but the MINOR and PATCH
version are identical to REST API's instead of resetting them to 0)

If MAJOR version is incremented, make sure you read the release note on
[Releases](https://github.com/gateio/gateapi-js/releases)
page

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install gate-api --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your gate-api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('gate-api')` in javascript files from the directory you ran the last command above from.

### git

If the library is hosted at a git repository, e.g. https://github.com/gateio/gateapi-js
then install it via:

```shell
    npm install gateio/gateapi-js --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following the above steps with Node.js and installing browserify with `npm install -g browserify`, perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var GateApi = require('gate-api');

var apiInstance = new GateApi.DeliveryApi();
var settle = "usdt"; // String | Settle currency
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listDeliveryContracts(settle, callback);
```

## Documentation for API Endpoints

All URIs are relative to *https://api.gateio.ws/api/v4*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*DeliveryApi* | [**listDeliveryContracts**](docs/DeliveryApi.md#listDeliveryContracts) | **GET** /delivery/{settle}/contracts | List all futures contracts
*DeliveryApi* | [**getDeliveryContract**](docs/DeliveryApi.md#getDeliveryContract) | **GET** /delivery/{settle}/contracts/{contract} | Get a single contract
*DeliveryApi* | [**listDeliveryOrderBook**](docs/DeliveryApi.md#listDeliveryOrderBook) | **GET** /delivery/{settle}/order_book | Futures order book
*DeliveryApi* | [**listDeliveryTrades**](docs/DeliveryApi.md#listDeliveryTrades) | **GET** /delivery/{settle}/trades | Futures trading history
*DeliveryApi* | [**listDeliveryCandlesticks**](docs/DeliveryApi.md#listDeliveryCandlesticks) | **GET** /delivery/{settle}/candlesticks | Get futures candlesticks
*DeliveryApi* | [**listDeliveryTickers**](docs/DeliveryApi.md#listDeliveryTickers) | **GET** /delivery/{settle}/tickers | List futures tickers
*DeliveryApi* | [**listDeliveryInsuranceLedger**](docs/DeliveryApi.md#listDeliveryInsuranceLedger) | **GET** /delivery/{settle}/insurance | Futures insurance balance history
*FuturesApi* | [**listFuturesContracts**](docs/FuturesApi.md#listFuturesContracts) | **GET** /futures/{settle}/contracts | List all futures contracts
*FuturesApi* | [**getFuturesContract**](docs/FuturesApi.md#getFuturesContract) | **GET** /futures/{settle}/contracts/{contract} | Get a single contract
*FuturesApi* | [**listFuturesOrderBook**](docs/FuturesApi.md#listFuturesOrderBook) | **GET** /futures/{settle}/order_book | Futures order book
*FuturesApi* | [**listFuturesTrades**](docs/FuturesApi.md#listFuturesTrades) | **GET** /futures/{settle}/trades | Futures trading history
*FuturesApi* | [**listFuturesCandlesticks**](docs/FuturesApi.md#listFuturesCandlesticks) | **GET** /futures/{settle}/candlesticks | Get futures candlesticks
*FuturesApi* | [**listFuturesTickers**](docs/FuturesApi.md#listFuturesTickers) | **GET** /futures/{settle}/tickers | List futures tickers
*FuturesApi* | [**listFuturesFundingRateHistory**](docs/FuturesApi.md#listFuturesFundingRateHistory) | **GET** /futures/{settle}/funding_rate | Funding rate history
*FuturesApi* | [**listFuturesInsuranceLedger**](docs/FuturesApi.md#listFuturesInsuranceLedger) | **GET** /futures/{settle}/insurance | Futures insurance balance history
*FuturesApi* | [**listContractStats**](docs/FuturesApi.md#listContractStats) | **GET** /futures/{settle}/contract_stats | Futures stats
*FuturesApi* | [**listLiquidatedOrders**](docs/FuturesApi.md#listLiquidatedOrders) | **GET** /futures/{settle}/liq_orders | Retrieve liquidation history
*MarginApi* | [**listMarginCurrencyPairs**](docs/MarginApi.md#listMarginCurrencyPairs) | **GET** /margin/currency_pairs | List all supported currency pairs supported in margin trading
*MarginApi* | [**getMarginCurrencyPair**](docs/MarginApi.md#getMarginCurrencyPair) | **GET** /margin/currency_pairs/{currency_pair} | Query one single margin currency pair
*MarginApi* | [**listFundingBook**](docs/MarginApi.md#listFundingBook) | **GET** /margin/funding_book | Order book of lending loans
*SpotApi* | [**listCurrencies**](docs/SpotApi.md#listCurrencies) | **GET** /spot/currencies | List all currencies&#39; detail
*SpotApi* | [**getCurrency**](docs/SpotApi.md#getCurrency) | **GET** /spot/currencies/{currency} | Get detail of one particular currency
*SpotApi* | [**listCurrencyPairs**](docs/SpotApi.md#listCurrencyPairs) | **GET** /spot/currency_pairs | List all currency pairs supported
*SpotApi* | [**getCurrencyPair**](docs/SpotApi.md#getCurrencyPair) | **GET** /spot/currency_pairs/{currency_pair} | Get detail of one single order
*SpotApi* | [**listTickers**](docs/SpotApi.md#listTickers) | **GET** /spot/tickers | Retrieve ticker information
*SpotApi* | [**listOrderBook**](docs/SpotApi.md#listOrderBook) | **GET** /spot/order_book | Retrieve order book
*SpotApi* | [**listTrades**](docs/SpotApi.md#listTrades) | **GET** /spot/trades | Retrieve market trades
*SpotApi* | [**listCandlesticks**](docs/SpotApi.md#listCandlesticks) | **GET** /spot/candlesticks | Market candlesticks


## Documentation for Models

 - [Contract](docs/Contract.md)
 - [ContractStat](docs/ContractStat.md)
 - [Currency](docs/Currency.md)
 - [CurrencyPair](docs/CurrencyPair.md)
 - [DeliveryContract](docs/DeliveryContract.md)
 - [FundingBookItem](docs/FundingBookItem.md)
 - [FundingRateRecord](docs/FundingRateRecord.md)
 - [FuturesCandlestick](docs/FuturesCandlestick.md)
 - [FuturesLiquidate](docs/FuturesLiquidate.md)
 - [FuturesOrderBook](docs/FuturesOrderBook.md)
 - [FuturesOrderBookItem](docs/FuturesOrderBookItem.md)
 - [FuturesTicker](docs/FuturesTicker.md)
 - [FuturesTrade](docs/FuturesTrade.md)
 - [InsuranceRecord](docs/InsuranceRecord.md)
 - [MarginCurrencyPair](docs/MarginCurrencyPair.md)
 - [OrderBook](docs/OrderBook.md)
 - [Ticker](docs/Ticker.md)
 - [Trade](docs/Trade.md)


## Documentation for Authorization

All endpoints do not require authorization.
