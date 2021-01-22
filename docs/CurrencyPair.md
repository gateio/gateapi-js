# GateApi.CurrencyPair

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Currency pair | [optional] 
**base** | **String** | Base currency | [optional] 
**quote** | **String** | Quote currency | [optional] 
**fee** | **String** | Trading fee | [optional] 
**min_base_amount** | **String** | Minimum amount of base currency to trade, &#x60;null&#x60; means no limit | [optional] 
**min_quote_amount** | **String** | Minimum amount of quote currency to trade, &#x60;null&#x60; means no limit | [optional] 
**amount_precision** | **Number** | Amount scale | [optional] 
**precision** | **Number** | Price scale | [optional] 
**trade_status** | **String** | How currency pair can be traded  - untradable: cannot be bought or sold - buyable: can be bought - sellable: can be sold - tradable: can be bought or sold | [optional] 
**etf_net_value** | **String** | ETF net value | [optional] 
**etf_pre_net_value** | **String** | ETF previous net value at re-balancing time | [optional] 
**etf_pre_timestamp** | **Number** | ETF previous re-balancing time | [optional] 
**etf_leverage** | **String** | ETF current leverage | [optional] 

## Enum: TradeStatusEnum

* `untradable` (value: `"untradable"`)

* `buyable` (value: `"buyable"`)

* `sellable` (value: `"sellable"`)

* `tradable` (value: `"tradable"`)


