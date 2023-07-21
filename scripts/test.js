const { ethers, upgrades } = require("hardhat");

async function main() {
  // 배포된 스마트 계약의 주소를 입력하세요.
  const contractAddress = "0x28F5d59d45C0F4279a05811C3F2E6Ac5E8de4315";

  // 스마트 계약의 인터페이스를 가져옵니다.
  const Contract = await ethers.getContractFactory("PredictGame");
  const contract = Contract.attach(contractAddress);

  // 스마트 계약의 함수를 호출합니다.
  //const name = "Alice"; // 예시로 "Alice"를 전달했습니다.
  const result = await contract.get4DaysTimestamps();

 // console.log("get4DaysTimestamps function result:", result); 
  console.log("get4DaysTimestamps function result:", result.map((num) => num.toString()));

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
