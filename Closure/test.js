// Closure is a mechanism where an inner function remembers and can access
// variables of its outer function even after the outer function has finished execution.

function outer() {
  let count = 0;
  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

const fn = outer();

fn();
fn();
fn();
