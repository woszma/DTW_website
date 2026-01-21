export const WorkDetailModal = (work, vm) => {
    if (!work) return '';

    return `
    <div class="modal-overlay" id="modal-overlay">
      <div class="modal-content">
        <button class="modal-close" id="modal-close">&times;</button>
        
        <div class="modal-body">
          <div class="modal-media">
            <img src="${vm.fixPath(work.thumbnail)}" alt="${work.title}" />
          </div>
          
          <div class="modal-info">
            <div class="modal-header">
              <span class="modal-year">${work.year}</span>
              <h2 class="modal-title">${work.title}</h2>
              <span class="modal-category">${work.category}</span>
            </div>
            
            <div class="modal-description">
              <p>${work.description || 'No description available.'}</p>
            </div>
            
            ${work.mediaUrl ? `
              <div class="modal-actions">
                <a href="${vm.fixPath(work.mediaUrl)}" target="_blank" class="video-btn">
                  VIEW VIDEO / 影片連結
                </a>
              </div>
            ` : ''}
          </div>
        </div>
      </div>
    </div>
  `;
};
