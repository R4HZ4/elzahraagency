import hero1Webp from '../assets/images/hero-1.webp';
import hero1MdWebp from '../assets/images/hero-1-md.webp';
import hero1Jpg from '../assets/images/hero-1.jpg';

import hero2Webp from '../assets/images/hero-2.webp';
import hero2MdWebp from '../assets/images/hero-2-md.webp';
import hero2Jpg from '../assets/images/hero-2.jpg';

import hero3Webp from '../assets/images/hero-3.webp';
import hero3MdWebp from '../assets/images/hero-3-md.webp';
import hero3Jpg from '../assets/images/hero-3.jpg';

export type Language = 'ms' | 'en';

export interface ImageAsset {
  webp: string;
  webpMd: string;
  jpg: string;
  width: number;
  height: number;
}

export const IMAGES = {
  hero1: { webp: hero1Webp, webpMd: hero1MdWebp, jpg: hero1Jpg, width: 1920, height: 1088 },
  hero2: { webp: hero2Webp, webpMd: hero2MdWebp, jpg: hero2Jpg, width: 1920, height: 1088 },
  hero3: { webp: hero3Webp, webpMd: hero3MdWebp, jpg: hero3Jpg, width: 1920, height: 1088 },
} as const satisfies Record<string, ImageAsset>;

export interface NavGroup {
  title: string;
  links: { label: string; topic?: string; href: string }[];
}

export interface NavCategory {
  label: string;
  intro: string;
  groups: NavGroup[];
}

export interface HeroSlide {
  img: ImageAsset;
  alt: string;
  tag: string;
  title: string;
  text: string;
  cta: string;
  targetSection: string;
  topic?: string;
}

export interface SolutionItem {
  id: string;
  iconName: 'shield' | 'heart' | 'graduation' | 'piggy' | 'building';
  title: string;
  description: string;
  topic: string;
}

export interface QuickActionItem {
  iconName: 'file' | 'card' | 'userSearch' | 'building';
  title: string;
  topic: string;
}

export interface NewsItem {
  id: string;
  img: ImageAsset;
  alt: string;
  category: string;
  date: string;
  title: string;
  summary: string;
  body: string[];
}

export interface SiteCopy {
  brand: {
    monogram: string;
    name: string;
    sub: string;
    fullName: string;
    tagline: string;
    phone: string;
    hours: string;
    email: string;
    address: string;
    regNo: string;
  };
  topBar: {
    audiences: { id: string; label: string }[];
    findBranch: string;
    loginCta: string;
    contactCta: string;
    searchLabel: string;
    menuLabel: string;
    viewAll: string;
  };
  nav: NavCategory[];
  heroSlides: HeroSlide[];
  quickActions: QuickActionItem[];
  solutionsSection: {
    eyebrow: string;
    title: string;
    link: string;
    learnMore: string;
  };
  solutions: SolutionItem[];
  spotlight: {
    eyebrow: string;
    title: string;
    description: string;
    imageAlt: string;
    stats: [string, string][];
    cta: string;
    topic: string;
  };
  newsSection: {
    eyebrow: string;
    title: string;
    link: string;
    readMore: string;
    closeLabel: string;
  };
  news: NewsItem[];
  ctaBanner: {
    title: string;
    subtitle: string;
    button: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    officeTitle: string;
    officeHoursLabel: string;
    topics: string[];
    fields: {
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      topic: string;
      message: string;
      messagePlaceholder: string;
      submit: string;
      submitting: string;
    };
    errors: {
      nameRequired: string;
      emailInvalid: string;
      phoneInvalid: string;
      messageRequired: string;
    };
    success: {
      title: string;
      description: string;
      refLabel: string;
      newMessage: string;
    };
  };
  search: {
    placeholder: string;
    empty: string;
    title: string;
    closeLabel: string;
  };
  footer: {
    columns: { title: string; links: { label: string; href: string }[] }[];
    legal: string[];
    copyright: string;
  };
}

export const SITE_CONTENT: Record<Language, SiteCopy> = {
  ms: {
    brand: {
      monogram: 'E',
      name: 'El Zahra',
      sub: 'Agency',
      fullName: 'El Zahra Agency',
      tagline: 'Melindungi dan memperkasa kesejahteraan kewangan rakyat Malaysia sejak 1972.',
      phone: '1-300-88-1899',
      hours: 'Isnin–Jumaat, 8:30 pg – 5:30 ptg',
      email: 'khidmat@elzahraagency.com.my',
      address: 'Menara El Zahra, Jalan Ampang, 50450 Kuala Lumpur',
      regNo: '197201000123',
    },
    topBar: {
      audiences: [
        { id: 'individu', label: 'Individu' },
        { id: 'korporat', label: 'Korporat' },
        { id: 'perunding', label: 'Perunding' },
      ],
      findBranch: 'Cari Cawangan',
      loginCta: 'Hubungi Kami',
      contactCta: 'Hubungi Kami',
      searchLabel: 'Cari',
      menuLabel: 'Menu navigasi',
      viewAll: 'Lihat semua',
    },
    nav: [
      {
        label: 'Perlindungan',
        intro: 'Pelan perlindungan menyeluruh untuk setiap fasa kehidupan anda.',
        groups: [
          {
            title: 'Individu',
            links: [
              { label: 'Hayat', topic: 'Insurans Hayat', href: '#penyelesaian' },
              { label: 'Kesihatan & Perubatan', topic: 'Kesihatan & Perubatan', href: '#penyelesaian' },
              { label: 'Penyakit Kritikal', topic: 'Kesihatan & Perubatan', href: '#hubungi' },
              { label: 'Kemalangan Diri', topic: 'Insurans Hayat', href: '#hubungi' },
            ],
          },
          {
            title: 'Keluarga',
            links: [
              { label: 'Pendidikan Anak', topic: 'Pendidikan Anak', href: '#penyelesaian' },
              { label: 'Perlindungan Keluarga', topic: 'Insurans Hayat', href: '#hubungi' },
              { label: 'Warisan & Hibah', topic: 'Insurans Hayat', href: '#hubungi' },
            ],
          },
        ],
      },
      {
        label: 'Simpanan & Pelaburan',
        intro: 'Rancang masa depan kewangan dengan bimbingan pakar.',
        groups: [
          {
            title: 'Simpanan',
            links: [
              { label: 'Simpanan Bersasar', topic: 'Persaraan', href: '#penyelesaian' },
              { label: 'Persaraan', topic: 'Persaraan', href: '#penyelesaian' },
              { label: 'Simpanan Pendidikan', topic: 'Pendidikan Anak', href: '#penyelesaian' },
            ],
          },
          {
            title: 'Pelaburan',
            links: [
              { label: 'Dana Patuh Syariah', topic: 'Persaraan', href: '#hubungi' },
              { label: 'Pelaburan Berkaitan', topic: 'Persaraan', href: '#hubungi' },
              { label: 'Prestasi Dana', topic: 'Semakan Kewangan Percuma', href: '#sorotan' },
            ],
          },
        ],
      },
      {
        label: 'Korporat',
        intro: 'Penyelesaian manfaat pekerja untuk organisasi pelbagai saiz.',
        groups: [
          {
            title: 'Manfaat Pekerja',
            links: [
              { label: 'Insurans Berkumpulan', topic: 'Manfaat Pekerja', href: '#penyelesaian' },
              { label: 'Perubatan Berkumpulan', topic: 'Manfaat Pekerja', href: '#penyelesaian' },
              { label: 'Skim Persaraan', topic: 'Persaraan', href: '#hubungi' },
            ],
          },
          {
            title: 'Perusahaan',
            links: [
              { label: 'PKS', topic: 'Manfaat Pekerja', href: '#hubungi' },
              { label: 'Syarikat Besar', topic: 'Manfaat Pekerja', href: '#hubungi' },
              { label: 'Sektor Awam', topic: 'Manfaat Pekerja', href: '#hubungi' },
            ],
          },
        ],
      },
      {
        label: 'Khidmat Pelanggan',
        intro: 'Kami sedia membantu anda pada bila-bila masa.',
        groups: [
          {
            title: 'Bantuan',
            links: [
              { label: 'Buat Tuntutan', topic: 'Buat Tuntutan', href: '#hubungi' },
              { label: 'Bayaran Premium', topic: 'Bayaran Premium', href: '#hubungi' },
              { label: 'Kemas Kini Maklumat', topic: 'Pertanyaan Umum', href: '#hubungi' },
              { label: 'Soalan Lazim', topic: 'Pertanyaan Umum', href: '#hubungi' },
            ],
          },
          {
            title: 'Hubungi',
            links: [
              { label: 'Cari Cawangan', topic: 'Cari Cawangan', href: '#hubungi' },
              { label: 'Cari Perunding', topic: 'Cari Perunding', href: '#hubungi' },
              { label: 'Maklum Balas', topic: 'Pertanyaan Umum', href: '#hubungi' },
            ],
          },
        ],
      },
      {
        label: 'Tentang Kami',
        intro: 'Lebih 50 tahun berkhidmat untuk rakyat Malaysia.',
        groups: [
          {
            title: 'Syarikat',
            links: [
              { label: 'Profil Korporat', href: '#sorotan' },
              { label: 'Lembaga Pengarah', href: '#sorotan' },
              { label: 'Tadbir Urus', href: '#sorotan' },
            ],
          },
          {
            title: 'Media',
            links: [
              { label: 'Berita & Kenyataan Media', href: '#berita' },
              { label: 'Laporan Tahunan', href: '#berita' },
              { label: 'Kerjaya', topic: 'Pertanyaan Umum', href: '#hubungi' },
            ],
          },
        ],
      },
    ],
    heroSlides: [
      {
        img: IMAGES.hero1,
        alt: 'Keluarga Malaysia pelbagai generasi tersenyum bersama di ruang tamu moden',
        tag: 'Perlindungan Keluarga',
        title: 'Lindungi insan tersayang, hari ini dan esok',
        text: 'Pelan perlindungan menyeluruh yang direka untuk setiap peringkat kehidupan keluarga anda bersama El Zahra Agency.',
        cta: 'Terokai Pelan',
        targetSection: '#penyelesaian',
        topic: 'Insurans Hayat',
      },
      {
        img: IMAGES.hero2,
        alt: 'Panorama latar langit Kuala Lumpur dan Menara Berkembar Petronas pada waktu matahari terbit',
        tag: 'Laporan Tahunan 2025',
        title: 'Lebih 50 tahun membina Malaysia yang sejahtera',
        text: 'Prestasi kukuh dengan RM2.4 bilion manfaat dibayar kepada pelanggan sepanjang tahun lalu.',
        cta: 'Baca Laporan',
        targetSection: '#berita',
      },
      {
        img: IMAGES.hero3,
        alt: 'Perunding kewangan El Zahra Agency berbincang pelan masa depan bersama pasangan pelanggan',
        tag: 'Nasihat Kewangan',
        title: 'Rancang masa depan bersama perunding bertauliah',
        text: 'Dapatkan nasihat peribadi tanpa sebarang komitmen daripada lebih 8,000 perunding kami.',
        cta: 'Cari Perunding',
        targetSection: '#hubungi',
        topic: 'Cari Perunding',
      },
    ],
    quickActions: [
      { iconName: 'file', title: 'Buat Tuntutan', topic: 'Buat Tuntutan' },
      { iconName: 'card', title: 'Bayar Premium', topic: 'Bayaran Premium' },
      { iconName: 'userSearch', title: 'Cari Perunding', topic: 'Cari Perunding' },
      { iconName: 'building', title: 'Cari Hospital Panel', topic: 'Cari Hospital Panel' },
    ],
    solutionsSection: {
      eyebrow: 'Penyelesaian Kami',
      title: 'Perlindungan yang sesuai untuk setiap keperluan',
      link: 'Lihat semua produk',
      learnMore: 'Ketahui lanjut',
    },
    solutions: [
      {
        id: 'hayat',
        iconName: 'shield',
        title: 'Insurans Hayat',
        description: 'Jaminan kewangan untuk keluarga anda jika berlaku perkara tidak diingini.',
        topic: 'Insurans Hayat',
      },
      {
        id: 'kesihatan',
        iconName: 'heart',
        title: 'Kesihatan & Perubatan',
        description: 'Akses rawatan berkualiti di lebih 300 hospital panel seluruh negara.',
        topic: 'Kesihatan & Perubatan',
      },
      {
        id: 'pendidikan',
        iconName: 'graduation',
        title: 'Pendidikan Anak',
        description: 'Simpanan bersasar untuk memastikan impian pendidikan anak tercapai.',
        topic: 'Pendidikan Anak',
      },
      {
        id: 'persaraan',
        iconName: 'piggy',
        title: 'Persaraan',
        description: 'Nikmati persaraan yang selesa dengan pendapatan yang berterusan.',
        topic: 'Persaraan',
      },
      {
        id: 'pekerja',
        iconName: 'building',
        title: 'Manfaat Pekerja',
        description: 'Pelan berkumpulan yang fleksibel untuk syarikat dan PKS.',
        topic: 'Manfaat Pekerja',
      },
    ],
    spotlight: {
      eyebrow: 'Sorotan',
      title: 'Semakan Kewangan Percuma bersama perunding bertauliah',
      description:
        'Fahami keperluan perlindungan dan simpanan anda dalam sesi 30 minit. Perunding El Zahra Agency akan membantu menilai kedudukan kewangan semasa dan mencadangkan pelan yang sesuai.',
      imageAlt: 'Perunding kewangan El Zahra Agency bersama pelanggan',
      stats: [
        ['50+', 'Tahun berkhidmat'],
        ['3.2 juta', 'Pelanggan'],
        ['98%', 'Tuntutan diluluskan'],
      ],
      cta: 'Tempah Sesi',
      topic: 'Semakan Kewangan Percuma',
    },
    newsSection: {
      eyebrow: 'Berita & Media',
      title: 'Perkembangan terkini',
      link: 'Semua berita',
      readMore: 'Baca artikel',
      closeLabel: 'Tutup',
    },
    news: [
      {
        id: 'q3-growth',
        img: IMAGES.hero2,
        alt: 'Latar langit Kuala Lumpur mewakili pertumbuhan kewangan El Zahra Agency',
        category: 'Kenyataan Media',
        date: '22 Okt 2026',
        title: 'El Zahra Agency catat pertumbuhan premium baharu sebanyak 12% bagi suku ketiga',
        summary: 'Pertumbuhan kukuh didorong oleh permintaan tinggi terhadap pelan perubatan keluarga dan simpanan patuh Syariah.',
        body: [
          'Kuala Lumpur — El Zahra Agency hari ini mengumumkan peningkatan sebanyak 12% dalam nilai premium perniagaan baharu bagi suku ketiga tahun kewangan 2026 berbanding tempoh yang sama tahun lalu.',
          'Lonjakan ini dipacu oleh kesedaran yang semakin meningkat dalam kalangan keluarga muda di Malaysia mengenai kepentingan kad perubatan tanpa had tahunan serta perlindungan pendapatan.',
          'Dengan rangkaian lebih 300 hospital panel di seluruh Malaysia dan proses tuntutan digital yang dipercepatkan, kadar kelulusan tuntutan kekal kukuh pada paras 98%.',
        ],
      },
      {
        id: 'literasi-kewangan',
        img: IMAGES.hero3,
        alt: 'Sesi bimbingan kewangan bersama perunding El Zahra Agency',
        category: 'Komuniti',
        date: '15 Okt 2026',
        title: 'Program Literasi Kewangan diperluas ke 120 sekolah di Sabah dan Sarawak',
        summary: 'Inisiatif tanggungjawab korporat El Zahra Agency memperkasa generasi muda dengan asas pengurusan kewangan.',
        body: [
          'Kota Kinabalu — Melalui inisiatif komuniti tahunan kami, El Zahra Agency memperluaskan Program Literasi Kewangan ke 120 buah sekolah menengah di Sabah dan Sarawak tahun ini.',
          'Program ini merangkumi bengkel interaktif pengurusan bajet, kepentingan simpanan kecemasan, dan perancangan pendidikan tinggi yang dikendalikan oleh perunding sukarelawan kami.',
          'Setakat ini, lebih 45,000 pelajar dan guru telah menerima manfaat daripada siri bengkel tersebut sejak dilancarkan.',
        ],
      },
      {
        id: 'anugerah-2026',
        img: IMAGES.hero1,
        alt: 'Keluarga bahagia dilindungi oleh El Zahra Agency',
        category: 'Anugerah',
        date: '03 Okt 2026',
        title: 'Dinobatkan Agensi Perlindungan Hayat Terbaik Malaysia 2026',
        summary: 'Pengiktirafan berprestij atas kecemerlangan perkhidmatan pelanggan dan inovasi tuntutan pantas.',
        body: [
          'Kuala Lumpur — El Zahra Agency sekali lagi diiktiraf sebagai Agensi Perlindungan Hayat Terbaik Malaysia 2026 di Anugerah Industri Kewangan Kebangsaan.',
          'Panel juri mengetengahkan komitmen agensi dalam menyediakan khidmat nasihat yang telus, masa pemprosesan tuntutan purata bawah 48 jam, serta sokongan khidmat pelanggan dwibahasa yang responsif.',
          'Kami berterima kasih kepada lebih 3.2 juta pelanggan yang terus meletakkan kepercayaan kepada El Zahra Agency.',
        ],
      },
    ],
    ctaBanner: {
      title: 'Perlukan bantuan memilih pelan?',
      subtitle: 'Pasukan El Zahra Agency sedia membantu anda, Isnin hingga Jumaat.',
      button: 'Hubungi Kami',
    },
    contact: {
      eyebrow: 'Hubungi Kami',
      title: 'Mulakan perbualan bersama perunding El Zahra Agency',
      subtitle: 'Isi borang di bawah untuk semakan kewangan percuma, pertanyaan tuntutan, atau sebut harga pelan perlindungan yang disesuaikan untuk anda dan keluarga.',
      officeTitle: 'Ibu Pejabat & Talian Khidmat',
      officeHoursLabel: 'Waktu Operasi',
      topics: [
        'Insurans Hayat',
        'Kesihatan & Perubatan',
        'Pendidikan Anak',
        'Persaraan',
        'Manfaat Pekerja',
        'Semakan Kewangan Percuma',
        'Buat Tuntutan',
        'Bayaran Premium',
        'Cari Perunding',
        'Cari Hospital Panel',
        'Cari Cawangan',
        'Pertanyaan Umum',
      ],
      fields: {
        name: 'Nama Penuh',
        namePlaceholder: 'Cth: Ahmad Faizal bin Razak',
        email: 'Alamat Emel',
        emailPlaceholder: 'ahmad@contoh.com.my',
        phone: 'Nombor Telefon',
        phonePlaceholder: '012-345 6789',
        topic: 'Topik / Pelan Pilihan',
        message: 'Mesej Anda',
        messagePlaceholder: 'Kongsi keperluan perlindungan, bilangan tanggungan, atau pertanyaan anda...',
        submit: 'Hantar Pertanyaan',
        submitting: 'Menghantar...',
      },
      errors: {
        nameRequired: 'Sila masukkan nama penuh anda.',
        emailInvalid: 'Sila masukkan alamat emel yang sah.',
        phoneInvalid: 'Sila masukkan nombor telefon yang sah.',
        messageRequired: 'Sila nyatakan ringkasan pertanyaan anda.',
      },
      success: {
        title: 'Terima kasih! Pertanyaan anda telah diterima.',
        description: 'Perunding El Zahra Agency akan menghubungi anda dalam tempoh 1 hari bekerja.',
        refLabel: 'No. Rujukan',
        newMessage: 'Hantar Pertanyaan Lain',
      },
    },
    search: {
      title: 'Cari Pelan & Bantuan',
      placeholder: 'Taip kata kunci (cth: hayat, perubatan, tuntutan, persaraan)...',
      empty: 'Tiada hasil ditemui. Cuba kata kunci lain atau hubungi kami secara terus.',
      closeLabel: 'Tutup carian',
    },
    footer: {
      columns: [
        {
          title: 'Perlindungan',
          links: [
            { label: 'Hayat', href: '#penyelesaian' },
            { label: 'Kesihatan & Perubatan', href: '#penyelesaian' },
            { label: 'Penyakit Kritikal', href: '#hubungi' },
            { label: 'Kemalangan Diri', href: '#hubungi' },
            { label: 'Takaful', href: '#hubungi' },
          ],
        },
        {
          title: 'Simpanan & Pelaburan',
          links: [
            { label: 'Persaraan', href: '#penyelesaian' },
            { label: 'Pendidikan', href: '#penyelesaian' },
            { label: 'Dana Patuh Syariah', href: '#hubungi' },
            { label: 'Prestasi Dana', href: '#sorotan' },
          ],
        },
        {
          title: 'Khidmat Pelanggan',
          links: [
            { label: 'Buat Tuntutan', href: '#hubungi' },
            { label: 'Bayaran Premium', href: '#hubungi' },
            { label: 'Borang Muat Turun', href: '#hubungi' },
            { label: 'Soalan Lazim', href: '#hubungi' },
            { label: 'Cari Cawangan', href: '#hubungi' },
          ],
        },
        {
          title: 'Tentang Kami',
          links: [
            { label: 'Profil Korporat', href: '#sorotan' },
            { label: 'Tadbir Urus', href: '#sorotan' },
            { label: 'Hubungan Pelabur', href: '#berita' },
            { label: 'Berita & Media', href: '#berita' },
            { label: 'Kerjaya', href: '#hubungi' },
          ],
        },
      ],
      legal: ['Notis Privasi', 'Terma Penggunaan', 'Notis Keselamatan', 'Peta Laman'],
      copyright:
        '© 2026 El Zahra Agency (197201000123). Hak cipta terpelihara. Dilesenkan di bawah Akta Perkhidmatan Kewangan 2013 dan dikawal selia oleh Bank Negara Malaysia.',
    },
  },
  en: {
    brand: {
      monogram: 'E',
      name: 'El Zahra',
      sub: 'Agency',
      fullName: 'El Zahra Agency',
      tagline: 'Protecting and empowering the financial wellbeing of Malaysians since 1972.',
      phone: '1-300-88-1899',
      hours: 'Mon–Fri, 8:30 AM – 5:30 PM',
      email: 'khidmat@elzahraagency.com.my',
      address: 'Menara El Zahra, Jalan Ampang, 50450 Kuala Lumpur',
      regNo: '197201000123',
    },
    topBar: {
      audiences: [
        { id: 'individu', label: 'Personal' },
        { id: 'korporat', label: 'Corporate' },
        { id: 'perunding', label: 'Advisors' },
      ],
      findBranch: 'Find a Branch',
      loginCta: 'Contact Us',
      contactCta: 'Contact Us',
      searchLabel: 'Search',
      menuLabel: 'Navigation menu',
      viewAll: 'View all',
    },
    nav: [
      {
        label: 'Protection',
        intro: 'Comprehensive protection plans tailored for every stage of your life.',
        groups: [
          {
            title: 'Individual',
            links: [
              { label: 'Life Protection', topic: 'Life Insurance', href: '#penyelesaian' },
              { label: 'Health & Medical', topic: 'Health & Medical', href: '#penyelesaian' },
              { label: 'Critical Illness', topic: 'Health & Medical', href: '#hubungi' },
              { label: 'Personal Accident', topic: 'Life Insurance', href: '#hubungi' },
            ],
          },
          {
            title: 'Family',
            links: [
              { label: 'Child Education', topic: 'Child Education', href: '#penyelesaian' },
              { label: 'Family Protection', topic: 'Life Insurance', href: '#hubungi' },
              { label: 'Legacy & Hibah', topic: 'Life Insurance', href: '#hubungi' },
            ],
          },
        ],
      },
      {
        label: 'Savings & Investment',
        intro: 'Plan your financial future with dedicated specialist guidance.',
        groups: [
          {
            title: 'Savings',
            links: [
              { label: 'Goal-Based Savings', topic: 'Retirement', href: '#penyelesaian' },
              { label: 'Retirement', topic: 'Retirement', href: '#penyelesaian' },
              { label: 'Education Savings', topic: 'Child Education', href: '#penyelesaian' },
            ],
          },
          {
            title: 'Investments',
            links: [
              { label: 'Shariah-Compliant Funds', topic: 'Retirement', href: '#hubungi' },
              { label: 'Investment-Linked', topic: 'Retirement', href: '#hubungi' },
              { label: 'Fund Performance', topic: 'Free Financial Review', href: '#sorotan' },
            ],
          },
        ],
      },
      {
        label: 'Corporate',
        intro: 'Flexible employee benefits solutions for organizations of every scale.',
        groups: [
          {
            title: 'Employee Benefits',
            links: [
              { label: 'Group Insurance', topic: 'Employee Benefits', href: '#penyelesaian' },
              { label: 'Group Medical', topic: 'Employee Benefits', href: '#penyelesaian' },
              { label: 'Retirement Schemes', topic: 'Retirement', href: '#hubungi' },
            ],
          },
          {
            title: 'Enterprise',
            links: [
              { label: 'SMEs', topic: 'Employee Benefits', href: '#hubungi' },
              { label: 'Large Enterprises', topic: 'Employee Benefits', href: '#hubungi' },
              { label: 'Public Sector', topic: 'Employee Benefits', href: '#hubungi' },
            ],
          },
        ],
      },
      {
        label: 'Customer Care',
        intro: 'Our dedicated care team is ready to assist you whenever needed.',
        groups: [
          {
            title: 'Support',
            links: [
              { label: 'Make a Claim', topic: 'Make a Claim', href: '#hubungi' },
              { label: 'Pay Premium', topic: 'Pay Premium', href: '#hubungi' },
              { label: 'Update Details', topic: 'General Inquiry', href: '#hubungi' },
              { label: 'FAQs', topic: 'General Inquiry', href: '#hubungi' },
            ],
          },
          {
            title: 'Connect',
            links: [
              { label: 'Find a Branch', topic: 'Find a Branch', href: '#hubungi' },
              { label: 'Find an Advisor', topic: 'Find an Advisor', href: '#hubungi' },
              { label: 'Feedback', topic: 'General Inquiry', href: '#hubungi' },
            ],
          },
        ],
      },
      {
        label: 'About Us',
        intro: 'Over 50 years serving households and businesses across Malaysia.',
        groups: [
          {
            title: 'Company',
            links: [
              { label: 'Corporate Profile', href: '#sorotan' },
              { label: 'Board of Directors', href: '#sorotan' },
              { label: 'Governance', href: '#sorotan' },
            ],
          },
          {
            title: 'Media',
            links: [
              { label: 'News & Press Releases', href: '#berita' },
              { label: 'Annual Report', href: '#berita' },
              { label: 'Careers', topic: 'General Inquiry', href: '#hubungi' },
            ],
          },
        ],
      },
    ],
    heroSlides: [
      {
        img: IMAGES.hero1,
        alt: 'Multi-generational Malaysian family smiling together in a bright living room',
        tag: 'Family Protection',
        title: 'Protect the people you love, today and tomorrow',
        text: 'Comprehensive protection plans crafted for every milestone of your family journey with El Zahra Agency.',
        cta: 'Explore Plans',
        targetSection: '#penyelesaian',
        topic: 'Life Insurance',
      },
      {
        img: IMAGES.hero2,
        alt: 'Kuala Lumpur skyline and Petronas Twin Towers bathed in warm sunrise light',
        tag: 'Annual Report 2025',
        title: 'Over 50 years building a resilient Malaysia',
        text: 'Strong financial stewardship with RM2.4 billion in claims and benefits paid to policyholders last year.',
        cta: 'Read Report',
        targetSection: '#berita',
      },
      {
        img: IMAGES.hero3,
        alt: 'El Zahra Agency financial consultant reviewing plans with a couple',
        tag: 'Financial Guidance',
        title: 'Plan your future with certified advisors',
        text: 'Receive personalized, obligation-free financial guidance from our network of over 8,000 licensed consultants.',
        cta: 'Find an Advisor',
        targetSection: '#hubungi',
        topic: 'Find an Advisor',
      },
    ],
    quickActions: [
      { iconName: 'file', title: 'Make a Claim', topic: 'Make a Claim' },
      { iconName: 'card', title: 'Pay Premium', topic: 'Pay Premium' },
      { iconName: 'userSearch', title: 'Find an Advisor', topic: 'Find an Advisor' },
      { iconName: 'building', title: 'Panel Hospitals', topic: 'Panel Hospitals' },
    ],
    solutionsSection: {
      eyebrow: 'Our Solutions',
      title: 'Protection tailored to every stage of life',
      link: 'View all products',
      learnMore: 'Learn more',
    },
    solutions: [
      {
        id: 'hayat',
        iconName: 'shield',
        title: 'Life Insurance',
        description: 'Lasting financial security for your loved ones when the unexpected happens.',
        topic: 'Life Insurance',
      },
      {
        id: 'kesihatan',
        iconName: 'heart',
        title: 'Health & Medical',
        description: 'Priority access to quality care across more than 300 panel hospitals nationwide.',
        topic: 'Health & Medical',
      },
      {
        id: 'pendidikan',
        iconName: 'graduation',
        title: 'Child Education',
        description: 'Dedicated goal-based savings to safeguard your children’s academic aspirations.',
        topic: 'Child Education',
      },
      {
        id: 'persaraan',
        iconName: 'piggy',
        title: 'Retirement',
        description: 'Enjoy a comfortable retirement with reliable, recurring income streams.',
        topic: 'Retirement',
      },
      {
        id: 'pekerja',
        iconName: 'building',
        title: 'Employee Benefits',
        description: 'Flexible group medical and protection plans designed for SMEs and enterprises.',
        topic: 'Employee Benefits',
      },
    ],
    spotlight: {
      eyebrow: 'Spotlight',
      title: 'Complimentary Financial Review with certified advisors',
      description:
        'Clarify your protection gaps and savings goals in a focused 30-minute consultation. An El Zahra Agency advisor will review your current portfolio and recommend the right plan.',
      imageAlt: 'El Zahra Agency financial consultant with clients',
      stats: [
        ['50+', 'Years of service'],
        ['3.2 million', 'Policyholders'],
        ['98%', 'Claims approved'],
      ],
      cta: 'Book a Session',
      topic: 'Free Financial Review',
    },
    newsSection: {
      eyebrow: 'News & Media',
      title: 'Latest updates',
      link: 'All news',
      readMore: 'Read article',
      closeLabel: 'Close',
    },
    news: [
      {
        id: 'q3-growth',
        img: IMAGES.hero2,
        alt: 'Kuala Lumpur skyline representing El Zahra Agency growth',
        category: 'Press Release',
        date: '22 Oct 2026',
        title: 'El Zahra Agency records 12% new business premium growth in Q3',
        summary: 'Strong momentum led by rising demand for family medical coverage and Shariah-compliant savings.',
        body: [
          'Kuala Lumpur — El Zahra Agency today reported a 12% year-on-year increase in new business premiums for the third quarter of 2026.',
          'The growth reflects stronger awareness among young Malaysian families around unlimited annual medical coverage and income protection.',
          'Supported by over 300 panel hospitals nationwide and streamlined digital claims processing, claims approval remains steady at 98%.',
        ],
      },
      {
        id: 'literasi-kewangan',
        img: IMAGES.hero3,
        alt: 'Financial planning consultation at El Zahra Agency',
        category: 'Community',
        date: '15 Oct 2026',
        title: 'Financial Literacy Program expands to 120 schools in Sabah and Sarawak',
        summary: 'El Zahra Agency community initiative equips students with practical budgeting and saving skills.',
        body: [
          'Kota Kinabalu — Through our flagship community outreach, El Zahra Agency has expanded its Financial Literacy Program to 120 secondary schools across Sabah and Sarawak.',
          'Interactive workshops cover household budgeting, emergency funds, and higher education planning led by our volunteer advisors.',
          'Over 45,000 students and educators have participated in the series since its inception.',
        ],
      },
      {
        id: 'anugerah-2026',
        img: IMAGES.hero1,
        alt: 'Protected Malaysian family with El Zahra Agency',
        category: 'Award',
        date: '03 Oct 2026',
        title: 'Named Best Life & Protection Agency Malaysia 2026',
        summary: 'Honored for customer service excellence and rapid digital claims turnaround.',
        body: [
          'Kuala Lumpur — El Zahra Agency has been recognized as the Best Life & Protection Agency in Malaysia for 2026 at the National Financial Excellence Awards.',
          'Judges highlighted our transparent advisory standards, average claims turnaround under 48 hours, and responsive bilingual support.',
          'We extend our heartfelt thanks to the 3.2 million customers who trust El Zahra Agency.',
        ],
      },
    ],
    ctaBanner: {
      title: 'Need help choosing the right plan?',
      subtitle: 'Our El Zahra Agency specialists are ready to assist you, Monday to Friday.',
      button: 'Contact Us',
    },
    contact: {
      eyebrow: 'Contact Us',
      title: 'Start a conversation with El Zahra Agency',
      subtitle: 'Submit the form below for a complimentary financial review, claim assistance, or tailored protection quotation for you and your family.',
      officeTitle: 'Headquarters & Careline',
      officeHoursLabel: 'Operating Hours',
      topics: [
        'Life Insurance',
        'Health & Medical',
        'Child Education',
        'Retirement',
        'Employee Benefits',
        'Free Financial Review',
        'Make a Claim',
        'Pay Premium',
        'Find an Advisor',
        'Panel Hospitals',
        'Find a Branch',
        'General Inquiry',
      ],
      fields: {
        name: 'Full Name',
        namePlaceholder: 'e.g. Ahmad Faizal bin Razak',
        email: 'Email Address',
        emailPlaceholder: 'ahmad@example.com.my',
        phone: 'Phone Number',
        phonePlaceholder: '+60 12-345 6789',
        topic: 'Topic / Preferred Plan',
        message: 'Your Message',
        messagePlaceholder: 'Share your protection goals, family size, or question...',
        submit: 'Send Inquiry',
        submitting: 'Sending...',
      },
      errors: {
        nameRequired: 'Please enter your full name.',
        emailInvalid: 'Please enter a valid email address.',
        phoneInvalid: 'Please enter a valid phone number.',
        messageRequired: 'Please provide a brief message.',
      },
      success: {
        title: 'Thank you! Your inquiry has been received.',
        description: 'An El Zahra Agency consultant will reach out within 1 business day.',
        refLabel: 'Reference No.',
        newMessage: 'Send Another Inquiry',
      },
    },
    search: {
      title: 'Search Plans & Services',
      placeholder: 'Type keywords (e.g. life, medical, claims, retirement)...',
      empty: 'No matching topics found. Try another keyword or contact us directly.',
      closeLabel: 'Close search',
    },
    footer: {
      columns: [
        {
          title: 'Protection',
          links: [
            { label: 'Life', href: '#penyelesaian' },
            { label: 'Health & Medical', href: '#penyelesaian' },
            { label: 'Critical Illness', href: '#hubungi' },
            { label: 'Personal Accident', href: '#hubungi' },
            { label: 'Takaful', href: '#hubungi' },
          ],
        },
        {
          title: 'Savings & Investment',
          links: [
            { label: 'Retirement', href: '#penyelesaian' },
            { label: 'Education', href: '#penyelesaian' },
            { label: 'Shariah-Compliant Funds', href: '#hubungi' },
            { label: 'Fund Performance', href: '#sorotan' },
          ],
        },
        {
          title: 'Customer Care',
          links: [
            { label: 'Make a Claim', href: '#hubungi' },
            { label: 'Pay Premium', href: '#hubungi' },
            { label: 'Download Forms', href: '#hubungi' },
            { label: 'FAQs', href: '#hubungi' },
            { label: 'Find a Branch', href: '#hubungi' },
          ],
        },
        {
          title: 'About Us',
          links: [
            { label: 'Corporate Profile', href: '#sorotan' },
            { label: 'Governance', href: '#sorotan' },
            { label: 'Investor Relations', href: '#berita' },
            { label: 'News & Media', href: '#berita' },
            { label: 'Careers', href: '#hubungi' },
          ],
        },
      ],
      legal: ['Privacy Notice', 'Terms of Use', 'Security Notice', 'Sitemap'],
      copyright:
        '© 2026 El Zahra Agency (197201000123). All rights reserved. Licensed under the Financial Services Act 2013 and regulated by Bank Negara Malaysia.',
    },
  },
};
