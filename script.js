const DIALOG_REF = document.getElementById("#DialogPhotoOverlay");
let foldernames = [];

let photos_thumbnail_container_per_folder = "";
let photos_array = [];

/** 
 * Initialer Aufruf beim Starten der Seite
 */
function init() {
    console.log(foldernames);
    console.log(photos_array);

    getPhotofoldername();
    getAllPhotoData();
    // renderPhotoThumbnail();

    
    
}

function openDialogPhotoOverlay(photo_src, photo_alt, photo_description, photo_copyright, photo_nr) {
    DIALOG_REF.showModal();
    renderPhotoOverlay(photo_src, photo_alt, photo_description, photo_copyright, photo_nr);
}

function renderPhotoOverlay(photo_src, photo_alt, photo_description, photo_copyright, photo_nr) {
    let photo_overlay = document.getElementById("#PhotoOverlay");
    photo_overlay.innerHTML = "";
    photo_overlay.innerHTML = displayPhotoOverlay(photo_src, photo_alt, photo_description, photo_copyright, photo_nr);
}

function closeDialogPhotoOverlay() {
    DIALOG_REF.close();
}

// function renderPhotoThumbnail(params) {
//     for (let i = 0; i < photos_array.length; i++) {

//         const element = array[i];
        
//     }
// }

/** 
 * Photofoldername über ID erhalten
 * Ich glaube 
 */
function getPhotofoldername() {
    const FOLDER_LIST = document.getElementsByClassName("ImageContainerPhotoGallery");
    for (let i = 0; i < FOLDER_LIST.length; i++) {

        let folder = FOLDER_LIST[i].id;
        photos_thumbnail_container_per_folder = document.getElementById(folder);
        getPhotoDataPerFolder(folder);

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

        photos_thumbnail_container_per_folder.innerHTML += displayPhotoThumbnail(photo_id, photo_src, photo_alt, photo_description, photo_copyright, photo_nr);
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

function displayPhotoThumbnail(photo_id, photo_src, photo_alt, photo_description, photo_copyright, photo_nr) {
    return `
        <img onclick="openDialogPhotoOverlay('${photo_src}', '${photo_alt}', '${photo_description}', '${photo_copyright}', '${photo_nr}')"
            class="ImagePhotoGallery"
            id=${photo_id}
            src=${photo_src}
            alt=${photo_alt}
        />`;
}

function displayPhotoOverlay(photo_src, photo_alt, photo_description, photo_copyright, photo_nr) {
    return `
        <header>
            <h3>${photo_description}</h3>
            <button onclick="closeDialogPhotoOverlay()">
                <img 
                    src="./img/icon-close-48-dark.svg" 
                    alt="X-Symbol zum Schließen des Dialogfensters"/>
            </button>
        </header>
        <figure>
            <img class="ImagePhotoOverlay"
                src=${photo_src}
                alt=${photo_alt}
            <figcaption><span class="figcaption">${photo_copyright}</span></figcaption>
        </figure>
        <footer>
            <button class="button-reverse">
                <img 
                    src="./img/icon-arrow-back-48-dark.svg" 
                    alt="Pfeil-Symbol nach links, um zum vorherigen Bild zu gelangen."/>
            </button>
            <span>${photo_nr}</span>
            <button>
                <img 
                    src="./img/icon-arrow-forward-48-dark.svg" 
                    alt="Pfeil-Symbol nach rechts, um zum nächsten Bild zu gelangen."/>
            </button>
        </footer>`;
}
