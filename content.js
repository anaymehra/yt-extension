if(location.origin.includes("youtube.com")) {
    document.addEventListener("visibilitychange", function() {
        if (document.visibilityState === "visible") {
            document.querySelector(".video-stream").play();
            document.title = document.previousTitle;
        } else {
            document.previousTitle = document.title;
            document.title = document.previousTitle;
            document.querySelector(".video-stream").pause();
        }
    });
}
