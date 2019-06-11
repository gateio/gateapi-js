# GateApi.FuturesAccountBook

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**time** | **Number** | Change time | [optional] 
**change** | **String** | Change amount | [optional] 
**balance** | **String** | Balance after change | [optional] 
**type** | **String** | Changing Type: - dnw: Deposit &amp; Withdraw - pnl: Profit &amp; Loss by reducing position - fee: Trading fee - refr: Referrer rebate - fund: Funding - point_dnw: POINT Deposit &amp; Withdraw - point_fee: POINT Trading fee - point_refr: POINT Referrer rebate | [optional] 
**text** | **String** | Comment | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `dnw` (value: `"dnw"`)

* `pnl` (value: `"pnl"`)

* `fee` (value: `"fee"`)

* `refr` (value: `"refr"`)

* `fund` (value: `"fund"`)

* `point_dnw` (value: `"point_dnw"`)

* `point_fee` (value: `"point_fee"`)

* `point_refr` (value: `"point_refr"`)




