/**
 * Central configuration for the invitation.
 * Edit this single object to reuse the site for another family / event.
 */
import ganpatiHero from "@/assets/ganpati-hero.jpg";
import familyPhoto from "@/assets/family.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

export const invitation = {
  meta: {
    title: "गणपती बाप्पा मोरया — देशपांडे परिवाराचे सप्रेम आमंत्रण",
    description:
      "देशपांडे परिवारातर्फे श्री गणेश आगमन, स्थापना, महाप्रसाद, आरती व विसर्जन सोहळ्याचे सप्रेम आमंत्रण.",
  },
  intro: {
    mantra: "॥ श्री गणेशाय नमः ॥",
    tap: "आमंत्रण उघडा",
  },
  hero: {
    heading: "बाप्पांच्या आगमनाचा आनंद...",
    mantra: "॥ श्री गणेशाय नमः ॥",
    subline: "आमच्या घरी श्रींचे आगमन होत आहे",
    image: ganpatiHero,
  },
  event: {
    // ISO date-time of Ganpati arrival — drives the countdown
    arrivalISO: "2026-09-14T08:30:00+05:30",
    dateLabel: "सोमवार, १४ सप्टेंबर २०२६",
    timeLabel: "सकाळी ८:३० वाजता",
    familyName: "देशपांडे परिवार",
    message:
      "श्री गणरायाच्या आगमनाचा सोहळा आपल्या उपस्थितीने अधिक मंगलमय व्हावा, ही विनम्र इच्छा. आपण सहकुटुंब सहपरिवार अवश्य यावे.",
    puja: "प्राणप्रतिष्ठा व अथर्वशीर्ष पठण — सकाळी ९:०० | दैनंदिन आरती — सकाळी ७:३० व सायं. ७:३०",
  },
  host: {
    kicker: "सप्रेम आमंत्रण",
    name: "श्री. अनिकेत व सौ. मृणाल देशपांडे",
    note: "सहपरिवार",
    photo: familyPhoto,
  },
  timeline: [
    { title: "गणपती आगमन", time: "१४ सप्टें. · सकाळी ८:३०", note: "ढोल-ताशांच्या गजरात स्वागत" },
    { title: "स्थापना", time: "१४ सप्टें. · सकाळी ९:००", note: "प्राणप्रतिष्ठा व पूजन" },
    { title: "महाप्रसाद", time: "१५ सप्टें. · दुपारी १२:३०", note: "मोदक व पंचपक्वान्न भोजन" },
    { title: "आरती", time: "रोज · सायं. ७:३०", note: "सामूहिक आरती व भजन" },
    { title: "विसर्जन", time: "१८ सप्टें. · सायं. ५:००", note: "मिरवणूक — नदीघाट" },
  ],
  location: {
    venue: "देशपांडे निवास",
    address: "१२, शिवाई हाइट्स, कर्वे रोड, कोथरूड, पुणे ४११०३८",
    mapsUrl: "https://maps.google.com/?q=Kothrud,+Pune",
  },
  gallery: [
    { src: g1, alt: "घरातील सजवलेली गणपती मूर्ती" },
    { src: g2, alt: "आरतीचे ताट व दिवे" },
    { src: g3, alt: "उकडीचे मोदक" },
    { src: g4, alt: "विसर्जन मिरवणूक" },
    { src: g5, alt: "ढोल ताशा पथक" },
    { src: g6, alt: "सजवलेले प्रवेशद्वार" },
  ],
  music: {
    src: "https://cdn.pixabay.com/audio/2022/03/15/audio_c8c8a73467.mp3",
    label: "देवोत्सव संगीत",
  },
  outro: {
    title: "Ganpati Bappa Morya",
    subtitle: "मंगलमूर्ती मोरया",
    credit: "@deshpande.family",
  },
} as const;

export type Invitation = typeof invitation;