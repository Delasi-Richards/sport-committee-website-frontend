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

export type team = {
  name: string,
  logo: string,
  sport: string
}