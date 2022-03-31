import * as vscode from 'vscode';
import { Commands } from './commands';
import { WebUsbWebview } from '../views/webusb-main';

export const activate = async (context: vscode.ExtensionContext): Promise<void> => {
    if (vscode.env.uiKind !== vscode.UIKind.Web) {
        vscode.window.showWarningMessage('Running web extension in desktop');
    }

    const webusbView = new WebUsbWebview(context.extensionUri);
    const commands = new Commands();

    await webusbView.activate(context);
    await commands.activate(context);
};
