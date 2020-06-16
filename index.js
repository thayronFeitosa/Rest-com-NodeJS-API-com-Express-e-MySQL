const custonExpress = require('./config/custonExpress');

const app = custonExpress();
app.listen(3000, () => console.log('Servidor rorando na porta 3000'))