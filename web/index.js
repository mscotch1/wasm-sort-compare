function time(callback) {
  console.time();
  const init_timestamp = new Date();
  callback();
  console.timeEnd();
  return (new Date()) - init_timestamp;
}

function compare_sort_methods(
  method1,
  method2,
  samples
) {
  const method1_list = samples;
  const method2_list = new Int32Array(samples);

  const method1_time = time(() => {
    console.trace(method1(method1_list));
  });
  const method2_time = time(() => {
    console.trace(method2(method2_list));
  });

  return [method1_time, method2_time];
}

function create_row(...cell_contents) {
  const row = document.createElement('tr');
  cell_contents.forEach((str) => {
    const cell = document.createElement('td');
    cell.innerText = str;
    row.append(cell);
  })

  return row;
}

import("wasm-sort-compare/wasm_sort_compare").then((wasm) => {
  function run_comparison() {
    this.count = (this.count || 0) + 1;
    const num_samples = document.getElementById('samples').value;
    const samples = new Int32Array(num_samples);
    samples.forEach((_v, i) => samples[i] = num_samples * Math.random());

    const [js_time, wasm_time] = compare_sort_methods(
      (arr) => {
        const new_arr = new Int32Array(arr);
        new_arr.sort();
        return new_arr;
      },
      wasm.sort,
      samples,
    );

    document.getElementById('results').append(
      create_row(this.count, num_samples, js_time, wasm_time),
    );
  }

  document.getElementById('form').onsubmit = (e) => {
    e.preventDefault();
    run_comparison();
  }
});