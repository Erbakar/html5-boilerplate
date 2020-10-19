 new Vue({
     el: "#app",
     data: {
         mainPage: {
             name: "Circular Transition Indicators",
             company: "ACME",
             businessLevel: "Product Group X",
             createdby: "Louise Crawford",
             timePeriodStart: "01/01/2018",
             timePeriodEnd: "31/12/2018",
             steps: {
                 step1: true,
                 step2: true,
                 step3: true,
                 step4: false,
                 step5: false,
                 step6: false,
                 step7: false,
             },
             optimizeTheLoop: true,
             valueTheLoop: false,
             excludedText: {
                 head: "Excluded text",
                 text: "We have excluded Water and Energy Consumptions, decided to include these metrics in the next evaluation cycle.",
             },
             priorityInflow: {
                 text: "Priority inflow",
                 list: [
                     { name: "Alumnium", value: 3543 },
                     { name: "Wood", value: 354 },
                     { name: "Bauxite", value: 223 },
                 ],
             },
             priorityOutflow: {
                 text: "Priority outflow",
                 list: [
                     { name: "Biodegradable waste", value: 353 },
                     { name: "Organic waste", value: 3514 },
                     { name: "Radioactive waste", value: 1223 },
                 ],
             },
             performanceNote1: "The diagram below illustrates the circular performance of the business level selected for this assessment. You can find the inflow on the left and outflow on the right.",
             performanceNote2: "Inflow will be marked circular if flows are non-virgin and/or renewable, and outflow will be marked circular if it is both potentially recoverable AND will be actually recovered. The percentage of circular inflow and outflow is based on weight.",
             performanceNote3: "The diagram below illustrates the circular performance of the business level selected for this assessment. You can find the inflow on the left and outflow on the right.",
             sankey: {
                 circularInflow: 25,
                 circularOutflow: 75,
                 linearInflow: 25,
                 linearOutflow: 75,
                 totalInflow: 25,
                 totalOutflow: 75,
             },

         },

         inflowDetails: {
             inflowDetailNote: "The diagrams below show the circular performance of the inflows of the business level analysed in this assessment. Flows are sorted based on the largest mass, most circular inflow, and most linear inflow. These breakdowns are useful to identify hotspots in your dataset and to determine where your focus areas are.",
             BreakdownOfMass: [
                 { name: "Virgin", value: 53, weight: 7300 },
                 { name: "Non-virgin", value: 12, weight: 1200 },
                 { name: "Renewable", value: 31 },
                 { name: "Renewable & Non-virgin", value: 4 },
             ],
             LargestInflow: [{
                     name: "Biodegradable Waste",
                     value: 53,
                     weight: 7300,
                     percent: [
                         { name: "V", value: 50 },
                         { name: "NV", value: 12 },
                         { name: "R", value: 13 },
                         { name: "RNV", value: 25 },
                     ],
                 },
                 {
                     name: "Biodegradable Waste",
                     value: 53,
                     weight: 7300,
                     percent: [
                         { name: "V", value: 5 },
                         { name: "NV", value: 52 },
                         { name: "R", value: 18 },
                         { name: "RNV", value: 25 },
                     ],
                 },
                 {
                     name: "Biodegradable Waste",
                     value: 53,
                     weight: 7300,
                     percent: [
                         { name: "V", value: 50 },
                         { name: "NV", value: 12 },
                         { name: "R", value: 13 },
                         { name: "RNV", value: 25 },
                     ],
                 },
                 {
                     name: "Biodegradable Waste",
                     value: 53,
                     weight: 7300,
                     percent: [
                         { name: "V", value: 50 },
                         { name: "NV", value: 12 },
                         { name: "R", value: 13 },
                         { name: "RNV", value: 25 },
                     ],
                 },
                 {
                     name: "Biodegradable Waste",
                     value: 53,
                     weight: 7300,
                     percent: [
                         { name: "V", value: 50 },
                         { name: "NV", value: 12 },
                         { name: "R", value: 13 },
                         { name: "RNV", value: 25 },
                     ],
                 },
             ],
             MostCircularInflow: [{
                     name: "Biodegradable Waste",
                     value: 53,
                     weight: 7300,
                     percent: [
                         { name: "V", value: 50 },
                         { name: "NV", value: 12 },
                         { name: "R", value: 13 },
                         { name: "RNV", value: 25 },
                     ],
                 },
                 {
                     name: "Biodegradable Waste",
                     value: 53,
                     weight: 7300,
                     percent: [
                         { name: "V", value: 5 },
                         { name: "NV", value: 52 },
                         { name: "R", value: 18 },
                         { name: "RNV", value: 25 },
                     ],
                 },
                 {
                     name: "Biodegradable Waste",
                     value: 53,
                     weight: 7300,
                     percent: [
                         { name: "V", value: 20 },
                         { name: "NV", value: 12 },
                         { name: "R", value: 43 },
                         { name: "RNV", value: 25 },
                     ],
                 },
                 {
                     name: "Biodegradable Waste",
                     value: 53,
                     weight: 7300,
                     percent: [
                         { name: "V", value: 50 },
                         { name: "NV", value: 12 },
                         { name: "R", value: 13 },
                         { name: "RNV", value: 25 },
                     ],
                 },
                 {
                     name: "Biodegradable Waste",
                     value: 53,
                     weight: 7300,
                     percent: [
                         { name: "V", value: 30 },
                         { name: "NV", value: 12 },
                         { name: "R", value: 13 },
                         { name: "RNV", value: 45 },
                     ],
                 },
             ],
             MostLinearInflow: [{
                     name: "Biodegradable Waste",
                     value: 53,
                     weight: 7300,
                     percent: [
                         { name: "V", value: 50 },
                         { name: "NV", value: 12 },
                         { name: "R", value: 13 },
                         { name: "RNV", value: 25 },
                     ],
                 },
                 {
                     name: "Biodegradable Waste",
                     value: 53,
                     weight: 7300,
                     percent: [
                         { name: "V", value: 5 },
                         { name: "NV", value: 12 },
                         { name: "R", value: 18 },
                         { name: "RNV", value: 65 },
                     ],
                 },
                 {
                     name: "Biodegradable Waste",
                     value: 53,
                     weight: 7300,
                     percent: [
                         { name: "V", value: 20 },
                         { name: "NV", value: 12 },
                         { name: "R", value: 43 },
                         { name: "RNV", value: 25 },
                     ],
                 },
                 {
                     name: "Biodegradable Waste",
                     value: 53,
                     weight: 7300,
                     percent: [
                         { name: "V", value: 50 },
                         { name: "NV", value: 12 },
                         { name: "R", value: 13 },
                         { name: "RNV", value: 25 },
                     ],
                 },
                 {
                     name: "Biodegradable Waste",
                     value: 53,
                     weight: 7300,
                     percent: [
                         { name: "V", value: 30 },
                         { name: "NV", value: 12 },
                         { name: "R", value: 13 },
                         { name: "RNV", value: 45 },
                     ],
                 },
             ],
             criticalInflow: {
                 massInflow: 2700,
                 totalInflow: 10000,
                 percent: 27,
             },

         },

         outflowDetails: {
             note1: `The diagrams below show the circular performance of the outflows of the business level analysed in this assessment. The percentage of recovery potential reflects your company's ability to design or treat its outflow to ensure materials can be technically recovered. The percentage of actual recovery reflects the amount of materials actually recovered. `,
             note2: `Recovery is not the same as collection, because after collection materials can still end up in landfill or incineration. That's why this indicator requires actual data. The breakdown of mass visually shows the lost potential of the circular outflow due to partial actual recovery. Flows are sorted based on the largest mass, most circular outflow and most linear outflow.`,
             bom: {
                 recoveryPotentialPercent: 60,
                 recoveryPotentialValue: 5000,
                 linearOutflowPercent: 40,
                 linearOutflowValue: 5000,
                 actualRecoveryPercent: 25,
                 actualRecoveryValue: 2500,
                 linearOutflowPercent2: 75,
                 linearOutflowValue2: 7500,
             },
             largestOutflow: [{
                     name: "Biodegradable Waste",
                     value: 53,
                     weight: 7300,
                     percent: [
                         { name: "RP", value: 50 },
                         { name: "AR", value: 12 },
                         { name: "W", value: 38 },
                     ],
                 },
                 {
                     name: "Biodegradable Waste",
                     value: 53,
                     weight: 7300,
                     percent: [
                         { name: "RP", value: 13 },
                         { name: "AR", value: 37 },
                         { name: "W", value: 50 },
                     ],
                 },
                 {
                     name: "Biodegradable Waste",
                     value: 53,
                     weight: 7300,
                     percent: [
                         { name: "RP", value: 20 },
                         { name: "AR", value: 40 },
                         { name: "W", value: 40 },
                     ],
                 },
                 {
                     name: "Biodegradable Waste",
                     value: 53,
                     weight: 7300,
                     percent: [
                         { name: "RP", value: 25 },
                         { name: "AR", value: 25 },
                         { name: "W", value: 50 },
                     ],
                 },
                 {
                     name: "Biodegradable Waste",
                     value: 53,
                     weight: 7300,
                     percent: [
                         { name: "RP", value: 50 },
                         { name: "AR", value: 37 },
                         { name: "W", value: 13 },
                     ],
                 },
                 {
                     name: "Biodegradable Waste",
                     value: 53,
                     weight: 7300,
                     percent: [
                         { name: "RP", value: 20 },
                         { name: "AR", value: 40 },
                         { name: "W", value: 40 },
                     ],
                 },
             ],
             mostCircularOutflow: [{
                     name: "Biodegradable Waste",
                     value: 53,
                     weight: 7300,
                     percent: [
                         { name: "RP", value: 100 },
                         { name: "AR", value: 0 },
                         { name: "W", value: 0 },
                     ],
                 },
                 {
                     name: "Biodegradable Waste",
                     value: 53,
                     weight: 7300,
                     percent: [
                         { name: "RP", value: 100 },
                         { name: "AR", value: 0 },
                         { name: "W", value: 0 },
                     ],
                 },
                 {
                     name: "Biodegradable Waste",
                     value: 53,
                     weight: 7300,
                     percent: [
                         { name: "RP", value: 100 },
                         { name: "AR", value: 0 },
                         { name: "W", value: 0 },
                     ],
                 },
                 {
                     name: "Biodegradable Waste",
                     value: 53,
                     weight: 7300,
                     percent: [
                         { name: "RP", value: 100 },
                         { name: "AR", value: 0 },
                         { name: "W", value: 0 },
                     ],
                 },
                 {
                     name: "Biodegradable Waste",
                     value: 53,
                     weight: 7300,
                     percent: [
                         { name: "RP", value: 100 },
                         { name: "AR", value: 0 },
                         { name: "W", value: 0 },
                     ],
                 },
             ],
             mostLinearOutflow: [{
                     name: "Biodegradable Waste",
                     value: 53,
                     weight: 7300,
                     percent: [
                         { name: "RP", value: 20 },
                         { name: "AR", value: 40 },
                         { name: "W", value: 40 },
                     ],
                 },
                 {
                     name: "Biodegradable Waste",
                     value: 53,
                     weight: 7300,
                     percent: [
                         { name: "RP", value: 0 },
                         { name: "AR", value: 0 },
                         { name: "W", value: 100 },
                     ],
                 },
                 {
                     name: "Biodegradable Waste",
                     value: 53,
                     weight: 7300,
                     percent: [
                         { name: "RP", value: 20 },
                         { name: "AR", value: 40 },
                         { name: "W", value: 40 },
                     ],
                 },
                 {
                     name: "Biodegradable Waste",
                     value: 53,
                     weight: 7300,
                     percent: [
                         { name: "RP", value: 50 },
                         { name: "AR", value: 37 },
                         { name: "W", value: 13 },
                     ],
                 },
                 {
                     name: "Biodegradable Waste",
                     value: 53,
                     weight: 7300,
                     percent: [
                         { name: "RP", value: 20 },
                         { name: "AR", value: 40 },
                         { name: "W", value: 40 },
                     ],
                 },
             ],
             recoveryType: [
                 { name: 'Reuse', value: 1200 },
                 { name: 'Repair/refurbish ', value: 2300 },
                 { name: 'Repurpose/remanufacture', value: 1500 },
                 { name: 'Recycle', value: 4000 },
                 { name: 'Unknown/other ', value: 1000 }
             ],
             recoveryChat: [
                 { name: 'Reuse', y: 12 },
                 { name: 'Repair/refurbish ', y: 13 },
                 { name: 'Repurpose/remanufacture', y: 15 },
                 { name: 'Recycle', y: 40 },
                 { name: 'Unknown/other ', y: 10 }
             ],

             recoveryTypeTotalMass: 10000,
         },


         optimizeTheLoop: {
             criticalMaterials: [
                 { name: 'Cesium', mass: 15, virginRenewable: 45, nonVirginRenewable: 45, virginNonRenewable: 45, nonVirginNonRenewable: 45, focusFlow: true },
                 { name: 'Cobalt2', mass: 15, virginRenewable: 45, nonVirginRenewable: 45, virginNonRenewable: 45, nonVirginNonRenewable: 45 },
                 { name: 'new inf pri', mass: 15, virginRenewable: 45, nonVirginRenewable: 45, virginNonRenewable: 45, nonVirginNonRenewable: 45, critical: true, focusFlow: true },
                 { name: 'test un', mass: 15, virginRenewable: 45, nonVirginRenewable: 45, virginNonRenewable: 45, nonVirginNonRenewable: 45 },
                 { name: 'Cesium', mass: 15, virginRenewable: 45, nonVirginRenewable: 45, virginNonRenewable: 45, nonVirginNonRenewable: 45, critical: true },
                 { name: 'Cobalt2', mass: 15, virginRenewable: 45, nonVirginRenewable: 45, virginNonRenewable: 45, nonVirginNonRenewable: 45, critical: true },
                 { name: 'new inf pri', mass: 15, virginRenewable: 45, nonVirginRenewable: 45, virginNonRenewable: 45, nonVirginNonRenewable: 45 },
                 { name: 'test un', mass: 15, virginRenewable: 45, nonVirginRenewable: 45, virginNonRenewable: 45, nonVirginNonRenewable: 45, focusFlow: true },
                 { name: 'Cesium', mass: 15, virginRenewable: 45, nonVirginRenewable: 45, virginNonRenewable: 45, nonVirginNonRenewable: 45 },
             ],
             circularMaterialProductivity: {
                 revenue: 2700,
                 totalMass: 10000,
                 percent: 27,
             },
             renewableEnergy: {
                 renewable: 2700,
                 totalEnergy: 10000,
                 percent: 27,
             }
         },


     },
     methods: {
         delayedShow() {},
     },
     mounted() {
         this.delayedShow();

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
                 data: this.outflowDetails.recoveryChat,
             }]
         });


     },
 });

 // const s = document.getElementById('unit-circularity-chart');
 // s.setAttribute('data-inflow', 50);
 // s.setAttribute('data-outflow', 50);

 // console.log(s);

 function generateReport() {
     hash = window.location.hash.substr(1);
     arHash = hash.split("=");
     token = arHash[1];
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
 }