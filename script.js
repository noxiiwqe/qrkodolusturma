function generateQRCode() {
  const qrCodeDiv = document.getElementById("qr-code");
  const text = document.getElementById("text-input").value;

  qrCodeDiv.innerHTML = ""; // Önceki QR kodu temizle

  if (text.trim() === "") {
    alert("Lütfen bir metin girin.");
    return;
  }

  QRCode.toCanvas(document.createElement("canvas"), text, { width: 200 }, function (error, canvas) {
    if (error) console.error(error);
    qrCodeDiv.appendChild(canvas);
  });
}
