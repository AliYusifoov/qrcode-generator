    function generateWiFiQR() {
      let ssid = document.getElementById("ssid").value.trim();
      let password = document.getElementById("password").value.trim();
      let encryption = document.getElementById("encryption").value;

      if (!ssid) {
        alert("Please enter SSID");
        return;
      }

      let wifiString = `WIFI:T:${encryption};S:${ssid};P:${password};;`;
      let imgUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(wifiString)}`;

      document.querySelector(".qrImage").src = imgUrl;
      document.querySelector(".imgBox").classList.add("show-img");
    }