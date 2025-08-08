export async function getMarsData() {
  const API =
    "https://api.nasa.gov/insight_weather/?api_key=ntqhmtifCFdcNfWXF0NgKufFQ5a2UBPlP0HrmEJg&feedtype=json&ver=1.0";

  const data = await fetch(`${API}`);
  const json = await data.json();
  return json;
}
