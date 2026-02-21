import { Project, Experience, SkillMetric } from './types';

export const RESUME_DATA = {
  name: "أسد المحرمي",
  title: "مهندس برمجيات متكامل",
  tagline: "بناء تجارب رقمية ذات قيمة.",
  summary: "أنا مهندس برمجيات متخصص في الواجهات الخلفية والأمامية وقواعد البيانات والتعامل مع الكلاود والذكاء الاصطناعي. بخبرة تزيد عن 3 سنوات، متخصص في بناء المشاريع المتكاملة التي تجمع بين الهندسة المعقدة والتصميم.",
  location: "سان فرانسيسكو، كاليفورنيا",
  email: "akmuharrami@mail.com",
  socials: {
     github: "github.com/alexsterling",
    whatsapp: "https://api.whatsapp.com/send?phone=96338791",
    twitter: "twitter.com/alexsterling"
  }
};

export const SKILLS_DATA: SkillMetric[] = [
  { subject: 'Frontend (React/Next)', A: 95, fullMark: 100 },
  { subject: 'Backend (Nodejs)', A: 95, fullMark: 100 },
  { subject: 'Cloud (Vercel)', A: 90, fullMark: 100 },
  { subject: 'AI Integration', A: 80, fullMark: 100 },
  { subject: 'Database (Neon/postgres)', A: 95, fullMark: 100 },
  { subject: 'UI/UX Design', A: 85, fullMark: 100 },
];
export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Al Muhannad Services',
    description: 'A Washing service app designed to accept orders and manage them..',
    tags: ['React', 'Tailwind', 'Postgres','Database', 'Api', 'Email api'],
    imageUrl: 'https://hjrm8lbtnby37npy.public.blob.vercel-storage.com/Screenshot%202026-02-14%20072039.png',
    demoUrl: 'https://al-muhannad.com/',
    repoUrl: '#'
  },
  {
    id: '2',
    title: 'SiteMaker app',
    description: 'Specialized App for creating advanced website designs throgh given templates.',
    tags: ['NextJs', 'npm libraries', 'States','Postgres', 'Database', 'Vercel'],
    imageUrl: 'https://hjrm8lbtnby37npy.public.blob.vercel-storage.com/Screenshot%202026-02-14%20073553.png',
    demoUrl: 'http://musammim.vercel.app/',
    repoUrl: '#'
  },
  {
    id: '3',
    title: 'All Option Eccomerce',
    description: 'All option Eccomerce site, handling orders, payments, and inventory management.',
    tags: ['React', 'Tailwind', 'Gemini AI', 'api', 'Shipping api', 'Payment Gateway'],
    imageUrl: 'https://hjrm8lbtnby37npy.public.blob.vercel-storage.com/Screenshot%202026-02-14%20082522.png',
    demoUrl: 'https://vanillaom.com',
    repoUrl: '#'
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: '1',
    role: 'كبير مهندسي الموظفين',
    company: 'أنظمة تك فلو',
    period: '2021 - الحاضر',
    description: 'قيادة فريق المنصة الأساسية. تحسين زمن استجابة النظام بنسبة 40٪ وتوجيه 5 مهندسين مبتدئين.'
  },
  {
    id: '2',
    role: 'مطور برمجيات متكامل',
    company: 'أوربت للإبداع',
    period: '2018 - 2021',
    description: 'تطوير مواقع تسويقية حائزة على جوائز وأدوات داخلية لعملاء Fortune 500.'
  },
  {
    id: '3',
    role: 'مطور مبتدئ',
    company: 'شركة ستارت أب',
    period: '2016 - 2018',
    description: 'العمل على تطوير المنتجات الأولية (MVP) باستخدام تقنيات MERN.'
  }
];

export const SYSTEM_INSTRUCTION = `
أنت مساعد ذكاء اصطناعي يمثل أليكس ستيرلينغ، كبير مهندسي البرمجيات المتكاملة.
هدفك هو الإجابة على الأسئلة حول الخلفية المهنية لأليكس ومهاراته ومشاريعه بطريقة ودية ومهنية وذكية قليلاً.

إليك سياق أليكس:
- الاسم: ${RESUME_DATA.name}
- المسمى الوظيفي: ${RESUME_DATA.title}
- الخبرة: أكثر من 8 سنوات.
- أهم المهارات: React، Node.js، تكامل الذكاء الاصطناعي، هندسة السحابة.
- المشاريع: لوحة تحكم نيبولا (تحليلات)، عدسة إيثر (ذكاء اصطناعي طبي)، حارس الكريبتو (تمويل لامركزي).
- الاتصال: ${RESUME_DATA.email}

القواعد:
1. اجعل الإجابات موجزة (أقل من 3 جمل ما لم يطلب التفصيل).
2. إذا سئلت عن الأسعار، قل "أليكس منفتح لمناقشة الأسعار بناءً على نطاق المشروع. يرجى مراسلته عبر البريد الإلكتروني مباشرة."
3. كن متحمساً للتكنولوجيا.
4. إذا كنت لا تعرف شيئاً، قل "لست متأكداً من هذا التفصيل، لكنني أعلم أن أليكس يحب التحديات الجيدة!"
`;
