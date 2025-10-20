export type carouselContent = {
  image: string,
  header: string,
  subHeader: string
}

export type match = {
  teamA: string,
  teamB: string,
  teamALogo: string,
  teamBLogo: string,
  datetime: Date
}

export type statistic = {
  sport: string,
  statistic: string,
  standings: {
    name: string,
    value: number
  }[]
}

export type news = {
  title: string,
  imageCard: string,
  date: Date,
  tags: string[]
}

export type sport = {
  id: string,
  name: string,
  teams?: team[]
}

export type team = {
  id: string,
  name: string,
  logo: string,
  coach?: string,
  sportsId: string,
  division: string,
  players?: player[],
  sports: sport
}

export type player = {
  id: string,
  name: string,
  positions: string[],
  jerseyNumber: number,
  teamId: string,
  team: team
}
