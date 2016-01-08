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

### Licença MIT