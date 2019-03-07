# GateApi.LoanRecord

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Loan record ID | [optional] 
**loanId** | **String** | Loan ID the record belongs to | [optional] 
**createTime** | **String** | Loan time | [optional] 
**expireTime** | **String** | Expiration time | [optional] 
**status** | **String** | Loan record status | [optional] 
**borrowUserId** | **String** | Garbled user ID | [optional] 
**currency** | **String** | Loan currency | [optional] 
**rate** | **String** | Loan rate | [optional] 
**amount** | **String** | Loan amount | [optional] 
**days** | **Number** | Loan days | [optional] 
**autoRenew** | **Boolean** | Whether the record will auto renew on expiration | [optional] [default to false]
**repaid** | **String** | Repaid amount | [optional] 
**paidInterest** | **String** | Repaid interest | [optional] 
**unpaidInterest** | **String** | Interest not repaid | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `loaned` (value: `"loaned"`)

* `finished` (value: `"finished"`)




