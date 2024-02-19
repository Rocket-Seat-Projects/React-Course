Sempre que for atualizar uma informação, e ela depender dela mesmo é sempre legal fazer pegando o valor anterior da variavel

```js
const [valorASerUtilizado, setValorASerUtilizado] = useState(0);

const function = () => {
    setValorASerUtilizado((state) => {
        state + 1;
    })
};

Dessa forma como está ai em cima ele vai aumentar de dois em dois, pois state é o ultimo valor e o + 1 é o valor a ser acrescentado depois da atulização de contexto.

```