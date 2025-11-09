const config = {
    name: "Mert Efe Kurt",
    title: "Software Developer",
    email: "mertk.mek@gmail.com",
    github: "mertefekurt",
    linkedin: "mertefekurt",

    skills: {
        languages: [
            "JavaScript",
            "Python",
            "Java",
        ],
        frameworks: [
            "React",
            "Node.js",
        ],
        tools: [
            "Git",
            "VS Code",
        ]
    },

    projects: [
        {
            title: "Türkçe Kitap Oluşturucu (Turkish Book Generator)",
            description: "Gemini API ve vektör veritabanı kullanarak tamamen yapılandırılmış, tutarlı bir kitap üreten araç. Kullanıcının belirlediği tema ve tür doğrultusunda yaklaşık 250 bölümlük özgün bir hikaye sunar. Tam Türkçe dil desteği ile hikaye oluşturur ve çıktıyı hem Markdown hem de PDF formatında sunar.",
            technologies: ["Python", "Gemini API", "Vektör Veritabanı", "Markdown", "PDF", "Machine Learning"],
            github: "https://github.com/mertefekurt/Story-Generator",
            demo: "https://github.com/mertefekurt/Story-Generator#readme",
            status: "Aktif",
            image: "img/C1.png"
        },
        {
            title: "Veritabanı Performans Optimizasyon Aracı",
            description: "SQL Server ve PostgreSQL veritabanları için performans analizi ve optimizasyon önerileri sunan araç. Sorgu analizi, indeks önerileri ve performans metrikleri sağlar.",
            technologies: ["Python", "SQL Server", "PostgreSQL", "Performance Analysis", "Data Visualization"],
            github: "#",
            demo: "#",
            status: "Geliştirme Aşamasında",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop"
        },
        {
            title: "Otomatik Backup Yönetim Sistemi",
            description: "Veritabanları için otomatik yedekleme, zamanlama ve geri yükleme işlemlerini yöneten sistem. E-posta bildirimleri ve log takibi içerir.",
            technologies: ["Python", "SQL Server", "Scheduling", "Email Integration", "Logging"],
            github: "#",
            demo: "#",
            status: "Planlama Aşamasında",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop"
        }
    ],

    experience: [
        {
            company: "Ekofin.net",
            position: "Database Programmer",
            period: "Aralık 2024 - Mayıs 2025",
            duration: "6 ay",
            location: "İstanbul, Türkiye",
            achievements: [
                {
                    title: "Veritabanı Tasarımı & Geliştirme",
                    description: "Verimli, ölçeklenebilir SQL tablo mimarileri oluşturma ve yönetme"
                },
                {
                    title: "Performans Optimizasyonu",
                    description: "Optimize edilmiş sorgular yazma, indeksleme ve veritabanı performans ayarlamaları"
                },
                {
                    title: "Veri Güvenliği",
                    description: "Kritik verileri korumak için şifreleme, erişim kontrolü ve yedekleme stratejileri"
                },
                {
                    title: "ETL & Veri Taşıma",
                    description: "Büyük veri setlerini sistemler arası taşımak için ETL süreçleri tasarımı"
                },
                {
                    title: "Otomasyon",
                    description: "Python ve stored procedure'ler ile veritabanı operasyonlarının otomatizasyonu"
                }
            ]
        }
    ]
};

export default config;