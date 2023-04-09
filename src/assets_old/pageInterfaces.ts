export interface Page {
  mainText: string
  choices?: string[]
  stillAlive?: string
  miss?: string
  directWin?: string
}

export interface PagesText {
  [key: number]: Page
}