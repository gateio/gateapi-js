# GateApi.FuturesOrder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Futures order ID | [optional] [readonly] 
**user** | **Number** | User ID | [optional] [readonly] 
**createTime** | **Number** | Order creation time | [optional] [readonly] 
**finishTime** | **Number** | Order finished time. Not returned if order is open | [optional] [readonly] 
**finishAs** | **String** | How the order is finished.  - filled: all filled - cancelled: manually cancelled - liquidated: cancelled because of liquidation - ioc: time in force is &#x60;IOC&#x60;, finish immediately - auto_deleveraged: finished by ADL - reduce_only: cancelled because of increasing position while &#x60;reduce-only&#x60; set | [optional] [readonly] 
**status** | **String** | Order status  - &#x60;open&#x60;: waiting to be traded - &#x60;finished&#x60;: finished | [optional] [readonly] 
**contract** | **String** | Futures contract | 
**size** | **Number** | Order size. Specify positive number to make a bid, and negative number to ask | [optional] 
**iceberg** | **Number** | Display size for iceberg order. 0 for non-iceberg. Note that you would pay the taker fee for the hidden size | [optional] 
**price** | **String** | Order price. 0 for market order with &#x60;tif&#x60; set as &#x60;ioc&#x60; | [optional] 
**close** | **Boolean** | Set as &#x60;true&#x60; to close the position, with &#x60;size&#x60; set to 0 | [optional] [default to false]
**isClose** | **Boolean** | Is the order to close position | [optional] [readonly] 
**reduceOnly** | **Boolean** | Set as &#x60;true&#x60; to be reduce-only order | [optional] [default to false]
**isReduceOnly** | **Boolean** | Is the order reduce-only | [optional] [readonly] 
**isLiq** | **Boolean** | Is the order for liquidation | [optional] [readonly] 
**tif** | **String** | Time in force  - gtc: GoodTillCancelled - ioc: ImmediateOrCancelled, taker only - poc: PendingOrCancelled, reduce-only | [optional] [default to &#39;gtc&#39;]
**left** | **Number** | Size left to be traded | [optional] [readonly] 
**fillPrice** | **String** | Fill price of the order | [optional] [readonly] 
**text** | **String** | User defined information. If not empty, must follow the rules below:  1. prefixed with &#x60;t-&#x60; 2. no longer than 28 bytes without &#x60;t-&#x60; prefix 3. can only include 0-9, A-Z, a-z, underscore(_), hyphen(-) or dot(.) Besides user defined information, reserved contents are listed below, denoting how the order is created:  - web: from web - api: from API - app: from mobile phones - auto_deleveraging: from ADL - liquidation: from liquidation - insurance: from insurance  | [optional] 
**tkfr** | **String** | Taker fee | [optional] [readonly] 
**mkfr** | **String** | Maker fee | [optional] [readonly] 
**refu** | **Number** | Reference user ID | [optional] [readonly] 

## Enum: FinishAsEnum

* `filled` (value: `"filled"`)

* `cancelled` (value: `"cancelled"`)

* `liquidated` (value: `"liquidated"`)

* `ioc` (value: `"ioc"`)

* `auto_deleveraged` (value: `"auto_deleveraged"`)

* `reduce_only` (value: `"reduce_only"`)


## Enum: StatusEnum

* `open` (value: `"open"`)

* `finished` (value: `"finished"`)


## Enum: TifEnum

* `gtc` (value: `"gtc"`)

* `ioc` (value: `"ioc"`)

* `poc` (value: `"poc"`)


