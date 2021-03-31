import ErrorPage from '@/components/ErrorPage.vue'
import { shallowMount, createLocalVue } from "@vue/test-utils";
import VueRouter from "vue-router";
import { routes } from "@/router/index";

describe("In ErrorPage Component", () => {
  let Wrapper;
  const router = new VueRouter({ routes });

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    // mockStore = {
    //   state: {
    //     meal: {}
    //   },
    //   dispatch: jest.fn(),
    // };


    Wrapper = shallowMount(ErrorPage, {
    //   mocks: {
    //     $store: mockStore,
    //   },
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

//   it("nav is present or not", () => {
//     expect(Wrapper.find("nav").exists()).toBe(true);
//   });

});