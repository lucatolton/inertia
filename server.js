const http = require("http");
const https = require("https");
const fs = require("fs");
const tldEnum = require("tld-enum");
const config = require("./public/assets/config.json");
const proxy = new (require("./lib/index"))(config.prefix, {
	localAddress: config.localAddresses ? config.localAddresses : false,
	blacklist: config.blockedHostnames ? config.blockedHostnames : false
});

const index_file = "index.html";
const atob = (str) => new Buffer.from(str, "base64").toString("utf-8");
const app = (req, res) => {
	// HTTP(S) proxy.
	if (req.url.startsWith(config.prefix)) return proxy.http(req, res);

	req.pathname = req.url.split("#")[0].split("?")[0];
	req.query = {};
	req.url
		.split("#")[0]
		.split("?")
		.slice(1)
		.join("?")
		.split("&")
		.forEach(
			(query) =>
				(req.query[query.split("=")[0]] = query
					.split("=")
					.slice(1)
					.join("="))
		);

	if (req.query.url && req.pathname == `${config.prefix}`) {
		var url = atob(req.query.url);

		if (url.startsWith("%google.search%")) {
			url = url.substring(15);
			const replace = true;
		} else {
			let tlds = [];

			for (var i = 0; i < tldEnum.list.length; i++) {
				tlds[i] = "." + tldEnum.list[i];
			}

			for (var i of tlds) {
				if (url.includes(i)) {
					var replace = false;
					break;
				} else {
					var replace = true;
				}
			}
		}

		if (replace == true) {
			url.replace(" ", "+");
			url = `https://google.com/search?q=${url}`;
		}

		if (url.startsWith("https://") || url.startsWith("http://")) {
		} else {
			url = "http://" + url;
		}

		return (
			res.writeHead(301, {
				location: config.prefix + proxy.proxifyRequestURL(url)
			}),
			res.end("")
		);
	}

	// General file server.
	const publicPath = __dirname + "/public" + req.pathname;

	const error = () => (
		(res.statusCode = 404),
		res.end(
			fs
				.readFileSync(__dirname + "/lib/error.html", "utf-8")
				.replace("%ERR%", `Cannot ${req.method} ${req.pathname}`)
		)
	);

	fs.lstat(publicPath, (err, stats) => {
		if (err) return error();

		if (stats.isDirectory())
			fs.existsSync(publicPath + index_file)
				? fs.createReadStream(publicPath + index_file).pipe(res)
				: error();
		else if (stats.isFile())
			!publicPath.endsWith("/")
				? fs.createReadStream(publicPath).pipe(res)
				: error();
		else error();
	});
};

// Websocket proxy.
const server = http.createServer(app);
proxy.ws(server);

// Server
const port = config.port || process.env.PORT || "8080";
const ip = config.ip || process.env.IP || "0.0.0.0";
server.listen(port, ip);
console.log(`http://${port}:${ip}`);
