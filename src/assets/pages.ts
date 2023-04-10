import { EAttackType, EAbilities, EOpponents } from "./enums"
import { IPages } from "../stores/pageInterfaces"

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
  6: {
    choices: [
      {
        goto: 16,
      }, {
        goto: 408,
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
    // battle: {
    //   id: EOpponents.gorobei,
    //   attackType: EAttackType.punch,
    //   blockable: true,
    //   attacks: [
    //     {
    //       player_damage: "1T6",
    //       player_defense: 7,
    //       opponent_damage: "1T6",
    //       opponent_defense: 7,
    //     }
    //   ]
    // },
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
    choices: [
      {
        goto: 50,
      }, {
        goto: 27,
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
  61: {
    autoEndBattle: true,
    choices: [
      {
        goto: 95
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
  100: {},
  105: {
    choices: [
      {
        goto: 125
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
  121: {
    choices: [
      {
        goto: 73,
      }, {
        goto: 134,
      }
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
  128: {
    choices: [
      {
        goto: 191,
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
  139: {
    choices: [
      {
        goto: 191,
      }
    ]
  },
  144: {
    choices: [
      {
        goto: 254,
      }
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
  211: {},
  212: {
    sideEffects: {
      attributes: {
        hp: 2
      },
    },
    "image": true,
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
        "shuriken": -1
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
    "image": true,
    choices: [
      {
        goto: 243
      }, {
        goto: 252
      }
    ]
  },
  267: {
    opponent: EOpponents.goblin,
    choices: [
      {
        goto: 281
      }, {
        goto: 267
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
  285: {},
  287: {},
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
    // "battle": {
    //     "opponent": opponents.giant,            
    //     "win": 336,
    // },
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
    // "battle": {
    //     "opponent": opponents.giant,            
    //     "win": 336,
    // },
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
    // "battle": {
    //   id: EOpponents.humanEater,            

    // },
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