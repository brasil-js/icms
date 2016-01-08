# icms
Tabela de ICMS interno e interestadual em javascript

[![Build Status](https://drone.io/github.com/brasil-js/icms/status.png)](https://drone.io/github.com/brasil-js/icms/latest)

### Instalação

```bash
npm install --save icms
```

### Utilização

```javascript
var icms = require('icms'),
    aliquotaDfGo = icms('df', 'go'),
    aliquotaInternaDf = icms('df');

console.log(aliquotaDfGo); // 12
console.log(aliquotaInternaDf); // 18
```

### Atenção

A alíquota interna do RJ era 19% considerando 1% de FCP (Fundo de combate a pobreza). Preferi deixar a alíquota como 18% já que a partir de 01/01/2016 a FCP será destacada na NF-e.

### Licença MIT