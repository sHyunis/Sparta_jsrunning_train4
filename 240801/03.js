// 1.
const obj1 = {
  value: 20,
  getValue() {
    obj1.value;
  },
};

console.log(obj1.value); //  출력값 20

// 2. this는 setTimeout()함수에서 예외없이 기본 binding 되기 때문에
const obj2 = {
  method: function () {
    console.log("첫번째 this : ", this);

    const innerMethod = () => {
      setTimeout(function () {
        console.log("두번째 this : ", this);
      });
    };
    innerMethod();
  },
};

obj2.method();
