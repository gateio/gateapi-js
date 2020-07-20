# GateApi.LoanPatch

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | **String** | Loan currency | 
**side** | **String** | Loan side. Possible values are &#x60;lend&#x60; and &#x60;borrow&#x60;. For &#x60;LoanRecord&#x60; patching, only &#x60;lend&#x60; is supported | 
**autoRenew** | **Boolean** | Auto renew | 
**currencyPair** | **String** | Currency pair. Required for borrowing side | [optional] 
**loanId** | **String** | Loan ID. Required for &#x60;LoanRecord&#x60; patching | [optional] 

## Enum: SideEnum

* `lend` (value: `"lend"`)

* `borrow` (value: `"borrow"`)


