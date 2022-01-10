import './App.css';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';


function App() {
  return(
    <Container>
        <Sidebar />
         <MainContent />
      </Container>
    )
}

const Container =  styled.div `
  display:flex;
  height:97vh;
  background: linear-gradient(to bottom right, white 0%, #218FB7 70%);
  border-radius: 1rem;

`;

export default App;
