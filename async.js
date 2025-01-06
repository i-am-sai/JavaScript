const log = document.querySelector(".event-log");  // DOM link  : pre element to log variable

document.querySelector("#xhr").addEventListener("click", () => {   // Button1 linked to XMLhtto method by creating a new object xhr and adding some eventlistners.
  log.textContent = "";

  const xhr = new XMLHttpRequest();  // Browser API for sending http request to the server

  xhr.addEventListener("loadend", () => { // loadend event : Fired when the req finishes, regardless of sucess or failure
    log.textContent = `${log.textContent}Finished with status: ${xhr.status}`;  // status : provides http response status code
  });

  xhr.open(
    "GET",
    "https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json",
  );
  xhr.send();
  log.textContent = `${log.textContent}Started XHR request\n`;
});

document.querySelector("#reload").addEventListener("click", () => {
  log.textContent = "";
  document.location.reload(); // refreshes the page progrmmatically
});
