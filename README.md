# WebUSB Web Extension

VS Code Web Extension demonstrating WebUSB access

## Prerequisites

A VS Code Web build available which includes https://github.com/microsoft/vscode/pull/117786

## Description

WebUSB devices can be accessed from web extensions running in the web extension host webworker here:

https://github.com/thegecko/webusb-web-extension/blob/main/src/browser/commands.ts#L23

WebUSB devices need to be authorised before being accessed and this is required to be [via a user request](https://web.dev/usb/#user-gesture-required).

Therefore this needs to be done from a UI surface and is hooked into the web extension webview here:

https://github.com/thegecko/webusb-web-extension/blob/main/src/views/webusb-view.ts#L5

## Screenshot

<img width="1211" alt="Screenshot 2022-03-31 at 13 51 08" src="https://user-images.githubusercontent.com/61341/161058912-85171f70-7c86-42f0-862b-29a7e014cf92.png">

