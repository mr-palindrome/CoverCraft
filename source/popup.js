const fetchUserAbout = () => {
    return new Promise((resolve) => {
        chrome.storage.sync.get(['userAbout'], function (result) {
            userAbout = result.userAbout || '';
            resolve(userAbout);
        });
    });
}
async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
}


document.addEventListener('DOMContentLoaded', async () => {

    const activeTab = await getCurrentTab();
    const queryParameters = activeTab.url.split('?')[1];

    const textDivElement = document.getElementById('text-div');


    if (activeTab.url && activeTab.url.includes("wellfound.com/jobs")) {
        const label = document.createElement('label');
        label.setAttribute('for', 'userAboutInput');
        label.textContent = 'Your About:';

        const textarea = document.createElement('textarea');
        textarea.setAttribute('id', 'userAboutInput');
        textarea.setAttribute('rows', '5');
        textarea.setAttribute('cols', '50');

        const saveButton = document.createElement('button');
        saveButton.setAttribute('id', 'saveUserAbout');
        saveButton.textContent = 'Save User About';

// Append the elements to the <div>
        textDivElement.appendChild(label);
        textDivElement.appendChild(textarea);
        textDivElement.appendChild(saveButton);

        const userAboutInput = document.getElementById('userAboutInput');

        const userAbout = await fetchUserAbout();
        userAboutInput.value = userAbout;

        saveButton.addEventListener('click', () => {
            const userAbout = userAboutInput.value;
            chrome.storage.sync.set({ userAbout }, function () {
            });
        });

    }else{
        textDivElement.innerHTML = `<h3>Not a Wellfound Page</h3>`;

    }





});
