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
