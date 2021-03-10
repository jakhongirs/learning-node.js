const express = require("express")
const app = express()

const port = process.env.PORT || 4014

app.set("view engine", "ejs")
app.use(express.static("static"))

//Bu controller viewerga yuboradi. Viewer esa bu html desak ham bo'ladi
app.get("/", (req, res) => {
  res.render("index", {name: "Bahodir"})
})

app.get("/users", (req, res) => {
  res.render("users", {users: ["Bahodir", "Jahongir"]})
}) 

app.get("/homework", (req, res) => {
  res.render("homework", {news: [
    {
      "source": {
        "id": null,
        "name": "Daily Mail"
      },
      "author": "Pete Jenson",
      "title": "Who is Ilaix Moriba? Wonderkid who Barca valued at £86m aiming to be the next Paul Pogba",
      "description": "Sixteen year-olds don't get given £86m buy-out clauses unless they're special. Ilaix Moriba was that age back in 2019 when Barca decided to put the big three-figures on him to ward off rivals.",
      "url": "https://www.dailymail.co.uk/sport/football/article-9341817/Who-Ilaix-Moriba-Wonderkid-Barca-valued-86m-aiming-Paul-Pogba.html",
      "urlToImage": "https://i.dailymail.co.uk/1s/2021/03/09/11/40244324-0-image-a-19_1615288579701.jpg",
      "publishedAt": "2021-03-10T07:50:10Z",
      "content": "Sixteen year-olds dont get given 100m euros (£86m) buy-out clauses unless theyre special. Ilaix Moriba was that age back in 2019 when Barcelona decided to put the big three-figures on him to ward off… [+4923 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Los Angeles Times"
      },
      "author": "Kevin Baxter",
      "title": "The name's Bond — Jonathan Bond, and he hopes to be the Galaxy's goalkeeper",
      "description": "Jonathan Bond never got a chance to be a No. 1 goalkeeper during his time with English Premier League side West Bromwich Albion. He hopes to change that this season with the Galaxy.",
      "url": "https://www.latimes.com/sports/soccer/story/2021-03-09/jonathan-bond-galaxy-goalkeeper-mls",
      "urlToImage": "https://ca-times.brightspotcdn.com/dims4/default/28b408b/2147483647/strip/true/crop/2048x1075+0+0/resize/1200x630!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F53%2F8e%2F5b6ca3884f9ba61faaae8ca08d39%2Fbond1.png",
      "publishedAt": "2021-03-10T03:25:52Z",
      "content": "Jonathan Bond wants to make one thing clear from the start: despite the thick British accent, he knows no more about the royal family than what he learned from the Oprah interview this week.\r\nBut he … [+4767 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "New York Post"
      },
      "author": "Zach Braziller",
      "title": "St. John’s well-positioned in wide-open Big East tournament",
      "description": "https://embed.sendtonews.com/oembed/?SC=6b7GYVH6F3-1191415-6761&format=json&offsetx=0&offsety=0&floatwidth=300&floatposition=bottom-right&float=on",
      "url": "https://nypost.com/2021/03/09/big-east-tournament-st-johns-staring-at-wide-open-draw/",
      "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2021/03/big-east-tournament-st-johns-mike-anderson.jpg?quality=90&strip=all&w=1200",
      "publishedAt": "2021-03-10T02:56:25Z",
      "content": "Twenty-one years later, St. Johns could be a threat in the Big East Tournament again. Yes, it has been that long since the Johnnies reached the Friday night semifinals at the Garden. Its been six yea… [+13138 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "101 Great Goals"
      },
      "author": "Josh Barker",
      "title": "5 centre-backs Manchester United should look to sign this summer to partner Harry Maguire",
      "description": "Manchester United need to improve their centre-backsThe 2021/22 summer window represents a huge one for Manchester United.The Red Devils have continued to make progress under Ole Gunnar Solskjaer. They are on course for their highest Premier League finish in …",
      "url": "https://www.101greatgoals.com/news/5-centre-backs-manchester-united-should-look-to-sign-this-summer-to-partner-harry-maguire/",
      "urlToImage": "https://www.101greatgoals.com/wp-content/uploads/2020/10/GettyImages-1278436178.jpg",
      "publishedAt": "2021-03-09T22:31:03Z",
      "content": "Manchester United need to improve their centre-backs\r\nThe 2021/22 summer window represents a huge one for Manchester United.\r\nThe Red Devils have continued to make progress under Ole Gunnar Solskjaer… [+13038 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Toronto Star"
      },
      "author": "Anne M. Peterson - The Associated Press",
      "title": "Neville era begins at Miami as MLS opens training camps",
      "description": "Phil Neville says the excitement for his new gig at Inter Miami still feels fresh, even though he took the job in January.",
      "url": "https://www.thestar.com/sports/soccer/mls/2021/03/09/neville-era-begins-at-miami-as-mls-opens-training-camps.html",
      "urlToImage": "https://images.thestar.com/abLjCqoB6o-CyHenTNKHl-AP05Y=/1280x1024/smart/filters:cb(1615329302240)/https://www.thestar.com/content/dam/thestar/sports/soccer/mls/2021/03/09/neville-era-begins-at-miami-as-mls-opens-training-camps/NYPS208-38_2018_000054.jpg",
      "publishedAt": "2021-03-09T22:26:57Z",
      "content": "Phil Neville says the excitement for his new gig at Inter Miami still feels fresh, even though he took the job in January.\r\nNeville led England to the Womens World Cup semifinals in 2019. It was expe… [+4100 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Toronto Star"
      },
      "author": "Teresa M. Walker - The Associated Press",
      "title": "Alabama rolls into SEC tourney, Kentucky needs every win",
      "description": "NASHVILLE - The two Southeastern Conference Tournament games that the league got in last year were played with fans in the stands.",
      "url": "https://www.thestar.com/sports/basketball/ncaa/2021/03/09/alabama-rolls-into-sec-tourney-kentucky-needs-every-win.html",
      "urlToImage": "https://images.thestar.com/RHilVpX_eGpb779SjrRImHmpYww=/1280x1024/smart/filters:cb(1615328104710)/https://www.thestar.com/content/dam/thestar/sports/basketball/ncaa/2021/03/09/alabama-rolls-into-sec-tourney-kentucky-needs-every-win/NY189-312_2020_181923.jpg",
      "publishedAt": "2021-03-09T22:09:30Z",
      "content": "NASHVILLE - The two Southeastern Conference Tournament games that the league got in last year were played with fans in the stands.\r\nThen the SEC shut it all down. No trophy presented. No confetti sho… [+4959 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Daily Mail"
      },
      "author": "Ian Herbert",
      "title": "IAN HERBERT: UEFA's 'Swiss-model' for Champions League expansion is a SCANDAL",
      "description": "DEPUTY CHIEF SPORTS WRITER: 'The Swiss model' - with its 'wild card' and 'access boost' places for the giant incompetents who can't qualify despite their vast wealth - is UEFA's financial leg-up.",
      "url": "https://www.dailymail.co.uk/sport/football/article-9342251/IAN-HERBERT-UEFAs-Swiss-model-Champions-League-expansion-SCANDAL.html",
      "urlToImage": "https://i.dailymail.co.uk/1s/2021/03/09/13/40247950-0-image-a-42_1615295008055.jpg",
      "publishedAt": "2021-03-09T22:00:07Z",
      "content": "They're calling the new expanded Champions League 'the Swiss model' - which is a handy way of pushing the bare-faced lie that is an expertly-constructed way of enhancing continental football for the … [+4333 chars]"
    }
  ]})
}) 
//Agar bizda get request bo'lsa va page-miz home bo'lsa, controller funksiya ishlasin deymiz.
// MVC - Model Viewer Controller
/* Tepadagi callback funksiya controller vzifasini bajaradi, masalan saytga kirgan vaqtimiz u bazadan ma'lumot
olib VIEWER-ga junatishi mumkin. */
//Request - bu serverga kelayotgan zapros.
//Response - esa bu o'shanga javob.


app.listen(port, () => {
  console.log("Server is ready at http://localhost:" + port);
})

//Express orqali server yasadik)

