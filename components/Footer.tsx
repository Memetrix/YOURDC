import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-data-blue text-white py-12 md:py-16 mt-auto">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">YOURDC</h3>
            <p className="text-gray-300 text-base">
              Надежный дата-центр для вашего бизнеса
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-base">Услуги</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/colocation" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Colocation
                </Link>
              </li>
              <li>
                <Link href="/services/cloud" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Облачные решения
                </Link>
              </li>
              <li>
                <Link href="/services/additional" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Дополнительные услуги
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-base">О компании</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors duration-200">
                  О дата-центре
                </Link>
              </li>
              <li>
                <Link href="/advantages" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Преимущества
                </Link>
              </li>
              <li>
                <Link href="/certificates" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Сертификаты
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-base">Контакты</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>+7 (495) 123-45-67</li>
              <li>info@yourdc.ru</li>
              <li>Москва, ул. Примерная, д. 1</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-300">
            © 2025 YOURDC. Все права защищены
          </p>
          <div className="flex gap-4 text-sm">
            <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors duration-200">
              Политика конфиденциальности
            </Link>
            <Link href="/terms" className="text-gray-300 hover:text-white transition-colors duration-200">
              Условия использования
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
