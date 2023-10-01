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

    
    const today = new Date();
    const day = today.getDate();
    const month = today.toLocaleString('default', { month: 'long' });
    const year = today.getFullYear();
    const formattedToday = `${day} ${month} ${year}`;


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
        postedAt: formattedToday,
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
       <h2>${data[i].title}</h2>
       <p class="date">${data[i].postedAt} | ${data[i].author}</p>
       <p>
        ${data[i].content}
       </p>
       <div class="gambar">
         ${techIconsHtml}
       </div>
       <div class="btn-group">
           <button class="btn-edit">Edit</button>
           <button class="btn-delete">Hapus</button>
       </div>
   </div>
        `;
    }
}


