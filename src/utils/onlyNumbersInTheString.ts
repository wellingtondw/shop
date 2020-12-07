export default function (value: string): number {
  const convertedValue = value.replace(/[^0-9]/g, '');

  return Number(convertedValue);
}
