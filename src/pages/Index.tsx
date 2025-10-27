import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'portfolio', 'about', 'services', 'pricing', 'reviews', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const portfolioImages = [
    {
      url: 'https://cdn.poehali.dev/projects/62172cfa-b2d1-49fe-bf83-4c483607bb37/files/1c1c15db-66c7-489c-908c-10c5ae751fcf.jpg',
      title: 'Естественный портрет',
      category: 'Портрет'
    },
    {
      url: 'https://cdn.poehali.dev/projects/62172cfa-b2d1-49fe-bf83-4c483607bb37/files/30e2abfc-7ab0-4093-a374-b5073c5e8cbd.jpg',
      title: 'Искренние эмоции',
      category: 'Репортаж'
    },
    {
      url: 'https://cdn.poehali.dev/projects/62172cfa-b2d1-49fe-bf83-4c483607bb37/files/db118afc-3299-4a26-92e4-1e23a4f9a609.jpg',
      title: 'Love Story',
      category: 'Пары'
    }
  ];

  const services = [
    {
      icon: 'User',
      title: 'Индивидуальная фотосессия',
      description: 'Портретная съёмка, которая раскрывает вашу естественную красоту'
    },
    {
      icon: 'Users',
      title: 'Семейная съёмка',
      description: 'Искренние моменты вашей семьи в непринуждённой атмосфере'
    },
    {
      icon: 'Heart',
      title: 'Love Story',
      description: 'История вашей любви через объектив камеры'
    },
    {
      icon: 'Camera',
      title: 'Репортажная съёмка',
      description: 'События, запечатлённые во всей их живости и естественности'
    }
  ];

  const pricing = [
    {
      name: 'Индивидуальная',
      duration: '1 час',
      photos: '20-30 фото',
      price: '5 000 ₽'
    },
    {
      name: 'Семейная',
      duration: '1,5 часа',
      photos: '40-50 фото',
      price: '7 000 ₽'
    },
    {
      name: 'Love Story',
      duration: '2 часа',
      photos: '50-70 фото',
      price: '9 000 ₽'
    }
  ];

  return (
    <div className="min-h-screen bg-background font-sans">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border/40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => scrollToSection('home')}
              className="font-cormorant text-2xl font-semibold text-foreground hover:text-foreground/80 transition-colors"
            >
              Фотограф
            </button>
            <div className="hidden md:flex gap-8">
              {[
                { id: 'portfolio', label: 'Портфолио' },
                { id: 'about', label: 'Обо мне' },
                { id: 'services', label: 'Услуги' },
                { id: 'pricing', label: 'Прайс' },
                { id: 'reviews', label: 'Отзывы' },
                { id: 'contact', label: 'Контакты' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm transition-colors relative ${
                    activeSection === item.id 
                      ? 'text-foreground font-medium' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute -bottom-1 left-0 w-full h-px bg-foreground" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="font-cormorant text-5xl md:text-7xl font-light text-foreground mb-6 leading-tight">
            Хочу всю жизнь показывать людям,<br />какие они красивые
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            За естественность, непостановочность, жизнь во всех проявлениях
          </p>
          <Button 
            onClick={() => scrollToSection('portfolio')}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium"
          >
            Посмотреть работы
          </Button>
        </div>
      </section>

      <section id="portfolio" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-center mb-16">
            Портфолио
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioImages.map((image, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-sm cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-[3/4] relative">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm opacity-80 mb-1">{image.category}</p>
                  <p className="font-cormorant text-xl">{image.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-6 bg-accent/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-center mb-12">
            Обо мне
          </h2>
          <div className="max-w-3xl mx-auto space-y-6 text-muted-foreground leading-relaxed">
            <p className="text-lg font-medium text-foreground text-center">
              Фотографирую эмоционально, честно, профессионально.
            </p>
            
            <p>
              С моей подругой Еленой Трошиной на днях случился такой диалог:
            </p>
            <p className="italic pl-4 border-l-2 border-primary/30">
              Я: Как ты меня описываешь как фотографа? Тем, кто меня никогда не видел, не знает.<br />
              Лена: Для меня ты не фотограф, для меня ты человек. Человек яркий, живой, активный и позитивный. 
              Деятельный, солнечный, сопереживающий. А людям я просто говорю: «Идите к Гайке, там фотки будут настоящие».
            </p>
            
            <p>
              И вот как человек, Гайка, уже <strong>10 лет</strong> делаю то, что люблю, фотографирую: постоянно учусь, 
              развиваюсь в этом, чтобы реализовать свою суперсилу — умение видеть людей красивыми, и я сейчас не только про внешний облик.
            </p>
            
            <p className="text-center text-lg font-cormorant font-medium text-foreground py-4">
              «Хочу всю жизнь показывать людям, какие они красивые»
            </p>
            
            <p>
              Я очень люблю людей, люблю все человеческие эмоции, не только радость и улыбку. Ценю честность, естественность 
              во всех её проявлениях. Для меня важны отношения между людьми, наверное поэтому помимо индивидуальных портретов 
              мне нравится снимать истории любви родителей и детей, братьев и сестер, друзей, романтические пары, свадьбы.
            </p>
            
            <p className="font-medium text-foreground">
              Для меня не существует нефотогеничных людей.
            </p>
            
            <p>
              Больше всего люблю снимать тех, кто никогда не снимался до знакомства со мной или всегда это делал крайне редко.
              У меня каждый раз мурашки, когда снова и снова раскрепощаю людей, показываю им самих себя, помогаю запомнить 
              тот или иной период жизни, состояние, эмоции.
            </p>
            
            <p>
              При съёмке важных событий для семьи или компании включается ещё одна суперсила — умение сделать так, что люди 
              не прячутся от фотографа, не становятся деревянными и неестественными, наоборот расслабляются, ведут себя также, 
              как если бы меня не было, либо наоборот ещё более активно.
            </p>
            
            <p>
              Я могу находить общий язык одновременно с очень большим количеством людей благодаря врожденной экстраверсии, 
              эмпатии, а также большому опыту съёмок событий и фестивалей разного масштаба.
            </p>
            
            <p>
              Моя жизнь уже больше 7 лет тесно связана с общением и съёмкой людей с разной формой инвалидности. Это очень 
              помогло мне и в жизни, и в фотографии. Работы стали ещё живее и многограннее. Я узнала, что могу снимать людей 
              с ОВЗ так, что и они сами, и те, кто видят фотографии, убеждаются в безграничности их возможностей, люди начинают 
              нравиться себе на фото, хотя всю жизнь до этого не принимали своё тело.
            </p>
            
            <div className="pt-8 border-t border-border/50 text-center space-y-4">
              <p>
                Я не считаю, что мои фото как-то лучше других фотографов, и поэтому вы должны обратиться за фотосъёмкой ко мне.
              </p>
              <p className="font-medium text-foreground">
                На мой взгляд, нет никого лучше или хуже, есть только то, что откликается и то, что не откликается.
              </p>
              <p>
                И если вам нравится, сердце тук-тук на то, что я снимаю, мои фотографии, моя философия, подход, 
                если вы чувствуете, что мне бы вы доверились, то приглашаю к себе на съёмку 🧡
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-center mb-16">
            Услуги
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="p-8 border-border/50 hover:border-border transition-colors animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6">
                  <Icon name={service.icon as any} size={32} className="text-primary" />
                </div>
                <h3 className="font-cormorant text-2xl mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-24 px-6 bg-accent/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-center mb-16">
            Прайс
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <Card 
                key={index}
                className="p-8 border-border/50 hover:border-border transition-all hover:shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="font-cormorant text-3xl mb-2">{plan.name}</h3>
                <div className="text-sm text-muted-foreground mb-6 space-y-1">
                  <p>{plan.duration}</p>
                  <p>{plan.photos}</p>
                </div>
                <p className="font-cormorant text-4xl font-semibold mb-6">{plan.price}</p>
                <Button 
                  onClick={() => scrollToSection('contact')}
                  variant="outline" 
                  className="w-full"
                >
                  Забронировать
                </Button>
              </Card>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-8">
            В стоимость входит: съёмка, обработка фотографий, онлайн-галерея
          </p>
        </div>
      </section>

      <section id="reviews" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-center mb-16">
            Отзывы
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 border-border/50 hover:border-border transition-colors animate-fade-in">
              <div className="mb-6">
                <Icon name="Quote" size={32} className="text-primary/40" />
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Энергия, то живое что в тебе есть, твой подход это то, что позволяет расслабиться и не думать о результате. 
                То самое, что нужно всем, кто страдает перфекционизмом и постоянно думает о том, как он выглядит со стороны
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                  <Icon name="User" size={20} className="text-muted-foreground" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Клиент</p>
                  <p className="text-sm text-muted-foreground">Портретная съёмка</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6 bg-accent/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-8">
            Свяжитесь со мной
          </h2>
          <p className="text-muted-foreground mb-12 text-lg">
            Готов ответить на все вопросы и обсудить детали съёмки
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <a href="mailto:hello@example.com">
              <Button size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                <Icon name="Mail" size={20} />
                hello@example.com
              </Button>
            </a>
            <a href="tel:+79991234567">
              <Button size="lg" variant="outline" className="gap-2">
                <Icon name="Phone" size={20} />
                +7 (999) 123-45-67
              </Button>
            </a>
          </div>
          <div className="flex gap-6 justify-center mt-12">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Icon name="Instagram" size={24} />
            </a>
            <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Icon name="Send" size={24} />
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/40 py-8 px-6">
        <div className="max-w-7xl mx-auto text-center text-sm text-muted-foreground">
          <p>© 2024 Все права защищены</p>
        </div>
      </footer>
    </div>
  );
}