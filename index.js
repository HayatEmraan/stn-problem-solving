// 1.Task: Array Filtering And Mapping

const arr = [
  {
    name: "hayat",
    age: 17,
    gender: "male",
  },
  {
    name: "nabila",
    age: 18,
    gender: "female",
  },
  {
    name: "jibon",
    age: 29,
    gender: "male",
  },
  {
    name: "habibur",
    age: 22,
    gender: "male",
  },
  {
    name: "sabina",
    age: 27,
    gender: "female",
  },
];

const filterOutFemale = (arr) => {
  const onlyMale = arr.filter((human) => human.gender === "male");
  const onlyName = onlyMale.map((male) => {
    return male.name;
  });

  console.log(onlyName);
};

filterOutFemale(arr);

// 2.Task: Object Manipulation

const bookArr = [
  {
    title: "shapla",
    author: "amzal",
    year: 2022,
  },
  {
    title: "lili",
    author: "jafor",
    year: 2020,
  },
  {
    title: "golap",
    author: "nabil",
    year: 2021,
  },
  {
    title: "geo",
    author: "vc. john",
    year: 2024,
  },
];

const onlyBookTitle = (arr) => {
  console.log(
    arr.map((book) => {
      return book.title;
    })
  );
};

onlyBookTitle(bookArr);

// 4.Task: Sorting Objects

const carArr = [
  {
    make: "bmw",
    model: "bwm-001",
    year: 2000,
  },
  {
    make: "tata",
    model: "tata-0m1",
    year: 2001,
  },
  {
    make: "audi",
    model: "audi-vw",
    year: 1998,
  },
  {
    make: "mercedes-benz",
    model: "mercedes-suv",
    year: 2003,
  },
];

const sortingCarByYear = (arr) => {
  const sortingCar = arr.sort((current, previous) => {
    return current.year - previous.year;
  });

  console.log(sortingCar);
};

sortingCarByYear(carArr);

// 6.Task: Array Reduction

const numArr = [1, 2, 4, 9, 5, 2, 4, 19, 11];

const sumEvenNumbers = (numbers) => {
  console.log(
    numbers.reduce((accumulator, currentValue) => {
      if (currentValue % 2 === 0) {
        return accumulator + currentValue;
      } else {
        return accumulator;
      }
    }, 0)
  );
};

sumEvenNumbers(numArr);


// 7.  Task: Leap Year Checker

const leapYearChecker = (year) => {
  const calculate = year % 4 === 0;
  if (calculate) {
    console.log("Happy Leap Year");
  } else {
    console.log(`${year} not a leap year`);
  }
};

leapYearChecker(2024);
