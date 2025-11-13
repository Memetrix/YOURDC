import Link from 'next/link';
import Image from 'next/image';
import { getServices, getAdvantages, getTelecomOperators, getNews, getSiteSettings, urlFor } from '@/lib/sanity';

export default async function Home() {
  // Получаем данные из Sanity
  const [services, advantages, operators, news, settings] = await Promise.all([
    getServices(),
    getAdvantages(),
    getTelecomOperators(),
    getNews(),
    getSiteSettings(),
  ]);

  const stats = settings?.datacenterStats || {};

  return (
    <>
      {/* Hero Section with Background */}
      <section className="relative py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/001.webp"
            alt="Data Center Exterior"
            fill
            className="object-cover opacity-20"
            priority
            quality={85}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-data-blue to-data-blue-700 opacity-90"></div>
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-white mb-6">
              Надежная инфраструктура для вашего бизнеса
            </h1>
            <p className="text-white/90 text-xl mb-8">
              Профессиональный дата-центр с SLA {stats.sla}. Размещение оборудования, облачные решения и комплексная поддержка {stats.support}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contacts" className="btn bg-signal-red text-white hover:bg-red-600 text-center">
                Получить консультацию
              </Link>
              <button className="btn bg-white/10 text-white hover:bg-white/20 border-2 border-white/30">
                Виртуальная экскурсия
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-data-blue mb-2">{stats.sla}</div>
              <div className="text-gray-600">SLA по договору</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-data-blue mb-2">{stats.totalPower}</div>
              <div className="text-gray-600">Мощность</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-data-blue mb-2">{stats.racks}</div>
              <div className="text-gray-600">Стоек</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-data-blue mb-2">{stats.support}</div>
              <div className="text-gray-600">Поддержка</div>
            </div>
          </div>
        </div>
      </section>

      {/* Server Hall Showcase */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-data-blue mb-4 md:mb-6">Современная инфраструктура</h2>
              <p className="text-gray-600 mb-6">
                Наши машинные залы оснащены новейшим оборудованием и системами для обеспечения максимальной надежности и производительности.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Контроль температуры и влажности 24/7</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Организованная кабельная инфраструктура</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Системы холодного/горячего коридора</span>
                </li>
              </ul>
            </div>
            <div className="relative h-64 md:h-80 lg:h-96 rounded-selectel-lg overflow-hidden shadow-selectel">
              <Image
                src="/images/002.webp"
                alt="Server Halls Interior"
                fill
                className="object-cover"
                loading="lazy"
                quality={85}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container">
          <h2 className="text-center mb-3 md:mb-4 text-data-blue">Наши услуги</h2>
          <p className="text-center text-gray-600 mb-8 md:mb-12 max-w-2xl mx-auto">
            Полный спектр услуг для размещения и управления IT-инфраструктурой
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service: any, index: number) => (
              <Link key={service._id} href={`/services#${service.id}`} className="group">
                <div className="card hover:shadow-lg transition-shadow duration-200 h-full cursor-pointer">
                  <div className="relative h-40 md:h-48 mb-4 rounded-selectel overflow-hidden">
                    <Image
                      src={index === 0 ? "/images/003.webp" : index === 1 ? "/images/004.webp" : "/images/010.webp"}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-200"
                      loading="lazy"
                      quality={85}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <h3 className="text-xl md:text-2xl mb-3 text-data-blue">{service.title}</h3>
                  <p className="text-gray-600 mb-4">
                    {service.shortDescription}
                  </p>
                  <div className="text-sm text-gray-500 mb-4">
                    {service.pricingStarter?.price || 'По запросу'}
                  </div>
                  <span className="btn-link">Подробнее →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container">
          <h2 className="text-center mb-4 text-data-blue">Ключевые характеристики</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Технические параметры нашего дата-центра
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-selectel-lg p-6">
              <div className="text-3xl font-bold text-data-blue mb-2">{stats.tierLevel}</div>
              <div className="text-gray-600 mb-3">Сертификация Uptime Institute</div>
              <p className="text-sm text-gray-500">
                Подтвержденная надежность инфраструктуры
              </p>
            </div>

            <div className="bg-white rounded-selectel-lg p-6">
              <div className="text-3xl font-bold text-data-blue mb-2">{stats.machineRoomArea}</div>
              <div className="text-gray-600 mb-3">Площадь машинных залов</div>
              <p className="text-sm text-gray-500">
                Современные помещения с системами климат-контроля
              </p>
            </div>

            <div className="bg-white rounded-selectel-lg p-6">
              <div className="text-3xl font-bold text-data-blue mb-2">{stats.powerPerRack}</div>
              <div className="text-gray-600 mb-3">Мощность на стойку</div>
              <p className="text-sm text-gray-500">
                Гибкие варианты для любых задач
              </p>
            </div>

            <div className="bg-white rounded-selectel-lg p-6">
              <div className="text-3xl font-bold text-data-blue mb-2">N+1</div>
              <div className="text-gray-600 mb-3">Резервирование систем</div>
              <p className="text-sm text-gray-500">
                Полное резервирование критических систем
              </p>
            </div>

            <div className="bg-white rounded-selectel-lg p-6">
              <div className="text-3xl font-bold text-data-blue mb-2">{stats.autonomousOperation}</div>
              <div className="text-gray-600 mb-3">Автономная работа</div>
              <p className="text-sm text-gray-500">
                Запас топлива для длительной автономии
              </p>
            </div>

            <div className="bg-white rounded-selectel-lg p-6">
              <div className="text-3xl font-bold text-data-blue mb-2">10 Гбит/с</div>
              <div className="text-gray-600 mb-3">Каналы связи</div>
              <p className="text-sm text-gray-500">
                Высокоскоростные подключения к операторам
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <h2 className="text-center mb-4 text-data-blue">Преимущества</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Почему выбирают нас
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage: any) => (
              <div key={advantage._id} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-green-400 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-data-blue">{advantage.name}</h3>
                  <p className="text-gray-600">
                    {advantage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Showcase */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-center mb-8 md:mb-12 text-data-blue">Инфраструктура</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="card group cursor-pointer hover:shadow-lg transition-shadow">
              <div className="relative h-40 mb-4 rounded-selectel overflow-hidden">
                <Image
                  src="/images/008.webp"
                  alt="Power Infrastructure"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-200"
                  loading="lazy"
                  quality={85}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <h3 className="font-semibold text-data-blue mb-2">Электропитание</h3>
              <p className="text-sm text-gray-600">ИБП и резервные генераторы</p>
            </div>

            <div className="card group cursor-pointer hover:shadow-lg transition-shadow">
              <div className="relative h-40 mb-4 rounded-selectel overflow-hidden">
                <Image
                  src="/images/007.webp"
                  alt="Cooling Systems"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-200"
                  loading="lazy"
                  quality={85}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <h3 className="font-semibold text-data-blue mb-2">Охлаждение</h3>
              <p className="text-sm text-gray-600">Прецизионные кондиционеры</p>
            </div>

            <div className="card group cursor-pointer hover:shadow-lg transition-shadow">
              <div className="relative h-40 mb-4 rounded-selectel overflow-hidden">
                <Image
                  src="/images/005.webp"
                  alt="Network Connectivity"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-200"
                  loading="lazy"
                  quality={85}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <h3 className="font-semibold text-data-blue mb-2">Связность</h3>
              <p className="text-sm text-gray-600">Оптоволоконные линии связи</p>
            </div>

            <div className="card group cursor-pointer hover:shadow-lg transition-shadow">
              <div className="relative h-40 mb-4 rounded-selectel overflow-hidden">
                <Image
                  src="/images/006.webp"
                  alt="Security"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-200"
                  loading="lazy"
                  quality={85}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <h3 className="font-semibold text-data-blue mb-2">Безопасность</h3>
              <p className="text-sm text-gray-600">Контроль доступа 24/7</p>
            </div>
          </div>
        </div>
      </section>

      {/* Telecom Operators */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container">
          <h2 className="text-center mb-3 md:mb-4 text-data-blue">Операторы связи</h2>
          <p className="text-center text-gray-600 mb-8 md:mb-12 max-w-2xl mx-auto">
            Прямое подключение к крупнейшим телеком-операторам
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {operators.map((operator: any) => (
              <div
                key={operator._id}
                className="bg-white rounded-selectel p-8 flex items-center justify-center min-h-32 shadow-sm hover:shadow-md transition-all duration-200 group"
              >
                <Image
                  src={urlFor(operator.logo).width(200).url()}
                  alt={operator.name}
                  width={200}
                  height={80}
                  className="w-full h-auto max-h-16 object-contain opacity-60 group-hover:opacity-100 transition-all duration-300 filter grayscale brightness-110 group-hover:grayscale-0 group-hover:brightness-100"
                  loading="lazy"
                  quality={90}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-data-blue mb-2">Новости</h2>
            <p className="text-gray-600">
              Последние обновления из нашего дата-центра
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {news.slice(0, 2).map((item: any) => (
              <div key={item._id} className="card hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-sm text-gray-500">
                    {new Date(item.date).toLocaleDateString('ru-RU')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-data-blue">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-data-blue">
        <div className="container text-center">
          <h2 className="text-white mb-6">Готовы начать?</h2>
          <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами для получения консультации и расчета стоимости
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacts" className="btn bg-signal-red text-white hover:bg-red-600 text-center">
              Получить консультацию
            </Link>
            <Link href="/services" className="btn bg-white text-data-blue hover:bg-gray-100 text-center">
              Рассчитать стоимость
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
