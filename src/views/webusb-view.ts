window.addEventListener('load', () => {
    const vscodeApi = acquireVsCodeApi();
    const webusbButton = document.getElementById('webusb-button')!;
    webusbButton.addEventListener('click', async () => {
        await navigator.usb.requestDevice({ filters: [] });
        vscodeApi.postMessage('webusb.listDevices');
    });
});
