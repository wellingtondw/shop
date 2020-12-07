export default function (value: number): string {
  let convertedValue = String(value);

  convertedValue = convertedValue.replace(/\D/g, '');
  convertedValue = `${(Number(convertedValue) / 100).toFixed(2)}`;
  convertedValue = convertedValue.replace('.', ',');
  convertedValue = convertedValue.replace(/(\d)(\d{3})(\d{3}),/g, '$1.$2.$3,');
  convertedValue = convertedValue.replace(/(\d)(\d{3}),/g, '$1.$2,');

  return convertedValue;
}
