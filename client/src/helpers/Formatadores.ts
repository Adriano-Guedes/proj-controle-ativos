export const formatarData = (dataStr: string): string => {
  const data = new Date(dataStr);
  if (isNaN(data.getTime())) return '';

  const dataLocal = new Date(data.getTime() + data.getTimezoneOffset() * 60000);

  const dia = String(dataLocal.getDate()).padStart(2, '0');
  const mes = String(dataLocal.getMonth() + 1).padStart(2, '0');
  const ano = dataLocal.getFullYear();

  return `${dia}/${mes}/${ano}`;
};


export const formatarMoeda = (valor: string | number): string => {
  const num = typeof valor === 'string' ? parseFloat(valor) : valor;
  if (isNaN(num)) return '';

  return num.toFixed(2).replace('.', ',');
};

export const parseDateToInputFormat = (dateString: string): string => {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return '';
  return date.toISOString().split('T')[0]; // retorna 'YYYY-MM-DD'
}
