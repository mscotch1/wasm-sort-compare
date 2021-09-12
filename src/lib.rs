use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn sort(mut list: Vec<i32>) -> Vec<i32> {
    list.sort();
    return list;
}
