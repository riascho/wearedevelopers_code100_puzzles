# [The Lunchbox challenge](https://devrel.wearedevelopers.com/code100-puzzles/028-lunchbox/)

You get a JSON object that contains a list of food items and an array of lunchboxes of various children.

```
{
  boxoptions: {
    Fruits: "🍇🍈🍉🍊🍋🍌🍍🥭🍎🍏🍐🍑🍒🍓🫐🥝🍅🫒🥥",
    Vegetables: "🥑🍆🥔🥕🌽🌶️🫑🥒🥬🥦🧄🧅🥜🫘🌰🫚🫛🍄‍🟫",
    "Prepared Foods":
      "🍞🥐🥖🫓🥨🥯🥞🧇🧀🍖🍗🥩🥓🍔🍟🍕🌭🥪🌮🌯🫔🥙🧆🥚🍳🥘🍲🫕🥣🥗🍿🧈🧂🥫🍝",
    "Asian Foods": "🍱🍘🍙🍚🍛🍜🍠🍢🍣🍤🍥🥮🍡🥟🥠🥡",
    "Sweets & Desserts": "🍦🍧🍨🍩🍪🎂🍰🧁🥧🍫🍬🍭🍮🍯",
    Drinks: "💧🍼🥛🫖🍺🥃🥤🧋🧃🧉",
  },
  lunchboxes: [
    { name: "Vihaan", age: 6, box: "🥓🍼🍖💧🥛🫒🍙🍮🍙🍑🥓🍚🥭" },
    { name: "Sonny", age: 6, box: "🥦🥙🍫🧉🍄🥒🍔🥛" },
    { name: "Hannah", age: 10, box: "🥪🍏🥨🍕🍏️🍜🍼" },
    { name: "Usman", age: 5, box: "💧🧉🍄🧅" },
  ],
}
```

Analyse the data with a script that returns:

- **childrenWithoutVeggies**: the number of children that have no vegetables
- **childrenWithDessert**: the number of children that have Sweets & Desserts
- **namesWithPreparedFood**: an array of names of children with prepared food (sorted alphabetically)
- **averageAgeWithPreparedFood**: the average age of the children with prepared food

For example:

```
{
  childrenWithoutVeggies: 17,

  childrenWithDessert: 73,

  namesWithPreparedFood: [
    "Cillian",
    "Colton",
    "Dawid",
    "Dawud",
    "Demi",
    "Digby",
    "Dougie",
    "Elara",
    "Elias",
    "Elise",
    "Sienna",
    "Sonny",
    "Teodora",
    "Theodore",
    "Vihaan",
    "Yusuf",
    "Zadie",
    "Zendaya",
    "Zohaan",
  ],

  averageAgeWithPreparedFood: 4.3,
}
```
