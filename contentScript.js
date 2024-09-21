function base32Decode(encoded) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
    let bits = 0;
    let value = 0;
    let output = "";
  
    for (let i = 0; i < encoded.length; i++) {
      const index = alphabet.indexOf(encoded[i].toUpperCase());
      if (index === -1) {
        break;
      }
  
      value = (value << 5) | index;
      bits += 5;
  
      if (bits >= 8) {
        output += String.fromCharCode((value >>> (bits - 8)) & 255);
        bits -= 8;
      }
    }
  
    return output;
  }
  
  chrome.storage.local.get("isEnabled", (data) => {
    if (data.isEnabled) {
      const currentURL = window.location.href;
  
      const base32CodeMatch = currentURL.match(/\/dziennik\/([A-Z0-9]+)/);
      if (base32CodeMatch) {
        const base32Code = base32CodeMatch[1];
  
        const decodedUrl = base32Decode(base32Code);
  
        window.location.href = decodedUrl;
      }
    } else {
      console.log("%cEduSkracacz jest wyłączony.","color: blue; font-size: 36px");

    }
  });
  