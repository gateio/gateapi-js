# GateApi.MarginApi

All URIs are relative to *https://api.gateio.ws/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelLoan**](MarginApi.md#cancelLoan) | **DELETE** /margin/loans/{loan_id} | Cancel lending loan
[**createLoan**](MarginApi.md#createLoan) | **POST** /margin/loans | Lend or borrow
[**getLoan**](MarginApi.md#getLoan) | **GET** /margin/loans/{loan_id} | Retrieve one single loan detail
[**getLoanRecord**](MarginApi.md#getLoanRecord) | **GET** /margin/loan_records/{loan_record_id} | Get one single loan record
[**listFundingAccounts**](MarginApi.md#listFundingAccounts) | **GET** /margin/funding_accounts | Funding account list
[**listFundingBook**](MarginApi.md#listFundingBook) | **GET** /margin/funding_book | Order book of lending loans
[**listLoanRecords**](MarginApi.md#listLoanRecords) | **GET** /margin/loan_records | List repayment records of specified loan
[**listLoanRepayments**](MarginApi.md#listLoanRepayments) | **GET** /margin/loans/{loan_id}/repayment | List loan repayment records
[**listLoans**](MarginApi.md#listLoans) | **GET** /margin/loans | List all loans
[**listMarginAccounts**](MarginApi.md#listMarginAccounts) | **GET** /margin/accounts | Margin account list
[**listMarginCurrencyPairs**](MarginApi.md#listMarginCurrencyPairs) | **GET** /margin/currency_pairs | List all supported currency pairs supported in margin trading
[**mergeLoans**](MarginApi.md#mergeLoans) | **POST** /margin/merged_loans | Merge multiple lending loans
[**repayLoan**](MarginApi.md#repayLoan) | **POST** /margin/loans/{loan_id}/repayment | Repay a loan
[**updateLoan**](MarginApi.md#updateLoan) | **PATCH** /margin/loans/{loan_id} | Modify a loan
[**updateLoanRecord**](MarginApi.md#updateLoanRecord) | **PATCH** /margin/loan_records/{loan_record_id} | Modify a loan record


<a name="cancelLoan"></a>
# **cancelLoan**
> Loan cancelLoan(loanId, currency)

Cancel lending loan

Only lending loans can be cancelled

### Example
```javascript
var GateApi = require('gate-api');
var client = GateApi.ApiClient.instance;
client.key = "YOUR API KEY";
client.secret = "YOUR API SECRET";
// uncomment the next line if you are using the API with other host
// client.basePath = "https://some-other-hosts";

var apiInstance = new GateApi.MarginApi();
var loanId = "12345"; // String | Loan ID
var currency = "BTC"; // String | Retrieved specified currency related data
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cancelLoan(loanId, currency, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loanId** | **String**| Loan ID | 
 **currency** | **String**| Retrieved specified currency related data | 

### Return type

[**Loan**](Loan.md)

### Authorization

Authentication with API key and secret is required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="createLoan"></a>
# **createLoan**
> Loan createLoan(loan)

Lend or borrow

### Example
```javascript
var GateApi = require('gate-api');
var client = GateApi.ApiClient.instance;
client.key = "YOUR API KEY";
client.secret = "YOUR API SECRET";
// uncomment the next line if you are using the API with other host
// client.basePath = "https://some-other-hosts";

var apiInstance = new GateApi.MarginApi();
var loan = new GateApi.Loan(); // Loan | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createLoan(loan, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loan** | [**Loan**](Loan.md)|  | 

### Return type

[**Loan**](Loan.md)

### Authorization

Authentication with API key and secret is required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getLoan"></a>
# **getLoan**
> Loan getLoan(loanId, side)

Retrieve one single loan detail

### Example
```javascript
var GateApi = require('gate-api');
var client = GateApi.ApiClient.instance;
client.key = "YOUR API KEY";
client.secret = "YOUR API SECRET";
// uncomment the next line if you are using the API with other host
// client.basePath = "https://some-other-hosts";

var apiInstance = new GateApi.MarginApi();
var loanId = "12345"; // String | Loan ID
var side = "lend"; // String | Lend or borrow
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getLoan(loanId, side, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loanId** | **String**| Loan ID | 
 **side** | **String**| Lend or borrow | 

### Return type

[**Loan**](Loan.md)

### Authorization

Authentication with API key and secret is required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getLoanRecord"></a>
# **getLoanRecord**
> LoanRecord getLoanRecord(loanRecordId, loanId)

Get one single loan record

### Example
```javascript
var GateApi = require('gate-api');
var client = GateApi.ApiClient.instance;
client.key = "YOUR API KEY";
client.secret = "YOUR API SECRET";
// uncomment the next line if you are using the API with other host
// client.basePath = "https://some-other-hosts";

var apiInstance = new GateApi.MarginApi();
var loanRecordId = "12345"; // String | Loan record ID
var loanId = "12345"; // String | Loan ID
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getLoanRecord(loanRecordId, loanId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loanRecordId** | **String**| Loan record ID | 
 **loanId** | **String**| Loan ID | 

### Return type

[**LoanRecord**](LoanRecord.md)

### Authorization

Authentication with API key and secret is required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listFundingAccounts"></a>
# **listFundingAccounts**
> [FundingAccount] listFundingAccounts(opts)

Funding account list

### Example
```javascript
var GateApi = require('gate-api');
var client = GateApi.ApiClient.instance;
client.key = "YOUR API KEY";
client.secret = "YOUR API SECRET";
// uncomment the next line if you are using the API with other host
// client.basePath = "https://some-other-hosts";

var apiInstance = new GateApi.MarginApi();
var opts = {
  'currency': "BTC" // String | Retrieved specified currency related data
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listFundingAccounts(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **String**| Retrieved specified currency related data | [optional] 

### Return type

[**[FundingAccount]**](FundingAccount.md)

### Authorization

Authentication with API key and secret is required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listFundingBook"></a>
# **listFundingBook**
> [FundingBookItem] listFundingBook(currency)

Order book of lending loans

### Example
```javascript
var GateApi = require('gate-api');

var apiInstance = new GateApi.MarginApi();
var currency = "BTC"; // String | Retrieved specified currency related data
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listFundingBook(currency, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **String**| Retrieved specified currency related data | 

### Return type

[**[FundingBookItem]**](FundingBookItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listLoanRecords"></a>
# **listLoanRecords**
> [LoanRecord] listLoanRecords(loanId, opts)

List repayment records of specified loan

### Example
```javascript
var GateApi = require('gate-api');
var client = GateApi.ApiClient.instance;
client.key = "YOUR API KEY";
client.secret = "YOUR API SECRET";
// uncomment the next line if you are using the API with other host
// client.basePath = "https://some-other-hosts";

var apiInstance = new GateApi.MarginApi();
var loanId = "12345"; // String | Loan ID
var opts = {
  'status': "loaned", // String | Loan record status
  'page': 1, // Number | Page number
  'limit': 100 // Number | Maximum number of record returned in one list
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listLoanRecords(loanId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loanId** | **String**| Loan ID | 
 **status** | **String**| Loan record status | [optional] 
 **page** | **Number**| Page number | [optional] [default to 1]
 **limit** | **Number**| Maximum number of record returned in one list | [optional] [default to 100]

### Return type

[**[LoanRecord]**](LoanRecord.md)

### Authorization

Authentication with API key and secret is required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listLoanRepayments"></a>
# **listLoanRepayments**
> [Repayment] listLoanRepayments(loanId)

List loan repayment records

### Example
```javascript
var GateApi = require('gate-api');
var client = GateApi.ApiClient.instance;
client.key = "YOUR API KEY";
client.secret = "YOUR API SECRET";
// uncomment the next line if you are using the API with other host
// client.basePath = "https://some-other-hosts";

var apiInstance = new GateApi.MarginApi();
var loanId = "12345"; // String | Loan ID
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listLoanRepayments(loanId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loanId** | **String**| Loan ID | 

### Return type

[**[Repayment]**](Repayment.md)

### Authorization

Authentication with API key and secret is required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listLoans"></a>
# **listLoans**
> [Loan] listLoans(status, side, opts)

List all loans

### Example
```javascript
var GateApi = require('gate-api');
var client = GateApi.ApiClient.instance;
client.key = "YOUR API KEY";
client.secret = "YOUR API SECRET";
// uncomment the next line if you are using the API with other host
// client.basePath = "https://some-other-hosts";

var apiInstance = new GateApi.MarginApi();
var status = "open"; // String | Loan status
var side = "lend"; // String | Lend or borrow
var opts = {
  'currency': "BTC", // String | Retrieved specified currency related data
  'currencyPair': "BTC_USDT", // String | Currency pair
  'sortBy': "rate", // String | Specify which field is used to sort. `create_time` or `rate` is supported. Default to `create_time`
  'reverseSort': true, // Boolean | Whether to sort in descending order. Default to `true`
  'page': 1, // Number | Page number
  'limit': 100 // Number | Maximum number of record returned in one list
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listLoans(status, side, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | **String**| Loan status | 
 **side** | **String**| Lend or borrow | 
 **currency** | **String**| Retrieved specified currency related data | [optional] 
 **currencyPair** | **String**| Currency pair | [optional] 
 **sortBy** | **String**| Specify which field is used to sort. &#x60;create_time&#x60; or &#x60;rate&#x60; is supported. Default to &#x60;create_time&#x60; | [optional] 
 **reverseSort** | **Boolean**| Whether to sort in descending order. Default to &#x60;true&#x60; | [optional] 
 **page** | **Number**| Page number | [optional] [default to 1]
 **limit** | **Number**| Maximum number of record returned in one list | [optional] [default to 100]

### Return type

[**[Loan]**](Loan.md)

### Authorization

Authentication with API key and secret is required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listMarginAccounts"></a>
# **listMarginAccounts**
> [MarginAccount] listMarginAccounts(opts)

Margin account list

### Example
```javascript
var GateApi = require('gate-api');
var client = GateApi.ApiClient.instance;
client.key = "YOUR API KEY";
client.secret = "YOUR API SECRET";
// uncomment the next line if you are using the API with other host
// client.basePath = "https://some-other-hosts";

var apiInstance = new GateApi.MarginApi();
var opts = {
  'currencyPair': "BTC_USDT" // String | Currency pair
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listMarginAccounts(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyPair** | **String**| Currency pair | [optional] 

### Return type

[**[MarginAccount]**](MarginAccount.md)

### Authorization

Authentication with API key and secret is required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listMarginCurrencyPairs"></a>
# **listMarginCurrencyPairs**
> [MarginCurrencyPair] listMarginCurrencyPairs()

List all supported currency pairs supported in margin trading

### Example
```javascript
var GateApi = require('gate-api');

var apiInstance = new GateApi.MarginApi();
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listMarginCurrencyPairs(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[MarginCurrencyPair]**](MarginCurrencyPair.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="mergeLoans"></a>
# **mergeLoans**
> Loan mergeLoans(currency, ids)

Merge multiple lending loans

### Example
```javascript
var GateApi = require('gate-api');
var client = GateApi.ApiClient.instance;
client.key = "YOUR API KEY";
client.secret = "YOUR API SECRET";
// uncomment the next line if you are using the API with other host
// client.basePath = "https://some-other-hosts";

var apiInstance = new GateApi.MarginApi();
var currency = "BTC"; // String | Retrieved specified currency related data
var ids = "123,234,345"; // String | Lending loan ID list separated by `,`. Maximum of 20 IDs are allowed in one request
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.mergeLoans(currency, ids, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **String**| Retrieved specified currency related data | 
 **ids** | **String**| Lending loan ID list separated by &#x60;,&#x60;. Maximum of 20 IDs are allowed in one request | 

### Return type

[**Loan**](Loan.md)

### Authorization

Authentication with API key and secret is required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="repayLoan"></a>
# **repayLoan**
> Loan repayLoan(loanId, repayRequest)

Repay a loan

### Example
```javascript
var GateApi = require('gate-api');
var client = GateApi.ApiClient.instance;
client.key = "YOUR API KEY";
client.secret = "YOUR API SECRET";
// uncomment the next line if you are using the API with other host
// client.basePath = "https://some-other-hosts";

var apiInstance = new GateApi.MarginApi();
var loanId = "12345"; // String | Loan ID
var repayRequest = new GateApi.RepayRequest(); // RepayRequest | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.repayLoan(loanId, repayRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loanId** | **String**| Loan ID | 
 **repayRequest** | [**RepayRequest**](RepayRequest.md)|  | 

### Return type

[**Loan**](Loan.md)

### Authorization

Authentication with API key and secret is required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateLoan"></a>
# **updateLoan**
> Loan updateLoan(loanId, loanPatch)

Modify a loan

Only &#x60;auto_renew&#x60; modification is supported currently

### Example
```javascript
var GateApi = require('gate-api');
var client = GateApi.ApiClient.instance;
client.key = "YOUR API KEY";
client.secret = "YOUR API SECRET";
// uncomment the next line if you are using the API with other host
// client.basePath = "https://some-other-hosts";

var apiInstance = new GateApi.MarginApi();
var loanId = "12345"; // String | Loan ID
var loanPatch = new GateApi.LoanPatch(); // LoanPatch | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateLoan(loanId, loanPatch, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loanId** | **String**| Loan ID | 
 **loanPatch** | [**LoanPatch**](LoanPatch.md)|  | 

### Return type

[**Loan**](Loan.md)

### Authorization

Authentication with API key and secret is required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateLoanRecord"></a>
# **updateLoanRecord**
> LoanRecord updateLoanRecord(loanRecordId, loanPatch)

Modify a loan record

Only &#x60;auto_renew&#x60; modification is supported currently

### Example
```javascript
var GateApi = require('gate-api');
var client = GateApi.ApiClient.instance;
client.key = "YOUR API KEY";
client.secret = "YOUR API SECRET";
// uncomment the next line if you are using the API with other host
// client.basePath = "https://some-other-hosts";

var apiInstance = new GateApi.MarginApi();
var loanRecordId = "12345"; // String | Loan record ID
var loanPatch = new GateApi.LoanPatch(); // LoanPatch | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateLoanRecord(loanRecordId, loanPatch, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loanRecordId** | **String**| Loan record ID | 
 **loanPatch** | [**LoanPatch**](LoanPatch.md)|  | 

### Return type

[**LoanRecord**](LoanRecord.md)

### Authorization

Authentication with API key and secret is required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

