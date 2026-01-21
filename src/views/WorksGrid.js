export const WorksGrid = (vm) => {
  if (vm.viewMode === 'list') {
    return `
      <div class="works-list">
        ${vm.filteredWorks.map(work => `
          <div class="list-item">
            <span class="item-year">${work.year}</span>
            <span class="item-title">${work.title}</span>
            <span class="item-cat">${work.category}</span>
          </div>
        `).join('')}
      </div>
    `;
  }

  return `
    <div class="grid-container">
      ${vm.filteredWorks.map(work => `
        <div class="work-item" data-id="${work.id}">
          <div class="work-image-wrapper">
            <img src="${vm.fixPath(work.thumbnail)}" alt="${work.title}" loading="lazy" />
            <div class="work-overlay">
              <div class="work-info">
                <h3>${work.title}</h3>
                <p>${work.category}</p>
              </div>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
};
