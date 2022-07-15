# GateApi.MarginCurrencyPair

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Currency pair | [optional] 
**base** | **String** | Base currency | [optional] 
**quote** | **String** | Quote currency | [optional] 
**leverage** | **Number** | Leverage | [optional] 
**min_base_amount** | **String** | Minimum base currency to loan, &#x60;null&#x60; means no limit | [optional] 
**min_quote_amount** | **String** | Minimum quote currency to loan, &#x60;null&#x60; means no limit | [optional] 
**max_quote_amount** | **String** | Maximum borrowable amount for quote currency. Base currency limit is calculated by quote maximum and market price. &#x60;null&#x60; means no limit | [optional] 
**status** | **Number** | Currency pair status   - &#x60;0&#x60;: disabled  - &#x60;1&#x60;: enabled | [optional] 

