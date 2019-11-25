export default {
    fetchSocials: () => new Promise( (resolve, reject) => resolve( [
        {   
            name: "email",
            text: "me@brettmichaelgreen.com",
            icon: "fas fa-envelope",
            url: "mailto:me@brettmichaelgreen.com"
        },
        {
            name: "github",
            text: "",
            icon: "fab fa-github",
            url: "https://github.com/greenbrettmichael"
        },
        {
            name: "twitter",
            text: "",
            icon: "fab fa-twitter",
            url: "https://twitter.com/brettmikegreen"
        }, 
        {
            name: "linkedin",
            text: "",
            icon: "fab fa-linkedin-in",
            url: "https://www.linkedin.com/in/greenbrettmichael/"
        } 
    ] ) )
}