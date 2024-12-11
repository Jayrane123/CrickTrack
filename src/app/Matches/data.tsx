export interface MatchReInfo {
    matchId: number;
    seriesId: number;
    seriesName: string;
    matchDesc: string;
    matchInfo:{
      matchId: number;
      seriesId: number;
      seriesName: string;
      matchDesc: string;
      matchFormat: string;
    startDate: string;
    endDate: string;
    state: string;
    status: string;
    team1: {
      teamId: number;
      teamName: string;
      teamSName: string;
      imageId: number;
    };
    team2: {
      teamId: number;
      teamName: string;
      teamSName: string;
      imageId: number;
    };
    venueInfo: {
      id: number;
      ground: string;
      city: string;
      timezone: string;
      latitude: string;
      longitude: string;
    };
    currBatTeamId?: number;
    seriesStartDt: string;
    seriesEndDt: string;
    isTimeAnnounced: boolean;
    stateTitle: string;
    }
  }
  
  export interface SeriesAdWrapper {
    seriesId: number;
    seriesName: string;
    matchInfo:MatchReInfo[];
    matches: MatchReInfo[];
  }
  
  export interface ApiData {
    typeMatches: {
      matchType: string;
      seriesMatches: {
        seriesAdWrapper: SeriesAdWrapper;
      }[];
    }[];
  }
  