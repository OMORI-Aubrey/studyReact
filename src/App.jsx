import './App.css'

function MyButton() {
  /* React 앱은 컴포넌트로 구성됩니다.
  컴포넌트는 고유한 로직과 모양을 가진 사용자 인터페이스 UI의 일부입니다. */
  return (
    <button>버튼</button>
  )
}

function AboutPage() {
  return (
    <> {/*이렇게*/}
      <h1>여러 개의 태그를 반환할 수 없음</h1>
      <p>div 또는 빈 태그로 감싸야함</p>
      <p>br 같은 애들도 <br /> 항상 닫아야함</p>
    </>
  )
}


function App() {
  return (
    <div>
      <h1>리액트에 온걸 환영한다</h1>
      <MyButton /> {/*컴포넌트는 항상 대문자로 시작*/}
      <hr />
      <AboutPage />
      <hr />
      <img className='avatar' /> {/*HTML에 class가 여기서는 className*/}
    </div>
  );
}

export default App
