export type Project = {
  name: string;
  domain: string;
  url: string;
  description: string;
  stack: string[];
  status: "active" | "archived";
};

export const projects: Project[] = [
  {
    name: "TartDefter",
    domain: "tartdefter.com",
    url: "https://tartdefter.com",
    description:
      "Tarım tüccarları için dijital tartı defteri. Çiftçilerden yapılan günlük alımları, ödemeleri ve borçları tek sistemde toplar; otomatik hesaplama, makbuz/rapor üretimi ve yıl bazlı arşiv sunar.",
    stack: ["Next.js", "Node.js", "Express.js", "PostgreSQL"],
    status: "active",
  },
  {
    name: "Konuk Defteri",
    domain: "konukdefteri.com",
    url: "https://konukdefteri.com",
    description:
      "İşletmelerde ziyaretçi deneyimlerini sıradan yorumlar yerine hikâyelere dönüştüren platform. QR ile mekâna özel sayfada fotoğraf ve metinle anı paylaşımı, beğeni ve deneyim arşivi.",
    stack: ["React", "Node.js", "Express.js", "PostgreSQL"],
    status: "active",
  },
  {
    name: "VunQR",
    domain: "vunqr.com",
    url: "https://www.vunqr.com",
    description:
      "Dinamik QR kod platformu. WiFi paylaşımı, dijital kartvizit, menü oluşturma, e-posta/SMS gönderimi ve yorum yönetimi gibi çözümleri tek çatıda sunar.",
    stack: ["React", "TypeScript", "Express.js", "PostgreSQL", "Railway"],
    status: "archived",
  },
  {
    name: "VunSpace",
    domain: "vunspace.com",
    url: "https://vunspace.com",
    description:
      "İşletmeler için modern CRM platformu. Gelişmiş müşteri segmentasyonu, otomatik kampanya yönetimi ve detaylı raporlama özellikleriyle pazarlama süreçlerini yönetir.",
    stack: ["React", "Node.js", "Express.js", "PostgreSQL", "Railway"],
    status: "archived",
  },
  {
    name: "RandevuHazır",
    domain: "randevuhazir.com",
    url: "https://randevuhazir.com",
    description:
      "Hizmet işletmeleri için profesyonel randevu yönetim yazılımı. Otomatik hatırlatmalar, müşteri CRM'i, personel yönetimi ve SMS/E-posta entegrasyonuyla işletmeleri dijitalleştirir.",
    stack: ["Next.js", "Express.js", "PostgreSQL", "iyzico", "3D/2D Ödeme", "NetGSM"],
    status: "archived",
  },
  {
    name: "Diyetka",
    domain: "diyetka.com",
    url: "https://diyetka.com",
    description:
      "Diyetisyenler için SaaS platform. Danışan beslenme verisi yönetimi, kişiye özel diyet oluşturma, ilerleme takibi ve ödeme yönetimini tek yerde toplar.",
    stack: ["Next.js", "React", "PostgreSQL", "iyzico", "3D/2D Ödeme", "Railway"],
    status: "archived",
  },
  {
    name: "Teslim Onay",
    domain: "onayteslim.com",
    url: "https://onayteslim.com",
    description:
      "Freelancer ve ajanslar için iş teslim belgeleme SaaS'ı. Kalem kalem onaylar, zaman damgası, IP loglama ve tek seferlik güvenli onay linkleriyle teslim süreçlerini kayıt altına alır.",
    stack: ["React", "TypeScript", "Express.js", "PostgreSQL", "JWT"],
    status: "archived",
  },
];
