import { describe, assert, test } from "vitest";
import { getAPIKey } from "./auth.ts"

describe("getApiKey", () => {
  test("function exists", () => {
    assert.isFunction(getAPIKey, "is a function");
  });

});
