

var eventBus = new Vue()
Vue.component('product', {
  props: {
    premium: {
      type: Boolean,
      required: true,
    }
  },
  template: `
      <div class="product">

      <div class="product-image">
        <img v-bind:src="image">

      </div>
      <div class="product-info">
        <h1>{{ title }}</h1>
        <h1 v-show="onSale">{{ onSale }}</h1>
        <span v-show="onSale">On Sale</span>

        
        <p v-if="inStock">In Stock</p>
        <!-- <p v-show="inventory <= 10 && inventory > 0">Almost sold out</p> -->
        <p v-else :class="[!inStock ? outOfStockClass: '']" >Out of Stock</p>
       
        <p> Shipping {{shipping}}</p>
        <!-- <p> {{ description }} <p> -->
        <!-- <a :href="url">Click me</a> -->

 <ul>
      <li v-for="detail in details">{{detail}} </li>
    </ul>
          <ul>
            <li v-for="size in sizes">{{size}}</li>
          </ul>

      <button v-on:click="addToCart" 
      :class="{disabledButton: !inStock}"
      :disabled="!inStock">Add to cart</button>
      <button v-on:click="removeFromCart">Remove from cart</button>

      <div v-for="(variant, index) in variants" 
      :key="variant.variantId"
      class="color-box"
      :style="{ backgroundColor: variant.variantColour }"
      @mouseover="updateProduct(index)">
          
      </div>

      </div>
      

<products-tabs :reviews="reviews"></products-tabs>
  
</div>
  `,
  data() {
    return {
      brand: "Vue Mastery",
      product: 'Socks',
      description: 'A warm pair of fuzzy socks',
      // image: './vmSocks-green-onWhite.jpg',
      selectedVariant: 0,
      url: 'https://www.genox.io',
      inventory: 100,
      details: ["80% cotton", "20% polyester", "Gender neutral"],
      // onSale: true,
      outOfStockClass: 'out-of-stock',
      variants: [
        {
          variantId: 2234,
          variantColour: "green",
          variantImage: "./vmSocks-green-onWhite.jpg",
          variantQuantity: 10,
        },
        {
          variantId: 2235,
          variantColour: "blue",
          variantImage: "./vmSocks-blue-onWhite.jpg",
          variantQuantity: 0,
        }
      ],
      sizes: ["S", "M", "L"],
      reviews: []
   
    }
  }
    ,
      computed: {
      title() {
        return this.brand + ' ' + this.product
      },
      image() {
        return this.variants[this.selectedVariant].variantImage
      },
      inStock() {
        return this.variants[this.selectedVariant].variantQuantity
      },
      onSale() {
        return this.brand + ' ' + this.product
      },
        shipping() {
          if (this.premium) {
            return "Free"
          }
          return "2.99"
        }
    },
    methods: {
      addToCart() {
        this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)
      },
      removeFromCart() {
        this.$emit('remove-from-cart', this.variants[this.selectedVariant].variantId)
      },
      updateProduct(index) {
        // this.image = variantImage
        console.log(index)
        this.selectedVariant = index;
      },
      addReview(productReview) {
        this.reviews.push(productReview)
      }
   
    }, 
    mounted() {
      eventBus.$on('review-submitted', productReview => {
         this.reviews.push(productReview)
    })
  }
   

});

Vue.component('product-details', {
  props: {
    details: {
      type: String,
      required: true,
    }
  },
  template: `
   <ul>
      <li v-for="detail in details">{{detail}} </li>
    </ul>`
  , 
  data() {
    return {
      // details: ,
      }
    }
})

Vue.component('product-review', {
  template: `
  <form class="review-form" @submit.prevent="onSubmit">

    <p v-if="errors.length">
      <b>Please correct the following error(s):</b>
      <ul>
        <li v-for="error in errors">{{ error }}</li>
      </ul>
    </p>
      <p>
        <label for="name">Name:</label>
        <input id="name" v-model="name" placeholder="name">
      </p>

        <p>
        <label for="recommend">Would you recommend this product?</label>      
        <div>
         <input type="radio" id="recommend" name="recommend" v-model="recommend" >
        <label for="recommend">Yes</label>
        </div>
        <div>

       
        <input type="radio" id="recommend" name="recommend"  v-model="recommend">
        <label for="recommend">No</label>
        
        </div>
        

      </p>
      
      <p>
        <label for="review">Review:</label>      
        <textarea id="review" v-model="review"></textarea>
      </p>

    
      
      <p>
        <label for="rating">Rating:</label>
        <select id="rating" v-model.number="rating">
          <option>5</option>
          <option>4</option>
          <option>3</option>
          <option>2</option>
          <option>1</option>
        </select>
      </p>
          
      <p>
        <input type="submit" value="Submit">  
      </p>    
    
    </form>`,
  data() {
    return {
      name: null,
      review: null, 
      rating: null,
      recommend: true,
      errors: []

    }
  },
  methods: {
    onSubmit() {
if (this.name && this.review && this.rating) {
      let productReview = {
        name: this.name,
        review: this.review,
        rating: this.rating,
        recommend: this.recommend
      }
      eventBus.$emit('review-submitted', productReview)

      this.name = null
      this.review = null
      this.rating = null
  this.recommend = false
    } else {
  if (!this.name) this.errors.push("Name required.")
  if (!this.review) this.errors.push("Review required.")
  if (!this.rating) this.errors.push("Rating required.")
  if (!this.recommend) this.errors.push("Recommend required.")
    }
  },
  }
})

Vue.component('products-tabs', {
  props: {
    reviews: {
      type: Array,
      required: true,
    }
  },
  template: `<div>
  <span class="tab"
        :class="{activeTab: selectedTab === tab}"
        v-for="(tab, index) in tabs" 
        :key="index"
        @click="selectedTab = tab">
        {{tab}}
        </span>


    <div v-show="selectedTab === 'Review'">
        <h2>Reviews</h2>
        <p v-if="!reviews.length">There are no reviews yet.</p>
        <ul>
          <li v-for="review in reviews">
          <p>{{ review.name }}</p>
          <p>Rating: {{ review.rating }}</p>
          <p>{{ review.review }}</p>
          <p>Would Recommend: {{ review.recommend }}</p>
          </li>
        </ul>
    </div>
      
    <product-review v-show="selectedTab === 'Make a Review'"></product-review>   


    </div>
  `,
  data() {
    return {
      tabs: ['Review', 'Make a Review'],
      selectedTab: 'Reviews'
    }
  }
});

var app = new Vue({
  el: '#app',
  data: {
    premium: true,
    details: ["80% cotton", "20% polyester", "Gender neutral"],
    cart: [],
  },
  methods: {
    updateCart(id) {
      console.log(this.cart)
      this.cart.push(id)
    },
    removeFromCart(id) {
      console.log(id)
      console.log(this.cart)
      this.cart.pop()
    },

  }
 
})


