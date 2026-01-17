export class WorksViewModel {
  constructor(works = []) {
    this.works = works;
    this.filteredWorks = works;
    this.currentCategory = 'all';
    this.mainType = 'photography'; // 'photography' or 'design'
    this.viewMode = 'grid'; // 'grid' or 'list'
    this.currentPage = 'home'; // 'home', 'works', 'about', 'services'
    this.listeners = [];
  }

  setCurrentPage(page) {
    this.currentPage = page;
    this.notify();
  }

  setMainType(type) {
    this.mainType = type;
    this.currentCategory = 'all';
    this.updateFilteredWorks();
    this.notify();
  }

  setCategory(category) {
    this.currentCategory = category;
    this.updateFilteredWorks();
    this.notify();
  }

  updateFilteredWorks() {
    let results = this.works.filter(work => work.mainType === this.mainType);
    if (this.currentCategory !== 'all') {
      results = results.filter(work => work.category === this.currentCategory);
    }
    this.filteredWorks = results;
  }

  subscribe(listener) {
    this.listeners.push(listener);
  }

  notify() {
    this.listeners.forEach(listener => listener(this));
  }

  toggleViewMode() {
    this.viewMode = this.viewMode === 'grid' ? 'list' : 'grid';
    this.notify();
  }

  getYears() {
    const years = [...new Set(this.works.map(work => work.year))];
    return years.sort((a, b) => b - a);
  }
}
