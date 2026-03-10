function displayPhotoThumbnail(photoIndex, photoId, photoSrc, photoAlt) {
    return `
        <img onclick="openDialogPhotoOverlay('${photoIndex}')"
            class="ImagePhotoGallery"
            id=${photoId}
            src=${photoSrc}
            alt=${photoAlt}
        />`;
}

function displayPhotoOverlay(currentPhotoIndex, photoSrc, photoAlt, photoDescription, photoCopyright, photoNr) {
    return `
        <header>
            <h3>${photoDescription}</h3>
            <button onclick="closeDialogPhotoOverlay()">
                <img 
                    src="./img/icon-close-48-dark.svg" 
                    alt="X-Symbol zum Schließen des Dialogfensters"/>
            </button>
        </header>
        <figure>
            <img class="ImagePhotoOverlay"
                src=${photoSrc}
                alt=${photoAlt}
            <figcaption><span class="figcaption">${photoCopyright}</span></figcaption>
        </figure>
        <footer>
            <button onclick="renderPreviousPhotoOverlay(${currentPhotoIndex})"
                class="button-reverse">
                <img 
                    src="./img/icon-arrow-back-48-dark.svg" 
                    alt="Pfeil-Symbol nach links, um zum vorherigen Bild zu gelangen."/>
            </button>
            <span>${photoNr}</span>
            <button onclick="renderNextPhotoOverlay(${currentPhotoIndex})">
                <img 
                    src="./img/icon-arrow-forward-48-dark.svg" 
                    alt="Pfeil-Symbol nach rechts, um zum nächsten Bild zu gelangen."/>
            </button>
        </footer>`;
}