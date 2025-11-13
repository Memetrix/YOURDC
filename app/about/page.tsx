import Image from 'next/image';
import { getSiteSettings } from '@/lib/sanity';
import { infrastructure, certificates, partners } from '@/data/mockData';

export default async function About() {
  const settings = await getSiteSettings();
  const datacenterStats = settings?.datacenterStats || {};

  return (
    <>
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container">
          <h1 className="text-data-blue mb-6">О дата-центре</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            YOURDC - современный дата-центр уровня {datacenterStats.tierLevel}, построенный по международным стандартам надежности и безопасности
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-data-blue mb-6">Общие характеристики</h2>
              <p className="text-gray-600 mb-6">
                Наш дата-центр расположен в специально спроектированном здании площадью более {datacenterStats.machineRoomArea}, оборудованном всей необходимой инфраструктурой для обеспечения бесперебойной работы вашего оборудования.
              </p>
              <p className="text-gray-600 mb-8">
                Мы используем только проверенное оборудование ведущих мировых производителей и следуем лучшим практикам отрасли.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-50 rounded-selectel p-4">
                  <div className="text-3xl font-bold text-data-blue mb-1">{datacenterStats.racks}</div>
                  <div className="text-sm text-gray-600">Серверных стоек</div>
                </div>
                <div className="bg-gray-50 rounded-selectel p-4">
                  <div className="text-3xl font-bold text-data-blue mb-1">{datacenterStats.totalPower}</div>
                  <div className="text-sm text-gray-600">Общая мощность</div>
                </div>
                <div className="bg-gray-50 rounded-selectel p-4">
                  <div className="text-3xl font-bold text-data-blue mb-1">{datacenterStats.sla}</div>
                  <div className="text-sm text-gray-600">SLA</div>
                </div>
                <div className="bg-gray-50 rounded-selectel p-4">
                  <div className="text-3xl font-bold text-data-blue mb-1">{datacenterStats.autonomousOperation}</div>
                  <div className="text-sm text-gray-600">Автономная работа</div>
                </div>
              </div>
            </div>

            <div className="relative h-96 rounded-selectel-lg overflow-hidden shadow-selectel">
              <Image
                src="/images/001.webp"
                alt="Data Center Exterior"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Infrastructure blocks */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-data-blue mb-6">Инфраструктура</h2>
              <p className="text-gray-600 mb-8">
                Наша инфраструктура включает современные системы безопасности, включая системы пожаротушения, обеспечивающие защиту оборудования в любой ситуации.
              </p>
            </div>
            <div className="relative h-96 rounded-selectel-lg overflow-hidden shadow-selectel">
              <Image
                src="/images/009.webp"
                alt="Fire Suppression System"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {Object.values(infrastructure).map((section: any, index) => (
              <div key={index} className="card">
                <h3 className="text-xl font-semibold text-data-blue mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.items.map((item: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Tier III section */}
          <div className="bg-data-blue rounded-selectel-lg p-8 lg:p-12 text-white mb-16">
            <h2 className="mb-6">Сертификация {datacenterStats.tierLevel}</h2>
            <p className="mb-8 text-white/90">
              YOURDC имеет сертификацию {datacenterStats.tierLevel} от Uptime Institute, что гарантирует {datacenterStats.sla} доступности инфраструктуры. Это означает максимальное время простоя всего 1.6 часа в год.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-4xl font-bold mb-2">N+1</div>
                <div className="text-white/80">Резервирование систем</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">{datacenterStats.autonomousOperation}</div>
                <div className="text-white/80">Автономная работа</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">0</div>
                <div className="text-white/80">Плановых остановок</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container">
          <h2 className="text-center text-data-blue mb-6">Сертификаты и лицензии</h2>
          <div className="flex justify-center mb-12">
            <div className="relative w-full max-w-md h-64 md:h-80 rounded-selectel-lg overflow-hidden shadow-selectel">
              <Image
                src="/images/011.webp"
                alt="Data Center Certifications"
                fill
                className="object-contain bg-white p-4"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <div key={index} className="card">
                <div className="flex items-start gap-3 mb-3">
                  <svg className="w-6 h-6 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-data-blue mb-1">{cert.name}</h3>
                    <div className="text-sm text-gray-500 mb-2">{cert.issuer}</div>
                    <p className="text-sm text-gray-600">{cert.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <h2 className="text-center text-data-blue mb-12">Наши партнеры</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white rounded-selectel p-6 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                <div className="text-center font-medium text-gray-700">{partner}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
