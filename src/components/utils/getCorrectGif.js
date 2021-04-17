import images from './getImages';

/* This function expects 1 argument:
* icon: (string) designated icon from API
*/
const getCorrectGif = (icon) => {
    let correctGif = null;

    images.forEach(obj => obj.default.includes(icon) ? correctGif = obj.default : correctGif);

    return correctGif;
}

export default getCorrectGif;