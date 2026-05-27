// Ngân hàng câu hỏi phân tách theo Từng Bé -> Từng Khối Lớp -> Từng Dạng Bài
const QUESTION_BANK = {
    // 👶 CLARA (2022) - Giữ nguyên các dạng bài nhận biết trực quan
    ut: {
        "Dạng 1: Đếm số lượng phạm vi 5": {
            theory: "💡 Mẹo cho Clara: Bé hãy chỉ tay vào từng hình và đếm to từ 1 đến 5 cùng ba mẹ nhé! Hình cuối cùng chính là số lượng cần tìm.",
            questions: [
                { id: "ut_d1_01", question: "Có bao nhiêu quả táo trong giỏ? 🍎🍎🍎", options: ["2", "3", "4", "5"], answer: "3" },
                { id: "ut_d1_02", question: "Đếm xem có mấy bạn gấu bông đang ngồi chơi? 🧸🧸🧸🧸", options: ["3", "4", "5", "2"], answer: "4" }
            ]
        },
        "Dạng 2: Nhận biết hình khối cơ bản": {
            theory: "💡 Mẹo cho Clara: Hình tròn giống như ông mặt trời quay tròn tròn. Hình vuông có 4 cạnh thẳng bằng nhau như cái bánh chưng.",
            questions: [
                { id: "ut_d2_01", question: "Quả bóng đá có hình gì vậy bé yêu? ⚽", options: ["Hình tròn", "Hình vuông", "Hình tam giác"], answer: "Hình tròn" }
            ]
        }
    },

    // 👦 CRIS - TOÁN LỚP 2 & LỚP 3
    giua: {
        "Lớp 2 - Dạng 1: Phép cộng trừ có nhớ phạm vi 100": {
            theory: "💡 Lý thuyết Lớp 2: Khi đặt tính thẳng hàng, ta cộng/trừ từ phải sang trái (hàng đơn vị trước, hàng chục sau). Nếu phép cộng vượt quá 10, ta nhớ 1 sang hàng chục.",
            questions: [
                { id: "cris_l2_d1_01", question: "Đặt tính rồi tính: 38 + 25 = ?", options: ["53", "63", "61", "58"], answer: "63" },
                { id: "cris_l2_d1_02", question: "Thực hiện phép tính trừ có nhớ: 62 - 17 = ?", options: ["45", "55", "35", "47"], answer: "45" }
            ]
        },
        "Lớp 2 - Dạng 2: Bảng nhân bảng chia (2 đến 5)": {
            theory: "💡 Lý thuyết Lớp 2: Phép nhân là phép cộng các số giống nhau. Phép chia là bài toán chia đều một số lượng thành các phần bằng nhau.",
            questions: [
                { id: "cris_l2_d2_01", question: "Tìm x, biết: x × 3 = 15", options: ["3", "4", "5", "6"], answer: "5" },
                { id: "cris_l2_d2_02", question: "Có 20 quả cam chia đều vào 4 rổ. Hỏi mỗi rổ có mấy quả cam?", options: ["4 quả", "5 quả", "6 quả", "7 quả"], answer: "5" }
            ]
        },
        "Lớp 2 - Dạng 3: Dãy số theo quy luật": {
            theory: "💡 Lý thuyết Lớp 2: Em cần lấy số liền sau trừ số liền trước để tìm ra khoảng cách đều đặn giữa các số trong dãy.",
            questions: [
                { id: "cris_l2_d3_01", question: "Điền số thích hợp vào dấu ... của dãy: 2, 4, 6, 8, ...", options: ["9", "10", "11", "12"], answer: "10" }
            ]
        },
        "Lớp 3 - Dạng 4: Thứ tự thực hiện biểu thức": {
            theory: "💡 Lý thuyết Lớp 3: Quy tắc cốt lõi: Trong biểu thức, ta thực hiện Nhân chia trước, Cộng trừ sau. Nếu có dấu ngoặc, phải tính trong ngoặc trước.",
            questions: [
                { id: "cris_l3_d4_01", question: "Tính giá trị của biểu thức: 24 + 6 × 2 = ?", options: ["60", "36", "48", "30"], answer: "36" },
                { id: "cris_l3_d4_02", question: "Tính giá trị của biểu thức: (15 + 5) ÷ 4 = ?", options: ["5", "4", "6", "10"], answer: "5" }
            ]
        },
        "Lớp 3 - Dạng 5: Chuyên đề Tính Tuổi": {
            theory: "💡 Lý thuyết Lớp 3: Hiệu số tuổi của hai người không bao giờ thay đổi theo thời gian. Dù bao nhiêu năm nữa thì khoảng cách tuổi vẫn giữ nguyên.",
            questions: [
                { id: "cris_l3_d5_01", question: "Hiện nay mẹ 32 tuổi, con 6 tuổi. Hỏi sau 5 năm nữa, mẹ hơn con bao nhiêu tuổi?", options: ["26 tuổi", "31 tuổi", "21 tuổi", "37 tuổi"], answer: "26" }
            ]
        }
    },

    // 👧 SIMON - TOÁN LỚP 3 & LỚP 4
    lon: {
        "Lớp 3 - Dạng 1: Toán Tổng - Hiệu & Tổng - Tỷ": {
            theory: "💡 Lý thuyết Lớp 3: Để tìm hai số khi biết Tổng và Hiệu:\n- Số lớn = (Tổng + Hiệu) ÷ 2\n- Số bé = (Tổng - Hiệu) ÷ 2 hoặc Số lớn - Hiệu.",
            questions: [
                { id: "simon_l3_d1_01", question: "Tìm hai số có tổng là 45 và hiệu là 15. Số lớn và số bé lần lượt là:", options: ["30 và 15", "25 và 20", "35 và 10", "28 và 17"], answer: "30 và 15" }
            ]
        },
        "Lớp 3 - Dạng 2: Hình học Chu vi và Diện tích": {
            theory: "💡 Lý thuyết Lớp 3:\n- Chu vi hình chữ nhật = (Chiều dài + Chiều rộng) × 2\n- Diện tích hình chữ nhật = Chiều dài × Chiều rộng (cùng đơn vị đo).",
            questions: [
                { id: "simon_l3_d2_01", question: "Một hình chữ nhật có chiều dài 8cm, chiều rộng 5cm. Diện tích hình đó là bao nhiêu?", options: ["26 cm²", "40 cm²", "13 cm²", "35 cm²"], answer: "40 cm²" }
            ]
        },
        "Lớp 4 - Dạng 3: Toán Tổng - Tỷ và Hiệu - Tỷ nâng cao": {
            theory: "💡 Lý thuyết Lớp 4:\n- Bước 1: Vẽ sơ đồ đoạn thẳng.\n- Bước 2: Tìm tổng (hoặc hiệu) số phần bằng nhau.\n- Bước 3: Tìm giá trị của một phần rồi nhân với số phần của từng số.",
            questions: [
                { id: "simon_l4_d3_01", question: "Một chiếc sọt chứa số quả táo gấp 3 lần số quả lê. Biết tổng số quả là 80. Hỏi có bao nhiêu quả táo?", options: ["20 quả", "60 quả", "50 quả", "40 quả"], answer: "60 quả" },
                { id: "simon_l4_d3_02", question: "Mẹ hơn con 24 tuổi. Tuổi con bằng 1/4 tuổi mẹ. Tính tuổi của con hiện tại?", options: ["6 tuổi", "8 tuổi", "5 tuổi", "7 tuổi"], answer: "8 tuổi" }
            ]
        },
        "Lớp 4 - Dạng 4: Phương pháp Giả thiết tạm thời": {
            theory: "💡 Lý thuyết Lớp 4: Phương pháp tư duy phản biện. Ta giả định toàn bộ đối tượng đều thuộc về 1 loại (ví dụ giả định tất cả đều là gà) để tìm ra độ chênh lệch số chân, từ đó tìm ra số con thỏ/chó.",
            questions: [
                { id: "simon_l4_d4_01", question: "Vừa gà vừa chó có 10 con. Đếm được tất cả có 32 cái chân. Hỏi có bao nhiêu con chó?", options: ["4 con chó", "6 con chó", "5 con chó", "3 con chó"], answer: "6 con chó" }
            ]
        },
        "Lớp 4 - Dạng 5: Bài toán Chuyển động đều": {
            theory: "💡 Lý thuyết Lớp 4: Công thức cốt lõi:\n- Quãng đường (s) = Vận tốc (v) × Thời gian (t).\n- Hai xe chuyển động ngược chiều gặp nhau: Thời gian gặp = Quãng đường ÷ (Tổng hai vận tốc).",
            questions: [
                { id: "simon_l4_d5_01", question: "Hai ô tô khởi hành cùng một lúc từ hai tỉnh A và B cách nhau 180km đi ngược chiều nhau. Vận tốc xe thứ nhất là 50km/h, xe thứ hai là 40km/h. Hỏi sau mấy giờ hai xe gặp nhau?", options: ["2 giờ", "3 giờ", "4 giờ", "1.5 giờ"], answer: "2 giờ" }
            ]
        }
    }
};
