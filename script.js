/* =====================================================
   DONNÉES
===================================================== */

/*
   IMPORTANT :

   Remplace les valeurs ci-dessous par tes données
   réelles.

   Les valeurs des graphiques sont exprimées en
   pourcentage.
*/


/* =====================================================
   1. INDICATEURS PRINCIPAUX
===================================================== */


/* الكميات المجمعة */

const totalCollection = 0;


/* عدد مراكز التجميع */

const centersNumber = 0;


/* عدد الولايات */

const governoratesNumber = 0;


/* نسبة التجميع */

const collectionRate = 0;



/* Affichage des indicateurs */

document.getElementById(
    "totalCollection"
).textContent =
    totalCollection.toLocaleString("fr-FR");


document.getElementById(
    "centersNumber"
).textContent =
    centersNumber.toLocaleString("fr-FR");


document.getElementById(
    "governoratesNumber"
).textContent =
    governoratesNumber.toLocaleString("fr-FR");


document.getElementById(
    "collectionRate"
).textContent =
    collectionRate.toLocaleString("fr-FR");



/* =====================================================
   COULEURS DES GRAPHIQUES
===================================================== */


/*
   Couleurs inspirées de la présentation
   institutionnelle du dépliant.
*/

const chartColors = [

    "#245B36",

    "#D2A63B",

    "#3C7890",

    "#8FAE7B",

    "#C98B2E",

    "#6A8E78"

];



/* =====================================================
   2. GRAPHIQUE :
      حسب النوع
===================================================== */


/*
   Exemple :

   القمح الصلب
   القمح اللين
   الشعير والتريتيكال
*/


const cerealsLabels = [

    "القمح الصلب",

    "القمح اللين",

    "الشعير والتريتيكال"

];


const cerealsValues = [

    0,

    0,

    0

];



const cerealsCanvas =
    document.getElementById(
        "cerealesChart"
    );


new Chart(

    cerealsCanvas,

    {

        type: "doughnut",


        data: {

            labels:
                cerealsLabels,

            datasets: [

                {

                    data:
                        cerealsValues,

                    backgroundColor:
                        chartColors.slice(0, 3),

                    borderColor:
                        "#ffffff",

                    borderWidth:
                        4,

                    hoverOffset:
                        8

                }

            ]

        },


        options: {

            responsive: true,

            maintainAspectRatio: false,


            cutout: "58%",


            rotation: -90,


            plugins: {

                legend: {

                    display: true,

                    position: "right",

                    rtl: true,

                    textDirection: "rtl",

                    labels: {

                        padding: 16,

                        boxWidth: 14,

                        font: {

                            family:
                                "Cairo",

                            size: 13

                        }

                    }

                },


                tooltip: {

                    rtl: true,

                    textDirection: "rtl",

                    callbacks: {

                        label:
                            function(context) {

                                return (

                                    context.label +

                                    " : " +

                                    context.parsed +

                                    "%"

                                );

                            }

                    }

                }

            }

        }

    }

);



/* =====================================================
   3. GRAPHIQUE :
      حسب الاستعمال
===================================================== */


/*
   مثال :

   حبوب استهلاك
   بذور ممتازة
*/


const usageLabels = [

    "حبوب استهلاك",

    "بذور ممتازة"

];


const usageValues = [

    0,

    0

];



const usageCanvas =
    document.getElementById(
        "usageChart"
    );


new Chart(

    usageCanvas,

    {

        type: "doughnut",


        data: {

            labels:
                usageLabels,

            datasets: [

                {

                    data:
                        usageValues,

                    backgroundColor:
                        [

                            "#245B36",

                            "#D2A63B"

                        ],

                    borderColor:
                        "#ffffff",

                    borderWidth:
                        4,

                    hoverOffset:
                        8

                }

            ]

        },


        options: {

            responsive: true,

            maintainAspectRatio: false,


            cutout: "58%",


            rotation: -90,


            plugins: {

                legend: {

                    display: true,

                    position: "right",

                    rtl: true,

                    textDirection: "rtl",

                    labels: {

                        padding: 16,

                        boxWidth: 14,

                        font: {

                            family:
                                "Cairo",

                            size: 13

                        }

                    }

                },


                tooltip: {

                    rtl: true,

                    textDirection: "rtl",

                    callbacks: {

                        label:
                            function(context) {

                                return (

                                    context.label +

                                    " : " +

                                    context.parsed +

                                    "%"

                                );

                            }

                    }

                }

            }

        }

    }

);



/* =====================================================
   4. GRAPHIQUE :
      حسب المجمعين
===================================================== */


/*
   مثال :

   المجمعون الخواص
   الشركات التعاونية
   ديوان الحبوب
*/


const collectorsLabels = [

    "المجمعون الخواص",

    "الشركات التعاونية",

    "ديوان الحبوب"

];


const collectorsValues = [

    0,

    0,

    0

];



const collectorsCanvas =
    document.getElementById(
        "collectorsChart"
    );


new Chart(

    collectorsCanvas,

    {

        type: "doughnut",


        data: {

            labels:
                collectorsLabels,

            datasets: [

                {

                    data:
                        collectorsValues,

                    backgroundColor:
                        [

                            "#245B36",

                            "#3C7890",

                            "#D2A63B"

                        ],

                    borderColor:
                        "#ffffff",

                    borderWidth:
                        4,

                    hoverOffset:
                        8

                }

            ]

        },


        options: {

            responsive: true,

            maintainAspectRatio: false,


            cutout: "58%",


            rotation: -90,


            plugins: {

                legend: {

                    display: true,

                    position: "right",

                    rtl: true,

                    textDirection: "rtl",

                    labels: {

                        padding: 16,

                        boxWidth: 14,

                        font: {

                            family:
                                "Cairo",

                            size: 13

                        }

                    }

                },


                tooltip: {

                    rtl: true,

                    textDirection: "rtl",

                    callbacks: {

                        label:
                            function(context) {

                                return (

                                    context.label +

                                    " : " +

                                    context.parsed +

                                    "%"

                                );

                            }

                    }

                }

            }

        }

    }

);
