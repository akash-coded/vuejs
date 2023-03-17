<template>
  <div class="container">
    <div id="app">
      <p>Text field:</p>
      <input type="text" v-model="message" placeholder="You can edit this">
      <p>Message is: {{ message }}</p>
      <hr>
      <p>Multiline text area:</p>
      <textarea v-model="multiLineMessage" placeholder="Add multiple lines"></textarea>
      <p style="white-space: pre-line;">{{ multiLineMessage }}</p>
      <hr>
      <input type="checkbox" id="checkbox" v-model="checked">
      <label for="checkbox">{{ checked }}</label>
      <hr>
      <input type="checkbox" id="toggleBox" v-model="toggle" true-value="yes" false-value="no">
      <label for="checkbox">{{ toggle }}</label>
      <hr>
      <input type="checkbox" id="toggleBox2" v-model="dynamicToggle" :true-value="dynamicTrueValue"
        :false-value="dynamicFalseValue">
      <label for="checkbox">{{ dynamicToggle }}</label>
      <hr>
      <div>
        <input type="checkbox" id="checkbox1" value="Jack" v-model="checkedNames">
        <label for="checkbox1">Jack</label>
        <input type="checkbox" id="checkbox2" value="John" v-model="checkedNames">
        <label for="checkbox2">John</label>
        <input type="checkbox" id="checkbox3" value="Mike" v-model="checkedNames">
        <label for="checkbox3">Mike</label>
        <p>Checked names: {{ checkedNames }}</p>
      </div>
      <hr>
      <input type="radio" id="radio1" value="one" v-model="picked">
      <label for="radio1">One</label>
      <input type="radio" id="radio2" value="two" v-model="picked">
      <label for="radio2">Two</label>
      <p>Picked: {{ picked }}</p>
      <hr>
      <input type="radio" id="radio3" :value="firstChoice" v-model="pickedDynamic">
      <label for="radio3">{{ firstChoice }}</label>
      <input type="radio" id="radio4" :value="secondChoice" v-model="pickedDynamic">
      <label for="radio4">{{ secondChoice }}</label>
      <p>Picked: {{ pickedDynamic }}</p>
      <hr>
      <div>
        <select v-model="selected">
          <option disabled value="">Please select one</option>
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>
        <p>Selected: {{ selected }}</p>
      </div>
      <hr>
      <div>
        <select multiple v-model="selectedOptions">
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>
        <br>
        <p>Selected: {{ selectedOptions }}</p>
      </div>
      <hr>
      <select v-model="optionSelected">
        <option v-for="option in options" :key="option.value" :value="option.value">
          {{ option.text }}
        </option>
      </select>
      <p>Selected: {{ optionSelected }}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      message: '',
      multiLineMessage: '',
      checked: false,
      toggle: 'no',
      dynamicToggle: 'Options API',
      dynamicTrueValue: 'Options API',
      dynamicFalseValue: 'Composition API',
      picked: '',
      pickedDynamic: '',
      firstChoice: 'Veg',
      secondChoice: 'Non-Veg',
      checkedNames: [],
      selected: '',
      selectedOptions: [],
      options: [
        { text: 'One', value: 'A' },
        { text: 'Two', value: 'B' },
        { text: 'Three', value: 'C' }
      ],
      optionSelected: '',
    }
  }
}
</script>

<style>
@import 'App.css';
</style>
