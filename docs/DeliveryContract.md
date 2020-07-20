# GateApi.DeliveryContract

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Futures contract | [optional] 
**underling** | **String** | Underlying | [optional] 
**cycle** | **String** | Cycle type, e.g. WEEKLY, QUARTERLY | [optional] 
**type** | **String** | Futures contract type | [optional] 
**quantoMultiplier** | **String** | Multiplier used in converting from invoicing to settlement currency in quanto futures | [optional] 
**leverageMin** | **String** | Minimum leverage | [optional] 
**leverageMax** | **String** | Maximum leverage | [optional] 
**maintenanceRate** | **String** | Maintenance rate of margin | [optional] 
**markType** | **String** | Mark price type, internal - based on internal trading, index - based on external index price | [optional] 
**markPrice** | **String** | Current mark price | [optional] 
**indexPrice** | **String** | Current index price | [optional] 
**lastPrice** | **String** | Last trading price | [optional] 
**makerFeeRate** | **String** | Maker fee rate, where negative means rebate | [optional] 
**takerFeeRate** | **String** | Taker fee rate | [optional] 
**orderPriceRound** | **String** | Minimum order price increment | [optional] 
**markPriceRound** | **String** | Minimum mark price increment | [optional] 
**basisRate** | **String** | Fair basis rate | [optional] 
**basisValue** | **String** | Fair basis value | [optional] 
**basisImpactValue** | **String** | Funding used for calculating impact bid, ask price | [optional] 
**settlePrice** | **String** | Settle price | [optional] 
**settlePriceInterval** | **Number** | Settle price update interval | [optional] 
**settlePriceDuration** | **Number** | Settle price update duration in seconds | [optional] 
**expireTime** | **Number** | Contract expiry timestamp | [optional] 
**riskLimitBase** | **String** | Risk limit base | [optional] 
**riskLimitStep** | **String** | Step of adjusting risk limit | [optional] 
**riskLimitMax** | **String** | Maximum risk limit the contract allowed | [optional] 
**orderSizeMin** | **Number** | Minimum order size the contract allowed | [optional] 
**orderSizeMax** | **Number** | Maximum order size the contract allowed | [optional] 
**orderPriceDeviate** | **String** | deviation between order price and current index price. If price of an order is denoted as order_price, it must meet the following condition:      abs(order_price - mark_price) &lt;&#x3D; mark_price * order_price_deviate | [optional] 
**refDiscountRate** | **String** | Referral fee rate discount | [optional] 
**refRebateRate** | **String** | Referrer commission rate | [optional] 
**orderbookId** | **Number** | Current orderbook ID | [optional] 
**tradeId** | **Number** | Current trade ID | [optional] 
**tradeSize** | **Number** | Historical accumulation trade size | [optional] 
**positionSize** | **Number** | Current total long position size | [optional] 
**configChangeTime** | **Number** | Configuration&#39;s last changed time | [optional] 
**inDelisting** | **Boolean** | Contract is delisting | [optional] 

## Enum: CycleEnum

* `WEEKLY` (value: `"WEEKLY"`)

* `BI-WEEKLY` (value: `"BI-WEEKLY"`)

* `QUARTERLY` (value: `"QUARTERLY"`)

* `BI-QUARTERLY` (value: `"BI-QUARTERLY"`)


## Enum: TypeEnum

* `inverse` (value: `"inverse"`)

* `direct` (value: `"direct"`)


## Enum: MarkTypeEnum

* `internal` (value: `"internal"`)

* `index` (value: `"index"`)


