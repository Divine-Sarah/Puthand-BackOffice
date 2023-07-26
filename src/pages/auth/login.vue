<template>
  <main class="bg-[#B7B7B7] lg:h-screen">
    <div class="flex items-center justify-center lg:h-screen">
      <div class="bg-[#fff] w-[820px] rounded-lg px-[45px] py-[50px]">
        <div class="form">
          <h1 class="pb-4 font-poppins font-extrabold text-4xl text-[#484848]">
            Welcome Back
          </h1>
          <p class="pb-7 font-inter font-medium text-base text-[#484848]">
            We're here to guide you’re back
          </p>
          <section>
            <input
              class="mb-4 app-input"
              type="email"
              name="email"
              id="email"
              autocomplete="email"
              placeholder="Email address"
            />
            <input
              class="mt-4 app-input"
              type="password"
              name="password"
              id="password"
              autocomplete="password"
              placeholder="Password"
            />
          </section>
          <div class="py-7 font-poppins font-semibold text-xs text-[#295F2D]">
            Forgotten Password?
          </div>
          <div>
            <span class="flex">
              <span class="flex gap-1 font-medium font-inter text-appGreen400"
                ><p>No account?</p>
                <button
                  class="underline text-appGreen200"
                  type="button"
                >
                  Sign Up
                </button></span
              >
            </span>
            <div class="mt-7">
              <div class="mx-auto">
                <button
                  type="button"
                  class="w-full rounded-2xl bg-[#2A5E2A] border-[1px] border-[#fff] text-[#fff] py-3 text-[14px] m-3"
                >
                  <!-- <span class="text-base font-bold font-poppins">
                      {{ loading == true ? "loading..." : "Sign In" }}</span
                    > -->
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "login",
  setup() {
    return {};
  },
});
</script>
