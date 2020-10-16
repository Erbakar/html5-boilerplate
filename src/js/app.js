var app = new Vue({
  el: '#app',
  
  data: {
    name: 'Circular Transition Indicators',
    company: 'ACME',
    businessLevel: 'Product Group X',
    createdby: 'Louise Crawford',
    timePeriodStart: '01/01/2018',
    timePeriodEnd: '31/12/2018',
    steps: {
      step1: true,
      step2: true,
      step3: true,
      step4: false,
      step5: false,
      step6: false,
      step7: false
    },
    optimizeTheLoop: true,
    valueTheLoop: false,
    excludedText: {
      head: 'Excluded text',
      text: 'We have excluded Water and Energy Consumptions, decided to include these metrics in the next evaluation cycle.'
    },
    priorityInflow: {
      text: 'Priority inflow',
      list: [
        {name: 'Alumnium', value:3543},
        {name: 'Wood', value:354},
        {name: 'Bauxite', value:223},
      ]
    },
    priorityOutflow: {
      text: 'Priority outflow',
      list: [
        {name: 'Biodegradable waste', value:353},
        {name: 'Organic waste', value:3514},
        {name: 'Radioactive waste', value:1223}
      ]
    },
    performanceNote1 : 'The diagram below illustrates the circular performance of the business level selected for this assessment. You can find the inflow on the left and outflow on the right.',
    performanceNote2 : 'Inflow will be marked circular if flows are non-virgin and/or renewable, and outflow will be marked circular if it is both potentially recoverable AND will be actually recovered. The percentage of circular inflow and outflow is based on weight.',
    performanceNote3 : 'The diagram below illustrates the circular performance of the business level selected for this assessment. You can find the inflow on the left and outflow on the right.',
    sankey: {
      circularInflow:35,
      circularOutflow:65,
      linearInflow:35,
      linearOutflow:65,
      totalInflow:35,
      totalOutflow:65,
    }
  
  }

})


const s = document.getElementById('unit-circularity-chart');
s.setAttribute('data-inflow', 55);
s.setAttribute('data-outflow', 45);








function generateReport() {
  const s = document.getElementById('unit-circularity-chart');
  s.setAttribute('data-inflow', 55);
  s.setAttribute('data-outflow', 45);

  var token =
    "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJiNDllZTFlOC01NzJkLTQ2MTEtYmUwMy1kN2U2MWZmZWQ1NDEiLCJpYXQiOjE2MDI4MzY5MDEsImVtYWlsIjoiZWNhZ2lyYWxAZ21haWwuY29tIiwicm9sZXMiOlsiQ29tcGFueSBhZG1pbiIsIkF1dGhvcml6ZXIiXSwiZXhwIjoxNjAyODQ3NzAxfQ.QDYU8jS6rPqwj0OwIIpFVMRzU8Tqx6db-WVRFwIlDZM";

  var markup = document.getElementById("pdfContainer");
  var parser = markup.outerHTML;
  // var data = window.btoa(parser);
   var data =  btoa(unescape(encodeURIComponent(parser)));
  var f = `  <img style="width: 100%;"  src="https://s3.eu-central-1.amazonaws.com/files.dev.circular-iq.com/kadir/footer.png" alt="">`;
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
