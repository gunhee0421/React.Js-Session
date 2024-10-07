function fetchData(callback) {
  // 2초 후에 데이터를 반환하는 비동기 작업
  setTimeout(() => {
    const data = { id: 1, name: "John Doe" };
    callback(data); // 비동기 작업이 완료되면 콜백 함수 호출
  }, 2000);
}

// fetchData 호출 시 콜백 함수 전달
fetchData((data) => {
  console.log("데이터를 받았습니다:", data);
});
