import ContactForm from '@/components/ContactForm';
import { Metadata } from 'next';
import { getSiteSettings } from '@/lib/sanity';

export const metadata: Metadata = {
  title: "Контакты и консультация",
  description: "Свяжитесь с YOURDC для получения консультации по услугам дата-центра. Телефон, email, адрес офиса. Техническая поддержка 24/7.",
  openGraph: {
    title: "Контакты YOURDC",
    description: "Получите консультацию по услугам дата-центра. Техподдержка 24/7",
  },
};

export default async function Contacts() {
  const settings = await getSiteSettings();
  const contactInfo = settings?.contactInfo || {};
  const { phone, phoneTollfree, email, supportEmail, salesEmail, address, workingHours } = contactInfo;

  return (
    <>
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container">
          <h1 className="text-data-blue mb-4">Контакты</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl">
            Свяжитесь с нами удобным способом. Мы всегда готовы ответить на ваши вопросы
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <h2 className="text-data-blue mb-6">Отправить сообщение</h2>
              <ContactForm />
            </div>

            <div>
              <h2 className="text-data-blue mb-6">Контактная информация</h2>

              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-data-blue/10 rounded-selectel flex items-center justify-center">
                    <svg className="w-6 h-6 text-data-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-data-blue mb-1">Телефон</h3>
                    <p className="text-gray-600">{phone}</p>
                    {phoneTollfree && <p className="text-gray-600">{phoneTollfree} (бесплатный)</p>}
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-data-blue/10 rounded-selectel flex items-center justify-center">
                    <svg className="w-6 h-6 text-data-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-data-blue mb-1">Email</h3>
                    <p className="text-gray-600">{email}</p>
                    {supportEmail && <p className="text-gray-600">{supportEmail}</p>}
                    {salesEmail && <p className="text-gray-600">{salesEmail}</p>}
                  </div>
                </div>

                {address && (
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-data-blue/10 rounded-selectel flex items-center justify-center">
                      <svg className="w-6 h-6 text-data-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-data-blue mb-1">Адрес</h3>
                      <p className="text-gray-600">
                        Россия, {address.city}<br />
                        {address.street}, {address.building && `д. ${address.building}`}<br />
                        {address.office && `${address.office}`}<br />
                        {address.postalCode}
                      </p>
                    </div>
                  </div>
                )}

                {workingHours && (
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-data-blue/10 rounded-selectel flex items-center justify-center">
                      <svg className="w-6 h-6 text-data-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-data-blue mb-1">Режим работы</h3>
                      <p className="text-gray-600">
                        Офис: {workingHours.office}<br />
                        Поддержка: {workingHours.support}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div className="card bg-data-blue text-white">
                <h3 className="font-semibold mb-3">Техническая поддержка</h3>
                <p className="mb-4 text-white/90">
                  Наша служба поддержки работает круглосуточно и готова помочь в решении любых технических вопросов.
                </p>
                <p className="text-white/90 font-medium mb-4">
                  Среднее время реакции: менее 15 минут
                </p>
                {phone && (
                  <a href={`tel:${phone.replace(/\D/g, '')}`} className="btn bg-white text-data-blue hover:bg-gray-100 w-full text-center block">
                    Позвонить в поддержку
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {address && (
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="container">
            <h2 className="text-center text-data-blue mb-4">Как нас найти</h2>
            <p className="text-center text-gray-600 mb-12">
              {address.city}, {address.street}, {address.building && `д. ${address.building}`}
            </p>
            <div className="bg-gray-300 rounded-selectel-lg h-96 flex items-center justify-center">
              <div className="text-center text-gray-600">
                <svg className="w-24 h-24 mx-auto mb-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p>Интерактивная карта</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Quick Contact */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="bg-gradient-to-br from-data-blue to-data-blue-700 rounded-selectel-lg p-8 lg:p-12 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="mb-4">Нужна консультация?</h2>
              <p className="text-white/90 text-lg mb-8">
                Оставьте заявку, и наш менеджер свяжется с вами в течение 30 минут
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {phone && (
                  <a href={`tel:${phone.replace(/\D/g, '')}`} className="btn bg-signal-red text-white hover:bg-red-600 text-center">
                    Позвонить сейчас
                  </a>
                )}
                {salesEmail && (
                  <a href={`mailto:${salesEmail}`} className="btn bg-white text-data-blue hover:bg-gray-100 text-center">
                    Написать на email
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
