import { CardFields } from "@project/types";

type CardTemplate = Omit<
  CardFields,
  | "handle"
  | "_id"
  | "createdAt"
  | "updatedAt"
  | "city"
  | "owner"
  | "jobTitle"
  | "primaryColor"
  | "secondaryColor"
  | "textColor"
  | "background"
  | "cardTitle"
>;

export const cardTemplate = (title: string): CardTemplate => ({
  gallery: {
    title: "גלריה",
    images: [
      { src: "https://source.unsplash.com/featured/?nature" },
      { src: "https://source.unsplash.com/random" },
      { src: "https://source.unsplash.com/featured/" },
      { src: "https://source.unsplash.com/featured/?urban" },
      { src: "https://source.unsplash.com/featured/?animal" },
    ],
    isShown: true,
  },
  mainText: {
    title,
    text: "כאן תספר בקצרה אודות העסק שלך",
  },
  buttons: {
    isShown: true,
    buttons: [
      {
        type: "call",
        text: "כפתורים",
        number: "0521231231",
      },
      {
        type: "whatsapp",
        text: "לדוגמא",
        number: "0521231231",
        message: "בדיקה של הודעה",
      },
      {
        type: "link",
        text: "דף הפייסבוק",
        url: "https://www.facebook.com/",
      },
      {
        type: "link",
        text: "אתר",
        url: "https://www.google.co.il/?hl=iw",
      },
      {
        type: "link",
        text: "אתר",
        url: "https://www.instagram.com/",
      },
      {
        type: "navigation",
        text: "נווט אלינו",
        lat: 32.050968,
        lon: 34.031491,
      },
    ],
  },
  vcf: { url: "#", text: "שמור אותנו באנשי הקשר", isShown: true },
  about: {
    title: "קצת עלינו",
    text: "כאן תרחיב יותר על העסק ומה מייחד אתכם",
    isShown: true,
  },
  expansionPanels: {
    panels: [
      { title: "פאנל 1", text: "מקום לטקסט חופשי" },
      { title: "פאנל 2", text: "מקום לטקסט חופשי" },
    ],
    isShown: true,
  },
  testimonials: {
    isShown: true,
    title: "לקוחות ממליצים",
    data: [
      {
        author: "ישראלה",
        text: "כאן תובע חוות דעת של ישראלה",
      },
      {
        author: "ישראל",
        text: "כאן תובע חוות הדעת של ישראל אודות העסק",
      },
      {
        author: "פלוני אלמוני",
        text: "כאן תוכלו לראות טקסט המספר את חווית השימוש בעסק",
      },
    ],
  },
  actionText: {
    isShown: true,
    text: "לפרטים נוספים לחצו",
    url: "https://www.google.co.il/?hl=iw",
  },
  form: { title: "צור קשר", isShown: true },
});
