import Image from 'next/image';

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen">
      <header className="bg-white py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold text-gray-800">ТОРГОВЫЙ ДОМ СТРОИТЕЛЬНЫЙ ЦЕНТР</h1>
          <p className="text-gray-600 italic">Быстрые и выгодные закупки под ключ</p>
        </div>
      </header>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div className="md:order-2">
            <div className="relative w-full h-64 rounded-lg overflow-hidden flex items-center justify-center bg-gray-200 text-gray-500">
              Изображение продукции
            </div>
          </div>
          <div className="md:order-1">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Надежный поставщик металлопроката по выгодным ценам в Санкт-Петербурге и Ленобласти
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Широкий ассортимент арматуры, листового проката, труб и профнастила для вашего строительства и производства. Оперативная доставка и индивидуальный подход.
            </p>
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-md">
              Оставить заявку на расчет
            </button>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            СтальДрайв - ваш надежный партнер
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Компания СтальДрайв специализируется на поставках высококачественного
            металлопроката для строительных и производственных нужд в в Санкт-Петербурге и Ленобласти.
            Мы стремимся обеспечить наших клиентов широким ассортиментом продукции,
            выгодными ценами и высоким уровнем сервиса.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Наша цель - стать вашим долгосрочным и надежным партнером, предлагая
            индивидуальные решения и оперативное выполнение заказов. Мы ценим
            доверие наших клиентов и стремимся к взаимовыгодному сотрудничеству.
          </p>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Наши преимущества
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Преимущество 1 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Широкий ассортимент</h3>
              <p className="text-gray-600">
                Все виды металлопроката в одном месте: арматура, листовой прокат,
                трубы, профнастил и многое другое.
              </p>
            </div>

            {/* Преимущество 2 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Выгодные цены</h3>
              <p className="text-gray-600">
                Конкурентные цены благодаря прямым поставкам от ведущих производителей.
              </p>
            </div>

            {/* Преимущество 3 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Оперативная доставка</h3>
              <p className="text-gray-600">
                Быстрая и надежная доставка по Санкт-Петербургу и Ленинградской области в кратчайшие сроки.
              </p>
            </div>

          </div>
        </div>
      </section>

      
      
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Как мы работаем
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
            {/* Шаг 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Заявка</h3>
              <p className="text-gray-600">
                Оставьте заявку на сайте или позвоните нам.
              </p>
            </div>

            {/* Шаг 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Консультация и расчет</h3>
              <p className="text-gray-600">
                Наш специалист свяжется с вами для уточнения деталей и расчета стоимости.
              </p>
            </div>

            {/* Шаг 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Согласование</h3>
              <p className="text-gray-600">
                Согласуем условия заказа и доставки.
              </p>
            </div>

            {/* Шаг 4 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Доставка</h3>
              <p className="text-gray-600">
                Оперативно доставим ваш заказ по Санкт-Петербургу и Ленинградской области.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Оставьте заявку
          </h2>
          <div className="max-w-md mx-auto bg-gray-100 rounded-lg p-8 shadow-md">
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                  Ваше имя
                </label>
                <input
                  type="text"
                  id="name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Введите ваше имя"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
                  Номер телефона
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Введите ваш номер телефона"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                  Краткое описание потребности
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Опишите, какой металлопрокат вас интересует"
                ></textarea>
              </div>
              <button
                className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-md focus:outline-none focus:shadow-outline w-full"
                type="submit"
              >
                Отправить заявку
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Отзывы наших клиентов
          </h2>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Отзыв 1 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-700 italic mb-4">
                Отличный сервис и быстрая доставка! Заказывали арматуру для фундамента,
                все привезли вовремя и качество на высоте. Рекомендуем!
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center mr-3">
                  <span className="text-gray-600 font-semibold">К.И.</span>
                </div>
                <div className="">
                  <h4 className="text-lg font-semibold text-gray-800">Кирилл Иванов</h4>
                  <p className="text-gray-500 text-sm">ООО СтройИнвест</p>
                </div>
              </div>
            </div>

            {/* Отзыв 2 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-700 italic mb-4">
                Работаем с компанией СтальДрайв уже не первый год. Всегда широкий
                выбор металлопроката и адекватные цены. Менеджеры оперативно
                консультируют и помогают с выбором.
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center mr-3">
                  <span className="text-gray-600 font-semibold">А.С.</span>
                </div>
                <div className="">
                  <h4 className="text-lg font-semibold text-gray-800">Анна Смирнова</h4>
                  <p className="text-gray-500 text-sm">ИП МеталлСервис</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Контакты
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-4">
                Свяжитесь с нами
              </h3>
              <p className="text-gray-600 mb-2">
                Телефон: <a href="tel:+78121234567" className="text-orange-500">+7 (812) 123-45-67</a>
              </p>
              <p className="text-gray-600 mb-2">
                Email: <a href="mailto:info@steeldrive.ru" className="text-orange-500">info@steeldrive.ru</a>
              </p>
              <p className="text-gray-600 mb-2">
                Адрес: Санкт-Петербург, ул. Пушкина, дом Колотушкина
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-gray-200 py-4 text-center text-gray-600 text-sm">
        <div className="container mx-auto px-4">
          © {new Date().getFullYear()} СтальДрайв. Все права защищены.
        </div>
      </footer>
    </main>
  );
}
