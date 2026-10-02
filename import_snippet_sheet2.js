/**
 * Mazii Direct Console Importer
 * Open Mazii Notebook: https://mazii.net/vi-VN/learning-hub/notebook/6926430?source=my-notebook
 * Press F12 -> Console -> Paste this entire script -> Press Enter!
 */
(async () => {
  const words = [
  {
    "index": 31,
    "word": "おもしろい",
    "phonetic": "おもしろい",
    "meaning": "Thú vị, hay",
    "note": "Bài 8 - Tính từ"
  },
  {
    "index": 32,
    "word": "つまらない",
    "phonetic": "つまらない",
    "meaning": "Chán",
    "note": "Bài 8 - Tính từ"
  },
  {
    "index": 33,
    "word": "やさしい",
    "phonetic": "やさしい",
    "meaning": "Dễ",
    "note": "Bài 8 - Tính từ"
  },
  {
    "index": 34,
    "word": "むずかしい",
    "phonetic": "むずかしい",
    "meaning": "Khó",
    "note": "Bài 8 - Tính từ"
  },
  {
    "index": 35,
    "word": "おいしい",
    "phonetic": "おいしい",
    "meaning": "Ngon",
    "note": "Bài 8 - Tính từ"
  },
  {
    "index": 36,
    "word": "まずい",
    "phonetic": "まずい",
    "meaning": "Dở",
    "note": "Bài 8 - Tính từ"
  },
  {
    "index": 37,
    "word": "いそがしい",
    "phonetic": "いそがしい",
    "meaning": "Bận",
    "note": "Bài 8 - Tính từ"
  },
  {
    "index": 38,
    "word": "ひま(な)",
    "phonetic": "ひま(な)",
    "meaning": "Rảnh",
    "note": "Bài 8 - Tính từ"
  },
  {
    "index": 39,
    "word": "にぎやか(な)",
    "phonetic": "にぎやか(な)",
    "meaning": "Náo nhiệt",
    "note": "Bài 8 - Tính từ"
  },
  {
    "index": 40,
    "word": "しずか(な)",
    "phonetic": "しずか(な)",
    "meaning": "Yên tĩnh",
    "note": "Bài 8 - Tính từ"
  },
  {
    "index": 41,
    "word": "べんり(な)",
    "phonetic": "べんり(な)",
    "meaning": "Tiện lợi",
    "note": "Bài 8 - Tính từ"
  },
  {
    "index": 42,
    "word": "ふべん(な)",
    "phonetic": "ふべん(な)",
    "meaning": "Bất tiện",
    "note": "Bài 8 - Tính từ"
  },
  {
    "index": 43,
    "word": "たいへん(な)",
    "phonetic": "たいへん(な)",
    "meaning": "Vất vả",
    "note": "Bài 8 - Tính từ"
  },
  {
    "index": 44,
    "word": "すてき(な)",
    "phonetic": "すてき(な)",
    "meaning": "Tuyệt đẹp",
    "note": "Bài 8 - Tính từ"
  },
  {
    "index": 45,
    "word": "しろい",
    "phonetic": "しろい",
    "meaning": "Màu trắng",
    "note": "Bài 8 - Tính từ"
  },
  {
    "index": 46,
    "word": "くろい",
    "phonetic": "くろい",
    "meaning": "Màu đen",
    "note": "Bài 8 - Tính từ"
  },
  {
    "index": 47,
    "word": "あかい",
    "phonetic": "あかい",
    "meaning": "Màu đỏ",
    "note": "Bài 8 - Tính từ"
  },
  {
    "index": 48,
    "word": "あおい",
    "phonetic": "あおい",
    "meaning": "Màu xanh",
    "note": "Bài 8 - Tính từ"
  },
  {
    "index": 49,
    "word": "きいろい",
    "phonetic": "きいろい",
    "meaning": "Màu vàng",
    "note": "Bài 8 - Tính từ"
  },
  {
    "index": 50,
    "word": "ちゃいろい",
    "phonetic": "ちゃいろい",
    "meaning": "Màu nâu",
    "note": "Bài 8 - Tính từ"
  },
  {
    "index": 51,
    "word": "たのしい",
    "phonetic": "たのしい",
    "meaning": "Vui vẻ",
    "note": "Bài 8 - Tính từ"
  },
  {
    "index": 52,
    "word": "ざんねん(な)",
    "phonetic": "ざんねん(な)",
    "meaning": "Đáng tiếc",
    "note": "Bài 8 - Tính từ"
  },
  {
    "index": 53,
    "word": "一日",
    "phonetic": "ついたち",
    "meaning": "Ngày 1",
    "note": "Bài 8 - Hán tự"
  },
  {
    "index": 54,
    "word": "一日",
    "phonetic": "いちにち",
    "meaning": "1 ngày",
    "note": "Bài 8 - Hán tự"
  },
  {
    "index": 55,
    "word": "一月",
    "phonetic": "いちがつ",
    "meaning": "Tháng 1",
    "note": "Bài 8 - Hán tự"
  },
  {
    "index": 56,
    "word": "二日",
    "phonetic": "ふつか",
    "meaning": "Ngày 2, 2 ngày",
    "note": "Bài 8 - Hán tự"
  },
  {
    "index": 57,
    "word": "二月",
    "phonetic": "にがつ",
    "meaning": "Tháng 2",
    "note": "Bài 8 - Hán tự"
  },
  {
    "index": 58,
    "word": "三日",
    "phonetic": "みっか",
    "meaning": "Ngày 3, 3 ngày",
    "note": "Bài 8 - Hán tự"
  },
  {
    "index": 59,
    "word": "四日",
    "phonetic": "よっか",
    "meaning": "Ngày 4, 4 ngày",
    "note": "Bài 8 - Hán tự"
  },
  {
    "index": 60,
    "word": "四月",
    "phonetic": "しがつ",
    "meaning": "Tháng 4",
    "note": "Bài 8 - Hán tự"
  },
  {
    "index": 61,
    "word": "五日",
    "phonetic": "いつか",
    "meaning": "Ngày 5, 5 ngày",
    "note": "Bài 8 - Hán tự"
  },
  {
    "index": 62,
    "word": "五月",
    "phonetic": "ごがつ",
    "meaning": "Tháng 5",
    "note": "Bài 8 - Hán tự"
  },
  {
    "index": 63,
    "word": "六日",
    "phonetic": "むいか",
    "meaning": "Ngày 6, 6 ngày",
    "note": "Bài 8 - Hán tự"
  },
  {
    "index": 64,
    "word": "六月",
    "phonetic": "ろくがつ",
    "meaning": "Tháng 6",
    "note": "Bài 8 - Hán tự"
  },
  {
    "index": 65,
    "word": "七日",
    "phonetic": "なのか",
    "meaning": "Ngày 7, 7 ngày",
    "note": "Bài 8 - Hán tự"
  },
  {
    "index": 66,
    "word": "七月",
    "phonetic": "しちがつ",
    "meaning": "Tháng 7",
    "note": "Bài 8 - Hán tự"
  },
  {
    "index": 67,
    "word": "八日",
    "phonetic": "ようか",
    "meaning": "Ngày 8, 8 ngày",
    "note": "Bài 8 - Hán tự"
  },
  {
    "index": 68,
    "word": "八月",
    "phonetic": "はちがつ",
    "meaning": "Tháng 8",
    "note": "Bài 8 - Hán tự"
  },
  {
    "index": 69,
    "word": "九日",
    "phonetic": "ここのか",
    "meaning": "Ngày 9, 9 ngày",
    "note": "Bài 8 - Hán tự"
  },
  {
    "index": 70,
    "word": "九月",
    "phonetic": "くがつ",
    "meaning": "Tháng 9",
    "note": "Bài 8 - Hán tự"
  },
  {
    "index": 71,
    "word": "十日",
    "phonetic": "とおか",
    "meaning": "Ngày 10, 10 ngày",
    "note": "Bài 8 - Hán tự"
  },
  {
    "index": 72,
    "word": "十月",
    "phonetic": "じゅうがつ",
    "meaning": "Tháng 10",
    "note": "Bài 8 - Hán tự"
  },
  {
    "index": 73,
    "word": "百",
    "phonetic": "ひゃく",
    "meaning": "100.0",
    "note": "Bài 8 - Hán tự"
  },
  {
    "index": 74,
    "word": "千",
    "phonetic": "せん",
    "meaning": "1000.0",
    "note": "Bài 8 - Hán tự"
  },
  {
    "index": 75,
    "word": "三千",
    "phonetic": "さんぜん",
    "meaning": "3000.0",
    "note": "Bài 8 - Hán tự"
  },
  {
    "index": 76,
    "word": "八千",
    "phonetic": "はっせん",
    "meaning": "8000.0",
    "note": "Bài 8 - Hán tự"
  },
  {
    "index": 77,
    "word": "一万",
    "phonetic": "いちまん",
    "meaning": "10000.0",
    "note": "Bài 8 - Hán tự"
  },
  {
    "index": 78,
    "word": "五万",
    "phonetic": "ごまん",
    "meaning": "50000.0",
    "note": "Bài 8 - Hán tự"
  },
  {
    "index": 79,
    "word": "十万",
    "phonetic": "じゅうまん",
    "meaning": "100000.0",
    "note": "Bài 8 - Hán tự"
  },
  {
    "index": 80,
    "word": "円",
    "phonetic": "えん",
    "meaning": "Tiền Yên",
    "note": "Bài 8 - Hán tự"
  },
  {
    "index": 81,
    "word": "百円",
    "phonetic": "ひゃくえん",
    "meaning": "100 Yên",
    "note": "Bài 8 - Hán tự"
  },
  {
    "index": 82,
    "word": "千円",
    "phonetic": "せんえん",
    "meaning": "1000 Yên",
    "note": "Bài 8 - Hán tự"
  },
  {
    "index": 83,
    "word": "一万円",
    "phonetic": "いちまんえん",
    "meaning": "10.000 Yên",
    "note": "Bài 8 - Hán tự"
  },
  {
    "index": 84,
    "word": "スポーツ",
    "phonetic": "すぽーつ",
    "meaning": "Thể thao",
    "note": "Bài 9 - Danh từ"
  },
  {
    "index": 85,
    "word": "やきゅう",
    "phonetic": "やきゅう",
    "meaning": "Bóng chày",
    "note": "Bài 9 - Danh từ"
  },
  {
    "index": 86,
    "word": "たっきゅう",
    "phonetic": "たっきゅう",
    "meaning": "Bóng bàn",
    "note": "Bài 9 - Danh từ"
  },
  {
    "index": 87,
    "word": "バレーボール",
    "phonetic": "ばれーぼーる",
    "meaning": "Bóng chuyền",
    "note": "Bài 9 - Danh từ"
  },
  {
    "index": 88,
    "word": "バスケット(ボール)",
    "phonetic": "ばすけっと(ぼーる)",
    "meaning": "Bóng rổ",
    "note": "Bài 9 - Danh từ"
  },
  {
    "index": 89,
    "word": "バドミントン",
    "phonetic": "ばどみんとん",
    "meaning": "Cầu lông",
    "note": "Bài 9 - Danh từ"
  },
  {
    "index": 90,
    "word": "ダンス",
    "phonetic": "だんす",
    "meaning": "Khiêu vũ, nhảy múa",
    "note": "Bài 9 - Danh từ"
  },
  {
    "index": 91,
    "word": "クラシック",
    "phonetic": "くらしっく",
    "meaning": "Nhạc cổ điển",
    "note": "Bài 9 - Danh từ"
  },
  {
    "index": 92,
    "word": "ジャズ",
    "phonetic": "じゃず",
    "meaning": "Nhạc Jazz",
    "note": "Bài 9 - Danh từ"
  },
  {
    "index": 93,
    "word": "うた",
    "phonetic": "うた",
    "meaning": "Bài hát",
    "note": "Bài 9 - Danh từ"
  },
  {
    "index": 94,
    "word": "カラオケ",
    "phonetic": "からおけ",
    "meaning": "Karaoke",
    "note": "Bài 9 - Danh từ"
  },
  {
    "index": 95,
    "word": "みかん",
    "phonetic": "みかん",
    "meaning": "Quýt",
    "note": "Bài 9 - Danh từ"
  },
  {
    "index": 96,
    "word": "ぶどう",
    "phonetic": "ぶどう",
    "meaning": "Nho",
    "note": "Bài 9 - Danh từ"
  },
  {
    "index": 97,
    "word": "スイカ",
    "phonetic": "すいか",
    "meaning": "Dưa hấu",
    "note": "Bài 9 - Danh từ"
  },
  {
    "index": 98,
    "word": "いちご",
    "phonetic": "いちご",
    "meaning": "Dâu tây",
    "note": "Bài 9 - Danh từ"
  },
  {
    "index": 99,
    "word": "もも",
    "phonetic": "もも",
    "meaning": "Đào",
    "note": "Bài 9 - Danh từ"
  },
  {
    "index": 100,
    "word": "なし",
    "phonetic": "なし",
    "meaning": "Lê",
    "note": "Bài 9 - Danh từ"
  },
  {
    "index": 101,
    "word": "かき",
    "phonetic": "かき",
    "meaning": "Hồng giòn",
    "note": "Bài 9 - Danh từ"
  },
  {
    "index": 102,
    "word": "パイナップル",
    "phonetic": "ぱいなっぷる",
    "meaning": "Dứa, thơm",
    "note": "Bài 9 - Danh từ"
  },
  {
    "index": 103,
    "word": "ピザ",
    "phonetic": "ぴざ",
    "meaning": "Bánh Pizza",
    "note": "Bài 9 - Danh từ"
  },
  {
    "index": 104,
    "word": "スパゲッティ",
    "phonetic": "すぱげってぃ",
    "meaning": "Mỳ Ý",
    "note": "Bài 9 - Danh từ"
  },
  {
    "index": 105,
    "word": "ハンバーガー",
    "phonetic": "はんばーがー",
    "meaning": "Bánh Hamburger",
    "note": "Bài 9 - Danh từ"
  },
  {
    "index": 106,
    "word": "サラダ",
    "phonetic": "さらだ",
    "meaning": "Salad",
    "note": "Bài 9 - Danh từ"
  },
  {
    "index": 107,
    "word": "サンドイッチ",
    "phonetic": "さんどいっち",
    "meaning": "Bánh mỳ kẹp",
    "note": "Bài 9 - Danh từ"
  },
  {
    "index": 108,
    "word": "カレー",
    "phonetic": "かれー",
    "meaning": "Cà ri",
    "note": "Bài 9 - Danh từ"
  },
  {
    "index": 109,
    "word": "アイスクリーム",
    "phonetic": "あいすくりーむ",
    "meaning": "Kem",
    "note": "Bài 9 - Danh từ"
  },
  {
    "index": 110,
    "word": "ケーキ",
    "phonetic": "けーき",
    "meaning": "Bánh kem",
    "note": "Bài 9 - Danh từ"
  },
  {
    "index": 111,
    "word": "すき(な)",
    "phonetic": "すき(な)",
    "meaning": "Thích",
    "note": "Bài 9 - Tính từ"
  },
  {
    "index": 112,
    "word": "きらい(な)",
    "phonetic": "きらい(な)",
    "meaning": "Ghét",
    "note": "Bài 9 - Tính từ"
  },
  {
    "index": 113,
    "word": "じょうず(な)",
    "phonetic": "じょうず(な)",
    "meaning": "Giỏi",
    "note": "Bài 9 - Tính từ"
  },
  {
    "index": 114,
    "word": "へた(な)",
    "phonetic": "へた(な)",
    "meaning": "Dở",
    "note": "Bài 9 - Tính từ"
  },
  {
    "index": 115,
    "word": "こまかいおかね",
    "phonetic": "こまかいおかね",
    "meaning": "Tiền lẻ",
    "note": "Bài 9 - Danh từ"
  },
  {
    "index": 116,
    "word": "じ",
    "phonetic": "じ",
    "meaning": "Chữ",
    "note": "Bài 9 - Danh từ"
  },
  {
    "index": 117,
    "word": "ひらがな",
    "phonetic": "ひらがな",
    "meaning": "Chữ Hiragana",
    "note": "Bài 9 - Danh từ"
  },
  {
    "index": 118,
    "word": "カタカナ",
    "phonetic": "かたかな",
    "meaning": "Chữ Katakana",
    "note": "Bài 9 - Danh từ"
  },
  {
    "index": 119,
    "word": "かんじ",
    "phonetic": "かんじ",
    "meaning": "Chữ Hán",
    "note": "Bài 9 - Danh từ"
  },
  {
    "index": 120,
    "word": "ローマじ",
    "phonetic": "ろーまじ",
    "meaning": "Chữ La-tinh",
    "note": "Bài 9 - Danh từ"
  },
  {
    "index": 121,
    "word": "ようじ",
    "phonetic": "ようじ",
    "meaning": "Việc riêng",
    "note": "Bài 9 - Danh từ"
  },
  {
    "index": 122,
    "word": "やくそく",
    "phonetic": "やくそく",
    "meaning": "Cuộc hẹn",
    "note": "Bài 9 - Danh từ"
  },
  {
    "index": 123,
    "word": "コンサート",
    "phonetic": "こんさーと",
    "meaning": "Buổi hòa nhạc",
    "note": "Bài 9 - Danh từ"
  },
  {
    "index": 124,
    "word": "チケット",
    "phonetic": "ちけっと",
    "meaning": "Vé sự kiện",
    "note": "Bài 9 - Danh từ"
  },
  {
    "index": 125,
    "word": "おっと",
    "phonetic": "おっと",
    "meaning": "Chồng tôi",
    "note": "Bài 9 - Danh từ"
  },
  {
    "index": 126,
    "word": "つま",
    "phonetic": "つま",
    "meaning": "Vợ tôi",
    "note": "Bài 9 - Danh từ"
  },
  {
    "index": 127,
    "word": "むすこ",
    "phonetic": "むすこ",
    "meaning": "Con trai tôi",
    "note": "Bài 9 - Danh từ"
  },
  {
    "index": 128,
    "word": "むすめ",
    "phonetic": "むすめ",
    "meaning": "Con gái tôi",
    "note": "Bài 9 - Danh từ"
  },
  {
    "index": 129,
    "word": "ごしゅじん",
    "phonetic": "ごしゅじん",
    "meaning": "Chồng người khác",
    "note": "Bài 9 - Danh từ"
  },
  {
    "index": 130,
    "word": "おくさん",
    "phonetic": "おくさん",
    "meaning": "Vợ người khác",
    "note": "Bài 9 - Danh từ"
  },
  {
    "index": 131,
    "word": "むすこさん",
    "phonetic": "むすこさん",
    "meaning": "Con trai người khác",
    "note": "Bài 9 - Danh từ"
  },
  {
    "index": 132,
    "word": "むすめさん",
    "phonetic": "むすめさん",
    "meaning": "Con gái người khác",
    "note": "Bài 9 - Danh từ"
  },
  {
    "index": 133,
    "word": "わかります",
    "phonetic": "わかります",
    "meaning": "Hiểu, biết",
    "note": "Bài 9 - Động từ"
  },
  {
    "index": 134,
    "word": "あります",
    "phonetic": "あります",
    "meaning": "Có",
    "note": "Bài 9 - Động từ"
  },
  {
    "index": 135,
    "word": "パーティーにきます",
    "phonetic": "ぱーてぃーにきます",
    "meaning": "Đến dự tiệc",
    "note": "Bài 9 - Động từ"
  },
  {
    "index": 136,
    "word": "かいしゃ・がっこうをやすみます",
    "phonetic": "かいしゃ・がっこうをやすみます",
    "meaning": "Nghỉ làm/ nghỉ học",
    "note": "Bài 9 - Động từ"
  },
  {
    "index": 137,
    "word": "よくねます",
    "phonetic": "よくねます",
    "meaning": "Ngủ ngon",
    "note": "Bài 9 - Trạng từ"
  },
  {
    "index": 138,
    "word": "はやくかえります",
    "phonetic": "はやくかえります",
    "meaning": "Về sớm",
    "note": "Bài 9 - Trạng từ"
  },
  {
    "index": 139,
    "word": "もしもし",
    "phonetic": "もしもし",
    "meaning": "Alô",
    "note": "Bài 9 - Cách diễn đạt"
  },
  {
    "index": 140,
    "word": "いっしょにいかがですか",
    "phonetic": "いっしょにいかがですか",
    "meaning": "Bạn có muốn đi cùng tôi không",
    "note": "Bài 9 - Cách diễn đạt"
  },
  {
    "index": 141,
    "word": "またこんどおねがいします",
    "phonetic": "またこんどおねがいします",
    "meaning": "Hẹn lần sau nhé",
    "note": "Bài 9 - Cách diễn đạt"
  },
  {
    "index": 142,
    "word": "前",
    "phonetic": "まえ",
    "meaning": "Trước",
    "note": "Bài 9 - Hán tự"
  },
  {
    "index": 143,
    "word": "午前",
    "phonetic": "ごぜん",
    "meaning": "Giờ sáng",
    "note": "Bài 9 - Hán tự"
  },
  {
    "index": 144,
    "word": "午後",
    "phonetic": "ごご",
    "meaning": "Buổi chiều",
    "note": "Bài 9 - Hán tự"
  },
  {
    "index": 145,
    "word": "後ろ",
    "phonetic": "うしろ",
    "meaning": "Phía sau",
    "note": "Bài 9 - Hán tự"
  },
  {
    "index": 146,
    "word": "時",
    "phonetic": "じ",
    "meaning": "Giờ",
    "note": "Bài 9 - Hán tự"
  },
  {
    "index": 147,
    "word": "四時",
    "phonetic": "よじ",
    "meaning": "4 giờ",
    "note": "Bài 9 - Hán tự"
  },
  {
    "index": 148,
    "word": "七時",
    "phonetic": "しちじ",
    "meaning": "7 giờ",
    "note": "Bài 9 - Hán tự"
  },
  {
    "index": 149,
    "word": "五分",
    "phonetic": "ごふん",
    "meaning": "5 phút",
    "note": "Bài 9 - Hán tự"
  },
  {
    "index": 150,
    "word": "十分",
    "phonetic": "じゅっぷん",
    "meaning": "10 phút",
    "note": "Bài 9 - Hán tự"
  },
  {
    "index": 151,
    "word": "半",
    "phonetic": "はん",
    "meaning": "Nửa",
    "note": "Bài 9 - Hán tự"
  },
  {
    "index": 152,
    "word": "一時半",
    "phonetic": "いちじはん",
    "meaning": "1 giờ rưỡi",
    "note": "Bài 9 - Hán tự"
  },
  {
    "index": 153,
    "word": "何日",
    "phonetic": "なんにち",
    "meaning": "Ngày bao nhiêu",
    "note": "Bài 9 - Hán tự"
  },
  {
    "index": 154,
    "word": "何月",
    "phonetic": "なんがつ",
    "meaning": "Tháng mấy",
    "note": "Bài 9 - Hán tự"
  },
  {
    "index": 155,
    "word": "何年",
    "phonetic": "なんねん",
    "meaning": "Năm bao nhiêu",
    "note": "Bài 9 - Hán tự"
  },
  {
    "index": 156,
    "word": "何時",
    "phonetic": "なんじ",
    "meaning": "Mấy giờ",
    "note": "Bài 9 - Hán tự"
  },
  {
    "index": 157,
    "word": "休み",
    "phonetic": "やすみ",
    "meaning": "Giờ nghỉ, ngày nghỉ",
    "note": "Bài 9 - Hán tự"
  },
  {
    "index": 158,
    "word": "休みます",
    "phonetic": "やすみます",
    "meaning": "Nghỉ (học, làm)",
    "note": "Bài 9 - Hán tự"
  },
  {
    "index": 159,
    "word": "おとこのこ",
    "phonetic": "おとこのこ",
    "meaning": "Bé trai",
    "note": "Bài 10 - Danh từ"
  },
  {
    "index": 160,
    "word": "おんなのこ",
    "phonetic": "おんなのこ",
    "meaning": "Bé gái",
    "note": "Bài 10 - Danh từ"
  },
  {
    "index": 161,
    "word": "どうぶつ",
    "phonetic": "どうぶつ",
    "meaning": "Động vật",
    "note": "Bài 10 - Danh từ"
  },
  {
    "index": 162,
    "word": "いぬ",
    "phonetic": "いぬ",
    "meaning": "Chó",
    "note": "Bài 10 - Danh từ"
  },
  {
    "index": 163,
    "word": "ねこ",
    "phonetic": "ねこ",
    "meaning": "Mèo",
    "note": "Bài 10 - Danh từ"
  },
  {
    "index": 164,
    "word": "いけ",
    "phonetic": "いけ",
    "meaning": "Ao",
    "note": "Bài 10 - Danh từ"
  },
  {
    "index": 165,
    "word": "木",
    "phonetic": "き",
    "meaning": "Cây",
    "note": "Bài 10 - Danh từ"
  },
  {
    "index": 166,
    "word": "ビル",
    "phonetic": "びる",
    "meaning": "Tòa nhà",
    "note": "Bài 10 - Danh từ"
  },
  {
    "index": 167,
    "word": "ポスト",
    "phonetic": "ぽすと",
    "meaning": "Hộp thư",
    "note": "Bài 10 - Danh từ"
  },
  {
    "index": 168,
    "word": "まど",
    "phonetic": "まど",
    "meaning": "Cửa sổ",
    "note": "Bài 10 - Danh từ"
  },
  {
    "index": 169,
    "word": "ドア",
    "phonetic": "どあ",
    "meaning": "Cửa",
    "note": "Bài 10 - Danh từ"
  },
  {
    "index": 170,
    "word": "もの",
    "phonetic": "もの",
    "meaning": "Đồ vật",
    "note": "Bài 10 - Danh từ"
  },
  {
    "index": 171,
    "word": "ベッド",
    "phonetic": "べっど",
    "meaning": "Giường",
    "note": "Bài 10 - Danh từ"
  },
  {
    "index": 172,
    "word": "テーブル",
    "phonetic": "てーぶる",
    "meaning": "Bàn ăn",
    "note": "Bài 10 - Danh từ"
  },
  {
    "index": 173,
    "word": "たな",
    "phonetic": "たな",
    "meaning": "Kệ",
    "note": "Bài 10 - Danh từ"
  },
  {
    "index": 174,
    "word": "なか",
    "phonetic": "なか",
    "meaning": "Trong",
    "note": "Bài 10 - Danh từ"
  },
  {
    "index": 175,
    "word": "そと",
    "phonetic": "そと",
    "meaning": "Ngoài",
    "note": "Bài 10 - Danh từ"
  },
  {
    "index": 176,
    "word": "うえ",
    "phonetic": "うえ",
    "meaning": "Trên",
    "note": "Bài 10 - Danh từ"
  },
  {
    "index": 177,
    "word": "した",
    "phonetic": "した",
    "meaning": "Dưới",
    "note": "Bài 10 - Danh từ"
  },
  {
    "index": 178,
    "word": "前",
    "phonetic": "まえ",
    "meaning": "Phía trước",
    "note": "Bài 10 - Danh từ"
  },
  {
    "index": 179,
    "word": "後ろ",
    "phonetic": "うしろ",
    "meaning": "Phía sau",
    "note": "Bài 10 - Danh từ"
  },
  {
    "index": 180,
    "word": "みぎ",
    "phonetic": "みぎ",
    "meaning": "Bên phải",
    "note": "Bài 10 - Danh từ"
  },
  {
    "index": 181,
    "word": "ひだり",
    "phonetic": "ひだり",
    "meaning": "Bên trái",
    "note": "Bài 10 - Danh từ"
  },
  {
    "index": 182,
    "word": "となり",
    "phonetic": "となり",
    "meaning": "Bên cạnh",
    "note": "Bài 10 - Danh từ"
  },
  {
    "index": 183,
    "word": "あいだ",
    "phonetic": "あいだ",
    "meaning": "Ở giữa",
    "note": "Bài 10 - Danh từ"
  },
  {
    "index": 184,
    "word": "そば",
    "phonetic": "そば",
    "meaning": "Xung quanh",
    "note": "Bài 10 - Danh từ"
  },
  {
    "index": 185,
    "word": "ちかく",
    "phonetic": "ちかく",
    "meaning": "Gần",
    "note": "Bài 10 - Danh từ"
  },
  {
    "index": 186,
    "word": "れいぞうこ",
    "phonetic": "れいぞうこ",
    "meaning": "Tủ lạnh",
    "note": "Bài 10 - Danh từ"
  },
  {
    "index": 187,
    "word": "はこ",
    "phonetic": "はこ",
    "meaning": "Hộp",
    "note": "Bài 10 - Danh từ"
  },
  {
    "index": 188,
    "word": "スイッチ",
    "phonetic": "すいっち",
    "meaning": "Công tắc",
    "note": "Bài 10 - Danh từ"
  },
  {
    "index": 189,
    "word": "ポケット",
    "phonetic": "ぽけっと",
    "meaning": "Túi",
    "note": "Bài 10 - Danh từ"
  },
  {
    "index": 190,
    "word": "本や",
    "phonetic": "ほんや",
    "meaning": "Nhà sách",
    "note": "Bài 10 - Danh từ"
  },
  {
    "index": 191,
    "word": "パンや",
    "phonetic": "ぱんや",
    "meaning": "Cửa hàng bánh mỳ",
    "note": "Bài 10 - Danh từ"
  },
  {
    "index": 192,
    "word": "Nのりば",
    "phonetic": "えぬのりば",
    "meaning": "Bến xe buýt, điểm đón xe",
    "note": "Bài 10 - Danh từ"
  },
  {
    "index": 193,
    "word": "でんち",
    "phonetic": "でんち",
    "meaning": "Pin",
    "note": "Bài 10 - Danh từ"
  },
  {
    "index": 194,
    "word": "エーティーエム",
    "phonetic": "えーてぃーえむ",
    "meaning": "Cây ATM",
    "note": "Bài 10 - Danh từ"
  },
  {
    "index": 195,
    "word": "ナンプラー",
    "phonetic": "なんぷらー",
    "meaning": "Nước mắm Thái",
    "note": "Bài 10 - Danh từ"
  },
  {
    "index": 196,
    "word": "のみもののコーナー",
    "phonetic": "のみもののこーなー",
    "meaning": "Quầy nước",
    "note": "Bài 10 - Danh từ"
  },
  {
    "index": 197,
    "word": "やさいのコーナー",
    "phonetic": "やさいのこーなー",
    "meaning": "Gian hàng rau",
    "note": "Bài 10 - Danh từ"
  },
  {
    "index": 198,
    "word": "います",
    "phonetic": "います",
    "meaning": "Có (người/động vật ở)",
    "note": "Bài 10 - Động từ"
  },
  {
    "index": 199,
    "word": "あります",
    "phonetic": "あります",
    "meaning": "Có (đồ vật cây cối ở)",
    "note": "Bài 10 - Động từ"
  },
  {
    "index": 200,
    "word": "先生",
    "phonetic": "せんせい",
    "meaning": "Giáo viên",
    "note": "Bài 10 - Hán tự"
  },
  {
    "index": 201,
    "word": "学生",
    "phonetic": "がくせい",
    "meaning": "Học sinh",
    "note": "Bài 10 - Hán tự"
  },
  {
    "index": 202,
    "word": "学校",
    "phonetic": "がっこう",
    "meaning": "Trường học",
    "note": "Bài 10 - Hán tự"
  },
  {
    "index": 203,
    "word": "会います",
    "phonetic": "あいます",
    "meaning": "Gặp",
    "note": "Bài 10 - Hán tự"
  },
  {
    "index": 204,
    "word": "教会",
    "phonetic": "きょうかい",
    "meaning": "Nhà thờ",
    "note": "Bài 10 - Hán tự"
  },
  {
    "index": 205,
    "word": "会社",
    "phonetic": "かいしゃ",
    "meaning": "Công ty",
    "note": "Bài 10 - Hán tự"
  },
  {
    "index": 206,
    "word": "国",
    "phonetic": "くに",
    "meaning": "Đất nước",
    "note": "Bài 10 - Hán tự"
  },
  {
    "index": 207,
    "word": "韓国",
    "phonetic": "かんこく",
    "meaning": "Hàn Quốc",
    "note": "Bài 10 - Hán tự"
  },
  {
    "index": 208,
    "word": "山",
    "phonetic": "やま",
    "meaning": "Núi",
    "note": "Bài 10 - Hán tự"
  },
  {
    "index": 209,
    "word": "富士山",
    "phonetic": "ふじさん",
    "meaning": "Núi Phú Sĩ",
    "note": "Bài 10 - Hán tự"
  },
  {
    "index": 210,
    "word": "川",
    "phonetic": "かわ",
    "meaning": "Sông",
    "note": "Bài 10 - Hán tự"
  },
  {
    "index": 211,
    "word": "メコン川",
    "phonetic": "めこんがわ",
    "meaning": "Sông Mêkông",
    "note": "Bài 10 - Hán tự"
  },
  {
    "index": 212,
    "word": "本",
    "phonetic": "ほん",
    "meaning": "Sách",
    "note": "Bài 10 - Hán tự"
  },
  {
    "index": 213,
    "word": "本や",
    "phonetic": "ほんや",
    "meaning": "Hiệu sách",
    "note": "Bài 10 - Hán tự"
  },
  {
    "index": 214,
    "word": "日本",
    "phonetic": "にほん",
    "meaning": "Nhật Bản",
    "note": "Bài 10 - Hán tự"
  },
  {
    "index": 215,
    "word": "人",
    "phonetic": "ひと",
    "meaning": "Người",
    "note": "Bài 10 - Hán tự"
  },
  {
    "index": 216,
    "word": "日本人",
    "phonetic": "にほんじん",
    "meaning": "Người Nhật Bản",
    "note": "Bài 10 - Hán tự"
  },
  {
    "index": 217,
    "word": "何人",
    "phonetic": "なんにん",
    "meaning": "Mấy người",
    "note": "Bài 10 - Hán tự"
  },
  {
    "index": 218,
    "word": "一人",
    "phonetic": "ひとり",
    "meaning": "Một người",
    "note": "Bài 10 - Hán tự"
  },
  {
    "index": 219,
    "word": "はがき",
    "phonetic": "はがき",
    "meaning": "Bưu thiếp",
    "note": "Bài 11 - Danh từ"
  },
  {
    "index": 220,
    "word": "きって",
    "phonetic": "きって",
    "meaning": "Tem",
    "note": "Bài 11 - Danh từ"
  },
  {
    "index": 221,
    "word": "ふうとう",
    "phonetic": "ふうとう",
    "meaning": "Phong bì",
    "note": "Bài 11 - Danh từ"
  },
  {
    "index": 222,
    "word": "おさら",
    "phonetic": "おさら",
    "meaning": "Đĩa",
    "note": "Bài 11 - Danh từ"
  },
  {
    "index": 223,
    "word": "ちゃわん",
    "phonetic": "ちゃわん",
    "meaning": "Chén",
    "note": "Bài 11 - Danh từ"
  },
  {
    "index": 224,
    "word": "いちだい",
    "phonetic": "いちだい",
    "meaning": "1 chiếc/cái (đồ lớn)",
    "note": "Bài 11 - Lượng từ"
  },
  {
    "index": 225,
    "word": "にだい",
    "phonetic": "にだい",
    "meaning": "2 chiếc/cái (đồ lớn)",
    "note": "Bài 11 - Lượng từ"
  },
  {
    "index": 226,
    "word": "さんだい",
    "phonetic": "さんだい",
    "meaning": "3 chiếc/cái (đồ lớn)",
    "note": "Bài 11 - Lượng từ"
  },
  {
    "index": 227,
    "word": "よんだい",
    "phonetic": "よんだい",
    "meaning": "4 chiếc/cái (đồ lớn)",
    "note": "Bài 11 - Lượng từ"
  },
  {
    "index": 228,
    "word": "ごだい",
    "phonetic": "ごだい",
    "meaning": "5 chiếc/cái (đồ lớn)",
    "note": "Bài 11 - Lượng từ"
  },
  {
    "index": 229,
    "word": "ろくだい",
    "phonetic": "ろくだい",
    "meaning": "6 chiếc/cái (đồ lớn)",
    "note": "Bài 11 - Lượng từ"
  },
  {
    "index": 230,
    "word": "ななだい",
    "phonetic": "ななだい",
    "meaning": "7 chiếc/cái (đồ lớn)",
    "note": "Bài 11 - Lượng từ"
  },
  {
    "index": 231,
    "word": "はちだい",
    "phonetic": "はちだい",
    "meaning": "8 chiếc/cái (đồ lớn)",
    "note": "Bài 11 - Lượng từ"
  },
  {
    "index": 232,
    "word": "きゅうだい",
    "phonetic": "きゅうだい",
    "meaning": "9 chiếc/cái (đồ lớn)",
    "note": "Bài 11 - Lượng từ"
  },
  {
    "index": 233,
    "word": "じゅうだい",
    "phonetic": "じゅうだい",
    "meaning": "10 chiếc/cái (đồ lớn)",
    "note": "Bài 11 - Lượng từ"
  },
  {
    "index": 234,
    "word": "いちまい",
    "phonetic": "いちまい",
    "meaning": "1 bức/tấm/tờ (mỏng)",
    "note": "Bài 11 - Lượng từ"
  },
  {
    "index": 235,
    "word": "にまい",
    "phonetic": "にまい",
    "meaning": "2 bức/tấm/tờ (mỏng)",
    "note": "Bài 11 - Lượng từ"
  },
  {
    "index": 236,
    "word": "さんまい",
    "phonetic": "さんまい",
    "meaning": "3 bức/tấm/tờ (mỏng)",
    "note": "Bài 11 - Lượng từ"
  },
  {
    "index": 237,
    "word": "よんまい",
    "phonetic": "よんまい",
    "meaning": "4 bức/tấm/tờ (mỏng)",
    "note": "Bài 11 - Lượng từ"
  },
  {
    "index": 238,
    "word": "ごまい",
    "phonetic": "ごまい",
    "meaning": "5 bức/tấm/tờ (mỏng)",
    "note": "Bài 11 - Lượng từ"
  },
  {
    "index": 239,
    "word": "ろくまい",
    "phonetic": "ろくまい",
    "meaning": "6 bức/tấm/tờ (mỏng)",
    "note": "Bài 11 - Lượng từ"
  },
  {
    "index": 240,
    "word": "ななまい",
    "phonetic": "ななまい",
    "meaning": "7 bức/tấm/tờ (mỏng)",
    "note": "Bài 11 - Lượng từ"
  },
  {
    "index": 241,
    "word": "はちまい",
    "phonetic": "はちまい",
    "meaning": "8 bức/tấm/tờ (mỏng)",
    "note": "Bài 11 - Lượng từ"
  },
  {
    "index": 242,
    "word": "きゅうまい",
    "phonetic": "きゅうまい",
    "meaning": "9 bức/tấm/tờ (mỏng)",
    "note": "Bài 11 - Lượng từ"
  },
  {
    "index": 243,
    "word": "じゅうまい",
    "phonetic": "じゅうまい",
    "meaning": "10 bức/tấm/tờ (mỏng)",
    "note": "Bài 11 - Lượng từ"
  },
  {
    "index": 244,
    "word": "ひとつ",
    "phonetic": "ひとつ",
    "meaning": "1 quả/cái (nhỏ)",
    "note": "Bài 11 - Lượng từ"
  },
  {
    "index": 245,
    "word": "ふたつ",
    "phonetic": "ふたつ",
    "meaning": "2 quả/cái (nhỏ)",
    "note": "Bài 11 - Lượng từ"
  },
  {
    "index": 246,
    "word": "みっつ",
    "phonetic": "みっつ",
    "meaning": "3 quả/cái (nhỏ)",
    "note": "Bài 11 - Lượng từ"
  },
  {
    "index": 247,
    "word": "よっつ",
    "phonetic": "よっつ",
    "meaning": "4 quả/cái (nhỏ)",
    "note": "Bài 11 - Lượng từ"
  },
  {
    "index": 248,
    "word": "いつつ",
    "phonetic": "いつつ",
    "meaning": "5 quả/cái (nhỏ)",
    "note": "Bài 11 - Lượng từ"
  },
  {
    "index": 249,
    "word": "むっつ",
    "phonetic": "むっつ",
    "meaning": "6 quả/cái (nhỏ)",
    "note": "Bài 11 - Lượng từ"
  },
  {
    "index": 250,
    "word": "ななつ",
    "phonetic": "ななつ",
    "meaning": "7 quả/cái (nhỏ)",
    "note": "Bài 11 - Lượng từ"
  },
  {
    "index": 251,
    "word": "やっつ",
    "phonetic": "やっつ",
    "meaning": "8 quả/cái (nhỏ)",
    "note": "Bài 11 - Lượng từ"
  },
  {
    "index": 252,
    "word": "ここのつ",
    "phonetic": "ここのつ",
    "meaning": "9 quả/cái (nhỏ)",
    "note": "Bài 11 - Lượng từ"
  },
  {
    "index": 253,
    "word": "とお",
    "phonetic": "とお",
    "meaning": "10 quả/cái (nhỏ)",
    "note": "Bài 11 - Lượng từ"
  },
  {
    "index": 254,
    "word": "いっさつ",
    "phonetic": "いっさつ",
    "meaning": "1 cuốn",
    "note": "Bài 11 - Lượng từ"
  },
  {
    "index": 255,
    "word": "にさつ",
    "phonetic": "にさつ",
    "meaning": "2 cuốn",
    "note": "Bài 11 - Lượng từ"
  },
  {
    "index": 256,
    "word": "さんさつ",
    "phonetic": "さんさつ",
    "meaning": "3 cuốn",
    "note": "Bài 11 - Lượng từ"
  },
  {
    "index": 257,
    "word": "よんさつ",
    "phonetic": "よんさつ",
    "meaning": "4 cuốn",
    "note": "Bài 11 - Lượng từ"
  },
  {
    "index": 258,
    "word": "ごさつ",
    "phonetic": "ごさつ",
    "meaning": "5 cuốn",
    "note": "Bài 11 - Lượng từ"
  },
  {
    "index": 259,
    "word": "ろくさつ",
    "phonetic": "ろくさつ",
    "meaning": "6 cuốn",
    "note": "Bài 11 - Lượng từ"
  },
  {
    "index": 260,
    "word": "ななさつ",
    "phonetic": "ななさつ",
    "meaning": "7 cuốn",
    "note": "Bài 11 - Lượng từ"
  },
  {
    "index": 261,
    "word": "はっさつ",
    "phonetic": "はっさつ",
    "meaning": "8 cuốn",
    "note": "Bài 11 - Lượng từ"
  },
  {
    "index": 262,
    "word": "きゅうさつ",
    "phonetic": "きゅうさつ",
    "meaning": "9 cuốn",
    "note": "Bài 11 - Lượng từ"
  },
  {
    "index": 263,
    "word": "じゅっさつ",
    "phonetic": "じゅっさつ",
    "meaning": "10 cuốn",
    "note": "Bài 11 - Lượng từ"
  },
  {
    "index": 264,
    "word": "いっぽん",
    "phonetic": "いっぽん",
    "meaning": "1 cây/cái (thon dài)",
    "note": "Bài 11 - Lượng từ"
  },
  {
    "index": 265,
    "word": "にほん",
    "phonetic": "にほん",
    "meaning": "2 cây/cái (thon dài)",
    "note": "Bài 11 - Lượng từ"
  },
  {
    "index": 266,
    "word": "さんぼん",
    "phonetic": "さんぼん",
    "meaning": "3 cây/cái (thon dài)",
    "note": "Bài 11 - Lượng từ"
  },
  {
    "index": 267,
    "word": "よんほん",
    "phonetic": "よんほん",
    "meaning": "4 cây/cái (thon dài)",
    "note": "Bài 11 - Lượng từ"
  },
  {
    "index": 268,
    "word": "ごほん",
    "phonetic": "ごほん",
    "meaning": "5 cây/cái (thon dài)",
    "note": "Bài 11 - Lượng từ"
  },
  {
    "index": 269,
    "word": "ろっぽん",
    "phonetic": "ろっぽん",
    "meaning": "6 cây/cái (thon dài)",
    "note": "Bài 11 - Lượng từ"
  },
  {
    "index": 270,
    "word": "ななほん",
    "phonetic": "ななほん",
    "meaning": "7 cây/cái (thon dài)",
    "note": "Bài 11 - Lượng từ"
  },
  {
    "index": 271,
    "word": "はっぽん",
    "phonetic": "はっぽん",
    "meaning": "8 cây/cái (thon dài)",
    "note": "Bài 11 - Lượng từ"
  },
  {
    "index": 272,
    "word": "きゅうほん",
    "phonetic": "きゅうほん",
    "meaning": "9 cây/cái (thon dài)",
    "note": "Bài 11 - Lượng từ"
  },
  {
    "index": 273,
    "word": "じゅっぽん",
    "phonetic": "じゅっぽん",
    "meaning": "10 cây/cái (thon dài)",
    "note": "Bài 11 - Lượng từ"
  },
  {
    "index": 274,
    "word": "ぜんぶで",
    "phonetic": "ぜんぶで",
    "meaning": "Tổng cộng",
    "note": "Bài 11 - Trạng từ"
  },
  {
    "index": 275,
    "word": "エアメール",
    "phonetic": "えあめーる",
    "meaning": "Gửi thư bằng đường hàng không",
    "note": "Bài 11 - Danh từ"
  },
  {
    "index": 276,
    "word": "こうくうびん",
    "phonetic": "こうくうびん",
    "meaning": "Đường hàng không",
    "note": "Bài 11 - Danh từ"
  },
  {
    "index": 277,
    "word": "ふなびん",
    "phonetic": "ふなびん",
    "meaning": "Đường tàu biển",
    "note": "Bài 11 - Danh từ"
  },
  {
    "index": 278,
    "word": "かきとめ",
    "phonetic": "かきとめ",
    "meaning": "Gửi (tiền, thư) đảm bảo",
    "note": "Bài 11 - Danh từ"
  },
  {
    "index": 279,
    "word": "そくたつ",
    "phonetic": "そくたつ",
    "meaning": "Chuyển phát nhanh",
    "note": "Bài 11 - Danh từ"
  },
  {
    "index": 280,
    "word": "いっかげつ",
    "phonetic": "いっかげつ",
    "meaning": "1 tháng",
    "note": "Bài 11 - Lượng từ"
  },
  {
    "index": 281,
    "word": "にかげつ",
    "phonetic": "にかげつ",
    "meaning": "2 tháng",
    "note": "Bài 11 - Lượng từ"
  },
  {
    "index": 282,
    "word": "さんかげつ",
    "phonetic": "さんかげつ",
    "meaning": "3 tháng",
    "note": "Bài 11 - Lượng từ"
  },
  {
    "index": 283,
    "word": "よんかげつ",
    "phonetic": "よんかげつ",
    "meaning": "4 tháng",
    "note": "Bài 11 - Lượng từ"
  },
  {
    "index": 284,
    "word": "ごかげつ",
    "phonetic": "ごかげつ",
    "meaning": "5 tháng",
    "note": "Bài 11 - Lượng từ"
  },
  {
    "index": 285,
    "word": "ろっかげつ",
    "phonetic": "ろっかげつ",
    "meaning": "6 tháng",
    "note": "Bài 11 - Lượng từ"
  },
  {
    "index": 286,
    "word": "ななかげつ",
    "phonetic": "ななかげつ",
    "meaning": "7 tháng",
    "note": "Bài 11 - Lượng từ"
  },
  {
    "index": 287,
    "word": "はっかげつ",
    "phonetic": "はっかげつ",
    "meaning": "8 tháng",
    "note": "Bài 11 - Lượng từ"
  },
  {
    "index": 288,
    "word": "きゅうかげつ",
    "phonetic": "きゅうかげつ",
    "meaning": "9 tháng",
    "note": "Bài 11 - Lượng từ"
  },
  {
    "index": 289,
    "word": "じゅっかげつ",
    "phonetic": "じゅっかげつ",
    "meaning": "10 tháng",
    "note": "Bài 11 - Lượng từ"
  },
  {
    "index": 290,
    "word": "いっしゅうかん",
    "phonetic": "いっしゅうかん",
    "meaning": "1 tuần",
    "note": "Bài 11 - Lượng từ"
  },
  {
    "index": 291,
    "word": "にしゅうかん",
    "phonetic": "にしゅうかん",
    "meaning": "2 tuần",
    "note": "Bài 11 - Lượng từ"
  },
  {
    "index": 292,
    "word": "さんしゅうかん",
    "phonetic": "さんしゅうかん",
    "meaning": "3 tuần",
    "note": "Bài 11 - Lượng từ"
  },
  {
    "index": 293,
    "word": "よんしゅうかん",
    "phonetic": "よんしゅうかん",
    "meaning": "4 tuần",
    "note": "Bài 11 - Lượng từ"
  },
  {
    "index": 294,
    "word": "ごしゅうかん",
    "phonetic": "ごしゅうかん",
    "meaning": "5 tuần",
    "note": "Bài 11 - Lượng từ"
  },
  {
    "index": 295,
    "word": "ろくしゅうかん",
    "phonetic": "ろくしゅうかん",
    "meaning": "6 tuần",
    "note": "Bài 11 - Lượng từ"
  },
  {
    "index": 296,
    "word": "じゅっしゅうかん",
    "phonetic": "じゅっしゅうかん",
    "meaning": "10 tuần",
    "note": "Bài 11 - Lượng từ"
  },
  {
    "index": 297,
    "word": "いちじかん",
    "phonetic": "いちじかん",
    "meaning": "1 tiếng",
    "note": "Bài 11 - Lượng từ"
  },
  {
    "index": 298,
    "word": "にじかん",
    "phonetic": "にじかん",
    "meaning": "2 tiếng",
    "note": "Bài 11 - Lượng từ"
  },
  {
    "index": 299,
    "word": "さんじかん",
    "phonetic": "さんじかん",
    "meaning": "3 tiếng",
    "note": "Bài 11 - Lượng từ"
  },
  {
    "index": 300,
    "word": "よじかん",
    "phonetic": "よじかん",
    "meaning": "4 tiếng",
    "note": "Bài 11 - Lượng từ"
  },
  {
    "index": 301,
    "word": "ごじかん",
    "phonetic": "ごじかん",
    "meaning": "5 tiếng",
    "note": "Bài 11 - Lượng từ"
  },
  {
    "index": 302,
    "word": "ろくじかん",
    "phonetic": "ろくじかん",
    "meaning": "6 tiếng",
    "note": "Bài 11 - Lượng từ"
  },
  {
    "index": 303,
    "word": "しちじかん",
    "phonetic": "しちじかん",
    "meaning": "7 tiếng",
    "note": "Bài 11 - Lượng từ"
  },
  {
    "index": 304,
    "word": "はちじかん",
    "phonetic": "はちじかん",
    "meaning": "8 tiếng",
    "note": "Bài 11 - Lượng từ"
  },
  {
    "index": 305,
    "word": "くじかん",
    "phonetic": "くじかん",
    "meaning": "9 tiếng",
    "note": "Bài 11 - Lượng từ"
  },
  {
    "index": 306,
    "word": "じゅうじかん",
    "phonetic": "じゅうじかん",
    "meaning": "10 tiếng",
    "note": "Bài 11 - Lượng từ"
  },
  {
    "index": 307,
    "word": "いっかい",
    "phonetic": "いっかい",
    "meaning": "1 lần",
    "note": "Bài 11 - Lượng từ"
  },
  {
    "index": 308,
    "word": "にかい",
    "phonetic": "にかい",
    "meaning": "2 lần",
    "note": "Bài 11 - Lượng từ"
  },
  {
    "index": 309,
    "word": "さんかい",
    "phonetic": "さんかい",
    "meaning": "3 lần",
    "note": "Bài 11 - Lượng từ"
  },
  {
    "index": 310,
    "word": "よんかい",
    "phonetic": "よんかい",
    "meaning": "4 lần",
    "note": "Bài 11 - Lượng từ"
  },
  {
    "index": 311,
    "word": "ごかい",
    "phonetic": "ごかい",
    "meaning": "5 lần",
    "note": "Bài 11 - Lượng từ"
  },
  {
    "index": 312,
    "word": "ろっかい",
    "phonetic": "ろっかい",
    "meaning": "6 lần",
    "note": "Bài 11 - Lượng từ"
  },
  {
    "index": 313,
    "word": "ななかい",
    "phonetic": "ななかい",
    "meaning": "7 lần",
    "note": "Bài 11 - Lượng từ"
  },
  {
    "index": 314,
    "word": "はっかい",
    "phonetic": "はっかい",
    "meaning": "8 lần",
    "note": "Bài 11 - Lượng từ"
  },
  {
    "index": 315,
    "word": "きゅうかい",
    "phonetic": "きゅうかい",
    "meaning": "9 lần",
    "note": "Bài 11 - Lượng từ"
  },
  {
    "index": 316,
    "word": "じゅっかい",
    "phonetic": "じゅっかい",
    "meaning": "10 lần",
    "note": "Bài 11 - Lượng từ"
  },
  {
    "index": 317,
    "word": "かかります",
    "phonetic": "かかります",
    "meaning": "Mất, tốn",
    "note": "Bài 11 - Động từ"
  },
  {
    "index": 318,
    "word": "います",
    "phonetic": "います",
    "meaning": "Ở lại",
    "note": "Bài 11 - Động từ"
  },
  {
    "index": 319,
    "word": "父",
    "phonetic": "ちち",
    "meaning": "Cha mình",
    "note": "Bài 11 - Hán tự"
  },
  {
    "index": 320,
    "word": "祖父",
    "phonetic": "そふ",
    "meaning": "Ông mình",
    "note": "Bài 11 - Hán tự"
  },
  {
    "index": 321,
    "word": "お父さん",
    "phonetic": "おとうさん",
    "meaning": "Cha người khác",
    "note": "Bài 11 - Hán tự"
  },
  {
    "index": 322,
    "word": "母",
    "phonetic": "はは",
    "meaning": "Mẹ mình",
    "note": "Bài 11 - Hán tự"
  },
  {
    "index": 323,
    "word": "祖母",
    "phonetic": "そぼ",
    "meaning": "Bà mình",
    "note": "Bài 11 - Hán tự"
  },
  {
    "index": 324,
    "word": "お母さん",
    "phonetic": "おかあさん",
    "meaning": "Mẹ người khác",
    "note": "Bài 11 - Hán tự"
  },
  {
    "index": 325,
    "word": "子ども",
    "phonetic": "こども",
    "meaning": "Trẻ con",
    "note": "Bài 11 - Hán tự"
  },
  {
    "index": 326,
    "word": "息子",
    "phonetic": "むすこ",
    "meaning": "Con trai",
    "note": "Bài 11 - Hán tự"
  },
  {
    "index": 327,
    "word": "男の子",
    "phonetic": "おとこのこ",
    "meaning": "Bé trai",
    "note": "Bài 11 - Hán tự"
  },
  {
    "index": 328,
    "word": "男の人",
    "phonetic": "おとこのひと",
    "meaning": "Người đàn ông",
    "note": "Bài 11 - Hán tự"
  },
  {
    "index": 329,
    "word": "女の子",
    "phonetic": "おんなのこ",
    "meaning": "Bé gái",
    "note": "Bài 11 - Hán tự"
  },
  {
    "index": 330,
    "word": "女の人",
    "phonetic": "おんなのひと",
    "meaning": "Người phụ nữ",
    "note": "Bài 11 - Hán tự"
  },
  {
    "index": 331,
    "word": "上",
    "phonetic": "うえ",
    "meaning": "Trên",
    "note": "Bài 11 - Hán tự"
  },
  {
    "index": 332,
    "word": "下",
    "phonetic": "した",
    "meaning": "Dưới",
    "note": "Bài 11 - Hán tự"
  },
  {
    "index": 333,
    "word": "地下",
    "phonetic": "ちか",
    "meaning": "Tầng hầm",
    "note": "Bài 11 - Hán tự"
  },
  {
    "index": 334,
    "word": "中",
    "phonetic": "なか",
    "meaning": "Bên trong",
    "note": "Bài 11 - Hán tự"
  },
  {
    "index": 335,
    "word": "中国",
    "phonetic": "ちゅうごく",
    "meaning": "Trung Quốc",
    "note": "Bài 11 - Hán tự"
  },
  {
    "index": 336,
    "word": "外",
    "phonetic": "そと",
    "meaning": "Bên ngoài",
    "note": "Bài 11 - Hán tự"
  },
  {
    "index": 337,
    "word": "外国",
    "phonetic": "がいこく",
    "meaning": "Nước ngoài",
    "note": "Bài 11 - Hán tự"
  },
  {
    "index": 338,
    "word": "右",
    "phonetic": "みぎ",
    "meaning": "Bên phải",
    "note": "Bài 11 - Hán tự"
  },
  {
    "index": 339,
    "word": "左",
    "phonetic": "ひだり",
    "meaning": "Bên trái",
    "note": "Bài 11 - Hán tự"
  },
  {
    "index": 340,
    "word": "きせつ",
    "phonetic": "きせつ",
    "meaning": "Mùa",
    "note": "Bài 12 - Danh từ"
  },
  {
    "index": 341,
    "word": "はる",
    "phonetic": "はる",
    "meaning": "Mùa xuân",
    "note": "Bài 12 - Danh từ"
  },
  {
    "index": 342,
    "word": "なつ",
    "phonetic": "なつ",
    "meaning": "Mùa hè",
    "note": "Bài 12 - Danh từ"
  },
  {
    "index": 343,
    "word": "あき",
    "phonetic": "あき",
    "meaning": "Mùa thu",
    "note": "Bài 12 - Danh từ"
  },
  {
    "index": 344,
    "word": "ふゆ",
    "phonetic": "ふゆ",
    "meaning": "Mùa đông",
    "note": "Bài 12 - Danh từ"
  },
  {
    "index": 345,
    "word": "てんき",
    "phonetic": "てんき",
    "meaning": "Thời tiết",
    "note": "Bài 12 - Danh từ"
  },
  {
    "index": 346,
    "word": "はれ",
    "phonetic": "はれ",
    "meaning": "Trời nắng",
    "note": "Bài 12 - Danh từ"
  },
  {
    "index": 347,
    "word": "あめ",
    "phonetic": "あめ",
    "meaning": "Trời mưa",
    "note": "Bài 12 - Danh từ"
  },
  {
    "index": 348,
    "word": "くもり",
    "phonetic": "くもり",
    "meaning": "Trời âm u",
    "note": "Bài 12 - Danh từ"
  },
  {
    "index": 349,
    "word": "ゆき",
    "phonetic": "ゆき",
    "meaning": "Trời có tuyết",
    "note": "Bài 12 - Danh từ"
  },
  {
    "index": 350,
    "word": "いいてんき",
    "phonetic": "いいてんき",
    "meaning": "Trời đẹp",
    "note": "Bài 12 - Danh từ"
  },
  {
    "index": 351,
    "word": "おまつり",
    "phonetic": "おまつり",
    "meaning": "Lễ hội",
    "note": "Bài 12 - Danh từ"
  },
  {
    "index": 352,
    "word": "テスト",
    "phonetic": "てすと",
    "meaning": "Kiểm tra",
    "note": "Bài 12 - Danh từ"
  },
  {
    "index": 353,
    "word": "しけん",
    "phonetic": "しけん",
    "meaning": "Kỳ thi",
    "note": "Bài 12 - Danh từ"
  },
  {
    "index": 354,
    "word": "いけばな",
    "phonetic": "いけばな",
    "meaning": "Cắm hoa",
    "note": "Bài 12 - Danh từ"
  },
  {
    "index": 355,
    "word": "すし",
    "phonetic": "すし",
    "meaning": "Món Sushi",
    "note": "Bài 12 - Danh từ"
  },
  {
    "index": 356,
    "word": "さしみ",
    "phonetic": "さしみ",
    "meaning": "Món cá sống",
    "note": "Bài 12 - Danh từ"
  },
  {
    "index": 357,
    "word": "てんぷら",
    "phonetic": "てんぷら",
    "meaning": "Món Tempura",
    "note": "Bài 12 - Danh từ"
  },
  {
    "index": 358,
    "word": "あまい",
    "phonetic": "あまい",
    "meaning": "Ngọt",
    "note": "Bài 12 - Tính từ"
  },
  {
    "index": 359,
    "word": "からい",
    "phonetic": "からい",
    "meaning": "Cay",
    "note": "Bài 12 - Tính từ"
  },
  {
    "index": 360,
    "word": "あたたかい",
    "phonetic": "あたたかい",
    "meaning": "Ấm áp",
    "note": "Bài 12 - Tính từ"
  },
  {
    "index": 361,
    "word": "すずしい",
    "phonetic": "すずしい",
    "meaning": "Mát mẻ",
    "note": "Bài 12 - Tính từ"
  },
  {
    "index": 362,
    "word": "ほっかいどう",
    "phonetic": "ほっかいどう",
    "meaning": "Đảo Hokkaido",
    "note": "Bài 12 - Danh từ"
  },
  {
    "index": 363,
    "word": "しこく",
    "phonetic": "しこく",
    "meaning": "Đảo Shikoku",
    "note": "Bài 12 - Danh từ"
  },
  {
    "index": 364,
    "word": "きゅうしゅう",
    "phonetic": "きゅうしゅう",
    "meaning": "Đảo Kyushu",
    "note": "Bài 12 - Danh từ"
  },
  {
    "index": 365,
    "word": "おきなわ",
    "phonetic": "おきなわ",
    "meaning": "Đảo Okinawa",
    "note": "Bài 12 - Danh từ"
  },
  {
    "index": 366,
    "word": "ちかい",
    "phonetic": "ちかい",
    "meaning": "Gần",
    "note": "Bài 12 - Tính từ"
  },
  {
    "index": 367,
    "word": "とおい",
    "phonetic": "とおい",
    "meaning": "Xa",
    "note": "Bài 12 - Tính từ"
  },
  {
    "index": 368,
    "word": "おおい",
    "phonetic": "おおい",
    "meaning": "Nhiều, đông",
    "note": "Bài 12 - Tính từ"
  },
  {
    "index": 369,
    "word": "すくない",
    "phonetic": "すくない",
    "meaning": "Ít, vắng",
    "note": "Bài 12 - Tính từ"
  },
  {
    "index": 370,
    "word": "はやい",
    "phonetic": "はやい",
    "meaning": "Sớm, nhanh",
    "note": "Bài 12 - Tính từ"
  },
  {
    "index": 371,
    "word": "おそい",
    "phonetic": "おそい",
    "meaning": "Trễ, chậm",
    "note": "Bài 12 - Tính từ"
  },
  {
    "index": 372,
    "word": "おもい",
    "phonetic": "おもい",
    "meaning": "Nặng",
    "note": "Bài 12 - Tính từ"
  },
  {
    "index": 373,
    "word": "かるい",
    "phonetic": "かるい",
    "meaning": "Nhẹ",
    "note": "Bài 12 - Tính từ"
  },
  {
    "index": 374,
    "word": "かんたん(な)",
    "phonetic": "かんたん(な)",
    "meaning": "Đơn giản",
    "note": "Bài 12 - Tính từ"
  },
  {
    "index": 375,
    "word": "ふくざつ(な)",
    "phonetic": "ふくざつ(な)",
    "meaning": "Phức tạp",
    "note": "Bài 12 - Tính từ"
  },
  {
    "index": 376,
    "word": "ずっと",
    "phonetic": "ずっと",
    "meaning": "Hơn hẳn",
    "note": "Bài 12 - Trạng từ"
  },
  {
    "index": 377,
    "word": "いちばん",
    "phonetic": "いちばん",
    "meaning": "Nhất",
    "note": "Bài 12 - Trạng từ"
  },
  {
    "index": 378,
    "word": "いっていらっしゃい",
    "phonetic": "いっていらっしゃい",
    "meaning": "Bạn đi nhé",
    "note": "Bài 12 - Cách diễn đạt"
  },
  {
    "index": 379,
    "word": "いってきます",
    "phonetic": "いってきます",
    "meaning": "Tôi đi đây",
    "note": "Bài 12 - Cách diễn đạt"
  },
  {
    "index": 380,
    "word": "ただいま",
    "phonetic": "ただいま",
    "meaning": "Tôi đã về đây",
    "note": "Bài 12 - Cách diễn đạt"
  },
  {
    "index": 381,
    "word": "おかえりなさい",
    "phonetic": "おかえりなさい",
    "meaning": "Bạn về rồi à",
    "note": "Bài 12 - Cách diễn đạt"
  },
  {
    "index": 382,
    "word": "大きい",
    "phonetic": "おおきい",
    "meaning": "To lớn",
    "note": "Bài 12 - Hán tự"
  },
  {
    "index": 383,
    "word": "大学",
    "phonetic": "だいがく",
    "meaning": "Đại học",
    "note": "Bài 12 - Hán tự"
  },
  {
    "index": 384,
    "word": "小さい",
    "phonetic": "ちいさい",
    "meaning": "Nhỏ bé",
    "note": "Bài 12 - Hán tự"
  },
  {
    "index": 385,
    "word": "小学校",
    "phonetic": "しょうがっこう",
    "meaning": "Trường Tiểu học",
    "note": "Bài 12 - Hán tự"
  },
  {
    "index": 386,
    "word": "安い",
    "phonetic": "やすい",
    "meaning": "Rẻ",
    "note": "Bài 12 - Hán tự"
  },
  {
    "index": 387,
    "word": "高い",
    "phonetic": "たかい",
    "meaning": "Cao, đắt",
    "note": "Bài 12 - Hán tự"
  },
  {
    "index": 388,
    "word": "高校",
    "phonetic": "こうこう",
    "meaning": "Trường cấp 3",
    "note": "Bài 12 - Hán tự"
  },
  {
    "index": 389,
    "word": "古い",
    "phonetic": "ふるい",
    "meaning": "Cũ",
    "note": "Bài 12 - Hán tự"
  },
  {
    "index": 390,
    "word": "Nていしょく",
    "phonetic": "えぬていしょく",
    "meaning": "Cơm phần N",
    "note": "Bài 13 - Danh từ"
  },
  {
    "index": 391,
    "word": "ぎゅうどん",
    "phonetic": "ぎゅうどん",
    "meaning": "Cơm thịt bò xào hành tây",
    "note": "Bài 13 - Danh từ"
  },
  {
    "index": 392,
    "word": "すきやき",
    "phonetic": "すきやき",
    "meaning": "Lẩu thịt bò nướng",
    "note": "Bài 13 - Danh từ"
  },
  {
    "index": 393,
    "word": "ラーメン",
    "phonetic": "らーめん",
    "meaning": "Mỳ tôm Nhật",
    "note": "Bài 13 - Danh từ"
  },
  {
    "index": 394,
    "word": "うどん",
    "phonetic": "うどん",
    "meaning": "Mỳ Udon",
    "note": "Bài 13 - Danh từ"
  },
  {
    "index": 395,
    "word": "かいぎ(をします)",
    "phonetic": "かいぎ(をします)",
    "meaning": "Cuộc họp",
    "note": "Bài 13 - Danh từ / Động từ"
  },
  {
    "index": 396,
    "word": "けっこんします",
    "phonetic": "けっこんします",
    "meaning": "Kết hôn",
    "note": "Bài 13 - Động từ"
  },
  {
    "index": 397,
    "word": "Nにはいります",
    "phonetic": "えぬにはいります",
    "meaning": "Đi vào",
    "note": "Bài 13 - Động từ"
  },
  {
    "index": 398,
    "word": "Nをでます",
    "phonetic": "えぬをでます",
    "meaning": "Đi ra",
    "note": "Bài 13 - Động từ"
  },
  {
    "index": 399,
    "word": "ひろい",
    "phonetic": "ひろい",
    "meaning": "Rộng",
    "note": "Bài 13 - Tính từ"
  },
  {
    "index": 400,
    "word": "せまい",
    "phonetic": "せまい",
    "meaning": "Hẹp",
    "note": "Bài 13 - Tính từ"
  },
  {
    "index": 401,
    "word": "さびしい",
    "phonetic": "さびしい",
    "meaning": "Cô đơn",
    "note": "Bài 13 - Tính từ"
  },
  {
    "index": 402,
    "word": "ほしい",
    "phonetic": "ほしい",
    "meaning": "Muốn có",
    "note": "Bài 13 - Tính từ"
  },
  {
    "index": 403,
    "word": "おなかがすきました",
    "phonetic": "おなかがすきました",
    "meaning": "Đói bụng",
    "note": "Bài 13 - Cụm từ"
  },
  {
    "index": 404,
    "word": "のどがかわきました",
    "phonetic": "のどがかわきました",
    "meaning": "Khát nước",
    "note": "Bài 13 - Cụm từ"
  },
  {
    "index": 405,
    "word": "つかれました",
    "phonetic": "つかれました",
    "meaning": "Mệt",
    "note": "Bài 13 - Cụm từ"
  },
  {
    "index": 406,
    "word": "いらっしゃいませ",
    "phonetic": "いらっしゃいませ",
    "meaning": "Xin chào quý khách",
    "note": "Bài 13 - Cách diễn đạt"
  },
  {
    "index": 407,
    "word": "ごちゅうもんは",
    "phonetic": "ごちゅうもんは",
    "meaning": "Anh chị gọi món gì ạ",
    "note": "Bài 13 - Cách diễn đạt"
  },
  {
    "index": 408,
    "word": "かしこまりました",
    "phonetic": "かしこまりました",
    "meaning": "Vâng thưa anh chị",
    "note": "Bài 13 - Cách diễn đạt"
  },
  {
    "index": 409,
    "word": "おまたせしました",
    "phonetic": "おまたせしました",
    "meaning": "Xin lỗi đã để đợi lâu",
    "note": "Bài 13 - Cách diễn đạt"
  },
  {
    "index": 410,
    "word": "べつべつにおねがいします",
    "phonetic": "べつべつにおねがいします",
    "meaning": "Tính riêng",
    "note": "Bài 13 - Cách diễn đạt"
  },
  {
    "index": 411,
    "word": "つり(をします)",
    "phonetic": "つり(をします)",
    "meaning": "Câu cá",
    "note": "Bài 13 - Danh từ / Động từ"
  },
  {
    "index": 412,
    "word": "スキー(をします)",
    "phonetic": "すきー(をします)",
    "meaning": "Trượt tuyết",
    "note": "Bài 13 - Danh từ / Động từ"
  },
  {
    "index": 413,
    "word": "プール",
    "phonetic": "ぷーる",
    "meaning": "Hồ bơi",
    "note": "Bài 13 - Danh từ"
  },
  {
    "index": 414,
    "word": "けいざい",
    "phonetic": "けいざい",
    "meaning": "Kinh tế",
    "note": "Bài 13 - Danh từ"
  },
  {
    "index": 415,
    "word": "びじゅつ",
    "phonetic": "びじゅつ",
    "meaning": "Mỹ thuật",
    "note": "Bài 13 - Danh từ"
  },
  {
    "index": 416,
    "word": "しやくしょ",
    "phonetic": "しやくしょ",
    "meaning": "Ủy ban nhân dân",
    "note": "Bài 13 - Danh từ"
  },
  {
    "index": 417,
    "word": "コンビニ",
    "phonetic": "こんびに",
    "meaning": "Cửa hàng tiện lợi",
    "note": "Bài 13 - Danh từ"
  },
  {
    "index": 418,
    "word": "しゅうまつ",
    "phonetic": "しゅうまつ",
    "meaning": "Cuối tuần",
    "note": "Bài 13 - Danh từ"
  },
  {
    "index": 419,
    "word": "およぎます",
    "phonetic": "およぎます",
    "meaning": "Bơi",
    "note": "Bài 13 - Động từ"
  },
  {
    "index": 420,
    "word": "あそびます",
    "phonetic": "あそびます",
    "meaning": "Chơi đùa",
    "note": "Bài 13 - Động từ"
  },
  {
    "index": 421,
    "word": "むかえます",
    "phonetic": "むかえます",
    "meaning": "Đón",
    "note": "Bài 13 - Động từ"
  },
  {
    "index": 422,
    "word": "てがみをだします",
    "phonetic": "てがみをだします",
    "meaning": "Gửi thư",
    "note": "Bài 13 - Động từ"
  },
  {
    "index": 423,
    "word": "さんぽします",
    "phonetic": "さんぽします",
    "meaning": "Đi dạo",
    "note": "Bài 13 - Động từ"
  },
  {
    "index": 424,
    "word": "かいものします",
    "phonetic": "かいものします",
    "meaning": "Mua sắm",
    "note": "Bài 13 - Động từ"
  },
  {
    "index": 425,
    "word": "しょくじします",
    "phonetic": "しょくじします",
    "meaning": "Dùng bữa",
    "note": "Bài 13 - Động từ"
  },
  {
    "index": 426,
    "word": "多い",
    "phonetic": "おおい",
    "meaning": "Nhiều",
    "note": "Bài 13 - Hán tự"
  },
  {
    "index": 427,
    "word": "少し",
    "phonetic": "すこし",
    "meaning": "Một chút",
    "note": "Bài 13 - Hán tự"
  },
  {
    "index": 428,
    "word": "少ない",
    "phonetic": "すくない",
    "meaning": "Ít",
    "note": "Bài 13 - Hán tự"
  },
  {
    "index": 429,
    "word": "広い",
    "phonetic": "ひろい",
    "meaning": "Rộng",
    "note": "Bài 13 - Hán tự"
  },
  {
    "index": 430,
    "word": "近い",
    "phonetic": "ちかい",
    "meaning": "Gần",
    "note": "Bài 13 - Hán tự"
  },
  {
    "index": 431,
    "word": "最近",
    "phonetic": "さいきん",
    "meaning": "Gần đây",
    "note": "Bài 13 - Hán tự"
  },
  {
    "index": 432,
    "word": "早い",
    "phonetic": "はやい",
    "meaning": "Sớm",
    "note": "Bài 13 - Hán tự"
  },
  {
    "index": 433,
    "word": "間",
    "phonetic": "あいだ",
    "meaning": "Ở giữa",
    "note": "Bài 13 - Hán tự"
  },
  {
    "index": 434,
    "word": "時間",
    "phonetic": "じかん",
    "meaning": "Thời gian",
    "note": "Bài 13 - Hán tự"
  },
  {
    "index": 435,
    "word": "パスポート",
    "phonetic": "ぱすぽーと",
    "meaning": "Hộ chiếu",
    "note": "Bài 14 - Danh từ"
  },
  {
    "index": 436,
    "word": "じゅうしょ",
    "phonetic": "じゅうしょ",
    "meaning": "Địa chỉ",
    "note": "Bài 14 - Danh từ"
  },
  {
    "index": 437,
    "word": "メールアドレス",
    "phonetic": "めーるあどれす",
    "meaning": "Địa chỉ Email",
    "note": "Bài 14 - Danh từ"
  },
  {
    "index": 438,
    "word": "しお",
    "phonetic": "しお",
    "meaning": "Muối",
    "note": "Bài 14 - Danh từ"
  },
  {
    "index": 439,
    "word": "さとう",
    "phonetic": "さとう",
    "meaning": "Đường",
    "note": "Bài 14 - Danh từ"
  },
  {
    "index": 440,
    "word": "テキスト",
    "phonetic": "てきすと",
    "meaning": "Sách giáo khoa",
    "note": "Bài 14 - Danh từ"
  },
  {
    "index": 441,
    "word": "ページ",
    "phonetic": "ぺーじ",
    "meaning": "Trang (sách, vở)",
    "note": "Bài 14 - Danh từ"
  },
  {
    "index": 442,
    "word": "エアコン",
    "phonetic": "えあこん",
    "meaning": "Máy điều hòa",
    "note": "Bài 14 - Danh từ"
  },
  {
    "index": 443,
    "word": "せんぷうき",
    "phonetic": "せんぷうき",
    "meaning": "Quạt máy",
    "note": "Bài 14 - Danh từ"
  },
  {
    "index": 444,
    "word": "でんき",
    "phonetic": "でんき",
    "meaning": "Đèn, điện",
    "note": "Bài 14 - Danh từ"
  },
  {
    "index": 445,
    "word": "ちゅうしゃじょう",
    "phonetic": "ちゅうしゃじょう",
    "meaning": "Bãi đỗ xe",
    "note": "Bài 14 - Danh từ"
  },
  {
    "index": 446,
    "word": "こうさてん",
    "phonetic": "こうさてん",
    "meaning": "Ngã tư",
    "note": "Bài 14 - Danh từ"
  },
  {
    "index": 447,
    "word": "しんごう",
    "phonetic": "しんごう",
    "meaning": "Đèn giao thông",
    "note": "Bài 14 - Danh từ"
  },
  {
    "index": 448,
    "word": "おつり",
    "phonetic": "おつり",
    "meaning": "Tiền thối",
    "note": "Bài 14 - Danh từ"
  },
  {
    "index": 449,
    "word": "まちます - まつ",
    "phonetic": "まちます - まつ",
    "meaning": "Chờ đợi (Nhóm I)",
    "note": "Bài 14 - Động từ"
  },
  {
    "index": 450,
    "word": "もちます - もつ",
    "phonetic": "もちます - もつ",
    "meaning": "Cầm, mang (Nhóm I)",
    "note": "Bài 14 - Động từ"
  },
  {
    "index": 451,
    "word": "いそぎます - いそぐ",
    "phonetic": "いそぎます - いそぐ",
    "meaning": "Vội (Nhóm I)",
    "note": "Bài 14 - Động từ"
  },
  {
    "index": 452,
    "word": "はなします - はなす",
    "phonetic": "はなします - はなす",
    "meaning": "Nói chuyện (Nhóm I)",
    "note": "Bài 14 - Động từ"
  },
  {
    "index": 453,
    "word": "よびます - よぶ",
    "phonetic": "よびます - よぶ",
    "meaning": "Kêu, gọi (taxi) (Nhóm I)",
    "note": "Bài 14 - Động từ"
  },
  {
    "index": 454,
    "word": "みせます - みせる",
    "phonetic": "みせます - みせる",
    "meaning": "Cho xem (Nhóm II)",
    "note": "Bài 14 - Động từ"
  },
  {
    "index": 455,
    "word": "てつだいます - てつだう",
    "phonetic": "てつだいます - てつだう",
    "meaning": "Giúp đỡ (Nhóm I)",
    "note": "Bài 14 - Động từ"
  },
  {
    "index": 456,
    "word": "おしえます - おしえる",
    "phonetic": "おしえます - おしえる",
    "meaning": "Chỉ (Nhóm II)",
    "note": "Bài 14 - Động từ"
  },
  {
    "index": 457,
    "word": "とります - とる",
    "phonetic": "とります - とる",
    "meaning": "Lấy (Nhóm I)",
    "note": "Bài 14 - Động từ"
  },
  {
    "index": 458,
    "word": "たちます - たつ",
    "phonetic": "たちます - たつ",
    "meaning": "Đứng (Nhóm I)",
    "note": "Bài 14 - Động từ"
  },
  {
    "index": 459,
    "word": "すわります - すわる",
    "phonetic": "すわります - すわる",
    "meaning": "Ngồi (Nhóm I)",
    "note": "Bài 14 - Động từ"
  },
  {
    "index": 460,
    "word": "あけます - あける",
    "phonetic": "あけます - あける",
    "meaning": "Mở (Nhóm II)",
    "note": "Bài 14 - Động từ"
  },
  {
    "index": 461,
    "word": "しめます - しめる",
    "phonetic": "しめます - しめる",
    "meaning": "Đóng (Nhóm II)",
    "note": "Bài 14 - Động từ"
  },
  {
    "index": 462,
    "word": "つけます - つける",
    "phonetic": "つけます - つける",
    "meaning": "Bật (Nhóm II)",
    "note": "Bài 14 - Động từ"
  },
  {
    "index": 463,
    "word": "けします - けす",
    "phonetic": "けします - けす",
    "meaning": "Tắt (Nhóm I)",
    "note": "Bài 14 - Động từ"
  },
  {
    "index": 464,
    "word": "コピーします - コピーする",
    "phonetic": "こぴーします - こぴーする",
    "meaning": "Photo (Nhóm III)",
    "note": "Bài 14 - Động từ"
  },
  {
    "index": 465,
    "word": "ふります - ふる",
    "phonetic": "ふります - ふる",
    "meaning": "Rơi (Mưa rơi, tuyết rơi) (Nhóm I)",
    "note": "Bài 14 - Động từ"
  },
  {
    "index": 466,
    "word": "はじめます - はじめる",
    "phonetic": "はじめます - はじめる",
    "meaning": "Bắt đầu (Nhóm II)",
    "note": "Bài 14 - Động từ"
  },
  {
    "index": 467,
    "word": "とめます - とめる",
    "phonetic": "とめます - とめる",
    "meaning": "Dừng xe, đỗ xe (Nhóm II)",
    "note": "Bài 14 - Động từ"
  },
  {
    "index": 468,
    "word": "まがります - まがる",
    "phonetic": "まがります - まがる",
    "meaning": "Rẽ (Nhóm I)",
    "note": "Bài 14 - Động từ"
  },
  {
    "index": 469,
    "word": "つかいます - つかう",
    "phonetic": "つかいます - つかう",
    "meaning": "Sử dụng (Nhóm I)",
    "note": "Bài 14 - Động từ"
  },
  {
    "index": 470,
    "word": "ゆっくり",
    "phonetic": "ゆっくり",
    "meaning": "Chậm",
    "note": "Bài 14 - Trạng từ"
  },
  {
    "index": 471,
    "word": "もう少し",
    "phonetic": "もうすこし",
    "meaning": "Một chút nữa",
    "note": "Bài 14 - Trạng từ"
  },
  {
    "index": 472,
    "word": "もう一度",
    "phonetic": "もういちど",
    "meaning": "Một lần nữa",
    "note": "Bài 14 - Trạng từ"
  },
  {
    "index": 473,
    "word": "もう一つ",
    "phonetic": "もうひとつ",
    "meaning": "Một cái nữa",
    "note": "Bài 14 - Trạng từ"
  },
  {
    "index": 474,
    "word": "すぐ",
    "phonetic": "すぐ",
    "meaning": "Ngay lập tức",
    "note": "Bài 14 - Trạng từ"
  },
  {
    "index": 475,
    "word": "後で",
    "phonetic": "あとで",
    "meaning": "Lát nữa",
    "note": "Bài 14 - Trạng từ"
  },
  {
    "index": 476,
    "word": "時ごろ",
    "phonetic": "じごろ",
    "meaning": "Khoảng ... giờ",
    "note": "Bài 14 - Cụm từ"
  },
  {
    "index": 477,
    "word": "また",
    "phonetic": "また",
    "meaning": "Lại",
    "note": "Bài 14 - Trạng từ"
  },
  {
    "index": 478,
    "word": "まっすぐ",
    "phonetic": "まっすぐ",
    "meaning": "Đi thẳng",
    "note": "Bài 14 - Trạng từ"
  },
  {
    "index": 479,
    "word": "食べます",
    "phonetic": "たべます",
    "meaning": "Ăn",
    "note": "Bài 14 - Hán tự"
  },
  {
    "index": 480,
    "word": "食堂",
    "phonetic": "しょくどう",
    "meaning": "Nhà ăn",
    "note": "Bài 14 - Hán tự"
  },
  {
    "index": 481,
    "word": "飲みます",
    "phonetic": "のみます",
    "meaning": "Uống",
    "note": "Bài 14 - Hán tự"
  },
  {
    "index": 482,
    "word": "食べ物",
    "phonetic": "たべもの",
    "meaning": "Đồ ăn",
    "note": "Bài 14 - Hán tự"
  },
  {
    "index": 483,
    "word": "飲み物",
    "phonetic": "のみもの",
    "meaning": "Đồ uống",
    "note": "Bài 14 - Hán tự"
  },
  {
    "index": 484,
    "word": "動物",
    "phonetic": "どうぶつ",
    "meaning": "Động vật",
    "note": "Bài 14 - Hán tự"
  },
  {
    "index": 485,
    "word": "牛肉",
    "phonetic": "ぎゅうにく",
    "meaning": "Thịt bò",
    "note": "Bài 14 - Hán tự"
  },
  {
    "index": 486,
    "word": "豚肉",
    "phonetic": "ぶたにく",
    "meaning": "Thịt heo",
    "note": "Bài 14 - Hán tự"
  },
  {
    "index": 487,
    "word": "鳥肉",
    "phonetic": "とりにく",
    "meaning": "Thịt gà",
    "note": "Bài 14 - Hán tự"
  },
  {
    "index": 488,
    "word": "お茶",
    "phonetic": "おちゃ",
    "meaning": "Trà",
    "note": "Bài 14 - Hán tự"
  },
  {
    "index": 489,
    "word": "紅茶",
    "phonetic": "こうちゃ",
    "meaning": "Trà Lipton",
    "note": "Bài 14 - Hán tự"
  },
  {
    "index": 490,
    "word": "喫茶店",
    "phonetic": "きっさてん",
    "meaning": "Quán cà phê",
    "note": "Bài 14 - Hán tự"
  },
  {
    "index": 491,
    "word": "銀行",
    "phonetic": "ぎんこう",
    "meaning": "Ngân hàng",
    "note": "Bài 14 - Hán tự"
  },
  {
    "index": 492,
    "word": "行きます",
    "phonetic": "いきます",
    "meaning": "Đi",
    "note": "Bài 14 - Hán tự"
  },
  {
    "index": 493,
    "word": "電池",
    "phonetic": "でんち",
    "meaning": "Pin",
    "note": "Bài 14 - Hán tự"
  },
  {
    "index": 494,
    "word": "車",
    "phonetic": "くるま",
    "meaning": "Xe ô tô",
    "note": "Bài 14 - Hán tự"
  },
  {
    "index": 495,
    "word": "電車",
    "phonetic": "でんしゃ",
    "meaning": "Xe điện",
    "note": "Bài 14 - Hán tự"
  }
];
  const DELAY_MS = 1200;
  let isPaused = false;
  let isStopped = false;

  // Create UI overlay
  const overlay = document.createElement('div');
  overlay.id = 'mazii-importer-overlay';
  overlay.style.cssText = 'position:fixed;bottom:20px;right:20px;z-index:999999;background:#1e1e2f;color:#fff;padding:16px 20px;border-radius:12px;box-shadow:0 8px 32px rgba(0,0,0,0.4);font-family:sans-serif;font-size:14px;min-width:320px;border:1px solid #3b82f6;';
  overlay.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
      <b style="color:#60a5fa;font-size:15px;">Mazii Vocab Importer</b>
      <span id="mazii-status-badge" style="background:#10b981;color:#fff;font-size:11px;padding:2px 8px;border-radius:99px;">Running</span>
    </div>
    <div id="mazii-progress-text" style="margin-bottom:6px;font-size:13px;">Starting...</div>
    <div style="background:#374151;height:8px;border-radius:4px;overflow:hidden;margin-bottom:12px;">
      <div id="mazii-progress-bar" style="background:#3b82f6;height:100%;width:0%;transition:width 0.2s;"></div>
    </div>
    <div id="mazii-current-word" style="font-size:12px;color:#9ca3af;margin-bottom:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"></div>
    <div style="display:flex;gap:8px;">
      <button id="mazii-pause-btn" style="flex:1;padding:6px;background:#f59e0b;color:#fff;border:none;border-radius:6px;cursor:pointer;font-weight:bold;">Tạm dừng</button>
      <button id="mazii-stop-btn" style="flex:1;padding:6px;background:#ef4444;color:#fff;border:none;border-radius:6px;cursor:pointer;font-weight:bold;">Dừng</button>
    </div>
  `;
  document.body.appendChild(overlay);

  const pauseBtn = document.getElementById('mazii-pause-btn');
  const stopBtn = document.getElementById('mazii-stop-btn');
  const statusBadge = document.getElementById('mazii-status-badge');
  const progressText = document.getElementById('mazii-progress-text');
  const progressBar = document.getElementById('mazii-progress-bar');
  const currentWordDiv = document.getElementById('mazii-current-word');

  pauseBtn.onclick = () => {
    isPaused = !isPaused;
    pauseBtn.textContent = isPaused ? 'Tiếp tục' : 'Tạm dừng';
    pauseBtn.style.background = isPaused ? '#10b981' : '#f59e0b';
    statusBadge.textContent = isPaused ? 'Paused' : 'Running';
    statusBadge.style.background = isPaused ? '#f59e0b' : '#10b981';
  };

  stopBtn.onclick = () => {
    isStopped = true;
    overlay.remove();
    console.log('Importer stopped by user.');
  };

  function sleep(ms) {
    return new Promise(r => setTimeout(r, ms));
  }

  function setInputValue(el, value) {
    el.focus();
    const nativeSetter = Object.getOwnPropertyDescriptor(
      el instanceof HTMLTextAreaElement ? window.HTMLTextAreaElement.prototype : window.HTMLInputElement.prototype, 'value'
    )?.set;
    if (nativeSetter) {
      nativeSetter.call(el, value);
    } else {
      el.value = value;
    }
    el.dispatchEvent(new Event('input', { bubbles: true, cancelable: true }));
    el.dispatchEvent(new Event('change', { bubbles: true, cancelable: true }));
    el.dispatchEvent(new Event('blur', { bubbles: true, cancelable: true }));
  }

  async function ensureModalOpen() {
    let wordInput = document.querySelector('input#word');
    if (wordInput && wordInput.offsetParent !== null) return true;

    // Check empty notebook button first: "Thêm từ mới"
    const emptyBtn = Array.from(document.querySelectorAll('button')).find(b => b.textContent.includes('Thêm từ mới') && b.offsetParent !== null);
    if (emptyBtn) {
      emptyBtn.click();
      await sleep(500);
      wordInput = document.querySelector('input#word');
      if (wordInput && wordInput.offsetParent !== null) return true;
    }

    // Try + icon in top bar
    const plusIcon = document.querySelector('.ai-icon--add-notebook');
    if (plusIcon) {
      plusIcon.closest('button').click();
      await sleep(400);

      // Click "Tự thêm từ"
      const opt = Array.from(document.querySelectorAll('.option-label')).find(e => e.textContent.trim() === 'Tự thêm từ');
      if (opt) {
        opt.closest('.filter-option').click();
      }
    }

    const start = Date.now();
    while (Date.now() - start < 3000) {
      wordInput = document.querySelector('input#word');
      if (wordInput && wordInput.offsetParent !== null) return true;
      await sleep(100);
    }
    return false;
  }

  async function closeModal() {
    const cancel = Array.from(document.querySelectorAll('button')).find(b => b.textContent.trim() === 'Huỷ' || b.textContent.trim() === 'Hủy');
    if (cancel) cancel.click();
    const close = document.querySelector('.modal-ds__close, button[aria-label="Close"], .modal-close');
    if (close) close.click();
    await sleep(200);
  }

  console.log(`Starting import of ${words.length} vocabulary words...`);
  let successCount = 0;
  let failCount = 0;

  for (let i = 0; i < words.length; i++) {
    if (isStopped) break;
    while (isPaused) {
      await sleep(200);
      if (isStopped) break;
    }

    const item = words[i];
    const pct = Math.round(((i + 1) / words.length) * 100);
    progressText.textContent = `Word ${i + 1} of ${words.length} (${pct}%)`;
    progressBar.style.width = `${pct}%`;
    currentWordDiv.textContent = `${item.word} (${item.phonetic}) - ${item.meaning}`;

    let success = false;
    for (let attempt = 1; attempt <= 3; attempt++) {
      try {
        const opened = await ensureModalOpen();
        if (!opened) throw new Error('Could not open modal');

        const wordInput = document.querySelector('input#word');
        const phoneticInput = document.querySelector('input#phonetic');
        const meanInput = document.querySelector('textarea#mean');

        setInputValue(wordInput, item.word);
        if (phoneticInput && item.phonetic) setInputValue(phoneticInput, item.phonetic);
        if (meanInput && item.meaning) setInputValue(meanInput, item.meaning);

        await sleep(300);

        const submitBtn = Array.from(document.querySelectorAll('button')).find(b => b.textContent.trim() === 'Thêm' && b.type === 'submit');
        if (!submitBtn || submitBtn.disabled) throw new Error('Submit button disabled');

        submitBtn.click();

        // Wait for modal to disappear
        const t0 = Date.now();
        while (Date.now() - t0 < 3000) {
          const w = document.querySelector('input#word');
          if (!w || w.offsetParent === null) break;
          await sleep(100);
        }

        success = true;
        break;
      } catch (err) {
        await closeModal();
        await sleep(500);
      }
    }

    if (success) {
      successCount++;
      console.log(`[${i + 1}/${words.length}] Added: ${item.word} ✓`);
    } else {
      failCount++;
      console.warn(`[${i + 1}/${words.length}] Failed: ${item.word} ✗`);
    }

    await sleep(DELAY_MS);
  }

  statusBadge.textContent = 'Finished';
  statusBadge.style.background = '#10b981';
  progressText.textContent = `Completed: ${successCount} added, ${failCount} failed.`;
  currentWordDiv.textContent = 'All vocabulary entries processed!';
  pauseBtn.remove();
  stopBtn.textContent = 'Đóng';
  stopBtn.style.background = '#3b82f6';
  stopBtn.onclick = () => overlay.remove();
  console.log(`Import finished! Total: ${words.length}, Success: ${successCount}, Failed: ${failCount}`);
})();
