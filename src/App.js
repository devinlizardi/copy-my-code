import './App.css';
import CopyCode from './CopyCode';

function App(props) {
  return (
    <CopyCode
      title="Testing Write"
      >
      {
        ` class Main {
            public static void main(String[] args) {
              System.out.println("Hello World!");
              private testMe = new Lower(22);
              private testYou = new Lower(23);
            }
          }

          class Lower {
            private int x;
            public static void lower(x) {
              this.x = x;
            }
          }`
      }
      </CopyCode>
  );
}

export default App;