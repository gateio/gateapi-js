# GateApi.Trade

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Trade ID | [optional] 
**create_time** | **String** | Trading time | [optional] 
**create_time_ms** | **String** | Trading time, with millisecond precision | [optional] 
**currency_pair** | **String** | Currency pair | [optional] 
**side** | **String** | Order side | [optional] 
**role** | **String** | Trade role. No value in public endpoints | [optional] 
**amount** | **String** | Trade amount | [optional] 
**price** | **String** | Order price | [optional] 
**order_id** | **String** | Related order ID. No value in public endpoints | [optional] 
**fee** | **String** | Fee deducted. No value in public endpoints | [optional] 
**fee_currency** | **String** | Fee currency unit. No value in public endpoints | [optional] 
**point_fee** | **String** | Points used to deduct fee. No value in public endpoints | [optional] 
**gt_fee** | **String** | GT used to deduct fee. No value in public endpoints | [optional] 

## Enum: SideEnum

* `buy` (value: `"buy"`)

* `sell` (value: `"sell"`)


## Enum: RoleEnum

* `taker` (value: `"taker"`)

* `maker` (value: `"maker"`)


