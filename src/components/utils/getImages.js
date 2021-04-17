function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(require.context("../../files/", false, /\.gif$/));

export default images;
