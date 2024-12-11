export interface CoverImage {
    id: number;
    caption: string;
    source: string;
  }
  
  export interface Story {
    id: number;
    pubTime: number;
    imageId: number;
    hline: string;
    intro: string;
    source: string;
    storyType: string;
    seoHeadline: string;
    context: string;
    coverImage: CoverImage;
  }
  
  export interface Ad {
    name: string;
    layout: string;
    position: number;
  }
  
  export interface StoryOrAd {
    story?: Story;
    ad?: Ad;
  }
  
  export interface ApiData {
    storyList: StoryOrAd[];
    lastUpdatedTime: string;
  }
  
  
  