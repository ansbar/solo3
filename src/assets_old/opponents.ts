import txt from "./swedish"
import { IFopponents } from '@/assets/interfaces'
import { EnumAttackType, EnumAbilities } from '@/assets/enums'

const opponents: IFopponents = {
    "gorobei": {
        "opponents": 1,
        "attributes": {
            "name": ["Gorobei"],
            "hp_max": [14],
            "hp": [14],
        },        
        "attacks": { 
            17: {
                "player_attackType": EnumAttackType.kick,
                "player_damage": "1T6+2",
                "player_defense": [7],             
                "blockable": true,
                "damage": ["1T6"],
                "defense": [6],
                   
                "text": txt[17].stillAlive,
            },
            35: {
                "player_attackType": EnumAttackType.punch,
                "player_defense": [7],
                "player_damage": "1T6",
                "blockable": true,
                "damage": ["1T6"],                
                "defense": [7],
                "text": txt[35].stillAlive,
            }
        }      
    },
    "humanEater": {
        "opponents": 1,
        "attributes": {
            "name": ["Människoätaren"],
            "hp_max": [16],
            "hp": [16],
        },              
        "attacks": { 
            257: {
                "player_attackType": EnumAttackType.instant,
                "player_damage": "1T6"
            },
            310: {
                "player_attackType": EnumAttackType.punch,
                "player_damage": "1T6",
                "player_defense": [8],      
                "damage": ["2T6"],
                "defense": [4],
                "blockable": true,
                "text": txt[310].stillAlive,
            },
            332: {
                "player_attackType": EnumAttackType.kick,
                "player_defense": [7],
                "player_damage": "1T6+2",
                "damage": ["2T6"],                
                "blockable": true,
                "defense": [5],
                "text": txt[332].stillAlive,
            },
            345: {
                "player_attackType": EnumAttackType.throw,
                "player_defense": [7],
                "player_damage": "1T6",
                "damage": ["2T6"],                
                "blockable": false,
                "defense": [8],
                "text": txt[345].stillAlive,
            }
        }      
    },
    "piratecaptain": {
        "opponents": 1,
        "attributes": {
            "name": ["Sjörövarkapten"],
            "hp_max": [12],
            "hp": [12],
            "counter": 4,
            "counter_goto": 45,
        },              
        "attacks": { 
            67: {
                "player_attackType": EnumAttackType.kick,
                "player_defense": [7],
                "player_damage": "1T6+2",
                "damage": ["1T6+2"],                
                "blockable": true,
                "defense": [6],
                "text": txt[67].stillAlive,
            },
            77: {
                "player_attackType": EnumAttackType.punch,
                "player_damage": "1T6",
                "player_defense": [8],      
                "damage": ["1T6+2"],
                "defense": [6],
                "blockable": true,
                "text": txt[77].stillAlive,
            },            
            87: {
                "player_attackType": EnumAttackType.throw,
                "player_defense": [7],
                "damage": ["1T6"],                
                "blockable": false,
                "defense": [6],
                "text": txt[87].stillAlive,
            }
        }      
    },
    "soldiers": {
        "opponents": 3,
        "attributes": {
            "name": ["Ung kapten", "1:a soldaten", "2:a soldaten"],
            "hp_max": [12, 9, 10],
            "hp": [12, 9, 10],
        },        
        "attacks": { 
            237: {
                "player_attackType": EnumAttackType.throw,
                "player_defense": [9, 8, 7],
                "blockable": true,
                "damage": ["1T6+1","1T6+1","1T6+1"],         
                "defense": [5, 5, 5],                  
                "text": txt[237].stillAlive,
            },
            248: {
                "player_attackType": EnumAttackType.punch,
                "player_defense": [9, 8, 7],
                "player_damage": "1T6",
                "blockable": true,
                "damage": ["1T6+3","1T6+1","1T6+1"],
                "defense": [4, 4, 4],
                "text": txt[248].stillAlive,
            },
            256: {
                "player_attackType": EnumAttackType.kick,
                "player_defense": [9, 8, 7],
                "player_damage": "1T6",
                "blockable": true,
                "damage": ["1T6","1T6","1T6"],
                "defense": [5, 4, 4],
                "text": txt[256].stillAlive,
            }
        }      
    },
    "giant": {
        "opponents": 1,
        "attributes": {
            "name": ["Tvåhövdad jätte"],
            "hp_max": [25],
            "hp": [25],
        },              
        "attacks": { 
            325: {
                "player_attackType": EnumAttackType.punch,
                "player_damage": "1T6",
                "player_defense": [8],      
                "damage": ["2T6"],
                "defense": [3],
                "blockable": true,
                "text": txt[325].stillAlive,
            },
            316: {
                "player_attackType": EnumAttackType.kick,
                "player_defense": [8],
                "player_damage": "1T6+2",
                "damage": ["2T6+1"],                
                "defense": [4],
                "text": txt[316].stillAlive,
            }
        }      
    },
    "snowGiant": {
        "opponents": 1,
        "attributes": {
            "name": ["Snöjätte"],
            "hp_max": [22],
            "hp": [22]
        },              
        "attacks": { 
            184: {
                "player_attackType": EnumAttackType.kick,
                "player_defense": [5],
                "player_damage": "1T6+2",
                "damage": ["1T6+3"],                
                "blockable": true,
                "defense": [6],
                "text": txt[184].stillAlive,
            },
            160: {
                "player_attackType": EnumAttackType.punch,
                "player_damage": "1T6",
                "player_defense": [6],      
                "damage": ["1T6+3"],
                "defense": [5],
                "blockable": true,
                "text": txt[160].stillAlive,
            },            
            202: {
                "player_attackType": EnumAttackType.throw,
                "player_defense": [7],
                "player_attackValue": 3,
                "damage": ["1T6+3"],                
                "blockable": false,
                "defense": [6],
                "text": txt[202].stillAlive,
            }
        }      
    },
    "cobraman": {
        "opponents": 1,
        "attributes": {
            "name": ["Kobraman"],
            "hp_max": [10],
            "hp": [10],
            "missAbility": EnumAbilities.immunity
        },              
        "attacks": { 
            25: {
                "player_attackType": EnumAttackType.kick,
                "player_defense": [7],
                "player_damage": "1T6+2",
                "damage": ["1T6+2"],                
                "blockable": true,
                "defense": [6],
                "text": txt[25].stillAlive,
            },
            42: {
                "player_attackType": EnumAttackType.punch,
                "player_damage": "1T6",
                "player_defense": [7],      
                "damage": ["1T6+2"],
                "defense": [8],
                "blockable": false,
                "text": txt[42].stillAlive,
            },            
            13: {
                "player_attackType": EnumAttackType.throw,
                "player_defense": [7],
                "damage": ["1T6"],                
                "blockable": false,
                "defense": [6],
                "text": txt[13].stillAlive,
            }
        }      
    },
    "goblin": {
        "opponents": 1,
        "attributes": {
            "name": ["Vätte"],
            "hp_max": [18],
            "hp": [18]
        },              
        "attacks": { 
            281: {
                "player_attackType": EnumAttackType.kick,
                "player_defense": [8],
                "player_damage": "1T6+2",
                "damage": ["1T6+3"],                
                "blockable": true,
                "defense": [6],
                "text": txt[281].stillAlive,
            },
            293: {
                "player_attackType": EnumAttackType.punch,
                "player_damage": "1T6",
                "player_defense": [8],      
                "damage": ["1T6+2"],
                "defense": [5],
                "blockable": false,
                "text": txt[293].stillAlive,
            },            
            267: {
                "player_attackType": EnumAttackType.throw,
                "player_defense": [7],
                "damage": ["1T6+3"],                
                "blockable": false,
                "defense": [6],
                "text": txt[267].stillAlive,
            }
        }      
    },
}

export default opponents