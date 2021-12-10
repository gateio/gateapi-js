# GateApi.OptionsContract

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Futures contract | [optional] 
**tag** | **String** | 标记 | [optional] 
**create_time** | **Number** | Creation time | [optional] 
**expiration_time** | **Number** | Expiration time | [optional] 
**is_call** | **Boolean** | &#x60;true&#x60; means call options, while &#x60;false&#x60; is put options | [optional] 
**multiplier** | **String** | Multiplier used in converting from invoicing to settlement currency | [optional] 
**underlying** | **String** | Underlying | [optional] 
**underlying_price** | **String** | Underlying price | [optional] 
**last_price** | **String** | Last trading price | [optional] 
**mark_price** | **String** | Current mark price | [optional] 
**index_price** | **String** | Current index price | [optional] 
**maker_fee_rate** | **String** | Maker fee rate, where negative means rebate | [optional] 
**taker_fee_rate** | **String** | Taker fee rate | [optional] 
**order_price_round** | **String** | Minimum order price increment | [optional] 
**mark_price_round** | **String** | Minimum mark price increment | [optional] 
**order_size_min** | **Number** | Minimum order size the contract allowed | [optional] 
**order_size_max** | **Number** | Maximum order size the contract allowed | [optional] 
**order_price_deviate** | **String** | deviation between order price and current index price. If price of an order is denoted as order_price, it must meet the following condition:      abs(order_price - mark_price) &lt;&#x3D; mark_price * order_price_deviate | [optional] 
**ref_discount_rate** | **String** | Referral fee rate discount | [optional] 
**ref_rebate_rate** | **String** | Referrer commission rate | [optional] 
**orderbook_id** | **Number** | Current orderbook ID | [optional] 
**trade_id** | **Number** | Current trade ID | [optional] 
**trade_size** | **Number** | Historical accumulated trade size | [optional] 
**position_size** | **Number** | Current total long position size | [optional] 
**orders_limit** | **Number** | Maximum number of open orders | [optional] 

