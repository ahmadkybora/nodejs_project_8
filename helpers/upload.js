document.getElementById('imageUploaded').onclick = function () {
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.status == 200) {
            document.getElementById("imageStatus").innerHTML = this.responseText;
        } else {
            document.getElementById("imageStatus").innerHTML = "nopse"
        }
    }

    xhttp.open("post", "/dashboard/image-upload");
    let formData = new FormData();

    formData.append("image", document.getElementById("selectedImage").files[0]);
    xhttp.send(formData)
}
