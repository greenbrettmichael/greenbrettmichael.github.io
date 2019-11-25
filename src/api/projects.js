export default {
    fetchProjects: () => new Promise( (resolve, reject) => resolve( [
        {
            id: "WOWQueueCamper",
            name: "WOWQueueCamper",
            subtitle: "Wakes you up when queue is ready.",
            description: "Alarm clock written in C++ that uses OpenCV and Tesseract to check the WOW Classic queue",
            links: [ { url: "https://github.com/greenbrettmichael/WOWQueueCamper", name: "Open project", icon: "fab fa-github"} ],
            secondaryLinks: [],
            labels: [ "cv" ],
            imgSmall: "https://firebasestorage.googleapis.com/v0/b/greenbrettmichael-github-io.appspot.com/o/profile.png?alt=media&token=92d9a5e0-b6a2-481e-a44d-bfcecb386b77",
            img: "https://firebasestorage.googleapis.com/v0/b/greenbrettmichael-github-io.appspot.com/o/profile.png?alt=media&token=92d9a5e0-b6a2-481e-a44d-bfcecb386b77",
            highlight: true
        }
         ] ) )
}