use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn sort(mut list: Vec<u32>) -> Vec<u32> {
    list.sort();
    return list;
}
