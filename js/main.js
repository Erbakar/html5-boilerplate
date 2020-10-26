$("#target").click(function() {
    hash = window.location.hash.substr(1);
    arHash = hash.split("=");
    // token = arHash[1];
    token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJiNDllZTFlOC01NzJkLTQ2MTEtYmUwMy1kN2U2MWZmZWQ1NDEiLCJpYXQiOjE2MDM3MjQ3NDMsImVtYWlsIjoiZWNhZ2lyYWxAZ21haWwuY29tIiwicm9sZXMiOlsiQ29tcGFueSBhZG1pbiIsIkF1dGhvcml6ZXIiXSwiZXhwIjoxNjAzNzM1NTQzfQ.f29o7iND8zNWPSX32zNTzuExtCgnCFMzfOBIftok35A';
    var markup = document.getElementById("pdfContainer");
    var parser = markup.outerHTML;
    var data = btoa(unescape(encodeURIComponent(parser)));
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
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36",
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
});





new Vue({
    el: "#app",
    data: {
        pageindex: [1, 2, 3, 4, 5, 6, 7],
        alphabet: '',
        show: false,
        content: {
            outflowDetails: {
                recoveryChart: [{
                        name: 'Reuse',
                        y: 12
                    },
                    {
                        name: 'Repair/refurbish ',
                        y: 13
                    },
                    {
                        name: 'Repurpose/remanufacture',
                        y: 15
                    },
                    {
                        name: 'Recycle',
                        y: 40
                    },
                    {
                        name: 'Unknown/other ',
                        y: 10
                    }
                ],
            }

        }
    },
    methods: {
        getReport() {
            fetch("http://test-be.circular-iq.com/api/cti/unit/1326443b-bf0f-4e52-868f-55ef26872982/reportData", {
                    headers: {
                        "x-auth-token": 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJiNDllZTFlOC01NzJkLTQ2MTEtYmUwMy1kN2U2MWZmZWQ1NDEiLCJpYXQiOjE2MDM3MjQ3NDMsImVtYWlsIjoiZWNhZ2lyYWxAZ21haWwuY29tIiwicm9sZXMiOlsiQ29tcGFueSBhZG1pbiIsIkF1dGhvcml6ZXIiXSwiZXhwIjoxNjAzNzM1NTQzfQ.f29o7iND8zNWPSX32zNTzuExtCgnCFMzfOBIftok35A',
                    },
                    method: "GET",
                })
                .then(response => response.json())
                .then(data => {
                    this.content = data;
                    this.show = true;
                });
        },
        test() {
            Highcharts.chart('container', {
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false,
                    type: 'pie'
                },
                title: {
                    text: ''
                },
                tooltip: {
                    pointFormat: ''
                },
                accessibility: {
                    point: {
                        valueSuffix: '%'
                    }
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: false,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: true,
                            format: '<b style="font-size:8px">{point.name}</b>: {point.percentage:.1f} %'
                        }
                    }
                },
                series: [{
                    colorByPoint: true,
                    data: this.content.outflowDetails.recoveryChart
                }]
            });
        }


    },
    mounted() {
        this.getReport();
        // this.test();
        this.alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');



    },
});