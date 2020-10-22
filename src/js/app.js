new Vue({
    el: "#app",
    data: {
        pageindex: [1, 2, 3, 4, 5, 6, 7],
        alphabet: '',
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
                step4: true,
                step5: true,
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
                { name: "Virgin", value: 0, weight: 7300 },
                { name: "Non-virgin", value: 0, weight: 1200 },
                { name: "Renewable", value: 45 },
                { name: "Renewable & Non-virgin", value: 55 },
            ],
            LargestInflow: [{
                    name: "Biodegradable Waste",
                    value: 53,
                    weight: 7300,
                    percent: [
                        { name: "V", value: 100 },
                        { name: "NV", value: 0 },
                        { name: "R", value: 0 },
                        { name: "RNV", value: 0 },
                    ],
                },
                {
                    name: "Biodegradable Waste",
                    value: 53,
                    weight: 7300,
                    percent: [
                        { name: "V", value: 100 },
                        { name: "NV", value: 0 },
                        { name: "R", value: 0 },
                        { name: "RNV", value: 0 },
                    ],
                },
                {
                    name: "Biodegradable Waste",
                    value: 53,
                    weight: 7300,
                    percent: [
                        { name: "V", value: 100 },
                        { name: "NV", value: 0 },
                        { name: "R", value: 0 },
                        { name: "RNV", value: 0 },
                    ],
                },
                {
                    name: "Biodegradable Waste",
                    value: 53,
                    weight: 7300,
                    percent: [
                        { name: "V", value: 100 },
                        { name: "NV", value: 0 },
                        { name: "R", value: 0 },
                        { name: "RNV", value: 0 },
                    ],
                },
                {
                    name: "Biodegradable Waste",
                    value: 53,
                    weight: 7300,
                    percent: [
                        { name: "V", value: 100 },
                        { name: "NV", value: 0 },
                        { name: "R", value: 0 },
                        { name: "RNV", value: 0 },
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
                recoveryPotentialPercent: 70,
                linearOutflowPercent: 30,
                circularOutflowPercent: 50,
                linearOutflowPercent2: 50,
            },
            largestOutflow: [{
                    name: "Biodegradable Waste",
                    value: 53,
                    weight: 7300,
                    percent: [
                        { name: "Linear Outflow", value: 60 },
                        { name: "Circular Outflow", value: 40 },
                    ],
                },
                {
                    name: "Biodegradable Waste",
                    value: 53,
                    weight: 7300,
                    percent: [
                        { name: "Linear Outflow", value: 40 },
                        { name: "Circular Outflow", value: 60 },
                    ],
                },
                {
                    name: "Biodegradable Waste",
                    value: 53,
                    weight: 7300,
                    percent: [
                        { name: "Linear Outflow", value: 50 },
                        { name: "Circular Outflow", value: 50 },
                    ],
                },
                {
                    name: "Biodegradable Waste",
                    value: 53,
                    weight: 7300,
                    percent: [
                        { name: "Linear Outflow", value: 70 },
                        { name: "Circular Outflow", value: 30 },
                    ],
                },
                {
                    name: "Biodegradable Waste",
                    value: 53,
                    weight: 7300,
                    percent: [
                        { name: "Linear Outflow", value: 20 },
                        { name: "Circular Outflow", value: 80 },
                    ],
                },
                {
                    name: "Biodegradable Waste",
                    value: 53,
                    weight: 7300,
                    percent: [
                        { name: "Linear Outflow", value: 20 },
                        { name: "Circular Outflow", value: 80 },
                    ],
                },
            ],
            mostCircularOutflow: [{
                    name: "Biodegradable Waste",
                    value: 53,
                    weight: 7300,
                    percent: [
                        { name: "Linear Outflow", value: 95 },
                        { name: "Circular Outflow", value: 5 },
                    ],
                },
                {
                    name: "Biodegradable Waste",
                    value: 53,
                    weight: 7300,
                    percent: [
                        { name: "Linear Outflow", value: 90 },
                        { name: "Circular Outflow", value: 10 },
                    ],
                },
                {
                    name: "Biodegradable Waste",
                    value: 53,
                    weight: 7300,
                    percent: [
                        { name: "Linear Outflow", value: 15 },
                        { name: "Circular Outflow", value: 85 },
                    ],
                },
                {
                    name: "Biodegradable Waste",
                    value: 53,
                    weight: 7300,
                    percent: [
                        { name: "Linear Outflow", value: 25 },
                        { name: "Circular Outflow", value: 75 },
                    ],
                },
                {
                    name: "Biodegradable Waste",
                    value: 53,
                    weight: 7300,
                    percent: [
                        { name: "Linear Outflow", value: 35 },
                        { name: "Circular Outflow", value: 65 },
                    ],
                },
            ],
            mostLinearOutflow: [{
                    name: "Biodegradable Waste",
                    value: 53,
                    weight: 7300,
                    percent: [
                        { name: "Linear Outflow", value: 50 },
                        { name: "Circular Outflow", value: 50 },
                    ],
                },
                {
                    name: "Biodegradable Waste",
                    value: 53,
                    weight: 7300,
                    percent: [
                        { name: "Linear Outflow", value: 100 },
                        { name: "Circular Outflow", value: 0 },
                    ],
                },
                {
                    name: "Biodegradable Waste",
                    value: 53,
                    weight: 7300,
                    percent: [
                        { name: "Linear Outflow", value: 100 },
                        { name: "Circular Outflow", value: 0 },
                    ],
                },
                {
                    name: "Biodegradable Waste",
                    value: 53,
                    weight: 7300,
                    percent: [
                        { name: "Linear Outflow", value: 100 },
                        { name: "Circular Outflow", value: 0 },
                    ],
                },
                {
                    name: "Biodegradable Waste",
                    value: 53,
                    weight: 7300,
                    percent: [
                        { name: "Linear Outflow", value: 100 },
                        { name: "Circular Outflow", value: 0 },
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
                revenue: 3500,
                totalMass: 2750,
                percent: 83,
            },
            renewableEnergy: {
                renewable: 3270,
                totalEnergy: 8320,
                percent: 67,
            }
        },

        step5: {
            inflowAnalaysis: [
                { name: 'Cesium ', mass: '1.000 - 756', massResult: 344, linearInflow: '327 - 123', linearInflowResult: 204, total: '1,73' },
                { name: 'Cobalt2', mass: '327 - 123', massResult: 204, linearInflow: '1.000 - 756', linearInflowResult: 344, total: '4,73' },
                { name: 'Cesium', mass: '1.000 - 756', massResult: 344, linearInflow: '327 - 123', linearInflowResult: 204, total: '1,73' },
                { name: 'Cobalt2', mass: '327 - 123', massResult: 204, linearInflow: '1.000 - 756', linearInflowResult: 344, total: '4,73' },
                { name: 'Cesium', mass: '1.000 - 756', massResult: 344, linearInflow: '327 - 123', linearInflowResult: 204, total: '1,73' }
            ],
            inflowNote: 'The circular inflow of the business unit wbcsd line will increase by 1.73% if all changes above are implemented.',
            whyCircularInflowValue: 9,
            whyCircularInflowAnswer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nobis dolore dignissimos ea? Quo aut recusandae delectus perspiciatis. Natus itaque sequi sapiente, ratione a et id odio sint explicabo sit?',
            expectedInflowAnswer: 'Lorem ipsum  ratione a et id odio sint explicabo sit?',
            expectedInflowWhyAnswer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
            outflowAnalaysis: [
                { name: 'Cesium ', mass: '1.000 - 756', massResult: 344, recoveryPotential: '327 - 123', recoveryPotentialResult: 204, actualRecovery: '1.000 - 756', actualRecoveryResult: 344, total: '1,73' },
                { name: 'Cesium ', mass: '1.000 - 756', massResult: 344, recoveryPotential: '327 - 123', recoveryPotentialResult: 204, actualRecovery: '1.000 - 756', actualRecoveryResult: 344, total: '1,73' },
                { name: 'Cesium ', mass: '1.000 - 756', massResult: 344, recoveryPotential: '327 - 123', recoveryPotentialResult: 204, actualRecovery: '1.000 - 756', actualRecoveryResult: 344, total: '1,73' },
                { name: 'Cesium ', mass: '1.000 - 756', massResult: 344, recoveryPotential: '327 - 123', recoveryPotentialResult: 204, actualRecovery: '1.000 - 756', actualRecoveryResult: 344, total: '1,73' },
                { name: 'Cesium ', mass: '1.000 - 756', massResult: 344, recoveryPotential: '327 - 123', recoveryPotentialResult: 204, actualRecovery: '1.000 - 756', actualRecoveryResult: 344, total: '1,73' },
            ],
            outflowNote: 'The circular inflow of the business unit wbcsd line will increase by 1.73% if all changes above are implemented',
            whyCircularOutflowValue: 9,
            whyCircularOutflowAnswer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nobis dolore dignissimos ea? Quo aut recusandae delectus perspiciatis. Natus itaque sequi sapiente, ratione a et id odio sint explicabo sit?',
            expectedOutflowAnswer: 'Lorem ipsum  ratione a et id odio sint explicabo sit?',
            expectedOutflowWhyAnswer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
        },

        step6: {
            inflowRisks: {
                market: {
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam laboriosam officiis illum voluptatem voluptates maiores minima provident, vitae optio adipisci quaerat iusto vel, totam eum ut praesentium reiciendis! Quaerat, sapiente!',
                    threat: 7,
                    valnerability: 2
                },
                operational: {
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. ',
                    threat: 1,
                    valnerability: 5
                },
                business: {
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. ',
                    threat: 1,
                    valnerability: 5
                },
                legal: {
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam laboriosam officiis illum voluptatem voluptates maiores minima provident, vitae optio adipisci quaerat iusto vel, totam eum ut praesentium reiciendis! Quaerat, sapiente!',
                    threat: 3,
                    valnerability: 4
                },
            },
            inflowOpportunities: {
                market: {
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam laboriosam officiis illum voluptatem voluptates maiores minima provident, vitae optio adipisci quaerat iusto vel, totam eum ut praesentium reiciendis! Quaerat, sapiente!',
                },
                operational: {
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam laboriosam officiis illum voluptatem voluptates maiores minima provident, vitae optio adipisci quaerat iusto vel, totam eum ut praesentium reiciendis! Quaerat, sapiente!',
                },
                business: {
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. ',
                },
                legal: {
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam laboriosam officiis illum voluptatem voluptates maiores minima provident, vitae optio adipisci quaerat iusto vel, totam eum ut praesentium reiciendis! Quaerat, sapiente!',
                },
            },
            outflowRisks: {
                market: {
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam laboriosam officiis illum voluptatem voluptates maiores minima provident, vitae optio adipisci quaerat iusto vel, totam eum ut praesentium reiciendis! Quaerat, sapiente!',
                    threat: 7,
                    valnerability: 2
                },
                operational: {
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. ',
                    threat: 1,
                    valnerability: 5
                },
                business: {
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. ',
                    threat: 1,
                    valnerability: 5
                },
                legal: {
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam laboriosam officiis illum voluptatem voluptates maiores minima provident, vitae optio adipisci quaerat iusto vel, totam eum ut praesentium reiciendis! Quaerat, sapiente!',
                    threat: 3,
                    valnerability: 4
                },
            },
            outflowOpportunities: {
                market: {
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam laboriosam officiis illum voluptatem voluptates maiores minima provident, vitae optio adipisci quaerat iusto vel, totam eum ut praesentium reiciendis! Quaerat, sapiente!',
                },
                operational: {
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam laboriosam officiis illum voluptatem voluptates maiores minima provident, vitae optio adipisci quaerat iusto vel, totam eum ut praesentium reiciendis! Quaerat, sapiente!',
                },
                business: {
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. ',
                },
                legal: {
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam laboriosam officiis illum voluptatem voluptates maiores minima provident, vitae optio adipisci quaerat iusto vel, totam eum ut praesentium reiciendis! Quaerat, sapiente!',
                },
            },
            energyRisks: {
                market: {
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam laboriosam officiis illum voluptatem voluptates maiores minima provident, vitae optio adipisci quaerat iusto vel, totam eum ut praesentium reiciendis! Quaerat, sapiente!',
                    threat: 7,
                    valnerability: 2
                },
                operational: {
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. ',
                    threat: 1,
                    valnerability: 5
                },
                business: {
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. ',
                    threat: 1,
                    valnerability: 5
                },
                legal: {
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam laboriosam officiis illum voluptatem voluptates maiores minima provident, vitae optio adipisci quaerat iusto vel, totam eum ut praesentium reiciendis! Quaerat, sapiente!',
                    threat: 3,
                    valnerability: 4
                },
            },
            energyOpportunities: {
                market: {
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam laboriosam officiis illum voluptatem voluptates maiores minima provident, vitae optio adipisci quaerat iusto vel, totam eum ut praesentium reiciendis! Quaerat, sapiente!',
                },
                operational: {
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam laboriosam officiis illum voluptatem voluptates maiores minima provident, vitae optio adipisci quaerat iusto vel, totam eum ut praesentium reiciendis! Quaerat, sapiente!',
                },
                business: {
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. ',
                },
                legal: {
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam laboriosam officiis illum voluptatem voluptates maiores minima provident, vitae optio adipisci quaerat iusto vel, totam eum ut praesentium reiciendis! Quaerat, sapiente!',
                },
            },
            criticalMaterialsShow: true,
            criticalRisks: {
                market: {
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam laboriosam officiis illum voluptatem voluptates maiores minima provident, vitae optio adipisci quaerat iusto vel, totam eum ut praesentium reiciendis! Quaerat, sapiente!',
                    threat: 7,
                    valnerability: 2
                },
                operational: {
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. ',
                    threat: 1,
                    valnerability: 5
                },
                business: {
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. ',
                    threat: 1,
                    valnerability: 5
                },
                legal: {
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam laboriosam officiis illum voluptatem voluptates maiores minima provident, vitae optio adipisci quaerat iusto vel, totam eum ut praesentium reiciendis! Quaerat, sapiente!',
                    threat: 3,
                    valnerability: 4
                },
            },
            criticalOpportunities: {
                market: {
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam laboriosam officiis illum voluptatem voluptates maiores minima provident, vitae optio adipisci quaerat iusto vel, totam eum ut praesentium reiciendis! Quaerat, sapiente!',
                },
                operational: {
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam laboriosam officiis illum voluptatem voluptates maiores minima provident, vitae optio adipisci quaerat iusto vel, totam eum ut praesentium reiciendis! Quaerat, sapiente!',
                },
                business: {
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. ',
                },
                legal: {
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam laboriosam officiis illum voluptatem voluptates maiores minima provident, vitae optio adipisci quaerat iusto vel, totam eum ut praesentium reiciendis! Quaerat, sapiente!',
                },
            },
        },

        step7: {
            smartTarget: [{
                    text: 'Kadir Erbakar',
                    what: ['what first answer ', 'what second answer'],
                    when: ['when first answer ', 'when second answer'],
                    who: ['who first answer ', 'who second answer', 'who last answer'],
                    departments: ['test 1', 'test 2'],
                    others: ['test 1', 'test 2'],
                    considerations: ['test 1', 'test 2'],
                },
                {
                    text: 'Kadir Erbakar',
                    what: ['what first answer ', 'what second answer'],
                    when: ['when first answer ', 'when second answer'],
                    who: ['who first answer ', 'who second answer', 'who last answer'],
                    departments: ['test 1', 'test 2'],
                    others: ['test 1', 'test 2'],
                    considerations: ['test 1', 'test 2'],
                }
            ],
        }
    },
    methods: {
        delayedShow() {},
    },
    mounted() {
        this.delayedShow();
        this.alphabet = 'abcdefghijklmnopqrstuvwxyz'.split(''),
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
    // token = arHash[1];
    token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJiNDllZTFlOC01NzJkLTQ2MTEtYmUwMy1kN2U2MWZmZWQ1NDEiLCJpYXQiOjE2MDMzNTkyMjMsImVtYWlsIjoiZWNhZ2lyYWxAZ21haWwuY29tIiwicm9sZXMiOlsiQ29tcGFueSBhZG1pbiIsIkF1dGhvcml6ZXIiXSwiZXhwIjoxNjAzMzcwMDIzfQ.6D8mNS3ydddp5R7H3gwKrK0r9FS4tWtJAwrBjZBPtcM';
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



function scrollTo() {
    console.log('KAdir');
    // window.scrollTo({ top: 0, behavior: 'smooth' });
}