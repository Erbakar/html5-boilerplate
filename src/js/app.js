
function generateReport() {
  var token =
  "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJiNDllZTFlOC01NzJkLTQ2MTEtYmUwMy1kN2U2MWZmZWQ1NDEiLCJpYXQiOjE2MDI3NDc5MzQsImVtYWlsIjoiZWNhZ2lyYWxAZ21haWwuY29tIiwicm9sZXMiOlsiQ29tcGFueSBhZG1pbiIsIkF1dGhvcml6ZXIiXSwiZXhwIjoxNjAyNzU4NzM0fQ.9gPoOdjIM-xbejuLQD4wB7m5vfvEacuzhs8G8NwApE8";

 var markup = document.getElementById("print");
  var parser = markup.outerHTML;
  var data = window.btoa(parser);
  var f =  `<div class="page-footer" style="background:black; color:white"> I'm The Footer </div>`
  var fd = window.btoa(f);

  fetch("http://test-be.circular-iq.com/api/pdf/generate", {
    headers: {
      "x-auth-token": token,
      "Content-Type": "application/json",
      "Accept-Encoding": "gzip, deflate",
      "Accept-Language": "tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7",
      Connection: "keep-alive",
      "Content-Length": "17053",
      "Content-Type": "application/json",
      Host: "test-be.circular-iq.com",
      Origin: "http://dev.circular-iq.com:8080",
      Referer: "http://dev.circular-iq.com:8080/sample-report",
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36",
    },
    body: JSON.stringify({ footer: fd, report: data }),
    method: "PUT",
  })
    .then((response) => {
      if (response.status !== 200) {
        throw response.json();
      }
      return response.arrayBuffer();
    })
    .then((buffer) => {
      var blob = new Blob([buffer], { type: "application/pdf" });
      saveAs(blob, "report.pdf");
    });
}
