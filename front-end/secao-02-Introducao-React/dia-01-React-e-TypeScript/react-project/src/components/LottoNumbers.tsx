type NumbersProps = {
  numbers: number[];
};
function LottoNumbers({ numbers }: NumbersProps) {
  return (
    <>
      {numbers.length === 6 ? (
        <>
          <h3>Os números sorteados são:</h3>
          <ul>
            {numbers.map((numero: number) => (
              <li key={numero}>{numero}</li>
            ))}
          </ul>
        </>
      ) : (
        <h3>Erro: a lista não contém 6 números</h3>
      )}
    </>
  );
}

export default LottoNumbers;