import Youtube from "./youtube"

require("dotenv").config()
const youtube = new Youtube(process.env.GOOGLE_API_KEY);

(async () => {
    // const c = await youtube.util.downloadMP3("https://www.youtube.com/watch?v=wzKiyCboShU", "../videos")
    const c = await youtube.videos.search({q: "r-906", maxResults: 10})
    console.log(c.items)
})()