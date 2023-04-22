import { EAbilities, EItems, EOpponents } from "./enums"
import { IPages } from "@/stores/pageInterfaces"

export const pageData: IPages = {
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
        ability: EAbilities.acrobat
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
        ability: EAbilities.poisonArrows,
        goto: 419
      },
      {
        goto: 12
      }
    ]
  },
  5: {
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
        ability: EAbilities.climb,
        goto: 392
      }, {
        goto: 402
      }
    ]
  },
  8: {
    opponent: EOpponents.olvar,
    choices: [
      {
        goto: 800
      }
    ]
  },
  800: {
    opponent: EOpponents.olvar,
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
        herbs: true
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
        goto: 398
      }
    ]
  },
  12: {
    sideEffects: {
      items: {
        opalring: false
      }
    },
    choices: [
      {
        ability: EAbilities.escapeArtist,
        goto: 21
      },
      {
        goto: 37
      }
    ]
  },
  13: {
    opponent: EOpponents.cobraman,
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
        criteria: true,
        goto: 417,
      }, {
        criteria: false,
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
        ability: EAbilities.climb
      }, {
        goto: 86,
      }
    ]
  },
  17: {
    opponent: EOpponents.gorobei,
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
        ability: EAbilities.escapeArtist,
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
    opponent: EOpponents.olvar,
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
    choices: [
      {
        goto: 155,
      },{
        goto: 68,
      }
    ]
  },
  25: {
    opponent: EOpponents.cobraman,
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
        ability: EAbilities.playDead
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
        criteria: true,
        goto: 382,
      }, {
        criteria: false,
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
    opponent: EOpponents.gorobei,
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
      opponent: EOpponents.guard
    },
    choices: [
      {
        criteria: true,
        goto: 18,
      }, {
        criteria: false,
        goto: 28,
      }
    ]
  },
  39: {
    opponent: EOpponents.olvar,
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
        ability: EAbilities.poisonArrows,
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
    opponent: EOpponents.cobraman,
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
    choices: [
      {
        ability: EAbilities.escapeArtist,
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
      opponent: EOpponents.yaemon
    },
    choices: [
      {
        criteria: true,
        goto: 378,
      }, {
        criteria: false,
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
    sideEffects: {
      attributes: {
        hp: -8
      }
    },
    choices: [
      {
        ability: EAbilities.acrobat,
        goto: 181,
      },{
        goto: 540,
      }
    ]
  },
  540: {
    specialCondition: {
      type: "block",
      attack: "2T6",
      defense: 7,
      opponent: EOpponents.yaemon
    },
    choices: [
      {
        criteria: true,
        goto: 378,
      }, {
        criteria: false,
        goto: 40,
      }
    ]
  },
  55: {
    sideEffects: {
      items: {
        amulet: true
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
        criteria: true,
        goto: 3,
      }, {
        criteria: false,
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
    choices: [
      {
        goto: 75,
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
    opponent: EOpponents.piratecaptain,
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
        ability: EAbilities.acrobat,
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
      opponent: EOpponents.yaemon
    },
    choices: [
      {
        criteria: true,
        goto: 411,
      }, {
        criteria: false,
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
    opponent: EOpponents.priests,
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
      opponent: EOpponents.manse
    },
    choices: [
      {
        criteria: true,
        goto: 49,
      }, {
        criteria: false,
        goto: 60,
      }
    ]
  },
  73: {
    choices: [
      {
        ability: EAbilities.climb,
        goto: 57
      }, {
        ability: EAbilities.acrobat,
        goto: 33
      }, {
        goto: 64
      }
    ]
  },
  74: {
    choices: [
      {
        ability: EAbilities.escapeArtist,
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
        criteria: true,
        goto: 94,
      }, {
        criteria: false,
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
        magicShuriken: true
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
    opponent: EOpponents.piratecaptain,
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
        ability: EAbilities.acrobat,
        goto: 233,
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
      opponent: EOpponents.runeweaver
    },
    choices: [
      {
        criteria: true,
        goto: 292,
      }, {
        criteria: false,
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
    choices: [
      {
        goto: 71,
      },
      {
        goto: 63,
      },{
        goto: 82,
      }
    ]
  },
  83: {
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
    choices: [
      {
        ability: EAbilities.acrobat,
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
        ability: EAbilities.poisonArrows,
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
    opponent: EOpponents.piratecaptain,
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
    choices: [
      {
        goto: 74,
      },{
        goto: 108,
      }
    ]
  },
  92: {
    opponent: EOpponents.olvar,
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
        ability: EAbilities.poisonArrows,
        goto: 88,
      },
      {
        goto: 418,
      }
    ]
  },
  100: {},
  101: {
    choices: [
      {
        goto: 89
      },{
        ability: EAbilities.poisonArrows,
        goto: 69
      },{
        item: EItems.shuriken,
        amount: 3,
        goto: 51
      },
    ]
  },
  102: {
    choices: [
      {
        goto: 67
      },
    ]
  },
  103: {
    choices: [
      {
        goto: 67
      },
    ]
  },
  104: {
    choices: [
      {
        goto: 67
      },
    ]
  },
  105: {
    choices: [
      {
        goto: 125
      }
    ]
  },
  106: {
    choices: [
      {
        goto: 67
      },
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
  108: {
    choices: [
      {
        goto: 67
      },
    ]
  },
  109: {
    choices: [
      {
        goto: 67
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
    choices: [
      {
        goto: 67
      },
    ]
  },
  118: {
    choices: [
      {
        goto: 67
      },
    ]
  },
  119: {
    choices: [
      {
        goto: 67
      },
    ]
  },
  120: {
    choices: [
      {
        goto: 67
      },
    ]
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
        goto: 67
      },
    ]
  },
  124: {
    choices: [
      {
        goto: 67
      },
    ]
  },
  125: {
    choices: [
      {
        ability: EAbilities.deflectArrows,
        goto: 201,
      }, {
        goto: 136,
      }
    ]
  },
  126: {
    choices: [
      {
        ability: EAbilities.lockPicker,
        goto: 153,
      }, {
        goto: 137,
      }
    ]
  },
  127: {
    choices: [
      {
        goto: 67
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
    choices: [
      {
        goto: 67
      },
    ]
  },
  130: {
    choices: [
      {
        goto: 67
      },
    ]
  },
  131: {
    choices: [
      {
        goto: 67
      },
    ]
  },
  132: {
    choices: [
      {
        goto: 67
      },
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
        goto: 67
      },
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
        ability: EAbilities.acrobat,
        goto: 144,
      }, {
        goto: 285,
      }
    ]
  },
  137: {
    sideEffects: {
      attributes: {
        innerStrength: -1
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
      opponent: EOpponents.piratecaptain
    },
    choices: [
      {
        criteria: true,
        goto: 164,
      }, {
        criteria: false,
        goto: 175,
      }
    ]
  },
  138: {
    choices: [
      {
        goto: 67
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
  140: {
    choices: [
      {
        goto: 67
      },
    ]
  },
  141: {
    choices: [
      {
        goto: 67
      },
    ]
  },
  142: {
    choices: [
      {
        goto: 67
      },
    ]
  },
  143: {
    choices: [
      {
        goto: 67
      },
    ]
  },
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
        goto: 67
      },
    ]
  },
  146: {
    sideEffects: {
      attributes: {
        hp: -6
      }
    },
    opponent: EOpponents.snowGiant,
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
        goto: 67
      },
    ]
  },
  148: {
    choices: [
      {
        goto: 67
      },
    ]
  },
  149: {
    choices: [
      {
        goto: 67
      },
    ]
  },
  150: {
    choices: [
      {
        goto: 67
      },
    ]
  },
  151: {
    choices: [
      {
        goto: 191,
      }
    ]
  },
  153: {
    choices: [
      {
        goto: 26,
      }
    ]
  },
  160: {
    opponent: EOpponents.snowGiant,
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
  164: {
    choices: [
      {
        goto: 26,
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
        opalring: true
      },
    },
    choices: [
      {
        goto: 191,
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
    opponent: EOpponents.snowGiant,
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
        criteria: true,
        goto: 184,
      }, {
        criteria: false,
        goto: 146,
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
        ability: EAbilities.immunity,
        goto: 214,
      }, {
        goto: 206,
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
    opponent: EOpponents.snowGiant,
    choices: [
      {
        goto: 1840
      }, {
        goto: 160
      }
    ]
  },
  206: {
    sideEffects: {
      items: {
        opalring: false,
        gold: -5 // Todo, ska vara 5 kvar, fixa i slutet
      },
    },
    choices: [
      {
        goto: 65,
      }
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
  210: {
    choices: [
      {
        ability: EAbilities.climb,
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
        innerStrength: 3
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
  223: {
    image: true,
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
  227: {
    choices: [
      {
        goto: 283,
      }, {
        goto: 275,
      }
    ]
  },
  231: {
    choices: [
      {
        ability: EAbilities.acrobat,
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
  237: {
    opponent: EOpponents.soldiers,
    choices: [
      {
        goto: 256
      }, {
        goto: 248
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
  248: {
    opponent: EOpponents.soldiers,
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
    opponent: EOpponents.soldiers,
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
    opponent: EOpponents.humanEater,
    sideEffects: {
      items: {
        shuriken: -1
      },
    },
    choices: [
      {
        ability: EAbilities.deflectArrows,
        goto: 380,
      }, {
        goto: 396,
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
      {
        goto: 226
      }, {
        goto: 204
      }, {
        goto: 117
      }
    ]
  },
  267: {
    opponent: EOpponents.goblin,
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
  272: {
    sideEffects: {
      items: {
        fireLizardEssence: true
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
  275: {
    choices: [
      {
        goto: 261
      }
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
    opponent: EOpponents.goblin,
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
  287: {},
  290: {
    choices: [
      {
        goto: 275,
      }
    ]
  },
  293: {
    opponent: EOpponents.goblin,
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
  295: {},
  297: {
    sideEffects: {
      items: {
        healingPotion: true
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
  303: {},
  304: {
    sideEffects: {
      items: {
        herbs: true
      },
    },
    choices: [
      {
        goto: 70
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
  310: {
    opponent: EOpponents.humanEater,
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
  313: {},
  314: {
    choices: [
      {
        ability: EAbilities.poisonArrows,
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
      opponent: EOpponents.cobraman
    },
    choices: [
      {
        criteria: true,
        goto: 227,
      }, {
        criteria: false,
        goto: 3150,
      }
    ]
  },
  3150: {
    choices: [
      {
        ability: EAbilities.immunity,
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
    opponent: EOpponents.giant,
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
  323: {
    choices: [
      {
        ability: EAbilities.climb,
        goto: 414
      }, {
        goto: 314
      }
    ]
  },
  325: {
    opponent: EOpponents.giant,
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
      opponent: EOpponents.magician
    },
    choices: [
      {
        criteria: true,
        goto: 253,
      }, {
        criteria: false,
        goto: 311,
      }
    ]
  },
  329: {
    choices: [
      {
        goto: 368
      }
    ]
  },
  332: {
    opponent: EOpponents.humanEater,
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
  334: {
    choices: [
      {
        goto: 359
      }, {
        goto: 347
      }
    ]
  },
  336: {
    sideEffects: {
      "items": {
        "glove": true
      },    
      modifiers: {
        "punch": 1,
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
        ability: EAbilities.acrobat
      }, {
        goto: 287,
      }
    ]
  },
  345: {
    opponent: EOpponents.humanEater,
    // "battle": {
    //     "opponent": opponents.humanEater
    // },
    choices: [
      {
        goto: 332
      }, {
        goto: 310
      }
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
  351: {
    choices: [
      {
        attribute: EAbilities.poisonArrows,
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
        criteria: true,
        goto: 107,
      }, {
        criteria: false,
        goto: 97,
      }
    ]
  },
  357: {
    choices: [
      {
        goto: 283,
      }, {
        goto: 275,
      }
    ]
  },
  359: {
    choices: [
      {
        attribute: "innerStrength",
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
  371: {
    choices: [
      {
        goto: 19
      }
    ]
  },
  372: {
    choices: [
      {
        goto: 363,
      }, {
        goto: 351,
      }
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
  382: {
    choices: [
      {
        goto: 372
      }
    ]
  },
  384: {
    choices: [
      {
        goto: 368
      }
    ]
  },
  389: {
    specialCondition: {
      type: "attack",
      modifier: "poisonArrow",
      attack: "2T6",
      defense: 4,
      opponent: EOpponents.magician
    },
    choices: [
      {
        criteria: true,
        goto: 338,
      }, {
        criteria: false,
        goto: 311,
      }
    ]
  },
  394: {
    choices: [
      {
        goto: 372
      }
    ]
  },
  395: {
    specialCondition: {
      type: "attack",
      modifier: "kick",
      attack: "2T6",
      defense: 6,
      opponent: EOpponents.monk
    },
    choices: [
      {
        criteria: true,
        goto: 384,
      }, {
        criteria: false,
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
  403: {
    choices: [
      {
        goto: 254
      }
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
  412: {
    choices: [
      {
        ability: EAbilities.immunity,
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
  414: {
    choices: [
      {
        goto: 342
      }, {
        goto: 375
      }
    ]
  },
}