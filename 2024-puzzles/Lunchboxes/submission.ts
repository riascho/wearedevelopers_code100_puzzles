/**
 * ------------------
 *
 * Step 1:
 * TYPE DEFINITIONS
 *
 * ------------------
 */

type Student = {
  name: string;
  age: number;
  box: string;
};

type BoxOptions = {
  [key: string]: string;
};

type Lunches = {
  boxoptions: BoxOptions;
  lunchboxes: Student[];
};

/**
 * ------------------
 *
 * GIVEN INPUT
 *
 * ------------------
 */

const input: Lunches = {
  boxoptions: {
    Fruits: "🍇🍈🍉🍊🍋🍌🍍🥭🍎🍏🍐🍑🍒🍓🫐🥝🍅🫒🥥",
    Vegetables: "🥑🍆🥔🥕🌽🌶️🫑🥒🥬🥦🧄🧅🥜🫘🌰🫚🫛🍄‍🟫",
    "Prepared Foods": "🍞🥐🥖🫓🥨🥯🥞🧇🧀🍖🍗",
    "Asian Foods": "🍱🍘🍙🍚🍛🍜🍠🍢🍣🍤🍥🥮🍡🥟🥠🥡",
    "Sweets & Desserts": "🍦🍧🍨🍩🍪🎂🍰🧁🥧🍫🍬🍭🍮🍯",
    Drinks: "💧🍼🥛🫖🍺🥃🥤🧋🧃🧉",
  },
  lunchboxes: [
    { name: "Vihaan", age: 6, box: "🥓🍼🍖💧🥛🫒🍙🍮🍙🍑🥓🍚🥭" }, // no veggies // dessert // preparedFoods
    { name: "Sonny", age: 6, box: "🥦🥙🍫🧉🍄🥒🍔🥛" }, // dessert
    { name: "Hannah", age: 10, box: "🥪🍏🥨🍕🍏️🍜🍼" }, // no veggies // preparedFoods
    { name: "Usman", age: 5, box: "💧🧉🍄🧅" },
    // …
  ],
};

/**
 * ------------------
 *
 * Step 2:
 * Make targets box options iterable
 *
 * ------------------
 */

const veggies = Array.from(input.boxoptions.Vegetables).filter(
  (veggy) => veggy.length > 1 // filter out any weird character leftovers (like truthy empty strings!)
);
const desserts = Array.from(input.boxoptions["Sweets & Desserts"]).filter(
  (dessert) => dessert.length > 1
);
const preparedFoods = Array.from(input.boxoptions["Prepared Foods"]).filter(
  (food) => food.length > 1
);

/**
 * ------------------
 *
 * Step 3:
 * Sub Routines
 *
 * ------------------
 */

function includesVeggies(lunchbox: Student) {
  const check: Boolean = false;
  const boxItems: string[] = Array.from(lunchbox.box);
  for (const item of boxItems) {
    if (veggies.includes(item)) {
      return true;
    }
  }
  return check;
}

function includesDessert(lunchbox: Student) {
  const check: Boolean = false;
  const boxItems: string[] = Array.from(lunchbox.box);
  for (const item of boxItems) {
    if (desserts.includes(item)) {
      return true;
    }
  }
  return check;
}

function includesPreparedFood(lunchbox: Student) {
  const check: Boolean = false;
  const boxItems: string[] = Array.from(lunchbox.box);
  for (const item of boxItems) {
    if (preparedFoods.includes(item)) {
      return true;
    }
  }
  return check;
}

/**
 * ------------------
 *
 * Step 4:
 * Combine Sub Routines to give final output
 *
 * ------------------
 */

function getChildrenWithoutVeggies(input: Lunches): number {
  let counter = 0;
  input.lunchboxes.forEach((student) => {
    if (!includesVeggies(student)) {
      counter++;
    }
  });
  return counter;
}

function getChildrenWithDessert(input: Lunches): number {
  let counter = 0;
  input.lunchboxes.forEach((student) => {
    if (includesDessert(student)) {
      counter++;
    }
  });
  return counter;
}

function getNamesWithPreparedFood(input: Lunches): string[] {
  const result = input.lunchboxes
    .map((student) => {
      if (includesPreparedFood(student)) {
        return student.name;
      }
    })
    .filter((name) => name !== undefined);
  return result.sort();
}

function getAverageAgeWithPreparedFood(input: Lunches): number {
  const result = input.lunchboxes
    .map((student) => {
      if (includesPreparedFood(student)) {
        return student.age;
      }
    })
    .filter((age) => age !== undefined);
  return result.reduce(
    (prev, curr, _index, array) => (prev + curr) / array.length
  );
}

/**
 * ------------------
 *
 * Step 5:
 * Return End Results
 *
 * ------------------
 */

function main(input: Lunches) {
  return {
    childrenWithoutVeggies: getChildrenWithoutVeggies(input),
    childrenWithDessert: getChildrenWithDessert(input),
    namesWithPreparedFood: getNamesWithPreparedFood(input),
    averageAgeWithPreparedFood: getAverageAgeWithPreparedFood(input),
  };
}

console.log(main(input));
