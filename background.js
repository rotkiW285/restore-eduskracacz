chrome.runtime.onInstalled.addListener(() => {
  chrome.declarativeNetRequest.updateDynamicRules(
    {
      removeRuleIds: [1],
      addRules: [
        {
          id: 1,
          priority: 1,
          action: {
            type: "redirect",
            redirect: {
              transform: {
                scheme: "https",
                host: "new-redirected-site.com",
                path: "/"
              }
            }
          },
          condition: {
            urlFilter: "*://eduvulcan.pl/dziennik/*",
            resourceTypes: ["main_frame"]
          }
        }
      ]
    },
    () => {
      console.log("Rules updated");
    }
  );
});
