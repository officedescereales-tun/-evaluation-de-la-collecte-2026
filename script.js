


/* =========================================
   المؤشرات الرئيسية
========================================= */

const totalCollection = 0;

const centersNumber = 0;

const governoratesNumber = 0;

const collectionRate = 0;


/* عرض المؤشرات */

document.getElementById("totalCollection").textContent =
    totalCollection.toLocaleString("ar-TN");

document.getElementById("centersNumber").textContent =
    centersNumber.toLocaleString("ar-TN");

document.getElementById("governoratesNumber").textContent =
    governoratesNumber.toLocaleString("ar-TN");

document.getElementById("collectionRate").textContent =
    collectionRate.toLocaleString("ar-TN");



/* =========================================
   الرسم الأول
   الكميات حسب نوع الحبوب
========================================= */

const cerealsLabels = [

    "القمح الصلب",

    "القمح اللين",

    "الشعير",

    "الترتيكالي"

];


const cerealsValues = [

    0,

    0,

    0,

    0

];


const cerealsChart = new Chart(

    document.getElementById("cerealesChart"),

    {

        type: "bar",

        data: {

            labels: cerealsLabels,

            datasets: [

                {

                    label:
                        "الكميات المجمعة (طن)",

                    data: cerealsValues,

                    borderWidth: 0,

                    borderRadius: 7

                }

            ]

        },


        options: {

            responsive: true,

            maintainAspectRatio: false,


            plugins: {

                legend: {

                    display: true,

                    position: "bottom",

                    rtl: true,

                    textDirection: "rtl"

                }

            },


            scales: {

                x: {

                    reverse: false,

                    ticks: {

                        font: {

                            size: 13

                        }

                    }

                },


                y: {

                    beginAtZero: true,

                    title: {

                        display: true,

                        text:
                            "الكميات بالطن",

                        font: {

                            size: 14

                        }

                    }

                }

            },


            layout: {

                padding: 10

            }


        }

    }

);



/* =========================================
   الرسم الثاني
   توزيع الكميات حسب المناطق
========================================= */

const regionsLabels = [

    "الشمال",

    "الوسط",

    "الجنوب"

];


const regionsValues = [

    0,

    0,

    0

];


const regionsChart = new Chart(

    document.getElementById("regionsChart"),

    {

        type: "doughnut",

        data: {

            labels: regionsLabels,

            datasets: [

                {

                    label:
                        "الكميات المجمعة",

                    data: regionsValues,

                    borderWidth: 2

                }

            ]

        },


        options: {

            responsive: true,

            maintainAspectRatio: false,


            plugins: {

                legend: {

                    position: "bottom",

                    rtl: true,

                    textDirection: "rtl",

                    labels: {

                        padding: 18

                    }

                }

            },


            layout: {

                padding: 10

            }

        }

    }

);



/* =========================================
   الرسم الثالث
   تطور الكميات المجمعة
========================================= */

const evolutionLabels = [

    "جوان",

    "جويلية",

    "أوت",

    "سبتمبر",

    "أكتوبر"

];


const evolutionValues = [

    0,

    0,

    0,

    0,

    0

];


const evolutionChart = new Chart(

    document.getElementById("evolutionChart"),

    {

        type: "line",

        data: {

            labels: evolutionLabels,

            datasets: [

                {

                    label:
                        "الكميات المجمعة (طن)",

                    data: evolutionValues,

                    borderWidth: 3,

                    pointRadius: 5,

                    tension: 0.3,

                    fill: false

                }

            ]

        },


        options: {

            responsive: true,

            maintainAspectRatio: false,


            plugins: {

                legend: {

                    position: "bottom",

                    rtl: true,

                    textDirection: "rtl"

                }

            },


            scales: {

                x: {

                    ticks: {

                        font: {

                            size: 13

                        }

                    }

                },


                y: {

                    beginAtZero: true,

                    title: {

                        display: true,

                        text:
                            "الكميات بالطن",

                        font: {

                            size: 14

                        }

                    }

                }

            },


            layout: {

                padding: 10

            }

        }

    }

);
