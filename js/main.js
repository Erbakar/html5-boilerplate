new Vue({
    el: "#app",
    data: {
        pageindex: [1, 2, 3, 4, 5, 6, 7],
        alphabet: '',
        show: false,
        content: {}
    },
    methods: {
        getReport() {
            const unitId = localStorage.getItem('reportUnitId');
            const baseUrl = localStorage.getItem('reportBaseUrl');
            fetch("http://" + baseUrl + ".circular-iq.com/api/cti/unit/" + unitId + "/reportData", {
                    headers: {
                        "x-auth-token": localStorage.getItem('reportToken'),
                    },
                    method: "GET",
                })
                .then(response => response.json())
                .then(data => {
                    this.content = data;
                    this.show = true;
                    return data;
                })
                .then(data => {
                    console.log(data.outflowDetails.recoveryChart);
                    var series = [];
                    series[1] = {
                        name: 'Brands',
                        colorByPoint: true,
                        data: [{
                            name: 'Chrome',
                            y: 61.41,
                            sliced: true,
                            selected: true
                        }, {
                            name: 'Internet Explorer',
                            y: 11.84
                        }, {
                            name: 'Firefox',
                            y: 10.85
                        }, {
                            name: 'Edge',
                            y: 4.67
                        }, {
                            name: 'Safari',
                            y: 4.18
                        }, {
                            name: 'Sogou Explorer',
                            y: 1.64
                        }, {
                            name: 'Opera',
                            y: 1.6
                        }, {
                            name: 'QQ',
                            y: 1.2
                        }, {
                            name: 'Other',
                            y: 2.61
                        }]
                    }
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
                        // series: [{
                        //     colorByPoint: true,
                        //     data: data.outflowDetails.recoveryChart
                        // }]
                        series: series
                    })
                })
        },

        downloadReport() {
            token = localStorage.getItem('reportToken');
            const baseUrl = localStorage.getItem('reportBaseUrl');
            var markup = document.getElementById("pdfContainer");
            var parser = markup.outerHTML;
            var data = btoa(unescape(encodeURIComponent(parser)));
            var f = `  <img style="width: 100%;"  src="https://s3.eu-central-1.amazonaws.com/files.dev.circular-iq.com/kadir/footer.png" alt="">`;
            var fd = window.btoa(f);

            fetch("http://" + baseUrl + ".circular-iq.com/api/pdf/generate", {
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
        }
    },
    mounted() {
        hash = window.location.hash.substr(1);
        arHash = hash.split("=");
        localStorage.setItem('reportToken', arHash[1]);
        localStorage.setItem('reportUnitId', arHash[2]);
        localStorage.setItem('reportBaseUrl', arHash[3]);
        this.alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
        this.getReport();
        this.downloadReport();
    },
});