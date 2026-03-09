const DIALOG_REF = document.getElementById("#DialogPhotoOverlay");
let foldernames = [];
let photos_array = [];
let photo_overlay = document.getElementById("#PhotoOverlay");

/** 
 * Initialer Aufruf beim Starten der Seite
 */
function init() {
    console.log(foldernames);
    console.log(photos_array);

    getPhotofoldername();
    getAllPhotoData();
    renderPhotoThumbnail();
}

/** 
 * Photofoldername über ID erhalten
 */
function getPhotofoldername() {
    const FOLDER_LIST = document.getElementsByClassName("ImageContainerPhotoGallery");
    for (let i = 0; i < FOLDER_LIST.length; i++) {
        foldernames.push(FOLDER_LIST[i].id);
    }
}
function getAllPhotoData() {
    for (let i = 0; i < foldernames.length; i++) {
        getPhotoDataPerFolder(foldernames[i]);  
    }
}

function getPhotoDataPerFolder(foldername) {
    let photos_per_folder = All_PHOTOS[foldername];

    for (let i = 0; i < photos_per_folder.length; i++) {
        let photo_id = foldername + "-" + (i+1);
        let photo_src = "./photos/" + foldername + "/" + photos_per_folder[i].filename;
        let photo_alt = "Foto: " + photos_per_folder[i].description;
        let photo_description = photos_per_folder[i].description;
        let photo_copyright = "&#169 " + photos_per_folder[i].copyright;
        let photo_nr = photos_per_folder[i].folder + ":<br>" + (i+1) + " von " + photos_per_folder.length;

        let photo_data =[{Foldername:foldername}, {photoId:photo_id}, {photoSrc:photo_src}, {photoAlt:photo_alt}, {photoDescription:photo_description}, {photoCopyright:photo_copyright}, {photoNr:photo_nr}];
        photos_array.push(photo_data);

        /**
         * Variante über Object Constructor Function:
         */
        // let photo_data = new PhotoData(photo_id, photo_src, photo_alt, photo_description, photo_copyright, photo_nr);
        // let Photo = [{photoId:photo_data.photoId}, {photoSrc:photo_data.photoSrc}, {photoAlt:photo_data.photoAlt}, {photoDescription:photo_data.photoDescription}, {photoCopyright:photo_data.photoCopyright}, {photoNr:photo_data.photoNr}];
        // photos_array.push(Photo);
    }
}

/**
 * Variante über Object Constructor Function:
 */
// function PhotoData(photo_id, photo_src, photo_alt, photo_description, photo_copyright, photo_nr) {
//     this.photoId = photo_id;
//     this.photoSrc = photo_src;
//     this.photoAlt = photo_alt;
//     this.photoDescription = photo_description;
//     this.photoCopyright = photo_copyright;
//     this.photoNr = photo_nr;
// }

function renderPhotoThumbnail() {
    let photos_thumbnail_container_per_folder = "";
    for (let i = 0; i < photos_array.length; i++) {
        photos_thumbnail_container_per_folder = document.getElementById(photos_array[i][0]['Foldername']); 
        photos_thumbnail_container_per_folder.innerHTML += 
            displayPhotoThumbnail(
                photos_array[i][1]['photoId'], 
                photos_array[i][2]['photoSrc'], 
                photos_array[i][3]['photoAlt'], 
                photos_array[i][4]['photoDescription'], 
                photos_array[i][5]['photoCopyright'], 
                photos_array[i][6]['photoNr']); 
    }
}

function displayPhotoThumbnail(photoId, photoSrc, photoAlt, photoDescription, photoCopyright, photoNr) {
    return `
        <img onclick="openDialogPhotoOverlay('${photoSrc}', '${photoAlt}', '${photoDescription}', '${photoCopyright}', '${photoNr}')"
            class="ImagePhotoGallery"
            id=${photoId}
            src=${photoSrc}
            alt=${photoAlt}
        />`;
}

function closeDialogPhotoOverlay() {
    DIALOG_REF.close();
}

function openDialogPhotoOverlay(photoSrc, photoAlt, photoDescription, photoCopyright, photoNr) {
    DIALOG_REF.showModal();
    renderPhotoOverlay(photoSrc, photoAlt, photoDescription, photoCopyright, photoNr);
}

function renderPhotoOverlay(photoSrc, photoAlt, photoDescription, photoCopyright, photoNr) {
    photo_overlay.innerHTML = "";
    photo_overlay.innerHTML = displayPhotoOverlay(photoSrc, photoAlt, photoDescription, photoCopyright, photoNr);
}

function displayPhotoOverlay(photoSrc, photoAlt, photoDescription, photoCopyright, photoNr) {
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
            <button oncklick="renderPreviousPhotoOverlay"
                class="button-reverse">
                <img 
                    src="./img/icon-arrow-back-48-dark.svg" 
                    alt="Pfeil-Symbol nach links, um zum vorherigen Bild zu gelangen."/>
            </button>
            <span>${photoNr}</span>
            <button oncklick="renderNextPhotoOverlay">
                <img 
                    src="./img/icon-arrow-forward-48-dark.svg" 
                    alt="Pfeil-Symbol nach rechts, um zum nächsten Bild zu gelangen."/>
            </button>
        </footer>`;
}

function renderNextPhotoOverlay() {
    
    photo_overlay.innerHTML = displayPhotoOverlay(photoSrc, photoAlt, photoDescription, photoCopyright, photoNr);
}
