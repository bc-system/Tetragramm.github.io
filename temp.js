const init = () => {
    console.log("/Tetragramm.github.io/PlaneBuilder/index.html"+location.search);
    window.history.replaceState(null, null, "/Tetragramm.github.io/PlaneBuilder/index.html"+location.search);
    window.history.go();
};
window.onload = init;
