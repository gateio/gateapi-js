# GateApi.Contract

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Futures contract | [optional] 
**type** | **String** | Futures contract type | [optional] 
**quanto_multiplier** | **String** | Multiplier used in converting from invoicing to settlement currency in quanto futures | [optional] 
**leverage_min** | **String** | Minimum leverage | [optional] 
**leverage_max** | **String** | Maximum leverage | [optional] 
**maintenance_rate** | **String** | Maintenance rate of margin | [optional] 
**mark_type** | **String** | Mark price type, internal - based on internal trading, index - based on external index price | [optional] 
**mark_price** | **String** | Current mark price | [optional] 
**index_price** | **String** | Current index price | [optional] 
**last_price** | **String** | Last trading price | [optional] 
**maker_fee_rate** | **String** | Maker fee rate, where negative means rebate | [optional] 
**taker_fee_rate** | **String** | Taker fee rate | [optional] 
**order_price_round** | **String** | Minimum order price increment | [optional] 
**mark_price_round** | **String** | Minimum mark price increment | [optional] 
**funding_rate** | **String** | Current funding rate | [optional] 
**funding_interval** | **Number** | Funding application interval, unit in seconds | [optional] 
**funding_next_apply** | **Number** | Next funding time | [optional] 
**risk_limit_base** | **String** | Risk limit base | [optional] 
**risk_limit_step** | **String** | Step of adjusting risk limit | [optional] 
**risk_limit_max** | **String** | Maximum risk limit the contract allowed | [optional] 
**order_size_min** | **Number** | Minimum order size the contract allowed | [optional] 
**order_size_max** | **Number** | Maximum order size the contract allowed | [optional] 
**order_price_deviate** | **String** | deviation between order price and current index price. If price of an order is denoted as order_price, it must meet the following condition:      abs(order_price - mark_price) &lt;&#x3D; mark_price * order_price_deviate | [optional] 
**ref_discount_rate** | **String** | Referral fee rate discount | [optional] 
**ref_rebate_rate** | **String** | Referrer commission rate | [optional] 
**orderbook_id** | **Number** | Current orderbook ID | [optional] 
**trade_id** | **Number** | Current trade ID | [optional] 
**trade_size** | **Number** | Historical accumulation trade size | [optional] 
**position_size** | **Number** | Current total long position size | [optional] 
**config_change_time** | **Number** | Configuration&#39;s last changed time | [optional] 
**in_delisting** | **Boolean** | Contract is delisting | [optional] 
**orders_limit** | **Number** | Maximum number of open orders | [optional] 

## Enum: TypeEnum

* `inverse` (value: `"inverse"`)

* `direct` (value: `"direct"`)


## Enum: MarkTypeEnum

* `internal` (value: `"internal"`)

* `index` (value: `"index"`)


