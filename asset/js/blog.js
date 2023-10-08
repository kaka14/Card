const data = []

function submitData(e) {
    
    e.preventDefault()

    let title = document.getElementById("title").value
    let content = document.getElementById("content").value
    let start = document.getElementById("start").value
    let end = document.getElementById("end").value
    let js = document.getElementById("js")
    let html = document.getElementById("html")
    let php = document.getElementById("php")
    let py = document.getElementById("py")
    let image = document.getElementById("input-blog-image").files

    let jsChecked = js.checked;
    let htmlChecked= html.checked;
    let phpChecked = php.checked;
    let pyChecked = py.checked;
    let month = monthDistance(start, end);


    image = URL.createObjectURL(image[0])

    const obj = {
        title,
        content,
        image,
        start,
        end,
        jsChecked,
        htmlChecked,
        phpChecked,
        pyChecked,
        month,
        postedAt : new Date(),
        author: "Kaka"
    }

    data.push(obj)
    
    renderBlog()
}

function renderBlog() {

    document.getElementById("blog").innerHTML = "";
    for (let i = 0; i < data.length; i++) {
       console.log(data)
       let techIconsHtml = ""; 
       
       if (data[i].jsChecked === true) {
           techIconsHtml += '  <i class="fa-brands fa-js"></i>'; 
       }
       if (data[i].htmlChecked === true) {
           techIconsHtml += '  <i class="fa-brands fa-html5"></i>'; 
       }
       if (data[i].phpChecked === true) {
           techIconsHtml += '  <i class="fa-brands fa-php"></i>'; 
       }
       if (data[i].pyChecked === true) {
           techIconsHtml += '  <i class="fa-brands fa-python"></i>'; 
       }
       console.log(techIconsHtml)
       document.getElementById("blog").innerHTML += `
       <div class="blog-post">
       <img src="${data[i].image}" alt="Gambar Blog">
       <h2><a target= "_blank" href="blog_content.html">${data[i].title}</a></h2>
       <p class="date">${data[i].month} | ${data[i].author}</p>
       <p>
        ${data[i].content}
       </p>
       <div class="gambar">
         ${techIconsHtml}
       </div>
       <div class="btn-group">
           <button class="btn-edit">Edit</button>
           <button class="btn-delete">Hapus</button>
           <div style="float:right; margin 10px">
            <p class ="minute" style="font-size: 15px; color:grey">${getDuration(data[i].postedAt)}</p>
           </div>
       </div>
   </div>
        `;
    }
}


function getTime(time){
    let year = time.getFullYear()
    let month = time.getMonth()
    let hour = time.getHours()
    let date = time.getDate()
    let minute = time.getMinutes()
    const nameMonth = ["Janurary","February","March","April","May","June","July","August","September","Ooctober","November","December"]

    return `${date} ${nameMonth[month]} ${year} ${hour}:${minute} WIB`
}

function monthDistance(date1, date2) {
    const d1 = new Date(date1);
    const d2 = new Date(date2);

    const monthsApart = (d2.getFullYear() - d1.getFullYear()) * 12 + (d2.getMonth() - d1.getMonth());

    if (monthsApart < 1) {
        return "Just this month";
    } else {
        return monthsApart + " Months";
    }
}



function getDuration(time) {
    const timeNow = new Date()
    const timePost = new Date(time)
    const distance = timeNow - timePost

    const dayDistance = Math.floor(distance / (24 * 60 * 60 * 1000))
    if (dayDistance > 0){
        return dayDistance + " Day Ago"
    }else {
        const hourDistance = Math.floor(distance / (60 * 60 * 1000))
        if (hourDistance > 0){
            return hourDistance + " Hour Ago"
        } else {
            const minuteDistance = Math.floor(distance / (60 * 1000))
            if (minuteDistance > 0){
                return minuteDistance + " Minute Ago"
            }else {
                const secondDistance = Math.floor(distance / (1000))
                if (secondDistance > 0){
                    return secondDistance + " Second Ago"
                }else {
                    return "Just Now"
                }
        }
    }
}
}

setInterval(renderBlog, 1000)