// NGÂN HÀNG CÂU HỎI MỞ RỘNG TOÀN DIỆN - PHÂN CẤP TOÁN A, B, C, D
const QUESTION_BANK = {
    // CLARA - GIỮ NGUYÊN PHÂN HỆ MẦM NON ĐỌC ĐỀ TỰ ĐỘNG
    clara: {
        "Dạng mầm non: Đếm số lượng phạm vi 5": {
            theory: `💡 Mẹo cho Clara: Bé chỉ tay vào từng bạn và đếm nhé!`,
            questions: [
                { id: "cl_d1_01", question: "Clara đếm xem có mấy bạn cua đang bò? 🦀🦀🦀", options: ["2", "3", "4", "5"], answer: "3" }
            ]
        }
    },

    // TOÁN A: NỀN TẢNG & TƯ DUY CẤP ĐỘ 1 (Tương đương chương trình Lớp 2 mở rộng)
    toan_a: {
        "Dạng 1: Cộng trừ có nhớ phạm vi 100": {
            theory: `💡 Đặt tính thẳng hàng: Hàng đơn vị thẳng hàng đơn vị, hàng chục thẳng hàng chục. Cộng/trừ từ phải sang trái. Nhớ cộng thêm phần nhớ vào hàng chục!`,
            questions: [
                { id: "a_d1_01", question: "Đặt tính rồi tính: 48 + 37 = ?", options: ["75", "85", "83", "81"], answer: "85" },
                { id: "a_d1_02", question: "Tìm kết quả của phép tính sau: 92 - 45 = ?", options: ["47", "57", "43", "53"], answer: "47" }
            ]
        },
        "Dạng 2: Bảng nhân, bảng chia ứng dụng (2 đến 5)": {
            theory: `💡 Phép nhân là tổng của các số hạng bằng nhau. Phép chia là bài toán chia đều số lượng vật vào các phần bằng nhau.`,
            questions: [
                { id: "a_d2_01", question: "Có 5 hộp bánh, mỗi hộp chứa 4 chiếc bánh. Hỏi có tất cả bao nhiêu chiếc bánh?", options: ["20 chiếc", "9 chiếc", "25 chiếc", "15 chiếc"], answer: "20 chiếc" },
                { id: "a_d2_02", question: "Chia đều 28 quả táo vào 4 rổ. Hỏi mỗi rổ có bao nhiêu quả táo?", options: ["6 quả", "7 quả", "8 quả", "9 quả"], answer: "7 quả" }
            ]
        },
        "Dạng 3: Bài toán lời văn 1 bước tính (Nhiều/Ít hơn)": {
            theory: `💡 Đọc kỹ đề bài để xác định đối tượng lớn hơn hay bé hơn:\n- Nhiều hơn: Thực hiện phép cộng.\n- Ít hơn: Thực hiện phép trừ.`,
            questions: [
                { id: "a_d3_01", question: "An có 15 viên bi. Bình có nhiều hơn An 7 viên bi. Hỏi Bình có bao nhiêu viên bi?", options: ["22 viên", "8 viên", "21 viên", "23 viên"], answer: "22 viên" }
            ]
        },
        "Dạng 4: Hình học Chu vi & Đo lường cơ bản": {
            theory: `💡 Đổi đơn vị: 1m = 10dm = 100cm. Chu vi tam giác/tứ giác bằng tổng độ dài tất cả các cạnh cộng lại.`,
            questions: [
                { id: "a_d4_01", question: "Một hình tam giác có độ dài các cạnh lần lượt là 7cm, 8cm, 10cm. Chu vi của hình tam giác đó là:", options: ["25cm", "15cm", "24cm", "26cm"], answer: "25cm" },
                { id: "a_d4_02", question: "Không khí trong phòng mát mẻ, đổi đơn vị độ dài sau: 4m 5cm = ... cm?", options: ["45cm", "405cm", "450cm", "54cm"], answer: "405cm" }
            ]
        },
        "Dạng 5: Tìm x & Số hạng chưa biết": {
            theory: `💡 Quy tắc tìm thành phần chưa biết:\n- Tìm số hạng: Tổng trừ đi số hạng đã biết.\n- Tìm số bị trừ: Hiệu cộng với số trừ.\n- Tìm thừa số: Tích chia cho thừa số đã biết.`,
            questions: [
                { id: "a_d5_01", question: "Tìm x biết: x + 24 = 61", options: ["37", "47", "85", "35"], answer: "37" },
                { id: "a_d5_02", question: "Tìm x biết: x × 3 = 27", options: ["9", "24", "30", "8"], answer: "9" }
            ]
        },
        "Dạng 6: Dãy số quy luật & Toán trồng cây cơ bản": {
            theory: `💡 Toán trồng cây trên đoạn thẳng: Số cây = (Tổng chiều dài ÷ Khoảng cách giữa các cây) + 1 (khi trồng ở cả 2 đầu đường).`,
            questions: [
                { id: "a_d6_01", question: "Điền số thích hợp vào dãy số quy luật sau: 3, 7, 11, 15, ..., 23", options: ["16", "18", "19", "20"], answer: "19" },
                { id: "a_d6_02", question: "Một đoạn đường thẳng dài 30m, trồng cây cách nhau 5m (trồng cả hai đầu). Hỏi cần bao nhiêu cây?", options: ["6 cây", "7 cây", "8 cây", "5 cây"], answer: "7 cây" }
            ]
        },
        "Dạng 7: Điền chữ số hàng dọc & Phép tính ẩn": {
            theory: `💡 Phương pháp giải: Tính toán ngược từ hàng đơn vị sang hàng chục để tìm chữ số bị che khuất.`,
            questions: [
                { id: "a_d7_01", question: "Cho phép tính dọc: A5 + 2B = 72. Tìm giá trị của chữ số A và B?", options: ["A=4, B=7", "A=5, B=7", "A=4, B=6", "A=3, B=7"], answer: "A=4, B=7" }
            ]
        },
        "Dạng 8: Tư duy Logic loại trừ (Dạng Đề IKMC Cấp 1)": {
            theory: `💡 Đọc kỹ từng dữ kiện để lập bảng loại trừ dần các trường hợp không thỏa mãn.`,
            questions: [
                { id: "a_d8_01", question: "Có 3 bạn An, Bình, Cường. An cao hơn Bình, Bình cao hơn Cường. Hỏi ai là người cao nhất?", options: ["Bạn An", "Bạn Bình", "Bạn Cường", "Không xác định được"], answer: "Bạn An" }
            ]
        }
    },

    // TOÁN B: PHÁT TRIỂN & CHUYÊN ĐỀ CẤP ĐỘ 2 (Tương đương chương trình Lớp 3 mở rộng)
    toan_b: {
        "Dạng 1: Thứ tự thực hiện biểu thức & Nhân chia số lớn": {
            theory: `💡 Quy tắc biểu thức:\n- Trong ngoặc tính trước, ngoài ngoặc tính sau.\n- Nhân chia trước, cộng trừ sau.\n- Chỉ có cộng trừ hoặc nhân chia thì làm từ trái sang phải.`,
            questions: [
                { id: "b_d1_01", question: "Tính giá trị biểu thức: 120 + 60 ÷ 3 × 2 = ?", options: ["160", "200", "140", "130"], answer: "160" },
                { id: "b_d1_02", question: "Tính giá trị biểu thức toán học: (45 - 15) × 4 = ?", options: ["120", "60", "90", "150"], answer: "120" }
            ]
        },
        "Dạng 2: Chuyên đề Tính Tuổi": {
            theory: `💡 Điểm mấu chốt: Hiệu số tuổi của hai người không bao giờ thay đổi theo thời gian! Dù bao nhiêu năm trôi qua, khoảng cách tuổi vẫn giữ nguyên.`,
            questions: [
                { id: "b_d2_01", question: "Hiện nay mẹ 32 tuổi, con 6 tuổi. Hỏi sau 5 năm nữa, mẹ hơn con bao nhiêu tuổi?", options: ["26 tuổi", "31 tuổi", "21 tuổi", "27 tuổi"], answer: "26 tuổi" }
            ]
        },
        "Dạng 3: Toán Tổng - Hiệu & Tổng - Tỷ cơ bản": {
            theory: `💡 Công thức Tổng - Hiệu cơ bản:\n- Số lớn = (Tổng + Hiệu) ÷ 2\n- Số bé = (Tổng - Hiệu) ÷ 2`,
            questions: [
                { id: "b_d3_01", question: "Tổng của hai số là 50, hiệu của hai số là 10. Tìm số lớn?", options: ["30", "20", "40", "25"], answer: "30" }
            ]
        },
        "Dạng 4: Chu vi & Diện tích Hình chữ nhật, Hình vuông": {
            theory: `💡 Công thức:\n- Chu vi hình chữ nhật = (Dài + Rộng) × 2\n- Diện tích hình chữ nhật = Dài × Rộng\n- Diện tích hình vuông = Cạnh × Cạnh`,
            questions: [
                { id: "b_d4_01", question: "Một mảnh đất hình chữ nhật có chiều rộng 6m, chiều dài gấp 3 lần chiều rộng. Diện tích mảnh đất là:", options: ["108 m²", "48 m²", "18 m²", "54 m²"], answer: "108 m²" }
            ]
        },
        "Dạng 5: Lưu đồ logic & Quy luật cuộc thi Quốc tế IMAS": {
            theory: `💡 Đi từng bước theo sơ đồ mũi tên quy định để không làm sót hoặc nhầm lẫn dữ kiện toán học.`,
            questions: [
                { id: "b_d5_01", question: "Một số đi qua lưu đồ: Nhập vào số X -> Nhân 3 -> Trừ 5 -> Kết quả ra 10. Hỏi số X ban đầu là mấy?", options: ["5", "4", "6", "15"], answer: "5" }
            ]
        }
    },

    // TOÁN C: NÂNG CAO & GIẢI THUẬT CẤP ĐỘ 3 (Tương đương chương trình Lớp 4 nâng cao)
    toan_c: {
        "Dạng 1: Chuyên đề Tổng - Tỷ & Hiệu - Tỷ chuyên sâu": {
            theory: `💡 Phương pháp giải bài toán Tỷ số:\n1. Vẽ sơ đồ đoạn thẳng biểu diễn các phần.\n2. Tìm tổng (hoặc hiệu) số phần bằng nhau.\n3. Tính giá trị một phần rồi nhân với số phần của đối tượng cần tìm.`,
            questions: [
                { id: "c_d1_01", question: "Tổng hai số là 120. Số lớn gấp 3 lần số bé. Tìm số bé?", options: ["30", "90", "40", "20"], answer: "30" },
                { id: "c_d1_02", question: "An hơn Bình 24 quyển truyện. Số truyện của An bằng 5/2 số truyện của Bình. Hỏi Bình có bao nhiêu quyển truyện?", options: ["16 quyển", "40 quyển", "20 quyển", "24 quyển"], answer: "16 quyển" }
            ]
        },
        "Dạng 2: Bài toán Công việc chung (Làm chung - Làm riêng)": {
            theory: `💡 Phương pháp đưa về đơn vị thời gian (1 giờ hoặc 1 ngày):\n- Coi toàn bộ khối lượng công việc là 1.\n- Tìm năng suất làm việc trong 1 đơn vị thời gian của từng đối tượng.`,
            questions: [
                { id: "c_d2_01", question: "Nếu đội A làm một mình thì 4 ngày xong việc. Đội B làm một mình thì 12 ngày xong việc. Hỏi nếu cả hai đội cùng làm chung thì sau bao nhiêu ngày sẽ xong công việc?", options: ["3 ngày", "4 ngày", "5 ngày", "2 ngày"], answer: "3 ngày" }
            ]
        },
        "Dạng 3: Hình học nâng cao (Hình bình hành, Hình thoi & Phần bù)": {
            theory: `💡 Công thức:\n- Diện tích hình bình hành = Đáy × Chiều cao.\n- Diện tích hình thoi = (Tích độ dài hai đường chéo) ÷ 2.`,
            questions: [
                { id: "c_d3_01", question: "Một thửa ruộng hình bình hành có độ dài đáy là 24m, chiều cao bằng 1/3 độ dài đáy. Tính diện tích thửa ruộng đó?", options: ["192 m²", "576 m²", "72 m²", "64 m²"], answer: "192 m²" }
            ]
        },
        "Dạng 4: Bài toán Chuyển động đều chuyển tuyến": {
            theory: `💡 Công thức cốt lõi: Quãng đường (s) = Vận tốc (v) × Thời gian (t).\n- Hai xe chuyển động ngược chiều gặp nhau: Thời gian gặp = Khoảng cách ban đầu ÷ Tổng hai vận tốc.`,
            questions: [
                { id: "c_d4_01", question: "Hai thành phố cách nhau 120km. Một ô tô đi từ A với vận tốc 40km/h, một xe máy đi ngược chiều từ B với vận tốc 20km/h. Hỏi sau bao lâu hai xe gặp nhau?", options: ["2 giờ", "3 giờ", "4 giờ", "1.5 giờ"], answer: "2 giờ" }
            ]
        }
    },

    // TOÁN D: TƯ DUY LOGIC CAO CẤP & ĐẤU TRƯỜNG QUỐC TẾ (TIMO / IKMC / CHẤT LƯỢNG CAO)
    toan_d: {
        "Dạng 1: Phương pháp Giả thiết tạm thời (Bài toán Gà và Chó)": {
            theory: `💡 Tư duy phản biện Giả thiết tạm:\n- Giả sử tất cả 12 con đều là gà. Khi đó tổng số chân sẽ hụt đi so với đề bài.\n- Số chân hụt đi là do ta đã thay thế chó bằng gà. Lấy số chân hụt chia cho chênh lệch chân giữa chó và gà (4 - 2 = 2) sẽ tìm ra số chó!`,
            questions: [
                { id: "d_d1_01", question: "Vừa gà vừa chó có tất cả 12 con. Đếm được tổng cộng có 36 cái chân. Hỏi có bao nhiêu con chó?", options: ["6 con", "4 con", "5 con", "8 con"], answer: "6 con" }
            ]
        },
        "Dạng 2: Dãy số cách đều nâng cao (Tìm số hạng thứ n & Tính tổng)": {
            theory: `💡 Bộ công thức bắt buộc cho mọi kỳ thi Olympic:\n- Số hạng thứ n = Số đầu + (n - 1) × Khoảng cách.\n- Số số hạng = (Số cuối - Số đầu) ÷ Khoảng cách + 1.\n- Tổng dãy số = (Số đầu + Số cuối) × Số số hạng ÷ 2.`,
            questions: [
                { id: "d_d2_01", question: "Cho dãy số cách đều: 4, 7, 10, 13, ... Tìm số hạng thứ 30 của dãy số này?", options: ["91", "94", "87", "90"], answer: "91" }
            ]
        },
        "Dạng 3: Phân số chuỗi quy luật (Telescoping Sum)": {
            theory: `💡 Công thức tách chuỗi phân số tiêu biến:\n 1 / (n × (n+1)) = 1/n - 1/(n+1).\nKhi cộng toàn bộ chuỗi, tất cả các phân số trung gian sẽ triệt tiêu nhau, bài toán chỉ còn lại: Phân số đầu - Phân số cuối!`,
            questions: [
                { id: "d_d3_01", question: "Tính nhanh tổng chuỗi phân số sau: A = 1/(1×2) + 1/(2×3) + 1/(3×4) + ... + 1/(49×50)", options: ["49/50", "1/50", "1", "24/25"], answer: "49/50" }
            ]
        },
        "Dạng 4: Xác định chữ số tận cùng của tích lũy thừa": {
            theory: `💡 Mẹo tính nhanh tận cùng:\n- Tích các thừa số có số lẻ và chứa số có tận cùng bằng 5 luôn kết thúc bằng 5.\n- Tích các số chẵn nhân với số có tận cùng bằng 5 luôn kết thúc bằng 0.`,
            questions: [
                { id: "d_d4_01", question: "Tìm chữ số tận cùng của tích chuỗi số sau: 1 × 3 × 5 × 7 × 9 × ... × 2025?", options: ["5", "0", "1", "9"], answer: "5" }
            ]
        },
        "Dạng 5: Chuyên đề Cấu tạo số & Phân tích số tự nhiên": {
            theory: `💡 Lý thuyết phân tích giá trị các hàng cấu tạo số:\nSố có 3 chữ số được biểu diễn: abc = a × 100 + b × 10 + c.\nNếu viết thêm một chữ số vào bên trái số có 2 chữ số, số đó tăng thêm đúng bằng giá trị hàng vừa thêm.`,
            questions: [
                { id: "d_d5_01", question: "Khi ta viết thêm chữ số 5 vào bên trái một số có ba chữ số thì số đó tăng thêm bao nhiêu đơn vị?", options: ["5000 đơn vị", "500 đơn vị", "50 đơn vị", "5 đơn vị"], answer: "5000 đơn vị" }
            ]
        },
        "Dạng 6: Chuyển động nâng cao (Bài toán Đoàn tàu vượt chướng ngại vật)": {
            theory: `💡 Quy tắc chuyển động đoàn tàu:\n- Đoàn tàu vượt qua một cây cột điện: Quãng đường di chuyển đúng bằng CHIỀU DÀI ĐOÀN TÀU.\n- Đoàn tàu vượt qua một cây cầu dài: Quãng đường di chuyển = Chiều dài tàu + Chiều dài cầu.`,
            questions: [
                { id: "d_d6_01", question: "Một đoàn tàu chạy với vận tốc 20 m/s vượt qua một cây cột điện hết đúng 10 giây. Tính chiều dài của đoàn tàu đó?", options: ["200m", "100m", "150m", "50m"], answer: "200m" }
            ]
        }
    }
};
