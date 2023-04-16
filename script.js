gsap.registerPlugin(Draggable);
Draggable.create("#c", {
	type: "x,y",

	bounds: document.getElementById("container"),

	onClick: function () {
		console.log("clicked");
	},
	onDragEnd: function () {
		document.querySelector(".drag").remove();
	},
});
Draggable.create("#o", {
	type: "x,y",

	bounds: document.getElementById("container"),

	onClick: function () {
		console.log("clicked");
	},
	onDragEnd: function () {
		document.querySelector(".drag").remove();
	},
});
Draggable.create("#f", {
	type: "x,y",

	bounds: document.getElementById("container"),

	onClick: function () {
		console.log("clicked");
	},
	onDragEnd: function () {
		document.querySelector(".drag").remove();
	},
});
Draggable.create("#f2", {
	type: "x,y",

	bounds: document.getElementById("container"),

	onClick: function () {
		console.log("clicked");
	},
	onDragEnd: function () {
		document.querySelector(".drag").remove();
	},
});
Draggable.create("#e", {
	type: "x,y",

	bounds: document.getElementById("container"),

	onClick: function () {
		console.log("clicked");
	},
	onDragEnd: function () {
		document.querySelector(".drag").remove();
	},
});

Draggable.create("#e2", {
	type: "x,y",

	bounds: document.getElementById("container"),

	onClick: function () {
		console.log("clicked");
	},
	onDragEnd: function () {
		document.querySelector(".drag").remove();
	},
});
Draggable.create("#full", {
	type: "rotation",

	bounds: document.getElementById("container"),

	onClick: function () {
		console.log("clicked");
	},
	onDragStart: function () {
		document.querySelector(".spin2").remove();
	},
});
Draggable.create("#empty", {
	type: "rotation",

	bounds: document.getElementById("container"),

	onClick: function () {
		console.log("clicked");
	},
	onDragStart: function () {
		document.querySelector(".spin").remove();
	},
});


gsap.from(".letters", {
	duration: 2,
	scale: 0.5,
	opacity: 0,
	delay: 0.5,
	stagger: 0.2,
	ease: "elastic",
	force3D: true,
});
gsap.from(".drag", {
	duration: 2,
	scale: 0.5,
	opacity: 0,
	delay: 0.5,
	stagger: 0.2,
	ease: "elastic",
	force3D: true,
});
gsap.from(".sp", {
	duration: 2,
	scale: 0.5,
	opacity: 0,
	delay: 0.5,
	stagger: 0.2,
	ease: "elastic",
	force3D: true,
});
