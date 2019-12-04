# GateApi.Loan

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Loan ID | [optional] 
**createTime** | **String** | Creation time | [optional] 
**expireTime** | **String** | Repay time of the loan. No value will be returned for lending loan | [optional] 
**status** | **String** | Loan status  open - not fully loaned loaned - all loaned out for lending loan; loaned in for borrowing side finished - loan is finished, either being all repaid or cancelled by the lender auto_repaid - automatically repaid by the system | [optional] 
**side** | **String** | Loan side | 
**currency** | **String** | Loan currency | 
**rate** | **String** | Loan rate. Only rates in [0.0002, 0.002] are supported.  Not required in lending. Market rate calculated from recent rates will be used if not set | [optional] 
**amount** | **String** | Loan amount | 
**days** | **Number** | Loan days | 
**autoRenew** | **Boolean** | Auto renew the loan on expiration | [optional] [default to false]
**currencyPair** | **String** | Currency pair. Required for borrowing side | [optional] 
**left** | **String** | Amount not lending out | [optional] 
**repaid** | **String** | Repaid amount | [optional] 
**paidInterest** | **String** | Repaid interest | [optional] 
**unpaidInterest** | **String** | Interest not repaid | [optional] 
**feeRate** | **String** | Loan fee rate | [optional] 
**origId** | **String** | Original loan ID if the loan is auto-renewed. Equal to &#x60;id&#x60; if not | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `open` (value: `"open"`)

* `loaned` (value: `"loaned"`)

* `finished` (value: `"finished"`)

* `auto_repaid` (value: `"auto_repaid"`)




<a name="SideEnum"></a>
## Enum: SideEnum


* `lend` (value: `"lend"`)

* `borrow` (value: `"borrow"`)




