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


const user = {
  name: 'JaeYun',
  imageUrl: 'https://via.placeholder.com/150',
  imageSize: 90,
};

function Profile() {

  return (
    <>
      <h1>{user.name}</h1> { /*값 넣기는 이렇게*/}

      {/*HTML에 class가 여기서는 className*/}
      <img className="avatar"
        src="{user.imageUrl}"
        alt={user.name + '의 사진'}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }} />
    </>
  );
}


function AdminPanel() {
  return <h2>관리자 페이지입니다.</h2>
}

function LoginForm() {
  return <h2>로그인이 필요합니다.</h2>
}

const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

function ShoppingList() {
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}


function App() {

  /* 조건부 렌더링 */
  const isLoggedIn = false; // false로 바꿔보기


  // if문 사용
  let content;

  if (isLoggedIn) {
    content = <AdminPanel />
  }
  else {
    content = <LoginForm />
  }


  // 삼항 연산자
  const contentWithTernary = isLoggedIn ? <AdminPanel /> : <LoginForm />


  // && 연산자 (참일 때만 렌더링)
  const contentWithAnd = (
    <div>{isLoggedIn && <p>관리자만 볼 수 있는 문장입니다</p>}</div>
  )

  return (
    <div>
      <h1>리액트에 온걸 환영한다</h1>

      <MyButton /> {/*컴포넌트는 항상 대문자로 시작*/}
      <hr />

      <AboutPage />
      <hr />

      <Profile />
      <hr />

      <div style={{ marginTop: "50px" }}>
        <h1>조건부 렌더링</h1>

        <h3>if 문으로 렌더링</h3>
        {content}

        <h3>삼항 연산자로 렌더링</h3>
        {contentWithTernary}

        <h3>&& 연산자로 렌더링</h3>
        {contentWithAnd}

        <h3>리스트로 렌더링</h3>
        <ShoppingList />

      </div>
    </div>
  );
}

export default App
