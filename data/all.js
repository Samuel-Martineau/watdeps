const COURSES_MATH = [
    {
        "course": "MATH 103",
        "requirements": []
    },
    {
        "course": "MATH 104",
        "requirements": []
    },
    {
        "course": "MATH 115",
        "requirements": []
    },
    {
        "course": "MATH 116",
        "requirements": []
    },
    {
        "course": "MATH 117",
        "requirements": []
    },
    {
        "course": "MATH 118",
        "requirements": [
            [
                "MATH 116",
                "MATH 117",
                "MATH 127",
                "MATH 137",
                "MATH 147"
            ]
        ]
    },
    {
        "course": "MATH 119",
        "requirements": [
            [
                "MATH 116",
                "MATH 117",
                "MATH 127",
                "MATH 137",
                "MATH 147"
            ]
        ]
    },
    {
        "course": "MATH 106",
        "requirements": [
            "MATH 103"
        ]
    },
    {
        "course": "MATH 225",
        "requirements": [
            [
                "MATH 106",
                "MATH 136",
                "MATH 146"
            ]
        ]
    },
    {
        "course": "MATH 127",
        "requirements": [
            "MATH 104"
        ]
    },
    {
        "course": "MATH 128",
        "requirements": [
            [
                "MATH 116",
                "MATH 117",
                "MATH 127",
                "MATH 137",
                "MATH 147"
            ]
        ]
    },
    {
        "course": "MATH 135",
        "requirements": []
    },
    {
        "course": "MATH 136",
        "requirements": [
            [
                "MATH 135",
                "MATH 145"
            ]
        ]
    },
    {
        "course": "MATH 137",
        "requirements": []
    },
    {
        "course": "MATH 138",
        "requirements": [
            [
                "MATH 116",
                "MATH 117",
                "MATH 127",
                "MATH 137",
                "MATH 147"
            ]
        ]
    },
    {
        "course": "MATH 145",
        "requirements": []
    },
    {
        "course": "MATH 146",
        "requirements": [
            "MATH 145"
        ]
    },
    {
        "course": "MATH 147",
        "requirements": []
    },
    {
        "course": "MATH 148",
        "requirements": [
            "MATH 147"
        ]
    },
    {
        "course": "MATH 211",
        "requirements": [
            "MATH 119"
        ]
    },
    {
        "course": "MATH 212",
        "requirements": [
            [
                "MATH 211",
                "ECE 205"
            ]
        ]
    },
    {
        "course": "MATH 217",
        "requirements": [
            "MATH 118"
        ]
    },
    {
        "course": "MATH 218",
        "requirements": [
            [
                "MATH 118",
                "MATH 119",
                "MATH 128",
                "MATH 138",
                "MATH 148",
                "SYDE 112"
            ]
        ]
    },
    {
        "course": "MATH 227",
        "requirements": [
            [
                "MATH 128",
                "MATH 138"
            ]
        ]
    },
    {
        "course": "MATH 228",
        "requirements": [
            [
                "MATH 128",
                "MATH 138"
            ]
        ]
    },
    {
        "course": "MATH 235",
        "requirements": [
            [
                "MATH 106",
                "MATH 114",
                "MATH 115",
                "MATH 136",
                "MATH 146"
            ],
            [
                "MATH 128",
                "MATH 138",
                "MATH 148"
            ]
        ]
    },
    {
        "course": "MATH 237",
        "requirements": [
            [
                "MATH 106",
                "MATH 114",
                "MATH 115",
                "MATH 136",
                "MATH 146"
            ],
            [
                "MATH 128",
                "MATH 138",
                "MATH 148"
            ]
        ]
    },
    {
        "course": "MATH 239",
        "requirements": [
            [
                "MATH 106",
                "MATH 136",
                "MATH 146"
            ],
            [
                "MATH 135",
                "MATH 145"
            ]
        ]
    },
    {
        "course": "MATH 245",
        "requirements": [
            "MATH 146"
        ]
    },
    {
        "course": "MATH 247",
        "requirements": [
            "MATH 146",
            "MATH 148"
        ]
    },
    {
        "course": "MATH 249",
        "requirements": [
            [
                "MATH 135",
                "MATH 145"
            ],
            [
                "MATH 136",
                "MATH 146"
            ]
        ]
    },
    {
        "course": "MATH 114",
        "requirements": []
    },
    {
        "course": "MATH 213",
        "requirements": [
            [
                "MATH 118",
                "MATH 119",
                "MATH 128",
                "MATH 138"
            ]
        ]
    },
    {
        "course": "MATH 124",
        "requirements": []
    },
    {
        "course": "MATH 229",
        "requirements": [
            [
                "MATH 106",
                "MATH 136",
                "MATH 146"
            ],
            [
                "MATH 135",
                "MATH 145"
            ]
        ]
    },
    {
        "course": "MATH 207",
        "requirements": [
            [
                "MATH 128",
                "MATH 138",
                "MATH 148"
            ]
        ]
    },
    {
        "course": "MATH 215",
        "requirements": []
    }
];
const COURSES_AMATH = [
    {
        "course": "AMATH 231",
        "requirements": [
            [
                "MATH 237",
                "MATH 247"
            ]
        ]
    },
    {
        "course": "AMATH 250",
        "requirements": [
            [
                "MATH 106",
                "MATH 114",
                "MATH 115",
                "MATH 136",
                "MATH 146",
                "NE 112"
            ],
            [
                "MATH 118",
                "MATH 119",
                "MATH 128",
                "MATH 138",
                "MATH 148"
            ]
        ]
    },
    {
        "course": "AMATH 331",
        "requirements": [
            [
                "MATH 237",
                "MATH 247"
            ]
        ]
    },
    {
        "course": "AMATH 332",
        "requirements": [
            [
                "MATH 237",
                "MATH 247"
            ]
        ]
    },
    {
        "course": "AMATH 343",
        "requirements": [
            [
                "MATH 128",
                "MATH 138",
                "MATH 148"
            ]
        ]
    },
    {
        "course": "AMATH 351",
        "requirements": [
            [
                "AMATH 250",
                "AMATH 251",
                "MATH 237",
                "MATH 247"
            ],
            [
                "AMATH 350",
                "MATH 237",
                "MATH 247"
            ]
        ]
    },
    {
        "course": "AMATH 353",
        "requirements": [
            [
                "AMATH 250",
                "MATH 211",
                "ECE 205",
                "MATH 218",
                "MATH 228"
            ],
            [
                "AMATH 251",
                "MATH 211",
                "ECE 205",
                "MATH 218",
                "MATH 228"
            ],
            "AMATH 231"
        ]
    },
    {
        "course": "AMATH 361",
        "requirements": [
            "AMATH 231",
            [
                "AMATH 271",
                "PHYS 263"
            ],
            "AMATH 351",
            [
                "AMATH 353",
                "PHYS 364"
            ]
        ]
    },
    {
        "course": "AMATH 373",
        "requirements": [
            "AMATH 231",
            [
                "AMATH 271",
                "PHYS 263"
            ],
            "PHYS 234"
        ]
    },
    {
        "course": "AMATH 451",
        "requirements": [
            "AMATH 351"
        ]
    },
    {
        "course": "AMATH 453",
        "requirements": [
            "AMATH 351",
            "AMATH 353"
        ]
    },
    {
        "course": "AMATH 455",
        "requirements": [
            [
                "AMATH 332",
                "PMATH 332",
                "PMATH 352"
            ],
            [
                "AMATH 351",
                "PMATH 352"
            ]
        ]
    },
    {
        "course": "AMATH 463",
        "requirements": [
            [
                "AMATH 353",
                "PHYS 364"
            ],
            "AMATH 361"
        ]
    },
    {
        "course": "AMATH 473",
        "requirements": [
            [
                "AMATH 373",
                "PHYS 334"
            ]
        ]
    },
    {
        "course": "AMATH 475",
        "requirements": [
            [
                "AMATH 231",
                "MATH 227"
            ],
            [
                "AMATH 271",
                "PHYS 263"
            ]
        ]
    },
    {
        "course": "AMATH 495",
        "requirements": []
    },
    {
        "course": "AMATH 242",
        "requirements": [
            [
                "CS 116",
                "CS 136",
                "CS 138",
                "CS 146",
                "MATH 235",
                "MATH 245",
                "MATH 237",
                "MATH 247"
            ]
        ]
    },
    {
        "course": "AMATH 442",
        "requirements": [
            "AMATH 342"
        ]
    },
    {
        "course": "AMATH 342",
        "requirements": [
            [
                "AMATH 242",
                "CS 371",
                "AMATH 250",
                "AMATH 251",
                "AMATH 350",
                "MATH 218",
                "MATH 228"
            ],
            [
                "CS 370",
                "AMATH 250",
                "AMATH 251",
                "AMATH 350",
                "MATH 218",
                "MATH 228"
            ]
        ]
    },
    {
        "course": "AMATH 382",
        "requirements": [
            [
                "MATH 118",
                "MATH 119",
                "MATH 128",
                "MATH 138",
                "MATH 148"
            ]
        ]
    },
    {
        "course": "AMATH 391",
        "requirements": [
            [
                "AMATH 231",
                "ECE 342",
                "PHYS 364",
                "SYDE 252"
            ],
            [
                "MATH 114",
                "MATH 115",
                "MATH 136",
                "MATH 146",
                "SYDE 114"
            ]
        ]
    },
    {
        "course": "AMATH 350",
        "requirements": [
            [
                "MATH 106",
                "MATH 136",
                "MATH 146",
                "MATH 237",
                "MATH 247"
            ],
            [
                "STAT 230",
                "STAT 240"
            ],
            [
                "AFM 272",
                "ACTSC 291",
                "ACTSC 371",
                "ACTSC 372",
                "ECON 371",
                "BUS 393W"
            ]
        ]
    },
    {
        "course": "AMATH 271",
        "requirements": [
            [
                "MATH 128",
                "MATH 138",
                "MATH 148"
            ],
            "PHYS 121",
            [
                "AMATH 250",
                "AMATH 251",
                "MATH 228"
            ],
            [
                "MATH 227",
                "MATH 237",
                "MATH 247"
            ]
        ]
    },
    {
        "course": "AMATH 251",
        "requirements": [
            [
                "MATH 106",
                "MATH 114",
                "MATH 115",
                "MATH 136",
                "MATH 146",
                "NE 112"
            ],
            [
                "MATH 118",
                "MATH 119",
                "MATH 128",
                "MATH 138",
                "MATH 148"
            ]
        ]
    },
    {
        "course": "AMATH 390",
        "requirements": [
            [
                "MATH 118",
                "MATH 119",
                "MATH 128",
                "MATH 138",
                "MATH 148"
            ]
        ]
    },
    {
        "course": "AMATH 383",
        "requirements": [
            [
                "MATH 106",
                "MATH 114",
                "MATH 115",
                "MATH 136",
                "MATH 146"
            ],
            [
                "AMATH 250",
                "AMATH 251",
                "AMATH 350",
                "MATH 218",
                "MATH 228"
            ],
            [
                "STAT 202",
                "STAT 206",
                "STAT 211",
                "STAT 220",
                "STAT 230",
                "STAT 231",
                "STAT 241"
            ]
        ]
    },
    {
        "course": "AMATH 477",
        "requirements": [
            [
                "AMATH 250",
                "AMATH 251",
                "AMATH 350",
                "MATH 211",
                "ECE 205",
                "MATH 218",
                "MATH 228"
            ],
            [
                "STAT 230",
                "STAT 240"
            ]
        ]
    },
    {
        "course": "AMATH 474",
        "requirements": [
            "AMATH 473",
            "PHYS 454"
        ]
    },
    {
        "course": "AMATH 362",
        "requirements": [
            [
                "MATH 118",
                "MATH 119",
                "MATH 128",
                "MATH 138",
                "MATH 148"
            ],
            [
                "STAT 202",
                "STAT 206",
                "STAT 220",
                "STAT 230",
                "STAT 240"
            ],
            [
                "AMATH 250",
                "AMATH 251",
                "AMATH 350",
                "MATH 211",
                "MATH 213",
                "MATH 218",
                "MATH 228"
            ]
        ]
    },
    {
        "course": "AMATH 333",
        "requirements": [
            "PHYS 121",
            [
                "MATH 114",
                "MATH 136",
                "MATH 146"
            ],
            [
                "AMATH 231",
                "MATH 227",
                "PMATH 365"
            ]
        ]
    },
    {
        "course": "AMATH 499",
        "requirements": []
    }
];
const COURSES_PMATH = [
    {
        "course": "PMATH 331",
        "requirements": []
    },
    {
        "course": "PMATH 332",
        "requirements": [
            [
                "MATH 237",
                "MATH 247"
            ]
        ]
    },
    {
        "course": "PMATH 365",
        "requirements": [
            [
                "MATH 235",
                "MATH 245"
            ],
            [
                "MATH 237",
                "MATH 247"
            ]
        ]
    },
    {
        "course": "PMATH 451",
        "requirements": [
            "PMATH 450"
        ]
    },
    {
        "course": "PMATH 465",
        "requirements": [
            [
                "PMATH 365",
                "PMATH 367"
            ]
        ]
    },
    {
        "course": "PMATH 330",
        "requirements": [
            [
                "MATH 135",
                "MATH 145"
            ],
            [
                "MATH 225",
                "MATH 235",
                "MATH 245"
            ]
        ]
    },
    {
        "course": "PMATH 334",
        "requirements": [
            [
                "MATH 235",
                "MATH 245"
            ]
        ]
    },
    {
        "course": "PMATH 336",
        "requirements": [
            [
                "MATH 235",
                "MATH 245"
            ]
        ]
    },
    {
        "course": "PMATH 340",
        "requirements": [
            [
                "MATH 225",
                "MATH 135",
                "MATH 145"
            ]
        ]
    },
    {
        "course": "PMATH 343",
        "requirements": [
            [
                "MATH 235",
                "MATH 245",
                "MATH 247",
                "PMATH 333",
                "PMATH 351"
            ],
            [
                "AMATH 331",
                "PMATH 331",
                "MATH 247",
                "PMATH 333",
                "PMATH 351"
            ]
        ]
    },
    {
        "course": "PMATH 351",
        "requirements": []
    },
    {
        "course": "PMATH 352",
        "requirements": [
            [
                "MATH 247",
                "PMATH 333",
                "PMATH 351"
            ]
        ]
    },
    {
        "course": "PMATH 450",
        "requirements": [
            "PMATH 351"
        ]
    },
    {
        "course": "PMATH 432",
        "requirements": [
            "PMATH 347"
        ]
    },
    {
        "course": "PMATH 440",
        "requirements": [
            "PMATH 352"
        ]
    },
    {
        "course": "PMATH 441",
        "requirements": [
            "PMATH 348"
        ]
    },
    {
        "course": "PMATH 467",
        "requirements": [
            "PMATH 347",
            "PMATH 351"
        ]
    },
    {
        "course": "PMATH 370",
        "requirements": [
            [
                "MATH 118",
                "MATH 119",
                "MATH 128",
                "MATH 138",
                "MATH 148"
            ],
            [
                "MATH 114",
                "MATH 115",
                "MATH 136",
                "MATH 146",
                "MATH 225"
            ]
        ]
    },
    {
        "course": "PMATH 464",
        "requirements": [
            "PMATH 348"
        ]
    },
    {
        "course": "PMATH 433",
        "requirements": [
            "PMATH 432"
        ]
    },
    {
        "course": "PMATH 347",
        "requirements": [
            [
                "MATH 235",
                "MATH 245"
            ]
        ]
    },
    {
        "course": "PMATH 348",
        "requirements": [
            "PMATH 347"
        ]
    },
    {
        "course": "PMATH 445",
        "requirements": [
            "PMATH 347"
        ]
    },
    {
        "course": "PMATH 446",
        "requirements": [
            "PMATH 348"
        ]
    },
    {
        "course": "PMATH 333",
        "requirements": [
            [
                "MATH 235",
                "MATH 245"
            ],
            "MATH 237",
            [
                "MATH 128",
                "MATH 138",
                "MATH 148"
            ]
        ]
    },
    {
        "course": "PMATH 320",
        "requirements": [
            [
                "MATH 106",
                "MATH 114",
                "MATH 115",
                "MATH 136",
                "MATH 146",
                "MATH 215",
                "NE 112"
            ],
            [
                "MATH 104",
                "MATH 109",
                "MATH 116",
                "MATH 117",
                "MATH 124",
                "MATH 127",
                "MATH 137",
                "MATH 147"
            ]
        ]
    },
    {
        "course": "PMATH 321",
        "requirements": [
            [
                "MATH 106",
                "MATH 114",
                "MATH 115",
                "MATH 136",
                "MATH 146",
                "MATH 215",
                "NE 112"
            ],
            [
                "MATH 104",
                "MATH 109",
                "MATH 116",
                "MATH 117",
                "MATH 124",
                "MATH 127",
                "MATH 137",
                "MATH 147"
            ]
        ]
    },
    {
        "course": "PMATH 367",
        "requirements": [
            [
                "PMATH 336",
                "PMATH 347"
            ],
            "PMATH 351"
        ]
    },
    {
        "course": "PMATH 434",
        "requirements": [
            "PMATH 432"
        ]
    }
];
