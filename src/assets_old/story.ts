import { EnumAttackType, EnumAbilities, EnumOpponents } from './enums'
import { IPages } from './interfaces'

const stories: IPages = {
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
        ability: EnumAbilities.acrobat
      }
    ]
  },
  3: {
    modifiers: {
      "hp": -3,
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
  /*
  13: {
      "battle": {
          "opponent": opponents.cobraman,            
          "win": 394,
          "loss": 4120,
          "miss": 412
      },
      choices: [
          {
              goto: 42,
          },{
              goto: 25,
          }
      ]
  },
  */
  16: {
    choices: [
      {
        goto: 75,
        ability: EnumAbilities.climb
      }, {
        goto: 86,
      }
    ]
  },
  17: {
    battle: {
      id: EnumOpponents.gorobei,
      attackType: EnumAttackType.kick,
      blockable: true,
      attacks: [
        {
          player_defense: 7,
          player_damage: "1T6+2",
          opponent_damage: "1T6",
          opponent_defense: 6,
        }
      ]
    },
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
        ability: EnumAbilities.escapeArtist,
        goto: 126,
      }, {
        goto: 115,
      }
    ]
  },
  /*
  25: {
      "battle": {
          "opponent": opponents.cobraman,            
          "win": 394,
          "loss": 4120,
          "miss": 412
      },
      choices: [
          {
              goto: 42,
          },{
              goto: 13,
          },{
              goto: 25,
          }
      ]
  },
  26: {
      modifiers: {
          "hp": 10,
          "gold": 10
      },
      choices: [
          {
              goto: 6,
          },{
              goto: 208,
          }
      ]
  },
  27: {
      modifiers: {
          "fate": -1
      },
      choices: [
          {
              goto: 6,
          }
      ]
  },
  33: {
      "choiceSpec": {
          "type": "fate",
          "attack": "2T6",
          "defense": 7
      },
      choices: [
          {
              "criteria": true,
              goto: 382,
          },{
              "criteria": false,
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
  },*/
  35: {
    battle: {
      id: EnumOpponents.gorobei,
      attackType: EnumAttackType.punch,
      blockable: true,
      attacks: [
        {
          player_damage: "1T6",
          player_defense: 7,
          opponent_damage: "1T6",
          opponent_defense: 7,
        }
      ]
    },
    choices: [
      {
        goto: 17
      }, {
        goto: 61
      }, {
        goto: 35
      }
    ]
  },/*
    36: {
        choices: [
            {
                goto: 50,
            },{
                goto: 27,
            }
        ]
    },
    42: {
        "battle": {
            "opponent": opponents.cobraman,            
            "win": 394,
            "loss": 4120,
            "miss": 412
        },
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
            },{
                goto: 65,
            }
        ]
    },
    50: {
        modifiers: {
            "hp": -2,
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
        "choiceSpec": {
            "type": "fate",
            "attack": "2T6",
            "defense": 7
        },
        choices: [
            {
                "criteria": true,
                goto: 3,
            },{
                "criteria": false,
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
        choices: [
            {
                goto: 95
            }
        ]
    },
    */
  64: {},
  /*
  65: {
      choices: [
          {
              goto: 212
          },{
              goto: 235
          }
      ]
  },
  67: {
      "battle": {
          "opponent": opponents.piratecaptain,     
          "win": 58
      },
      choices: [
          {
              goto: 87
          },{
              goto: 77
          },{
              goto: 67
          }
      ]
  },
  73: {        
      choices: [
          {
              ability: EnumAbilities.climb,
              goto: 57
          },{
              ability: EnumAbilities.acrobat,
              goto: 33
          },{
              goto: 64
          }
      ]
  },
  75: {
      "choiceSpec": {
          "type": "fate",
          "attack": "2T6",
          "defense": 7
      },
      choices: [
          {
              "criteria": true,
              goto: 94,
          },{
              "criteria": false,
              goto: 125,
          }
      ]
  },
  76: {
      modifiers: {
          "hp": 3,
      },
      "items": {
          "magicShuriken": true
      },
      choices: [
          {
              goto: 405
          },{
              goto: 416
          }
      ]
  },
  77: {
      "battle": {
          "opponent": opponents.piratecaptain,   
          "win": 58
      },
      choices: [
          {
              goto: 87
          },{
              goto: 67
          },{
              goto: 77
          }
      ]
  },
  80: {
      "battle": {
          "attackModifier": 2
      },
      choices: [
          {
              goto: 17
          },{
              goto: 35
          },{
              goto: 61
          }
      ]
  },
  86: {
      choices: [
          {
              goto: 116
          },{
              goto: 105
          }
      ]
  },
  87: {
      "battle": {
          "opponent": opponents.piratecaptain,   
          "loss": 45,
          "win": 34
      },
      choices: [
          {
              goto: 77
          },{
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
          },{
              goto: 77
          },{
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
          },{
              goto: 77
          },{
              goto: 87
          }
      ]
  },
  110: {    
      choices: [
          {
              goto: 139,
          },{
              goto: 151,
          },{
              goto: 177,
          },{
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
      modifiers: {
          "fate": -2
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
          },{
              goto: 134,
          }
      ]
  },
  125: {
      choices: [
          {
              ability: EnumAbilities.deflectArrows,
              goto: 201,
          },{
              goto: 136,
          }
      ]
  },
  126: {
      choices: [
          {
              ability: EnumAbilities.lockPicker,
              goto: 153,
          },{
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
          },{
              goto: 25,
          },{
              goto: 13,
          }
      ]
  },
  136: {
      modifiers: {
          "hp": -4
      },
      choices: [
          {
              ability: EnumAbilities.acrobat,
              goto: 144,
          },{
              goto: 285,
          }
      ]
  },
  137: {
      modifiers: {
          "shuriken": -1,
          "innerStrength": -1
      },
      "choiceSpec": {
          "type": "attack",
          "modifier": "shuriken",
          "attack": "2T6",
          "defense": 5,
          "name": txt.misc.captain
      },
      choices: [
          {
              "criteria": true,
              goto: 164,
          },{
              "criteria": false,
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
      "battle": {
          "opponent": opponents.snowGiant,   
          "win": 111
      },
      choices: [
          {
              goto: 1840,
          },{
              goto: 202,
          },{
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
          },{
              goto: 121,
          },{
              goto: 134,
          }
      ]
  },
  175: {},
  176: {
      choices: [
          {
              goto: 256,
          },{
              goto: 248,
          },{
              goto: 237,
          }
      ]
  },
  177: {
      "items": {
          "opalring": true
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
          },{
              goto: 6,
          }
      ]
  },
  // Special fate roll, divided into two stories (184 and this)
  1840: {
      "choiceSpec": {
          "type": "fate",
          "attack": "2T6",
          "defense": 7
      },
      choices: [
          {
              "criteria": true,
              goto: 184,
          },{
              "criteria": false,
              goto: 146,
          }
      ]
  },
  184: {
      "battle": {
          "opponent": opponents.snowGiant,   
          "win": 111
      },
      choices: [
          {
              goto: 202,
          },{
              goto: 160,
          },{
              goto: 1840,
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
      modifiers: {
          "hp": 20
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
              ability: EnumAbilities.immunity,
              goto: 214,
          },{
              goto: 206,
          }
      ]
  },
  196: {
      choices: [
          {
              goto: 183,
          },{
              goto: 46,
          },{
              goto: 56,
          },{
              goto: 36,
          }
      ]
  },
  200: {
      choices: [
          {
              goto: 100,
          },{
              goto: 76,
          }
      ]
  },
  202: {
      "battle": {
          "opponent": opponents.snowGiant
      },
      choices: [
          {
              goto: 1840
          },{
              goto: 160
          }
      ]
  },
  206: {
      "items": {
          "opalring": false
      },
      modifiers: {
          "gold": -5
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
          },{
              goto: 6
          },{
              goto: 36
          }
      ]
  },
  211: {},
  212: {
      modifiers: {
          "hp": 2
      },
      "image": true,
      choices: [
          {
              goto: 357,
          },{
              goto: 315,
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
      "items": {
          "opalring": false
      },
      modifiers: {
          "hp": 4,
          "innerStrength": 3
      },
      choices: [
          {
              goto: 260,
          },{
              goto: 81,
          },{
              goto: 210,
          }
      ]
  },
  225: {
      modifiers: {
          "hp": 1
      },
      choices: [
          {
              goto: 254,
          }
      ]
  },
  231: {
      choices: [
          {
              ability: EnumAbilities.acrobat,
              goto: 192,
          },{
              goto: 211,
          }
      ]
  },
  232: {
      "image": true,
      modifiers: {
          "hp": 2
      },
      choices: [
          {
              goto: 257,
          },{
              goto: 280,
          }
      ]
  },
  234: {
      choices: [
          {
              goto: 200,
          },{
              goto: 185,
          }
      ]
  },
  235: {
      modifiers: {
          "hp": 2
      },
      choices: [
          {
              goto: 341,
          },{
              goto: 212,
          }
      ]
  },
  */
  237: {
    battle: {
      id: EnumOpponents.soldiers,
      blockable: true,
      attackType: EnumAttackType.throw,
      attacks: [
        {
          player_defense: 8,
          player_damage: "",
          opponent_damage: "1T6+1",
          opponent_defense: 5,
        }, {
          player_defense: 8,
          player_damage: "1T6",
          opponent_damage: "1T6+1",
          opponent_defense: 5,
        }, {
          player_defense: 8,
          player_damage: "1T6",
          opponent_damage: "1T6+1",
          opponent_defense: 5,
        }
      ]
    },
    choices: [
      {
        goto: 256
      }, {
        goto: 248
      }
    ]
  },
  /*
  243: {
      choices: [
          {
              goto: 231
          },{
              goto: 220
          }
      ]
  },*/
  248: {
    battle: {
      id: EnumOpponents.soldiers,
      blockable: true,
      attackType: EnumAttackType.punch,
      attacks: [
        {
          player_defense: 8, // 9 om 1, 8 om 2, 7 om 3
          player_damage: "1T6",
          opponent_damage: "1T6+3",
          opponent_defense: 4,
        }, {
          player_defense: 8,
          player_damage: "1T6",
          opponent_damage: "1T6+1",
          opponent_defense: 4,
        }, {
          player_defense: 8,
          player_damage: "1T6",
          opponent_damage: "1T6+1",
          opponent_defense: 4,
        }
      ]
    },
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
        goto: 184,
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
    battle: {
      id: EnumOpponents.soldiers,
      blockable: true,
      attackType: EnumAttackType.kick,
      attacks: [
        {
          player_defense: 8, // 9 om 1, 8 om 2, 7 om 3
          player_damage: "1T6",
          opponent_damage: "1T6",
          opponent_defense: 5,
        }, {
          player_defense: 8,
          player_damage: "1T6",
          opponent_damage: "1T6",
          opponent_defense: 4,
        }, {
          player_defense: 8,
          player_damage: "1T6",
          opponent_damage: "1T6",
          opponent_defense: 4,
        }
      ]
    },
    choices: [
      {
        goto: 237
      }, {
        goto: 248
      }, {
        goto: 256
      }
    ]
  },/*
    257: {
        "battle": {
            "instantAttack": "1T6",
            "opponent": opponents.humanEater,  
        },
        modifiers: {
            "shuriken": -1
        },
        choices: [
            {
                ability: EnumAbilities.deflectArrows,
                goto: 380,
            },{
                goto: 396,
            }
        ]
    },
    260: {
        modifiers: {
            "hp": 6,
        },
        choices: [
            {
                goto: 234
            },{
                goto: 114
            }
        ]
    },
    261: {
        "image": true,
        choices: [
            {
                goto: 243
            },{
                goto: 252
            }
        ]
    },
    267: {
        "battle": {
            "opponent": opponents.goblin,            
            "win": 272,
        },
        choices: [
            {
                goto: 281
            },{
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
            },{
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
            },{
                goto: 310
            },{
                goto: 345
            }
        ]
    },
    281: {
        "battle": {
            "opponent": opponents.goblin,            
            "win": 272,
        },
        choices: [
            {
                goto: 293
            },{
                goto: 267
            },{
                goto: 281,
            }
        ]
    },
    283: {
        choices: [
            {
                goto: 290,
            },{
                goto: 169,
            }
        ]
    },
    285: {},
    287: {},
    293: {
        "battle": {
            "opponent": opponents.goblin,            
            "win": 272,
        },
        choices: [
            {
                goto: 281
            },{
                goto: 267
            },{
                goto: 293,
            }
        ]
    },
    295: {},
    297: {
        "items": {
            "healingPotion": true
        },
        choices: [
            {
                goto: 65,
            },{
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
            },{
                goto: 186
            }
        ]
    },
    310: {
        "battle": {
            "opponent": opponents.humanEater,            
            "win": 360,
        },
        choices: [
            {
                goto: 332
            },{
                goto: 345
            },{
                goto: 310,
            }
        ]
    },
    311: {},
    314: {
        choices: [
            {
                ability: EnumAbilities.poisonArrows,
                goto: 329
            },{
                goto: 334
            }
        ]
    },
    316: {
        "battle": {
            "opponent": opponents.giant,            
            "win": 336,
        },
        choices: [
            {
                goto: 325
            },{
                goto: 295
            },{
                goto: 316,
            }
        ]
    },
    323: {
        choices: [
            {
                ability: EnumAbilities.climb,
                goto: 414
            },{
                goto: 314
            }
        ]
    },
    325: {
        "battle": {
            "opponent": opponents.giant,            
            "win": 336,
        },
        choices: [
            {
                goto: 316
            },{
                goto: 295
            },{
                goto: 325,
            }
        ]
    },
    326: {
        "choiceSpec": {
            "type": "attack",
            "modifier": "punch",
            "attack": "2T6",
            "defense": 6,
            "name": "Magikern"
        },
        choices: [
            {
                "criteria": true,
                goto: 253,
            },{
                "criteria": false,
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
        "battle": {
            "opponent": opponents.humanEater,            
            "win": 360,
        },
        choices: [
            {
                goto: 310
            },{
                goto: 345
            },{
                goto: 332,
            }
        ]
    },
    334: {
        choices: [
            {
                goto: 359
            },{
                goto: 347
            }
        ]
    },
    336: {
        "items": {
            "glove": true
        },
        modifiers: {
            "punch": 1,
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
            },{
                goto: 267
            },{
                goto: 293,
            }
        ]
    },
    341: {
        modifiers: {
            "hp": 20,
        },
        choices: [
            {
                goto: 316
            },{
                goto: 325
            },{
                goto: 295,
            }
        ]
    },
    342: {
        modifiers: {
            "hp": -4,
        },
        choices: [
            {
                goto: 298,
                ability: EnumAbilities.acrobat
            },{
                goto: 287,
            }
        ]
    },
    345: {
        "battle": {
            "opponent": opponents.humanEater
        },
        choices: [
            {
                goto: 332
            },{
                goto: 310
            }
        ]
    },
    351: {
        choices: [
            {
                "attribute": EnumAbilities.poisonArrows,
                goto: 389,
            },{
                goto: 326,
            }
        ]
    },
    352: {
        "choiceSpec": {
            "type": "fate",
            "attack": "2T6",
            "defense": 7
        },
        choices: [
            {
                "criteria": true,
                goto: 107,
            },{
                "criteria": false,
                goto: 97,
            }
        ]
    },    
    357: {
        choices: [
            {
                goto: 283,
            },{
                goto: 275,
            }
        ]
    },
    359: {
        choices: [
            {
                "attribute": "innerStrength",
                goto: 395,
            },{
                goto: 403,
            }
        ]
    },
    360: {
        choices: [
            {
                goto: 371,
            },{
                goto: 352,
            }
        ]
    },
    363: {
        modifiers: {
            "hp": -7,
        },
        choices: [
            {
                goto: 281
            },{
                goto: 267
            },{
                goto: 293,
            }
        ]
    },
    368: {
        modifiers: {
            "kick": 1,
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
            },{
                goto: 351,
            }
        ]
    },
    375: {
        modifiers: {
            "kick": 1,
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
            },{
                goto: 310
            },{
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
        "choiceSpec": {
            "type": "attack",
            "modifier": "poisonArrow",
            "attack": "2T6",
            "defense": 4,
            "name": "Magikern"
        },
        choices: [
            {
                "criteria": true,
                goto: 338,
            },{
                "criteria": false,
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
        "choiceSpec": {
            "type": "attack",
            "modifier": "kick",
            "attack": "2T6",
            "defense": 6,
            "name": "Munken"
        },
        choices: [
            {
                "criteria": true,
                goto: 384,
            },{
                "criteria": false,
                goto: 403,
            }
        ]
    },
    396: {
        modifiers: {
            "hp": -4,
            "kick": -1,
        },
        choices: [
            {
                goto: 332
            },{
                goto: 310
            },{
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
            },{
                goto: 273
            }
        ]
    },
    412: {
        modifiers: {
            "hp": -2,
        },
        choices: [
            {
                goto: 25,
            },{
                goto: 42,
            },{
                goto: 13,
            }
        ]
    },
    // Special dead page for 412
    4120: {},
    414: {
        choices: [
            {
                goto: 342
            },{
                goto: 375
            }
        ]
    },*/
}

export default stories