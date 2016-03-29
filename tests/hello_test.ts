import * as assert from "power-assert";
import {list} from "../src/mylib";

describe("Hello", function(){
  assert.deepEqual([1, 2], list);
});