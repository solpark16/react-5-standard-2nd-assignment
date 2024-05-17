# 스탠다드반 2nd 과제

### 요구사항

1. 입문개인과제와 동일한 형태의 TodoList를 처음부터 아무것도 참조하지 않고 스스로의 힘으로 진행합니다.

   a. **[디자인이 없는]** TodoList를 만듭니다.

   > ✅ **꼭 디자인이 없어야 하나요?**
   > 아닙니다. 빠르게 구조만 만들어보실 수 있게 하기 위해서 디자인을 최소화하도록 안내했습니다.

2. 상세요구사항은 다음과 같습니다.
   - state 구조
     ```jsx
     // id는 unique하게 만들어주세요.
     const [todos, setTodos] = useState([{
     	id: ~,
     	title: ~,
     	contents: ~,
     	isDone: false,
     }]);
     ```
   - 컴포넌트 구조
     > ✅ TodoList의 기본적인 동작은 기존 개인과제와 동일하게 구현해주세요.
     > 더불어, 해설강의에서 보신 대로 컴포넌트를 기능/역할 별로 쪼개어 하나의 파일에서 하나의 컴포넌트를 관리할 수 있게 해주세요.
     - App.jsx (예시)
       - TodoContainer.jsx (TodoContainer는 생략해도 좋습니다.)
         - TodoForm.jsx
         - TodoList.jsx
           - TodoItem.jsx

### 제출 기한

2024.05.20 (월) 12시
