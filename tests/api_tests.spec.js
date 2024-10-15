import { test, expect } from "@playwright/test";

test("API GET Request", async ({ request }) => {
  const response = await request.get("https://reqres.in/api/users/2");
  expect(response.status()).toBe(200);
  const text = await response.text();
  expect(text).toContain("Janet");
  console.log(await response.json());
});

test("API POST Request", async ({ request }) => {
  const response = await request.post("https://reqres.in/api/users", {
    data: {
      name: "Maaz",
      job: "SQA Engineer",
    },
  });
  expect(response.status()).toBe(201);
  const text = await response.text();
  expect(text).toContain("Maaz");
  console.log(await response.json());
});

test("API PUT Request", async ({ request }) => {
  const response = await request.put("https://reqres.in/api/users/2", {
    data: {
      name: "Maaz",
      job: "SQA Engineer",
    },
  });
  expect(response.status()).toBe(200);
  const text = await response.text();
  expect(text).toContain("Maaz");
  console.log(await response.json());
});

test("API PATCH Request", async ({ request }) => {
  const response = await request.patch("https://reqres.in/api/users/2", {
    data: {
      name: "Maaz Imtiaz",
    },
  });

  expect(response.status()).toBe(200);
  const jsonResponse = await response.json();
  expect(jsonResponse.name).toBe("Maaz Imtiaz");
  console.log(jsonResponse);
});

test("API DELETE Request", async ({ request }) => {
  const response = await request.delete("https://reqres.in/api/users/2");
  expect(response.status()).toBe(204);
});
