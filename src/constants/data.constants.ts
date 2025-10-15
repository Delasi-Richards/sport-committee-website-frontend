// A file containing mock data for testing
// Remove all when the backend is ready

// Homepage
export const homeCarouselData = [
  {
    image: "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    header: "Image 1",
    subHeader: "This is image 1"
  },
  {
    image: "https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    header: "Image 2",
    subHeader: "This is image 2"
  },
  {
    image: "https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    header: "Image 3",
    subHeader: "This is image 3"
  },
  {
    image: "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600",
    header: "Image 4",
    subHeader: "This is image 4"
  }
]
export const homeUpcomingMatchesData = [
  {
    teamA: "Team A",
    teamB: "Team B",
    teamALogo: "https://picsum.photos/32",
    teamBLogo: "https://picsum.photos/33",
    datetime: new Date("2025-01-01T11:30:00Z")
  },
  {
    teamA: "Team C",
    teamB: "Team D",
    teamALogo: "https://picsum.photos/34",
    teamBLogo: "https://picsum.photos/35",
    datetime: new Date("2025-02-02T13:30:00Z")
  },
  {
    teamA: "Team E",
    teamB: "Team F",
    teamALogo: "https://picsum.photos/36",
    teamBLogo: "https://picsum.photos/37",
    datetime: new Date("2025-03-03T15:30:00Z")
  },
  {
    teamA: "Team G",
    teamB: "Team H",
    teamALogo: "https://picsum.photos/38",
    teamBLogo: "https://picsum.photos/39",
    datetime: new Date("2025-04-04T17:30:00Z")
  },
]
export const homeStatisticsData = [
  {
    "sport": "Basketball",
    "statistic": "3 Pointers",
    "standings": [
      {"name": "Player 1", "value": 10},
      {"name": "Player 2", "value": 8},
      {"name": "Player 3", "value": 6},
      {"name": "Player 4", "value": 5},
    ]
  },
  {
    "sport": "Football",
    "statistic": "Goals",
    "standings": [
      {"name": "Player 1", "value": 23},
      {"name": "Player 2", "value": 21},
      {"name": "Player 3", "value": 19},
      {"name": "Player 4", "value": 15},
    ]
  },
  {
    "sport": "Volleyball",
    "statistic": "Points",
    "standings": [
      {"name": "Player 1", "value": 15},
      {"name": "Player 2", "value": 10},
      {"name": "Player 3", "value": 9},
      {"name": "Player 4", "value": 5},
    ]
  },
  {
    "sport": "Basketball",
    "statistic": "Points",
    "standings": [
      {"name": "Player 1", "value": 50},
      {"name": "Player 2", "value": 40},
      {"name": "Player 3", "value": 30},
      {"name": "Player 4", "value": 20},
    ]
  },
  {
    "sport": "Football",
    "statistic": "Assists",
    "standings": [
      {"name": "Player 1", "value": 19},
      {"name": "Player 2", "value": 18},
      {"name": "Player 3", "value": 17},
      {"name": "Player 4", "value": 16},
    ]
  },
]
export const homeNewsData = [
  {
    "title": "League Starts Next Week",
    "imageCard": "https://picsum.photos/800",
    "date": new Date("2025-01-01"),
    "tags": ["Basketball", "League"]
  },
  {
    "title": "Player Moves To New Team",
    "imageCard": "https://picsum.photos/801",
    "date": new Date("2025-02-02"),
    "tags": ["Football", "Transfers"]
  },
  {
    "title": "Inter-school Competition Kicks Off",
    "imageCard": "https://picsum.photos/802",
    "date": new Date("2025-03-03"),
    "tags": ["Football", "Basketball", "Volleyball"]
  },
]

// Football
export const footballTeams = [
  "Dragons",
  "Elites",
  "Falcons",
  "Lions",
  "Vikings",
  "Warriors"
]
export const footballLeagueTableData = [
  {
    name: "Dragons",
    MP: "0",
    W: "0",
    D: "0",
    L: "0",
    GF: "0",
    GA: "0",
    GD: "0",
    PTS: "0"
  },
  {
    name: "Elites",
    MP: "0",
    W: "0",
    D: "0",
    L: "0",
    GF: "0",
    GA: "0",
    GD: "0",
    PTS: "0"
  },
  {
    name: "Falcons",
    MP: "0",
    W: "0",
    D: "0",
    L: "0",
    GF: "0",
    GA: "0",
    GD: "0",
    PTS: "0"
  },
  {
    name: "Lions",
    MP: "0",
    W: "0",
    D: "0",
    L: "0",
    GF: "0",
    GA: "0",
    GD: "0",
    PTS: "0"
  },
  {
    name: "Vikings",
    MP: "0",
    W: "0",
    D: "0",
    L: "0",
    GF: "0",
    GA: "0",
    GD: "0",
    PTS: "0"
  },
  {
    name: "Warriors",
    MP: "0",
    W: "0",
    D: "0",
    L: "0",
    GF: "0",
    GA: "0",
    GD: "0",
    PTS: "0"
  }
]
export const footballStatisticsData = [
  {
    "sport": "Football",
    "statistic": "Goals",
    "standings": [
      {"name": "Player 1", "team": "Team", "value": 23},
      {"name": "Player 2", "team": "Team", "value": 21},
      {"name": "Player 3", "team": "Team", "value": 19},
      {"name": "Player 4", "team": "Team", "value": 15},
    ]
  },
  {
    "sport": "Football",
    "statistic": "Assists",
    "standings": [
      {"name": "Player 1", "team": "Team", "value": 19},
      {"name": "Player 2", "team": "Team", "value": 18},
      {"name": "Player 3", "team": "Team", "value": 17},
      {"name": "Player 4", "team": "Team", "value": 16},
    ]
  }
]
export const footballNewsData = [
  {
    "title": "League Starts Next Week",
    "imageCard": "https://picsum.photos/800",
    "date": new Date("2025-01-01"),
    "tags": ["Football", "League"]
  },
  {
    "title": "Player Moves To New Team",
    "imageCard": "https://picsum.photos/801",
    "date": new Date("2025-02-02"),
    "tags": ["Football", "Transfers"]
  },
  {
    "title": "Inter-school Competition Kicks Off",
    "imageCard": "https://picsum.photos/802",
    "date": new Date("2025-03-03"),
    "tags": ["Football", "Basketball", "Volleyball"]
  },
]

// Basketball
export const basketballTeams = [
  "Grim Reapers",
  "Olympus",
  "Snipers",
  "Veterans"
]
export const basketballLeagueTableData = [
  {
    name: "Grim Reapers",
    W: "0",
    L: "0",
    W_PCT: "0%",
    GB: "0",
    STRK: "W0"
  },
  {
    name: "Olympus",
    W: "0",
    L: "0",
    W_PCT: "0%",
    GB: "0",
    STRK: "W0"
  },
  {
    name: "Snipers",
    W: "0",
    L: "0",
    W_PCT: "0%",
    GB: "0",
    STRK: "W0"
  },
  {
    name: "Veterans",
    W: "0",
    L: "0",
    W_PCT: "0%",
    GB: "0",
    STRK: "W0"
  }
]
export const basketballStatisticsData = [
  {
    "sport": "Basketball",
    "statistic": "Points",
    "standings": [
      {"name": "Player 1", "team": "Team", "value": 23},
      {"name": "Player 2", "team": "Team", "value": 21},
      {"name": "Player 3", "team": "Team", "value": 19},
      {"name": "Player 4", "team": "Team", "value": 15},
    ]
  },
  {
    "sport": "Basketball",
    "statistic": "3-Pointers",
    "standings": [
      {"name": "Player 1", "team": "Team", "value": 19},
      {"name": "Player 2", "team": "Team", "value": 18},
      {"name": "Player 3", "team": "Team", "value": 17},
      {"name": "Player 4", "team": "Team", "value": 16},
    ]
  }
]
export const basketballNewsData = [
  {
    "title": "League Starts Next Week",
    "imageCard": "https://picsum.photos/800",
    "date": new Date("2025-01-01"),
    "tags": ["Basketball", "League"]
  },
  {
    "title": "Player Moves To New Team",
    "imageCard": "https://picsum.photos/801",
    "date": new Date("2025-02-02"),
    "tags": ["Basketball", "Transfers"]
  },
  {
    "title": "Inter-school Competition Kicks Off",
    "imageCard": "https://picsum.photos/802",
    "date": new Date("2025-03-03"),
    "tags": ["Football", "Basketball", "Volleyball"]
  },
]

// Volleyball
export const volleyballTeams = []
export const volleyballLeagueTableData = [
  {
    name: "Team A",
    MP: "0",
    W: "0",
    L: "0",
    SETS: "0"
  },
  {
    name: "Team B",
    MP: "0",
    W: "0",
    L: "0",
    SETS: "0"
  },
  {
    name: "Team C",
    MP: "0",
    W: "0",
    L: "0",
    SETS: "0"
  },
  {
    name: "Team D",
    MP: "0",
    W: "0",
    L: "0",
    SETS: "0"
  }
]
export const volleyballStatisticsData = [
  {
    "sport": "Volleyball",
    "statistic": "Attacks",
    "standings": [
      {"name": "Player 1", "team": "Team", "value": 23},
      {"name": "Player 2", "team": "Team", "value": 21},
      {"name": "Player 3", "team": "Team", "value": 19},
      {"name": "Player 4", "team": "Team", "value": 15},
    ]
  },
  {
    "sport": "Volleyball",
    "statistic": "Digs",
    "standings": [
      {"name": "Player 1", "team": "Team", "value": 19},
      {"name": "Player 2", "team": "Team", "value": 18},
      {"name": "Player 3", "team": "Team", "value": 17},
      {"name": "Player 4", "team": "Team", "value": 16},
    ]
  }
]
export const volleyballNewsData = [
  {
    "title": "League Starts Next Week",
    "imageCard": "https://picsum.photos/800",
    "date": new Date("2025-01-01"),
    "tags": ["Volleyball", "League"]
  },
  {
    "title": "Player Moves To New Team",
    "imageCard": "https://picsum.photos/801",
    "date": new Date("2025-02-02"),
    "tags": ["Volleyball", "Transfers"]
  },
  {
    "title": "Inter-school Competition Kicks Off",
    "imageCard": "https://picsum.photos/802",
    "date": new Date("2025-03-03"),
    "tags": ["Football", "Basketball", "Volleyball"]
  },
]