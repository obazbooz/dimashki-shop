import app from './index.js';
import { port } from './index.js';

app.listen(port, () => {
  console.log(`Server is started on port ${port}`);
});
