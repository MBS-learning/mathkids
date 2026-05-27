// NGÂN HÀNG CÂU HỎI TOÀN DIỆN - PHÂN TÁCH ĐẦY ĐỦ THEO TÀI LIỆU CỦA BA
const QUESTION_BANK = {
    // 👶 CLARA (2022) - Giữ nguyên các dạng nhận biết mầm non
    ut: {
        "Dạng 1: Đếm số lượng phạm vi 5": {
            theory: `💡 <b>Mẹo cho Clara: Bé chỉ tay vào từng bạn và đếm nhé!</b><br>
            <img src='https://image.spreadshirtmedia.net/image-server/v1/mp/products/T210A2MPA3176PT17X58Y50D102928509W2490H2490/views/1,width=1200,height=1200,appearanceId=2,backgroundColor=F2F2F2,version=1569421881/one-crab-cartoon-infant-t-shirt.jpg' style='height:70px; margin: 5px;'> 👉 <b>MỘT (1)</b><br>
            <img src='https://image.spreadshirtmedia.net/image-server/v1/mp/products/T210A2MPA3176PT17X58Y50D102928509W2490H2490/views/1,width=1200,height=1200,appearanceId=2,backgroundColor=F2F2F2,version=1569421881/one-crab-cartoon-infant-t-shirt.jpg' style='height:70px; margin: 5px;'> <img src='https://image.spreadshirtmedia.net/image-server/v1/mp/products/T210A2MPA3176PT17X58Y50D102928509W2490H2490/views/1,width=1200,height=1200,appearanceId=2,backgroundColor=F2F2F2,version=1569421881/one-crab-cartoon-infant-t-shirt.jpg' style='height:70px; margin: 5px;'> 👉 <b>MỘT, HAI (2)</b>`,
            questions: [
                { id: "clara_d1_01", question: "Clara đếm xem có mấy bạn cua đang bò? 🦀🦀🦀", options: ["2", "3", "4", "5"], answer: "3" }
            ]
        }
    },

    // 👦 CRIS - TOÁN LỚP 2 & LỚP 3 (Đầy đủ tất cả các phân hệ từ file)
    giua: {
        // --- TOÁN LỚP 2 CƠ BẢN ---
        "Lớp 2 - Dạng 1: Cộng trừ có nhớ phạm vi 100": {
            theory: `💡 <b>Lý thuyết: Đặt tính thẳng hàng và cộng/trừ từ phải sang trái!</b><br>
            <img src='https://theschoolrun.com/sites/default/files/article_images/how_to_column_addition_example.jpg' style='width:100%; max-width:220px; display:block; margin:10px 0;'>
            - Hàng đơn vị thẳng hàng đơn vị, hàng chục thẳng hàng chục.<br>
            - Khi cộng hàng đơn vị vượt quá 10, nhớ 1 sang hàng chục.<br>
            - Khi trừ không đủ, mượn 1 chục ở hàng chục (nhớ trả lại khi trừ hàng chục).`,
            questions: [
                { id: "cris_l2_cb_01", question: "Đặt tính rồi tính: 47 + 28 = ?", options: ["65", "75", "73", "85"], answer: "75" },
                { id: "cris_l2_cb_02", question: "Thực hiện phép tính trừ: 71 - 36 = ?", options: ["35", "45", "37", "41"], answer: "35" }
            ]
        },
        "Lớp 2 - Dạng 2: Bảng nhân, bảng chia (2 đến 5)": {
            theory: `💡 <b>Lý thuyết: Phép nhân là tổng của các số hạng bằng nhau!</b><br>
            <img src='https://images.squarespace-cdn.com/content/v1/5bc5dd9a797f7447959b8602/1554904535496-6EAK0XAX4XW6X4RNYY5A/Multiplication+Equal+Groups.png' style='width:100%; max-width:250px; display:block; margin:10px 0;'>
            - Ví dụ: 4 x 3 nghĩa là có 3 nhóm, mỗi nhóm có 4 bạn vật (4 + 4 + 4 = 12).<br>
            - Phép chia ngược lại với phép nhân: Chia đều số quả vào các hộp.`,
            questions: [
                { id: "cris_l2_cb_03", question: "Tính nhanh: 5 × 7 = ?", options: ["30", "35", "40", "25"], answer: "35" },
                { id: "cris_l2_cb_04", question: "Có 24 viên kẹo chia đều cho 4 bạn. Hỏi mỗi bạn được mấy viên?", options: ["5 viên", "6 viên", "7 viên", "8 viên"], answer: "6" }
            ]
        },
        "Lớp 2 - Dạng 3: Hình học & Đo lường cơ bản": {
            theory: `💡 <b>Lý thuyết: Các đơn vị đo độ dài và hình học phẳng</b><br>
            - Đổi đơn vị: 1m = 10dm = 100cm. 1dm = 10cm.<br>
            - Chu vi hình tam giác/tứ giác = Tổng độ dài tất cả các cạnh cộng lại với nhau.<br>
            - Xem giờ: Kim ngắn chỉ giờ, kim dài chỉ phút. Kim dài chỉ số 6 là giờ rưỡi (30 phút).`,
            questions: [
                { id: "cris_l2_cb_05", question: "Một hình tam giác có 3 cạnh lần lượt là 5cm, 7cm, 8cm. Chu vi là:", options: ["15cm", "20cm", "22cm", "12cm"], answer: "20cm" },
                { id: "cris_l2_cb_06", question: "Đổi đơn vị sau: 3m 5dm = ... dm?", options: ["35dm", "8dm", "305dm", "53dm"], answer: "35dm" }
            ]
        },
        // --- TOÁN LỚP 2 NÂNG CAO ---
        "Lớp 2 - Dạng 4: Tìm thành phần chưa biết (Tìm x)": {
            theory: `💡 <b>Lý thuyết: Quy tắc tìm x trong các phép tính</b><br>
            - Muốn tìm số hạng chưa biết: Lấy Tổng trừ đi số hạng đã biết.<br>
            - Muốn tìm số bị trừ: Lấy Hiệu cộng với số trừ.<br>
            - Muốn tìm thừa số chưa biết: Lấy Tích chia cho thừa số đã biết.`,
            questions: [
                { id: "cris_l2_nc_01", question: "Tìm x, biết: x + 27 = 62", options: ["35", "45", "25", "39"], answer: "35" },
                { id: "cris_l2_nc_02", question: "Tìm x, biết: x ÷ 4 = 5", options: ["9", "16", "20", "24"], answer: "20" }
            ]
        },
        "Lớp 2 - Dạng 5: Dãy số theo quy luật & Toán trồng cây": {
            theory: `💡 <b>Lý thuyết Quy luật và Khoảng cách</b><br>
            - Dãy số tăng dần: Tìm khoảng cách bằng cách lấy số sau trừ số trước.<br>
            - Bài toán trồng cây trên đoạn thẳng thẳng đứng: Số cây = (Tổng chiều dài ÷ Khoảng cách giữa 2 cây) + 1 (nếu trồng cả 2 đầu đường).`,
            questions: [
                { id: "cris_l2_nc_03", question: "Tìm số thích hợp điền vào chỗ trống: 3, 7, 11, 15, ...", options: ["17", "18", "19", "20"], answer: "19" },
                { id: "cris_l2_nc_04", question: "Một đoạn đường dài 20m, người ta trồng cây cách nhau 5m (trồng cả 2 đầu). Hỏi trồng được bao nhiêu cây?", options: ["4 cây", "5 cây", "6 cây", "3 cây"], answer: "5 cây" }
            ]
        },
        // --- TOÁN LỚP 3 ---
        "Lớp 3 - Dạng 6: Thứ tự thực hiện biểu thức (Tính giá trị)": {
            theory: `💡 <b>Lý thuyết tự thực hiện phép tính:</b><br>
            - Nếu chỉ có cộng, trừ hoặc nhân, chia: Làm từ TRÁI sang PHẢI.<br>
            - Nếu có đủ các phép tính: Ưu tiên thực hiện Nhân, Chia TRƯỚC rồi mới đến Cộng, Trừ SAU.<br>
            - Nếu có dấu ngoặc đơn ( ): Bắt buộc phải tính trong ngoặc trước tiên!`,
            questions: [
                { id: "cris_l3_01", question: "Giá trị của biểu thức: 45 + 15 ÷ 3 = ?", options: ["20", "50", "48", "60"], answer: "50" },
                { id: "cris_l3_02", question: "Giá trị của biểu thức: (32 - 12) × 4 = ?", options: ["80", "48", "64", "16"], answer: "80" }
            ]
        },
        "Lớp 3 - Dạng 7: Chuyên đề Tính Tuổi": {
            theory: `💡 <b>Lý thuyết Cốt lõi: Hiệu số tuổi không bao giờ thay đổi!</b><br>
            - Dù là 5 năm, 10 năm trước hay sau này, hiệu số tuổi giữa mẹ và con hoặc giữa hai anh em luôn giữ nguyên cố định.<br>
            - Dựa vào tính chất này để vẽ sơ đồ hoặc lập luận tìm tuổi hiện tại.`,
            questions: [
                { id: "cris_l3_03", question: "Hiện nay bố 36 tuổi, con 8 tuổi. Hỏi sau 4 năm nữa, bố hơn con bao nhiêu tuổi?", options: ["28 tuổi", "32 tuổi", "24 tuổi", "40 tuổi"], answer: "28 tuổi" }
            ]
        },
        "Lớp 3 - Dạng 8: Các bài toán cấu tạo số": {
            theory: `💡 <b>Lý thuyết Phân tích số tự nhiên:</b><br>
            - Một số có 3 chữ số abc được phân tích thành: a × 100 + b × 10 + c.<br>
            - Nếu viết thêm một chữ số vào bên trái hoặc bên phải một số, ta cần dựa vào giá trị hàng để xác định số đó tăng lên bao nhiêu đơn vị.`,
            questions: [
                { id: "cris_l3_04", question: "Khi viết thêm chữ số 2 vào bên trái một số có hai chữ số thì số đó tăng thêm bao nhiêu đơn vị?", options: ["2 đơn vị", "20 đơn vị", "200 đơn vị", "2000 đơn vị"], answer: "200 đơn vị" }
            ]
        }
    },

    // 👧 SIMON - TOÁN LỚP 3 & LỚP 4 (Đầy đủ tất cả các phân hệ từ file)
    lon: {
        // --- TOÁN LỚP 3 NÂNG CAO CHO SIMON ---
        "Lớp 3 - Dạng 1: Toán Tổng - Hiệu cơ bản": {
            theory: `💡 <b>Lý thuyết Sơ đồ đoạn thẳng cho Toán Tổng - Hiệu:</b><br>
            <img src='https://i.ytimg.com/vi/36R8qGuhf8k/maxresdefault.jpg' style='width:100%; max-width:280px; display:block; margin:10px 0;'>
            Công thức bắt buộc nhớ để giải:<br>
            - <b>Số lớn = (Tổng + Hiệu) ÷ 2</b><br>
            - <b>Số bé = (Tổng - Hiệu) ÷ 2</b> (Hoặc Số lớn - Hiệu)`,
            questions: [
                { id: "simon_l3_01", question: "Hai kho chứa 120 tấn thóc. Kho A nhiều hơn kho B 20 tấn thóc. Hỏi kho A chứa bao nhiêu tấn?", options: ["50 tấn", "70 tấn", "60 tấn", "80 tấn"], answer: "70 tấn" }
            ]
        },
        "Lớp 3 - Dạng 2: Hình học Chu vi và Diện tích": {
            theory: `💡 <b>Lý thuyết Hình chữ nhật & Hình vuông:</b><br>
            <img src='https://static.javatpoint.com/math/perimeter-of-rectangle.png' style='width:100%; max-width:220px; display:block; margin:10px 0;'>
            - Chu vi hình chữ nhật = (Chiều dài + Chiều rộng) × 2 (Cùng đơn vị đo).<br>
            - Diện tích hình chữ nhật = Chiều dài × Chiều rộng.<br>
            - Diện tích hình vuông = Cạnh × Cạnh.`,
            questions: [
                { id: "simon_l3_02", question: "Một hình chữ nhật có chu vi là 30cm, chiều dài là 9cm. Tính diện tích hình chữ nhật đó?", options: ["54 cm²", "27 cm²", "56 cm²", "45 cm²"], answer: "54 cm²" }
            ]
        },
        // --- TOÁN LỚP 4 PHÂN HỆ VĂN BẢN ---
        "Lớp 4 - Dạng 3: Toán Tổng - Tỷ & Hiệu - Tỷ nâng cao": {
            theory: `💡 <b>Lý thuyết giải bằng Sơ đồ đoạn thẳng:</b><br>
            <img src='https://hoclieu.vn/wp-content/uploads/2019/12/tong-ty.png' style='width:100%; max-width:280px; display:block; margin:10px 0;'>
            - <b>Bài toán Tổng - Tỷ:</b><br>
               1. Tìm tổng số phần bằng nhau = Phần số bé + Phần số lớn.<br>
               2. Giá trị 1 phần = Tổng ÷ Tổng số phần.<br>
               3. Số bé = Giá trị 1 phần × Số phần số bé.<br>
            - <b>Bài toán Hiệu - Tỷ:</b> Làm tương tự nhưng bước 1 tính Hiệu số phần bằng nhau.`,
            questions: [
                { id: "simon_l4_01", question: "Mẹ hơn con 24 tuổi. Tuổi con bằng 1/4 tuổi mẹ. Tính tuổi của con?", options: ["6 tuổi", "8 tuổi", "32 tuổi", "10 tuổi"], answer: "8 tuổi" },
                { id: "simon_l4_02", question: "Tổng của hai số là 90. Số thứ nhất gấp 4 lần số thứ hai. Tìm số thứ hai?", options: ["18", "72", "20", "15"], answer: "18" }
            ]
        },
        "Lớp 4 - Dạng 4: Bài toán Công việc chung (Làm chung - Làm riêng)": {
            theory: `💡 <b>Lý thuyết: Quy đồng khối lượng công việc về đơn vị thời gian (1 giờ/ 1 ngày)</b><br>
            - Bước 1: Coi toàn bộ công việc cần hoàn thành là 1 đơn vị.<br>
            - Bước 2: Tìm trong 1 giờ (hoặc 1 ngày) mỗi người một mình làm được bao nhiêu phần công việc.<br>
            - Bước 3: Tính trong 1 giờ cả hai người cùng làm được bao nhiêu phần. Thời gian làm chung = 1 ÷ (Phần công việc làm chung trong 1 giờ).`,
            questions: [
                { id: "simon_l4_03", question: "Người thứ nhất làm một mình xong công việc mất 4 giờ. Người thứ hai làm một mình mất 6 giờ. Nếu cả hai cùng làm thì sau 1 giờ được bao nhiêu phần công việc?", options: ["1/10", "5/12", "1/2", "2/5"], answer: "5/12" }
            ]
        },
        // --- TOÁN LỚP 4 TƯ DUY LOGIC NÂNG CAO ---
        "Lớp 4 - Dạng 5: Phương pháp Giả thiết tạm thời": {
            theory: `💡 <b>Lý thuyết rèn luyện tư duy phản biện:</b><br>
            - <b>Bài toán mẫu: Gà và Chó.</b><br>
            - Bước 1: Giả định một trường hợp cực đoan (Ví dụ: Giả sử tất cả con vật đều là Gà - mỗi con có 2 chân).<br>
            - Bước 2: Tính tổng số chân giả định và so sánh xem hụt mất bao nhiêu chân so với đề bài thực tế.<br>
            - Bước 3: Số chân hụt mất là do ta đã biến Chó (4 chân) thành Gà (2 chân). Lấy tổng số chân hụt chia cho độ chênh lệch chân (4 - 2 = 2) sẽ ra ngay số con Chó.`,
            questions: [
                { id: "simon_l4_04", question: "Vừa gà vừa chó có 12 con. Đếm được tất cả có 36 cái chân. Hỏi có bao nhiêu con chó?", options: ["4 con", "6 con", "5 con", "3 con"], answer: "6 con" }
            ]
        },
        "Lớp 4 - Dạng 6: Dãy số đều đặn (Tìm số hạng thứ n, tính tổng)": {
            theory: `💡 <b>Hệ thống công thức dãy số cách đều cần thuộc lòng:</b><br>
            - Khoảng cách (d) = Số hạng liền sau - Số hạng liền trước.<br>
            - <b>Số hạng thứ n = Số đầu + (n - 1) × Khoảng cách.</b><br>
            - Số số hạng trong dãy = (Số cuối - Số đầu) ÷ Khoảng cách + 1.<br>
            - Tổng dãy số = (Số đầu + Số cuối) × Số số hạng ÷ 2.`,
            questions: [
                { id: "simon_l4_05", question: "Cho dãy số: 2, 5, 8, 11,... Tìm số hạng thứ 20 của dãy số này?", options: ["59", "61", "60", "62"], answer: "59" }
            ]
        },
        "Lớp 4 - Dạng 7: Phân số chuỗi & Rút gọn chuỗi phân số quy luật": {
            theory: `💡 <b>Lý thuyết tách phân số (Telescoping Sum):</b><br>
            - Nhận biết quy luật: Mẫu số là tích của hai số cách đều nhau.<br>
            - Công thức tách: 1 / (n × (n+1)) = 1/n - 1/(n+1).<br>
            - Khi cộng cả chuỗi lại, các phân số ở giữa sẽ tự động triệt tiêu nhau, chỉ còn lại: Phân số đầu tiên trừ đi Phân số cuối cùng.`,
            questions: [
                { id: "simon_l4_06", question: "Tính tổng chuỗi phân số: A = 1/(1×2) + 1/(2×3) + 1/(3×4) + ... + 1/(99×100)", options: ["99/100", "1/100", "1", "49/50"], answer: "99/100" }
            ]
        },
        "Lớp 4 - Dạng 8: Xác định chữ số tận cùng": {
            theory: `💡 <b>Lý thuyết tìm chữ số tận cùng của một tích:</b><br>
            - Chữ số tận cùng của một tích bằng chữ số tận cùng của tích các chữ số hàng đơn vị.<br>
            - Lưu ý đặc biệt: Tích của các số lẻ với số có tận cùng là 5 luôn có tận cùng là 5. Tích của số chẵn với số có tận cùng là 5 luôn có tận cùng là 0. Chữ số tận cùng của các thừa số có tận cùng bằng 1, 5, 6 nhân với chính nó nhiều lần không đổi.`,
            questions: [
                { id: "simon_l4_07", question: "Chữ số tận cùng của tích sau là bao nhiêu: 1 × 3 × 5 × 7 × 9 × ... × 99?", options: ["0", "1", "5", "9"], answer: "5" }
            ]
        }
    }
};
