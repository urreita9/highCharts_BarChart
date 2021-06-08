const ev_pro_pct = document.getElementById("ev_pro_pct");
const ipo_proceeds = document.getElementById("ipo_proceeds");
const red_pct = document.getElementById("red_pct");
let data = [];

// First Chart on page load

window.onload = () => {
	data = [
		{
			name: "Slow",
			y: 4.1758847,
			color: "#074b69",
		},
		{ name: "Mid-Slow", y: 4.5487307, color: "#0d7ea2" },
		{ name: "Mid-Fast", y: 5.7110366, color: "#97d4ea" },
		{ name: "Fast", y: 7.107384, color: "#dd7533" },
	];
	const array = data.map((item) => item.y);
	array.sort(function (a, b) {
		return a - b;
	});
	//MEDIAN
	const median = (array[1] + array[2]) / 2;
	const medianRounded = (Math.round(median * 100) / 100).toFixed(2);

	//Average
	const average = (array[0] + array[1] + array[2] + array[3]) / 4;
	const averageRounded = (Math.round(average * 100) / 100).toFixed(2);

	initializeChart(
		data,
		"Target Enterprise Value",
		medianRounded,
		averageRounded
	);
};
//Charts on button click

ev_pro_pct.addEventListener("click", (e) => {
	data = [
		{
			name: "Slow",
			y: 4.1758847,
			color: "#074b69",
		},
		{ name: "Mid-Slow", y: 4.5487307, color: "#0d7ea2" },
		{ name: "Mid-Fast", y: 5.7110366, color: "#97d4ea" },
		{ name: "Fast", y: 7.107384, color: "#dd7533" },
	];
	const array = data.map((item) => item.y);
	array.sort(function (a, b) {
		return a - b;
	});
	//MEDIAN
	const median = (array[1] + array[2]) / 2;
	const medianRounded = (Math.round(median * 100) / 100).toFixed(2);

	//Average
	const average = (array[0] + array[1] + array[2] + array[3]) / 4;
	const averageRounded = (Math.round(average * 100) / 100).toFixed(2);

	initializeChart(data, e.target.value, medianRounded, averageRounded);
});

ipo_proceeds.addEventListener("click", (e) => {
	data = [
		{
			name: "Slow",
			y: 178.1538462,
			color: "#074b69",
		},
		{ name: "Mid-Slow", y: 183.8809524, color: "#0d7ea2" },
		{ name: "Mid-Fast", y: 239.3658537, color: "#97d4ea" },
		{ name: "Fast", y: 342.65, color: "#dd7533" },
	];
	const array = data.map((item) => item.y);
	array.sort(function (a, b) {
		return a - b;
	});
	//MEDIAN
	const median = (array[1] + array[2]) / 2;
	const medianRounded = (Math.round(median * 100) / 100).toFixed(2);

	//Average
	const average = (array[0] + array[1] + array[2] + array[3]) / 4;
	const averageRounded = (Math.round(average * 100) / 100).toFixed(2);

	initializeChart(data, e.target.value, medianRounded, averageRounded);
});

red_pct.addEventListener("click", (e) => {
	data = [
		{
			name: "Slow",
			y: 48.5128205,
			color: "#074b69",
		},
		{ name: "Mid-Slow", y: 49.047619, color: "#0d7ea2" },
		{ name: "Mid-Fast", y: 27.6829268, color: "#97d4ea" },
		{ name: "Fast", y: 14.975, color: "#dd7533" },
	];
	const array = data.map((item) => item.y);
	array.sort(function (a, b) {
		return a - b;
	});
	//MEDIAN
	const median = (array[1] + array[2]) / 2;
	const medianRounded = (Math.round(median * 100) / 100).toFixed(2);

	//Average
	const average = (array[0] + array[1] + array[2] + array[3]) / 4;
	const averageRounded = (Math.round(average * 100) / 100).toFixed(2);

	initializeChart(data, e.target.value, medianRounded, averageRounded);
});

function initializeChart(data, value, median, average) {
	console.log(value);
	Highcharts.chart("container", {
		chart: {
			type: "column",
		},
		title: {
			text: value,
		},
		subtitle: {
			text: `Average: ${average}`,
		},

		xAxis: {
			categories: ["Slow", "Mid-Slow", "Mid-Fast", "Fast"],
			crosshair: true,
		},
		yAxis: {
			min: 0,
			title: {
				text: "Mean",
			},
		},
		tooltip: {
			headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
			pointFormat:
				'<tr><td padding:0">{series.name}: </td>' +
				'<td style="padding:0"><b>{point.y:.2f} </b></td></tr>' +
				`<tr><td padding:0"> Median: </td>
                <td style="padding:0"><b>${median} </b></td></tr>`,
			footerFormat: "</table>",
			shared: true,
			useHTML: true,
		},
		plotOptions: {
			column: {
				pointPadding: 0.2,
				borderWidth: 0,
			},
		},
		series: [
			{
				name: value,
				data: data,
			},
		],
	});
}
