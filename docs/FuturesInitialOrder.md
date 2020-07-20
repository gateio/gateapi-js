# GateApi.FuturesInitialOrder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contract** | **String** | Futures contract | 
**size** | **Number** | Order size. Positive size means to buy, while negative one means to sell. Set to 0 to close the position | [optional] 
**price** | **String** | Order price. Set to 0 to use market price | 
**close** | **Boolean** | Set to true if trying to close the position | [optional] [default to false]
**tif** | **String** | Time in force. If using market price, only &#x60;ioc&#x60; is supported.  - gtc: GoodTillCancelled - ioc: ImmediateOrCancelled | [optional] [default to &#39;gtc&#39;]
**text** | **String** | How the order is created. Possible values are: web, api and app | [optional] 
**reduceOnly** | **Boolean** | Set to true to create an reduce-only order | [optional] [default to false]
**isReduceOnly** | **Boolean** | Is the order reduce-only | [optional] [readonly] 
**isClose** | **Boolean** | Is the order to close position | [optional] [readonly] 

## Enum: TifEnum

* `gtc` (value: `"gtc"`)

* `ioc` (value: `"ioc"`)


