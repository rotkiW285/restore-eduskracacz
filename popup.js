document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("toggleButton");
  
    chrome.storage.local.get("isEnabled", (data) => {
      if (data.isEnabled) {
        toggleButton.textContent = "Wyłącz";
      } else {
        toggleButton.textContent = "Włącz";
      }
    });
  
    toggleButton.addEventListener("click", () => {
      chrome.storage.local.get("isEnabled", (data) => {
        const newState = !data.isEnabled;
        chrome.storage.local.set({ isEnabled: newState }, () => {
          toggleButton.textContent = newState ? "Wyłącz" : "Włącz";
        });
      });
    });
  });
  