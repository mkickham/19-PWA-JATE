const butInstall = document.getElementById('buttonInstall');

let delayPrompt;

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();

    delayPrompt = event;

    butInstall.removeAttribute('disabled')
});


// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    if (delayPrompt) {
        delayPrompt.prompt();

        const userSelect = await delayPrompt.userChoice;

        if (userSelect.outcome === 'accepted') {
            console.log('Install prompt accepted')
        } else {
            console.log('Install prompt declined')
        }

        delayPrompt = null;

        butInstall.setAttribute('disabled', true);
    }
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('Application install successful')
});
