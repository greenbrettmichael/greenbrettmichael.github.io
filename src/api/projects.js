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
            imgSmall: "https://firebasestorage.googleapis.com/v0/b/greenbrettmichael-github-io.appspot.com/o/WOWQueueCamper_small.png?alt=media&token=ebbffdf2-b412-42db-9ea9-5b3e38d9b36a",
            img: "https://firebasestorage.googleapis.com/v0/b/greenbrettmichael-github-io.appspot.com/o/WOWQueueCamper.png?alt=media&token=9e261130-7c2e-4780-9f2a-1d34f325a6c1",
            highlight: true
        }
         ] ) )
}