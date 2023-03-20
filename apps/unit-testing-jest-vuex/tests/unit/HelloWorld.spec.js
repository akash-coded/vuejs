import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import HelloWorld from "@/components/HelloWorld.vue";

let wrapper;
let store;
let actions;
let mutations;
let state;
const localVue = createLocalVue();
localVue.use(Vuex);

beforeEach(() => {
  actions = {
    addItem: jest.fn(),
    setItems: jest.fn(),
    boughtItem: jest.fn(),
    removeItem: jest.fn(),
  };
  mutations = {
    addItem: jest.fn(),
    setItems: jest.fn(),
    boughtItem: jest.fn(),
    removeItem: jest.fn(),
  };
  state = {
    items: [],
  };
  store = new Vuex.Store({
    state,
    actions,
    mutations,
  });
  wrapper = shallowMount(HelloWorld, {
    propsData: {},
    mocks: {},
    stubs: {},
    methods: {},
    store,
    localVue,
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe("Shopping List Component", () => {
  it("is a Vue instance", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
});
