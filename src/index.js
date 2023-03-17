import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import DataTable from './components/DataTable';

const greetingMessage = <div>Hello!</div>;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<DataTable />);