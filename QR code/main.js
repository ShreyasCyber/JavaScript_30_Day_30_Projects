let imgBox = document.getElementById('imgBox');
let qrImg = document.getElementById('qrImg');
let qrText = document.getElementById('qrText');

function generateQR() {
    if (qrText.value.length > 0) {
        let qrUrl = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(qrText.value);
        qrImg.src = qrUrl;
        console.log("Generated QR URL: " + qrUrl);
        imgBox.classList.add("show-img");
    } else {
        qrText.classList.add('error');
        setTimeout(() => {
            qrText.classList.remove('error');
        }, 1000);
    }
}
