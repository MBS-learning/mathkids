// NGÂN HÀNG CÂU HỎI & LÝ THUYẾT ĐỘC LẬP CHO 3 BÉ
const QUESTION_BANK = {
    // 1. CLARA (2022) - Phạm vi 10, đếm trực quan, thêm bớt kẹo
    ut: [
        {
            type: "count",
            theory: "💡 MẸO CHO CLARA:\nCon hãy chỉ tay vào từng bạn cua và đếm: 1, 2, 3, 4...\n🔴 🔴 🔴 🔴 = 4 bạn cua!",
            question: "Clara ơi, con đếm xem có bao nhiêu bạn cua đang bò vậy con? 🦀🦀🦀🦀",
            answer: 4,
            options: [3, 4, 5]
        },
        {
            type: "math_easy",
            theory: "💡 MẸO CHO CLARA:\nPhép cộng là gộp lại:\n🍬🍬 (2) thêm 🍬 (1) thành 🍬🍬🍬 (3)",
            question: "Clara tính thử: Con có 2 cái kẹo 🍬🍬, mẹ cho thêm 1 cái 🍬. Con có tất cả mấy cái?",
            answer: 3,
            options: [2, 3, 4]
        }
    ],

    // 2. CRIS (2018) - Toán 3 chữ số (+ - x :), Đếm hình khối phẳng & không gian
    giua: [
        {
            type: "math_3_digits",
            theory: "💡 LÝ THUYẾT CHO CRIS:\nĐặt tính thẳng hàng:\n  425\n+ 153\n  ----\nTính từ PHẢI sang TRÁI: 5+3=8, 2+5=7, 4+1=5.",
            question: "Cris đặt tính rồi tính nhẩm nhanh giúp bố mẹ: 425 + 153 = ?",
            answer: 578,
            options: [578, 568, 588, 575]
        },
        {
            type: "geometry_count",
            theory: "💡 LÝ THUYẾT CHO CRIS:\nKhối lập phương (giống cục Rubik 3x3) luôn luôn có ĐÚNG 6 MẶT PHẲNG bao quanh.",
            question: "Cris quan sát và đếm xem một khối lập phương (Rubik) có bao nhiêu mặt?",
            answer: 6,
            options: [4, 6, 8, 12]
        }
    ],

    // 3. SIMON (2017) - Tìm ẩn X, Diện tích phức tạp, Quy luật ngày tháng
    lon: [
        {
            type: "find_x",
            theory: "💡 LÝ THUYẾT CHO SIMON:\nGiải X theo quy tắc đi ngược và đổi dấu:\nX x 6 + 15 = 75\nX x 6 = 75 - 15 = 60\nX = 60 : 6 = 10",
            question: "Simon tìm ẩn số X: X x 6 + 15 = 75. Vậy X bằng bao nhiêu con?",
            answer: 10,
            options: [8, 9, 10, 12]
        },
        {
            type: "date_time",
            theory: "💡 LÝ THUYẾT CHO SIMON:\nMột tuần có 7 ngày. Nếu cộng thêm 7 ngày (hoặc 14, 21 ngày) thì thứ trong tuần KHÔNG ĐỔI.\nNgày 5 (Thứ Ba) -> Ngày 5 + 21 = Ngày 26 (vẫn là Thứ Ba).",
            question: "Nếu ngày 5 của một tháng là ngày Thứ Ba, thì ngày 26 của tháng đó rơi vào Thứ mấy?",
            answer: "Thứ Ba",
            options: ["Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm"]
        }
    ]
};