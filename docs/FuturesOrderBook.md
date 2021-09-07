# GateApi.FuturesOrderBook

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Order Book ID. Increases by 1 on every order book change. Set &#x60;with_id&#x3D;true&#x60; to include this field in response | [optional] 
**current** | **Number** | Response data generation timestamp | [optional] 
**update** | **Number** | Order book changed timestamp | [optional] 
**asks** | [**[FuturesOrderBookItem]**](FuturesOrderBookItem.md) | Asks order depth | 
**bids** | [**[FuturesOrderBookItem]**](FuturesOrderBookItem.md) | Bids order depth | 

