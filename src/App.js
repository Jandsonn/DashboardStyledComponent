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
  display: flex;
  height: 97vh;
  background: linear-gradient(to bottom right, white 0%, #b6b9ff 70%);
  border-radius: 0.7rem;
  @media screen and (min-widht: 320px) and (max-width: 1080px){
    flex-direction: column;
  }
  
`;

export default App;
