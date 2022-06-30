import * as vscode from 'vscode';
import { Commands } from './commands';
import { WebUsbWebview } from '../views/webusb-main';

export const activate = async (context: vscode.ExtensionContext): Promise<void> => {
    const webusbView = new WebUsbWebview(context.extensionUri);
    const commands = new Commands();

    await webusbView.activate(context);
    await commands.activate(context);
};
