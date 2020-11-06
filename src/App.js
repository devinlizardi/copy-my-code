import './App.css';
import CopyCode from './CopyCode';

function App(props) {
  return (
    <CopyCode
      title="Testing Write"
      >
      {
        `class Main {
        public static void main(String[] args) {
          String hello = "world";
          Lower brad = new Lower();

          brad.riseUp();
        }
      }
      
      class Lower {
        private int population = 1;
        private String[] names = ["bilbo", "bobo"];

        public void riseUp() {
          population++;
          names.push("bob");
        }
      }`
      }
      </CopyCode>
  );
}

export default App;