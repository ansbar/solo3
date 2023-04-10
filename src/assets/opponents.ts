import { IOpponents } from "../assets/interfaces/opponents"
import { EAttackType, EAbilities } from "../assets/enums"

const opponents: IOpponents = {
  gorobei: {
    opponents: 1,
    attributes: {
      name: ["Gorobei"],
      hpMax: [14],
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
      hpMax: [16],
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
        playerDamage: "1T6",
        damage: ["2T6"],
        blockable: false,
        defense: [8],
      },
    }
  },
  piratecaptain: {
    opponents: 1,
    attributes: {
      name: ["Sjörövarkapten"],
      hpMax: [12],
      hp: [12],
      counter: 4,
      counterGoto: 45,
    },
    win: 58,
    loss: 45,
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
      hpMax: [12, 9, 10],
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
      hpMax: [25],
      hp: [25],
    },
    win: 110,
    loss: 95,
    pages: {
      325: {
        playerAttackType: EAttackType.punch,
        playerDamage: "1T6",
        playerDefense: [8],
        damage: ["2T6"],
        defense: [3],
        blockable: true,
      },
      316: {
        playerAttackType: EAttackType.kick,
        playerDefense: [8],
        playerDamage: "1T6+2",
        damage: ["2T6+1"],
        defense: [4],
      }
    }
  },
  snowGiant: {
    opponents: 1,
    attributes: {
      name: ["Snöjätten"],
      hpMax: [22],
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
      hpMax: [10],
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
      hpMax: [18],
      hp: [18]
    },
    win: 110,
    loss: 95,
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
        playerDefense: [7],
        damage: ["1T6+3"],
        blockable: false,
        defense: [6],
      }
    }
  },
}

export default opponents