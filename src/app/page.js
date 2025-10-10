import Image from 'next/image';

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen">
      
      {/* 1. HEADER / НАВИГАЦИЯ */}
      <header className="bg-white py-4 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          
          {/* БЛОК ЛОГОТИПА И НАЗВАНИЯ */}
          <div className="flex items-center space-x-4">
            {/* ЛОГОТИП */}
            <div className="relative w-12 h-12">
              <Image
                src="/logo.png"
                alt="Логотип ТОРГОВЫЙ ДОМ СТРОИТЕЛЬНЫЙ ЦЕНТР"
                width={48} 
                height={48} 
                className="object-contain"
              />
            </div>
            
            {/* ТЕКСТ (НАЗВАНИЕ И СЛОГАН) */}
            <div className="flex flex-col">
              <h1 className="text-3xl font-extrabold text-gray-800 tracking-wide leading-tight">ТОРГОВЫЙ ДОМ <span className="text-orange-500">СТРОИТЕЛЬНЫЙ ЦЕНТР</span></h1>
              <p className="text-gray-600 italic leading-none hidden sm:block">Быстрые и выгодные закупки под ключ</p>
            </div>
          </div>
          
          {/* КОНТАКТНЫЙ ТЕЛЕФОН */}
          <a href="tel:+78121234567" className="text-3xl font-bold text-orange-500 hover:text-orange-700 hidden sm:block">
            +7 (812) 123-45-67
          </a>
        </div>
      </header>

      {/* 2. ПЕРВЫЙ ЭКРАН (HERO) */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="md:order-2">
            {/* Изображение, демонстрирующее решение проблемы / процесс снабжения */}
            <div className="relative w-full h-80 rounded-lg overflow-hidden flex items-center justify-center bg-gray-200 text-gray-500 shadow-2xl">
              <Image
                src="/HERO_Image.png"
                alt="Изображение, демонстрирующее процесс снабжения и аналитики"
                width={1024}
                height={1024}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
          <div className="md:order-1">
            <h2 className="text-5xl font-bold text-gray-800 mb-4">
              Мы берём на себя весь процесс закупки, <span className="text-orange-500">вы просто строите</span>
            </h2>
            <p className="text-xl text-gray-700 mb-6">
              Считаем смету, подбираем материалы, оформляем заказы и доставку — всё в одном месте. Аутсорсинг снабжения для частников, подрядчиков и строительных компаний.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-md shadow-lg transition duration-300">
                Отправить заявку
              </button>
              <button className="bg-white border-2 border-orange-500 text-orange-500 font-bold py-3 px-8 rounded-md hover:bg-orange-50 transition duration-300">
                Получить консультацию
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* 3. БЛОК "ПРОБЛЕМА" */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Проблема
          </h2>
          <p className="text-xl text-gray-700 italic">
            Вы тратите часы и дни на закупки, обзваниваете десятки поставщиков, сравниваете цены и сроки. Приходится работать &quot;на ощупь&quot;, без прозрачности и уверенности, что условия лучшие.
          </p>
        </div>
      </section>

      {/* 4. НАШЕ РЕШЕНИЕ (ПРЕИМУЩЕСТВА) */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Наше решение: <span className="text-orange-500">выгодные закупки без хлопот</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Преимущество 1: Цена */}
            <div className="bg-white rounded-lg shadow-xl p-6 border-t-4 border-orange-500">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Автоматизация ценообразования</h3>
              <p className="text-gray-600 text-sm">
                Ежедневно анализируем цены на рынке и находим лучшие предложения.
              </p>
            </div>

            {/* Преимущество 2: Поставщики */}
            <div className="bg-white rounded-lg shadow-xl p-6 border-t-4 border-orange-500">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Проверенные поставщики</h3>
              <p className="text-gray-600 text-sm">
                Работаем только с надежными компаниями без посредников.
              </p>
            </div>

            {/* Преимущество 3: Сроки */}
            <div className="bg-white rounded-lg shadow-xl p-6 border-t-4 border-orange-500">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Соблюдение сроков</h3>
              <p className="text-gray-600 text-sm">
                Оперативная обработка заявки. Гарантируем соблюдение сроков доставки.
              </p>
            </div>

            {/* Преимущество 4: Документооборот */}
            <div className="bg-white rounded-lg shadow-xl p-6 border-t-4 border-orange-500">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Прозрачный документооборот</h3>
              <p className="text-gray-600 text-sm">
                Полная прозрачность условий оплаты и онлайн документооборот.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* 5. БЛОК "КАК МЫ РАБОТАЕМ" (3 шага) */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            3 шага для начала работы
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Шаг 1 */}
            <div className="bg-gray-100 rounded-lg shadow-md p-6 text-center border-t-4 border-gray-400">
              <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Оставьте заявку на сайте</h3>
              <p className="text-gray-600">
                Заполните форму или позвоните нам.
              </p>
            </div>

            {/* Шаг 2 */}
            <div className="bg-gray-100 rounded-lg shadow-md p-6 text-center border-t-4 border-gray-400">
              <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Подберите товары для сделки</h3>
              <p className="text-gray-600">
                Определите материалы, объемы и бюджеты совместно с менеджером.
              </p>
            </div>

            {/* Шаг 3 */}
            <div className="bg-gray-100 rounded-lg shadow-md p-6 text-center border-t-4 border-gray-400">
              <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Заключайте сделки</h3>
              <p className="text-gray-600">
                Мы берем на себя оформление, контроль и доставку.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. АССОРТИМЕНТ ПРОДУКЦИИ (ЧТО МЫ ПОСТАВЛЯЕМ) */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Что мы поставляем
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              "Черный металлопрокат",
              "Трубопроводная и запорная арматура",
              "Цветной металлопрокат",
              "Нержавеющий металлопрокат",
              "Оцинкованный металлопрокат",
              "Кровельные материалы",
              "Крепеж (болты, шурупы, хомуты)",
              "Строительные материалы (кирпич, бетон, газобетон, пиломатериалы, сыпучие)",
              "Инженерные системы"
            ].map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm text-center">
                <p className="text-gray-700 font-medium text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. КОМУ БУДЕТ ПОЛЕЗНО (ЦЕЛЕВАЯ АУДИТОРИЯ) */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Наши клиенты
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              "Подрядчики и стройкомпании",
              "Прорабы и снабженцы",
              "Девелоперы и застройщики",
              "Частные клиенты",
              "Производства"
            ].map((item, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-lg text-center border-b-4 border-orange-500">
                <p className="text-gray-700 font-semibold">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-lg text-gray-600 mt-8">
             Сервис проверен сотнями строителей и снабженцев. Работаем с В2В и частными клиентами.
          </p>
        </div>
      </section>

      {/* 8. ДОПОЛНИТЕЛЬНЫЕ ВОЗМОЖНОСТИ */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Дополнительные возможности
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Блок 1: Аналитика */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-semibold text-gray-700 mb-3 text-orange-500">
                Аналитика и проверка поставщиков
              </h3>
              <p className="text-gray-600 mb-4">
                Под запрос делаем аналитику цен на любые строительные товары от металлопроката до отделочных материалов. Мы сравниваем предложения по регионам, проверяем актуальность цен и рейтинг поставщиков.
              </p>
              <p className="text-lg font-bold text-gray-800">
                🔍 Вы всегда видите реальные рыночные цены и работаете только с проверенными компаниями.
              </p>
            </div>
            
            {/* Блок 2: Отдел снабжения на аутсорсе */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-semibold text-gray-700 mb-3 text-orange-500">
                Отдел снабжения на аутсорсе
              </h3>
              <p className="text-gray-600 mb-4">
                Не хотите тратить ресурсы на снабженцев и закупки? Мы можем полностью взять этот процесс на себя.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                <li>Поиск и проверка поставщиков.</li>
                <li>Расчёт смет и логистики.</li>
                <li>Оформление документов и контроль поставок.</li>
                <li>Отчётность и аналитика для руководства.</li>
              </ul>
            </div>
            
            {/* Блок 3: Обучение и поддержка */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-semibold text-gray-700 mb-3 text-orange-500">
                Обучение и поддержка
              </h3>
              <p className="text-gray-600 mb-4">
                Обучаем ваших сотрудников и снабженцев работать с сервисом и управлять закупками по-новому. Программы включают:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                <li>“Как оптимизировать закупки и сэкономить до 30% бюджета”.</li>
                <li>“Аналитика рынка строительных материалов”.</li>
                <li>“Как внедрить цифровое снабжение в компании”.</li>
              </ul>
              <p className="text-lg font-bold text-gray-800 mt-4">
                Делимся опытом из практики и лучшими инструментами автоматизации.
              </p>
            </div>
            
            {/* Блок 4: Партнёрская программа */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-semibold text-gray-700 mb-3 text-orange-500">
                Партнёрская программа
              </h3>
              <p className="text-gray-600 mb-4">
                Приглашайте коллег, подрядчиков и партнёров и получайте вознаграждение!
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                <li>% от прибыли за приведённого клиента.</li>
                <li>Бонусы для подрядчиков и снабженцев, которые рекомендуют нас.</li>
                <li>Возможность стать региональным партнёром.</li>
              </ul>
              <p className="text-lg font-bold text-gray-800 mt-4">
                Зарабатывайте вместе с нами, помогая другим оптимизировать снабжение.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. ФОРМА ЗАЯВКИ (ПОВТОРНЫЙ CTA) */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Подбор, проверка, закупка и доставка — под ключ, с экономией времени и денег.
          </h2>
          <div className="max-w-xl mx-auto bg-gray-100 rounded-lg p-8 shadow-xl">
            <h3 className="text-xl font-bold text-gray-700 mb-6 text-center">Оставьте заявку и получите индивидуальное предложение!</h3>
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
                  rows="3"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Опишите, какие материалы и объемы вас интересуют"
                ></textarea>
              </div>
              <button
                className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-md focus:outline-none focus:shadow-outline w-full shadow-lg"
                type="submit"
              >
                Отправить заявку
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 10. ОТЗЫВЫ */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Отзывы
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Отзыв 1: Сергей, генподрядчик в МО */}
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-orange-500">
              <p className="text-gray-700 italic mb-4">
                &quot;Перестал гонять снабженца по базам — всё чётко организовано, документы,
                доставка, объёмы в точку. Сейчас все объекты ведём с этой командой.&quot;
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                  <span className="text-orange-500 font-semibold">С.</span>
                </div>
                <div className="">
                  <h4 className="text-lg font-semibold text-gray-800">Сергей</h4>
                  <p className="text-gray-500 text-sm">Генподрядчик в МО</p>
                </div>
              </div>
            </div>

            {/* Отзыв 2: Дмитрий, частный застройщик */}
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-orange-500">
              <p className="text-gray-700 italic mb-4">
                &quot;Была паника по газобетону. Нашли, согласовали, привезли за день. И дешевле, чем я искал сам.&quot;
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                  <span className="text-orange-500 font-semibold">Д.</span>
                </div>
                <div className="">
                  <h4 className="text-lg font-semibold text-gray-800">Дмитрий</h4>
                  <p className="text-gray-500 text-sm">Частный застройщик</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. КОНТАКТЫ */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Контакты
          </h2>
          {/* Удалили вторую форму, оставив только контактную информацию */}
          <div className="max-w-md mx-auto">
            <h3 className="text-xl font-semibold text-gray-700 mb-4 text-center">
              Свяжитесь с нами
            </h3>
            <div className="space-y-4 text-center">
              <p className="text-gray-600 text-lg">
                Телефон: <a href="tel:+78121234567" className="text-orange-500 font-bold hover:underline">+7 (812) 123-45-67</a>
              </p>
              <p className="text-gray-600 text-lg">
                Email: <a href="mailto:info@steeldrive.ru" className="text-orange-500 font-bold hover:underline">info@steeldrive.ru</a>
              </p>
              <p className="text-gray-600 text-lg">
                Адрес: Санкт-Петербург, [Ваш фактический адрес]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 12. ФУТЕР */}
      <footer className="bg-gray-800 py-4 text-center text-gray-400 text-sm">
        <div className="container mx-auto px-4">
          © {new Date().getFullYear()} ТОРГОВЫЙ ДОМ СТРОИТЕЛЬНЫЙ ЦЕНТР. Все права защищены.
        </div>
      </footer>
    </main>
  );
}

// import Image from 'next/image';

// export default function Home() {
//   return (
//     <main className="bg-gray-100 min-h-screen">
//       <header className="bg-white py-4">
//         <div className="container mx-auto px-4">
//           <h1 className="text-2xl font-bold text-gray-800">ТОРГОВЫЙ ДОМ СТРОИТЕЛЬНЫЙ ЦЕНТР</h1>
//           <p className="text-gray-600 italic">Быстрые и выгодные закупки под ключ</p>
//         </div>
//       </header>

//       <section className="py-12 bg-gray-100">
//         <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
//           <div className="md:order-2">
//             <div className="relative w-full h-64 rounded-lg overflow-hidden flex items-center justify-center bg-gray-200 text-gray-500">
//               Изображение продукции
//             </div>
//           </div>
//           <div className="md:order-1">
//             <h2 className="text-4xl font-bold text-gray-800 mb-4">
//               Надежный поставщик металлопроката по выгодным ценам в Санкт-Петербурге и Ленобласти
//             </h2>
//             <p className="text-lg text-gray-700 mb-6">
//               Широкий ассортимент арматуры, листового проката, труб и профнастила для вашего строительства и производства. Оперативная доставка и индивидуальный подход.
//             </p>
//             <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-md">
//               Оставить заявку на расчет
//             </button>
//           </div>
//         </div>
//       </section>

//       <section className="py-12 bg-white">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
//             СтальДрайв - ваш надежный партнер
//           </h2>
//           <p className="text-lg text-gray-700 mb-4">
//             Компания СтальДрайв специализируется на поставках высококачественного
//             металлопроката для строительных и производственных нужд в в Санкт-Петербурге и Ленобласти.
//             Мы стремимся обеспечить наших клиентов широким ассортиментом продукции,
//             выгодными ценами и высоким уровнем сервиса.
//           </p>
//           <p className="text-lg text-gray-700 mb-6">
//             Наша цель - стать вашим долгосрочным и надежным партнером, предлагая
//             индивидуальные решения и оперативное выполнение заказов. Мы ценим
//             доверие наших клиентов и стремимся к взаимовыгодному сотрудничеству.
//           </p>
//         </div>
//       </section>

//       <section className="py-12 bg-gray-100">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
//             Наши преимущества
//           </h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {/* Преимущество 1 */}
//             <div className="bg-white rounded-lg shadow-md p-6">
//               <h3 className="text-xl font-semibold text-gray-700 mb-2">Широкий ассортимент</h3>
//               <p className="text-gray-600">
//                 Все виды металлопроката в одном месте: арматура, листовой прокат,
//                 трубы, профнастил и многое другое.
//               </p>
//             </div>

//             {/* Преимущество 2 */}
//             <div className="bg-white rounded-lg shadow-md p-6">
//               <h3 className="text-xl font-semibold text-gray-700 mb-2">Выгодные цены</h3>
//               <p className="text-gray-600">
//                 Конкурентные цены благодаря прямым поставкам от ведущих производителей.
//               </p>
//             </div>

//             {/* Преимущество 3 */}
//             <div className="bg-white rounded-lg shadow-md p-6">
//               <h3 className="text-xl font-semibold text-gray-700 mb-2">Оперативная доставка</h3>
//               <p className="text-gray-600">
//                 Быстрая и надежная доставка по Санкт-Петербургу и Ленинградской области в кратчайшие сроки.
//               </p>
//             </div>

//           </div>
//         </div>
//       </section>

      
      
//       <section className="py-12 bg-gray-100">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
//             Как мы работаем
//           </h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
//             {/* Шаг 1 */}
//             <div className="bg-white rounded-lg shadow-md p-6 text-center">
//               <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center mx-auto mb-4">
//                 1
//               </div>
//               <h3 className="text-xl font-semibold text-gray-700 mb-2">Заявка</h3>
//               <p className="text-gray-600">
//                 Оставьте заявку на сайте или позвоните нам.
//               </p>
//             </div>

//             {/* Шаг 2 */}
//             <div className="bg-white rounded-lg shadow-md p-6 text-center">
//               <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center mx-auto mb-4">
//                 2
//               </div>
//               <h3 className="text-xl font-semibold text-gray-700 mb-2">Консультация и расчет</h3>
//               <p className="text-gray-600">
//                 Наш специалист свяжется с вами для уточнения деталей и расчета стоимости.
//               </p>
//             </div>

//             {/* Шаг 3 */}
//             <div className="bg-white rounded-lg shadow-md p-6 text-center">
//               <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center mx-auto mb-4">
//                 3
//               </div>
//               <h3 className="text-xl font-semibold text-gray-700 mb-2">Согласование</h3>
//               <p className="text-gray-600">
//                 Согласуем условия заказа и доставки.
//               </p>
//             </div>

//             {/* Шаг 4 */}
//             <div className="bg-white rounded-lg shadow-md p-6 text-center">
//               <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center mx-auto mb-4">
//                 4
//               </div>
//               <h3 className="text-xl font-semibold text-gray-700 mb-2">Доставка</h3>
//               <p className="text-gray-600">
//                 Оперативно доставим ваш заказ по Санкт-Петербургу и Ленинградской области.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="py-12 bg-white">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
//             Оставьте заявку
//           </h2>
//           <div className="max-w-md mx-auto bg-gray-100 rounded-lg p-8 shadow-md">
//             <form>
//               <div className="mb-4">
//                 <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
//                   Ваше имя
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                   placeholder="Введите ваше имя"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
//                   Номер телефона
//                 </label>
//                 <input
//                   type="tel"
//                   id="phone"
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                   placeholder="Введите ваш номер телефона"
//                 />
//               </div>
//               <div className="mb-6">
//                 <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
//                   Краткое описание потребности
//                 </label>
//                 <textarea
//                   id="message"
//                   rows="4"
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                   placeholder="Опишите, какой металлопрокат вас интересует"
//                 ></textarea>
//               </div>
//               <button
//                 className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-md focus:outline-none focus:shadow-outline w-full"
//                 type="submit"
//               >
//                 Отправить заявку
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>

//       <section className="py-12 bg-gray-100">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
//             Отзывы наших клиентов
//           </h2>
//           <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
//             {/* Отзыв 1 */}
//             <div className="bg-white rounded-lg shadow-md p-6">
//               <p className="text-gray-700 italic mb-4">
//                 Отличный сервис и быстрая доставка! Заказывали арматуру для фундамента,
//                 все привезли вовремя и качество на высоте. Рекомендуем!
//               </p>
//               <div className="flex items-center">
//                 <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center mr-3">
//                   <span className="text-gray-600 font-semibold">К.И.</span>
//                 </div>
//                 <div className="">
//                   <h4 className="text-lg font-semibold text-gray-800">Кирилл Иванов</h4>
//                   <p className="text-gray-500 text-sm">ООО СтройИнвест</p>
//                 </div>
//               </div>
//             </div>

//             {/* Отзыв 2 */}
//             <div className="bg-white rounded-lg shadow-md p-6">
//               <p className="text-gray-700 italic mb-4">
//                 Работаем с компанией СтальДрайв уже не первый год. Всегда широкий
//                 выбор металлопроката и адекватные цены. Менеджеры оперативно
//                 консультируют и помогают с выбором.
//               </p>
//               <div className="flex items-center">
//                 <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center mr-3">
//                   <span className="text-gray-600 font-semibold">А.С.</span>
//                 </div>
//                 <div className="">
//                   <h4 className="text-lg font-semibold text-gray-800">Анна Смирнова</h4>
//                   <p className="text-gray-500 text-sm">ИП МеталлСервис</p>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </section>

//       <section className="py-12 bg-white">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
//             Контакты
//           </h2>
//           <div className="grid md:grid-cols-2 gap-8">
//             <div>
//               <h3 className="text-xl font-semibold text-gray-700 mb-4">
//                 Свяжитесь с нами
//               </h3>
//               <p className="text-gray-600 mb-2">
//                 Телефон: <a href="tel:+78121234567" className="text-orange-500">+7 (812) 123-45-67</a>
//               </p>
//               <p className="text-gray-600 mb-2">
//                 Email: <a href="mailto:info@steeldrive.ru" className="text-orange-500">info@steeldrive.ru</a>
//               </p>
//               <p className="text-gray-600 mb-2">
//                 Адрес: Санкт-Петербург, ул. Пушкина, дом Колотушкина
//               </p>
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* Футер */}
//       <footer className="bg-gray-200 py-4 text-center text-gray-600 text-sm">
//         <div className="container mx-auto px-4">
//           © {new Date().getFullYear()} СтальДрайв. Все права защищены.
//         </div>
//       </footer>
//     </main>
//   );
// }
