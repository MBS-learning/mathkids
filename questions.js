// NGÂN HÀNG CÂU HỎI OLYMPIAD - PHÂN CẤP CHỮ CÁI CHUẨN (ẨN THÔNG TIN LỚP HỌC)
const questionsData = {
    "Clara": {
        "Toán A": {
            "Dạng 1: Đếm số lượng phạm vi 5": {
                theory: "💡 <b>Mẹo cho Clara:</b> Bé hãy dùng ngón tay chỉ vào từng bạn thú xinh và đếm thật to từ 1 đến 5 cùng ba mẹ nhé!",
                questions: [
                    { id: "clara_a_01", question: "Clara đếm xem có mấy bạn cua đang bò trên bãi cát xinh? 🦀🦀🦀", options: ["2", "3", "4", "5"], answer: "3" }
                ]
            }
        },
        "Toán B": {}, "Toán C": {}, "Toán D": {}, "Toán E": {}, "Toán E2": {}, "Toán E3": {}, "Toán E4": {}, "Toán E5": {}
    },
    "Cris": {
        "Toán A": {
            "Dạng 1: Phép tính cộng trừ có nhớ phạm vi 100": {
                theory: "💡 <b>Quy tắc:</b> Đặt tính thẳng cột hàng đơn vị và hàng chục. Thực hiện phép tính từ PHẢI sang TRÁI. Nếu hàng đơn vị cộng lại lớn hơn hoặc bằng 10, nhớ 1 sang hàng chục.",
                questions: [
                    { id: "cris_a_01", question: "Thực hiện phép tính đặt tính rồi tính nhẩm nhanh: 47 + 38 = ?", options: ["75", "85", "83", "81"], answer: "85" }
                ]
            }
        },
        "Toán B": {}, "Toán C": {},
        "Toán D": {
            "Dạng 1: Bài toán về số và cấu hình số": {
                theory: "💡 <b>Bí kíp Số học:</b> Để tìm chữ số tận cùng của một tích lớn, ta chỉ cần nhân các chữ số hàng đơn vị của các thừa số với nhau rồi tìm tính chất lặp chu kỳ.",
                questions: [
                    { id: "cris_d_01", question: "Tìm chữ số tận cùng của tích sau: A = 1 × 3 × 5 × 7 × ... × 99?", options: ["0", "1", "5", "9"], answer: "5" }
                ]
            },
            "Dạng 2: Biểu đồ thuật toán": {
                theory: "💡 <b>Quy tắc thuật toán:</b> Đi từng bước tuần tự từ ô Nhập Dữ Liệu qua các ô điều kiện rẽ nhánh theo đúng hướng mũi tên quy định.",
                questions: [
                    { id: "cris_d_02", question: "Cho thuật toán: Nhập số X -> Nếu X lẻ thì cộng 3, nếu X chẵn thì chia 2. Nhập X = 7, kết quả cuối cùng là bao nhiêu?", options: ["10", "5", "14", "3.5"], answer: "10" }
                ]
            },
            "Dạng 3: Bài toán Tổng - Hiệu, Tổng - Tỉ, Hiệu - Tỷ": {
                theory: "💡 <b>Công thức cốt lõi giải toán bằng sơ đồ đoạn thẳng:</b><br>- Số lớn (Tổng-Hiệu) = (Tổng + Hiệu) ÷ 2<br>- Giá trị 1 phần (Tổng-Tỉ) = Tổng ÷ (Tổng số phần bằng nhau).",
                questions: [
                    { id: "cris_d_03", question: "Hai kho chứa tất cả 150 tấn thóc. Kho thứ nhất chứa ít hơn kho thứ hai 30 tấn thóc. Hỏi kho thứ hai chứa bao nhiêu tấn thóc?", options: ["90 tấn", "60 tấn", "80 tấn", "75 tấn"], answer: "90 tấn" }
                ]
            },
            "Dạng 4: Bài toán trung bình cộng nâng cao": {
                theory: "💡 <b>Mẹo giải:</b> Trung bình cộng = Tổng các số hạng ÷ Số lượng số hạng. Bài toán 'nhiều hơn trung bình cộng' cần vẽ sơ đồ đoạn thẳng để tìm phần bù chênh lệch.",
                questions: [
                    { id: "cris_d_04", question: "An có 20 viên bi, Bình có 24 viên bi. Chi có số bi nhiều hơn mức trung bình cộng của cả ba bạn là 4 viên. Hỏi Chi có bao nhiêu viên bi?", options: ["26 viên", "28 viên", "30 viên", "24 viên"], answer: "28 viên" }
                ]
            },
            "Dạng 5: Tỉ lệ thuận, tỉ lệ nghịch và tỉ lệ phần trăm": {
                theory: "💡 <b>Quy tắc tam suất đại số:</b><br>- Tỉ lệ thuận: Đại lượng này tăng bao nhiêu lần thì đại lượng kia cũng tăng bấy nhiêu lần.<br>- Tỉ lệ nghịch: Đại lượng này tăng bao nhiêu lần thì đại lượng kia giảm đi bấy nhiêu lần.",
                questions: [
                    { id: "cris_d_05", question: "Nếu 5 người thợ xây xong một bức tường mất 6 ngày. Hỏi nếu muốn xây xong bức tường đó trong 3 ngày thì cần bao nhiêu người thợ (năng suất như nhau)?", options: ["10 người", "8 người", "12 người", "15 người"], answer: "10 người" }
                ]
            },
            "Dạng 6: Bài toán chuyển động chuyên sâu": {
                theory: "💡 <b>Hệ thống công thức chuyển động cần thuộc lòng:</b><br>- Thời gian gặp nhau (Ngược chiều) = Khoảng cách ÷ (Vận tốc 1 + Vận tốc 2)<br>- Thời gian đuổi kịp (Cùng chiều) = Khoảng cách ÷ (Vận tốc lớn - Vận tốc nhỏ)<br>- Vận tốc xuôi dòng = Vận tốc thực + Vận tốc dòng nước.",
                questions: [
                    { id: "cris_d_06", question: "Một chiếc xuồng máy có vận tốc thực là 15 km/h chạy trên dòng sông có vận tốc nước là 3 km/h. Tính vận tốc của xuồng khi chạy xuôi dòng?", options: ["18 km/h", "12 km/h", "45 km/h", "15 km/h"], answer: "18 km/h" }
                ]
            },
            "Dạng 7: Bài toán công việc chung": {
                theory: "💡 <b>Phương pháp:</b> Quy đồng khối lượng công việc về đơn vị thời gian. Coi toàn bộ công việc cần hoàn thành là 1 đơn vị. Tìm xem trong 1 giờ hoặc 1 ngày mỗi đối tượng làm được bao nhiêu phần công việc.",
                questions: [
                    { id: "cris_d_07", question: "Vòi thứ nhất chảy một mình đầy bể mất 3 giờ. Vòi thứ hai chảy một mình đầy bể mất 6 giờ. Hỏi nếu mở cả hai vòi cùng lúc thì sau bao lâu bể đầy nước?", options: ["2 giờ", "4.5 giờ", "4 giờ", "1.5 giờ"], answer: "2 giờ" }
                ]
            },
            "Dạng 8: Bài toán tính tuổi & trồng cây nâng cao": {
                theory: "💡 <b>Quy tắc trồng cây nâng cao:</b><br>- Trồng cây một đầu đường (hoặc dạng vòng tròn khép kín): Số cây = Số khoảng cách (Số khúc).<br>- Hiệu số tuổi của hai người luôn luôn cố định và không thay đổi theo thời gian.",
                questions: [
                    { id: "cris_d_08", question: "Một người đóng đinh thẳng hàng dọc theo một tấm gỗ dài 20cm, cứ cách 4cm thì đóng 1 chiếc đinh (đóng cả 2 đầu tấm gỗ). Hỏi người đó đã đóng bao nhiêu chiếc đinh?", options: ["5 chiếc", "6 chiếc", "4 chiếc", "7 chiếc"], answer: "6 chiếc" }
                ]
            },
            "Dạng 9: Bài toán hình học chuyên sâu": {
                theory: "💡 <b>Mẹo tư duy:</b> Khi tính diện tích các hình phức hợp, ta sử dụng phương pháp cắt ghép hình, chuyển dịch cấu trúc hoặc áp dụng phương pháp 'Tính phần bù' lấy hình lớn trừ đi phần trống.",
                questions: [
                    { id: "cris_d_09", question: "Một hình thang có độ dài hai đáy lần lượt là 12cm và 8cm, chiều cao bằng trung bình cộng hai đáy. Diện tích hình thang đó là bao nhiêu?", options: ["100 cm²", "200 cm²", "80 cm²", "50 cm²"], answer: "100 cm²" }
                ]
            },
            "Dạng 10: Suy luận logic nâng cao": {
                theory: "💡 <b>Nguyên lý Dirichlet (Nhốt thỏ):</b> Nếu nhốt (N+1) con thỏ vào N cái chuồng thì chắc chắn sẽ có ít nhất một chuồng chứa từ 2 con thỏ trở lên. Giả thiết tạm: Giả định toàn bộ đối tượng thuộc một nhóm loại để tìm độ lệch phần dư.",
                questions: [
                    { id: "cris_d_10", question: "Trong một chiếc hộp có 5 viên bi đỏ và 5 viên bi xanh. Hỏi phải bốc ngẫu nhiên ít nhất bao nhiêu viên bi ra ngoài để chắc chắn có 2 viên bi cùng màu?", options: ["3 viên", "2 viên", "6 viên", "5 viên"], answer: "3" }
                ]
            }
        },
        "Toán E": {}, "Toán E2": {}, "Toán E3": {}, "Toán E4": {}, "Toán E5": {}
    },
    "Simon": {
        "Toán A": {}, "Toán B": {}, "Toán C": {},
        "Toán D": {
            "Dạng 1: Bài toán về số và cấu hình số": { theory: "💡 <b>Bí kíp Số học:</b> Áp dụng tính chất chu kỳ của các số hàng đơn vị.", questions: [{ id: "simon_d_01", question: "Tìm chữ số tận cùng của tích chuỗi số sau: 1 × 3 × 5 × ... × 19?", options: ["5", "0", "1", "9"], answer: "5" }] },
            "Dạng 2: Biểu đồ thuật toán": { theory: "💡 <b>Lý thuyết:</b> Đi tuần tự theo lưu đồ cấu trúc rẽ nhánh.", questions: [{ id: "simon_d_02", question: "Nhập X = 4 vào sơ đồ: X -> Nhân 5 -> Trừ 2. Kết quả thu được là bao nhiêu?", options: ["18", "20", "14", "22"], answer: "18" }] },
            "Dạng 3: Bài toán Tổng - Hiệu, Tổng - Tỉ, Hiệu - Tỷ nâng cao": { theory: "...", questions: [] },
            "Dạng 4: Bài toán trung bình cộng nâng cao": { theory: "...", questions: [] },
            "Dạng 5: Tỉ lệ thuận, tỉ lệ nghịch và tỉ lệ phần trăm": { theory: "...", questions: [] },
            "Dạng 6: Bài toán chuyển động chuyên sâu": { theory: "...", questions: [] },
            "Dạng 7: Bài toán công việc chung": { theory: "...", questions: [] },
            "Dạng 8: Bài toán tính tuổi & trồng cây nâng cao": { theory: "...", questions: [] },
            "Dạng 9: Bài toán hình học chuyên sâu": { theory: "...", questions: [] },
            "Dạng 10: Suy luận logic nâng cao": { theory: "...", questions: [] }
        },
        "Toán E": {}, "Toán E2": {}, "Toán E3": {}, "Toán E4": {}, "Toán E5": {}
    },
    "Toro": {
        "Toán A": {}, "Toán B": {}, "Toán C": {},
        "Toán D": {
            "Dạng 1: Bài toán về số và cấu hình số": { theory: "💡 <b>Bí kíp Số học:</b> Áp dụng tính chất nhân chuỗi để tìm chữ số tận cùng.", questions: [{ id: "toro_d_01", question: "Tìm chữ số tận cùng của tích sau đây: 9 × 9 × 9 × 9 × 9?", options: ["9", "1", "3", "7"], answer: "9" }] },
            "Dạng 2: Biểu đồ thuật toán": { theory: "...", questions: [] },
            "Dạng 3: Bài toán Tổng - Hiệu, Tổng - Tỉ, Hiệu - Tỷ nâng cao": { theory: "...", questions: [] },
            "Dạng 4: Bài toán trung bình cộng nâng cao": { theory: "...", questions: [] },
            "Dạng 5: Tỉ lệ thuận, tỉ lệ nghịch và tỉ lệ phần trăm": { theory: "...", questions: [] },
            "Dạng 6: Bài toán chuyển động chuyên sâu": { theory: "...", questions: [] },
            "Dạng 7: Bài toán công việc chung": { theory: "...", questions: [] },
            "Dạng 8: Bài toán tính tuổi & trồng cây nâng cao": { theory: "...", questions: [] },
            "Dạng 9: Bài toán hình học chuyên sâu": { theory: "...", questions: [] },
            "Dạng 10: Suy luận logic nâng cao": { theory: "...", questions: [] }
        },
        "Toán E": {}, "Toán E2": {}, "Toán E3": {}, "Toán E4": {}, "Toán E5": {}
    }
};

window.questionsData = questionsData;
