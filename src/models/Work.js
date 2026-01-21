export class Work {
  constructor(id, title, category, year, thumbnail, description, mainType = 'photography', videoUrl = null) {
    this.id = id;
    this.title = title;
    this.category = category;
    this.year = year;
    this.thumbnail = thumbnail;
    this.videoUrl = videoUrl;
    this.description = description;
    this.mainType = mainType; // 'photography' or 'design'
  }
}

export const Categories = {
  ALL: 'all',
  ADVERTISING: 'advertising',
  EDITORIAL: 'editorial',
  VIDEO: 'video',
  PORTRAIT: 'portrait',
  OTHER: 'other'
};
