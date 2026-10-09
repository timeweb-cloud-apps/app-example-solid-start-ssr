![SolidStart Logo](https://st.timeweb.com/cloud-static/apps-logo/solid.svg)

# SolidStart SSR

Пример приложения [SolidStart](https://start.solidjs.com/) с серверным рендерингом (SSR), которое можно развернуть в **Timeweb Cloud Apps** без настройки.

:tada: [Демо]

:rocket: [Создать свой Apps](https://timeweb.cloud/my/apps/create)

:books: [Документация Timeweb Cloud Apps](https://timeweb.cloud/docs/apps)

## Параметры деплоя

При создании приложения включите поддержку SSR — оно развернётся как backend на Node.js.

| Параметр        | Значение                       |
| --------------- | ------------------------------ |
| Фреймворк       | SolidStart, SSR включён        |
| Версия Node.js  | 24                             |
| Команда сборки  | `npm run build`                |
| Команда запуска | `node .output/server/index.mjs` |

Сервер собирается Nitro с пресетом `node-server` (см. `vite.config.ts`) и слушает все интерфейсы. Порт по умолчанию — `3000`, его можно изменить переменной окружения `PORT`.

Статическая версия — [app-example-solid-start](https://github.com/timeweb-cloud-apps/app-example-solid-start).

## Что показывает пример

- `/` — страница рендерится на сервере при каждом запросе: время рендера, версия Node.js и `User-Agent` приходят из серверной функции (`"use server"`) и уже подставлены в HTML.
- `/about` — вторая страница приложения.
- `/api/hello` — API-эндпоинт, отдаёт JSON.

## <a name="dev"></a>Локальный запуск проекта

```bash
# установка зависимостей
npm install

# запуск в дев режиме с отслеживанием изменений
npm run dev

# сборка для продакшн
npm run build

# запуск собранного приложения
npm run start
```

SolidStart 2 официально поддерживает Node.js 24 и новее.
