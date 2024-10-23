var ck_name = /^[\p{L}\s]{3,30}$/u;
var ck_email =
  /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
var ck_phone = /^0[1-9]\d{8}$/;

function checknull(txt) {
  if (txt.value.length == 0) {
    return true;
  } else return false;
}

function StringMatch(txt, reg) {
  return reg.test(txt.value);
}

function notCheck(radio) {
  let rt = true;
  for (let i = 0; i < radio.length; i++) {
    if (radio[i].checked) rt = false;
  }
  return rt;
}

function validform(event) {
  event.preventDefault(); // Ngăn form submit

  if (checknull(frmin4.hoten)) {
    document.getElementById("ck_hoten").innerHTML = "Vui lòng điền họ và tên!";
    frmin4.hoten.focus();
    return;
  } else if (!StringMatch(frmin4.hoten, ck_name)) {
    document.getElementById("ck_hoten").innerHTML =
      "Vui lòng nhập họ và tên đúng định dạng!";
    frmin4.hoten.value = "";
    frmin4.hoten.focus();
    return;
  } else {
    document.getElementById("ck_hoten").innerHTML = "";
  }

  if (checknull(frmin4.email)) {
    document.getElementById("ck_email").innerHTML =
      "Vui lòng điền địa chỉ email!";
    frmin4.email.focus();
    return;
  } else if (!StringMatch(frmin4.email, ck_email)) {
    document.getElementById("ck_email").innerHTML =
      "Vui lòng nhập email đúng định dạng!";
    frmin4.email.value = "";
    frmin4.email.focus();
    return;
  } else {
    document.getElementById("ck_email").innerHTML = "";
  }

  if (checknull(frmin4.sdt)) {
    document.getElementById("ck_sdt").innerHTML =
      "Vui lòng điền số điện thoại!";
    frmin4.sdt.focus();
    return;
  } else if (!StringMatch(frmin4.sdt, ck_phone)) {
    document.getElementById("ck_sdt").innerHTML =
      "Vui lòng nhập số điện thoại đúng định dạng!";
    frmin4.sdt.value = "";
    frmin4.sdt.focus();
    return;
  } else {
    document.getElementById("ck_sdt").innerHTML = "";
  }

  if (checknull(frmin4.diachi)) {
    document.getElementById("ck_diachi").innerHTML = "Vui lòng điền địa chỉ!";
    frmin4.diachi.focus();
    return;
  } else {
    document.getElementById("ck_diachi").innerHTML = "";
  }

  if (checknull(frmin4.province)) {
    document.getElementById("ck_province").innerHTML =
      "Vui lòng điền Tỉnh/Thành phố!";
    frmin4.province.focus();
    return;
  } else {
    document.getElementById("ck_province").innerHTML = "";
  }

  if (checknull(frmin4.district)) {
    document.getElementById("ck_district").innerHTML =
      "Vui lòng điền Quận/Huyện!";
    frmin4.district.focus();
    return;
  } else {
    document.getElementById("ck_district").innerHTML = "";
  }

  if (checknull(frmin4.ward)) {
    document.getElementById("ck_ward").innerHTML = "Vui lòng điền Phường/Xã!";
    frmin4.ward.focus();
    return;
  } else {
    document.getElementById("ck_ward").innerHTML = "";
  }

  if (notCheck(frmin4.thanhtoan)) {
    document.getElementById("ck_thanhtoan").innerHTML =
      "Vui lòng chọn phương thức thanh toán!";
    frmin4.thanhtoan.focus();
    return;
  } else {
    document.getElementById("ck_thanhtoan").innerHTML = "";
  }

  if (!frmin4.tick.checked) {
    document.getElementById("ck_tick").innerHTML =
      "Vui lòng tick chọn để có thể đặt hàng!";

    frmin4.tick.focus();
    return;
  } else {
    document.getElementById("ck_tick").innerHTML = "";
  }

  alert("Đặt hàng thành công!");

  // Hiển thị thông tin đơn hàng
  const thongtin = `
  <h2>Đặt hàng thành công</h2>
  <p>Mã đơn hàng #10003</p>
  <p>Cảm ơn bạn đã mua hàng!</p>
  <h3>Thông tin đơn hàng</h3>
  <p><strong>Thông tin giao hàng</strong></p>
  <p>Họ và tên: ${frmin4.hoten.value}</p>
  <p>Số điện thoại: ${frmin4.sdt.value}</p>
  <p>Email: ${frmin4.email.value}</p>
  <p>Khu vực: ${frmin4.ward.value}, ${frmin4.district.value}, ${
    frmin4.province.value
  }</p>
  <p>Địa chỉ: ${frmin4.diachi.value}</p>
  <h3>Phương thức thanh toán</h3>
  <p>${
    frmin4.thanhtoan.value === "option2"
      ? "Thanh toán khi nhận hàng"
      : "Chuyển khoản ngân hàng"
  }</p>
  `;
  document.querySelector(".ketqua").innerHTML = thongtin;
  document.querySelector(".in4cus").style.display = "none";
  document.querySelector(".ketqua").style.display = "block";
}

// Lắng nghe sự kiện thay đổi của các radio button
const bankRadio = document.getElementById("exampleRadios1");
const cashRadio = document.getElementById("exampleRadios2");
const bankInfo = document.querySelector(".bank-info");

bankRadio.addEventListener("change", function () {
  if (bankRadio.checked) {
    bankInfo.style.display = "block"; // Hiển thị thông tin tài khoản
  }
});

cashRadio.addEventListener("change", function () {
  if (cashRadio.checked) {
    bankInfo.style.display = "none"; // Ẩn thông tin tài khoản
  }
});
