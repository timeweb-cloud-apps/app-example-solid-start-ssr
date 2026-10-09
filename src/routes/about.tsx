import { Title } from "@solidjs/meta";

export default function About() {
  return (
    <>
      <Title>О проекте — SolidStart SSR</Title>
      <h1>О проекте</h1>
      <p>
        Базовое приложение на{" "}
        <a href="https://start.solidjs.com" target="_blank" rel="noopener noreferrer">
          SolidStart
        </a>{" "}
        с серверным рендерингом. Сервер собирается Nitro с пресетом <code>node-server</code>, маршруты
        из папки <code>src/routes/</code> подключаются автоматически.
      </p>
    </>
  );
}
