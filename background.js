chrome.tabs.onUpdated.addListener((tabId, tab) => {
    if (tab.url && tab.url.includes("wellfound.com/jobs")) {

        const queryParamaters = tab.url.split("?")[1]; // takes the query paramter like "job_listing_id=2806643"
        const urlParameters  = new URLSearchParams(queryParamaters);

        console.log(urlParameters);
        console.log('title',tab);

        chrome.tabs.sendMessage(tabId, {
            type: "NEW",
            jobId: urlParameters.get("job_listing_id")
        });
    }
});

