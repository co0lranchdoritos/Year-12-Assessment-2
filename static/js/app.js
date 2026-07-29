if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/static/service-worker.js")
        .then(() => {
            console.log("Service Worker register");
        })
        .catch(error => {
            console.log("Service Worker registration failed:", error)
        })
}