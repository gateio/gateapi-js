# GateApi.FuturesPriceTriggeredOrder

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**initial** | [**FuturesInitialOrder**](FuturesInitialOrder.md) |  | 
**trigger** | [**FuturesPriceTrigger**](FuturesPriceTrigger.md) |  | 
**id** | **Number** | Auto order ID | [optional] 
**user** | **Number** | User ID | [optional] 
**createTime** | **Number** | Creation time | [optional] 
**finishTime** | **Number** | Finished time | [optional] 
**tradeId** | **Number** | ID of the newly created order on condition triggered | [optional] 
**status** | **String** | Order status. | [optional] 
**finishAs** | **String** | How order is finished | [optional] 
**reason** | **String** | Extra messages of how order is finished | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `open` (value: `"open"`)

* `finished` (value: `"finished"`)




<a name="FinishAsEnum"></a>
## Enum: FinishAsEnum


* `cancelled` (value: `"cancelled"`)

* `succeeded` (value: `"succeeded"`)

* `failed` (value: `"failed"`)

* `expired` (value: `"expired"`)




