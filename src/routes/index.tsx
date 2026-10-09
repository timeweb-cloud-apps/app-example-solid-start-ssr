import { Title } from "@solidjs/meta";
import { createAsync, query, type RouteDefinition } from "@solidjs/router";
import { getRequestEvent } from "solid-js/web";

/* "use server" — функция выполняется только на сервере, в браузер уходит её результат */
const getServerInfo = query(async () => {
  "use server";
  const event = getRequestEvent();

  return {
    renderedAt: new Date().toISOString(),
    nodeVersion: process.version,
    userAgent: event?.request.headers.get("user-agent") ?? "—"
  };
}, "server-info");

export const route = {
  preload: () => getServerInfo()
} satisfies RouteDefinition;

export default function Home() {
  const info = createAsync(() => getServerInfo());

  return (
    <>
      <Title>SolidStart SSR</Title>
      <h1>Главная</h1>
      <p class="lead">Эта страница рендерится на сервере (SSR) при каждом запросе.</p>

      <dl class="info">
        <dt>Время рендера</dt>
        <dd>
          <code>{info()?.renderedAt}</code>
        </dd>
        <dt>Node.js</dt>
        <dd>
          <code>{info()?.nodeVersion}</code>
        </dd>
        <dt>User-Agent</dt>
        <dd>
          <code>{info()?.userAgent}</code>
        </dd>
      </dl>

      <p>
        Обновите страницу — время рендера изменится. Пример API-эндпоинта:{" "}
        <a href="/api/hello">/api/hello</a>.
      </p>
    </>
  );
}
