# GateApi.BatchOrder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**text** | **String** | User defined information. If not empty, must follow the rules below:  1. prefixed with &#x60;t-&#x60; 2. no longer than 28 bytes without &#x60;t-&#x60; prefix 3. can only include 0-9, A-Z, a-z, underscore(_), hyphen(-) or dot(.)  | [optional] 
**succeeded** | **Boolean** | Whether order succeeds | [optional] 
**label** | **String** | Error label, empty string if order succeeds | [optional] 
**message** | **String** | Detailed error message, empty string if order succeeds | [optional] 
**id** | **String** | Order ID | [optional] [readonly] 
**createTime** | **String** | Order creation time | [optional] [readonly] 
**updateTime** | **String** | Order last modification time | [optional] [readonly] 
**status** | **String** | Order status  - &#x60;open&#x60;: to be filled - &#x60;closed&#x60;: filled - &#x60;cancelled&#x60;: cancelled | [optional] [readonly] 
**currencyPair** | **String** | Currency pair | [optional] 
**type** | **String** | Order type. limit - limit order | [optional] [default to &#39;limit&#39;]
**account** | **String** | Account type. spot - use spot account; margin - use margin account | [optional] [default to &#39;spot&#39;]
**side** | **String** | Order side | [optional] 
**amount** | **String** | Trade amount | [optional] 
**price** | **String** | Order price | [optional] 
**timeInForce** | **String** | Time in force  - gtc: GoodTillCancelled - ioc: ImmediateOrCancelled, taker only - poc: PendingOrCancelled, makes a post-only order that always enjoys a maker fee | [optional] [default to &#39;gtc&#39;]
**autoBorrow** | **Boolean** | Used in margin trading(i.e. &#x60;account&#x60; is &#x60;margin&#x60;) to allow automatic loan of insufficient part if balance is not enough. | [optional] 
**left** | **String** | Amount left to fill | [optional] [readonly] 
**fillPrice** | **String** | Total filled in quote currency. Deprecated in favor of &#x60;filled_total&#x60; | [optional] [readonly] 
**filledTotal** | **String** | Total filled in quote currency | [optional] [readonly] 
**fee** | **String** | Fee deducted | [optional] [readonly] 
**feeCurrency** | **String** | Fee currency unit | [optional] [readonly] 
**pointFee** | **String** | Point used to deduct fee | [optional] [readonly] 
**gtFee** | **String** | GT used to deduct fee | [optional] [readonly] 
**gtDiscount** | **Boolean** | Whether GT fee discount is used | [optional] [readonly] 
**rebatedFee** | **String** | Rebated fee | [optional] [readonly] 
**rebatedFeeCurrency** | **String** | Rebated fee currency unit | [optional] [readonly] 

## Enum: StatusEnum

* `open` (value: `"open"`)

* `closed` (value: `"closed"`)

* `cancelled` (value: `"cancelled"`)


## Enum: TypeEnum

* `limit` (value: `"limit"`)


## Enum: AccountEnum

* `spot` (value: `"spot"`)

* `margin` (value: `"margin"`)


## Enum: SideEnum

* `buy` (value: `"buy"`)

* `sell` (value: `"sell"`)


## Enum: TimeInForceEnum

* `gtc` (value: `"gtc"`)

* `ioc` (value: `"ioc"`)

* `poc` (value: `"poc"`)


