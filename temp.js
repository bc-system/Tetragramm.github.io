const init = () => {
    console.log("/PlaneBuilder/index.html"+location.search);
    window.history.replaceState(null, null, "/Tetragramm.github.io/PlaneBuilder/index.html"+location.search);
    window.history.go();
};
window.onload = init;
