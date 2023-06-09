import { _IPages } from "./interfaces"

export const pageData: _IPages = {
  1: {
    image: true,
    choices: [
      {
        goto: 17,
      }, {
        goto: 35,
      }, {
        goto: 61,
      }, {
        goto: 80,
        ability: "acrobat"
      }
    ]
  },
  2: {
    choices: [
      {
        goto: 399
      }
    ]
  },
  3: {
    sideEffects: {
      attributes: {
        hp: -3,
      },
    },
    choices: [
      {
        goto: 372
      }
    ]
  },
  4: {
    choices: [
      {
        ability: "poisonArrows",
        goto: 419
      },
      {
        goto: 12
      }
    ]
  },
  5: {
    sideEffects: {
      attributes: {
        hp: -2,
      },
    },
    choices: [
      {
        goto: 14
      }
    ]
  },
  6: {
    choices: [
      {
        goto: 16,
      }, {
        goto: 408,
      }
    ]
  },
  7: {
    choices: [
      {
        ability: "climb",
        goto: 392
      }, {
        goto: 402
      }
    ]
  },
  8: {
    opponent: "olvar",
    choices: [
      {
        goto: 800
      }
    ]
  },
  800: {
    opponent: "olvar",
    choices: [
      {
        goto: 377
      }, {
        goto: 302
      }, {
        goto: 318
      }
    ]
  },
  9: {},
  10: {
    sideEffects: {
      items: {
        herbs: 1
      },
    },
    choices: [
      {
        goto: 70,
      }
    ]
  },
  11: {
    choices: [
      {
        goto: 3980
      }
    ]
  },
  12: {
    sideEffects: {
      items: {
        opalring: -1
      }
    },
    choices: [
      {
        ability: "escapeArtist",
        goto: 21
      },
      {
        goto: 37
      }
    ]
  },
  13: {
    opponent: "cobraman",
    choices: [
      {
        goto: 42,
      }, {
        goto: 25,
      }
    ]
  },
  14: {
    specialCondition: {
      type: "fate",
    },
    choices: [
      {
        goto: 417,
      }, {
        goto: 404,
      }
    ]
  },
  15: {
    choices: [
      {
        goto: 145,
      }
    ]
  },
  16: {
    choices: [
      {
        goto: 75,
        ability: "climb"
      }, {
        goto: 86,
      }
    ]
  },
  17: {
    opponent: "gorobei",
    choices: [
      {
        goto: 35
      }, {
        goto: 61,
      }, {
        goto: 17,
      }
    ]
  },
  18: {
    choices: [
      {
        goto: 174,
      }, {
        goto: 2,
      }
    ]
  },
  19: {
    choices: [
      {
        ability: "escapeArtist",
        goto: 126,
      }, {
        goto: 115,
      }
    ]
  },
  20: {
    choices: [
      {
        goto: 10
      }
    ]
  },
  21: {
    choices: [
      {
        goto: 275,
      }
    ]
  },
  22: {
    choices: [
      {
        goto: 31,
      }, {
        goto: 15
      }
    ]
  },
  23: {
    opponent: "olvarAndRuneWeaver",
    choices: [
      {
        goto: 92,
      }, {
        goto: 39,
      }, {
        goto: 23,
      }
    ]
  },
  24: {
    opponent: "yaemon",
    sideEffects: {
      attributes: {
        hp: -10
      }
    },
    choices: [
      {
        goto: 155,
      },{
        goto: 68,
      }
    ]
  },
  25: {
    opponent: "cobraman",
    choices: [
      {
        goto: 42,
      }, {
        goto: 13,
      }, {
        goto: 25,
      }
    ]
  },
  26: {
    image: true,
    sideEffects: {
      attributes: {
        hp: 10,
      },
      items: {
        gold: 10
      },
    },
    choices: [
      {
        goto: 6,
      }, {
        goto: 208,
      }
    ]
  },
  27: {
    sideEffects: {
      modifiers: {
        fate: -1
      },
    },
    choices: [
      {
        goto: 6,
      }
    ]
  },
  28: {},
  29: {
    choices: [
      {
        goto: 400,
      },{
        goto: 9,
      }
    ]
  },
  30: {
    sideEffects: {
      attributes: {
        hp: -4
      }
    },
    choices: [
      {
        goto: 14,        
      },{
        goto: 5,
        ability: "playDead"
      }
    ]
  },
  31: {},
  32: {
    choices: [
      {
        goto: 10,
      }, {
        goto: 304,
      }
    ]
  },
  33: {
    specialCondition: {
      type: "fate",
    },
    choices: [
      {
        goto: 382,
      }, {
        goto: 64,
      }
    ]
  },
  34: {
    choices: [
      {
        goto: 26
      }
    ]
  },
  35: {
    opponent: "gorobei",
    choices: [
      {
        goto: 17
      }, {
        goto: 61
      }, {
        goto: 35
      }
    ]
  },
  36: {
    image: true,
    choices: [
      {
        goto: 50,
      }, {
        goto: 27,
      }
    ]
  },
  37: {},
  38: {
    specialCondition: {
      type: "attack",
      modifier: "punch",
      attack: "2T6",
      defense: 4,
      opponent: "guard",
    },
    choices: [
      {
        goto: 18,
      }, {
        goto: 28,
      }
    ]
  },
  39: {
    opponent: "olvarAndRuneWeaver",
    choices: [
      {
        goto: 92,
      },{
        goto: 23,
      }
    ]
  },
  40: {
    choices: [
      {
        ability: "poisonArrows",
        goto: 69,
      },{
        goto: 89,
      }
    ]
  },
  41: {
    choices: [
      {
        goto: 14,
      }, {
        goto: 30
      }
    ]
  },
  42: {
    opponent: "cobraman",
    choices: [
        {
            goto: 25,
        },{
            goto: 13,
        },{
            goto: 42,
        }
    ]
  },
  43: {
    choices: [
      {
        goto: 10,
      }
    ]
  },
  44: {
    sideEffects: {
      items: {
        opalring: -1
      }
    },
    choices: [
      {
        ability: "escapeArtist",
        goto: 21,
      },
      {
        goto: 37,
      }
    ]
  },
  45: {
    choices: [
      {
        goto: 19,
      }
    ]
  },
  46: {
    choices: [
      {
        goto: 6,
      }, {
        goto: 65,
      }
    ]
  },
  47: {
    choices: [
      {
        goto: 78,
      }, {
        goto: 313,
      }, {
        goto: 219,
      }, {
        goto: 59,
      }
    ]
  },
  48: {
    choices: [
      {
        goto: 112,
      }
    ]
  },
  49: {
    choices: [
      {
        goto: 400,
      },{
        goto: 9
      }
    ]
  },
  50: {
    sideEffects: {
      attributes: {
        hp: -2,
      },
    },
    choices: [
      {
        goto: 65,
      }
    ]
  },
  51: {
    specialCondition: {
      type: "attack",
      modifier: "shuriken",
      attack: "2T6",
      defense: 6,
      opponent: "yaemon",
    },
    sideEffects: {
      items: {
        shuriken: -3
      }
    },
    choices: [
      {
        goto: 378,
      }, {
        goto: 40,
      }
    ]
  },
  52: {
    choices: [
      {
        goto: 74,
      }
    ]
  },
  53: {
    choices: [
      {
        goto: 10,
      }
    ]
  },
  54: {
    opponent: "yaemon",
    sideEffects: {
      attributes: {
        hp: -8
      }
    },
    choices: [
      {
        ability: "acrobat",
        goto: 181,
      },{
        goto: 540,
      }
    ]
  },
  540: {
    opponent: "yaemon",
    specialCondition: {
      type: "block",
      attack: "2T6",
      defense: 7,
      opponent: "yaemon",
    },
    choices: [
      {
        goto: 378,
      }, {
        goto: 40,
      }
    ]
  },
  55: {
    sideEffects: {
      items: {
        amulet: 1
      }
    },
    choices: [
      {
        goto: 283,  
      },
      {
        goto: 275,  
      }
    ]
  },
  56: {
    choices: [
      {
        goto: 6,
      }
    ]
  },
  57: {
    specialCondition: {
      type: "fate",
    },
    choices: [
      {
        goto: 3,
      }, {
        goto: 64,
      }
    ]
  },
  58: {
    choices: [
      {
        goto: 26,
      }
    ]
  },
  59: {
    choices: [
      {
        goto: 41,
      },
      {
        goto: 30,
      }
    ]
  },
  60: {},
  61: {
    autoEndBattle: true,
    choices: [
      {
        goto: 95
      }
    ]
  },
  62: {
    choices: [
      {
        goto: 31,
      },
      {
        goto: 15,
      }
    ]
  },
  63: {
    opponent: "priests",
    successfulThrowChoices: [
      {
        goto: 630
      }
    ],
    choices: [
      {
        goto: 82,
      },{
        goto: 71,
      }
    ]
  },
  630: {
    opponent: "priests",
    choices: [
      {
        goto: 82,
      },{
        goto: 71,
      }
    ]
  },
  64: {},
  65: {
    choices: [
      {
        goto: 212
      }, {
        goto: 235
      }
    ]
  },
  66: {
    sideEffects: {
      modifiers: {
        kick: 1
      },
      abilities: {
        kwonsFlail: true
      }
    },
    choices: [
      {
        goto: 20
      }, {
        goto: 32
      }, {
        goto: 43
      }, {
        goto: 53
      }
    ]
  },
  67: {
    opponent: "piratecaptain",
    choices: [
      {
        goto: 87
      }, {
        goto: 77
      }, {
        goto: 67
      }
    ]
  },
  68: {
    choices: [
      {
        goto: 367,
      },
      {
        goto: 319
      }
    ]
  },
  69: {
    choices: [
      {
        ability: "acrobat",
        goto: 350,
      },{
        goto: 690,
      }
    ]
  },
  690: {
    specialCondition: {
      type: "block",
      attack: "2T6",
      defense: 7,
      opponent: "yaemon",
    },
    choices: [
      {
        goto: 411,
      }, {
        goto: 24,
      }
    ]
  },
  70: {
    sideEffects: {
      attributes: {
        hp: 4,
      },
    },
    choices: [
      {
        goto: 271
      }, {
        goto: 284
      }
    ]
  },
  71: {
    opponent: "priests",
    choices: [
      {
        goto: 63,
      },
      {
        goto: 82,
      },
      {
        goto: 71,
      }
    ]
  },
  72: {
    specialCondition: {
      type: "shuriken",
      attack: "2T6",
      defense: 7,
      opponent: "manse",
    },
    sideEffects: {
      items: {
        shuriken: -1
      }
    },
    choices: [
      {
        goto: 49,
      }, {
        goto: 60,
      }
    ]
  },
  73: {
    choices: [
      {
        ability: "climb",
        goto: 57
      }, {
        ability: "acrobat",
        goto: 33
      }, {
        goto: 64
      }
    ]
  },
  74: {
    choices: [
      {
        ability: "escapeArtist",
        goto: 277,
      },
      {
        goto: 38,
      }
    ]
  },
  75: {
    specialCondition: {
      type: "fate",
    },
    choices: [
      {
        goto: 94,
      }, {
        goto: 125,
      }
    ]
  },
  76: {
    sideEffects: {
      attributes: {
        hp: 3,
      },
      items: {
        magicShuriken: 1,
        shuriken: -1
      },
    },
    choices: [
      {
        goto: 405
      }, {
        goto: 416
      }
    ]
  },
  77: {
    opponent: "piratecaptain",
    choices: [
      {
        goto: 87
      }, {
        goto: 67
      }, {
        goto: 77
      }
    ]
  },
  78: {
    choices: [
      {
        ability: "acrobat",
        goto: 288,
      },
      {
        goto: 780,
      }
    ]
  },
  780: {
    specialCondition: {
      type: "shuriken",
      attack: "2T6",
      defense: 7,
      opponent: "runeweaver",
    },
    choices: [
      {
        goto: 292,
      }, {
        goto: 365,
      }
    ]
  },
  79: {},
  80: {
    sideEffects: {
      temporary: {
        attack: 2,
      },
    },
    choices: [
      {
        goto: 17
      }, {
        goto: 35
      }, {
        goto: 61
      }
    ]
  },
  81: {},
  82: {
    opponent: "priests",
    choices: [
      {
        goto: 71,
      },{
        goto: 63,
      },{
        goto: 82,
      }
    ]
  },
  83: {
    image: true,
    sideEffects: {
      attributes: {
        hp: -4
      }
    },
    choices: [
      {
        goto: 66
      }
    ]
  },
  84: {
    sideEffects: {
      attributes: {
        hp: -6
      }
    },
    choices: [
      {
        ability: "acrobat",
        goto: 350,
      },{
        goto: 690,
      }
    ]
  },
  85: {
    sideEffects: {
      attributes: {
        hp: -8
      }
    },
    choices: [
      {
        goto: 377,
      },{
        goto: 302,
      },{
        goto: 318,
      },{
        ability: "poisonArrows",
        goto: 8,
      },
    ]
  },
  86: {
    choices: [
      {
        goto: 116
      }, {
        goto: 105
      }
    ]
  },
  87: {
    opponent: "piratecaptain",
    choices: [
      {
        goto: 77
      }, {
        goto: 67
      }
    ]
  },
  88: {},
  89: {
    choices: [
      {
        goto: 266,
      },{
        goto: 390,
      },{
        goto: 401,
      },
    ]
  },
  90: {
    choices: [
      {
        goto: 413,
      }
    ]
  },
  
  91: {
    specialCondition: {
      type: "fate",
    },
    choices: [
      {
        goto: 74,
      },{
        goto: 108,
      }
    ]
  },
  92: {
    opponent: "olvarAndRuneWeaver",
    choices: [
      {
        goto: 23,
      },{
        goto: 39,
      },{
        goto: 92,
      }
    ]
  },
  93: {
    choices: [
      {
        goto: 260,
      }
    ]
  },
  94: {
    choices: [
      {
        goto: 65,
      }
    ]
  },
  95: {
    choices: [
      {
        goto: 191,
      }
    ]
  },
  96: {
    choices: [
      {
        goto: 63
      }, {
        goto: 82
      }, {
        goto: 71
      }
    ]
  },
  97: {
    choices: [
      {
        goto: 67
      }, {
        goto: 77
      }, {
        goto: 87
      }
    ]
  },
  98: {},
  99: {
    choices: [
      {
        ability: "poisonArrows",
        goto: 88,
      },
      {
        goto: 418,
      }
    ]
  },
  100: {},
  101: {
    image: true,
    choices: [
      {
        goto: 89
      },{
        ability: "poisonArrows",
        goto: 69
      },{
        item: "shuriken",
        amount: 3,
        goto: 51
      },
    ]
  },
  102: {
    choices: [
      {
        ability: "poisonArrows",
        goto: 90
      },{        
        goto: 413
      },{
        item: "shuriken",
        amount: 1,
        goto: 72
      },
    ]
  },
  103: {
    choices: [
      {
        goto: 4
      },
      {
        goto: 123
      },
    ]
  },
  104: {
    choices: [
      {
        goto: 112
      },
    ]
  },
  105: {
    sideEffects: {
      items: {
        shuriken: -1
      }
    },
    choices: [
      {
        goto: 125
      }
    ]
  },
  106: {
    opponent: "olvarAndRuneWeaver",
    choices: [
      {
        goto: 1060
      }
    ]
  },
  1060: {
    opponent: "olvarAndRuneWeaver",
    choices: [
      {
        goto: 92
      }, {
        goto: 23
      }, {
        goto: 39
      }
    ]
  },
  107: {
    choices: [
      {
        goto: 67
      }, {
        goto: 77
      }, {
        goto: 87
      }
    ]
  },
  108: {},
  109: {
    opponent: "efreti",
    choices: [
      {
        goto: 131
      },{
        goto: 119
      },
    ]
  },
  110: {
    choices: [
      {
        goto: 139,
      }, {
        goto: 151,
      }, {
        goto: 177,
      }, {
        goto: 128,
      }
    ]
  },
  111: {
    choices: [
      {
        goto: 372,
      }
    ]
  },
  112: {
    image: true,
    choices: [
      {
        goto: 99,
      }
    ]
  },
  113: {
    choices: [
      {
        goto: 122,
      }, {
        goto: 70,
      }
    ]
  },
  114: {
    sideEffects: {
      modifiers: {
        "fate": -2
      },
    },
    choices: [
      {
        goto: 185,
      }
    ]
  },
  115: {},
  116: {
    choices: [
      {
        goto: 65,
      }
    ]
  },
  117: {
    opponent: "olvar",
    sideEffects: {
      items: {
        flashPowder: -1
      }
    },
    choices: [
      {
        goto: 302
      },{
        goto: 377
      },{
        goto: 318
      },{
        ability: "poisonArrows",
        goto: 8
      },
    ]
  },
  118: {
    choices: [
      { goto: 131 },{ goto: 109 },{ goto: 119 },
    ]
  },
  119: {
    opponent: "efreti",
    choices: [
      {
        goto: 131
      },
      {
        goto: 109
      },
      {
        goto: 119
      },
    ]
  },
  120: {
    choices: [
      { goto: 11 },
      { goto: 355 },
      { goto: 415, item: "flashPowder", amount: 1 }]
  },
  121: {
    choices: [
      {
        goto: 73,
      }, {
        goto: 134,
      }
    ]
  },
  122: {},
  123: {
    choices: [
      {
        goto: 283
      },{
        goto: 275
      },
    ]
  },
  124: {
    choices: [
      {
        goto: 48
      },{
        goto: 22
      },{
        goto: 62
      },
    ]
  },
  125: {
    choices: [
      {
        ability: "deflectArrows",
        goto: 201,
      }, {
        goto: 136,
      }
    ]
  },
  126: {
    choices: [
      {
        ability: "lockPicker",
        goto: 153,
      }, {
        goto: 137,
      }
    ]
  },
  127: {
    opponent: "olvarAndRuneWeaver",
    choices: [
      {
        goto: 92
      },{
        goto: 23
      },{
        goto: 39
      },{
        ability: "poisonArrows",
        goto: 106
      },
    ]
  },
  128: {
    choices: [
      {
        goto: 191,
      }
    ]
  },
 
  129: {
    sideEffects: {
      items: {
        opalring: -1
      }
    },
    choices: [
      {
        goto: 21,
        ability: "escapeArtist"        
      },{
        goto: 37,
      }
    ]
  },
  130: {
    image: true,
    choices: [
      {
        goto: 102,
        item: "amulet"
      },{
        goto: 140,
      }
    ]
  },
  131: {
    opponent: "efreti",
    choices: [
      {
        goto: 119
      },
      {
        goto: 109
      },
      {
        goto: 131
      },
    ]
  },
  132: {
    specialCondition: {
      type: "fate",
    },
    choices: [
      {
        goto: 120,
      }, {
        goto: 108,
      }
    ]
  },
  133: {
    choices: [
      {
        goto: 173,
      }, {
        goto: 113,
      }
    ]
  },
  134: {
    choices: [
      {
        goto: 42,
      }, {
        goto: 25,
      }, {
        goto: 13,
      }
    ]
  },
  135: {
    choices: [
      {
        goto: 44,
      }, {
        goto: 123,
      }, {
        goto: 4,
      }
    ]
  },
  136: {
    sideEffects: {
      attributes: {
        hp: -4
      },
    },
    choices: [
      {
        ability: "acrobat",
        goto: 144,
      }, {
        goto: 285,
      }
    ]
  },
  137: {
    sideEffects: {
      attributes: {
        innerForce: -1
      },
      items: {
        shuriken: -1,
      }
    },
    specialCondition: {
      type: "attack",
      modifier: "shuriken",
      attack: "2T6",
      defense: 5,
      opponent: "piratecaptain",
    },
    choices: [
      {
        goto: 164,
      }, {
        goto: 175,
      }
    ]
  },
  138: {
    choices: [
      {
        goto: 166
      },
    ]
  },
  139: {
    choices: [
      {
        goto: 191,
      }
    ]
  },
  140: {},
  141: {
    image: true,
    choices: [
      {
        goto: 305
      },
    ]
  },
  142: {
    opponent: "olvarAndRuneWeaver",
    sideEffects: {
      attributes: {
        hp: -8
      }
    },
    choices: [
      {
        goto: 92
      },
      {
        goto: 23
      },
      {
        goto: 39
      },
      {
        ability: "poisonArrows",
        goto: 106
      },
    ]
  },
  143: {},
  144: {
    choices: [
      {
        goto: 254,
      }
    ]
  },
  145: {
    choices: [
      {
        goto: 79
      },{
        goto: 7,
      }
    ]
  },
  146: {
    sideEffects: {
      attributes: {
        hp: -6
      }
    },
    opponent: "snowGiant",
    choices: [
      {
        goto: 1840,
      }, {
        goto: 202,
      }, {
        goto: 160,
      }
    ]
  },
  147: {
    choices: [
      {
        goto: 120
      },
    ]
  },
  148: {
    choices: [
      {
        goto: 361
      },
    ]
  },
  149: {
    choices: [
      {
        goto: 131
      },{
        goto: 109
      },{
        goto: 119
      },
    ]
  },
  150: {
    opponent: "yaemon",
    sideEffects: {
      attributes: {
        hp: -11
      }
    },
    choices: [
      {
        goto: 181
      },{
        goto: 1500
      }
    ]
  },
  1500: {
    opponent: "yaemon",
    specialCondition: {
      type: "block",
      attack: "2T6",
      defense: 6,
      opponent: "yaemon",
    },
    choices: [
      {
        goto: 18,
      }, {
        goto: 308,
      }
    ]
  },
  151: {
    choices: [
      {
        goto: 191,
      }
    ]
  },
  152: {
    opponent: "olvarAndRuneWeaver",
    sideEffects: {
      attributes: {
        hp: -8,
      },
    },
    choices: [
      {
        goto: 92,
      },{
        goto: 23,
      },{
        goto: 39,
      },{
        ability: "poisonArrows",
        goto: 106,
      },
    ]
  },
  153: {
    choices: [
      {
        goto: 26,
      }
    ]
  },
  154: {
    choices: [
      {
        goto: 361,
      }, {
        goto: 141,
      }
    ]
  },
  155: {
    choices: [
      {
        goto: 340,
      },{
        goto: 330,
      },{
        goto: 410,
      }
    ]
  },
  156: {
    choices: [
      {
        item: "fireLizardEssence",
        goto: 147,
      },{
        goto: 132,
      }
    ]
  },
  157: {
    choices: [
      {
        ability: "playDead",
        goto: 376,
      },{
        goto: 103,
      }
    ]
  },
  158: {
    sideEffects: {
      conditions: {
        hasNotKilledHonoric: false
      }
    },
    choices: [
      {
        goto: 305,
      }
    ]
  },
  159: {},
  160: {
    opponent: "snowGiant",
    choices: [
      {
        goto: 1840,
      }, {
        goto: 202,
      }, {
        goto: 160,
      }
    ]
  },
  161: {
    sideEffects: {
      items: {
        magicShuriken: -1
      }
    },
    choices: [
      {
        goto: 81,
      },{
        goto: 70,
      }
    ]
  },
  162: {
    choices: [
      {
        goto: 104,
      },{
        goto: 354,
      },{
        goto: 124,
      }
    ]
  },
  163: {
    choices: [
      {
        goto: 96,
      },{
        goto: 103,
      }
    ]
  },
  164: {
    choices: [
      {
        goto: 26,
      }
    ]
  },
  165: {
    opponent: "olvarAndRuneWeaver",
    choices: [
      {
        goto: 92,
      },{
        goto: 23,
      },{
        goto: 39,
      },{
        goto: 106,
      },
    ]
  },
  166: {
    choices: [
      {
        ability: "climb",
        goto: 392,
      },{
        goto: 156,
      },{
        goto: 402,
      }
    ]
  },
  167: {
    choices: [
      {
        goto: 266,
      },{
        goto: 390,
      },{
        goto: 401,
      }
    ]
  },
  168: {
    opponent: "firstOfTwoMonks",
    choices: [
      {
        goto: 322,
      },{
        goto: 335,
      },{
        goto: 312,
      }
    ]
  },
  169: {
    choices: [
      {
        goto: 221,
      }
    ]
  },
  170: {
    opponent: "efreti",
    choices: [
      {
        goto: 149,
      }
    ]
  },
  171: {
    specialCondition: {
      type: "block",
      attack: "2T6",
      defense: 8,
      opponent: "priests",
    },
    choices: [
      {
        goto: 163,
      },{
        goto: 157,
      }
    ]
  },
  172: {
    image: true,
    choices: [
      {
        goto: 98,
      }, {
        goto: 121,
      }, {
        goto: 134,
      }
    ]
  },
  173: {
    specialCondition: {
      type: "fate",
    },
    choices: [
      {
        goto: 83,
      },{
        goto: 143,
      }
    ]
  },
  174: {
    image: true,
    choices: [
      {
        goto: 331,
      },{
        goto: 269,
      },{
        goto: 247,
      },{
        ability: "poisonArrows",
        goto: 230,
      }
    ]
  },
  175: {},
  176: {
    image: true,
    choices: [
      {
        goto: 256,
      }, {
        goto: 248,
      }, {
        goto: 237,
      }
    ]
  },
  177: {
    sideEffects: {
      items: {
        opalring: 1
      },
    },
    choices: [
      {
        goto: 191,
      }
    ]
  },
  178: {
    choices: [
      {
        goto: 320,
      },{
        goto: 148,
      },{
        goto: 130,
      }
    ]
  },
  179: {
    choices: [
      {
        goto: 145,
      },{
        goto: 162,
      }
    ]
  },
  180: {},
  181: {
    choices: [
      {
        goto: 266,
      },{
        goto: 390,
      },{
        goto: 401,
      }
    ]
  },
  182: {
    choices: [
      {
        goto: 135,
      }
    ]
  },
  183: {
    choices: [
      {
        goto: 297,
      }, {
        goto: 6,
      }
    ]
  },
  184: {
    opponent: "snowGiant",
    choices: [
      {
        goto: 202,
      }, {
        goto: 160,
      }, {
        goto: 1840,
      }
    ]
  },
  // Special fate roll, divided into two stories (184 and this)
  1840: {
    specialCondition: {
      type: "fate",
    },
    choices: [
      {
        goto: 184,
      }, {
        goto: 146,
      }
    ]
  },
  185: {
    choices: [
      {
        goto: 168,
      },{
        goto: 299,
      }
    ]
  },
  186: {
    choices: [
      {
        goto: 176,
      },
      {
        goto: 225,
      }
    ]
  },
  187: {
    opponent: "olvarAndRuneWeaver",
    specialCondition: {
      type: "block",
      attack: "2T6",
      defense: 6,
      opponent: "olvarAndRuneWeaver",
    },
    choices: [
      {
        goto: 127,
      }, {
        goto: 142,
      }
    ]
  },
  188: {
    choices: [
      {
        goto: 399,
      }
    ]
  },
  189: {
    choices: [
      {
        goto: 320,
      },{
        goto: 148,
      },{
        goto: 130,
      }
    ]
  },
  190: {
    choices: [
      {
        goto: 179,
      }
    ]
  },
  191: {
    sideEffects: {
      attributes: {
        hp: 20
      },
    },
    choices: [
      {
        goto: 232,
      }
    ]
  },
  192: {
    choices: [
      {
        goto: 172,
      }
    ]
  },
  193: {
    choices: [
      {
        goto: 83,
      }
    ]
  },
  194: {
    choices: [
      {
        ability: "immunity",
        goto: 214,
      }, {
        goto: 206,
      }
    ]
  },
  195: {
    specialCondition: {
      type: "attack",
      modifier: "punch",
      attack: "2T6",
      defense: 5,
      opponent: "priests",
    },
    choices: [
      {
        goto: 387,
      },{
        goto: 407,
      }      
    ]
  },
  196: {
    choices: [
      {
        goto: 183,
      }, {
        goto: 46,
      }, {
        goto: 56,
      }, {
        goto: 36,
      }
    ]
  },
  197: {
    choices: [
      {
        goto: 81,
      },{
        goto: 70,
      }
    ]
  },
  198: {},
  199: {},
  200: {
    choices: [
      {
        goto: 100,
      }, {
        goto: 76,
      }
    ]
  },
  201: {
    choices: [
      {
        goto: 65,
      }
    ]
  },  
  202: {
    opponent: "snowGiant",
    choices: [
      {
        goto: 1840
      }, {
        goto: 160
      }
    ]
  },
  203: {
    choices: [
      {
        goto: 81,
      },{
        goto: 70,
      },
    ]
  },
  204: {
    specialCondition: {
      type: "block",
      attack: "2T6",
      defense: 5,
      opponent: "olvar",
    },
    choices: [
      {
        goto: 406,
      }, {
        goto: 85,
      }
    ]
  },
  205: {},
  206: {
    sideEffects: {
      items: {
        opalring: -1,
        gold: -5 // Todo, ska vara 5 kvar, fixa i slutet
      },
    },
    choices: [
      {
        goto: 65,
      }
    ]
  },
  207: {
    choices: [
      {
        ability: "deflectArrows",
        goto: 188,
      },{
        goto: 198,
      },
    ]
  },
  208: {
    choices: [
      {
        goto: 196
      }, {
        goto: 6
      }, {
        goto: 36
      }
    ]
  },
  209: {},
  210: {
    choices: [
      {
        ability: "climb",
        goto: 193,
      }, {
        goto: 133,
      }
    ]
  },
  211: {},
  212: {
    sideEffects: {
      attributes: {
        hp: 2
      },
    },
    image: true,
    choices: [
      {
        goto: 357,
      }, {
        goto: 315,
      }
    ]
  },
  213: {
    image: true,
    choices: [
      {
        goto: 149,
      },{
        goto: 180,
      },{
        item: "magicShuriken",
        goto: 161,
      },{
        item: "shuriken",
        goto: 170,
      },
    ]
  },
  214: {
    sideEffects: {
      items: {
        gold: -2
      },
      attributes: {
        hp: 1
      },
    },
    choices: [
      {
        goto: 65
      }
    ]
  },
  215: {
    choices: [
      {
        goto: 399,
      }
    ]
  },  
  216: {
    specialCondition: {
      type: "block",
      attack: "2T6",
      defense: 6,
      opponent: "olvar",
    },
    choices: [
      {
        goto: 406,
      }, {
        goto: 85,
      }
    ]
  },
  217: {
    choices: [
      {
        goto: 397,
      }
    ]
  },  
  218: {
    choices: [
      {
        goto: 331,
      },{
        ability: "poisonArrows",
        goto: 230,
      },{
        goto: 247,
      },{
        goto: 2180,
      },
    ]
  },  
  2180: {
    specialCondition: {
      type: "attack",
      modifier: "shuriken",
      attack: "2T6",
      defense: 6,
      opponent: "captain",
    },
    choices: [
      {
        goto: 189,
      },{
        goto: 199,
      }
    ]
  },
  219: {
    choices: [
      {
        goto: 205,
      }, {
        goto: 190,
      }
    ]
  },
  220: {
    choices: [
      {
        goto: 172
      }
    ]
  },
  221: {
    sideEffects: {
      attributes: {
        hp: 4,
        innerForce: 3
      },
    },
    choices: [
      {
        goto: 260,
      }, {
        goto: 81,
      }, {
        goto: 210,
      }
    ]
  },
  222: {
    choices: [
      {
        goto: 289,
      }
    ]
  },  
  223: {
    sideEffects: {
      attributes: {
        hp: 2,
      },
    },
    image: true,
    choices: [
      {
        ability: "acrobat",
        goto: 195,
      },{
        goto: 171,
      },{
        goto: 182,
      }
    ]
  },
  224: {
    choices: [
      {
        goto: 270,
      }
    ]
  },  
  225: {
    sideEffects: {
      attributes: {
        hp: 1
      },
      items: {
        gold: -2
      }
    },
    choices: [
      {
        goto: 254,
      }
    ]
  },
  226: {
    specialCondition: {
      type: "block",
      attack: "2T6",
      defense: 6,
      opponent: "olvar",
    },
    choices: [
      {
        goto: 406,
      }, {
        goto: 85,
      }
    ]
  },
  227: {
    choices: [
      {
        goto: 283,
      }, {
        goto: 275,
      }
    ]
  },
  228: {
    opponent: "yaemon",
    choices: [
      {
        goto: 245,
      }, {
        goto: 367,
      }, {
        goto: 266,
      }, {
        goto: 390,
      }
    ]
  },
  229: {
    sideEffects: {
      conditions: {
        hasNotKilledHonoric: false
      }
    },
    choices: [
      {
        goto: 154,
      }, {
        goto: 130,
      }, {
        goto: 217,
      }, 
    ]
  },  
  230: {
    choices: [
      {
        goto: 320,
      },{
        goto: 148,
      },{
        goto: 130,
      },
    ]
  },  
  231: {
    choices: [
      {
        ability: "acrobat",
        goto: 192,
      }, {
        goto: 211,
      }
    ]
  },
  232: {
    image: true,
    choices: [
      {
        goto: 257,
      }, {
        goto: 280,
      }
    ]
  },
  233: {
    sideEffects: {
      attributes: {
        hp: 3
      }
    },
    choices: [
      {
        goto: 219,
      }, {
        goto: 313,
      }, {
        goto: 59,
      }
    ]
  },
  234: {
    choices: [
      {
        goto: 200,
      }, {
        goto: 185,
      }
    ]
  },
  235: {
    sideEffects: {
      attributes: {
        hp: 2
      },
    },
    choices: [
      {
        goto: 341,
      }, {
        goto: 212,
      }
    ]
  },
  236: {
    opponent: "secondOfTwoMonks",
    choices: [
      {
        goto: 264,
      },{
        goto: 244,
      }
    ]
  },  
  237: {
    opponent: "soldiers",
    choices: [
      {
        goto: 256
      }, {
        goto: 248
      }
    ]
  },
  238: {
    opponent: "torturer",
    choices: [
      {
        goto: 249,
      },{
        goto: 259,
      },{
        goto: 238,
      }
    ]
  },  
  239: {
    specialCondition: {
      type: "block",
      attack: "2T6",
      defense: 5,
      opponent: "olvar",
    },
    choices: [
      {
        goto: 165,
      }, {
        goto: 152,
      }
    ]
  },
  240: {
    opponent: "yaemon",
    choices: [
      {
        goto: 54
      }, {
        goto: 306
      }, {
        goto: 84
      }, {
        goto: 266
      }, {
        goto: 401
      }
    ]
  },
  241: {
    opponent: "runeweaver",
    choices: [
      {
        goto: 263
      }, {
        goto: 250
      }
    ]
  },
  242: {
    choices: [
      {
        goto: 221
      }
    ]
  },
  243: {
    choices: [
      {
        goto: 231
      }, {
        goto: 220
      }
    ]
  },
  244: {
    opponent: "secondOfTwoMonks",
    choices: [
      {
        goto: 264,
      },{
        goto: 236,
      },{
        goto: 244,
      }
    ]
  },  
  245: {
    sideEffects: {
      attributes: {
        hp: -10
      }
    },
    opponent: "yaemon",
    choices: [
      {
        goto: 266
      }, {
        goto: 390
      }, {
        goto: 367
      }
    ]
  },
  246: {
    sideEffects: {
      attributes: {
        hp: -4
      }
    },
    choices: [
      {
        condition: "hasNotKilledHonoric",
        goto: 339,
      },{
        goto: 370,
      }
    ]
  },  
  247: {
    specialCondition: {
      type: "attack",
      attack: "2T6",
      defense: 6,
      opponent: "captain",
    },
    choices: [
      {
        goto: 178,
      },{
        goto: 209,
      }
    ]
  },  
  248: {
    opponent: "soldiers",
    choices: [
      {
        goto: 237
      }, {
        goto: 256
      }, {
        goto: 248
      }
    ]
  },
  249: {
    opponent: "torturer",
    choices: [
      {
        goto: 249,
      },{
        goto: 259,
      },{
        goto: 238,
      }
    ]
  },  
  250: {
    opponent: "runeweaver",
    choices: [
      {
        goto: 263
      }, {
        goto: 241
      }, {
        goto: 250
      }
    ]
  },
  251: {
    choices: [
      {
        goto: 239
      }, {
        goto: 216
      }, {
        goto: 187
      }
    ]
  },
  252: {
    choices: [
      {
        goto: 202
      }, {
        goto: 160
      }, {
        goto: 1840,
      }
    ]
  },
  253: {
    choices: [
      {
        goto: 281
      }, {
        goto: 267
      }, {
        goto: 293,
      }
    ]
  },
  254: {
    choices: [
      {
        goto: 223,
      }, {
        goto: 235,
      }
    ]
  },
  255: {
    choices: [
      {
        goto: 260
      },
      {
        goto: 81
      }
    ]
  },
  256: {
    opponent: "soldiers",
    choices: [
      {
        goto: 237
      }, {
        goto: 248
      }, {
        goto: 256
      }
    ]
  },
  257: {
    opponent: "humanEater",
    sideEffects: {
      items: {
        shuriken: -1
      },
    },
    choices: [
      {
        ability: "deflectArrows",
        goto: 380,
      }, {
        goto: 396,
      }
    ]
  },
  258: {
    choices: [
      {
        goto: 409
      },{
        goto: 222
      },
    ]
  },
  259: {
    opponent: "torturer",
    choices: [
      {
        goto: 249,
      },{
        goto: 238,
      }
    ]
  },  
  260: {
    sideEffects: {
      attributes: {
        hp: 6,
      },
    },
    choices: [
      {
        goto: 234
      }, {
        goto: 114
      }
    ]
  },
  261: {
    image: true,
    choices: [
      {
        goto: 243
      }, {
        goto: 252
      }
    ]
  },
  262: {
    image: true,
    choices: [
      { goto: 226 }, 
      { goto: 204 }, 
      { goto: 117, item: "flashPowder", amount: 1 }
    ]
  },
  263: {
    opponent: "runeweaver",
    choices: [
      {
        goto: 250
      }, {
        goto: 241
      }, {
        goto: 263
      }
    ]
  },
  264: {
    opponent: "secondOfTwoMonks",
    choices: [
      {
        goto: 244
      }, {
        goto: 236
      }, {
        goto: 264
      }
    ]
  },
  265: {
    image: true,
    choices: [
      {
        goto: 229
      }, {
        goto: 274
      }
    ]
  },
  266: {
    choices: [
      {
        goto: 340
      }, {
        goto: 330
      }, {
        goto: 410
      }
    ]
  },
  267: {
    opponent: "goblin",
    choices: [
      {
        goto: 293
      }, {
        goto: 281
      }
    ]
  },
  268: {
    choices: [
      {
        goto: 254
      }
    ]
  },
  269: {
    specialCondition: {
      type: "roll",
      attack: "2T6",
      rolls: [[9,12],[5,8],[2,4]]
    },
    choices: [
      {
        goto: 189,    
      },{
        goto: 218,
      },{
        goto: 199,
      },
    ]
  },
  270: {
    choices: [
      {
        ability: "lockPicker",
        goto: 215
      },{
        goto: 207
      },
    ]
  },
  271: {
    sideEffects: {
      attributes: {
        hp: -3
      }
    },
    choices: [
      {
        goto: 251
      }
    ]
  },
  272: {
    sideEffects: {
      items: {
        fireLizardEssence: 1
      }
    },
    choices: [
      {
        goto: 242
      }, {
        goto: 255
      }
    ]
  },
  273: {
    choices: [
      {
        goto: 323
      }, {
        goto: 303
      }
    ]
  },
  274: {},
  275: {
    choices: [
      {
        goto: 261
      }
    ]
  },
  276: {
    choices: [
      {
        goto: 250,
      },      {
        goto: 241,
      },      {
        goto: 263,
      },
    ]
  },
  277: {
    choices: [
      {
        goto: 174
      },{
        goto: 2
      },
    ]
  },
  278: {
    opponent: "yaemon",
    choices: [
      {
        goto: 84
      },{
        ability: "kwonsFlail",
        goto: 240
      },{
        goto: 266
      },{
        goto: 401
      },{
        goto: 306
      },
    ]
  },
  279: {
    choices: [
      {
        goto: 236
      },{
        goto: 244
      },{
        goto: 264
      },
    ]
  },
  280: {
    choices: [
      {
        goto: 332
      }, {
        goto: 310
      }, {
        goto: 345
      }
    ]
  },
  281: {
    opponent: "goblin",
    choices: [
      {
        goto: 293
      }, {
        goto: 267
      }, {
        goto: 281,
      }
    ]
  },
  282: {
    choices: [
      {
        goto: 270
      },
    ]
  },
  283: {
    choices: [
      {
        goto: 290,
      }, {
        goto: 169,
      }
    ]
  },
  284: {
    choices: [
      {
        goto: 262,
      }
    ]
  },
  285: {},
  286: {
    opponent: "monks",
    choices: [
      {
        goto: 353
      },{
        goto: 374
      },
    ]
  },
  287: {},
  288: {
    choices: [
      {
        goto: 276,
      }
    ]
  },
  289: {
    choices: [
      {
        item: "opalring",
        goto: 203
      },{
        goto: 213
      },
    ]
  },
  290: {
    choices: [
      {
        goto: 275,
      }
    ]
  },
  291: {
    sideEffects: {
      attributes: {
        hp: -2
      }
    },
    choices: [
      {
        goto: 249
      },{
        goto: 238
      },{
        goto: 259
      },
    ]
  },
  292: {
    choices: [
      {
        goto: 276
      },
    ]
  },
  293: {
    opponent: "goblin",
    choices: [
      {
        goto: 281
      }, {
        goto: 267
      }, {
        goto: 293,
      }
    ]
  },
  294: {
    sideEffects: {
      items: {
        gold: -2
      }
    },
    choices: [
      {
        goto: 337,
      }
    ]
  },
  295: {},
  296: {
    sideEffects: {
      items: {
        gold: -1
      }
    },
    choices: [
      {
        goto: 254
      },
    ]
  },
  297: {
    sideEffects: {
      items: {
        healingPotion: 1
      },
    },
    choices: [
      {
        goto: 65,
      }, {
        goto: 6,
      }
    ]
  },
  298: {
    choices: [
      {
        goto: 254
      }
    ]
  },
  299: {
    choices: [
      {
        goto: 289
      },
    ]
  },
  300: {
    sideEffects: {
      items: {
        gold: -2
      }
    },
    choices: [
      {
        goto: 179
      },
    ]
  },
  301: {
    sideEffects: {
      attributes: {
        hp: -8
      }
    },
    opponent: "yaemon",
    specialCondition: {
      type: "block",
      attack: "2T6",
      defense: 7,
      opponent: "yaemon",
    },
    choices: [
      {
        goto: 411,
      }, {
        goto: 24,
      }
    ]
  },
  302: {
    opponent: "olvar",
    choices: [
      {
        goto: 377
      }, {
        goto: 318
      }, {
        goto: 302,
      }
    ]
  },
  303: {},
  304: {
    sideEffects: {
      items: {
        herbs: 1
      },
      modifiers: {
        fate: 1
      }
    },
    choices: [
      {
        goto: 70
      }
    ]
  },
  305: {
    choices: [
      {
        goto: 101
      },
    ]
  },
  306: {
    opponent: "yaemon",
    choices: [
      {
        goto: 150
      }, {
        goto: 278
      }, {
        goto: 84
      }, {
        ability: "kwonsFlail",
        goto: 240
      }, {
        goto: 266
      }, {
        goto: 401
      }
    ]
  },
  307: {
    choices: [
      {
        goto: 194
      }, {
        goto: 186
      }
    ]
  },
  308: {
    opponent: "yaemon",
    choices: [
      {
        goto: 266
      }, {
        goto: 390
      }, {
        goto: 401,
      }
    ]
  },
  309: {
    choices: [
      {
        goto: 282
      },{
        goto: 291
      },
    ]
  },
  310: {
    opponent: "humanEater",
    choices: [
      {
        goto: 332
      }, {
        goto: 345
      }, {
        goto: 310,
      }
    ]
  },
  311: {},
  312: {
    opponent: "firstOfTwoMonks",
    choices: [
      {
        goto: 322
      },{
        goto: 335
      },
    ]
  },
  313: {},
  314: {
    choices: [
      {
        ability: "poisonArrows",
        goto: 329
      }, {
        goto: 334
      }
    ]
  },
  315: {
    specialCondition: {
      type: "attack",
      modifier: "kick",
      attack: "2T6",
      defense: 6,
      opponent: "cobraman",
    },
    choices: [
      {
        goto: 227,
      }, {
        goto: 3150,
      }
    ]
  },
  3150: {
    choices: [
      {
        ability: "immunity",
        goto: 31502
      }, {
        goto: 31501
      }
    ]
  },
  31501: {},
  31502: {
    choices: [
      {
        goto: 227
      }
    ]
  },  
  316: {
    opponent: "giant",
    choices: [
      {
        goto: 325
      }, {
        goto: 295
      }, {
        goto: 316,
      }
    ]
  },
  317: {},
  318: {
    opponent: "olvar",
    choices: [
      {
        goto: 302
      }, {
        goto: 377
      }
    ]
  },
  319: {
    opponent: "yaemon",
    choices: [
      {
        goto: 245
      }, {
        goto: 367
      }, {
        goto: 266
      }, {
        goto: 390
      }
    ]
  },
  320: {
    choices: [
      {
        goto: 274
      },{
        goto: 265
      },
    ]
  },
  321: {
    opponent: "olderGod",
    choices: [
      {
        goto: 333
      },{
        goto: 349
      },{
        goto: 321
      },
    ]
  },
  322: {
    opponent: "firstOfTwoMonks",
    choices: [
      {
        goto: 312
      },{
        goto: 335
      },{
        goto: 322
      },
    ]
  },
  323: {
    choices: [
      {
        ability: "climb",
        goto: 414
      }, {
        goto: 314
      }
    ]
  },
  324: {
    choices: [
      {
        goto: 289
      },
    ]
  },
  325: {
    opponent: "giant",
    choices: [
      {
        goto: 316
      }, {
        goto: 295
      }, {
        goto: 325,
      }
    ]
  },
  326: {
    specialCondition: {
      type: "attack",
      modifier: "punch",
      attack: "2T6",
      defense: 6,
      opponent: "magician",
    },
    choices: [
      {
        goto: 253,
      }, {
        goto: 311,
      }
    ]
  },
  327: {},
  328: {
    choices: [
      {
        goto: 158
      },{
        goto: 274
      },
    ]
  },
  329: {
    choices: [
      {
        goto: 368
      }
    ]
  },
  330: {
    opponent: "yaemon",
    sideEffects: {
      attributes: {
        hp: -4
      }
    },
    choices: [
      {
        goto: 340
      }, {
        goto: 410
      }, {
        goto: 401,
      }, {
        goto: 390
      },
    ]
  },
  331: {},
  332: {
    opponent: "humanEater",
    choices: [
      {
        goto: 310
      }, {
        goto: 345
      }, {
        goto: 332,
      }
    ]
  },
  333: {
    opponent: "olderGod",
    choices: [
      {
        goto: 321
      },{
        goto: 349
      },{
        goto: 333
      },
    ]
  },
  334: {
    choices: [
      {
        goto: 359
      }, {
        goto: 347
      }
    ]
  },
  335: {
    opponent: "firstOfTwoMonks",
    choices: [
      {
        goto: 312
      },{
        goto: 322
      },{
        goto: 335
      },
    ]
  },
  336: {
    sideEffects: {
      items: {
        glove: 1
      },    
      modifiers: {
        punch: 1,
      },
    },
    choices: [
      {
        goto: 93
      }
    ]
  },
  337: {
    image: true,
    choices: [
      {
        goto: 300
      }
    ]
  },
  338: {
    choices: [
      {
        goto: 281
      }, {
        goto: 267
      }, {
        goto: 293,
      }
    ]
  },
  339: {
    choices: [
      {
        goto: 317
      },{
        goto: 328
      },
    ]
  },
  340: {
    opponent: "yaemon",
    choices: [
      {
        goto: 301
      }, {
        goto: 330
      }, {
        goto: 410,
      }, {
        goto: 390
      }, {
        goto: 401,
      }
    ]
  },
  341: {
    image: true,
    sideEffects: {
      attributes: {
        hp: 20,
      },
    },
    choices: [
      {
        goto: 316
      }, {
        goto: 325
      }, {
        goto: 295,
      }
    ]
  },
  342: {
    sideEffects: {
      attributes: {
        hp: -4,
      },
    },
    choices: [
      {
        goto: 298,
        ability: "acrobat"
      }, {
        goto: 287,
      }
    ]
  },
  343: {
    choices: [
      {
        goto: 294
      },{
        goto: 313
      }
    ]
  },
  344: {
    choices: [
      {
        goto: 366
      }
    ]
  },
  345: {
    opponent: "humanEater",
    choices: [
      {
        goto: 332
      }, {
        goto: 310
      }
    ]
  },
  346: {
    choices: [
      {
        goto: 399
      },
    ]
  },
  347: {
    sideEffects: {
      items: {
        "shuriken": -1
      },
    },
    choices: [
      {
        goto: 254,
      }
    ]
  },
  348: {},
  349: {},
  350: {
    opponent: "yaemon",
    choices: [
      {
        goto: 266,
      }, {
        goto: 401,
      }, {
        goto: 390,
      }
    ]
  },
  351: {
    choices: [
      {
        ability: "poisonArrows",
        goto: 389,
      }, {
        goto: 326,
      }
    ]
  },
  352: {
    specialCondition: {
      type: "fate",
    },
    choices: [
      {
        goto: 107,
      }, {
        goto: 97,
      }
    ]
  },
  353: {
    opponent: "monks",
    choices: [
      {
        goto: 374
      },{
        goto: 286
      },
    ]
  },
  354: {
    choices: [
      {
        goto: 31
      },{
        goto: 15
      },
    ]
  },
  355: {
    choices: [
      {
        ability: "lockPicker",
        goto: 346
      },{
        goto: 381
      },
    ]
  },
  356: {}, // 356 missing in book
  357: {
    choices: [
      {
        goto: 283,
      }, {
        goto: 275,
      }
    ]
  },
  358: {},
  359: {
    choices: [
      {
        attribute: "innerForce",
        goto: 395,
      }, {
        goto: 403,
      }
    ]
  },
  360: {
    choices: [
      {
        goto: 371,
      }, {
        goto: 352,
      }
    ]
  },
  361: {
    choices: [
      {
        goto: 364
      },{
        goto: 130
      },
    ]
  },
  362: {},
  363: {
    sideEffects: {
      attributes: {
        hp: -7,
      },
    },
    choices: [
      {
        goto: 281
      }, {
        goto: 267
      }, {
        goto: 293,
      }
    ]
  },  
  364: {},
  365: {
    sideEffects: {
      attributes: {
        hp: -6
      }
    },
    choices: [
      {
        goto: 276,
      },
    ]
  },
  366: {
    sideEffects: {
      attributes: {
        hp: 3
      },
      items: {
        gold: 5
      }
    },
    choices: [
      {
        goto: 219,
      }, {
        goto: 313,
      }, {
        goto: 59,
      }
    ]
  },
  367: {
    opponent: "yaemon",
    choices: [
      {
        goto: 181,
      }, {
        goto: 3670,
      }
    ]
  },
  3670: {
    opponent: "yaemon",
    specialCondition: {
      type: "block",
      attack: "2T6",
      defense: 7,
      opponent: "yaemon",
    },
    choices: [
      {
        goto: 118,
      }, {
        goto: 308,
      }
    ]
  },
  368: {
    sideEffects: {
      modifiers: {
        "punch": 1,
      },
    },
    choices: [
      {
        goto: 65
      }
    ]
  },
  369: {
    sideEffects: {
      attributes: {
        innerForce: -1
      },
    },
    choices: [
      {
        goto: 399
      },
    ]
  },
  370: {
    choices: [
      {    
        condition: "hasKilledHonoric", 
        goto: 305
      },{
        condition: "hasNotKilledHonoric", 
        goto: 348
      },
    ]
  },
  371: {
    choices: [
      {
        goto: 19
      }
    ]
  },
  372: {
    image: true,
    choices: [
      {
        goto: 363,
      }, {
        goto: 351,
      }
    ]
  },
  373: {
    choices: [
      {
        goto: 333
      },{
        goto: 321
      },{
        goto: 349
      },
    ]
  },
  374: {
    opponent: "monks",
    choices: [
      {
        goto: 374
      },{
        goto: 286
      },
    ]
  },
  375: {
    sideEffects: {
      modifiers: {
        "throw": 1,
      },
    },
    choices: [
      {
        goto: 65
      }
    ]
  },
  376: {
    choices: [
      {
        goto: 283
      }, {
        goto: 275
      },
    ]
  },
  377: {
    opponent: "olvar",
    choices: [
      {
        goto: 377
      }, {
        goto: 318
      }, {
        goto: 302,
      }
    ]
  },
  378: {
    opponent: "yaemon",
    choices: [
      {
        ability: "poisonArrows",
        goto: 69
      }, {
        goto: 89
      }
    ]
  },
  379: {},
  380: {
    choices: [
      {
        goto: 332
      }, {
        goto: 310
      }, {
        goto: 345
      }
    ]
  },
  381: {
    choices: [
      {
        ability: "climb",
        goto: 174
      },{
        ability: "climb",
        goto: 2
      },{
        attribute: "innerForce",
        goto: 369
      },{
        goto: 393
      },
    ]
  },
  382: {
    choices: [
      {
        goto: 372
      }
    ]
  },
  383: {
    choices: [
      {
        goto: 358
      }, {
        goto: 373
      },
    ]
  },
  384: {
    choices: [
      {
        goto: 368
      }
    ]
  },
  385: {
    choices: [
      {
        attribute: "innerForce",
        goto: 343,
      }, {
        goto: 327,
      }
    ]
  },
  386: {},
  387: {
    choices: [
      {
        goto: 129
      },{
        goto: 275
      },
    ]
  },
  388: {
    choices: [
      {
        goto: 398
      }
    ]
  },
  389: {
    specialCondition: {
      type: "attack",
      modifier: "poisonArrow",
      attack: "2T6",
      defense: 4,
      opponent: "magician",
    },
    choices: [
      {
        goto: 338,
      }, {
        goto: 311,
      }
    ]
  },
  390: {
    opponent: "yaemon",
    choices: [
      {
        goto: 84,
      }, {
        goto: 306,
      }, {
        goto: 278,
      }, {
        ability: "kwonsFlail",
        goto: 240,
      }
    ]
  },
  391: {},
  392: {
    choices: [
      {
        item: "fireLizardEssence",
        goto: 52
      },{
        goto: 91
      },
    ]
  },
  393: {
    choices: [
      {
        ability: "immunity",
        goto: 388
      },{
        goto: 3930
      },
    ]
  },
  3930: {},
  394: {
    choices: [
      {
        goto: 372
      }
    ]
  },
  395: {
    sideEffects: {
      attributes: {
        innerForce: -1,
      },
    },
    specialCondition: {
      type: "attack",
      modifier: "kick",
      attack: "2T6",
      defense: 6,
      opponent: "monk",
    },
    choices: [
      {
        goto: 384,
      }, {
        goto: 403,
      }
    ]
  },
  396: {
    sideEffects: {
      modifiers: {
        "kick": -1,
      },
      attributes: {
        hp: -4,
      }
    },
    choices: [
      {
        goto: 332
      }, {
        goto: 310
      }, {
        goto: 345
      }
    ]
  },
  397: {
    choices: [
      {
        goto: 386
      },{
        goto: 130
      },
    ]
  },
  398: {
    choices: [
      {
        goto: 383
      },{
        ability: "climb",
        goto: 392
      },
    ]
  },
  3980: {
    choices: [
      {
        goto: 383
      }
    ]
  },
  399: {
    image: true,
    choices: [
      {
        goto: 331
      },{
        item: "shuriken",
        goto: 269
      },{        
        goto: 247
      },{
        ability: "poisonArrows",
        goto: 230
      },
    ]
  },
  400: {
    choices: [
      {
        ability: "immunity",
        goto: 246
      },{        
        goto: 391
      }
    ]
  },
  401: {
    opponent: "yaemon",
    choices: [
      {
        goto: 367
      }, {
        goto: 228
      }
    ]
  },
  402: {
    choices: [
      {
        goto: 383
      },{
        ability: "climb",
        goto: 392
      },
    ]
  },
  403: {
    choices: [
      {
        goto: 254
      }
    ]
  },
  404: {
    choices: [
      {
        ability: "climb",
        goto: 385,
      }, {
        goto: 362,
      }
    ]
  },
  405: {
    choices: [
      {
        goto: 353,
      }, {
        goto: 374,
      }, {
        goto: 286,
      }
    ]
  },
  406: {
    choices: [
      {
        goto: 377
      }, {
        goto: 302
      }, {
        goto: 318
      }, {
        ability: "poisonArrows",
        goto: 8
      }
    ]
  },
  407: {
    sideEffects: {
      attributes: {
        hp: -8
      }
    },
    choices: [
      {
        ability: "playDead",
        goto: 376
      },{
        goto: 103
      },
    ]
  },
  408: {
    choices: [
      {
        goto: 307
      }, {
        goto: 273
      }
    ]
  },
  409: {
    choices: [
      {
        goto: 289
      },
    ]
  },
  410: {
    opponent: "yaemon",
    sideEffects: {
      attributes: {
        hp: -2
      }
    },
    choices: [
      {
        ability: "acrobat",
        goto: 167
      }, {
        goto: 159
      },
    ]
  },
  411: {
    opponent: "yaemon",
    choices: [
      {
        goto: 68
      },{
        goto: 155
      },
    ]
  },
  412: {
    choices: [
      {
        ability: "immunity",
        goto: 4120,
      }, {
        goto: 41201,
      }
    ]
  },
  4120: {
    sideEffects: {
      attributes: {
        hp: -2,
      },
    },
    choices: [
      {
        goto: 25,
      }, {
        goto: 42,
      }, {
        goto: 13,
      }
    ]
  },
  41201: {},
  413: {
    choices: [
      {
        ability: "acrobat",
        goto: 29
      },{
        goto: 379
      },
    ]
  },
  414: {
    choices: [
      {
        goto: 342
      }, {
        goto: 375
      }
    ]
  },
  415: {
    choices: [
      {
        goto: 3980
      },
    ]
  },
  416: {
    sideEffects: {
      attributes: {
        hp: -4
      }
    },
    choices: [
      {
        goto: 289
      }
    ]
  },
  417: {
    choices: [
      {
        attribute: "innerForce",
        goto: 343,
      }, {
        goto: 327,
      }
    ]
  },
  418: {
    image: true,
    choices: [
      {
        goto: 138
      }, {
        goto: 402
      }, {
        goto: 166
      },
    ]
  },
  419: {
    choices: [
      {
        goto: 283
      },{
        goto: 275
      },
    ]
  },
  420: {
    endPage: true
  },
}