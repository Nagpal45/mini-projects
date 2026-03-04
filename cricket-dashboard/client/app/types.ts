export interface Team {
  name: string;
  totalScore: number;
  wickets: number;
  overs: number;
}

export interface Player {
  _id: string | number | readonly string[] | undefined;
  name: string;
  team: string;
  role: string;
  runs: number;
  ballsFaced: number;
  wicketsTaken: number;
  oversBowled: number;
  runsConceded: number;
  fours: number;
}

export interface BallByBall {
  ball: number;
  runs: number;
  description: string;
}

export interface Match {
  id: string;
  teamA: Team;
  teamB: Team;
  inningBowlers: Player[];
  inningStriker: Player;
  inningNonStriker: Player;
  ballbyball: BallByBall[];
  runs: number[];
  teamAPlayers: Player[];
  teamBPlayers: Player[];
}
