// hàm chọn thanh menu 
// lấy giá trị của header và thanh menu 
const header = document.getElementById('header');
const menu = document.getElementById('menu');

// gọi biến lấy chiều cao auto
const headerHeight = header.clientHeight;

menu.onclick = function () {
    const isclosed = header.clientHeight === headerHeight;
    if (isclosed) // nếu chọn 
    {
        header.style.height = 'auto';
    }
    else {
        header.style.height = null;
    }
}


// sau khi chọn giá trị lập tức thanh menu sẽ đóng lại 

// tạo biến lấy tất cả giá trị của a nằm trong header 

const menuitems = document.querySelectorAll('#header__nav li a[href*="#"]');

// dùng vòng lập để duyệt qa từng giá trị sau khi chọn 

for (var i = 0; i < menuitems.length; i++) {
    var menuitem = menuitems[i];
    menuitem.onclick = function (event) {
        // tạo biến chọn con 
        const isparent = this.nextElementSibling && this.nextElementSibling.classList.contains('header__subnav')
        if (isparent) {
            event.preventDefault();
        }
        else {

            header.style.height = null;
        }

    }
}

