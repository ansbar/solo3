export interface Story_choiceSpec {
  type: string
  attack: string
  defense: number
  name: string  
}

export interface Story_battle {
  instantAttack: string
  opponent: string   
  attackModifier: number
  damageModifier: number    
  win: number
  loss: number
  miss: number
}

export interface Story {
  story_id: number,
  choices: Array<string>,
  choiceSpec?: Story_choiceSpec,
  image: boolean,
  items: Array<string>,
  battle: Story_battle
}