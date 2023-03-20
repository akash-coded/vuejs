import HelloWorld from "@/components/HelloWorld.vue";
import { shallowMount } from "@vue/test-utils";

describe("HelloWorld", () => {
  it("should render correct contents", () => {
    const wrapper = shallowMount(HelloWorld);
    let header = wrapper.find(".htmlClass h1");
    expect(header.exists()).toBe(true);
    expect(header.text()).toBe("Vue is awesome.");
  });

  it("check text content to be as defined in variable", () => {
    const wrapper = shallowMount(HelloWorld, {
      data() {
        return {
          title: "I love Vue.",
        };
      },
    });
    let header = wrapper.find(".htmlClass h1");
    expect(header.text()).toBe("I love Vue.");
  });
});
