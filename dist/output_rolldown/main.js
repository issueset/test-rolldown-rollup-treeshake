//#region src/bar.js
const bar = "BAR";

//#endregion
//#region src/foo.js
const foo = false;
var foo_default = foo;

//#endregion
//#region src/main.js
function main() {
	if (foo_default) console.warn("I expected this warning to be removed in the final bundle.");
	console.log(bar);
}

//#endregion
export { main };