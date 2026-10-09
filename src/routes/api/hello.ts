export function GET() {
  return Response.json({
    message: "Привет с API SolidStart (выполняется на сервере)",
    at: new Date().toISOString()
  });
}
