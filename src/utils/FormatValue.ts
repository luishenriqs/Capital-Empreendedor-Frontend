/**************************************************************** */
/* Função que formata os valores usados nas tabelas dessa aplicação para o
padrão de exibição da moeda brasileira. */
/**************************************************************** */

const formatValue = (value: number): string =>
  Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
export default formatValue;
