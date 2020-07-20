# GateApi.FuturesPriceTrigger

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**strategyType** | **Number** | How the order will be triggered   - &#x60;0&#x60;: by price, which means order will be triggered on price condition satisfied  - &#x60;1&#x60;: by price gap, which means order will be triggered on gap of recent two prices of specified &#x60;price_type&#x60; satisfied.  Only &#x60;0&#x60; is supported currently | [optional] 
**priceType** | **Number** | Price type. 0 - latest deal price, 1 - mark price, 2 - index price | [optional] 
**price** | **String** | Value of price on price triggered, or price gap on price gap triggered | [optional] 
**rule** | **Number** | Trigger condition type  - &#x60;1&#x60;: calculated price based on &#x60;strategy_type&#x60; and &#x60;price_type&#x60; &gt;&#x3D; &#x60;price&#x60; - &#x60;2&#x60;: calculated price based on &#x60;strategy_type&#x60; and &#x60;price_type&#x60; &lt;&#x3D; &#x60;price&#x60; | [optional] 
**expiration** | **Number** | How many seconds will the order wait for the condition being triggered. Order will be cancelled on timed out | [optional] 

## Enum: StrategyTypeEnum

* `0` (value: `0`)

* `1` (value: `1`)


## Enum: PriceTypeEnum

* `0` (value: `0`)

* `1` (value: `1`)

* `2` (value: `2`)


## Enum: RuleEnum

* `1` (value: `1`)

* `2` (value: `2`)


