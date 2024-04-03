/* eslint-disable @typescript-eslint/no-unused-expressions */
import { highAndLow } from "../../src/template";

describe(`A function that accepts string of numbers as parameter. 
I want to retrieve the lowest and highest value and the highest value should be returned first`, () => {
  describe("First we have to validate if at least one parameter is given", () => {
    it("Function contains five numbers in string format", () => {
      expect(highAndLow("1 2 3 4 5")).toBeTruthy;
    });

    it("Function should return false if no parameter is given", () => {
      expect(highAndLow("1 2 3 4 5")).toBeTruthy;
    });
  });
});
