# GateApi.FuturesTicker

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contract** | **String** | Futures contract | [optional] 
**last** | **String** | Last trading price | [optional] 
**change_percentage** | **String** | Change percentage. | [optional] 
**total_size** | **String** | Contract total size | [optional] 
**low_24h** | **String** | Lowest trading price in recent 24h | [optional] 
**high_24h** | **String** | Highest trading price in recent 24h | [optional] 
**volume_24h** | **String** | Trade size in recent 24h | [optional] 
**volume_24h_btc** | **String** | Trade volumes in recent 24h in BTC(deprecated, use &#x60;volume_24h_base&#x60;, &#x60;volume_24h_quote&#x60;, &#x60;volume_24h_settle&#x60; instead) | [optional] 
**volume_24h_usd** | **String** | Trade volumes in recent 24h in USD(deprecated, use &#x60;volume_24h_base&#x60;, &#x60;volume_24h_quote&#x60;, &#x60;volume_24h_settle&#x60; instead) | [optional] 
**volume_24h_base** | **String** | Trade volume in recent 24h, in base currency | [optional] 
**volume_24h_quote** | **String** | Trade volume in recent 24h, in quote currency | [optional] 
**volume_24h_settle** | **String** | Trade volume in recent 24h, in settle currency | [optional] 
**mark_price** | **String** | Recent mark price | [optional] 
**funding_rate** | **String** | Funding rate | [optional] 
**funding_rate_indicative** | **String** | Indicative Funding rate in next period | [optional] 
**index_price** | **String** | Index price | [optional] 
**quanto_base_rate** | **String** | Exchange rate of base currency and settlement currency in Quanto contract. Does not exists in contracts of other types | [optional] 

