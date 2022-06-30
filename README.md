# WebUSB Web Extension

VS Code Web Extension demonstrating WebUSB access

## Prerequisites

A VS Code Web build available which includes https://github.com/microsoft/vscode/pull/152310

## Description

WebUSB devices can be accessed from web extensions running in the web extension host webworker here:

https://github.com/thegecko/webusb-web-extension/blob/main/src/browser/commands.ts#L23

WebUSB devices need to be authorised before being accessed and this is possible due to the new `workbench.experimental.requestUsbDevice` command.

This is triggered from the webview here:

https://github.com/thegecko/webusb-web-extension/blob/main/src/views/webusb-view.ts#L7

but run in the webworker here:

https://github.com/thegecko/webusb-web-extension/blob/main/src/views/webusb-main.ts#L25

## Screenshot

<img width="1211" alt="Screenshot 2022-03-31 at 13 51 08" src="https://user-images.githubusercontent.com/61341/161058912-85171f70-7c86-42f0-862b-29a7e014cf92.png">

