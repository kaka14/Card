const dataTestimonial = [
    {
        name: "kaka",
        comment: "i don no",
        rating: 2,
        image: "https://qph.cf2.quoracdn.net/main-qimg-7de49cfc135fcf7dd1263dc775bb8197-lq"
    },
    {
        name: "samsul",
        comment: "i don no",
        rating: 4,
        image: "https://qph.cf2.quoracdn.net/main-qimg-7de49cfc135fcf7dd1263dc775bb8197-lq"
    },
    {
        name: "barudak",
        comment: "i don no",
        rating: 5,
        image: "https://qph.cf2.quoracdn.net/main-qimg-7de49cfc135fcf7dd1263dc775bb8197-lq"
    },
    {
        name: "saipudin",
        comment: "i don no",
        rating: 3,
        image: "https://qph.cf2.quoracdn.net/main-qimg-7de49cfc135fcf7dd1263dc775bb8197-lq"
    },
    {
        name: "samsudin",
        comment: "i don no",
        rating: 1,
        image: "https://qph.cf2.quoracdn.net/main-qimg-7de49cfc135fcf7dd1263dc775bb8197-lq"
    }
]

function showTestimonial() {
    let testimonialForHtml = ""

    dataTestimonial.forEach(item => {
        testimonialForHtml += `        <div class="blog-post">
        <img src=${item.image} alt="Gambar Blog">
        <h2>${item.name}</h2>
        <p class="date">Rating : ${item.rating}</p>
        <p>
            ${item.comment}
        </p>
    </div>`
    })

    document.getElementById("testimoni").innerHTML = testimonialForHtml
}

showTestimonial()

function filterTestimonial(rating) {
    let testimonialForHtml = ""

    const dataFiltered = dataTestimonial.filter(data => data.rating === rating)

    if (dataFiltered.length === 0) {
        showTestimonial = `<h3>Data Not Found</h3>`
    } else {
        dataFiltered.forEach(item => {
            testimonialForHtml += `        <div class="blog-post">
            <img src=${item.image} alt="Gambar Blog">
            <h2>${item.name}</h2>
            <p class="date">Rating : ${item.rating}</p>
            <p>
                ${item.comment}
            </p>
        </div>`
        })
    }
    document.getElementById("testimoni").innerHTML = testimonialForHtml
}