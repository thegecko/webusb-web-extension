import * as vscode from 'vscode';

export class Commands {

    protected channel = vscode.window.createOutputChannel('webusb');

    public async activate(context: vscode.ExtensionContext): Promise<void> {
        context.subscriptions.push(
            vscode.commands.registerCommand('webusb.listDevices', () => this.listDevices())
        );

        if (!navigator.usb) {
            const result = await vscode.window.showWarningMessage('Your browser does not support WebUSB', 'Show Supported Browsers');
            if (result === 'Show Supported Browsers') {
                vscode.env.openExternal(vscode.Uri.parse('https://caniuse.com/?search=webusb'));
            }
        } else {
            this.listDevices();
        }
    }

    protected async listDevices(): Promise<void> {
        const list = await navigator.usb.getDevices();
        const devices = list.map(device => ({
            VID: device.vendorId,
            PID: device.productId,
            Serial: device.serialNumber
        }));
        const data = JSON.stringify(devices, undefined, '\t');
        this.channel.appendLine('Authorised WebUSB Devices:');
        this.channel.appendLine(data);
        this.channel.show();
    }
}
