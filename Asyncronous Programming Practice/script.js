// function task(task, callback) {
//   console.log(`${task} is staring.`);
//   setTimeout(() => {
//     console.log(`${task} is done.`);
//     callback();
//   }, 2000);
// }

// function callbackFunction() {
//     console.log("Callback function");
// }

// task("Hello World", callbackFunction);

// function task1(callback) {
//   setTimeout(() => {
//     console.log("Task 1 done!");
//     callback();
//   }, 2000);
// }

// function task2(callback) {
//   setTimeout(() => {
//     console.log("Task 2 done!");
//     callback();
//   }, 2000);
// }

// function task3(callback) {
//   setTimeout(() => {
//     console.log("Task 3 done!");
//     callback();
//   }, 2000);
// }

// function task4(callback) {
//   setTimeout(() => {
//     console.log("Task 4 done!");
//     callback();
//   }, 2000);
// }

// function task5(callback) {
//   setTimeout(() => {
//     console.log("Task 5 done!");
//     callback();
//   }, 2000);
// }

// function task6(callback) {
//   setTimeout(() => {
//     console.log("Task 6 done!");
//     callback();
//   }, 2000);
// }

// function task7(callback) {
//   setTimeout(() => {
//     console.log("Task 7 done!");
//     callback();
//   }, 2000);
// }

// function task8(callback) {
//   setTimeout(() => {
//     console.log("Task 8 done!");
//     callback();
//   }, 2000);
// }

// function task9(callback) {
//   setTimeout(() => {
//     console.log("Task 9 done!");
//     callback();
//   }, 2000);
// }

// function task10(callback) {
//   setTimeout(() => {
//     console.log("Task 10 done!");
//     callback();
//   }, 2000);
// }

// task1(() => {
//   task2(() => {
//     task3(() => {
//       task4(() => {
//         task5(() => {
//           task6(() => {
//             task7(() => {
//               task8(() => {
//                 task9(() => {
//                   task10(() => {
//                     console.log("All Tasks done!");
//                   });
//                 });
//               });
//             });
//           });
//         });
//       });
//     });
//   });
// });

// function task1() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Task 1 done!");
//       resolve();
//     }, 2000);
//   });
// }

// function task2() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Task 2 done!");
//       resolve();
//     }, 2000);
//   });
// }

// function task3() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Task 3 done!");
//       resolve();
//     }, 2000);
//   });
// }

// function task4() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Task 4 done!");
//       resolve();
//     }, 2000);
//   });
// }

// function task5() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Task 5 done!");
//       resolve();
//     }, 2000);
//   });
// }

// function task6() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Task 6 done!");
//       resolve();
//     }, 2000);
//   });
// }

// function task7() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Task 7 done!");
//       resolve();
//     }, 2000);
//   });
// }

// function task8() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Task 8 done!");
//       resolve();
//     }, 2000);
//   });
// }

// function task9() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Task 9 done!");
//       resolve();
//     }, 2000);
//   });
// }

// function task10() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Task 10 done!");
//       resolve();
//     }, 2000);
//   });
// }

// task1()
//   .then(task2)
//   .then(task3)
//   .then(task4)
//   .then(task5)
//   .then(task6)
//   .then(task7)
//   .then(task8)
//   .then(task9)
//   .then(task10)
//   .then(() => {
//     console.log("All tasks done!");
//   })
//   .catch((error) => {
//     console.log(Error);
//   });

function fetchUserData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const userData = { id: 1, name: "John Doe" };
      console.log("User data fetched!");
      resolve();
    }, 2000);
  });
}

function validateUserData(userData) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("User data Validated!");
            resolve({...userData, isValid: true});
        }, 2000);
    });
}

function saveUserData(userData) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("User data saves!");
            resolve({...userData, isSaved: true});
        }, 2000);
    });
}

async function runTasks() {
    try {
        console.log("Starting tasks...");

        const userData = await fetchUserData();
        console.log("Fetched data: ", userData);

        const validateData = await validateUserData();
        console.log("Data validated: ", validateData);

        const saveData = await saveUserData();
        console.log("Save data: ", saveData);

        console.log("All tasks completed!");
    }
    catch(error) {
        console.log("Something went wrong!", Error);
    }
}

runTasks();