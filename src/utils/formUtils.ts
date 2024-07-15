export const formatCPF = (value: string) => {
  const cleanedValue = value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos

  let formattedValue = '';
  for (let i = 0; i < cleanedValue.length && i < 11; i++) {
    if (i === 3 || i === 6) {
      formattedValue += '.';
    } else if (i === 9) {
      formattedValue += '-';
    }
    formattedValue += cleanedValue[i];
  }

  return formattedValue;
};

export const formatExpirationDate = (value: string) => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1/$2')
    .slice(0, 5);
};

export const formatCVV = (value: string) => {
  return value.replace(/\D/g, '').slice(0, 3);
};

export const formatCreditCardNumber = (value: string) => {
  return value
    .replace(/\D/g, '') // Remove todos os caracteres não numéricos
    .slice(0, 16) // Limita a 16 dígitos
    .replace(/(\d{4})(?=\d)/g, '$1 ') // Adiciona espaço a cada 4 dígitos
    .trim();
};
