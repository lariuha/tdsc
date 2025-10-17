"use client"
import Image from 'next/image';
import React, { useState, useEffect } from 'react';


export default function Home() {
  // 1. Управление состоянием модального окна
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 2. Логика, которая связывает iframe с React
  useEffect(() => {
    // Делаем функции доступными для iframe через window
    window.showModal = () => {
      setIsModalOpen(true);
      // Сброс формы
      document.getElementById('application-form').reset(); 
    };
    
    // Функция для закрытия модального окна
    window.closeModal = () => {
      setIsModalOpen(false);
    };

    // Очистка при размонтировании компонента
    return () => {
      delete window.showModal;
      delete window.closeModal;
    };
  }, []); // Пустой массив, чтобы useEffect сработал один раз

  // 3. Обработчик отправки формы
  const handleSubmit = () => {
    // Устанавливаем флаг, который проверит iframe при загрузке ответа
    window.submitted = true;
  };
  
  return (
    <main className="bg-gray-100 min-h-screen">
      
      {/* 1. HEADER / НАВИГАЦИЯ */}
      <header className="bg-white py-4 shadow-md fixed top-0 left-0 w-full z-10">
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
          <a href="tel:+79685281206" className="text-2xl font-bold text-orange-500 hover:text-orange-700 hidden sm:block">
            +7 (968) 528-12-06
          </a>
        </div>
      </header>

      {/* 2. ПЕРВЫЙ ЭКРАН (HERO) */}
      <section className="pt-32 pb-20 bg-gray-100">
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
              <a href="#form-section" className="text-center bg-orange-500 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-md shadow-lg transition duration-300">
                Отправить заявку
              </a>
              <a href="#contacts-section" className="text-center bg-white border-2 border-orange-500 text-orange-500 font-bold py-3 px-8 rounded-md hover:bg-orange-50 transition duration-300">
                Получить консультацию
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* 3. БЛОК "ПРОБЛЕМА" */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-xl text-gray-700 italic">
            Вы тратите часы и дни на закупки, обзваниваете десятки поставщиков, сравниваете цены и сроки? Приходится работать &quot;на ощупь&quot;, без прозрачности и уверенности, что условия лучшие?
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
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Соблюдение сроков доставки</h3>
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
                Заполните форму и отправьте заявку или позвоните нам.
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
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Заключите сделку</h3>
              <p className="text-gray-600">
                Доверьте нам оформление, контроль и доставку.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. АССОРТИМЕНТ ПРОДУКЦИИ (ЧТО МЫ ПОСТАВЛЯЕМ) */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-3">
                Полный спектр материалов для вашего проекта
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Мы поставляем не только металлопрокат, но и все сопутствующие строительные и инженерные материалы.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
                { title: "Черный металлопрокат", file: "cherniy_metall.png" },
                { title: "Трубопроводная и запорная арматура", file: "zapornaya_armatura.png" },
                { title: "Цветной металлопрокат", file: "cvetnoy_metall.png" },
                { title: "Нержавеющий металлопрокат", file: "nerjaveika.png" },
                { title: "Оцинкованный металлопрокат", file: "ocinkovka.png" },
                { title: "Кровельные материалы", file: "krovlya.png" },
                { title: "Крепеж (болты, шурупы, хомуты)", file: "krepezh.png" },
                { title: "Кирпич, блоки, ЖБИ (бетон, газобетон)", file: "kirpich_bloki.png" },
                { title: "Пиломатериалы (доски, брус)", file: "pilomaterialy.png" },
                { title: "Сыпучие материалы (песок, щебень, гравий)", file: "sypuchie.png" },
                { title: "Инженерные системы", file: "inzheneriya.png" },
            ].map((item, index) => (
                <div 
                    key={index} 
                    className="
                        bg-white p-6 rounded-xl shadow-lg text-center
                        border-b-4 border-transparent hover:border-orange-500 
                        transform hover:scale-[1.02] transition duration-300 ease-in-out
                    "
                >
                    <div className="flex justify-center mb-3">
                        <Image
                            src={`/categories/${item.file}`}
                            alt={item.title}
                            width={512}
                            height={512}
                            className="w-36 h-36 object-contain rounded-lg"
                        />
                    </div>
                    
                    <p className="text-gray-800 font-semibold leading-snug">{item.title}</p>
                    <span className="text-xs text-gray-500 mt-1 block">Категория материалов</span>
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
              <h3 className="text-2xl font-semibold mb-3 text-orange-500">
                Аналитика и проверка поставщиков
              </h3>
              <p className="text-gray-600 mb-4">
                Под запрос делаем аналитику цен на любые строительные товары от металлопроката до отделочных материалов. Мы сравниваем предложения по регионам, проверяем актуальность цен и рейтинг поставщиков.
              </p>
              <p className="text-lg font-bold text-gray-800">
                Вы всегда видите реальные рыночные цены и работаете только с проверенными компаниями.
              </p>
            </div>
            
            {/* Блок 2: Отдел снабжения на аутсорсе */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-semibold mb-3 text-orange-500">
                Отдел снабжения на аутсорсе
              </h3>
              <p className="text-gray-600  mb-4">
                Не хотите тратить ресурсы на снабженцев и закупки?
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4  mb-4">
                <li>Поиск и проверка поставщиков.</li>
                <li>Расчёт смет и логистики.</li>
                <li>Оформление документов и контроль поставок.</li>
                <li>Отчётность и аналитика для руководства.</li>
              </ul>
              <p className="text-lg font-bold text-gray-800">
                Мы можем полностью взять этот процесс на себя.
              </p>
            </div>
            
            {/* Блок 3: Обучение и поддержка */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-semibold mb-3 text-orange-500">
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
              <h3 className="text-2xl font-semibold mb-3 text-orange-500">
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

      {/* 9. БЛОК ДОСТАВКА */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Доставка автотранспортом
          </h2>
          <p className="text-lg text-gray-700 mb-10 max-w-4xl mx-auto text-center">
            Перевозка металлопроката на объект — это сложная логистическая задача, требующая высокой квалификации. Наши логисты обеспечивают полную безопасность груза: от экспертного подбора оптимального транспорта до профессионального размещения и надежного крепления в кузове. Строгое соблюдение всех норм гарантирует сохранность вашей металлопродукции на протяжении всего пути до конечной точки назначения.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Транспортное средство 1 */}
            <div className="bg-gray-50 rounded-lg p-4 shadow-md flex flex-col items-center text-center border border-gray-200">
              <div className="deliver-img mb-3">
                <Image src="/delivery/gazel.jpg" alt="Газель" width={256} height={144} className="object-contain rounded-lg" />
              </div>
              <p className="font-semibold text-gray-800 mb-2">Газель</p>
              <ul className="list-disc list-inside text-left text-sm text-gray-600 space-y-1">
                <li>Вес груза до 2 тонн</li>
                <li>Длина груза до 6 метров</li>
              </ul>
            </div>

            {/* Транспортное средство 2 */}
            <div className="bg-gray-50 rounded-lg p-4 shadow-md flex flex-col items-center text-center border border-gray-200">
              <div className="deliver-img mb-3">
                <Image src="/delivery/auto5t.jpg" alt="Бортовой авто до 5 т" width={256} height={144} className="object-contain rounded-lg" />
              </div>
              <p className="font-semibold text-gray-800 mb-2">Бортовой авто до 5 т</p>
              <ul className="list-disc list-inside text-left text-sm text-gray-600 space-y-1">
                <li>Вес груза до 5 тонн</li>
                <li>Длина груза до 7 метров</li>
              </ul>
            </div>

            {/* Транспортное средство 3 */}
            <div className="bg-gray-50 rounded-lg p-4 shadow-md flex flex-col items-center text-center border border-gray-200">
              <div className="deliver-img mb-3">
                <Image src="/delivery/auto10t.jpg" alt="Бортовой авто до 10 т" width={256} height={144} className="object-contain rounded-lg" />
              </div>
              <p className="font-semibold text-gray-800 mb-2">Бортовой авто до 10 т</p>
              <ul className="list-disc list-inside text-left text-sm text-gray-600 space-y-1">
                <li>Вес груза до 10 тонн</li>
                <li>Длина груза до 9 метров</li>
              </ul>
            </div>

            {/* Транспортное средство 4 */}
            <div className="bg-gray-50 rounded-lg p-4 shadow-md flex flex-col items-center text-center border border-gray-200">
              <div className="deliver-img mb-3">
                <Image src="/delivery/shalanda.jpg" alt="Шаланда" width={256} height={144} className="object-contain rounded-lg" />
              </div>
              <p className="font-semibold text-gray-800 mb-2">Шаланда</p>
              <ul className="list-disc list-inside text-left text-sm text-gray-600 space-y-1">
                <li>Вес груза до 20 тонн</li>
                <li>Длина груза до 12 метров</li>
              </ul>
            </div>

            {/* Транспортное средство 5 */}
            <div className="bg-gray-50 rounded-lg p-4 shadow-md flex flex-col items-center text-center border border-gray-200">
              <div className="deliver-img mb-3">
                <Image src="/delivery/crane.jpg" alt="Манипулятор" width={256} height={144} className="object-contain rounded-lg" />
              </div>
              <p className="font-semibold text-gray-800 mb-2">Автокран</p>
              <ul className="list-disc list-inside text-left text-sm text-gray-600 space-y-1">
                <li>Вес груза до 20 т</li>
                <li>Длина груза до 12 метров</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">

                <div>
                    {/* СКОРОСТЬ И МЕТОДЫ ДОСТАВКИ */}
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">Гибкая логистика и расчет стоимости</h3>
                    <p className="text-gray-700">
                        Окончательная стоимость транспортировки рассчитывается индивидуально, исходя из веса, габаритов вашего груза и удаленности объекта от наших складских комплексов. Мы используем как отечественный, так и зарубежный автотранспорт для маршрутов любой дальности, обеспечивая оптимальные затраты и скорость. Наш автопарк полностью оснащен для работы со стандартными и нестандартными грузами.
                    </p>
                </div>

                <div>
                    {/* ГАРАНТИИ ПРИ ТРАНСПОРТИРОВКЕ */}
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">Надежные гарантии при транспортировке</h3>
                    <p className="text-gray-700">
                        Мы — специалисты по поставкам металлопроката и крупногабаритных изделий. Гарантируем строгое соблюдение оговоренных сроков. Обслуживаем Санкт-Петербург, Ленинградскую область, а также регионы РФ, работая с любыми объемами. <br/><br/><span className="font-semibold text-orange-500">Благодаря GPS-мониторингу мы полностью контролируем процесс от склада до объекта.</span>
                    </p>
                </div>

                <div>
                    {/* ВЫГОДЫ СОТРУДНИЧЕСТВА */}
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">Ваши выгоды от работы с нашей логистикой</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                        <li>Оформление сопроводительных документов и оперативная комплектация.</li>
                        <li>Транспортные средства оснащены современными системами контроля и навигации.</li>
                        <li>Доставка осуществляется точно в установленные сроки, без задержек.</li>
                        <li>Профессиональная команда логистов и водителей с большим опытом.</li>
                    </ul>
                </div>
                
            </div>
            
            <p className="text-lg text-gray-700 mb-4 max-w-4xl mx-auto mt-6 text-center font-bold">
                Готовы начать работу? Отправьте нам заявку онлайн или позвоните, чтобы оформить заказ металлопроката с доставкой.
            </p>

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

      {/* 9. ФОРМА ЗАЯВКИ (ПОВТОРНЫЙ CTA) */}
      <section id="form-section" className="py-12 bg-white">
        <iframe
          name="hidden_iframe"
          id="hidden_iframe"
          style={{display: 'none'}}
          onLoad={() => {
            if (window.submitted) {
              window.showModal();
            }
          }}
        ></iframe>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Подбор, проверка, закупка и доставка — под ключ, с экономией времени и денег.
          </h2>
          <div className="max-w-xl mx-auto bg-gray-100 rounded-lg p-8 shadow-xl">
            <h3 className="text-xl font-bold text-gray-700 mb-6 text-center">Оставьте заявку и получите индивидуальное предложение!</h3>
            <form
              action="https://docs.google.com/forms/d/e/1FAIpQLScbKc9wLUvQu0z1KiK25fbKaBOxCcBWRyh0qRW6a9qGavUkJA/formResponse"
              method="POST"
              target="hidden_iframe" 
              id="application-form" 
              onSubmit={handleSubmit} 
            >
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                  Ваше имя
                </label>
                <input
                  type="text"
                  id="name"
                  name="entry.1528700688"
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
                  name="entry.1670336035"
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
                  name="entry.1738893678"
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
        {isModalOpen && (
          <div id="successModal" className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-2xl max-w-sm w-full text-center">
              <div className="text-green-500 mb-4">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Спасибо за заявку!</h3>
              <p className="text-gray-600 mb-6">Ваш ответ записан. Наш менеджер свяжется с вами в ближайшее время.</p>
              <button onClick={window.closeModal} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition duration-200">
                Закрыть
              </button>
            </div>
          </div>
        )}
      </section>

      

      {/* 11. КОНТАКТЫ */}
      <section id="contacts-section" className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Свяжитесь с нами
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 bg-white p-6 md:p-10 rounded-xl shadow-2xl border-t-4 border-orange-500">
            
            {/* КОЛОНКА 1: КОНТАКТНЫЕ ДАННЫЕ (ОСТАВЛЯЕМ БЕЗ ИЗМЕНЕНИЙ) */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Отдел продаж</h3>
              
              <div className="space-y-6">
                {/* ТЕЛЕФОН */}
                <div className="flex items-start space-x-4 p-3 bg-gray-50 rounded-lg">
                  <Image 
                    src="/contacts/telephone.png" 
                    alt="Иконка телефона" 
                    width={64} 
                    height={64} 
                    className="w-8 h-8 flex-shrink-0 mt-1"
                  />
                  <div className="text-left">
                    <p className="text-gray-700 text-base font-medium">Телефон (только звонки):</p>
                    <a href="tel:+79685281206" className="text-2xl text-orange-500 font-bold hover:underline">
                      +7 (968) 528-12-06
                    </a>
                  </div>
                </div>
                
                {/* WHATSAPP */}
                <div className="flex items-start space-x-4 p-3 bg-gray-50 rounded-lg">
                  <Image 
                    src="/contacts/WhatsApp.png" 
                    alt="Иконка WhatsApp" 
                    width={64} 
                    height={64} 
                    className="w-8 h-8 flex-shrink-0 mt-1" 
                  />
                  <div className="text-left">
                    <p className="text-gray-700 text-base font-medium">WhatsApp:</p>
                    <a href="https://wa.me/79500265208" target="_blank" rel="noopener noreferrer" className="text-2xl text-orange-500 font-bold hover:underline">
                      +7 (950) 026-52-08
                    </a>
                  </div>
                </div>
                
                {/* EMAIL */}
                <div className="flex items-start space-x-4 p-3 bg-gray-50 rounded-lg">
                  <Image 
                    src="/contacts/email.png" 
                    alt="Иконка Email" 
                    width={64} 
                    height={64} 
                    className="w-8 h-8 flex-shrink-0 mt-1" 
                  />
                  <div className="text-left">
                    <p className="text-gray-700 text-base font-medium">Email для заявок:</p>
                    <a href="mailto:infosales@td-sts.bizml.ru" className="text-xl text-orange-500 font-bold hover:underline">
                      infosales@td-sts.bizml.ru
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* КОЛОНКА 2: РЕЖИМ РАБОТЫ / СКЛАД (Сделано как карточки) */}
            <div className="h-full text-gray-800">
              <h3 className="text-2xl font-bold mb-6">Режим работы и логистика</h3>

              <div className="space-y-6">
                
                {/* ОФИС ПРОДАЖ */}
                <div className="flex items-start space-x-4 p-3 bg-gray-50 rounded-lg shadow-sm">
                  <Image
                    src="/contacts/clock.png"
                    alt="Иконка часов"
                    width={64}
                    height={64}
                    className="w-8 h-8 flex-shrink-0 mt-1"
                  />
                  <div className="text-left">
                    <p className="text-gray-700 text-base font-medium">Офис продаж (заявки и консультации):</p>
                    <p className="text-xl font-bold">Пн – Пт: <span className="text-orange-500" >9:00 – 19:00</span></p>
                    <p className="text-xl font-bold">Сб: <span className="text-orange-500" >9:00 – 15:00</span></p>
                    <p className="text-xl font-bold">Вс: <span className="text-orange-500" >выходной</span></p>
                  </div>
                </div>

                {/* ОТГРУЗКА СО СКЛАДА */}
                <div className="flex items-start space-x-4 p-3 bg-gray-50 rounded-lg shadow-sm">
                  <Image
                    src="/contacts/warehouse.png"
                    alt="Иконка склада"
                    width={64}
                    height={64}
                    className="w-8 h-8 flex-shrink-0 mt-1"
                  />
                  <div className="text-left">
                    <p className="text-gray-700 text-base font-medium">Отгрузка со склада (самовывоз):</p>
                    <p className="text-xl font-bold">Пн – Пт: <span className="text-orange-500" >9:00 – 19:00</span></p>
                    <p className="text-xl font-bold">Сб: <span className="text-orange-500" >9:00 – 15:00</span></p>
                    <p className="text-xl font-bold">Вс: <span className="text-orange-500" >выходной</span></p>
                    <p className="text-orange-500 text-base italic font-semibold">Согласуйте время приезда заранее.</p>
                  </div>
                </div>

              </div>
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