export interface MatchInfo {
    matchType: string;
    seriesName: string;
    // Add other properties as needed
  }
  
  export interface ApiData {
    // typeMatches: MatchInfo[];
    // Add other properties as needed
    typeMatches: {
        matchType: string;
        seriesMatches: {
            seriesAdWrapper: {
                matches: any[];
            };
        }[];
    }[];
  }
  