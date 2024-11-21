import './App.css';
import styled from 'styled-components';
import { AttributesProvider } from './hooks/useAttributes';
import ClassTable from './components/ClassTable';
import AttributesTable from './components/AttributesTable';
import SkillsTable from './components/SkillsTable';

const TableContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Character Sheet</h1>
      </header>
      <section className="App-section">
        <AttributesProvider>
          <TableContainer>
            <AttributesTable />
            <ClassTable />
            <SkillsTable />
          </TableContainer>
        </AttributesProvider>
      </section>
    </div>
  );
}

export default App;
