// ============================================================
//  CONFIGURAÇÕES — edite aqui sem precisar mexer nos componentes
// ============================================================

/** Link do produto na Hotmart */
export const HOTMART_URL =
  'https://hotmart.com/product/matheus-ferce-consultoria';

/** Número WhatsApp (55 + DDD + número, sem espaços ou hífen) */
const WHATSAPP_NUMBER  = '553291076197';
const WHATSAPP_MESSAGE = encodeURIComponent(
  'Olá Mateus! Vi seu site e tenho interesse na consultoria. Pode me dar mais detalhes?'
);
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

/** Redes sociais */
export const INSTAGRAM_URL = 'https://instagram.com/matheusferce';
export const YOUTUBE_URL   = 'https://youtube.com/@matheusferce';
export const EMAIL         = 'contato@matheusferce.com.br';

// ============================================================
//  GALERIA — adicione ou remova objetos neste array
// ============================================================
export const GALLERY_IMAGES = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
    alt: 'Treino funcional intenso',
    label: 'Funcional',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80',
    alt: 'Musculação e hipertrofia',
    label: 'Hipertrofia',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
    alt: 'Cardio e emagrecimento',
    label: 'Emagrecimento',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&q=80',
    alt: 'Consultoria personalizada',
    label: 'Consultoria',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80',
    alt: 'Treino de força',
    label: 'Força',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1546483875-ad9014c88eba?w=800&q=80',
    alt: 'Performance avançada',
    label: 'Performance',
  },
];

// ============================================================
//  DEPOIMENTOS
// ============================================================
export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Rodrigo Almeida',
    age: 29,
    result: 'Perdeu 18 kg em 4 meses',
    text: 'O método do Mateus é diferente de tudo que já tentei. Não é só treino, é uma mudança completa de estilo de vida. Em 4 meses perdi 18 kg e me sinto uma outra pessoa.',
    stars: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
  },
  {
    id: 2,
    name: 'Fernanda Costa',
    age: 34,
    result: 'Ganhou massa e definição',
    text: 'Sempre quis ter um corpo definido mas nunca soube por onde começar. Com a consultoria online do Mateus consegui resultados em 3 meses que não alcancei em 2 anos de academia.',
    stars: 5,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80',
  },
  {
    id: 3,
    name: 'Lucas Mendes',
    age: 41,
    result: 'Eliminou 12 kg e ganhou saúde',
    text: 'Aos 41 anos achei que meu corpo não responderia mais. O Mateus me provou o contrário. Planilha personalizada, acompanhamento constante e resultados reais. Recomendo demais!',
    stars: 5,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
  },
  {
    id: 4,
    name: 'Beatriz Santos',
    age: 26,
    result: 'Dobrou sua performance',
    text: 'A consultoria superou todas as minhas expectativas. O Mateus é extremamente dedicado e o suporte é incrível. Em 2 meses senti uma diferença absurda na minha performance.',
    stars: 5,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
  },
];
