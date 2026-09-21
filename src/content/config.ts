import { z, defineCollection } from 'astro:content';

const notlar = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.enum(["Emsile", "Binâ", "Maksut", "İzzi", "Avâmil", "İzhar", "Kâfiye", "Bağımsız"]),
    publishDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
  }),
});

const kelimeler = defineCollection({
  type: 'data',
  schema: z.object({
    word: z.string(),
    meaning: z.string(),
    firstLetter: z.string(),
    exampleSentence: z.string().optional(),
    exampleTranslation: z.string().optional(),
    publishDate: z.coerce.date(),
  }),
});

const ornekCumleler = defineCollection({
  type: 'data',
  schema: z.object({
    arabicSentence: z.string(),
    turkishTranslation: z.string(),
    irapAnalysis: z.string().optional(),
    sourceNote: z.string().optional(),
    publishDate: z.coerce.date(),
  }),
});

const metinler = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    level: z.enum(["Temel", "Başlangıç", "Orta", "İleri", "Uzman"]),
    arabicText: z.string(),
    turkishTranslation: z.string(),
    notes: z.string().optional(),
    publishDate: z.coerce.date(),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    postType: z.enum(["Tavsiye", "Uyarı", "Süreç Notu", "Genel"]),
    publishDate: z.coerce.date(),
  }),
});

const araclar = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    type: z.enum(["PDF/Doküman", "İnteraktif Araç", "Dış Bağlantı"]),
    description: z.string(),
    linkOrFile: z.string(),
    publishDate: z.coerce.date(),
  }),
});

export const collections = {
  notlar,
  kelimeler,
  "ornek-cumleler": ornekCumleler,
  metinler,
  blog,
  araclar,
};