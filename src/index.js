const students = [
  {
    id: 1,
    name: "Dinh",
    address: "hue",
  },
  {
    id: 2,
    name: "Nam",
    address: "quang nam",
  },
  {
    id: 3,
    name: "Tan",
    address: "da nang",
  },
  {
    id: 4,
    name: "Hung",
    address: "hue",
  },
  {
    id: 5,
    name: "Tri",
    address: "quang tri",
  },
  {
    id: 6,
    name: "Anh",
    address: "hue",
  },
  {
    id: 7,
    name: "Binh",
    address: "da nang",
  },
];

// == QUẢN LÝ SINH VIÊN ==

// Xem danh sách sinh viên
function hienthi() {
  // let i =0;
  students.forEach((a) => {
    console.log("ID sv: ", a.id);
    console.log("Tên sv:", a.name);
    console.log("Quê quán:", a.address);
  });
}
// hienthi();
// Thêm sinh viên
function addSV() {
  students.push({
    id: 8,
    name: "long",
    address: "nam dinh",
  });
  console.log(students);
}
// addSV();

// Sửa sinh viên
function updateSV() {
  students.splice(1, 1, {
    id: 2,
    name: "hihi",
    address: "kontum",
  });
  console.log(students);
}
// updateSV();
// Xóa sinh viên
function deleteSV() {
  students.splice(0, 1);
  console.log(students);
}
// deleteSV();

const button_submit = document.getElementsByClassName("button_submit");

function menu() {
  const luachon = document.getElementById("input_menu").value;
  console.log(luachon);
  switch (parseInt(luachon)) {
    case 1:
      hienthi();
      break;
    case 2:
      addSV();
      break;
    case 3:
      updateSV();
      break;
    case 4:
      deleteSV();
      break;
    default:
      console.log("Nhập lại dữ liệu");
  }
}
