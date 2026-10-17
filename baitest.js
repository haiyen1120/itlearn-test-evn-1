// Bài 1
const nhietDo = [28, 35, 31, 26, 38, 30, 33];
const xepLoai = (nhiet) => {
  if (nhiet >= 35) {
    return "Nóng";
  } else if (nhiet >= 30) {
    return "Ấm";
  } else {
    return "Mát";
  }
};

let ngaynong = 0;
for (let i = 0; i < nhietDo.length; i++) {
  const C = nhietDo[i];
  const loai = xepLoai(C);
  console.log(`Ngày ${i + 1}: ${C} -${loai}`);

    if (loai === "Nóng") {
      ngaynong++;
    }
}
console.log(`Số ngày nóng: ${ngaynong}`);

//bài 2
const a = 12, b = 5;
const pheptinh = ["+", "-", "*", "/"];

function tinhToan(x, y, pt) {
  switch (pt) {
    case "+":
      return x + y;
    case "-":
      return x - y;
    case "*":
      return x * y;
    case "/":
      return (x / y).toFixed(2);

  }
}

for (let i = 0; i < pheptinh.length; i++) {
  const pt = pheptinh[i];
  const ketQua = tinhToan(a, b, pt);
  console.log(`${a} ${pt} ${b} = ${ketQua}`);
}

//bai 3
const donHang = [
  { ten: "Áo", loai: "quanao", gia: 200000, soLuong: 2 },
  { ten: "Sách", loai: "sach", gia: 80000, soLuong: 3 },
  { ten: "Bánh", loai: "thucpham", gia: 50000, soLuong: 5 },
  { ten: "Quần", loai: "quanao", gia: 300000, soLuong: 1 },
];
function tinhThue(loai) {
  switch (loai) {
    case "quanao":
      return 10;
    case "sach":
      return 0;
    case "thucpham":
      return 5;
    default:
      return 8;
  }
}

let tongTien = 0;
donHang.forEach((sanpham) => {
  const thue = tinhThue(sanpham.loai);
  const thanhTien = sanpham.gia * sanpham.soLuong * (1 + thue / 100);

  console.log(`${sanpham.ten}: ${thanhTien} VNĐ (Thuế: ${thue}%)`);
  tongTien += thanhTien;
});
console.log(`Tong tien don hang: ${tongTien} VNĐ`);

//bai 4
const sinhVien = [
  { ten: "An", diem: [8, 9, 7] },
  { ten: "Bình", diem: [5, 6, 4] },
  { ten: "Cường", diem: [9, 9, 10] },
  { ten: "Dung", diem: [6, 7, 7] },
];
const tinhTB = (diem) => {
  let tong = 0;
  for (let i = 0; i < diem.length; i++) {
    tong += diem[i];
  }
  return tong / diem.length;
};
function xepHocLuc(tb) {
  if (tb >= 8) {
    return "Giỏi";
  } else if (tb >= 6.5) {
    return "Khá";
  } else if (tb >= 5) {
    return "Trung bình";
  } else if (tb < 5){
    return "Yếu";
  }
}
let soHocBong = 0;
sinhVien.forEach((sv) => {
  const tb = tinhTB(sv.diem);
  const hocLuc = xepHocLuc(tb);
  console.log(`Sinh viên: ${sv.ten} Điểm TB: ${tb.toFixed(2)} Học lực: ${hocLuc}`);
  if (tb >= 8) {
    soHocBong++;
  }
});
console.log(`Tổng số sinh viên đạt học bổng: ${soHocBong}`);

//bai 5
const nhanVien = [
  { id: 1, ten: "An", phong: "IT", luong: 25000000, thamNien: 3 },
  { id: 2, ten: "Bình", phong: "HR", luong: 18000000, thamNien: 5 },
  { id: 3, ten: "Cường", phong: "IT", luong: 30000000, thamNien: 7 },
  { id: 4, ten: "Dung", phong: "Sale", luong: 22000000, thamNien: 2 },
  { id: 5, ten: "Hà", phong: "IT", luong: 28000000, thamNien: 4 },
];
const tinhThuong = (thamNien) => {
  if (thamNien >= 5) {
    return 0.20;
  } else if (thamNien >= 3) {
    return 0.10;
  } else {
    return 0.05;
  }
};
function xepLoaiLuong(luong) {
  if (luong >= 25000000) {
    return "Cao";
  } else if (luong >= 20000000) {
    return "Trung bình";
  } else {
    return "Thấp";
  }
}
const nhanVienITLuongCao = [];
console.log("--- BẢNG LƯƠNG NHÂN VIÊN ---");
nhanVien.forEach((nv) => {
  const tyLeThuong = tinhThuong(nv.thamNien);
  const thucNhan = nv.luong * (1 + tyLeThuong);
  const loaiLuong = xepLoaiLuong(nv.luong);
  console.log(
    `Tên: ${nv.ten}, Phòng: ${nv.phong}, Thâm niên: ${nv.thamNien} năm, Thực nhận: ${thucNhan} VNĐ, Mức lương: ${loaiLuong}`
  );
  if (nv.phong === "IT" && nv.luong > 25000000) {
    nhanVienITLuongCao.push(nv);
  }
});
console.log("\n--- DANH SÁCH NHÂN VIÊN IT CÓ LƯƠNG > 25 TRIỆU ---");
console.log(nhanVienITLuongCao);

//bai 6
const khoHang = [
  { ma: "SP1", ten: "Bút", soLuong: 120, gia: 5000, loai: "vpp" },
  { ma: "SP2", ten: "Vở", soLuong: 8, gia: 12000, loai: "vpp" },
  { ma: "SP3", ten: "Laptop", soLuong: 3, gia: 15000000, loai: "dientu" },
  { ma: "SP4", ten: "Chuột", soLuong: 0, gia: 150000, loai: "dientu" },
  { ma: "SP5", ten: "Thước", soLuong: 50, gia: 8000, loai: "vpp" },
];
function trangThai(soLuong) {
  if (soLuong === 0) {
    return "Hết hàng";
  } else if (soLuong < 10) {
    return "Sắp hết";
  } else {
    return "Còn hàng";
  }
}
const giaTri = (sp) => sp.soLuong * sp.gia;
const sanPhamCanNhap = []; 
let tongGiaTriVPP = 0; 
let tongGiaTriDienTu = 0;
console.log("3. DANH SÁCH SẢN PHẨM TRONG KHO");
khoHang.forEach((sp) => {
  const tt = trangThai(sp.soLuong);
  const giaTriTon = giaTri(sp);
  console.log(`Mã: ${sp.ma}, Tên: ${sp.ten}, Trạng thái: ${tt}, Giá trị tồn: ${giaTriTon} VNĐ`);
  if (tt === "Hết hàng" || tt === "Sắp hết") {
    sanPhamCanNhap.push(sp);
  }
  if (sp.loai === "vpp") {
    tongGiaTriVPP += giaTriTon;
  } else if (sp.loai === "dientu") {
    tongGiaTriDienTu += giaTriTon;
  }
});
console.log("4.CÁC SẢN PHẨM CẦN NHẬP THÊM");
console.log(sanPhamCanNhap);
console.log("5.TỔNG GIÁ TRỊ TỒN KHO THEO LOẠI");
console.log(`Loại VPP: ${tongGiaTriVPP} VNĐ`);
console.log(`Loại Điện tử: ${tongGiaTriDienTu} VNĐ`);

//bai 7
const soDien = [45, 90, 150, 320];
const tinhTienDien = (kWh) => {
  let tongTien = 0;
  if (kWh <= 50) {
    tongTien = kWh * 1800;
  } else if (kWh <= 100) {
       tongTien = 50 * 1800 + (kWh - 50) * 1900;
  } else if (kWh <= 200) {
      tongTien = 50 * 1800 + 50 * 1900 + (kWh - 100) * 2200;
  } else {
    tongTien = 50 * 1800 + 50 * 1900 + 100 * 2200 + (kWh - 200) * 2800;
  }
  return tongTien;
};
let TIENDIENCaoNhat = 0;
let hoCaoNhat = 0;
console.log("BẢNG TIỀN ĐIỆN TỪNG HỘ");
for (let i = 0; i < soDien.length; i++) {
  const kwh = soDien[i];
  const tien = tinhTienDien(kwh);
  console.log(`Hộ ${i + 1}: ${kwh} kWh, Tiền điện: ${tien} VNĐ`);
  if (tien > TIENDIENCaoNhat) {
    TIENDIENCaoNhat = tien;
    hoCaoNhat = i + 1;
  }
}
console.log("HỘ CÓ HÓA ĐƠN CAO NHẤT");
console.log(`Hộ ${hoCaoNhat} có hóa đơn cao nhất với: ${TIENDIENCaoNhat} VNĐ`);