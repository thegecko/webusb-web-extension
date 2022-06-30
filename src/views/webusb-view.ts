window.addEventListener('load', () => {
    const vscodeApi = acquireVsCodeApi();

    const requestButton = document.getElementById('request-button')!;
    const listButton = document.getElementById('list-button')!;

    requestButton.addEventListener('click', () => vscodeApi.postMessage('workbench.experimental.requestUsbDevice'));
    listButton.addEventListener('click', () => vscodeApi.postMessage('webusb.listDevices'));
});
