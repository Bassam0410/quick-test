const quizQuestions = {
    Networking: {
        title: 'Networking',
        questions: [
            { question: "What does IP stand for?", answers: ["Internet Protocol", "Internal Program", "Interface Point"], correctAnswer: "Internet Protocol", name: "n1" },
            { question: "Which device connects multiple networks together?", answers: ["Router", "Switch", "Hub"], correctAnswer: "Router", name: "n2" },
             { question: "What is the default port number for HTTP?", answers: ["80", "443", "21"], correctAnswer: "80", name: "n3" },
            //  { question: "Which layer of the OSI model deals with routing?", answers: ["Network Layer", "Transport Layer", "Data Link Layer"], correctAnswer: "Network Layer", name: "n4" },
            // { question: "What protocol is used to send emails?", answers: ["SMTP", "FTP", "DNS"], correctAnswer: "SMTP", name: "n5" },
            //  { question: "What does DNS stand for?", answers: ["Domain Name System", "Digital Network Service", "Direct Node Server"], correctAnswer: "Domain Name System", name: "n6" },
            // { question: "Which type of IP address changes frequently?", answers: ["Dynamic IP", "Static IP", "Public IP"], correctAnswer: "Dynamic IP", name: "n7" },
            // { question: "What device is used to extend a wireless network?", answers: ["Wi-Fi Extender", "Modem", "Hub"], correctAnswer: "Wi-Fi Extender", name: "n8" },
            // { question: "Which protocol is used to transfer files securely?", answers: ["SFTP", "FTP", "HTTP"], correctAnswer: "SFTP", name: "n9" },
            // { question: "What is the maximum speed of Cat5e Ethernet?", answers: ["1 Gbps", "100 Mbps", "10 Gbps"], correctAnswer: "1 Gbps", name: "n10" },
            // { question: "Which protocol resolves IP addresses to MAC addresses?", answers: ["ARP", "ICMP", "TCP"], correctAnswer: "ARP", name: "n11" },
            // { question: "What type of network spans a small geographic area?", answers: ["LAN", "WAN", "MAN"], correctAnswer: "LAN", name: "n12" },
            // { question: "Which wireless standard is the fastest?", answers: ["Wi-Fi 6", "Wi-Fi 4", "Wi-Fi 5"], correctAnswer: "Wi-Fi 6", name: "n13" },
            // { question: "Which protocol is used for secure web browsing?", answers: ["HTTPS", "HTTP", "FTP"], correctAnswer: "HTTPS", name: "n14" },
            // { question: "What does a firewall do?", answers: ["Blocks unauthorized access", "Increases bandwidth", "Manages IP addresses"], correctAnswer: "Blocks unauthorized access", name: "n15" },
        ]
    },

    Computing: {
        title: 'Computing',
        questions: [
            { question: "Which of these is an example of an operating system?", answers: ["Linux", "Python", "HTML"], correctAnswer: "Linux", name: "c1" },
            { question: "What does CPU stand for?", answers: ["Central Processing Unit", "Computer Personal Unit", "Control Program User"], correctAnswer: "Central Processing Unit", name: "c2" },
            { question: "Which data type is used to store true/false values?", answers: ["Boolean", "Integer", "String"], correctAnswer: "Boolean", name: "c3" },
            { question: "Which is a high-level programming language?", answers: ["Python", "Assembly", "Machine Code"], correctAnswer: "Python", name: "c4" },
            { question: "Which component stores data permanently?", answers: ["Hard Drive", "RAM", "CPU"], correctAnswer: "Hard Drive", name: "c5" },
            { question: "Which of these is volatile memory?", answers: ["RAM", "ROM", "SSD"], correctAnswer: "RAM", name: "c6" },
        //     { question: "Which software is used to browse the internet?", answers: ["Web Browser", "Text Editor", "Spreadsheet"], correctAnswer: "Web Browser", name: "c7" },
        //     { question: "What does GUI stand for?", answers: ["Graphical User Interface", "General User Input", "Global Utility Interface"], correctAnswer: "Graphical User Interface", name: "c8" },
        //     { question: "Which programming concept allows reuse of code?", answers: ["Function", "Loop", "Variable"], correctAnswer: "Function", name: "c9" },
        //     { question: "What is the main function of the ALU?", answers: ["Perform arithmetic and logic operations", "Store data", "Manage memory"], correctAnswer: "Perform arithmetic and logic operations", name: "c10" },
        //     { question: "Which is an example of system software?", answers: ["Operating System", "Word Processor", "Web Browser"], correctAnswer: "Operating System", name: "c11" },
        //     { question: "What does BIOS stand for?", answers: ["Basic Input Output System", "Binary Input Output Software", "Basic Internet Operating System"], correctAnswer: "Basic Input Output System", name: "c12" },
        //     { question: "Which language is primarily used for web page structure?", answers: ["HTML", "Python", "C++"], correctAnswer: "HTML", name: "c13" },
        //     { question: "Which is an example of cloud computing?", answers: ["Google Drive", "Local Hard Disk", "USB Flash Drive"], correctAnswer: "Google Drive", name: "c14" },
        //     { question: "What is virtual memory?", answers: ["A portion of hard drive used as RAM", "Extra RAM chips", "Cache memory"], correctAnswer: "A portion of hard drive used as RAM", name: "c15" },
        ]
    },

    DigitalForensics: {
        title: 'DigitalForensics',
        questions: [
            { question: "What is the first step in a digital forensics investigation?", answers: ["Preservation", "Analysis", "Reporting"], correctAnswer: "Preservation", name: "df1" },
            { question: "Which tool is commonly used for network traffic analysis?", answers: ["Wireshark", "Photoshop", "Excel"], correctAnswer: "Wireshark", name: "df2" },
            { question: "Which type of evidence is considered volatile?", answers: ["RAM contents", "Hard drive files", "Printed documents"], correctAnswer: "RAM contents", name: "df3" },
            { question: "What does hashing in forensics help with?", answers: ["Verify data integrity", "Recover deleted files", "Decrypt passwords"], correctAnswer: "Verify data integrity", name: "df4" },
            { question: "Which type of file is commonly analyzed for email evidence?", answers: [".pst", ".exe", ".mp3"], correctAnswer: ".pst", name: "df5" },
            { question: "What is steganography?", answers: ["Hiding data inside other files", "Deleting files securely", "Encrypting network traffic"], correctAnswer: "Hiding data inside other files", name: "df6" },
            { question: "Which forensic tool is used to clone disks?", answers: ["FTK Imager", "Notepad", "Photoshop"], correctAnswer: "FTK Imager", name: "df7" },
            { question: "What does the term 'chain of custody' refer to?", answers: ["Documentation of evidence handling", "Erasing files", "Scanning for viruses"], correctAnswer: "Documentation of evidence handling", name: "df8" },
            { question: "Which type of investigation analyzes malware behavior?", answers: ["Malware Forensics", "Network Forensics", "Database Forensics"], correctAnswer: "Malware Forensics", name: "df9" },
            { question: "Which OS artifacts can help trace user activity?", answers: ["Logs and registry entries", "RAM only", "Network cables"], correctAnswer: "Logs and registry entries", name: "df10" },
            { question: "Which method is used to recover deleted files?", answers: ["File carving", "Encryption", "Hashing"], correctAnswer: "File carving", name: "df11" },
            { question: "Which forensic format is commonly used to store disk images?", answers: [".E01", ".TXT", ".JPG"], correctAnswer: ".E01", name: "df12" },
            { question: "What is the purpose of metadata analysis?", answers: ["Identify file creation and modification info", "Encrypt data", "Delete files"], correctAnswer: "Identify file creation and modification info", name: "df13" },
            { question: "Which law is often considered when handling digital evidence?", answers: ["Digital Evidence Act", "Privacy Act", "Labor Act"], correctAnswer: "Digital Evidence Act", name: "df14" },
            { question: "Which type of evidence is least likely to be admissible in court?", answers: ["Tampered data", "System logs", "Network traffic"], correctAnswer: "Tampered data", name: "df15" },
        ]
    },

    Math: {
        title: 'Math',
        questions: [
            { question: "What is the value of π (pi) approximately?", answers: ["3.14", "2.72", "1.62"], correctAnswer: "3.14", name: "m1" },
            { question: "What is 12 × 8?", answers: ["96", "88", "108"], correctAnswer: "96", name: "m2" },
            { question: "What is the square root of 81?", answers: ["9", "8", "7"], correctAnswer: "9", name: "m3" },
            { question: "What is 15% of 200?", answers: ["30", "25", "35"], correctAnswer: "30", name: "m4" },
            { question: "Solve for x: 2x + 5 = 15", answers: ["5", "10", "7"], correctAnswer: "5", name: "m5" },
            { question: "What is the area of a rectangle with length 5 and width 10?", answers: ["50", "15", "30"], correctAnswer: "50", name: "m6" },
            { question: "What is 7²?", answers: ["49", "14", "77"], correctAnswer: "49", name: "m7" },
            { question: "What is the perimeter of a square with side 6?", answers: ["24", "36", "12"], correctAnswer: "24", name: "m8" },
            { question: "What is 9 ÷ 3?", answers: ["3", "6", "2"], correctAnswer: "3", name: "m9" },
            { question: "Convert 0.75 to a fraction.", answers: ["3/4", "1/2", "7/10"], correctAnswer: "3/4", name: "m10" },
            { question: "What is the sum of angles in a triangle?", answers: ["180°", "90°", "360°"], correctAnswer: "180°", name: "m11" },
            { question: "If y = 3x + 2, find y when x = 4", answers: ["14", "12", "10"], correctAnswer: "14", name: "m12" },
            { question: "What is the factorial of 5?", answers: ["120", "24", "60"], correctAnswer: "120", name: "m13" },
            { question: "What is the next prime number after 7?", answers: ["11", "9", "13"], correctAnswer: "11", name: "m14" },
            { question: "Solve: 5² - 3²", answers: ["16", "25", "9"], correctAnswer: "16", name: "m15" },
        ]
    }
};
export default quizQuestions