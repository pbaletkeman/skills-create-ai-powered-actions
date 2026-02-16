const { run } = require("./main");

module.exports = { run };

if (require.main === module) {
	run();
}