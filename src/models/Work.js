export class Work {
  constructor(id, title, category, year, thumbnail, description, mainType = 'photography', mediaUrl = null, images = []) {
    this.id = id;
    this.title = title;
    this.category = category;
    this.year = year;
    this.thumbnail = thumbnail;
    this.mediaUrl = mediaUrl;
    this.description = description;
    this.mainType = mainType;
    this.images = images;
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
