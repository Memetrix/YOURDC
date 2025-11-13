const { createClient } = require('@sanity/client');
const fs = require('fs');
const path = require('path');

const client = createClient({
  projectId: '6uy69xt8',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'skDN7PU7AlXcGUveIPPSxiT0M9sJIlb4LoBe7vFjyVtLO4TRTz8APAedoB3qZ8hnPkW1hGDPZJaNuxOoSZ3oThs0Bv6Dca5sDa0pNKmXKKaN5ikV8Ww2w2I23w8fhbaZquCkY7RmUSp0Rh1Dv3vMdjfoCEEIXIRfkUlxhsy8MSnysU93sl5Q',
  useCdn: false,
});

async function uploadImage(imagePath) {
  const imageBuffer = fs.readFileSync(imagePath);
  const asset = await client.assets.upload('image', imageBuffer, {
    filename: path.basename(imagePath),
  });
  return asset;
}

async function populateData() {
  console.log('🚀 Starting Sanity data population...');

  // 1. Upload telecom operator logos and create documents
  console.log('\n📡 Creating telecom operators...');
  const operators = [
    { name: 'МТС', file: 'mts.webp', order: 1 },
    { name: 'МегаФон', file: 'megafon.webp', order: 2 },
    { name: 'Билайн', file: 'beeline.webp', order: 3 },
    { name: 'Теле2', file: 'tele2.webp', order: 4 },
    { name: 'Ростелеком', file: 'rostelecom.webp', order: 5 },
    { name: 'ТТК', file: 'ttk.webp', order: 6 },
    { name: 'ЭР-Телеком', file: 'ertelecom.webp', order: 7 },
    { name: 'Максима Телеком', file: 'maximatelecom.webp', order: 8 },
  ];

  for (const op of operators) {
    try {
      const logoPath = path.join(__dirname, '..', 'public', 'logos', op.file);
      console.log(`  Uploading logo: ${op.name}...`);
      const logoAsset = await uploadImage(logoPath);

      const doc = await client.create({
        _type: 'telecomOperator',
        name: op.name,
        logo: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: logoAsset._id,
          },
        },
        order: op.order,
      });
      console.log(`  ✅ Created: ${op.name}`);
    } catch (error) {
      console.error(`  ❌ Error creating ${op.name}:`, error.message);
    }
  }

  // 2. Create services
  console.log('\n📋 Creating services...');
  const services = [
    {
      _type: 'service',
      id: 'colocation',
      title: 'Colocation',
      shortDescription: 'Размещение вашего оборудования в нашем дата-центре с гарантией надежности и безопасности',
      fullDescription: 'Профессиональное размещение серверного оборудования в современном дата-центре. Мы предоставляем стойко-места любого формата, обеспечиваем бесперебойное питание, охлаждение и физическую безопасность вашего оборудования.',
      features: [
        'Tier III сертифицированный дата-центр',
        'SLA 99.982% времени работы',
        'Круглосуточная физическая охрана',
        'Системы пожаротушения и климат-контроля',
        'Мониторинг оборудования 24/7',
        'Удаленный доступ к серверам',
      ],
      pricingStarter: {
        name: 'Базовый',
        price: 'от 15 000 ₽/мес',
        description: '1U стойка, до 500W питания, 1 Гбит/с',
      },
      pricingProfessional: {
        name: 'Профессиональный',
        price: 'от 35 000 ₽/мес',
        description: '4U стойка, до 2 кВт питания, 10 Гбит/с',
      },
      pricingEnterprise: {
        name: 'Корпоративный',
        price: 'от 100 000 ₽/мес',
        description: 'Целая стойка, неограниченное питание, 100 Гбит/с',
      },
    },
    {
      _type: 'service',
      id: 'cloud',
      title: 'Cloud Services',
      shortDescription: 'Облачная инфраструктура для вашего бизнеса с гибким масштабированием',
      fullDescription: 'Современные облачные решения на базе передовых технологий виртуализации. Разворачивайте виртуальные серверы за минуты, масштабируйте ресурсы по требованию и платите только за используемые мощности.',
      features: [
        'Виртуальные серверы на базе VMware',
        'Автоматическое масштабирование ресурсов',
        'Резервное копирование и disaster recovery',
        'Защита от DDoS атак',
        'API для автоматизации',
        'Техподдержка 24/7',
      ],
      pricingStarter: {
        name: 'Базовый',
        price: 'от 500 ₽/мес',
        description: '1 vCPU, 2 GB RAM, 20 GB SSD',
      },
      pricingProfessional: {
        name: 'Профессиональный',
        price: 'от 2 500 ₽/мес',
        description: '4 vCPU, 8 GB RAM, 100 GB SSD',
      },
      pricingEnterprise: {
        name: 'Корпоративный',
        price: 'от 15 000 ₽/мес',
        description: '16 vCPU, 64 GB RAM, 500 GB SSD',
      },
    },
    {
      _type: 'service',
      id: 'additional',
      title: 'Дополнительные услуги',
      shortDescription: 'Комплексные решения для обеспечения бесперебойной работы вашей инфраструктуры',
      fullDescription: 'Профессиональное сопровождение IT-инфраструктуры, консалтинг, аудит безопасности и другие дополнительные услуги для эффективной работы вашего бизнеса.',
      features: [
        'Администрирование серверов',
        'Мониторинг инфраструктуры',
        'Аудит безопасности',
        'Настройка сетевого оборудования',
        'Миграция данных',
        'Консалтинг по IT-инфраструктуре',
      ],
      pricingStarter: {
        name: 'Базовый',
        price: 'от 10 000 ₽/мес',
        description: 'Мониторинг и базовая поддержка',
      },
      pricingProfessional: {
        name: 'Профессиональный',
        price: 'от 30 000 ₽/мес',
        description: 'Администрирование + аудит',
      },
      pricingEnterprise: {
        name: 'Корпоративный',
        price: 'договорная',
        description: 'Полный комплекс услуг',
      },
    },
  ];

  for (const service of services) {
    try {
      await client.create(service);
      console.log(`  ✅ Created service: ${service.title}`);
    } catch (error) {
      console.error(`  ❌ Error creating ${service.title}:`, error.message);
    }
  }

  // 3. Create advantages
  console.log('\n⭐ Creating advantages...');
  const advantages = [
    {
      _type: 'advantage',
      name: 'Надежность 99.982%',
      description: 'Tier III сертифицированный дата-центр с резервированием всех критических систем',
      icon: '<svg>...</svg>',
    },
    {
      _type: 'advantage',
      name: 'Техподдержка 24/7',
      description: 'Квалифицированные специалисты всегда готовы помочь вам в любое время суток',
      icon: '<svg>...</svg>',
    },
    {
      _type: 'advantage',
      name: 'Физическая безопасность',
      description: 'Круглосуточная охрана, системы контроля доступа и видеонаблюдение',
      icon: '<svg>...</svg>',
    },
    {
      _type: 'advantage',
      name: 'Гибкое масштабирование',
      description: 'Увеличивайте или уменьшайте ресурсы в зависимости от потребностей бизнеса',
      icon: '<svg>...</svg>',
    },
  ];

  for (const adv of advantages) {
    try {
      await client.create(adv);
      console.log(`  ✅ Created advantage: ${adv.name}`);
    } catch (error) {
      console.error(`  ❌ Error creating ${adv.name}:`, error.message);
    }
  }

  // 4. Create FAQ
  console.log('\n❓ Creating FAQ...');
  const faqs = [
    {
      _type: 'faq',
      question: 'Какой уровень надежности обеспечивает ваш дата-центр?',
      answer: 'Наш дата-центр сертифицирован по стандарту Tier III, что гарантирует 99.982% времени безотказной работы. Это означает не более 1.6 часов простоя в год.',
      order: 1,
    },
    {
      _type: 'faq',
      question: 'Как быстро можно разместить оборудование?',
      answer: 'После подписания договора мы готовы разместить ваше оборудование в течение 1-2 рабочих дней. Для облачных сервисов доступ предоставляется в течение нескольких минут.',
      order: 2,
    },
    {
      _type: 'faq',
      question: 'Предоставляете ли вы защиту от DDoS атак?',
      answer: 'Да, мы предоставляем защиту от DDoS атак на уровне сети. Базовая защита включена во все тарифы, расширенная защита доступна как дополнительная услуга.',
      order: 3,
    },
    {
      _type: 'faq',
      question: 'Можно ли получить удаленный доступ к оборудованию?',
      answer: 'Да, мы предоставляем удаленный доступ через защищенное VPN соединение. Также доступен KVM-over-IP для управления серверами на уровне BIOS.',
      order: 4,
    },
  ];

  for (const faq of faqs) {
    try {
      await client.create(faq);
      console.log(`  ✅ Created FAQ: ${faq.question.substring(0, 50)}...`);
    } catch (error) {
      console.error(`  ❌ Error creating FAQ:`, error.message);
    }
  }

  // 5. Create site settings
  console.log('\n⚙️  Creating site settings...');
  try {
    await client.create({
      _type: 'siteSettings',
      datacenterStats: {
        sla: '99.982%',
        totalPower: '2.5 МВт',
        racks: 500,
        support: '24/7/365',
        machineRoomArea: '2000 м²',
        tierLevel: 'Tier III',
        powerPerRack: 'до 10 кВт',
        fuelReserve: '72 часа',
        autonomousOperation: '96 часов',
      },
      contactInfo: {
        phone: '+7 (495) 123-45-67',
        phoneTollfree: '8 (800) 555-35-35',
        email: 'info@yourdc.ru',
        supportEmail: 'support@yourdc.ru',
        salesEmail: 'sales@yourdc.ru',
        address: {
          city: 'Москва',
          street: 'ул. Серверная',
          building: 'д. 42',
          office: 'офис 100',
          postalCode: '123456',
        },
        workingHours: {
          office: 'Пн-Пт 9:00-18:00',
          support: '24/7/365',
        },
        coordinates: {
          lat: 55.751244,
          lon: 37.618423,
        },
      },
    });
    console.log('  ✅ Created site settings');
  } catch (error) {
    console.error('  ❌ Error creating site settings:', error.message);
  }

  // 6. Create news
  console.log('\n📰 Creating news...');
  const news = [
    {
      _type: 'news',
      title: 'Запуск нового дата-центра в Москве',
      date: '2025-01-15',
      description: 'Мы рады сообщить об открытии нового дата-центра в Москве с увеличенной мощностью и современным оборудованием.',
    },
    {
      _type: 'news',
      title: 'Сертификация Tier III получена',
      date: '2025-01-10',
      description: 'Наш дата-центр успешно прошел аудит и получил сертификацию Tier III от Uptime Institute.',
    },
  ];

  for (const item of news) {
    try {
      await client.create(item);
      console.log(`  ✅ Created news: ${item.title}`);
    } catch (error) {
      console.error(`  ❌ Error creating news:`, error.message);
    }
  }

  console.log('\n✅ Sanity data population completed!');
  console.log('\n🎉 You can now view the data at: http://localhost:3333');
}

populateData().catch(console.error);
