# Академия маникюра | Сайт-визитка

Современный адаптивный сайт для Академии маникюра Хамитовой Нины.

## Структура проекта

```
windsurf-project/
├── index.html          # Главная страница
├── styles.css          # Стили (неоновая тема)
├── app.js              # Интерактивность
├── netlify.toml        # Конфигурация Netlify
├── _redirects          # Правила редиректов
├── logo.png            # Логотип
├── 1.jpg, 2.jpg        # Изображения для секций
├── banners/            # Баннеры
│   ├── T-banner Photo stroke.png  # Верхний баннер
│   └── T-banner Photo long.png    # Нижний баннер
└── carousel/           # Фото работ учеников (p1-p10.jpg)
    ├── p1.jpg
    ├── p2.jpg
    ├── ...
    └── p10.jpg
```

## Функции

- Неоновая цветовая схема (розовый/фиолетовый/голубой)
- Адаптивный дизайн (mobile + desktop)
- Карусель работ учеников (10 слайдов)
- Эффект overlap между секциями
- Липкая навигация с логотипом

## Деплой на Netlify

### Способ 1: Через интерфейс

1. Зайдите на [netlify.com](https://netlify.com)
2. Нажмите "Add new site" → "Deploy manually"
3. Перетащите папку `windsurf-project` в браузер
4. Сайт будет доступен по URL вида `https://xyz-abc.netlify.app`

### Способ 2: Через Git

1. Инициализируйте git репозиторий:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. Загрузите на GitHub/GitLab

3. В Netlify выберите "Import from Git"

### Способ 3: Netlify CLI

```bash
# Установите CLI
npm install -g netlify-cli

# Войдите
netlify login

# Деплой
netlify deploy --prod --dir=.
```

## Настройка домена (опционально)

1. В Netlify Dashboard → Site settings → Domain management
2. "Add custom domain"
3. Следуйте инструкциям по настройке DNS

## Контакты

Хамитова Нина Геннадьевна  
Академия маникюра

