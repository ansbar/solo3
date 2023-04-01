import { defineStore } from 'pinia'
import { Story, Story_choiceSpec, Story_battle } from './storyInterfaces'

export const useStoryStore = defineStore('story', {
  state: (): Story => (
    { 
      story_id: 0,
      choices: [],
      choiceSpec: {
        type: "",
        attack: "",
        defense: 0,
        name: ""    
      },
      image: false,
      items: [],
      battle: {
        instantAttack: "",
        opponent: "",   
        attackModifier: 0,
        damageModifier: 0,    
        win: 0,
        loss: 0,
        miss: 0
      }
    }
  ),
  actions: {
    set_story_id (payload: number) {
      this.story_id = payload
  },
  set_story_choices (payload: Array<string>) {
      this.choices = payload
  },
  set_story_choiceSpec (payload: Story_choiceSpec) {
      this.choiceSpec = payload
  },
  set_story_battle (payload: Story_battle ) {
      this.battle = payload
  },
  set_story_image (payload: boolean) {
      this.image = payload
  },
  }
})
