import styled from "styled-components";
const Ulstyle = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;
const Listyle = styled.li`
  list-style: none;
  border: 1px solid #ccc;
  padding: 10px;
  box-sizing: border-box;
`;
export default function App() {
  const students = [
    { name: "Alice", age: 17, grade: "A" },
    { name: "Bob", age: 18, grade: "B" },
    { name: "Charlie", age: 16, grade: "C" },
    { name: "Diana", age: 19, grade: "D" },
  ];

  // TODO: filter를 사용하여 18세 이상의 학생들만 선택하세요.
  const filteredStudents = students.filter((studen) => studen.age >= 18);

  const handleClickName = (studen) => {
    console.log(studen);

    alert(
      `이름 : ${studen.name}, 나이 : ${studen.age}, 등급 : ${studen.grade}`
    );
  };

  return (
    <div>
      <h1>학생 목록</h1>
      <Ulstyle>
        {/* TODO: map을 사용해서 filteredStudents를 여기에 렌더링하세요. */}
        {filteredStudents.map((studen) => (
          <Listyle>
            <h3
              style={{ cursor: "pointer" }}
              onClick={() => {
                handleClickName(studen);
              }}
            >
              이름 : {studen.name}
            </h3>
            <h3>나이 : {studen.age}</h3>
            <h3>등급 : {studen.grade}</h3>
          </Listyle>
        ))}
        {/* TODO: 학생이름을 클릭하면 나이와 점수가 alert 돼야 해요.*/}
      </Ulstyle>
    </div>
  );
}
