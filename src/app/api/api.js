export const fetchUsdtValue = async () => {
  const response = await fetch("https://criptoya.com/api/fiwind/usdt/ars/1");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data;
};
