const { createApp } = Vue;
createApp({
  data() {
    return {
      isHidden: true,
      watches: [
        {
          id: 1,
          title: "Thunderbird Titanium Watch",
          description: "Analog Wristwatch Made Out of 904L steel",
          price: 5600,
          image: "./img/yash-parashar-x7_oyDE5Hro-unsplash.jpg",
          addedToCart: false,
          qty: 1,
        },
        {
          id: 2,
          title: "Lambton Leather Watch",
          description: "A Stylish, Classic Watch in Clean Design.",
          price: 3200,
          image: "./img/ko.jpg",
          addedToCart: false,
          qty: 1,
        },
        {
          id: 3,
          title: "Gigantes Gold Watch",
          description: "Smaller Watch With a Golden Band and Sapphire Glass.",
          price: 3200,
          image: "./img/laura-chouette-8gW7dBIxQJM-unsplash.jpg",
          addedToCart: false,
          qty: 1,
        },

        {
          id: 4,
          title: "Serpent Steel Watch",
          description: "Digital Watch Made Out of 904L steel, With a Wider Wristband",
          price: 3200,
          image: "./img/olga-nayda-dB3pkARCxHI-unsplash.jpg",
          addedToCart: false,
          qty: 1,
        },

        {
          id: 5,
          title: "Pegasus Power Watch",
          description: "Analog Watch Made Out of 904L Steel",
          price: 3200,
          image: "./img/yash-parashar-VfozQD-IgdA-unsplash.jpg",
          addedToCart: false,
          qty: 1,
        },

        {
          id: 6,
          title: "Centaur Classic Watch",
          description: "A Stylish, Classic Watch in Clean Design.",
          price: 3200,
          image: "./img/annegret-kammer-uuBwaKIc9Kg-unsplash.jpg",
          addedToCart: false,
          qty: 1,
        },
      ],
      watchCart: [],
      
      itemName: "watchTitle",
    };
  },
  methods: {
   

    setOne: function (aWatch) {
      if (aWatch.qty < 1) {
        aWatch.qty = 1;
      }
    },

    addToCart: function (aWatch) {
      let idsInCart = this.watchCart.map((item) => item.id);
      this.itemName = aWatch.title;
      addItembtnMsg();

      if (idsInCart.includes(aWatch.id)) {
        aWatch.qty++;
      } else {
        this.watchCart.push(aWatch);
      }
    },
    removeFromCart: function (aWatch) {
      for (var i = 0; i < this.watchCart.length; i++) {
        if (this.watchCart[i].id === aWatch.id) {
          this.watchCart.splice(i, 1);
          i--;
        }
      }
     
    },
    toggle() {
      this.isHidden = this.isHidden ? false : true;
    },
    emtpyArray() {
      this.watchCart.forEach((watch) => {
        watch.addedToCart = false;
        watch.qty = 1;
      });
      this.watchCart.length = 0;
      alert("Thank you for your purchase!");
    },
  },
  computed: {
    itemsInCart() {
      let cartItems = 0;
      if (this.watchCart.length > 0) {
        cartItems = this.watchCart.reduce((total, item) => total + item.qty, 0);
        console.log(cartItems);
      }
      return cartItems;
    },
    cartTotal() {
      return this.watchCart.reduce(
        (total, item) => total + item.price * item.qty,
        0
      );
    },
  },
}).mount("#app");
