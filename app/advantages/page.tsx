import Link from 'next/link';
import { getAdvantages, getFAQ, getSiteSettings, getClients } from '@/lib/sanity';

export default async function Advantages() {
  const [advantages, faq, settings, clients] = await Promise.all([
    getAdvantages(),
    getFAQ(),
    getSiteSettings(),
    getClients(),
  ]);

  const stats = settings?.datacenterStats || {};

  return (
    <>
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container">
          <h1 className="text-data-blue mb-6">Преимущества</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Почему более 500 компаний выбрали YOURDC для размещения своей IT-инфраструктуры
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage: any) => (
              <div key={advantage._id} className="card">
                <div className="w-12 h-12 bg-green-400/10 rounded-selectel flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-data-blue">{advantage.name}</h3>
                <p className="text-gray-600">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container">
          <h2 className="text-center text-data-blue mb-4">Сравнение с конкурентами</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Объективное сравнение ключевых параметров
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-selectel-lg overflow-hidden">
              <thead className="bg-data-blue text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Параметр</th>
                  <th className="px-6 py-4 text-center">YOURDC</th>
                  <th className="px-6 py-4 text-center">Конкурент А</th>
                  <th className="px-6 py-4 text-center">Конкурент Б</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-medium">SLA</td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-flex items-center gap-2 text-green-400 font-semibold">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {stats.sla}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center text-gray-600">99.9%</td>
                  <td className="px-6 py-4 text-center text-gray-600">99.95%</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">Сертификация Tier</td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-flex items-center gap-2 text-green-400 font-semibold">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {stats.tierLevel}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center text-gray-600">Tier II</td>
                  <td className="px-6 py-4 text-center text-gray-600">Tier II</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Резервирование</td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-flex items-center gap-2 text-green-400 font-semibold">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      N+1
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center text-gray-600">N</td>
                  <td className="px-6 py-4 text-center text-gray-600">N+1</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">Автономная работа</td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-green-400 font-semibold">{stats.autonomousOperation}</span>
                  </td>
                  <td className="px-6 py-4 text-center text-gray-600">24 часа</td>
                  <td className="px-6 py-4 text-center text-gray-600">48 часов</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Поддержка 24/7</td>
                  <td className="px-6 py-4 text-center">
                    <svg className="w-5 h-5 text-green-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <svg className="w-5 h-5 text-green-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <svg className="w-5 h-5 text-signal-red mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">PCI DSS</td>
                  <td className="px-6 py-4 text-center">
                    <svg className="w-5 h-5 text-green-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <svg className="w-5 h-5 text-green-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <svg className="w-5 h-5 text-signal-red mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Clients Success Stories */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <h2 className="text-center text-data-blue mb-4">Истории успеха</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Реальные кейсы наших клиентов
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {clients.map((client: any) => (
              <div key={client._id} className="card">
                <div className="text-sm text-gray-500 mb-2">{client.industry}</div>
                <h3 className="text-xl font-semibold text-data-blue mb-3">{client.name}</h3>
                <div className="inline-block px-3 py-1 bg-data-blue/10 text-data-blue rounded-full text-xs mb-3">
                  {client.solution}
                </div>
                <p className="text-gray-600">{client.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container">
          <h2 className="text-center text-data-blue mb-4">Часто задаваемые вопросы</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Ответы на популярные вопросы
          </p>
          <div className="max-w-3xl mx-auto space-y-4">
            {faq.map((item: any) => (
              <div key={item._id} className="card">
                <h3 className="text-lg font-semibold text-data-blue mb-3">{item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-data-blue">
        <div className="container text-center">
          <h2 className="text-white mb-6">Убедитесь сами</h2>
          <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
            Запланируйте виртуальную или личную экскурсию по нашему дата-центру
          </p>
          <Link href="/contacts" className="btn bg-white text-data-blue hover:bg-gray-100">
            Записаться на экскурсию
          </Link>
        </div>
      </section>
    </>
  );
}
