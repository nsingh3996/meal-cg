import MealWorld from '@/components/MealWorld.vue'
import { shallowMount, createLocalVue } from "@vue/test-utils";
import VueRouter from "vue-router";
import { routes } from "@/router/index";

describe("In MealWorld Component", () => {
  let Wrapper;
  let mockStore;
  const router = new VueRouter({ routes });

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    mockStore = {
      state: {
        meal: {}
      },
      dispatch: jest.fn(),
    };


    Wrapper = shallowMount(MealWorld, {
      mocks: {
        $store: mockStore,
      },
      localVue,
      router,
    });
  });

  // afterEach(() => {
  //   Wrapper.destroy();
  // });

  it("renders the correct markup", () => {
    expect(Wrapper.html()).toContain('<div class="container-fluid">');
  });

  it("it should have a div element with class=container-fluid", () => {
    expect(Wrapper.attributes("class")).toBe("container-fluid");
  });

  it("nav is present or not", () => {
    expect(Wrapper.find("nav").exists()).toBe(true);
  });

});