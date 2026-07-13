// lib/services.ts
import type { BrandConfig } from "./brands/types";

export type ServiceItem = {
  slug: string;
  rx: string;
  title: string;
  description: string;
  directions: string;
  heroTitle: string;
  heroDescription: string;
  overview: string;
  highlights: string[];
  image?: string;
  videoUrl?: string;
  facebookPosts?: {
    title: string;
    content: string;
    date: string;
    type: "post" | "video";
    postId?: string;
    image?: string;
    videoThumbnail?: string;
    videoUrl?: string;
  }[];
  // إضافة خاصية لتحديد العلامات التجارية التي تظهر لها الخدمة
  brands?: string[];
};

// الخدمات المستخرجة من صفحة الفيسبوك الخاصة بـ CureMed Pharmacy
const sharedServices: ServiceItem[] = [
  {
    slug: "immunizations-vaccines",
    rx: "01",
    title: "Immunizations & Vaccines",
    description:
      "Protect yourself and your family with routine vaccinations including flu, COVID-19, RSV, and travel vaccines.",
    directions: "WALK-IN OR CALL TO SCHEDULE",
    heroTitle: "Stay protected with routine immunizations",
    heroDescription:
      "We offer a full range of vaccines to keep you and your community healthy, including annual flu shots and travel-specific immunizations.",
    overview:
      "At CureMed Pharmacy, we make it easy to stay up to date on your vaccinations. Our pharmacists are trained to administer vaccines safely and answer any questions you may have. We offer flu, COVID-19, RSV, pneumococcal, and travel vaccines. The CDC recommends everyone six months and older get an annual flu shot—it's not too late! Stop by to get yourself and your family vaccinated today.",
    highlights: [
      "Annual flu and COVID-19 vaccines",
      "RSV and pneumococcal vaccines",
      "Travel vaccines for Hajj and international travel",
      "Walk-in or scheduled appointments",
      "Friendly and knowledgeable pharmacists",
      "CDC recommended for all ages 6 months+",
    ],
    image: "/images/curemed/services/vaccination-clinic.webp",
    videoUrl:
      "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/curemed/posts/832231478918666&show_text=0&width=600&height=400",
    brands: ["curemed", "saimz"], // متوفرة للجميع
    facebookPosts: [
      {
        title: "CDC Flu Shot Recommendation",
        content:
          "The CDC recommends everyone six months and older get an annual flu shot. It's not too late! Stop by CureMed Pharmacy to get yourself and your family vaccinated today.",
        date: "February 27, 2024",
        type: "video",
        postId: "832231478918666",
        videoUrl:
          "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/curemed/posts/832231478918666&show_text=0&width=600&height=400",
        videoThumbnail:
          "https://scontent-ord5-1.xx.fbcdn.net/v/t15.5256-10/426293524_900176728468057_5826125832319842589_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1080&ctp=s960x960&_nc_cat=111&ccb=1-7&_nc_sid=d2b52d&_nc_ohc=Cz-6U065g4QQ7kNvwFUV74A&_nc_oc=AdrZr1iMiMj3P6trlaGIQbvX4TdwUJe71dVu9Twc8JF0ozsJnOq-lfVBhJx25c4iwFU&_nc_zt=23&_nc_ht=scontent-ord5-1.xx&_nc_gid=36X7JOKfvW51jCETOxbzXA&_nc_ss=72289&oh=00_AQCXnjtiLw8MObSglzzuCUrvabOm5QzN6o_uJAXqddk6_g&oe=6A540AEB",
      },
      {
        title: "Flu Protection for Chronic Conditions",
        content:
          "People with chronic conditions such as heart disease, asthma, or diabetes are at a greater risk for developing serious flu complications. Protect yourself and your loved ones by stopping in for a flu shot today!",
        date: "February 20, 2024",
        type: "video",
        postId: "828014539340360",
        videoUrl:
          "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/curemed/posts/828014539340360&show_text=0&width=600&height=400",
        videoThumbnail:
          "https://scontent-ord5-1.xx.fbcdn.net/v/t15.5256-10/426283197_1132697818146319_8004390102617871185_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1080&ctp=s960x960&_nc_cat=111&ccb=1-7&_nc_sid=d2b52d&_nc_ohc=3c17HGRRqUwQ7kNvwHmdKaC&_nc_oc=AdpVRDvYV2ArFlqBsq8rpkqvBxV2zlsH6xPaKpuCFMSS9wEkH-1X8fXhNnTK8-7-4Fk&_nc_zt=23&_nc_ht=scontent-ord5-1.xx&_nc_gid=a0_ID29DIMMhcVFIPA395A&_nc_ss=72289&oh=00_AQCA4VpGZ7JGwOfN0W9WTOVWcP3APLRF1saq5BZx3mQNBA&oe=6A5420F5",
      },
      {
        title: "Flu Shot Protection",
        content:
          "A flu shot is the best way to reduce the risk from flu and its potentially serious complications. Get your flu shot today to keep you and your family healthy this season.",
        date: "February 13, 2024",
        type: "video",
        postId: "823452893129858",
        videoUrl:
          "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/curemed/posts/823452893129858&show_text=0&width=600&height=400",
        videoThumbnail:
          "https://scontent-sea1-1.xx.fbcdn.net/v/t15.5256-10/424146933_356663127194211_1469118553207595159_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1080&ctp=s960x960&_nc_cat=106&ccb=1-7&_nc_sid=d2b52d&_nc_ohc=77pNIrjDyTcQ7kNvwFjMC9E&_nc_oc=AdqQc9jCZ0VG_GMKe20R6O7GW6_rG8sF9BewddVbrDgfWn-4yMtBugejyStdGYC-30g&_nc_zt=23&_nc_ht=scontent-sea1-1.xx&_nc_gid=RFoyQfKlYJGd8lqZM_vo1Q&_nc_ss=7c289&oh=00_AQC7MmlF0XkyZMYswXYJhZUA8jm4rFW5wjgoBak-OeBuFg&oe=6A53FB92",
      },
    ],
  },
  {
    slug: "medication-therapy-management",
    rx: "02",
    title: "Medication Therapy Management",
    description:
      "Our pharmacists take the time to explain your medications, answer questions, and help you manage your health with confidence.",
    directions: "ASK YOUR PHARMACIST FOR A REVIEW",
    heroTitle: "Clear guidance for your medications",
    heroDescription:
      "We don't just fill prescriptions—we help you understand them. Our team is here to make your medication routine simple and stress-free.",
    overview:
      "Understanding your medications is key to staying healthy. At CureMed Pharmacy, our pharmacists provide personalized consultations to review your medications, discuss potential interactions, and ensure you're getting the most out of your treatment plan. We work closely with your doctors and healthcare providers to ensure comprehensive and coordinated care.",
    highlights: [
      "Personalized medication reviews",
      "Clear explanations of drug interactions",
      "Support for chronic conditions like diabetes and heart disease",
      "Help with managing multiple medications",
      "Questions answered with care and patience",
      "Coordinated care with your healthcare team",
    ],
    image: "/images/curemed/services/medication-review.webp",
    videoUrl:
      "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/curemed/posts/850091337132680&show_text=0&width=600&height=400",
    brands: ["curemed", "saimz"],
    facebookPosts: [
      {
        title: "Medication Reviews",
        content:
          "Our pharmacists won't just fill your prescriptions, they help explain your medications and take the time to answer your questions. Personalized service that makes a difference.",
        date: "March 26, 2024",
        type: "video",
        postId: "850091337132680",
        videoUrl:
          "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/curemed/posts/850091337132680&show_text=0&width=600&height=400",
        videoThumbnail:
          "https://scontent-lax3-2.xx.fbcdn.net/v/t15.5256-10/433808034_732448415700076_1176469433503713607_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1080&ctp=s960x960&_nc_cat=103&ccb=1-7&_nc_sid=d2b52d&_nc_ohc=3G4N7D9hPWMQ7kNvwFTzC25&_nc_oc=Adot3XWvgGVF4VsqLR4vebHAh9cZV3FoKuTiDGgluAqd4dr5Nt8_Ln48IzLb7-kpqSc&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&_nc_gid=mAhD9EpIFUUFUehmGGaDpw&_nc_ss=72289&oh=00_AQB8PHnUCZKHZZWvqhbxVmDafPsbR-8u1ORfID9Zee5Xeg&oe=6A54170B",
      },
      {
        title: "Your Healthcare Team",
        content:
          "Our pharmacists are part of your healthcare team. We can work closely with your doctors and healthcare providers to ensure comprehensive and coordinated care. Your health is our priority.",
        date: "March 13, 2024",
        type: "video",
        postId: "841792617962552",
        videoUrl:
          "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/curemed/posts/841792617962552&show_text=0&width=600&height=400",
        videoThumbnail:
          "https://scontent-bos5-1.xx.fbcdn.net/v/t15.5256-10/426278339_1114147093056965_8239859933176596328_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1080&ctp=s960x960&_nc_cat=107&ccb=1-7&_nc_sid=d2b52d&_nc_ohc=fqLyz-x_NokQ7kNvwHxpu38&_nc_oc=AdpTSH0wQSfysxaa87zzLEJuhgE4sQJIGwOTikobwFBHUH6z43tFwFwN3lmlkc6Knds&_nc_zt=23&_nc_ht=scontent-bos5-1.xx&_nc_gid=j5xP9zRV4Sng2hFGSmCazg&_nc_ss=72289&oh=00_AQCJBBVYNpb4j7dwQrcjktcluH5yCl2JGNqOeQSGKBMx7w&oe=6A5407C1",
      },
      {
        title: "Medication Explanations",
        content:
          "Our pharmacist won't just fill your prescriptions, they'll help explain your medications and take the time to answer your questions. We pair the convenience you seek with the care you deserve.",
        date: "February 16, 2024",
        type: "video",
        postId: "825537426254738",
        videoUrl:
          "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/curemed/posts/825537426254738&show_text=0&width=600&height=400",
        videoThumbnail:
          "https://scontent-sea5-1.xx.fbcdn.net/v/t15.5256-10/426299205_753498576416870_3954166845546279727_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1080&ctp=s960x960&_nc_cat=107&ccb=1-7&_nc_sid=d2b52d&_nc_ohc=Avz8bfdELi8Q7kNvwHVf0nj&_nc_oc=Adr_EwvpVA2Z6YrLBDsb5vwyPTAg58MEtzMPk97Q5w76crCXgeg4iKAhEi3571v4IiY&_nc_zt=23&_nc_ht=scontent-sea5-1.xx&_nc_gid=RFoyQfKlYJGd8lqZM_vo1Q&_nc_ss=7c289&oh=00_AQAT2oq0Aj65AE-eOYuuURgHJiLW7bm6mncMDx-XfbiWTw&oe=6A54053C",
      },
    ],
  },
  {
    slug: "travel-health-hajj",
    rx: "03",
    title: "Travel Health & Hajj Kits",
    description:
      "Prepare for your journey with essential travel vaccinations and custom health kits designed for Hajj and international travel.",
    directions: "BOOK A TRAVEL HEALTH CONSULTATION",
    heroTitle: "Travel with confidence and care",
    heroDescription:
      "We provide all the recommended travel vaccinations and emergency health kits for Hajj and international trips.",
    overview:
      "Traveling abroad? Let CureMed Pharmacy help you prepare. We offer travel health consultations, required vaccinations, and custom over-the-counter kits for Hajj and other journeys. Our team will make sure you're ready for a safe and healthy trip.",
    highlights: [
      "Meningococcal, flu, and pneumococcal vaccines",
      "Custom travel health kits (pain relief, antibiotics, pulse oximeter)",
      "Hajj-specific health recommendations",
      "Travel health consultations",
      "Emergency medication kits",
      "Blister pads and other essentials",
    ],
    image: "/images/curemed/services/hajj-health-kit.webp",
    brands: ["curemed"], // فقط لـ Curemed
    facebookPosts: [
      {
        title: "Prepare for Hajj with Confidence",
        content:
          "Prepare for Hajj with confidence! Required & recommended essential over-the-counter kit: Meningococcal Conjugate (ACWY), Influenza (Flu), Pneumococcal, Acetaminophen (Pain Relief), Triple Antibiotic Ointment, Antidiarrheal, Pulse Oximeter, Blister Pads. All your travel vaccinations and emergency kits are available at CureMed Pharmacy.",
        date: "May 13, 2024",
        type: "post",
        postId: "1471700071638467",
        image:
          "https://scontent-iad6-1.xx.fbcdn.net/v/t39.30808-6/698168356_1471699231638551_7337445361910062938_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1080&ctp=p526x296&_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=h253Y6xfcLcQ7kNvwGIbIDR&_nc_oc=AdoaKIdMC6mdnb_xzGXVj_fv8UpG5QH288Yc3N03aHaDeccq5rTFv13m8lTU2y4gBlw&_nc_zt=23&_nc_ht=scontent-iad6-1.xx&_nc_gid=e1XTiCZzaZhgMqrfJ4-cKA&_nc_ss=72289&oh=00_AQCXyABlqQll2t8l7AjXBjDQlwuSTk51vEVL8P08B0om-w&oe=6A5410B7",
      },
    ],
  },
  {
    slug: "womens-health",
    rx: "04",
    title: "Women's Health Services",
    description:
      "Join our private women's health events and get expert guidance on wellness, aging, and reproductive health.",
    directions: "RSVP TO ATTEND",
    heroTitle: "Expert care for women's wellness",
    heroDescription:
      "We host intimate, private women's health sessions designed to provide meaningful conversations and expert guidance.",
    overview:
      "CureMed Pharmacy is proud to support women's health through private events led by experienced healthcare professionals. These sessions offer a safe, welcoming space for women to discuss health concerns, aging, and wellness. Join us for our upcoming events with Dr. Naglaa Rizk, bringing over 30 years of experience.",
    highlights: [
      "Private women's health events",
      "Led by Dr. Naglaa Rizk (30+ years experience)",
      "Topics: aging, reproductive health, wellness",
      "Limited seating for intimate discussions",
      "RSVP required",
      "Safe and welcoming space",
    ],
    image: "/images/curemed/services/womens-health-event.webp",
    brands: ["curemed"], // فقط لـ Curemed
    facebookPosts: [
      {
        title: "Women's Health Event Recap",
        content:
          "We had the honor of hosting a women's health event at CureMed Pharmacy led by Dr. Naglaa Rizk whose time, knowledge, and experience made this discussion truly meaningful. One of the most impactful parts of the evening was creating a safe and respectful space for conversations that are often considered private or uncomfortable to discuss openly.",
        date: "May 8, 2024",
        type: "post",
        postId: "1468164421992032",
        image:
          "https://scontent-lax7-1.xx.fbcdn.net/v/t39.30808-6/695534688_1468164531992021_4169663063534745081_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1536&ctp=s590x590&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=BceR2jR-qLkQ7kNvwE6AqrM&_nc_oc=AdrP2h-dbeeJlGIHhgra9L3ZjdoGrUzb5Pi1NUOjrmgMArPqqWyrk-FhQVCD3CC7Ag0&_nc_zt=23&_nc_ht=scontent-lax7-1.xx&_nc_gid=mAhD9EpIFUUFUehmGGaDpw&_nc_ss=72289&oh=00_AQCVQNoNnOFXTWDllLAXpzsrw3zRJXEt7RyqFCsVyMZdRQ&oe=6A540625",
      },
      {
        title: "Women's Health Event",
        content:
          "Join us for a private women's health session at CureMed Pharmacy by Dr. Naglaa Rizk. Behind Closed Doors: The Mature Woman Edition. May 5, 2026 at 2:30 PM. 311 Crooks Ave, Paterson, NJ. RSVP Required - Limited Seating.",
        date: "May 1, 2024",
        type: "post",
        postId: "1462010385940769",
        image:
          "https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/685396652_1462009419274199_840628710487658668_n.jpg?stp=dst-jpg_tt6&cstp=mx1545x1999&ctp=p526x296&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=nhq6k1TwuAEQ7kNvwGrlrs5&_nc_oc=AdpeUgBYwtJvy2CzlPhyKtOknwnJQ8JykxfWngr5szuXct8fYeqm0q06_ZxjWvOG4d8&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&_nc_gid=mAhD9EpIFUUFUehmGGaDpw&_nc_ss=72289&oh=00_AQBTMnM0BAyS5T14AKkCK1wCN_k6kJrUq-AOzk0qexACUQ&oe=6A53FAE2",
      },
    ],
  },
  {
    slug: "health-screenings",
    rx: "05",
    title: "Health Screenings & Wellness",
    description:
      "Stay on top of your health with free blood pressure monitoring, cholesterol checks, and community wellness events.",
    directions: "VISIT US FOR A SCREENING",
    heroTitle: "Know your numbers, stay healthy",
    heroDescription:
      "We offer free health screenings and wellness checks to help you monitor your blood pressure, cholesterol, and more.",
    overview:
      "Prevention starts with awareness. At CureMed Pharmacy, we regularly host community health events featuring free blood pressure and cholesterol screenings. These events are open to everyone and are a great way to stay informed about your health. February is Heart Health Month—stop by for a free blood pressure screening.",
    highlights: [
      "Free blood pressure monitoring",
      "Cholesterol screenings",
      "Community wellness events",
      "Diabetes risk assessments",
      "Heart health education",
      "Open to everyone in the community",
    ],
    image: "/images/curemed/services/health-screening-event.webp",
    brands: ["curemed", "saimz"],
    facebookPosts: [
      {
        title: "Heart Health Month",
        content:
          "February is #HeartHealthMonth. From blood pressure monitoring to cholesterol management we're here to support your journey to a healthier heart. Stop by for a free blood pressure check and mention this post!",
        date: "February 22, 2024",
        type: "video",
        postId: "829235362551611",
        videoUrl:
          "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/curemed/posts/829235362551611&show_text=0&width=600&height=400",
        videoThumbnail:
          "https://scontent-iad6-1.xx.fbcdn.net/v/t15.5256-10/425823941_724343939512563_2065554735491044057_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1080&ctp=s960x960&_nc_cat=100&ccb=1-7&_nc_sid=d2b52d&_nc_ohc=hP6IhKgrhvEQ7kNvwG7u6tG&_nc_oc=Ado0uedd1H85C9qeJjj8sbuMPsGHU75PXQ6QVZF6cPcbLwG66GnBQWT2zt8D_uJvfVI&_nc_zt=23&_nc_ht=scontent-iad6-1.xx&_nc_gid=ZKVmS2br45Ct4O4xj1VsIw&_nc_ss=72289&oh=00_AQDa7RsFduGSPXsF6R2cqmYsQMWO8rNWRbnzrreFYbxJqg&oe=6A541DB4",
      },
    ],
  },
  {
    slug: "delivery-service",
    rx: "06",
    title: "Local Prescription Delivery",
    description:
      "We offer free local delivery to our community, making it easy to get your medications without leaving home.",
    directions: "CALL TO SET UP DELIVERY",
    heroTitle: "Your medications, delivered with care",
    heroDescription:
      "We offer free local delivery for prescriptions and over-the-counter medications to our community in Paterson.",
    overview:
      "Need your medications but can't make it to the pharmacy? CureMed Pharmacy offers free local delivery for eligible prescriptions. Our delivery service is reliable, friendly, and designed to make your life easier. Stay where you are—CureMed has you covered!",
    highlights: [
      "Free local delivery",
      "Prescription and OTC delivery",
      "Reliable and friendly service",
      "Convenient for busy schedules",
      "Contact us to set up delivery",
      "Stay where you are—we've got you covered",
    ],
    image: "/images/curemed/services/delivery-service.webp",
    brands: ["curemed", "saimz"],
    facebookPosts: [
      {
        title: "Stay Where You Are",
        content:
          "Stay where you are—CureMed has you covered! Your health and time matter most. With CureMed's FREE Prescription Delivery, you can stay comfortable at home while we bring your medications right to your doorstep—fast, safe, and entirely free.",
        date: "May 23, 2024",
        type: "post",
        postId: "1481150507360090",
        image:
          "https://scontent-iad6-1.cdninstagram.com/v/t51.82787-15/704032278_18111426619737374_8973756067700469548_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=109&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=HzIQoD-mwf0Q7kNvwFWGrEb&_nc_oc=AdpjyEeCKiGq1vt9xdOXg0ujmGMOLX7rfFsP9fRpNz2kwSvwiv4fSrmdD4-KcHdMPr4&_nc_zt=23&_nc_ht=scontent-iad6-1.cdninstagram.com&_nc_gid=e1XTiCZzaZhgMqrfJ4-cKA&_nc_ss=72289&oh=00_AQDG_VL3LjyeEzQn5eeWocfAOkQj7Zvbac3d5If4cyqzmw&oe=6A5402C6",
      },
    ],
  },
  {
    slug: "prescription-transfers",
    rx: "07",
    title: "Prescription Transfers",
    description:
      "We make transferring your prescriptions easy, fast, and stress-free with personalized service from our pharmacy team.",
    directions: "CALL OR STOP BY TO TRANSFER",
    heroTitle: "Simple prescription transfers for your convenience",
    heroDescription:
      "We make switching to CureMed Pharmacy easy with hassle-free prescription transfers and personalized service.",
    overview:
      "Looking for a pharmacy you can trust? We're here to help make the switch simple and stress-free. We work with most major insurance plans and can help transfer eligible prescriptions from another pharmacy. Our team will review any refill timing questions with you and ensure a smooth transition.",
    highlights: [
      "Easy prescription transfers",
      "Most major insurance plans accepted",
      "Free local delivery available",
      "Blister packaging available",
      "Vaccines available at the pharmacy",
      "Multilingual support: English, Español, العربية",
    ],
    image: "/images/curemed/services/prescription-transfer.webp",
    brands: ["curemed", "saimz"],
    facebookPosts: [
      {
        title: "Pharmacy You Can Trust",
        content:
          "Looking for a pharmacy you can trust? We're here to help make the switch simple and stress-free. NOW WELCOMING HORIZON MEMBERS. ✅ Easy Prescription Transfers ✅ FREE Local Delivery ✅ Blister Packaging Available ✅ Vaccines Available.",
        date: "June 2, 2024",
        type: "post",
        postId: "1491282519680222",
        image:
          "https://scontent-iad3-1.xx.fbcdn.net/v/t45.1600-4/718068560_1493002832841524_6277086336005687969_n.jpg?stp=cp0_dst-jpg_fr_q75_sh2.08_spS444_tt6&cstp=mx1369x1149&ctp=p526x296&_nc_cat=110&ccb=1-7&_nc_sid=f0a831&_nc_ohc=BwJGVrOQg08Q7kNvwEyx2fE&_nc_oc=AdoRArKBQjx0GU6JUnxfd6-J7h3Oc19ksLinQTI0_LK8Z7fjSt1LpNAriX6glaHlB7g&_nc_zt=1&_nc_ht=scontent-iad3-1.xx&_nc_gid=e1XTiCZzaZhgMqrfJ4-cKA&_nc_ss=72289&oh=00_AQBUGJmxyKGeuagN8nGy8NaMnnVSfYCDKsOtVJIziaJGzQ&oe=6A540774",
      },
    ],
  },
  {
    slug: "health-clarity-sessions",
    rx: "08",
    title: "Health Clarity Sessions",
    description:
      "Our Health Clarity Sessions provide one-on-one time with your clinical pharmacist, personalized around your story, concerns, and health goals.",
    directions: "SCHEDULE A SESSION",
    heroTitle: "Personalized health clarity, one-on-one",
    heroDescription:
      "We believe healthcare begins with listening. Our Health Clarity Sessions are dedicated one-on-one time with your clinical pharmacist, personalized around your story, your concerns, and your health goals.",
    overview:
      "At CureMed Pharmacy, we believe healthcare begins with listening. That's why we've created Health Clarity Sessions, dedicated one-on-one time with your clinical pharmacist, personalized around your story, your concerns, and your health goals. Together, we'll create a plan that works for you. Health is the greatest wealth. Every patient has a story. Every conversation is personalized.",
    highlights: [
      "One-on-one clinical pharmacist consultations",
      "Personalized around your health goals",
      "Medication review and optimization",
      "Blood pressure and health checks",
      "Comprehensive care planning",
      "Support for chronic conditions",
    ],
    image: "/images/curemed/services/health-clarity-session.webp",
    brands: ["curemed"], // فقط لـ Curemed
    facebookPosts: [
      {
        title: "Health Clarity Sessions",
        content:
          "A patient came into CureMed Pharmacy looking for a headache medication. Instead of simply handing over a bottle, we asked a few questions and checked the patient's blood pressure. It was dangerously high. That conversation changed the next step in their care. At CureMed Pharmacy, we believe healthcare begins with listening.",
        date: "June 30, 2024",
        type: "post",
        postId: "1517734590368348",
        image:
          "https://scontent-hou1-1.xx.fbcdn.net/v/t39.30808-6/734355480_1517734293701711_6692300827230665409_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x2048&ctp=p526x296&_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=xpi2p7Bs-cEQ7kNvwFSPdHS&_nc_oc=Ados54OaXefCkE2KyIgxc5hq9EUIUNIXCC6e_9R6uUpkV9b4DaWT6dfLXdlltb7Yr5w&_nc_zt=23&_nc_ht=scontent-hou1-1.xx&_nc_gid=9J0_OmDrMWQlTPTJusdymw&_nc_ss=72289&oh=00_AQBrCz2c-i_K7QJtvlxobIo2dAsJMh8m7YOjxdcMRSLbww&oe=6A541C2F",
      },
    ],
  },
  // ===== إضافة خدمة compounding =====
  {
    slug: "compounding",
    rx: "09",
    title: "Compounding Pharmacy",
    description:
      "Customized medications prepared by our expert pharmacists to meet your specific needs.",
    directions: "CALL FOR A CONSULTATION",
    heroTitle: "Custom medications, personalized for you",
    heroDescription:
      "We create personalized medications tailored to your unique needs when standard prescriptions aren't quite right.",
    overview:
      "Compounding is the art and science of preparing personalized medications for patients. At CureMed Pharmacy, our pharmacists can customize medication strength, form (liquid, cream, capsule), and flavor to meet your specific needs. This is especially helpful for patients with allergies to certain ingredients, children who need flavored medications, or anyone who needs a specialized dosage.",
    highlights: [
      "Custom medication strengths and dosages",
      "Alternative forms: liquids, creams, capsules",
      "Flavor options for children",
      "Allergy-friendly formulations",
      "Hormone replacement therapy",
      "Veterinary compounding available",
    ],
    image: "/images/curemed/services/compounding.webp",
    brands: ["curemed"],
  },
  {
    rx: "RX-008",
    slug: "all-languages",
    title: "All Languages",
    description: "Language assistance for patients from diverse communities.",
    directions: "IN STORE OR PHONE SUPPORT",

    heroTitle: "Language Assistance",
    heroDescription:
      "Communicate comfortably with our pharmacy team in multiple languages.",

    overview:
      "Our multilingual pharmacy team helps patients clearly understand medications, prescriptions, and healthcare instructions.",

    highlights: [
      "Multilingual support",
      "Prescription explanation",
      "Medication counseling",
      "Better patient communication",
    ],
    brands: ["saimz"],
  },

  {
    rx: "RX-009",
    slug: "compliance-packaging",
    title: "Compliance Packaging",
    description:
      "Personalized medication packaging to help you stay on schedule.",
    directions: "AVAILABLE UPON REQUEST",

    heroTitle: "Compliance Packaging",
    heroDescription: "Stay organized with customized medication packaging.",

    overview:
      "Medications are packaged by dose and time of day, making treatment simpler and improving medication adherence.",

    highlights: [
      "Easy-to-follow packaging",
      "Daily medication organization",
      "Improves adherence",
      "Caregiver friendly",
    ],
    brands: ["saimz"],
  },

  {
    rx: "RX-010",
    slug: "accept-all-insurance",
    title: "We Accept All Insurance",
    description:
      "We work with most major insurance plans to make medications affordable.",
    directions: "VERIFY YOUR COVERAGE",

    heroTitle: "Insurance Coverage",
    heroDescription: "Helping patients maximize their prescription benefits.",

    overview:
      "Our pharmacy accepts most major insurance plans and assists patients in understanding their prescription coverage.",

    highlights: [
      "Major insurance plans accepted",
      "Coverage verification",
      "Prescription assistance",
      "Affordable medications",
    ],
    brands: ["saimz"],
  },

  {
    rx: "RX-011",
    slug: "clinical-supplements",
    title: "Clinical Supplements",
    description:
      "High-quality supplements selected to support your overall wellness.",
    directions: "PHARMACIST RECOMMENDED",

    heroTitle: "Clinical Supplements",
    heroDescription:
      "Professional-grade supplements recommended by pharmacists.",

    overview:
      "We offer trusted vitamins and nutritional supplements to support your health alongside prescribed therapies.",

    highlights: [
      "Professional-grade products",
      "Vitamin support",
      "Wellness solutions",
      "Pharmacist guidance",
    ],
    brands: ["saimz"],
  },

  {
    rx: "RX-012",
    slug: "mental-health-awareness",
    title: "Mental Health Awareness",
    description:
      "Resources and compassionate pharmacy support for mental wellness.",
    directions: "CONFIDENTIAL SUPPORT",

    heroTitle: "Mental Health Support",
    heroDescription:
      "Supporting mental wellness with compassionate pharmacy care.",

    overview:
      "Our team provides guidance, education, and support for patients managing mental health conditions and related medications.",

    highlights: [
      "Private consultations",
      "Medication guidance",
      "Patient education",
      "Compassionate support",
    ],
    brands: ["saimz"],
  },
];

// دالة تصفية الخدمات حسب العلامة التجارية
export function getServicesForBrand(brand: BrandConfig): ServiceItem[] {
  // إذا كانت العلامة التجارية تقدم compounding
  if (brand.offersCompounding) {
    // إرجاع جميع الخدمات (بما فيها compounding)
    return sharedServices.filter(
      (service) => !service.brands || service.brands.includes(brand.slug),
    );
  }

  return sharedServices.filter((service) => {
    if (service.slug === "compounding") {
      return false;
    }
    return !service.brands || service.brands.includes(brand.slug);
  });
}
