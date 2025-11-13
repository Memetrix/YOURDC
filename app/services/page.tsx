import Link from 'next/link';
import Image from 'next/image';
import { getServices } from '@/lib/sanity';

export default async function Services() {
  const services = await getServices();

  return (
    <>
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container">
          <h1 className="text-data-blue mb-6">Услуги</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Комплексные решения для размещения и управления IT-инфраструктурой вашего бизнеса
          </p>
        </div>
      </section>

      {services.map((service: any, index: number) => (
        <section
          key={service._id}
          id={service.id}
          className={`py-16 lg:py-24 ${index % 2 === 1 ? 'bg-gray-50' : ''}`}
        >
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className={index % 2 === 1 ? 'order-2' : ''}>
                <div className="w-16 h-16 bg-data-blue/10 rounded-selectel-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-data-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </div>
                <h2 className="text-data-blue mb-4">{service.title}</h2>
                <p className="text-gray-600 mb-6">
                  {service.fullDescription}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.features?.map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Pricing */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  {service.pricingStarter && (
                    <div className="card">
                      <div className="text-sm text-gray-500 mb-1">{service.pricingStarter.name}</div>
                      <div className="text-2xl font-bold text-data-blue mb-2">{service.pricingStarter.price}</div>
                      <div className="text-xs text-gray-500">{service.pricingStarter.description}</div>
                    </div>
                  )}
                  {service.pricingProfessional && (
                    <div className="card">
                      <div className="text-sm text-gray-500 mb-1">{service.pricingProfessional.name}</div>
                      <div className="text-2xl font-bold text-data-blue mb-2">{service.pricingProfessional.price}</div>
                      <div className="text-xs text-gray-500">{service.pricingProfessional.description}</div>
                    </div>
                  )}
                  {service.pricingEnterprise && (
                    <div className="card">
                      <div className="text-sm text-gray-500 mb-1">{service.pricingEnterprise.name}</div>
                      <div className="text-2xl font-bold text-data-blue mb-2">{service.pricingEnterprise.price}</div>
                      <div className="text-xs text-gray-500">{service.pricingEnterprise.description}</div>
                    </div>
                  )}
                </div>

                <Link href="/contacts" className="btn btn-colored">
                  Получить консультацию
                </Link>
              </div>

              <div className={`relative min-h-96 rounded-selectel-lg overflow-hidden shadow-selectel ${index % 2 === 1 ? 'order-1' : ''}`}>
                <Image
                  src={
                    service.id === 'colocation' ? '/images/003.webp' :
                    service.id === 'cloud' ? '/images/004.webp' :
                    '/images/012.webp'
                  }
                  alt={service.title}
                  fill
                  className={service.id === 'cloud' ? 'object-contain bg-gray-100 p-8' : 'object-cover'}
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-data-blue">
        <div className="container text-center">
          <h2 className="text-white mb-6">Нужна помощь с выбором?</h2>
          <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
            Наши специалисты помогут подобрать оптимальное решение для вашего бизнеса
          </p>
          <Link href="/contacts" className="btn bg-white text-data-blue hover:bg-gray-100">
            Связаться с нами
          </Link>
        </div>
      </section>
    </>
  );
}
