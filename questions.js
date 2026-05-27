// Ngân hàng câu hỏi phân tách theo Từng Bé -> Từng Dạng Bài
const QUESTION_BANK = {
    // 👶 KHỐI CỦA CLARA (2022)
    ut: {
        "Dạng 1: Đếm số lượng trong phạm vi 5": {
            theory: "💡 Mẹo cho Clara: Bé hãy chỉ tay vào từng hình và đếm to từ 1 đến 5 cùng ba mẹ nhé! Hình cuối cùng chính là số lượng cần tìm.",
            questions: [
                { id: "ut_d1_01", question: "Có bao nhiêu quả táo trong giỏ? 🍎🍎🍎", options: ["2", "3", "4", "5"], answer: "3" },
                { id: "ut_d1_02", question: "Đếm xem có mấy bạn gấu bông đang ngồi chơi? 🧸🧸🧸🧸", options: ["3", "4", "5", "2"], answer: "4" },
                { id: "ut_d1_03", question: "Bé đếm giúp mẹ có mấy bông hoa hướng dương? 🌻🌻🌻🌻🌻", options: ["4", "5", "3", "2"], answer: "5" }
            ]
        },
        "Dạng 2: Nhận biết hình khối cơ bản": {
            theory: "💡 Mẹo cho Clara: Hình tròn giống như ông mặt trời quay tròn tròn. Hình vuông có 4 cạnh thẳng bằng nhau như cái bánh chưng.",
            questions: [
                { id: "ut_d2_01", question: "Quả bóng đá có hình gì vậy bé yêu? ⚽", options: ["Hình tròn", "Hình vuông", "Hình tam giác"], answer: "Hình tròn" },
                { id: "ut_d2_02", question: "Hộp quà sinh nhật trong hình có dạng hình gì nhỉ? 🎁", options: ["Hình chữ nhật", "Hình vuông", "Hình tròn"], answer: "Hình vuông" }
            ]
        }
    },

    // 👦 KHỐI CỦA CRIS (2018)
    giua: {
        "Dạng 1: Phép cộng trừ phạm vi 20 (Không nhớ)": {
            theory: "💡 Mẹo cho Cris: Em tách số hàng chục giữ nguyên, lấy số hàng đơn vị cộng/trừ với nhau trước rồi ghép lại nhé.",
            questions: [
                { id: "giua_d1_01", question: "Tính nhẩm nhanh: 12 + 5 = ?", options: ["16", "17", "18", "15"], answer: "17" },
                { id: "giua_d1_02", question: "Tính nhẩm nhanh: 19 - 6 = ?", options: ["12", "13", "14", "11"], answer: "13" }
            ]
        },
        "Dạng 2: So sánh số lớn, số bé": {
            theory: "💡 Mẹo cho Cris: Số nào có chữ số hàng chục lớn hơn thì số đó lớn hơn. Nếu hàng chục bằng nhau, mình so hàng đơn vị.",
            questions: [
                { id: "giua_d2_01", question: "Điền dấu thích hợp vào chỗ trống: 15 ... 18", options: [">", "<", "="], answer: "<" },
                { id: "giua_d2_02", question: "Số nào lớn nhất trong các số sau: 12, 17, 14, 19", options: ["12", "17", "14", "19"], answer: "19" }
            ]
        }
    },

    // 👧 KHỐI CỦA SIMON (2017)
    lon: {
        "Dạng 1: Phép toán có nhớ phạm vi 100": {
            theory: "💡 Mẹo cho Simon: Khi cộng hàng đơn vị mà lớn hơn hoặc bằng 10, em nhớ cộng thêm 1 vào hàng chục của số tiếp theo.",
            questions: [
                { id: "lon_d1_01", question: "Đặt tính rồi tính: 38 + 25 = ?", options: ["53", "63", "61", "64"], answer: "63" },
                { id: "lon_d1_02", question: "Thực hiện phép tính: 72 - 45 = ?", options: ["27", "37", "23", "33"], answer: "27" }
            ]
        },
        "Dạng 2: Toán tư duy quy luật toán học": {
            theory: "💡 Mẹo cho Simon: Hãy tìm khoảng cách giữa các số liên tiếp xem chúng đang tăng hay giảm bao nhiêu đơn vị.",
            questions: [
                { id: "lon_d2_01", question: "Tìm số tiếp theo điền vào dãy quy luật: 2, 5, 8, 11, ...", options: ["13", "14", "15", "16"], answer: "14" }
            ]
        }
    }
};
