const quizQuestions = {
    'En': {
        'Networking': {
            title: "Networking",
            questions: [
                { question: "What does IP stand for?", answers: ["Internet Protocol", "Internal Program", "Interface Point"], correctAnswer: "Internet Protocol", name: "n1" },
                { question: "Which device connects multiple networks together?", answers: ["Router", "Switch", "Hub"], correctAnswer: "Router", name: "n2" },
                { question: "What is the default port number for HTTP?", answers: ["80", "443", "21"], correctAnswer: "80", name: "n3" },
                { question: "Which layer of the OSI model deals with routing?", answers: ["Network Layer", "Transport Layer", "Data Link Layer"], correctAnswer: "Network Layer", name: "n4" },
                { question: "What protocol is used to send emails?", answers: ["SMTP", "FTP", "DNS"], correctAnswer: "SMTP", name: "n5" },
                { question: "What does DNS stand for?", answers: ["Domain Name System", "Digital Network Service", "Direct Node Server"], correctAnswer: "Domain Name System", name: "n6" },
                { question: "Which type of IP address changes frequently?", answers: ["Dynamic IP", "Static IP", "Public IP"], correctAnswer: "Dynamic IP", name: "n7" },
                { question: "What device is used to extend a wireless network?", answers: ["Wi-Fi Extender", "Modem", "Hub"], correctAnswer: "Wi-Fi Extender", name: "n8" },
                { question: "Which protocol is used to transfer files securely?", answers: ["SFTP", "FTP", "HTTP"], correctAnswer: "SFTP", name: "n9" },
                { question: "What is the maximum speed of Cat5e Ethernet?", answers: ["1 Gbps", "100 Mbps", "10 Gbps"], correctAnswer: "1 Gbps", name: "n10" },
                { question: "Which protocol resolves IP addresses to MAC addresses?", answers: ["ARP", "ICMP", "TCP"], correctAnswer: "ARP", name: "n11" },
                { question: "What type of network spans a small geographic area?", answers: ["LAN", "WAN", "MAN"], correctAnswer: "LAN", name: "n12" },
                { question: "Which wireless standard is the fastest?", answers: ["Wi-Fi 6", "Wi-Fi 4", "Wi-Fi 5"], correctAnswer: "Wi-Fi 6", name: "n13" },
                { question: "Which protocol is used for secure web browsing?", answers: ["HTTPS", "HTTP", "FTP"], correctAnswer: "HTTPS", name: "n14" },
                { question: "What does a firewall do?", answers: ["Blocks unauthorized access", "Increases bandwidth", "Manages IP addresses"], correctAnswer: "Blocks unauthorized access", name: "n15" }
            ]
        }, 'History': {
            title: "History",
            questions: [
                { question: "Which event marked the beginning of World War I?", answers: ["Assassination of Archduke Franz Ferdinand", "Invasion of Poland", "Attack on Pearl Harbor"], correctAnswer: "Assassination of Archduke Franz Ferdinand", name: "h1" },
                { question: "What was the main purpose of the Great Wall of China?", answers: ["Defense from invasions", "Trade route", "Religious ceremonies"], correctAnswer: "Defense from invasions", name: "h2" },
                { question: "Which invention revolutionized the spread of knowledge in Europe?", answers: ["Printing press", "Steam engine", "Compass"], correctAnswer: "Printing press", name: "h3" },
                { question: "What historical event ended the Middle Ages?", answers: ["Fall of Constantinople", "Discovery of America", "French Revolution"], correctAnswer: "Fall of Constantinople", name: "h4" },
                { question: "Which war was fought between Sparta and Athens?", answers: ["Peloponnesian War", "Punic War", "Trojan War"], correctAnswer: "Peloponnesian War", name: "h5" },
                { question: "What was the primary goal of the Crusades?", answers: ["Control of holy lands", "Trade expansion", "Scientific discovery"], correctAnswer: "Control of holy lands", name: "h6" },
                { question: "Which event caused the Black Death to spread across Europe?", answers: ["Trade routes", "Religious wars", "Agricultural failure"], correctAnswer: "Trade routes", name: "h7" },
                { question: "What discovery proved the Earth is round?", answers: ["Circumnavigation of the globe", "Invention of telescope", "Satellite images"], correctAnswer: "Circumnavigation of the globe", name: "h8" },
                { question: "Which ancient event is described in the Epic of Gilgamesh?", answers: ["Great flood", "Trojan War", "Founding of Rome"], correctAnswer: "Great flood", name: "h9" },
                { question: "What was the main cause of the Industrial Revolution?", answers: ["Machine-powered production", "Agricultural decline", "Colonial wars"], correctAnswer: "Machine-powered production", name: "h10" },
                { question: "Which ancient competition inspired the modern Olympic Games?", answers: ["Ancient Greek Olympics", "Roman gladiator games", "Persian festivals"], correctAnswer: "Ancient Greek Olympics", name: "h11" },
                { question: "What event led to the fall of the Roman Empire in the West?", answers: ["Barbarian invasions", "Economic growth", "Scientific advancement"], correctAnswer: "Barbarian invasions", name: "h12" },
                { question: "Which journey connected Europe to Asia by land?", answers: ["Silk Road", "Transatlantic route", "Spice route"], correctAnswer: "Silk Road", name: "h13" },
                { question: "What was the main purpose of pyramids in ancient Egypt?", answers: ["Royal tombs", "Schools", "Military bases"], correctAnswer: "Royal tombs", name: "h14" },
                { question: "Which historical event began the Space Age?", answers: ["Launch of Sputnik", "First Moon landing", "First airplane flight"], correctAnswer: "Launch of Sputnik", name: "h15" }
            ]
        }, Math: {
            title: "Math",
            questions: [
                { question: "What is 12 × 8?", answers: ["96", "84", "108"], correctAnswer: "96", name: "m1" },
                { question: "What is the square root of 64?", answers: ["8", "6", "7"], correctAnswer: "8", name: "m2" },
                { question: "What is 25% of 200?", answers: ["50", "25", "75"], correctAnswer: "50", name: "m3" },
                { question: "What is the value of π (approximately)?", answers: ["3.14", "2.17", "4.13"], correctAnswer: "3.14", name: "m4" },
                { question: "What is 7²?", answers: ["49", "42", "56"], correctAnswer: "49", name: "m5" },
                { question: "What is 100 ÷ 4?", answers: ["25", "20", "40"], correctAnswer: "25", name: "m6" },
                { question: "What type of angle is 90 degrees?", answers: ["Right angle", "Acute angle", "Obtuse angle"], correctAnswer: "Right angle", name: "m7" },
                { question: "What is 15 + 27?", answers: ["42", "32", "52"], correctAnswer: "42", name: "m8" },
                { question: "What is the perimeter of a square with side 5?", answers: ["20", "25", "15"], correctAnswer: "20", name: "m9" },
                { question: "Which number is a prime?", answers: ["7", "9", "12"], correctAnswer: "7", name: "m10" },
                { question: "What is 3³?", answers: ["27", "9", "18"], correctAnswer: "27", name: "m11" },
                { question: "What is the result of 10 − 3?", answers: ["7", "6", "8"], correctAnswer: "7", name: "m12" },
                { question: "What is the next number: 2, 4, 6, ?", answers: ["8", "10", "7"], correctAnswer: "8", name: "m13" },
                { question: "What shape has 3 sides?", answers: ["Triangle", "Square", "Rectangle"], correctAnswer: "Triangle", name: "m14" },
                { question: "What is 1/2 + 1/2?", answers: ["1", "2", "0.5"], correctAnswer: "1", name: "m15" }
            ]
        },
        Computing: {
            title: "Computing",
            questions: [
                { question: "Which of these is an example of an operating system?", answers: ["Linux", "Python", "HTML"], correctAnswer: "Linux", name: "c1" },
                { question: "What does CPU stand for?", answers: ["Central Processing Unit", "Computer Personal Unit", "Control Program User"], correctAnswer: "Central Processing Unit", name: "c2" },
                { question: "Which data type is used to store true/false values?", answers: ["Boolean", "Integer", "String"], correctAnswer: "Boolean", name: "c3" },
                { question: "Which is a high-level programming language?", answers: ["Python", "Assembly", "Machine Code"], correctAnswer: "Python", name: "c4" },
                { question: "Which component stores data permanently?", answers: ["Hard Drive", "RAM", "CPU"], correctAnswer: "Hard Drive", name: "c5" },
                { question: "Which of these is volatile memory?", answers: ["RAM", "ROM", "SSD"], correctAnswer: "RAM", name: "c6" },
                { question: "Which software is used to browse the internet?", answers: ["Web Browser", "Text Editor", "Spreadsheet"], correctAnswer: "Web Browser", name: "c7" },
                { question: "What does GUI stand for?", answers: ["Graphical User Interface", "General User Input", "Global Utility Interface"], correctAnswer: "Graphical User Interface", name: "c8" },
                { question: "Which programming concept allows reuse of code?", answers: ["Function", "Loop", "Variable"], correctAnswer: "Function", name: "c9" },
                { question: "What is the main function of the ALU?", answers: ["Perform arithmetic and logic operations", "Store data", "Manage memory"], correctAnswer: "Perform arithmetic and logic operations", name: "c10" },
                { question: "Which is an example of system software?", answers: ["Operating System", "Word Processor", "Web Browser"], correctAnswer: "Operating System", name: "c11" },
                { question: "What does BIOS stand for?", answers: ["Basic Input Output System", "Binary Input Output Software", "Basic Internet Operating System"], correctAnswer: "Basic Input Output System", name: "c12" },
                { question: "Which language is primarily used for web page structure?", answers: ["HTML", "Python", "C++"], correctAnswer: "HTML", name: "c13" },
                { question: "Which is an example of cloud computing?", answers: ["Google Drive", "Local Hard Disk", "USB Flash Drive"], correctAnswer: "Google Drive", name: "c14" },
                { question: "What is virtual memory?", answers: ["A portion of hard drive used as RAM", "Extra RAM chips", "Cache memory"], correctAnswer: "A portion of hard drive used as RAM", name: "c15" }
            ]
        }, DigitalForensics: {
            title: "Digital Forensics",
            questions: [
                { question: "What is digital forensics?", answers: ["Analyzing digital evidence", "Building computers", "Writing code"], correctAnswer: "Analyzing digital evidence", name: "df1" },
                { question: "Which device commonly stores digital evidence?", answers: ["Hard drive", "Monitor", "Keyboard"], correctAnswer: "Hard drive", name: "df2" },
                { question: "What does metadata describe?", answers: ["Data about data", "Encrypted data", "Deleted files"], correctAnswer: "Data about data", name: "df3" },
                { question: "Which file system is used by Windows?", answers: ["NTFS", "EXT4", "APFS"], correctAnswer: "NTFS", name: "df4" },
                { question: "What is a hash used for?", answers: ["Verify file integrity", "Store passwords", "Compress files"], correctAnswer: "Verify file integrity", name: "df5" },
                { question: "Which hash is commonly used in forensics?", answers: ["SHA-256", "ZIP", "HTTP"], correctAnswer: "SHA-256", name: "df6" },
                { question: "What is a deleted file often called?", answers: ["Recoverable data", "Corrupted file", "Encrypted file"], correctAnswer: "Recoverable data", name: "df7" },
                { question: "What tool copies a disk exactly?", answers: ["Disk imaging", "Formatting", "Defragmentation"], correctAnswer: "Disk imaging", name: "df8" },
                { question: "Which evidence must remain unchanged?", answers: ["Original evidence", "Backup copy", "Screenshot"], correctAnswer: "Original evidence", name: "df9" },
                { question: "What does RAM store?", answers: ["Temporary data", "Permanent files", "BIOS"], correctAnswer: "Temporary data", name: "df10" },
                { question: "Which log tracks system events?", answers: ["Event log", "Cache", "Cookie"], correctAnswer: "Event log", name: "df11" },
                { question: "What does encryption do?", answers: ["Protects data", "Deletes files", "Copies disks"], correctAnswer: "Protects data", name: "df12" },
                { question: "Which device records network traffic?", answers: ["Packet sniffer", "Router", "Firewall"], correctAnswer: "Packet sniffer", name: "df13" },
                { question: "What is chain of custody?", answers: ["Evidence tracking process", "Encryption method", "Storage system"], correctAnswer: "Evidence tracking process", name: "df14" },
                { question: "Which data can show user activity?", answers: ["Browser history", "CPU speed", "Screen size"], correctAnswer: "Browser history", name: "df15" }
            ]
        }, General: {
            title: "General Knowledge",
            questions: [
                { question: "What is the largest planet?", answers: ["Jupiter", "Earth", "Mars"], correctAnswer: "Jupiter", name: "gk1" },
                { question: "How many continents are there?", answers: ["7", "5", "6"], correctAnswer: "7", name: "gk2" },
                { question: "What gas do plants absorb?", answers: ["Carbon dioxide", "Oxygen", "Nitrogen"], correctAnswer: "Carbon dioxide", name: "gk3" },
                { question: "Which animal is the fastest?", answers: ["Cheetah", "Lion", "Horse"], correctAnswer: "Cheetah", name: "gk4" },
                { question: "What is H2O?", answers: ["Water", "Oxygen", "Hydrogen"], correctAnswer: "Water", name: "gk5" },
                { question: "Which ocean is the largest?", answers: ["Pacific", "Atlantic", "Indian"], correctAnswer: "Pacific", name: "gk6" },
                { question: "How many days are in a leap year?", answers: ["366", "365", "364"], correctAnswer: "366", name: "gk7" },
                { question: "What organ pumps blood?", answers: ["Heart", "Lungs", "Brain"], correctAnswer: "Heart", name: "gk8" },
                { question: "Which metal is liquid at room temperature?", answers: ["Mercury", "Iron", "Aluminum"], correctAnswer: "Mercury", name: "gk9" },
                { question: "What is the hardest natural substance?", answers: ["Diamond", "Gold", "Iron"], correctAnswer: "Diamond", name: "gk10" },
                { question: "Which planet is known as the Red Planet?", answers: ["Mars", "Venus", "Jupiter"], correctAnswer: "Mars", name: "gk11" },
                { question: "How many bones are in the human body?", answers: ["206", "201", "210"], correctAnswer: "206", name: "gk12" },
                { question: "Which sense is related to ears?", answers: ["Hearing", "Sight", "Taste"], correctAnswer: "Hearing", name: "gk13" },
                { question: "What force pulls objects to Earth?", answers: ["Gravity", "Magnetism", "Friction"], correctAnswer: "Gravity", name: "gk14" },
                { question: "What do bees produce?", answers: ["Honey", "Milk", "Wax oil"], correctAnswer: "Honey", name: "gk15" }
            ]
        }
    },

    'Ar': {
        'Networking': {
            title: "Networking",
            questions: [
                { question: "ماذا يعني الاختصار IP؟", answers: ["بروتوكول الإنترنت", "برنامج داخلي", "نقطة واجهة"], correctAnswer: "بروتوكول الإنترنت", name: "n1" },
                { question: "أي جهاز يربط عدة شبكات معًا؟", answers: ["الموجّه", "المبدّل", "الموزّع"], correctAnswer: "الموجّه", name: "n2" },
                { question: "ما هو رقم المنفذ الافتراضي لبروتوكول HTTP؟", answers: ["80", "443", "21"], correctAnswer: "80", name: "n3" },
                { question: "أي طبقة في نموذج OSI مسؤولة عن التوجيه؟", answers: ["طبقة الشبكة", "طبقة النقل", "طبقة ربط البيانات"], correctAnswer: "طبقة الشبكة", name: "n4" },
                { question: "أي بروتوكول يُستخدم لإرسال البريد الإلكتروني؟", answers: ["SMTP", "FTP", "DNS"], correctAnswer: "SMTP", name: "n5" },
                { question: "ماذا يعني DNS؟", answers: ["نظام أسماء النطاقات", "خدمة شبكة رقمية", "خادم مباشر"], correctAnswer: "نظام أسماء النطاقات", name: "n6" },
                { question: "أي نوع من عناوين IP يتغير باستمرار؟", answers: ["IP ديناميكي", "IP ثابت", "IP عام"], correctAnswer: "IP ديناميكي", name: "n7" },
                { question: "ما الجهاز المستخدم لتوسيع الشبكة اللاسلكية؟", answers: ["موسّع Wi-Fi", "مودِم", "موزّع"], correctAnswer: "موسّع Wi-Fi", name: "n8" },
                { question: "أي بروتوكول يُستخدم لنقل الملفات بشكل آمن؟", answers: ["SFTP", "FTP", "HTTP"], correctAnswer: "SFTP", name: "n9" },
                { question: "ما أقصى سرعة لكابل Cat5e؟", answers: ["1 جيجابت/ثانية", "100 ميجابت/ثانية", "10 جيجابت/ثانية"], correctAnswer: "1 جيجابت/ثانية", name: "n10" },
                { question: "أي بروتوكول يربط IP بـ MAC؟", answers: ["ARP", "ICMP", "TCP"], correctAnswer: "ARP", name: "n11" },
                { question: "ما نوع الشبكة ذات النطاق الصغير؟", answers: ["LAN", "WAN", "MAN"], correctAnswer: "LAN", name: "n12" },
                { question: "أسرع معيار Wi-Fi هو؟", answers: ["Wi-Fi 6", "Wi-Fi 4", "Wi-Fi 5"], correctAnswer: "Wi-Fi 6", name: "n13" },
                { question: "أي بروتوكول لتصفح الويب الآمن؟", answers: ["HTTPS", "HTTP", "FTP"], correctAnswer: "HTTPS", name: "n14" },
                { question: "ما وظيفة جدار الحماية؟", answers: ["منع الوصول غير المصرح", "زيادة السرعة", "إدارة IP"], correctAnswer: "منع الوصول غير المصرح", name: "n15" }
            ]
        }, Math: {
            title: "Math",
            questions: [
                { question: "كم يساوي 12 × 8؟", answers: ["96", "84", "108"], correctAnswer: "96", name: "m1" },
                { question: "ما الجذر التربيعي للعدد 64؟", answers: ["8", "6", "7"], correctAnswer: "8", name: "m2" },
                { question: "كم يساوي 25٪ من 200؟", answers: ["50", "25", "75"], correctAnswer: "50", name: "m3" },
                { question: "ما القيمة التقريبية للعدد π؟", answers: ["3.14", "2.17", "4.13"], correctAnswer: "3.14", name: "m4" },
                { question: "كم يساوي 7²؟", answers: ["49", "42", "56"], correctAnswer: "49", name: "m5" },
                { question: "كم يساوي 100 ÷ 4؟", answers: ["25", "20", "40"], correctAnswer: "25", name: "m6" },
                { question: "ما نوع الزاوية 90 درجة؟", answers: ["زاوية قائمة", "زاوية حادة", "زاوية منفرجة"], correctAnswer: "زاوية قائمة", name: "m7" },
                { question: "كم يساوي 15 + 27؟", answers: ["42", "32", "52"], correctAnswer: "42", name: "m8" },
                { question: "ما محيط مربع طول ضلعه 5؟", answers: ["20", "25", "15"], correctAnswer: "20", name: "m9" },
                { question: "أي عدد هو عدد أولي؟", answers: ["7", "9", "12"], correctAnswer: "7", name: "m10" },
                { question: "كم يساوي 3³؟", answers: ["27", "9", "18"], correctAnswer: "27", name: "m11" },
                { question: "ما ناتج 10 − 3؟", answers: ["7", "6", "8"], correctAnswer: "7", name: "m12" },
                { question: "ما العدد التالي: 2، 4، 6، ؟", answers: ["8", "10", "7"], correctAnswer: "8", name: "m13" },
                { question: "ما الشكل الذي له 3 أضلاع؟", answers: ["مثلث", "مربع", "مستطيل"], correctAnswer: "مثلث", name: "m14" },
                { question: "كم يساوي 1/2 + 1/2؟", answers: ["1", "2", "0.5"], correctAnswer: "1", name: "m15" }
            ]
        },
        History: {
            title: "التاريخ",
            questions: [
                { question: "ما الحدث الذي أشعل شرارة الحرب العالمية الأولى؟", answers: ["اغتيال الأرشيدوق فرانز فرديناند", "غزو بولندا", "الهجوم على بيرل هاربر"], correctAnswer: "اغتيال الأرشيدوق فرانز فرديناند", name: "h1" },
                { question: "ما الهدف الرئيسي من بناء سور الصين العظيم؟", answers: ["الدفاع ضد الغزوات", "التجارة", "الطقوس الدينية"], correctAnswer: "الدفاع ضد الغزوات", name: "h2" },
                { question: "أي اختراع ساعد على انتشار المعرفة في أوروبا؟", answers: ["الطباعة", "المحرك البخاري", "البوصلة"], correctAnswer: "الطباعة", name: "h3" },
                { question: "أي حدث يُعد نهاية العصور الوسطى؟", answers: ["سقوط القسطنطينية", "اكتشاف أمريكا", "الثورة الفرنسية"], correctAnswer: "سقوط القسطنطينية", name: "h4" },
                { question: "ما الحرب التي دارت بين إسبرطة وأثينا؟", answers: ["حرب البيلوبونيز", "الحروب البونية", "حرب طروادة"], correctAnswer: "حرب البيلوبونيز", name: "h5" },
                { question: "ما الهدف الأساسي من الحملات الصليبية؟", answers: ["السيطرة على الأراضي المقدسة", "توسيع التجارة", "الاكتشافات العلمية"], correctAnswer: "السيطرة على الأراضي المقدسة", name: "h6" },
                { question: "كيف انتشر الطاعون الأسود في أوروبا؟", answers: ["طرق التجارة", "الحروب الدينية", "ضعف الزراعة"], correctAnswer: "طرق التجارة", name: "h7" },
                { question: "ما الحدث الذي أثبت كروية الأرض؟", answers: ["الدوران حول الأرض", "اختراع التلسكوب", "صور الأقمار الصناعية"], correctAnswer: "الدوران حول الأرض", name: "h8" },
                { question: "أي حدث تاريخي ورد في ملحمة جلجامش؟", answers: ["الطوفان العظيم", "حرب طروادة", "تأسيس روما"], correctAnswer: "الطوفان العظيم", name: "h9" },
                { question: "ما السبب الرئيسي للثورة الصناعية؟", answers: ["استخدام الآلات في الإنتاج", "تراجع الزراعة", "الحروب الاستعمارية"], correctAnswer: "استخدام الآلات في الإنتاج", name: "h10" },
                { question: "ما المنافسات القديمة التي ألهمت الألعاب الأولمبية الحديثة؟", answers: ["الألعاب الأولمبية اليونانية", "مصارعة الرومان", "المهرجانات الفارسية"], correctAnswer: "الألعاب الأولمبية اليونانية", name: "h11" },
                { question: "ما السبب الرئيسي لسقوط الإمبراطورية الرومانية الغربية؟", answers: ["غزوات البرابرة", "النمو الاقتصادي", "التقدم العلمي"], correctAnswer: "غزوات البرابرة", name: "h12" },
                { question: "ما الطريق الذي ربط آسيا بأوروبا براً؟", answers: ["طريق الحرير", "الطريق الأطلسي", "طريق التوابل"], correctAnswer: "طريق الحرير", name: "h13" },
                { question: "ما الغرض الأساسي من بناء الأهرامات في مصر القديمة؟", answers: ["مقابر ملكية", "مدارس", "قلاع عسكرية"], correctAnswer: "مقابر ملكية", name: "h14" },
                { question: "أي حدث تاريخي يُعد بداية عصر الفضاء؟", answers: ["إطلاق سبوتنيك", "الهبوط على القمر", "أول طيران بشري"], correctAnswer: "إطلاق سبوتنيك", name: "h15" }
            ]
        }, 
        DigitalForensics: {
        title: "Digital Forensics",
            questions: [
                { question: "ما هو علم الأدلة الجنائية الرقمية؟", answers: ["تحليل الأدلة الرقمية", "تصنيع الحواسيب", "برمجة التطبيقات"], correctAnswer: "تحليل الأدلة الرقمية", name: "df1" },
                { question: "أي جهاز يخزن الأدلة الرقمية؟", answers: ["القرص الصلب", "الشاشة", "لوحة المفاتيح"], correctAnswer: "القرص الصلب", name: "df2" },
                { question: "ماذا تصف البيانات الوصفية؟", answers: ["بيانات عن البيانات", "بيانات مشفرة", "ملفات محذوفة"], correctAnswer: "بيانات عن البيانات", name: "df3" },
                { question: "أي نظام ملفات يستخدمه ويندوز؟", answers: ["NTFS", "EXT4", "APFS"], correctAnswer: "NTFS", name: "df4" },
                { question: "ما فائدة الهاش؟", answers: ["التحقق من سلامة الملفات", "تخزين كلمات المرور", "ضغط الملفات"], correctAnswer: "التحقق من سلامة الملفات", name: "df5" },
                { question: "أي خوارزمية هاش تُستخدم كثيراً؟", answers: ["SHA-256", "ZIP", "HTTP"], correctAnswer: "SHA-256", name: "df6" },
                { question: "ماذا يسمى الملف المحذوف غالباً؟", answers: ["بيانات قابلة للاسترجاع", "ملف تالف", "ملف مشفر"], correctAnswer: "بيانات قابلة للاسترجاع", name: "df7" },
                { question: "ما العملية التي تنسخ القرص بالكامل؟", answers: ["تصوير القرص", "التهيئة", "إلغاء التجزئة"], correctAnswer: "تصوير القرص", name: "df8" },
                { question: "أي دليل يجب ألا يتغير؟", answers: ["الدليل الأصلي", "النسخة الاحتياطية", "لقطة الشاشة"], correctAnswer: "الدليل الأصلي", name: "df9" },
                { question: "ماذا تخزن ذاكرة RAM؟", answers: ["بيانات مؤقتة", "ملفات دائمة", "BIOS"], correctAnswer: "بيانات مؤقتة", name: "df10" },
                { question: "أي سجل يتتبع أحداث النظام؟", answers: ["سجل الأحداث", "الكاش", "الكوكيز"], correctAnswer: "سجل الأحداث", name: "df11" },
                { question: "ما وظيفة التشفير؟", answers: ["حماية البيانات", "حذف الملفات", "نسخ الأقراص"], correctAnswer: "حماية البيانات", name: "df12" },
                { question: "أي أداة تراقب حركة الشبكة؟", answers: ["مراقب الحزم", "الراوتر", "الجدار الناري"], correctAnswer: "مراقب الحزم", name: "df13" },
                { question: "ما سلسلة الحيازة؟", answers: ["توثيق نقل الأدلة", "طريقة تشفير", "نظام تخزين"], correctAnswer: "توثيق نقل الأدلة", name: "df14" },
                { question: "أي بيانات تُظهر نشاط المستخدم؟", answers: ["سجل المتصفح", "سرعة المعالج", "حجم الشاشة"], correctAnswer: "سجل المتصفح", name: "df15" }
            ]

    },
        Computing: {
            title: "Computing",
            questions: [
                { question: "أي مما يلي نظام تشغيل؟", answers: ["Linux", "Python", "HTML"], correctAnswer: "Linux", name: "c1" },
                { question: "ماذا يعني CPU؟", answers: ["وحدة المعالجة المركزية", "وحدة شخصية", "برنامج تحكم"], correctAnswer: "وحدة المعالجة المركزية", name: "c2" },
                { question: "أي نوع بيانات للقيم الصح والخطأ؟", answers: ["منطقي", "عدد صحيح", "نص"], correctAnswer: "منطقي", name: "c3" },
                { question: "لغة برمجة عالية المستوى؟", answers: ["Python", "Assembly", "لغة الآلة"], correctAnswer: "Python", name: "c4" },
                { question: "ما الذي يخزن البيانات دائمًا؟", answers: ["القرص الصلب", "RAM", "CPU"], correctAnswer: "القرص الصلب", name: "c5" },
                { question: "أي ذاكرة متطايرة؟", answers: ["RAM", "ROM", "SSD"], correctAnswer: "RAM", name: "c6" },
                { question: "برنامج تصفح الإنترنت؟", answers: ["متصفح ويب", "محرر نصوص", "جداول"], correctAnswer: "متصفح ويب", name: "c7" },
                { question: "ماذا يعني GUI؟", answers: ["واجهة مستخدم رسومية", "إدخال عام", "أداة عالمية"], correctAnswer: "واجهة مستخدم رسومية", name: "c8" },
                { question: "مفهوم يعيد استخدام الكود؟", answers: ["دالة", "حلقة", "متغير"], correctAnswer: "دالة", name: "c9" },
                { question: "وظيفة ALU؟", answers: ["عمليات حسابية ومنطقية", "تخزين", "إدارة ذاكرة"], correctAnswer: "عمليات حسابية ومنطقية", name: "c10" },
                { question: "مثال على برمجيات النظام؟", answers: ["نظام التشغيل", "معالج نصوص", "متصفح"], correctAnswer: "نظام التشغيل", name: "c11" },
                { question: "ماذا يعني BIOS؟", answers: ["نظام الإدخال والإخراج الأساسي", "برنامج ثنائي", "نظام إنترنت"], correctAnswer: "نظام الإدخال والإخراج الأساسي", name: "c12" },
                { question: "لغة بنية صفحات الويب؟", answers: ["HTML", "Python", "C++"], correctAnswer: "HTML", name: "c13" },
                { question: "مثال على الحوسبة السحابية؟", answers: ["Google Drive", "قرص محلي", "USB"], correctAnswer: "Google Drive", name: "c14" },
                { question: "ما هي الذاكرة الافتراضية؟", answers: ["جزء من القرص كـ RAM", "RAM إضافية", "كاش"], correctAnswer: "جزء من القرص كـ RAM", name: "c15" }
            ]
        }, General: {
            title: "General Knowledge",
            questions: [
                { question: "ما أكبر كوكب في النظام الشمسي؟", answers: ["المشتري", "الأرض", "المريخ"], correctAnswer: "المشتري", name: "gk1" },
                { question: "كم عدد القارات؟", answers: ["7", "5", "6"], correctAnswer: "7", name: "gk2" },
                { question: "ما الغاز الذي تمتصه النباتات؟", answers: ["ثاني أكسيد الكربون", "الأكسجين", "النيتروجين"], correctAnswer: "ثاني أكسيد الكربون", name: "gk3" },
                { question: "ما أسرع حيوان بري؟", answers: ["الفهد", "الأسد", "الحصان"], correctAnswer: "الفهد", name: "gk4" },
                { question: "ما هو H2O؟", answers: ["الماء", "الأكسجين", "الهيدروجين"], correctAnswer: "الماء", name: "gk5" },
                { question: "ما أكبر محيط في العالم؟", answers: ["الهادئ", "الأطلسي", "الهندي"], correctAnswer: "الهادئ", name: "gk6" },
                { question: "كم عدد أيام السنة الكبيسة؟", answers: ["366", "365", "364"], correctAnswer: "366", name: "gk7" },
                { question: "أي عضو يضخ الدم؟", answers: ["القلب", "الرئتان", "الدماغ"], correctAnswer: "القلب", name: "gk8" },
                { question: "أي معدن سائل في درجة حرارة الغرفة؟", answers: ["الزئبق", "الحديد", "الألمنيوم"], correctAnswer: "الزئبق", name: "gk9" },
                { question: "ما أقسى مادة طبيعية؟", answers: ["الألماس", "الذهب", "الحديد"], correctAnswer: "الألماس", name: "gk10" },
                { question: "أي كوكب يُعرف بالكوكب الأحمر؟", answers: ["المريخ", "الزهرة", "المشتري"], correctAnswer: "المريخ", name: "gk11" },
                { question: "كم عدد عظام جسم الإنسان؟", answers: ["206", "201", "210"], correctAnswer: "206", name: "gk12" },
                { question: "أي حاسة مرتبطة بالأذن؟", answers: ["السمع", "البصر", "الذوق"], correctAnswer: "السمع", name: "gk13" },
                { question: "ما القوة التي تجذب الأشياء إلى الأرض؟", answers: ["الجاذبية", "المغناطيسية", "الاحتكاك"], correctAnswer: "الجاذبية", name: "gk14" },
                { question: "ماذا تنتج النحل؟", answers: ["العسل", "الحليب", "الزيت"], correctAnswer: "العسل", name: "gk15" }
            ]
        }
    }
};

export default quizQuestions;
