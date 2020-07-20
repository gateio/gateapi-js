# GateApi.FuturesPriceTriggeredOrder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**initial** | [**FuturesInitialOrder**](FuturesInitialOrder.md) |  | 
**trigger** | [**FuturesPriceTrigger**](FuturesPriceTrigger.md) |  | 
**id** | **Number** | Auto order ID | [optional] [readonly] 
**user** | **Number** | User ID | [optional] [readonly] 
**createTime** | **Number** | Creation time | [optional] [readonly] 
**finishTime** | **Number** | Finished time | [optional] [readonly] 
**tradeId** | **Number** | ID of the newly created order on condition triggered | [optional] [readonly] 
**status** | **String** | Order status. | [optional] [readonly] 
**finishAs** | **String** | How order is finished | [optional] [readonly] 
**reason** | **String** | Extra messages of how order is finished | [optional] [readonly] 

## Enum: StatusEnum

* `open` (value: `"open"`)

* `finished` (value: `"finished"`)


## Enum: FinishAsEnum

* `cancelled` (value: `"cancelled"`)

* `succeeded` (value: `"succeeded"`)

* `failed` (value: `"failed"`)

* `expired` (value: `"expired"`)


