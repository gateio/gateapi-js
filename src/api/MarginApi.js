/**
 * Gate API v4
 * APIv4 provides spot, margin and futures trading operations. There are public APIs to retrieve the real-time market statistics, and private APIs which needs authentication to trade on user's behalf.
 *
 * Contact: support@mail.gate.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 3.3.4
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/FundingAccount', 'model/FundingBookItem', 'model/Loan', 'model/LoanPatch', 'model/LoanRecord', 'model/MarginAccount', 'model/MarginCurrencyPair', 'model/RepayRequest', 'model/Repayment'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/FundingAccount'), require('../model/FundingBookItem'), require('../model/Loan'), require('../model/LoanPatch'), require('../model/LoanRecord'), require('../model/MarginAccount'), require('../model/MarginCurrencyPair'), require('../model/RepayRequest'), require('../model/Repayment'));
  } else {
    // Browser globals (root is window)
    if (!root.GateApi) {
      root.GateApi = {};
    }
    root.GateApi.MarginApi = factory(root.GateApi.ApiClient, root.GateApi.FundingAccount, root.GateApi.FundingBookItem, root.GateApi.Loan, root.GateApi.LoanPatch, root.GateApi.LoanRecord, root.GateApi.MarginAccount, root.GateApi.MarginCurrencyPair, root.GateApi.RepayRequest, root.GateApi.Repayment);
  }
}(this, function(ApiClient, FundingAccount, FundingBookItem, Loan, LoanPatch, LoanRecord, MarginAccount, MarginCurrencyPair, RepayRequest, Repayment) {
  'use strict';

  /**
   * Margin service.
   * @module api/MarginApi
   */

  /**
   * Constructs a new MarginApi. 
   * @alias module:api/MarginApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the cancelLoan operation.
     * @callback module:api/MarginApi~cancelLoanCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Loan} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cancel lending loan
     * Only lending loans can be cancelled
     * @param {String} loanId Loan ID
     * @param {String} currency Retrieved specified currency related data
     * @param {module:api/MarginApi~cancelLoanCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Loan}
     */
    this.cancelLoan = function(loanId, currency, callback) {
      var postBody = null;

      // verify the required parameter 'loanId' is set
      if (loanId === undefined || loanId === null) {
        throw new Error("Missing the required parameter 'loanId' when calling cancelLoan");
      }

      // verify the required parameter 'currency' is set
      if (currency === undefined || currency === null) {
        throw new Error("Missing the required parameter 'currency' when calling cancelLoan");
      }


      var pathParams = {
        'loan_id': loanId
      };
      var queryParams = {
        'currency': currency,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['apiv4'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Loan;

      return this.apiClient.callApi(
        '/margin/loans/{loan_id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createLoan operation.
     * @callback module:api/MarginApi~createLoanCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Loan} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lend or borrow
     * @param {module:model/Loan} loan 
     * @param {module:api/MarginApi~createLoanCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Loan}
     */
    this.createLoan = function(loan, callback) {
      var postBody = loan;

      // verify the required parameter 'loan' is set
      if (loan === undefined || loan === null) {
        throw new Error("Missing the required parameter 'loan' when calling createLoan");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['apiv4'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Loan;

      return this.apiClient.callApi(
        '/margin/loans', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getLoan operation.
     * @callback module:api/MarginApi~getLoanCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Loan} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve one single loan detail
     * @param {String} loanId Loan ID
     * @param {String} side Lend or borrow
     * @param {module:api/MarginApi~getLoanCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Loan}
     */
    this.getLoan = function(loanId, side, callback) {
      var postBody = null;

      // verify the required parameter 'loanId' is set
      if (loanId === undefined || loanId === null) {
        throw new Error("Missing the required parameter 'loanId' when calling getLoan");
      }

      // verify the required parameter 'side' is set
      if (side === undefined || side === null) {
        throw new Error("Missing the required parameter 'side' when calling getLoan");
      }


      var pathParams = {
        'loan_id': loanId
      };
      var queryParams = {
        'side': side,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['apiv4'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Loan;

      return this.apiClient.callApi(
        '/margin/loans/{loan_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getLoanRecord operation.
     * @callback module:api/MarginApi~getLoanRecordCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LoanRecord} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get one single loan record
     * @param {String} loanRecordId Loan record ID
     * @param {String} loanId Loan ID
     * @param {module:api/MarginApi~getLoanRecordCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LoanRecord}
     */
    this.getLoanRecord = function(loanRecordId, loanId, callback) {
      var postBody = null;

      // verify the required parameter 'loanRecordId' is set
      if (loanRecordId === undefined || loanRecordId === null) {
        throw new Error("Missing the required parameter 'loanRecordId' when calling getLoanRecord");
      }

      // verify the required parameter 'loanId' is set
      if (loanId === undefined || loanId === null) {
        throw new Error("Missing the required parameter 'loanId' when calling getLoanRecord");
      }


      var pathParams = {
        'loan_record_id': loanRecordId
      };
      var queryParams = {
        'loan_id': loanId,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['apiv4'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = LoanRecord;

      return this.apiClient.callApi(
        '/margin/loan_records/{loan_record_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listFundingAccounts operation.
     * @callback module:api/MarginApi~listFundingAccountsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/FundingAccount>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Funding account list
     * @param {Object} opts Optional parameters
     * @param {String} opts.currency Retrieved specified currency related data
     * @param {module:api/MarginApi~listFundingAccountsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/FundingAccount>}
     */
    this.listFundingAccounts = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'currency': opts['currency'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['apiv4'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [FundingAccount];

      return this.apiClient.callApi(
        '/margin/funding_accounts', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listFundingBook operation.
     * @callback module:api/MarginApi~listFundingBookCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/FundingBookItem>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Order book of lending loans
     * @param {String} currency Retrieved specified currency related data
     * @param {module:api/MarginApi~listFundingBookCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/FundingBookItem>}
     */
    this.listFundingBook = function(currency, callback) {
      var postBody = null;

      // verify the required parameter 'currency' is set
      if (currency === undefined || currency === null) {
        throw new Error("Missing the required parameter 'currency' when calling listFundingBook");
      }


      var pathParams = {
      };
      var queryParams = {
        'currency': currency,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [FundingBookItem];

      return this.apiClient.callApi(
        '/margin/funding_book', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listLoanRecords operation.
     * @callback module:api/MarginApi~listLoanRecordsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/LoanRecord>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List repayment records of specified loan
     * @param {String} loanId Loan ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.status Loan record status
     * @param {Number} opts.page Page number (default to 1)
     * @param {Number} opts.limit Maximum number of records returned in one list (default to 100)
     * @param {module:api/MarginApi~listLoanRecordsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/LoanRecord>}
     */
    this.listLoanRecords = function(loanId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'loanId' is set
      if (loanId === undefined || loanId === null) {
        throw new Error("Missing the required parameter 'loanId' when calling listLoanRecords");
      }


      var pathParams = {
      };
      var queryParams = {
        'loan_id': loanId,
        'status': opts['status'],
        'page': opts['page'],
        'limit': opts['limit'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['apiv4'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [LoanRecord];

      return this.apiClient.callApi(
        '/margin/loan_records', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listLoanRepayments operation.
     * @callback module:api/MarginApi~listLoanRepaymentsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Repayment>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List loan repayment records
     * @param {String} loanId Loan ID
     * @param {module:api/MarginApi~listLoanRepaymentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Repayment>}
     */
    this.listLoanRepayments = function(loanId, callback) {
      var postBody = null;

      // verify the required parameter 'loanId' is set
      if (loanId === undefined || loanId === null) {
        throw new Error("Missing the required parameter 'loanId' when calling listLoanRepayments");
      }


      var pathParams = {
        'loan_id': loanId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['apiv4'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [Repayment];

      return this.apiClient.callApi(
        '/margin/loans/{loan_id}/repayment', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listLoans operation.
     * @callback module:api/MarginApi~listLoansCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Loan>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all loans
     * @param {String} status Loan status
     * @param {String} side Lend or borrow
     * @param {Object} opts Optional parameters
     * @param {String} opts.currency Retrieved specified currency related data
     * @param {String} opts.currencyPair Currency pair
     * @param {String} opts.sortBy Specify which field is used to sort. &#x60;create_time&#x60; or &#x60;rate&#x60; is supported. Default to &#x60;create_time&#x60;
     * @param {Boolean} opts.reverseSort Whether to sort in descending order. Default to &#x60;true&#x60;
     * @param {Number} opts.page Page number (default to 1)
     * @param {Number} opts.limit Maximum number of records returned in one list (default to 100)
     * @param {module:api/MarginApi~listLoansCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Loan>}
     */
    this.listLoans = function(status, side, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'status' is set
      if (status === undefined || status === null) {
        throw new Error("Missing the required parameter 'status' when calling listLoans");
      }

      // verify the required parameter 'side' is set
      if (side === undefined || side === null) {
        throw new Error("Missing the required parameter 'side' when calling listLoans");
      }


      var pathParams = {
      };
      var queryParams = {
        'status': status,
        'side': side,
        'currency': opts['currency'],
        'currency_pair': opts['currencyPair'],
        'sort_by': opts['sortBy'],
        'reverse_sort': opts['reverseSort'],
        'page': opts['page'],
        'limit': opts['limit'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['apiv4'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [Loan];

      return this.apiClient.callApi(
        '/margin/loans', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listMarginAccounts operation.
     * @callback module:api/MarginApi~listMarginAccountsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/MarginAccount>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Margin account list
     * @param {Object} opts Optional parameters
     * @param {String} opts.currencyPair Currency pair
     * @param {module:api/MarginApi~listMarginAccountsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/MarginAccount>}
     */
    this.listMarginAccounts = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'currency_pair': opts['currencyPair'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['apiv4'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [MarginAccount];

      return this.apiClient.callApi(
        '/margin/accounts', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listMarginCurrencyPairs operation.
     * @callback module:api/MarginApi~listMarginCurrencyPairsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/MarginCurrencyPair>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all supported currency pairs supported in margin trading
     * @param {module:api/MarginApi~listMarginCurrencyPairsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/MarginCurrencyPair>}
     */
    this.listMarginCurrencyPairs = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [MarginCurrencyPair];

      return this.apiClient.callApi(
        '/margin/currency_pairs', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the mergeLoans operation.
     * @callback module:api/MarginApi~mergeLoansCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Loan} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Merge multiple lending loans
     * @param {String} currency Retrieved specified currency related data
     * @param {String} ids Lending loan ID list separated by &#x60;,&#x60;. Maximum of 20 IDs are allowed in one request
     * @param {module:api/MarginApi~mergeLoansCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Loan}
     */
    this.mergeLoans = function(currency, ids, callback) {
      var postBody = null;

      // verify the required parameter 'currency' is set
      if (currency === undefined || currency === null) {
        throw new Error("Missing the required parameter 'currency' when calling mergeLoans");
      }

      // verify the required parameter 'ids' is set
      if (ids === undefined || ids === null) {
        throw new Error("Missing the required parameter 'ids' when calling mergeLoans");
      }


      var pathParams = {
      };
      var queryParams = {
        'currency': currency,
        'ids': ids,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['apiv4'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Loan;

      return this.apiClient.callApi(
        '/margin/merged_loans', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the repayLoan operation.
     * @callback module:api/MarginApi~repayLoanCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Loan} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Repay a loan
     * @param {String} loanId Loan ID
     * @param {module:model/RepayRequest} repayRequest 
     * @param {module:api/MarginApi~repayLoanCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Loan}
     */
    this.repayLoan = function(loanId, repayRequest, callback) {
      var postBody = repayRequest;

      // verify the required parameter 'loanId' is set
      if (loanId === undefined || loanId === null) {
        throw new Error("Missing the required parameter 'loanId' when calling repayLoan");
      }

      // verify the required parameter 'repayRequest' is set
      if (repayRequest === undefined || repayRequest === null) {
        throw new Error("Missing the required parameter 'repayRequest' when calling repayLoan");
      }


      var pathParams = {
        'loan_id': loanId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['apiv4'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Loan;

      return this.apiClient.callApi(
        '/margin/loans/{loan_id}/repayment', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateLoan operation.
     * @callback module:api/MarginApi~updateLoanCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Loan} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Modify a loan
     * Only &#x60;auto_renew&#x60; modification is supported currently
     * @param {String} loanId Loan ID
     * @param {module:model/LoanPatch} loanPatch 
     * @param {module:api/MarginApi~updateLoanCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Loan}
     */
    this.updateLoan = function(loanId, loanPatch, callback) {
      var postBody = loanPatch;

      // verify the required parameter 'loanId' is set
      if (loanId === undefined || loanId === null) {
        throw new Error("Missing the required parameter 'loanId' when calling updateLoan");
      }

      // verify the required parameter 'loanPatch' is set
      if (loanPatch === undefined || loanPatch === null) {
        throw new Error("Missing the required parameter 'loanPatch' when calling updateLoan");
      }


      var pathParams = {
        'loan_id': loanId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['apiv4'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Loan;

      return this.apiClient.callApi(
        '/margin/loans/{loan_id}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateLoanRecord operation.
     * @callback module:api/MarginApi~updateLoanRecordCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LoanRecord} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Modify a loan record
     * Only &#x60;auto_renew&#x60; modification is supported currently
     * @param {String} loanRecordId Loan record ID
     * @param {module:model/LoanPatch} loanPatch 
     * @param {module:api/MarginApi~updateLoanRecordCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LoanRecord}
     */
    this.updateLoanRecord = function(loanRecordId, loanPatch, callback) {
      var postBody = loanPatch;

      // verify the required parameter 'loanRecordId' is set
      if (loanRecordId === undefined || loanRecordId === null) {
        throw new Error("Missing the required parameter 'loanRecordId' when calling updateLoanRecord");
      }

      // verify the required parameter 'loanPatch' is set
      if (loanPatch === undefined || loanPatch === null) {
        throw new Error("Missing the required parameter 'loanPatch' when calling updateLoanRecord");
      }


      var pathParams = {
        'loan_record_id': loanRecordId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['apiv4'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = LoanRecord;

      return this.apiClient.callApi(
        '/margin/loan_records/{loan_record_id}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
