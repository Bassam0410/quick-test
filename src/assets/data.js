import Networking from '../../public/networking.png'
import Computing from '../../public/computing.png'
import Math from '../../public/math.png'
import DigitalForensics from '../../public/digitalForensics.png'
import GeneralKnowledge from '../../public/digitalForensics.png'


const tests = {
    'En': [
        {
            title: "Math",
            heading: "Mathematics",
            description:
                "Assess your understanding of fundamental and applied mathematical concepts, including arithmetic, algebra, geometry, and problem-solving skills essential for analytical thinking.",
            image: Math
        },
        {
            title: "Computing",
            heading: "Computing",
            description:
                "Evaluate your knowledge of computer systems, software, programming basics, and computational thinking used in modern digital environments.",
            image: Computing
        },
        {
            title: "Networking",
            heading: "Networking",
            description:
                "Test your understanding of computer networks, including network types, protocols, connectivity, security basics, and data communication concepts.",
            image: Networking
        },
        {
            title: "DigitalForensics",
            heading: "Digital Forensics",
            description:
                "Measure your ability to analyze digital evidence, understand forensic tools and techniques, and apply investigative methods used in cybercrime and incident response.",
            image: DigitalForensics
        },
        {
            title: "History",
            heading: "History",
            description:
                "Assess your knowledge of historical events, civilizations, timelines, and the causes and impacts that shaped the modern world.",
            image: History
        }, {
            title: "General",
            heading: "General Knowledge",
            description:
                "Test your understanding of everyday facts, science, geography, nature, and common concepts that shape our knowledge of the world.",
            image: GeneralKnowledge
        }
    ],

    'Ar': [
        {
            title: "Math",
            heading: "الرياضيات",
            description:
                "قيّم مدى فهمك للمفاهيم الرياضية الأساسية والتطبيقية، بما في ذلك الحساب، الجبر، الهندسة، ومهارات حل المشكلات الضرورية للتفكير التحليلي.",
            image: Math
        },
        {
            title: "Computing",
            heading: "الحوسبة",
            description:
                "اختبر معرفتك بأنظمة الحاسوب، والبرمجيات، وأساسيات البرمجة، والتفكير الحاسوبي المستخدم في البيئات الرقمية الحديثة.",
            image: Computing
        },
        {
            title: "Networking",
            heading: "الشبكات",
            description:
                "اختبر فهمك لشبكات الحاسوب، بما في ذلك أنواع الشبكات، والبروتوكولات، والاتصال، وأساسيات الأمان، ومفاهيم نقل البيانات.",
            image: Networking
        },
        {
            title: "DigitalForensics",
            heading: "الأدلة الجنائية الرقمية",
            description:
                "قيّم قدرتك على تحليل الأدلة الرقمية، وفهم أدوات وتقنيات التحقيق الجنائي، وتطبيق الأساليب المستخدمة في جرائم الإنترنت والاستجابة للحوادث.",
            image: DigitalForensics
        },
        {
            title: "History",
            heading: "التاريخ",
            description:
                "قيّم معرفتك بالأحداث التاريخية، والحضارات، والتسلسل الزمني، والأسباب والنتائج التي ساهمت في تشكيل العالم الحديث.",
            image: History
        }, {
            title: "General",
            heading: "المعلومات العامة",
            description:
                "قيّم معرفتك بالمعلومات العامة، والعلوم، والجغرافيا، والطبيعة، والحقائق الشائعة التي تساعد على فهم العالم من حولنا.",
            image: GeneralKnowledge
        }
    ]
};


export default tests