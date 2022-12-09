import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export const AndijonPie = [
    {
        title: "Internet xizmati",
        service: [
            {
                name: "Mavjud",
                color: "#24CA49",
            },
            {
                name: "Mavjud emas",
                color: "#F33737"
            },            
        ],
        data: {
            datasets: [
                {
                    data: [generateNum(), generateNum()],
                    borderColor: ['#24CA49', '#F33737'],
                    backgroundColor: ['#24CA49', '#F33737'],
                },
            ],
        }
    },
    {
        title: "Internet uchun texnologiya",
        service: [
            {
                name: "xDSL",
                color: "#24CA49",
            },
            {
                name: "FTTx",
                color: "#0AAFFF"
            },
            {
                name: "GPON",
                color: "#FE7E07"
            },
        ],
        data: {
            datasets: [
                {
                    data: [generateNum(), generateNum(), generateNum()],
                    backgroundColor: ['#24CA49', '#FF7A2F', '#0AAFFF'],
                    borderColor: ['#24CA49', '#FF7A2F', '#0AAFFF'],
                },
            ],
        }
    },
    {
        title: "Telefon aloqa xizmati",
        service: [
            {
                name: "Mavjud",
                color: "#24CA49",
            },
            {
                name: "Mavjud emas",
                color: "#F33737"
            },            
        ],
        data: {
            datasets: [
                {
                    data: [generateNum(), generateNum()],
                    backgroundColor: ['#24CA49', '#F33737'],
                    borderColor: ['#24CA49', '#F33737'],
                },
            ],
        }
    },
    {
        title: "Mobil aloqa xizmati",
        service: [
            {
                name: "2G",
                color: "#F33737",
            },
            {
                name: "3G",
                color: "#FF7A2F"
            },
            {
                name: "4G",
                color: "#0AAFFF"
            },
            {
                name: "5G",
                color: "#24CA49"
            },
        ],
        data: {
            datasets: [
                {
                    data: [generateNum(), generateNum(), generateNum(), generateNum()],
                    backgroundColor: ['#F33737', '#FF7A2F', '#0AAFFF', '#24CA49'],
                    borderColor: ['#F33737', '#FF7A2F', '#0AAFFF', '#24CA49'],
                },
            ],
        }
    }
];
export const BuxoroPie = [
    {
        title: "Internet xizmati",
        service: [
            {
                name: "Mavjud",
                color: "#24CA49",
            },
            {
                name: "Mavjud emas",
                color: "#F33737"
            },            
        ],
        data: {
            datasets: [
                {
                    data: [generateNum(), generateNum()],
                    borderColor: ['#24CA49', '#F33737'],
                    backgroundColor: ['#24CA49', '#F33737'],
                },
            ],
        }
    },
    {
        title: "Internet uchun texnologiya",
        service: [
            {
                name: "xDSL",
                color: "#24CA49",
            },
            {
                name: "FTTx",
                color: "#0AAFFF"
            },
            {
                name: "GPON",
                color: "#FE7E07"
            },
        ],
        data: {
            datasets: [
                {
                    data: [generateNum(), generateNum(), generateNum()],
                    backgroundColor: ['#24CA49', '#FF7A2F', '#0AAFFF'],
                    borderColor: ['#24CA49', '#FF7A2F', '#0AAFFF'],
                },
            ],
        }
    },
    {
        title: "Telefon aloqa xizmati",
        service: [
            {
                name: "Mavjud",
                color: "#24CA49",
            },
            {
                name: "Mavjud emas",
                color: "#F33737"
            },            
        ],
        data: {
            datasets: [
                {
                    data: [generateNum(), generateNum()],
                    backgroundColor: ['#24CA49', '#F33737'],
                    borderColor: ['#24CA49', '#F33737'],
                },
            ],
        }
    },
    {
        title: "Mobil aloqa xizmati",
        service: [
            {
                name: "2G",
                color: "#F33737",
            },
            {
                name: "3G",
                color: "#FF7A2F"
            },
            {
                name: "4G",
                color: "#0AAFFF"
            },
            {
                name: "5G",
                color: "#24CA49"
            },
        ],
        data: {
            datasets: [
                {
                    data: [generateNum(), generateNum(), generateNum(), generateNum()],
                    backgroundColor: ['#F33737', '#FF7A2F', '#0AAFFF', '#24CA49'],
                    borderColor: ['#F33737', '#FF7A2F', '#0AAFFF', '#24CA49'],
                },
            ],
        }
    }
];
export const JizzaxPie = [
    {
        title: "Internet xizmati",
        service: [
            {
                name: "Mavjud",
                color: "#24CA49",
            },
            {
                name: "Mavjud emas",
                color: "#F33737"
            },            
        ],
        data: {
            datasets: [
                {
                    data: [generateNum(), generateNum()],
                    borderColor: ['#24CA49', '#F33737'],
                    backgroundColor: ['#24CA49', '#F33737'],
                },
            ],
        }
    },
    {
        title: "Internet uchun texnologiya",
        service: [
            {
                name: "xDSL",
                color: "#24CA49",
            },
            {
                name: "FTTx",
                color: "#0AAFFF"
            },
            {
                name: "GPON",
                color: "#FE7E07"
            },
        ],
        data: {
            datasets: [
                {
                    data: [generateNum(), generateNum(), generateNum()],
                    backgroundColor: ['#24CA49', '#FF7A2F', '#0AAFFF'],
                    borderColor: ['#24CA49', '#FF7A2F', '#0AAFFF'],
                },
            ],
        }
    },
    {
        title: "Telefon aloqa xizmati",
        service: [
            {
                name: "Mavjud",
                color: "#24CA49",
            },
            {
                name: "Mavjud emas",
                color: "#F33737"
            },            
        ],
        data: {
            datasets: [
                {
                    data: [generateNum(), generateNum()],
                    backgroundColor: ['#24CA49', '#F33737'],
                    borderColor: ['#24CA49', '#F33737'],
                },
            ],
        }
    },
    {
        title: "Mobil aloqa xizmati",
        service: [
            {
                name: "2G",
                color: "#F33737",
            },
            {
                name: "3G",
                color: "#FF7A2F"
            },
            {
                name: "4G",
                color: "#0AAFFF"
            },
            {
                name: "5G",
                color: "#24CA49"
            },
        ],
        data: {
            datasets: [
                {
                    data: [generateNum(), generateNum(), generateNum(), generateNum()],
                    backgroundColor: ['#F33737', '#FF7A2F', '#0AAFFF', '#24CA49'],
                    borderColor: ['#F33737', '#FF7A2F', '#0AAFFF', '#24CA49'],
                },
            ],
        }
    }
];
export const QashqadaryoPie = [
    {
        title: "Internet xizmati",
        service: [
            {
                name: "Mavjud",
                color: "#24CA49",
            },
            {
                name: "Mavjud emas",
                color: "#F33737"
            },            
        ],
        data: {
            datasets: [
                {
                    data: [generateNum(), generateNum()],
                    borderColor: ['#24CA49', '#F33737'],
                    backgroundColor: ['#24CA49', '#F33737'],
                },
            ],
        }
    },
    {
        title: "Internet uchun texnologiya",
        service: [
            {
                name: "xDSL",
                color: "#24CA49",
            },
            {
                name: "FTTx",
                color: "#0AAFFF"
            },
            {
                name: "GPON",
                color: "#FE7E07"
            },
        ],
        data: {
            datasets: [
                {
                    data: [generateNum(), generateNum(), generateNum()],
                    backgroundColor: ['#24CA49', '#FF7A2F', '#0AAFFF'],
                    borderColor: ['#24CA49', '#FF7A2F', '#0AAFFF'],
                },
            ],
        }
    },
    {
        title: "Telefon aloqa xizmati",
        service: [
            {
                name: "Mavjud",
                color: "#24CA49",
            },
            {
                name: "Mavjud emas",
                color: "#F33737"
            },            
        ],
        data: {
            datasets: [
                {
                    data: [generateNum(), generateNum()],
                    backgroundColor: ['#24CA49', '#F33737'],
                    borderColor: ['#24CA49', '#F33737'],
                },
            ],
        }
    },
    {
        title: "Mobil aloqa xizmati",
        service: [
            {
                name: "2G",
                color: "#F33737",
            },
            {
                name: "3G",
                color: "#FF7A2F"
            },
            {
                name: "4G",
                color: "#0AAFFF"
            },
            {
                name: "5G",
                color: "#24CA49"
            },
        ],
        data: {
            datasets: [
                {
                    data: [generateNum(), generateNum(), generateNum(), generateNum()],
                    backgroundColor: ['#F33737', '#FF7A2F', '#0AAFFF', '#24CA49'],
                    borderColor: ['#F33737', '#FF7A2F', '#0AAFFF', '#24CA49'],
                },
            ],
        }
    }
];
export const NavoiyPie = [
    {
        title: "Internet xizmati",
        service: [
            {
                name: "Mavjud",
                color: "#24CA49",
            },
            {
                name: "Mavjud emas",
                color: "#F33737"
            },            
        ],
        data: {
            datasets: [
                {
                    data: [generateNum(), generateNum()],
                    borderColor: ['#24CA49', '#F33737'],
                    backgroundColor: ['#24CA49', '#F33737'],
                },
            ],
        }
    },
    {
        title: "Internet uchun texnologiya",
        service: [
            {
                name: "xDSL",
                color: "#24CA49",
            },
            {
                name: "FTTx",
                color: "#0AAFFF"
            },
            {
                name: "GPON",
                color: "#FE7E07"
            },
        ],
        data: {
            datasets: [
                {
                    data: [generateNum(), generateNum(), generateNum()],
                    backgroundColor: ['#24CA49', '#FF7A2F', '#0AAFFF'],
                    borderColor: ['#24CA49', '#FF7A2F', '#0AAFFF'],
                },
            ],
        }
    },
    {
        title: "Telefon aloqa xizmati",
        service: [
            {
                name: "Mavjud",
                color: "#24CA49",
            },
            {
                name: "Mavjud emas",
                color: "#F33737"
            },            
        ],
        data: {
            datasets: [
                {
                    data: [generateNum(), generateNum()],
                    backgroundColor: ['#24CA49', '#F33737'],
                    borderColor: ['#24CA49', '#F33737'],
                },
            ],
        }
    },
    {
        title: "Mobil aloqa xizmati",
        service: [
            {
                name: "2G",
                color: "#F33737",
            },
            {
                name: "3G",
                color: "#FF7A2F"
            },
            {
                name: "4G",
                color: "#0AAFFF"
            },
            {
                name: "5G",
                color: "#24CA49"
            },
        ],
        data: {
            datasets: [
                {
                    data: [generateNum(), generateNum(), generateNum(), generateNum()],
                    backgroundColor: ['#F33737', '#FF7A2F', '#0AAFFF', '#24CA49'],
                    borderColor: ['#F33737', '#FF7A2F', '#0AAFFF', '#24CA49'],
                },
            ],
        }
    }
];
export const NamanganPie = [
    {
        title: "Internet xizmati",
        service: [
            {
                name: "Mavjud",
                color: "#24CA49",
            },
            {
                name: "Mavjud emas",
                color: "#F33737"
            },            
        ],
        data: {
            datasets: [
                {
                    data: [generateNum(), generateNum()],
                    borderColor: ['#24CA49', '#F33737'],
                    backgroundColor: ['#24CA49', '#F33737'],
                },
            ],
        }
    },
    {
        title: "Internet uchun texnologiya",
        service: [
            {
                name: "xDSL",
                color: "#24CA49",
            },
            {
                name: "FTTx",
                color: "#0AAFFF"
            },
            {
                name: "GPON",
                color: "#FE7E07"
            },
        ],
        data: {
            datasets: [
                {
                    data: [generateNum(), generateNum(), generateNum()],
                    backgroundColor: ['#24CA49', '#FF7A2F', '#0AAFFF'],
                    borderColor: ['#24CA49', '#FF7A2F', '#0AAFFF'],
                },
            ],
        }
    },
    {
        title: "Telefon aloqa xizmati",
        service: [
            {
                name: "Mavjud",
                color: "#24CA49",
            },
            {
                name: "Mavjud emas",
                color: "#F33737"
            },            
        ],
        data: {
            datasets: [
                {
                    data: [generateNum(), generateNum()],
                    backgroundColor: ['#24CA49', '#F33737'],
                    borderColor: ['#24CA49', '#F33737'],
                },
            ],
        }
    },
    {
        title: "Mobil aloqa xizmati",
        service: [
            {
                name: "2G",
                color: "#F33737",
            },
            {
                name: "3G",
                color: "#FF7A2F"
            },
            {
                name: "4G",
                color: "#0AAFFF"
            },
            {
                name: "5G",
                color: "#24CA49"
            },
        ],
        data: {
            datasets: [
                {
                    data: [generateNum(), generateNum(), generateNum(), generateNum()],
                    backgroundColor: ['#F33737', '#FF7A2F', '#0AAFFF', '#24CA49'],
                    borderColor: ['#F33737', '#FF7A2F', '#0AAFFF', '#24CA49'],
                },
            ],
        }
    }
];
export const SamarqandPie = [
    {
        title: "Internet xizmati",
        service: [
            {
                name: "Mavjud",
                color: "#24CA49",
            },
            {
                name: "Mavjud emas",
                color: "#F33737"
            },            
        ],
        data: {
            datasets: [
                {
                    data: [generateNum(), generateNum()],
                    borderColor: ['#24CA49', '#F33737'],
                    backgroundColor: ['#24CA49', '#F33737'],
                },
            ],
        }
    },
    {
        title: "Internet uchun texnologiya",
        service: [
            {
                name: "xDSL",
                color: "#24CA49",
            },
            {
                name: "FTTx",
                color: "#0AAFFF"
            },
            {
                name: "GPON",
                color: "#FE7E07"
            },
        ],
        data: {
            datasets: [
                {
                    data: [generateNum(), generateNum(), generateNum()],
                    backgroundColor: ['#24CA49', '#FF7A2F', '#0AAFFF'],
                    borderColor: ['#24CA49', '#FF7A2F', '#0AAFFF'],
                },
            ],
        }
    },
    {
        title: "Telefon aloqa xizmati",
        service: [
            {
                name: "Mavjud",
                color: "#24CA49",
            },
            {
                name: "Mavjud emas",
                color: "#F33737"
            },            
        ],
        data: {
            datasets: [
                {
                    data: [generateNum(), generateNum()],
                    backgroundColor: ['#24CA49', '#F33737'],
                    borderColor: ['#24CA49', '#F33737'],
                },
            ],
        }
    },
    {
        title: "Mobil aloqa xizmati",
        service: [
            {
                name: "2G",
                color: "#F33737",
            },
            {
                name: "3G",
                color: "#FF7A2F"
            },
            {
                name: "4G",
                color: "#0AAFFF"
            },
            {
                name: "5G",
                color: "#24CA49"
            },
        ],
        data: {
            datasets: [
                {
                    data: [generateNum(), generateNum(), generateNum(), generateNum()],
                    backgroundColor: ['#F33737', '#FF7A2F', '#0AAFFF', '#24CA49'],
                    borderColor: ['#F33737', '#FF7A2F', '#0AAFFF', '#24CA49'],
                },
            ],
        }
    }
];
export const SurxondaryoPie = [
    {
        title: "Internet xizmati",
        service: [
            {
                name: "Mavjud",
                color: "#24CA49",
            },
            {
                name: "Mavjud emas",
                color: "#F33737"
            },            
        ],
        data: {
            datasets: [
                {
                    data: [generateNum(), generateNum()],
                    borderColor: ['#24CA49', '#F33737'],
                    backgroundColor: ['#24CA49', '#F33737'],
                },
            ],
        }
    },
    {
        title: "Internet uchun texnologiya",
        service: [
            {
                name: "xDSL",
                color: "#24CA49",
            },
            {
                name: "FTTx",
                color: "#0AAFFF"
            },
            {
                name: "GPON",
                color: "#FE7E07"
            },
        ],
        data: {
            datasets: [
                {
                    data: [generateNum(), generateNum(), generateNum()],
                    backgroundColor: ['#24CA49', '#FF7A2F', '#0AAFFF'],
                    borderColor: ['#24CA49', '#FF7A2F', '#0AAFFF'],
                },
            ],
        }
    },
    {
        title: "Telefon aloqa xizmati",
        service: [
            {
                name: "Mavjud",
                color: "#24CA49",
            },
            {
                name: "Mavjud emas",
                color: "#F33737"
            },            
        ],
        data: {
            datasets: [
                {
                    data: [generateNum(), generateNum()],
                    backgroundColor: ['#24CA49', '#F33737'],
                    borderColor: ['#24CA49', '#F33737'],
                },
            ],
        }
    },
    {
        title: "Mobil aloqa xizmati",
        service: [
            {
                name: "2G",
                color: "#F33737",
            },
            {
                name: "3G",
                color: "#FF7A2F"
            },
            {
                name: "4G",
                color: "#0AAFFF"
            },
            {
                name: "5G",
                color: "#24CA49"
            },
        ],
        data: {
            datasets: [
                {
                    data: [generateNum(), generateNum(), generateNum(), generateNum()],
                    backgroundColor: ['#F33737', '#FF7A2F', '#0AAFFF', '#24CA49'],
                    borderColor: ['#F33737', '#FF7A2F', '#0AAFFF', '#24CA49'],
                },
            ],
        }
    }
];
export const SirdaryoPie = [
    {
        title: "Internet xizmati",
        service: [
            {
                name: "Mavjud",
                color: "#24CA49",
            },
            {
                name: "Mavjud emas",
                color: "#F33737"
            },            
        ],
        data: {
            datasets: [
                {
                    data: [generateNum(), generateNum()],
                    borderColor: ['#24CA49', '#F33737'],
                    backgroundColor: ['#24CA49', '#F33737'],
                },
            ],
        }
    },
    {
        title: "Internet uchun texnologiya",
        service: [
            {
                name: "xDSL",
                color: "#24CA49",
            },
            {
                name: "FTTx",
                color: "#0AAFFF"
            },
            {
                name: "GPON",
                color: "#FE7E07"
            },
        ],
        data: {
            datasets: [
                {
                    data: [generateNum(), generateNum(), generateNum()],
                    backgroundColor: ['#24CA49', '#FF7A2F', '#0AAFFF'],
                    borderColor: ['#24CA49', '#FF7A2F', '#0AAFFF'],
                },
            ],
        }
    },
    {
        title: "Telefon aloqa xizmati",
        service: [
            {
                name: "Mavjud",
                color: "#24CA49",
            },
            {
                name: "Mavjud emas",
                color: "#F33737"
            },            
        ],
        data: {
            datasets: [
                {
                    data: [generateNum(), generateNum()],
                    backgroundColor: ['#24CA49', '#F33737'],
                    borderColor: ['#24CA49', '#F33737'],
                },
            ],
        }
    },
    {
        title: "Mobil aloqa xizmati",
        service: [
            {
                name: "2G",
                color: "#F33737",
            },
            {
                name: "3G",
                color: "#FF7A2F"
            },
            {
                name: "4G",
                color: "#0AAFFF"
            },
            {
                name: "5G",
                color: "#24CA49"
            },
        ],
        data: {
            datasets: [
                {
                    data: [generateNum(), generateNum(), generateNum(), generateNum()],
                    backgroundColor: ['#F33737', '#FF7A2F', '#0AAFFF', '#24CA49'],
                    borderColor: ['#F33737', '#FF7A2F', '#0AAFFF', '#24CA49'],
                },
            ],
        }
    }
];
export const ToshkentVPie = [
    {
        title: "Internet xizmati",
        service: [
            {
                name: "Mavjud",
                color: "#24CA49",
            },
            {
                name: "Mavjud emas",
                color: "#F33737"
            },            
        ],
        data: {
            datasets: [
                {
                    data: [generateNum(), generateNum()],
                    borderColor: ['#24CA49', '#F33737'],
                    backgroundColor: ['#24CA49', '#F33737'],
                },
            ],
        }
    },
    {
        title: "Internet uchun texnologiya",
        service: [
            {
                name: "xDSL",
                color: "#24CA49",
            },
            {
                name: "FTTx",
                color: "#0AAFFF"
            },
            {
                name: "GPON",
                color: "#FE7E07"
            },
        ],
        data: {
            datasets: [
                {
                    data: [generateNum(), generateNum(), generateNum()],
                    backgroundColor: ['#24CA49', '#FF7A2F', '#0AAFFF'],
                    borderColor: ['#24CA49', '#FF7A2F', '#0AAFFF'],
                },
            ],
        }
    },
    {
        title: "Telefon aloqa xizmati",
        service: [
            {
                name: "Mavjud",
                color: "#24CA49",
            },
            {
                name: "Mavjud emas",
                color: "#F33737"
            },            
        ],
        data: {
            datasets: [
                {
                    data: [generateNum(), generateNum()],
                    backgroundColor: ['#24CA49', '#F33737'],
                    borderColor: ['#24CA49', '#F33737'],
                },
            ],
        }
    },
    {
        title: "Mobil aloqa xizmati",
        service: [
            {
                name: "2G",
                color: "#F33737",
            },
            {
                name: "3G",
                color: "#FF7A2F"
            },
            {
                name: "4G",
                color: "#0AAFFF"
            },
            {
                name: "5G",
                color: "#24CA49"
            },
        ],
        data: {
            datasets: [
                {
                    data: [generateNum(), generateNum(), generateNum(), generateNum()],
                    backgroundColor: ['#F33737', '#FF7A2F', '#0AAFFF', '#24CA49'],
                    borderColor: ['#F33737', '#FF7A2F', '#0AAFFF', '#24CA49'],
                },
            ],
        }
    }
];
export const ToshkentShPie = [
    {
        title: "Internet xizmati",
        service: [
            {
                name: "Mavjud",
                color: "#24CA49",
            },
            {
                name: "Mavjud emas",
                color: "#F33737"
            },            
        ],
        data: {
            datasets: [
                {
                    data: [generateNum(), generateNum()],
                    borderColor: ['#24CA49', '#F33737'],
                    backgroundColor: ['#24CA49', '#F33737'],
                },
            ],
        }
    },
    {
        title: "Internet uchun texnologiya",
        service: [
            {
                name: "xDSL",
                color: "#24CA49",
            },
            {
                name: "FTTx",
                color: "#0AAFFF"
            },
            {
                name: "GPON",
                color: "#FE7E07"
            },
        ],
        data: {
            datasets: [
                {
                    data: [generateNum(), generateNum(), generateNum()],
                    backgroundColor: ['#24CA49', '#FF7A2F', '#0AAFFF'],
                    borderColor: ['#24CA49', '#FF7A2F', '#0AAFFF'],
                },
            ],
        }
    },
    {
        title: "Telefon aloqa xizmati",
        service: [
            {
                name: "Mavjud",
                color: "#24CA49",
            },
            {
                name: "Mavjud emas",
                color: "#F33737"
            },            
        ],
        data: {
            datasets: [
                {
                    data: [generateNum(), generateNum()],
                    backgroundColor: ['#24CA49', '#F33737'],
                    borderColor: ['#24CA49', '#F33737'],
                },
            ],
        }
    },
    {
        title: "Mobil aloqa xizmati",
        service: [
            {
                name: "2G",
                color: "#F33737",
            },
            {
                name: "3G",
                color: "#FF7A2F"
            },
            {
                name: "4G",
                color: "#0AAFFF"
            },
            {
                name: "5G",
                color: "#24CA49"
            },
        ],
        data: {
            datasets: [
                {
                    data: [generateNum(), generateNum(), generateNum(), generateNum()],
                    backgroundColor: ['#F33737', '#FF7A2F', '#0AAFFF', '#24CA49'],
                    borderColor: ['#F33737', '#FF7A2F', '#0AAFFF', '#24CA49'],
                },
            ],
        }
    }
];
export const FargonaPie = [
    {
        title: "Internet xizmati",
        service: [
            {
                name: "Mavjud",
                color: "#24CA49",
            },
            {
                name: "Mavjud emas",
                color: "#F33737"
            },            
        ],
        data: {
            datasets: [
                {
                    data: [generateNum(), generateNum()],
                    borderColor: ['#24CA49', '#F33737'],
                    backgroundColor: ['#24CA49', '#F33737'],
                },
            ],
        }
    },
    {
        title: "Internet uchun texnologiya",
        service: [
            {
                name: "xDSL",
                color: "#24CA49",
            },
            {
                name: "FTTx",
                color: "#0AAFFF"
            },
            {
                name: "GPON",
                color: "#FE7E07"
            },
        ],
        data: {
            datasets: [
                {
                    data: [generateNum(), generateNum(), generateNum()],
                    backgroundColor: ['#24CA49', '#FF7A2F', '#0AAFFF'],
                    borderColor: ['#24CA49', '#FF7A2F', '#0AAFFF'],
                },
            ],
        }
    },
    {
        title: "Telefon aloqa xizmati",
        service: [
            {
                name: "Mavjud",
                color: "#24CA49",
            },
            {
                name: "Mavjud emas",
                color: "#F33737"
            },            
        ],
        data: {
            datasets: [
                {
                    data: [generateNum(), generateNum()],
                    backgroundColor: ['#24CA49', '#F33737'],
                    borderColor: ['#24CA49', '#F33737'],
                },
            ],
        }
    },
    {
        title: "Mobil aloqa xizmati",
        service: [
            {
                name: "2G",
                color: "#F33737",
            },
            {
                name: "3G",
                color: "#FF7A2F"
            },
            {
                name: "4G",
                color: "#0AAFFF"
            },
            {
                name: "5G",
                color: "#24CA49"
            },
        ],
        data: {
            datasets: [
                {
                    data: [generateNum(), generateNum(), generateNum(), generateNum()],
                    backgroundColor: ['#F33737', '#FF7A2F', '#0AAFFF', '#24CA49'],
                    borderColor: ['#F33737', '#FF7A2F', '#0AAFFF', '#24CA49'],
                },
            ],
        }
    }
];
export const XorazmPie = [
    {
        title: "Internet xizmati",
        service: [
            {
                name: "Mavjud",
                color: "#24CA49",
            },
            {
                name: "Mavjud emas",
                color: "#F33737"
            },            
        ],
        data: {
            datasets: [
                {
                    data: [generateNum(), generateNum()],
                    borderColor: ['#24CA49', '#F33737'],
                    backgroundColor: ['#24CA49', '#F33737'],
                },
            ],
        }
    },
    {
        title: "Internet uchun texnologiya",
        service: [
            {
                name: "xDSL",
                color: "#24CA49",
            },
            {
                name: "FTTx",
                color: "#0AAFFF"
            },
            {
                name: "GPON",
                color: "#FE7E07"
            },
        ],
        data: {
            datasets: [
                {
                    data: [generateNum(), generateNum(), generateNum()],
                    backgroundColor: ['#24CA49', '#FF7A2F', '#0AAFFF'],
                    borderColor: ['#24CA49', '#FF7A2F', '#0AAFFF'],
                },
            ],
        }
    },
    {
        title: "Telefon aloqa xizmati",
        service: [
            {
                name: "Mavjud",
                color: "#24CA49",
            },
            {
                name: "Mavjud emas",
                color: "#F33737"
            },            
        ],
        data: {
            datasets: [
                {
                    data: [generateNum(), generateNum()],
                    backgroundColor: ['#24CA49', '#F33737'],
                    borderColor: ['#24CA49', '#F33737'],
                },
            ],
        }
    },
    {
        title: "Mobil aloqa xizmati",
        service: [
            {
                name: "2G",
                color: "#F33737",
            },
            {
                name: "3G",
                color: "#FF7A2F"
            },
            {
                name: "4G",
                color: "#0AAFFF"
            },
            {
                name: "5G",
                color: "#24CA49"
            },
        ],
        data: {
            datasets: [
                {
                    data: [generateNum(), generateNum(), generateNum(), generateNum()],
                    backgroundColor: ['#F33737', '#FF7A2F', '#0AAFFF', '#24CA49'],
                    borderColor: ['#F33737', '#FF7A2F', '#0AAFFF', '#24CA49'],
                },
            ],
        }
    }
];
export const QoraqalpoqPie = [
    {
        title: "Internet xizmati",
        service: [
            {
                name: "Mavjud",
                color: "#24CA49",
            },
            {
                name: "Mavjud emas",
                color: "#F33737"
            },            
        ],
        data: {
            datasets: [
                {
                    data: [generateNum(), generateNum()],
                    borderColor: ['#24CA49', '#F33737'],
                    backgroundColor: ['#24CA49', '#F33737'],
                },
            ],
        }
    },
    {
        title: "Internet uchun texnologiya",
        service: [
            {
                name: "xDSL",
                color: "#24CA49",
            },
            {
                name: "FTTx",
                color: "#0AAFFF"
            },
            {
                name: "GPON",
                color: "#FE7E07"
            },
        ],
        data: {
            datasets: [
                {
                    data: [generateNum(), generateNum(), generateNum()],
                    backgroundColor: ['#24CA49', '#FF7A2F', '#0AAFFF'],
                    borderColor: ['#24CA49', '#FF7A2F', '#0AAFFF'],
                },
            ],
        }
    },
    {
        title: "Telefon aloqa xizmati",
        service: [
            {
                name: "Mavjud",
                color: "#24CA49",
            },
            {
                name: "Mavjud emas",
                color: "#F33737"
            },            
        ],
        data: {
            datasets: [
                {
                    data: [generateNum(), generateNum()],
                    backgroundColor: ['#24CA49', '#F33737'],
                    borderColor: ['#24CA49', '#F33737'],
                },
            ],
        }
    },
    {
        title: "Mobil aloqa xizmati",
        service: [
            {
                name: "2G",
                color: "#F33737",
            },
            {
                name: "3G",
                color: "#FF7A2F"
            },
            {
                name: "4G",
                color: "#0AAFFF"
            },
            {
                name: "5G",
                color: "#24CA49"
            },
        ],
        data: {
            datasets: [
                {
                    data: [generateNum(), generateNum(), generateNum(), generateNum()],
                    backgroundColor: ['#F33737', '#FF7A2F', '#0AAFFF', '#24CA49'],
                    borderColor: ['#F33737', '#FF7A2F', '#0AAFFF', '#24CA49'],
                },
            ],
        }
    }
];

function generateNum() {
        return Math.floor(Math.random() * (100 - 1) + 1);
}
