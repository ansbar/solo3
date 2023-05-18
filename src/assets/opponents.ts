import { IOpponents } from "@/assets/interfaces/opponents"
import { EAttackType, EAbilities, EBattleStates, EOpponents } from "@/assets/enums"

const opponents: IOpponents = {
  gorobei: {
    opponents: 1,
    attributes: {
      name: ["Gorobei"],
      hp: [14],
    },
    win: 110,
    loss: 95,
    pages: {
      17: {
        playerAttackType: EAttackType.kick,
        playerDamage: "1T6+2",
        playerDefense: [7],
        blockable: true,
        damage: ["1T6"],
        defense: [6],
      },
      35: {
        playerAttackType: EAttackType.punch,
        playerDefense: [7],
        playerDamage: "1T6",
        blockable: true,
        damage: ["1T6"],
        defense: [7],
      }
    }
  },
  humanEater: {
    opponents: 1,
    attributes: {
      name: ["Människoätaren"],
      hp: [16],
    },
    win: 360,
    pages: {
      257: {
        playerAttackType: EAttackType.instant,
        playerDamage: "1T6",
        playerDefense: [0],
        damage: [""],
        defense: [0]
      },
      310: {
        playerAttackType: EAttackType.punch,
        playerDamage: "1T6",
        playerDefense: [8],
        damage: ["2T6"],
        defense: [4],
        blockable: false,
      },
      332: {
        playerAttackType: EAttackType.kick,
        playerDefense: [7],
        playerDamage: "1T6+2",
        damage: ["2T6"],
        blockable: false,
        defense: [5],
      },
      345: {
        playerAttackType: EAttackType.throw,
        playerDefense: [7],
        damage: ["2T6"],
        blockable: false,
        attackModification: 2,
        defense: [8],
      },
    }
  },
  piratecaptain: {
    opponents: 1,
    attributes: {
      name: ["Sjörövarkapten"],
      hp: [12],
      counter: 4,
      counterGoto: 45,
    },
    win: 58,
    pages: {
      67: {
        playerAttackType: EAttackType.kick,
        playerDefense: [7],
        playerDamage: "1T6+2",
        damage: ["1T6+2"],
        blockable: true,
        defense: [6],
      },
      77: {
        playerAttackType: EAttackType.punch,
        playerDamage: "1T6",
        playerDefense: [8],
        damage: ["1T6+2"],
        defense: [6],
        blockable: true,
      },
      87: {
        playerAttackType: EAttackType.throw,
        directWinGoto: 34,
        playerDefense: [7],
        damage: ["1T6"],
        blockable: false,
        defense: [6],
      }
    }
  },
  soldiers: {
    opponents: 3,
    attributes: {
      name: ["Ung kapten", "1:a soldaten", "2:a soldaten"],
      hp: [12, 9, 10],
    },
    win: 268,
    pages: {
      237: {
        playerAttackType: EAttackType.throw,
        playerDefense: [9, 8, 7],
        blockable: true,
        damage: ["1T6+1", "1T6+1", "1T6+1"],
        defense: [5, 5, 5],
      },
      248: {
        playerAttackType: EAttackType.punch,
        playerDefense: [9, 8, 7],
        playerDamage: "1T6",
        blockable: true,
        damage: ["1T6+3", "1T6+1", "1T6+1"],
        defense: [4, 4, 4],
      },
      256: {
        playerAttackType: EAttackType.kick,
        playerDefense: [9, 8, 7],
        playerDamage: "1T6",
        blockable: true,
        damage: ["1T6+3", "1T6+1", "1T6+1"],
        defense: [5, 4, 4],
      }
    }
  },
  giant: {
    opponents: 1,
    attributes: {
      name: ["Tvåhövdad jätte"],
      hp: [25],
    },
    win: 336,
    pages: {
      325: {
        playerAttackType: EAttackType.punch,
        playerDamage: "1T6",
        playerDefense: [8],
        damage: ["2T6+1"],
        defense: [3],
        blockable: false,
      },
      316: {
        playerAttackType: EAttackType.kick,
        playerDefense: [8],
        playerDamage: "1T6+2",
        damage: ["2T6+1"],
        defense: [4],
        blockable: false,
      }
    }
  },
  snowGiant: {
    opponents: 1,
    attributes: {
      name: ["Snöjätten"],
      hp: [22]
    },
    win: 111,
    pages: {
      184: {
        playerAttackType: EAttackType.kick,
        playerDefense: [5],
        playerDamage: "1T6+2",
        damage: ["1T6+3"],
        blockable: true,
        defense: [6],
      },
      146: {
        playerAttackType: EAttackType.punch,
        playerDamage: "1T6",
        playerDefense: [6],
        damage: ["1T6+3"],
        defense: [5],
        blockable: true,
      },
      160: {
        playerAttackType: EAttackType.punch,
        playerDamage: "1T6",
        playerDefense: [6],
        damage: ["1T6+3"],
        defense: [5],
        blockable: true,
      },
      202: {
        playerAttackType: EAttackType.throw,
        playerDefense: [7],
        playerAttackValue: 3,
        damage: ["1T6+3"],
        blockable: false,
        defense: [6],
      }
    }
  },
  cobraman: {
    opponents: 1,
    attributes: {
      name: ["Kobramannen"],
      hp: [10],
      missAbility: EAbilities.immunity
    },
    win: 394,
    miss: 412,
    pages: {
      25: {
        playerAttackType: EAttackType.kick,
        playerDefense: [],
        playerDamage: "1T6+2",
        damage: [],
        blockable: false,
        defense: [7],
      },
      42: {
        playerAttackType: EAttackType.punch,
        playerDefense: [],
        damage: ["1T6"],
        defense: [7],
        blockable: false,
      },
      13: {
        playerAttackType: EAttackType.throw,
        playerDefense: [],
        damage: [],
        blockable: false,
        defense: [7],
      }
    }
  },
  goblin: {
    opponents: 1,
    attributes: {
      name: ["Vätten"],
      hp: [18]
    },
    win: 272,
    pages: {
      281: {
        playerAttackType: EAttackType.kick,
        playerDefense: [8],
        playerDamage: "1T6+2",
        damage: ["1T6+3"],
        blockable: true,
        defense: [6],
      },
      293: {
        playerAttackType: EAttackType.punch,
        playerDamage: "1T6",
        playerDefense: [8],
        damage: ["1T6+2"],
        defense: [5],
        blockable: false,
      },
      267: {
        playerAttackType: EAttackType.throw,
        missDamage: -2,
        playerDamage: "",
        playerDefense: [7],
        damage: ["1T6+3"],
        blockable: false,
        defense: [6],
      }
    }
  },
  olvarAndRuneWeaver: {
    opponents: 1,
    attributes: {
      name: ["Olvar Barbaren"],
      hp: [18],
    },
    win: 47,
    pages: {
      127: {
        playerAttackType: EAttackType.none,
        playerDefense: [0],
        damage: [""],
        defense: [0]
      },
      142: {
        playerAttackType: EAttackType.none,
        playerDefense: [0],
        damage: [""],
        defense: [0]
      },
      152: {
        playerAttackType: EAttackType.none,
        playerDefense: [0],
        damage: [""],
        defense: [0],
        enableAlly: true
      },
      165: {
        playerAttackType: EAttackType.none,
        playerDefense: [0],
        damage: [""],
        defense: [0],
        enableAlly: true
      },
      106: {
        playerAttackType: EAttackType.instant,
        playerDamage: "4",
        playerDefense: [0],
        damage: [""],
        defense: [0]
      },
      1060: {
        playerAttackType: EAttackType.defense,
        playerDamage: "",
        playerDefense: [8],
        damage: ["1T6+1"],
        defense: []
      },
      187: {
        playerAttackType: EAttackType.instant,
        playerDamage: "5",
        playerDefense: [0],
        damage: [""],
        defense: [0]
      },   
      23: {
        playerAttackType: EAttackType.kick,
        playerDefense: [8],
        playerDamage: "1T6+1",
        damage: ["1T6+1"],
        blockable: true,
        defense: [7],
        allyAttack: {
          damage: "1T6+1",
          defense: 8,
          ally: EOpponents.runeweaver
        }
      },
      92: {
        playerAttackType: EAttackType.punch,
        playerDamage: "1T6-1",
        playerDefense: [8],
        damage: ["1T6+2"],
        defense: [6],
        blockable: true,
        allyAttack: {
          damage: "1T6+1",
          defense: 8,
          ally: EOpponents.runeweaver
        }
      },
      39: {
        playerAttackType: EAttackType.throw,
        playerDefense: [6],
        damage: ["1T6+2"],
        blockable: false,
        defense: [4],
        allyAttack: {
          damage: "1T6+1",
          defense: 8,
          ally: EOpponents.runeweaver
        }
      },
    }
  },
  // There are two versions of the Olvar battle, one with the surviving Rune weaver as an ally
  olvar: {
    opponents: 1,
    attributes: {
      name: ["Olvar Barbaren"],
      hp: [18],
    },
    win: 344,
    pages: {
      8: {
        playerAttackType: EAttackType.instant,
        playerDamage: "4",
        playerDefense: [0],
        damage: [""],
        defense: [0]
      },
      800: {
        playerAttackType: EAttackType.defense,
        playerDamage: "",
        playerDefense: [8],
        damage: ["1T6+1"],
        defense: []
      },
      117: {
        playerAttackType: EAttackType.instant,
        playerDamage: "5",
        playerDefense: [0],
        damage: [""],
        defense: [0]
      },      
      302: {
        playerAttackType: EAttackType.kick,
        playerDefense: [8],
        playerDamage: "1T6+1",
        damage: ["1T6+1"],
        blockable: true,
        defense: [7],        
      },
      377: {
        playerAttackType: EAttackType.punch,
        playerDamage: "1T6-1",
        playerDefense: [8],
        damage: ["1T6+2"],
        defense: [6],
        blockable: true,
      },
      318: {
        playerAttackType: EAttackType.throw,
        playerDefense: [6],
        damage: ["1T6+2"],
        blockable: false,
        defense: [4],
      }
    }
  },
  priests: {
    opponents: 3,
    attributes: {
      name: ["1:a prästen", "2:a prästen", "3:e prästen"],
      hp: [12, 14, 13], 
    },
    win: 55,
    pages: {
      63: {
        playerAttackType: EAttackType.throw,
        playerDefense: [9, 8, 7],
        blockable: true,
        damage: ["1T6+1", "1T6+1", "1T6+1"],
        defense: [4, 5, 5],
      },
      82: {
        playerAttackType: EAttackType.punch,
        playerDefense: [9, 8, 7],
        playerDamage: "1T6",
        blockable: true,
        damage: ["1T6+1", "1T6+1", "1T6+1"],
        defense: [5, 7, 6],
      },
      71: {
        playerAttackType: EAttackType.kick,
        playerDefense: [9, 8, 7],
        playerDamage: "1T6+2",
        blockable: true,
        damage: ["1T6+1", "1T6+1", "1T6+1"],
        defense: [4, 5, 5],
      }
    }
  },
  efreti: {
    opponents: 1,
    attributes: {
      name: ["Efreti"],
      hp: [22],
    },
    win: 197,
    pages: {
      119: {
        playerAttackType: EAttackType.kick,
        playerDefense: [7],
        playerDamage: "1T6+2",
        directDamageOnPlayer: {
          state: EBattleStates.attack,
          onlyOnHit: true,
          damage: "1"
        },
        damage: ["2T6+1"],
        blockable: false,
        defense: [5],
      },
      131: {
        playerAttackType: EAttackType.punch,
        playerDamage: "1T6",
        playerDefense: [7],
        directDamageOnPlayer: {
          state: EBattleStates.attack,
          onlyOnHit: true,
          damage: "1"
        },
        damage: ["2T6+1"],
        defense: [4],
        blockable: false,
      },
      109: {
        playerAttackType: EAttackType.defense,
        playerDefense: [6],
        directDamageOnPlayer: {
          state: EBattleStates.defend,          
          damage: "4"
        },
        damage: ["2T6+1"],
        blockable: false,
        defense: [],
      },
      170: {
        playerAttackType: EAttackType.instant,
        playerDamage: "2",
        playerDefense: [0],
        damage: [""],
        defense: [0]
      },
    }
  },
  firstOfTwoMonks: {
    opponents: 1,
    attributes: {
      name: ["Den förste av Den Ledes präster"],
      hp: [16],
    },
    win: 279,
    pages: {
      168: {
        playerAttackType: EAttackType.defense,
        playerDamage: "",
        playerDefense: [6],
        damage: ["1T6+2"],
        defense: [5],
        blockable: false,
      },
      335: {
        playerAttackType: EAttackType.kick,
        playerDefense: [7],
        playerDamage: "1T6+2",
        damage: ["1T6+1"],
        blockable: false,
        defense: [6],
      },
      312: {
        playerAttackType: EAttackType.throw,
        playerDefense: [6],
        damage: ["1T6+1"],
        blockable: false,
        defense: [6],
      },
      322: {
        playerAttackType: EAttackType.punch,
        playerDamage: "1T6",
        playerDefense: [6],
        damage: ["1T6"],
        defense: [6],
        playerThrowDefense: [7],
        blockable: false,
      },
    }
  },
  secondOfTwoMonks: {
    opponents: 1,
    attributes: {
      name: ["Den andre av Den Ledes präster"],
      hp: [12],
    },
    win: 258,
    pages: {
      244: {
        playerAttackType: EAttackType.punch,
        playerDamage: "1T6",
        playerDefense: [6],
        damage: ["1T6"],
        defense: [6],
        playerThrowDefense: [7],
        blockable: false,
      },
      264: {
        playerAttackType: EAttackType.kick,
        playerDefense: [8],
        playerDamage: "1T6+2",
        damage: ["1T6"],
        blockable: true,
        defense: [7],
      },
      236: {
        playerAttackType: EAttackType.throw,
        playerDefense: [7],
        damage: ["1T6+2"],
        blockable: false,
        defense: [6],
        firstAttackBonus: 1
      },
    }
  },
  torturer: {
    opponents: 1,
    attributes: {
      name: ["Torteraren"],
      hp: [15],
    },
    win: 224,
    pages: {
      238: {
        playerAttackType: EAttackType.punch,
        playerDamage: "1T6",
        playerDefense: [7],
        damage: ["1T6"],
        defense: [6],
        blockable: true,
      },
      249: {
        playerAttackType: EAttackType.kick,
        playerDefense: [7],
        playerDamage: "1T6+2",
        damage: ["1T6+1"],
        blockable: true,
        defense: [5],
      },
      259: {
        playerAttackType: EAttackType.throw,
        playerDefense: [7],
        missDamage: -2,
        damage: ["1T6+1"],
        blockable: false,
        defense: [6],
      },
    }
  },
  runeweaver: {
    opponents: 1,
    attributes: {
      name: ["Runvävaren"],
      hp: [10],
    },
    win: 233,
    pages: {
      263: {
        playerAttackType: EAttackType.punch,
        playerDamage: "1T6",
        playerDefense: [6],
        damage: ["1T6+1"],
        defense: [5],
        blockable: true,
      },
      250: {
        playerAttackType: EAttackType.kick,
        playerDefense: [7],
        playerDamage: "1T6+2",
        damage: ["1T6+1"],
        blockable: true,
        defense: [6],
      },
      241: {
        playerAttackType: EAttackType.throw,
        playerDefense: [7],
        damage: ["1T6+2"],
        blockable: false,
        defense: [5],
      },
    }
  },  
  monks: {
    opponents: 2,
    attributes: {
      name: ["1:a munken", "2:a munken"],
      hp: [14, 13],
    },
    win: 324,
    pages: {
      286: {
        playerAttackType: EAttackType.throw,
        playerDefense: [7, 5],
        blockable: true,
        damage: ["1T6+1", "1T6+1"],
        defense: [5, 5],
      },
      353: {
        playerAttackType: EAttackType.punch,
        playerDefense: [8, 6],
        playerDamage: "1T6",
        blockable: true,
        damage: ["1T6+1", "1T6+1"],
        defense: [7, 7],
      },
      374: {
        playerAttackType: EAttackType.kick,
        playerDefense: [8, 6],
        playerDamage: "1T6",
        blockable: true,
        damage: ["1T6+3", "1T6+1", "1T6+1"],
        defense: [6, 7],
      }
    }
  },
  yaemon: {
    opponents: 1,
    attributes: {
      name: ["Yaemon"],
      hp: [20],
    },
    win: 420,
    pages: {
      24: {
        playerAttackType: EAttackType.none,
        playerDefense: [0],
        damage: [""],
        defense: [0],
      },  
      69: {
        playerAttackType: EAttackType.none,
        playerDefense: [0],
        damage: [""],
        defense: [0],
      },   
      690: {
        playerAttackType: EAttackType.none,
        playerDefense: [0],
        damage: [""],
        defense: [0],
      },   
      84: {
        playerAttackType: EAttackType.none,
        playerDefense: [0],
        damage: [""],
        defense: [0],
      },   
      150: {
        playerAttackType: EAttackType.none,
        playerDefense: [0],
        damage: [""],
        defense: [0],
      },   
      1500: {
        playerAttackType: EAttackType.none,
        playerDefense: [0],
        damage: [""],
        defense: [0],
      },   
      167: {
        playerAttackType: EAttackType.none,
        playerDefense: [0],
        damage: [""],
        defense: [0],
      },  
      228: {
        playerAttackType: EAttackType.instant,
        enableInnerForce: true,
        playerDamage: "2",
        playerDefense: [0],
        damage: [""],
        defense: [0]
      },     
      240: {
        playerAttackType: EAttackType.instant,
        enableInnerForce: true,
        playerDamage: "8",
        playerDefense: [0],
        damage: [""],
        defense: [0]
      },     
      245: {
        playerAttackType: EAttackType.none,
        playerDefense: [0],
        damage: [""],
        defense: [0],
      },  
      266: {
        playerAttackType: EAttackType.none,
        playerDefense: [0],
        damage: [""],
        defense: [0],
      },
      278: {
        playerAttackType: EAttackType.none,
        playerDefense: [0],
        damage: [""],
        defense: [0],
      },   
      301: {
        playerAttackType: EAttackType.none,
        playerDefense: [0],
        damage: [""],
        defense: [0],
      },    
      306: {
        playerAttackType: EAttackType.instant,
        enableInnerForce: true,
        playerDamage: "6",
        playerDefense: [0],
        damage: [""],
        defense: [0]
      },    
      308: {
        playerAttackType: EAttackType.none,
        playerDefense: [0],
        damage: [""],
        defense: [0],
      },   
      319: {
        playerAttackType: EAttackType.instant,
        enableInnerForce: true,
        playerDamage: "6",
        playerDefense: [0],
        damage: [""],
        defense: [0]
      },     
      340: {
        playerAttackType: EAttackType.instant,
        enableInnerForce: true,
        playerDamage: "4",
        playerDefense: [0],
        damage: [""],
        defense: [0]
      },     
      330: {
        playerAttackType: EAttackType.none,
        playerDefense: [0],
        damage: [""],
        defense: [0],
      },   
      350: {
        playerAttackType: EAttackType.none,
        playerDefense: [0],
        damage: [""],
        defense: [0],
      },   
      367: {
        playerAttackType: EAttackType.none,
        playerDefense: [0],
        damage: [""],
        defense: [0],
      },   
      3670: {
        playerAttackType: EAttackType.none,
        playerDefense: [0],
        damage: [""],
        defense: [0],
      },  
      378: {
        playerAttackType: EAttackType.none,
        playerDefense: [0],
        damage: [""],
        defense: [0],
      },   
      390: {
        playerAttackType: EAttackType.none,
        playerDefense: [0],
        damage: [""],
        defense: [0],
      },   
      401: {
        playerAttackType: EAttackType.none,
        playerDefense: [0],
        damage: [""],
        defense: [0],
      },   
      410: {
        playerAttackType: EAttackType.none,
        playerDefense: [0],
        damage: [""],
        defense: [0],
      },   
    }
  },
}

export default opponents