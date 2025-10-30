import './App.css'

function MyButton() {
  /* React 앱은 컴포넌트로 구성됩니다.
  컴포넌트는 고유한 로직과 모양을 가진 사용자 인터페이스 UI의 일부입니다. */
  return (
    <button>버튼</button>
  )
}

function App() {
  return (
    <div>
      <h1>리액트에 온걸 환영한다</h1>
      <MyButton /> {/*컴포넌트는 항상 대문자로 시작*/}
    </div>
  );
}

export default App
