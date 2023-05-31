
const { removeItem, myFizzBuzz, encode, decode, techList, hydrate } = require('./script');

describe('Exercicio 1', () => {
  test('Verifique se a chamada removeItem([1, 2, 3, 4], 3) retorna o array esperado.', () => {
    expect(removeItem([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  test('Verifique se a chamada removeItem([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4].', () => {
    expect(removeItem([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  test('Verifique se a chamada removeItem([1, 2, 3, 4], 5) retorna o array esperado.', () => {
    expect(removeItem([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});

describe('Exercicio 2', () => {
  test('Caso num seja um número divisível por 3 e 5, a função retorna "fizzbuzz".', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  })
  test('Caso num seja um número divisível por 3, a função retorna "fizz".', () => {
    expect(myFizzBuzz(3)).toBe('fizz');
  });
  test('Caso num seja um número divisível por 5, a função retorna "buzz".', () => {
    expect(myFizzBuzz(5)).toBe('buzz');
  });
  test('Caso num seja um número que não é divisível nem por 3 nem por 5, a função retorna o próprio número num.', () => {
    expect(myFizzBuzz(1)).toBe(1);
  });
  test('Caso num não seja um número, a função retorna false.', () => {
    expect(myFizzBuzz('2')).toBeFalsy();
  });
});

// encodeDecode.test.js

// const { encode, decode } = require('./encodeDecode.js');

describe('Exercicio 3', () => {
  test('encode é uma função', () => {
    expect(typeof encode).toEqual('function');
  });
  test('converte apenas a vogal "a" no número 1', () => {
    expect(encode('ana')).toEqual('1n1');
  });
  test('converte a vogal "e" no número 2', () => {
    expect(encode('ele')).toEqual('2l2');
  });
  test('converte a vogal "i" no número 3', () => {
    expect(encode('xixi')).toEqual('x3x3');
  });
  test('converte a vogal "o" no número 4', () => {
    expect(encode('ovo')).toEqual('4v4');
  });
  test('converte a vogal "u" no número 5', () => {
    expect(encode('nu')).toEqual('n5');
  });
  test('checa se o retorno da função tem o mesmo número de caracteres', () => {
    expect(encode('trybe').length).toEqual(5);
  });

  test('decode é uma função', () => {
    expect(typeof decode).toEqual('function');
  });
  test('converte apenas o número 1 na vogal a', () => {
    expect(decode('1n1')).toEqual('ana');
  });
  test('converte apenas o número 2 na vogal e', () => {
    expect(decode('2l2')).toEqual('ele');
  });
  test('converte apenas o número 3 na vogal i', () => {
    expect(decode('x3x3')).toEqual('xixi');
  });
  test('converte apenas o número 4 na vogal o', () => {
    expect(decode('4v4')).toEqual('ovo');
  });
  test('converte apenas o número 5 na vogal u', () => {
    expect(decode('n5')).toEqual('nu');
  });
  test('checa se o retorno da função tem o mesmo número de caracteres', () => {
    expect(decode('trybe').length).toEqual(5);
  });
});

// Exercicio 4- techList

describe('Exercicio 4', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologia deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

// Exercicio 5- hydrate

describe('Exercicio 5', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cerveja e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});