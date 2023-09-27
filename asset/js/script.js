function getData() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const subject = document.getElementById("subject").value;
    const massage = document.getElementById("massage").value;

    if (name == "") {
        return alert("Isi namanya");
    } else if (email == ""){
        return alert("Isi Emailnya");
    }else if (phone == ""){
        return alert("Isi Nomernya");
    }else if (subject == ""){
        return alert("Isi ");
    }else if (massage == ""){
        return alert("Isi ");
    }

    const myEmail = "kakaglk07@gmail.com"
    let a = document.createElement("a")
    a.href = `mailto:${myEmail}?subject=${subject}&body= halo nama saya ${name}, bisakah anda menghubungi saya ${phone} untuk membahas project ${massage}`;
    a.click()

    alert("Email Berhasil Di Kirim");
}