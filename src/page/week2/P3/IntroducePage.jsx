import Introduce from "./Introduce";

export function IntroducePage() {
  const data = {
    name: "조건희",
    department: "ICT융합학부",
    studentId: "202204133",
    major: "소프트웨어 전공",
    minor: "가상현실 전공",
    email: "rjsgml771@naver.com",
    interesting: ["Web", "Frontend", "Backend", "App", "React Native"],
  };

  return <Introduce props={data} />;
}
