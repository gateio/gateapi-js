# GateApi.OrderBook

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Order book ID, which is updated whenever the order book is changed. Valid only when &#x60;with_id&#x60; is set to &#x60;true&#x60; | [optional] 
**current** | **Number** | The timestamp of the response data being generated (in milliseconds) | [optional] 
**update** | **Number** | The timestamp of when the orderbook last changed (in milliseconds) | [optional] 
**asks** | **[[String]]** | Asks order depth | 
**bids** | **[[String]]** | Bids order depth | 

